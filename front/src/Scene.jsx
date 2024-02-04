import { Canvas, useThree, extend } from "@react-three/fiber";

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
import {CameraHelper} from "three";
import ColliderWall from "./ColliderWall.jsx"


export const socket = io("http://localhost:5000")

export default function Scene() {

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
  
  return (
    <>
      <Interface/>
      <BgmSound />
       {/*{ fov:75, position:[1.5, 8, 4]}*/}
      <Canvas camera={{ fov:75, position:[1.5, 8, 4]}} shadows>
      
        <ambientLight intensity={3}/>
        {/*position={[0, 5, 5]}*/}
        <directionalLight
    castShadow
    intensity={2}
    shadow-camera-top={10}
    shadow-camera-bottom={-10}
    shadow-camera-left={-10}
    shadow-camera-right={10}
    shadow-mapSize-height={512*4}
    shadow-mapSize-width={512*4}
    position={[2, 5, -2]}
    color="white"
  />
        <mesh receiveShadow castShadow position={[0,1.7,-10]}>
          <torusKnotGeometry args={[1, 0.2, 128, 32]}/>
          <meshStandardMaterial
            color="#ffffff"
            roughness={0.1}
            metalness={0.2}
          />
        </mesh>
        <mesh receiveShadow castShadow position={[0,1.7, 0]}>
          <torusKnotGeometry args={[1, 0.2, 128, 32]}/>
          <meshStandardMaterial
            color="#ffffff"
            roughness={0.1}
            metalness={0.2}
          />
        </mesh>
        <mesh receiveShadow castShadow position={[0,1.7,-5]}>
          <torusKnotGeometry args={[1, 0.2, 128, 32]}/>
          <meshStandardMaterial
            color="#ffffff"
            roughness={0.1}
            metalness={0.2}
          />
        </mesh>
        <OrbitControls />
        <Physics gravity={[0, -2.6, 0]}>
          <Debug>
          <ColliderWall/>
          
            <Suspense fallback={<LoadingPage />}>
              {/*<Ground rotation={[Math.PI/2, 0, 0]}/>*/}
              <Map1 position={[0, 0, 0]} receiveShadow castShadow/>
            </Suspense>
            {
              players.map((player, index) => (
                <Car id={player.id} key={player.id} position={player.position} rotation={[0, Math.PI, 0]} color={player.color} state={state} index={index} receiveShadow castShadow/>
              ))
            }
         </Debug>
        </Physics>
      </Canvas>
     
    </>
  );
}
