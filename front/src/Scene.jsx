import { Canvas } from "@react-three/fiber";

import { Physics, Debug } from "@react-three/cannon";
import Car from "./Car";
import io from "socket.io-client"
import { useState, useEffect, useRef, React } from "react";
import Castle from "./components/Castle/Castle.jsx";
import { OrbitControls } from '@react-three/drei';
import Interface from "./Interface"
import Library from "./components/library/Library.jsx"
import {Ground} from "./Ground.jsx"
import useGame from "./stores/useGame.jsx";
import BgmSound from "./sound/BgmSound.jsx";

export const socket = io("http://localhost:5000")

function Scene() {
  const defaultY = -0.3
  // 플레이어 받아서 플레이어 마다 Car 컴포넌트 생성
  const [players, setPlayers] = useState([])

  const [state, setState] = useState(false)
  let numPlayers = 2
  let count = useGame((state)=> state.count)
  let Countdown = useGame((state)=> state.Countdown)
  var countIntervalRef = useRef(null)
  
  //count값 바뀔 때마다 
  useEffect(()=>{
    if (count === 0){
      setState(true)
      //count 가 -2 가 되면 Start 문자가 사라지게
    } else if (count === -2) {
      clearInterval(countIntervalRef.current)
    }
  },[count])

  const startCountdown = ()=>{
   countIntervalRef.current = setInterval(()=>{
      Countdown()
    }, 1000)
  }
  
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

  return (
    <>
      <Interface/>
      <BgmSound />
      <Canvas camera={{ fov:85, position:[1.5, 8, 4]}}>
        <ambientLight intensity={3.2}/>
        <directionalLight intensity={0.6} position={[0, 5, 5]} />
        <OrbitControls />
        <Physics gravity={[0, -2.6, 0]}>
          {/* <Debug> */}
            {/* <Ground /> */}
            <Library position={[-40, 0, 39]}/>
            <Castle/>
            {
              players.map((player, index) => (
                  <Car id={player.id} key={player.id} position={player.position} rotation={player.rotation} color={player.color} state={state} index={index}/>
              ))
            } 
          {/* </Debug> */}
        </Physics>
      </Canvas>
    </>
  );
}

export default Scene;
