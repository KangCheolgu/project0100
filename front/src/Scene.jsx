import { Canvas, useFrame } from "@react-three/fiber";

import { Physics, Debug } from "@react-three/cannon";
import Car_App from "./Car.jsx";
import io from "socket.io-client"
import { useState, useEffect, useRef, React, Suspense, useLayoutEffect } from "react";
import { OrbitControls, useProgress, Stats, PerspectiveCamera } from '@react-three/drei';
import Interface from "./Interface"
import {Ground} from "./Ground.jsx"
import useGame from "./stores/useGame.jsx";
import BgmSound from "./sound/BgmSound.jsx";
import LoadingPage from "./utils/Loading.jsx";
import Map2 from "./Map2/Map2.jsx"
import Map1 from "./Map1/Map1.jsx"
import ColliderWall from "./Map1/ColliderWall.jsx"
import { SkyCube } from "./components/SkyCube.jsx";
import {LeftAndRightObstacle, SpinObstacle, UpDownObstacle, ShutterObstacle, LeftRightObstacle, Bump, CarRedObstacle, CarGreenObstacle, MotorObstacle} from "./components/MoveObstacle.jsx";
import Countdown from "./sound/CountDown.jsx";
import StartSound from "./sound/StartSound.jsx";
import { Howl, Howler } from 'howler';
import countDown from './sound/countdown/CountDownSoundEffect.mp3'
import Start from './sound/countdown/StartSoundEffect.mp3'
import Water from "./Water.jsx";
import * as THREE from "three";
import Interaface2 from "./Interface2.jsx";
import Sand from "./Sand.jsx";
import { ResortOcean } from "./components/ResortOcean.jsx";
import { ResortOceanSmall } from "./components/ResortOceanSmall.jsx";
import { Background } from "./components/Background.jsx";
import { gsap } from "gsap";
import Wall from "./Map2/ColliderWall_Map2.jsx";
import Light from "./Light.jsx";

export const socket = io("http://localhost:5000")

export default function Scene() {
  const ocean = useRef();
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
    socket.on("clientCount", () => {

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
      // const myPing = allPingsArray.find(ping => ping.id === socket.id);
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
  

  return (
    <>
      <Interface players={players}/>
      <BgmSound />
      <Canvas shadows>
        <PerspectiveCamera position={[1.5, 8, 4]} fov={75} makeDefault/>
        <Background backgroundColors={backgroundColors}/>
        <Sand/>
        <ambientLight intensity={2} color="#fff7e6"/>
        
        <directionalLight
          castShadow
          intensity={4}
          shadow-camera-top={100}
          shadow-camera-bottom={-100}
          shadow-camera-left={-100}
          shadow-camera-right={100}
          shadow-mapSize-height={512*4}
          shadow-mapSize-width={512*4}
          position={[30, 60, -30]}
          color="#ffffff"
        />
        {/*DirectionalLight & Camera Helper*/}
        {/*<Light/>*/}
        
        <OrbitControls />
        <Stats/>
        <Physics gravity={[0, -3, 0]}>
          <Debug>
            <Suspense fallback={<LoadingPage />}>
              <ColliderWall/>
              <Map1 position={[0, 0, 0]}/>
              {/*<ResortOcean scale={[0.2,0.2, 0.2]} position={[30,3, 100]} rotation={[-Math.PI/20, 0, 0]}/>
              <ResortOcean scale={[0.2,0.2, 0.2]} position={[100,3, 10]} rotation={[0, Math.PI/2, 0]}/>*/}
              <Map2 position={[0, 0, -94]}/>
              <Wall />
              {/*<Water/>*/}
            {/*
              players.map((player, index) => (
                <Car_App id={player.id} key={player.id} position={player.position} rotation={[0, Math.PI, 0]} color={player.color} state={state} index={index} receiveShadow castShadow/>
              ))
            */}
              
            <Bump position={[0,-0.6,-70]}/>
            {isObstacleStarted && (
            <>
            {/* 장애물 배치 */}
            <SpinObstacle/>
            <LeftAndRightObstacle/>
            <LeftRightObstacle/>
            <UpDownObstacle/>
            <ShutterObstacle/>
            <SpinObstacle/>
            <CarRedObstacle/>
            <CarGreenObstacle/>
            <MotorObstacle/>
            </>
            )}
            
            </Suspense>
         </Debug>
        </Physics>
      </Canvas>
    </>
  );
}
