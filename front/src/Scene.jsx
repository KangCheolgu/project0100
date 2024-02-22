import { Canvas } from "@react-three/fiber";
import { Physics, Debug } from "@react-three/cannon";
import Car_App from "./Car.jsx";
import { useState, useEffect, useRef, React, Suspense, useLayoutEffect } from "react";
import { OrbitControls, Stats, PerspectiveCamera } from '@react-three/drei';
import Interface from "./Interface"
import useGame from "./stores/useGame.jsx";
import BgmSound from "./sound/BgmSound.jsx";
import Map2 from "./Map2/Map2.jsx"
import Map1 from "./Map1/Map1.jsx"
import ColliderWall from "./Map1/ColliderWall.jsx"
import { SpinObstacle, CarRedObstacle, CarGreenObstacle, CrabObstacle } from "./components/MoveObstacle.jsx";
import { Howl, Howler } from 'howler';
import countDown from './sound/countdown/CountDownSoundEffect.mp3'
import Start from './sound/countdown/StartSoundEffect.mp3'
import { socket } from "./lobby/lobby.jsx";
import * as THREE from "three";
import Sand from "./Sand.jsx";
import { Background } from "./components/Background.jsx";
import { gsap } from "gsap";
import Wall from "./Map2/ColliderWall_Map2.jsx";

