import { Canvas } from "@react-three/fiber";

import { Physics, Debug } from "@react-three/cannon";
import Car from "./Car";
import io from "socket.io-client"
import { useState, useEffect, useRef, React, Suspense } from "react";
import { OrbitControls, useProgress } from '@react-three/drei';
import Interface from "./Interface"
import {Ground} from "./Ground.jsx"
import useGame from "./stores/useGame.jsx";
import BgmSound from "./sound/BgmSound.jsx";
import LoadingPage from "./utils/Loading.jsx";

import Map1 from "./Map1.jsx";
import ColliderBox from "./ColliderBox.jsx";
import * as THREE from "three";

export const socket = io("http://localhost:5000")

export default function Scene() {
  const defaultY = -0.3
  // 플레이어 받아서 플레이어 마다 Car 컴포넌트 생성
  const [players, setPlayers] = useState([])
  let numPlayers = 2

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

  // 유저 접속 관련
  useEffect(() => {
    // 접속한 유저 목록 갱신
    function onPlayers(backEndPlayers){ 
      const playersArray = Object.values(backEndPlayers);
      setPlayers(playersArray)
    }

    // 내가 설정한 최대 인원 숫자와 현재 인원이 같으면 카운트다운
    socket.on("clientCount", (numClient)=>{
      if (numClient === numPlayers){
        if(count > -3)
          startCountdown()
      }
    })
    
    socket.on("updatePlayers", onPlayers)

    return (() => {
      socket.off("updatePlayers", onPlayers);
    })
  },[])
  // 유저 접속 관련 끝

  // 로딩 관련


  // 로딩 관련 끝

  const Plane =new THREE.PlaneGeometry()
  return (
    <>
      <Interface/>
      <BgmSound />
       
      <Canvas camera={{ fov:75, position:[1.5, 8, 4]}}>
        <ambientLight intensity={3}/>
        <directionalLight intensity={0.4} position={[0, 5, 5]} castShadow />
        <OrbitControls />
        <Physics gravity={[0, -2.6, 0]}>
          <Debug>
          <ColliderBox scale={[300, 0.1, 300]} position={[0, 0, 0]}/>
            <Suspense fallback={<LoadingPage />}>
              {/*<Ground rotation={[Math.PI/2, 0, 0]}/>*/}
              <Map1 position={[0, 0, 0]}/>
            </Suspense>
            {/*
              players.map((player, index) => (
                <Car id={player.id} key={player.id} position={[0, 0.3, -12]} rotation={[0, Math.PI, 0]} color={player.color} state={state} index={index}/>
              ))
              */ }
         </Debug>
        </Physics>
      </Canvas>
     
    </>
  );
}
