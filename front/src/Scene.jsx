import { Canvas, useThree, extend } from "@react-three/fiber";
import { Physics, Debug } from "@react-three/cannon";
import Car from "./Car.jsx";
import io from "socket.io-client"
import { useState, useEffect, useRef, React, Suspense } from "react";
import { OrbitControls, useProgress } from '@react-three/drei';
import Interface from "./Interface.jsx"
import {Ground} from "./Ground.jsx"
import useGame from "./stores/useGame.jsx";
import BgmSound from "./sound/BgmSound.jsx";
import LoadingPage from "./utils/Loading.jsx";
import Map2 from "./Map2/Map2.jsx"
import Map1 from "./Map1/Map1.jsx"
import ColliderWall from "./ColliderWall.jsx"
import {LeftAndRightObstacle, SpinObstacle} from "./components/MoveObstacle.jsx";


export const socket = io("http://localhost:5000")

export default function Scene() {



  // 플레이어 받아서 플레이어 마다 Car 컴포넌트 생성
  const [players, setPlayers] = useState([])

  // 상태 체크하여 
  const [state, setState] = useState(false)
 
  // 카운트 다운 관련
  let count = useGame((state)=> state.count)
  let Countdown = useGame((state)=> state.Countdown)
  var countIntervalRef = useRef(null)
  const start = useGame((state) => state.start)

  //count값 바뀔 때마다 
  useEffect(()=>{
    if (count === 0){
      setState(true)
      //count 가 -2 가 되면 Start 문자가 사라지게
    } else if (count === -2) {
      clearInterval(countIntervalRef.current)
      start()
    }
  },[count])

  const startCountdown = ()=>{
   countIntervalRef.current = setInterval(()=>{
      Countdown()
    }, 1000)
  }
  // 카운트 다운 관련 끝

/////////// 핑관련 변수들
  const [averagePing, setAveragePing] = useState(null);
  const [opponentPing, setOpponentPing] = useState(null);
  let cnt = 0;
  let totalDuration = 0;

  const startPingCheck = async () => {
    //핑 체크 0.1초 간격
    const pingCheck = setInterval(() => {
      // date 
      const start = Date.now();
      socket.emit("ping", () => {
        totalDuration += Date.now() - start;
        cnt++;
      });

    }, 100);
    // 1초동안 핑체크 후 average 측정
    const pingTImeOut = setTimeout(() => {
      //핑체크 interval 중단
      clearInterval(pingCheck); 
      // 평균 핑 계산 ms이니까 소수점 둘째자리면 충분하다고 생각
      const average = parseFloat((totalDuration / cnt).toFixed(2));
      setAveragePing(average);
      socket.off("ping");
    }, 2000);

    // 핑타임아웃 중단
    return () => (clearTimeout(pingTImeOut))
  }

///////////////////////// 핑관련 끝
 
  // 유저 접속 관련
  useEffect(() => {
    // 접속한 유저 목록 갱신
    function onPlayers(backEndPlayers){ 
      const playersArray = Object.values(backEndPlayers);
      setPlayers(playersArray)
    }

    // 내가 설정한 최대 인원 숫자와 현재 인원이 같으면 핑체크 시작
    socket.on("clientCount", ()=>{

        const pingCheck = setTimeout(() => {
          startPingCheck()
        }, 4000)

        return () => clearTimeout(pingCheck)
    })

    socket.on("opponentPing", (pingData)=>{
      console.log("oppo ping :", pingData.ping);
      setOpponentPing(pingData.ping)
    })

     // 스타트 시그널을 받으면 
    socket.on("startSignal", (allPings)=>{

      // 상대핑의 평균을 구하여 
      const allPingsArray = Object.values(allPings);
      const opponentPingData = allPingsArray.find(ping => ping.id !== socket.id);
      const myPingData = allPingsArray.find(ping => ping.id === socket.id);
      console.log(allPingsArray);
      // const myPing = allPingsArray.find(ping => ping.id === socket.id);
      console.log(opponentPingData.ping/2);
      const startSignal = setTimeout(() => {
        if(count > -3) startCountdown()
      }, opponentPingData.ping/2)

      return () => clearTimeout(startSignal)
    })
 
    // // 서버 시간 검증
    // socket.on("timeCheck", (serverTimeStart)=>{
    //   console.log("in time check");
    // })

    //유저 업데이트
    socket.on("updatePlayers", onPlayers)

    return (() => {
      socket.off("updatePlayers", onPlayers);
    })
  },[])

  // 상대에게 내 핑 상태를 보냄
  useEffect(() => {
    const sendPingResultToServer = () => {
      // 핑 결과를 서버로 보냅니다.
      socket.emit("pingResult", averagePing );
      console.log("my ping :", averagePing);
    };

    if (averagePing !== null) {
      sendPingResultToServer();
    }
  },[averagePing])

  // 유저 접속 관련 끝
  // 접속 로직 수정해야함
  // 처음에 두명이 모두 들어왔을때 핑체크를 해야함
  // 핑체크한후 각 클라이언트에게 상대핑을 가르쳐줌
  // 그 후 서버시간을 받아서 저장한후 서버시간에 핑 시간을 더해서

  // console.log(averagePing !== null ? averagePing : "Average ping not available")

  // 로딩 관련 끝
  
  return (
    <>
      <Interface/>
      {/* <BgmSound /> */}
      <Canvas shadows camera={{ fov:75, position:[1.5, 8, 4]}}>
        <ambientLight intensity={3}/>
        {/*position={[0, 5, 5]}*/}
        <directionalLight
    castShadow
    intensity={4}
    shadow-camera-top={100}
    shadow-camera-bottom={-100}
    shadow-camera-left={-100}
    shadow-camera-right={100}
    shadow-mapSize-height={512*4}
    shadow-mapSize-width={512*4}
    position={[50, 20, -80]}
    color="#ffffff"
  />
        <OrbitControls />
        <Physics gravity={[0, -2.6, 0]}>
          <Debug>
          <axesHelper scale={50}/>
          
            <Suspense fallback={<LoadingPage />}>
              <ColliderWall/>
              {/*<Ground rotation={[Math.PI/2, 0, 0]}/>*/}
              <Map1 position={[0, 0, 0]}/>
              <Map2 position={[0, 0, -60]}/>
            
            {
              players.map((player, index) => (
                <Car id={player.id} key={player.id} position={player.position} rotation={[0, Math.PI, 0]} color={player.color} state={state} index={index} receiveShadow castShadow/>
              ))
            }
            {/* <Ground /> */}
            {/* <Library position={[-40, 0, 39]}/> */}
            {/* 물음표박스 장애물 */}
            <SpinObstacle/>
            <LeftAndRightObstacle/>
            </Suspense>
         </Debug>
        </Physics>
      </Canvas>
    </>
  );
}