// 여기 변경
// export const socket = io("http://localhost:5000/")
export default function Scene() {
  const ocean = useRef();
  // 플레이어 받아서 플레이어 마다 Car 컴포넌트 생성
  const [players, setPlayers] = useState([])
  const [spectators, setSpectators] = useState([])

  // 상태 체크하여 
  const [state, setState] = useState(false)
 
  // 카운트 다운 관련
  let count = useGame((state)=> state.count)
  let Countdown = useGame((state)=> state.Countdown)
  var countIntervalRef = useRef(null)
  const start = useGame((state) => state.start)

  const startCountdown = ()=>{
    countIntervalRef.current = setInterval(()=>{
       Countdown()
     }, 1000)
   }
  //count값 바뀔 때마다 
  useEffect(()=>{
    const countDownSound = new Howl({
      src: [countDown],
      loop: false, // 오디오 반복 재생 여부
      autoplay: false // 자동 재생 여부
    });

    const startSound = new Howl({
      src: [Start],
      loop: false, // 오디오 반복 재생 여부
      autoplay: false // 자동 재생 여부
    });

    if (count === 0){
      setState(true)
      startSound.play();
      start()
    //count 가 -2 가 되면 Start 문자가 사라지게
    } else if (count === -2) {
      clearInterval(countIntervalRef.current)
      countDownSound.unload()
      startSound.unload()
    } else if (count > 0 && count < 4){
      countDownSound.play();
    }
  },[count])

  
  // 카운트 다운 관련 끝

/////////// 핑관련 변수들
  const [averagePing, setAveragePing] = useState(null);
  const [opponentPing, setOpponentPing] = useState(null);
  let cnt = 0;
  let totalDuration = 0;

  const startPingCheck = () => {
    //핑 체크 0.1초 간격
    console.log("핑체크");
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
  useEffect(() => {
    socket.emit("startGame")
  },[])
 
  // 유저 접속 관련
  useEffect(() => {
    // 접속한 유저 목록 갱신
    function onPlayers(roomData){ 
      console.log(roomData);
      setPlayers(roomData.players)
      setSpectators(roomData.spectators)
    }
    
    // 내가 설정한 최대 인원 숫자와 현재 인원이 같으면 핑체크 시작
    socket.on("clientCount", () => {
        console.log("클라이언트 카운트다운");
        const pingCheck = setTimeout(() => {
          startPingCheck()
        }, 4000)

        return () => clearTimeout(pingCheck)
    })

    socket.on("opponentPing", (pingData)=>{
      console.log("oppo ping :", pingData.ping);
      setOpponentPing(pingData.ping)
    })

    //유저 업데이트
    socket.on("updatePlayers", onPlayers)

    return (() => {
      socket.off("updatePlayers", onPlayers);
      socket.off("opponentPing")
      socket.off("clientCount")
    })
  },[])

  useEffect(() => {

    // 스타트 시그널을 받으면 
    socket.on("startSignal", (allPings)=>{
      console.log("스타트 시그널");
      // 상대핑의 평균을 구하여 
      const allPingsArray = Object.values(allPings);
      const opponentPingData = allPingsArray.find(ping => ping.id !== socket.id);
      const myPingData = allPingsArray.find(ping => ping.id === socket.id);
      
      const startSignal = setTimeout(() => {
        if(count > -3) startCountdown()
      }, opponentPingData.ping/2)

      return () => clearTimeout(startSignal)
    })

    return (() => {
      socket.off("startSignal")
    })

  },[])

  // 상대에게 내 핑 상태를 보냄
  useEffect(() => {
    const sendPingResultToServer = () => {
      // 핑 결과를 서버로 보냅니다. 이걸 두번 합니다.
      socket.emit("pingResult", averagePing );
      console.log("my ping :", averagePing);
    };

    if (averagePing !== null) {
      sendPingResultToServer();
    }
  },[averagePing])

  // 로딩 관련 끝

  ////////// 장애물관련 서버시간받아서 서버시간 5초 후에 장애물 동작 
  //장애물 상태변수
  const [isObstacleStarted, setIsObstacleStarted] = useState(false)

  socket.on("clientCount",(serverTimeStart)=>{
    //서버시간 받으면
    const serverTimeNow = new Date(serverTimeStart).getTime() //서버로부터 시간 가져옴
    const ClientTime = new Date().getTime() //현재 클라이언트 시간 가져옴
    const timeDifference = serverTimeNow - ClientTime
    
    const ObstacleStart = 7000 + timeDifference

    setTimeout(()=>{
      setIsObstacleStarted(true)
    }, ObstacleStart)
  })

  {/* Background */}
  const tl = useRef();
  const backgroundColors = useRef({
    colorA: "#00d5ff",
    colorB: "#abaadd",
  })
  useLayoutEffect(()=>{
    tl.current =gsap.timeline();

    tl.current.to(backgroundColors.current, {
      duration: 30,
      colorA: "#6f35cc",
      colorB: "#ffad30",
    });
    tl.current.to(backgroundColors.current, {
      duration: 20,
      colorA: "#f25235",
      colorB: "#ffcc00",
    });
    tl.current.to(backgroundColors.current, {
      duration: 20,
      colorA: "#81318b",
      colorB: "#55ab8f",
    });
  }, []);
  
  const [loadingEnd, setLoadingEnd] = useState(false)
  const targetObject = new THREE.Object3D();
  targetObject.position.set(0, 0, -50);

  return (
    <>
      <Interface />
      <BgmSound />
      {/* {!loadingEnd && 
        // <LoadingPage started ={loadingEnd} onStarted={() => setLoadingEnd(true)}/>
      } */}
      <Canvas shadows >
        <Suspense fallback={null}>
          <color attach="background" args={["#abdbe3"]} />
          
          <>
            <PerspectiveCamera position={[1.5, 8, 4]} fov={75} layers={[0]} makeDefault/>
            <Background backgroundColors={backgroundColors}/>
            <Sand/>
            <ambientLight intensity={2} color="#fff7e6"/>
            
            {/* <Light/> */}
            
            <directionalLight
              castShadow
              targetObject ={targetObject}
              intensity={2}
              shadow-camera-top={30}
              shadow-camera-bottom={-60}
              shadow-camera-left={-120}
              shadow-camera-right={100}
              shadow-camera-far={100}
              shadow-mapSize-height={512*6}
              shadow-mapSize-width={512*6}
              position={[50, 80, -50]}
              color="#ffffff"
            />
            <OrbitControls />
            <Stats/>
            <Physics gravity={[0, -3, 0]}>
              {/*<Debug>*/}
                  <ColliderWall/>
                  <Map1 position={[0, 0, 0]}/>
                  <Map2 position={[0, 0, -94]}/>
                  <Wall />
                
                {
                  players.map((player, index) => (
                    <Car_App id={player.id} key={player.id} position={player.position} rotation={[0, Math.PI, 0]} color={player.color} state={state} index={index} receiveShadow castShadow/>
                  ))
                }
      
                {isObstacleStarted && (
                <>
                {/* 장애물 배치 */}
                <SpinObstacle position={[25,0.5,-28]} offset={3}/>
                <SpinObstacle position={[27,0.5,-97]} offset={4}/>
                {/* <LeftAndRightObstacle/> */}
                {/* <ShutterObstacle/> */}
                <CarRedObstacle position={[0,0,0]} offset={-80} rotation={[0,Math.PI,0]}/>
                <CarGreenObstacle/>
                {/* <MotorObstacle/> */}
                <CrabObstacle position ={[7,-0.03,0]} offset={32} />
                <CrabObstacle position={[-7,-0.03,0]} offset={32}/>
                <CrabObstacle position={[0,-0.03,0]} offset={38}/>
                </>
                )}
            {/*</Debug>*/}
            </Physics>
          </>          
          </Suspense>
      </Canvas>
    </>
  );
}