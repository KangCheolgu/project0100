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

export const socket = io("http://localhost:5000")
function Scene() {
  const defaultY = -0.3
  // 플레이어 받아서 플레이어 마다 Car 컴포넌트 생성
  const [players, setPlayers] = useState([])
  const [state, setState] = useState(true)
  let count = 3;
  useEffect(() => {
    function onPlayers(backEndPlayers){ 
      const playersArray = Object.values(backEndPlayers);
      setPlayers(playersArray)
    }

    let countdown = setInterval(() => {
      
      if(count === 0) {
        console.log("start");
        setState(true)
        clearInterval(countdown)
      }
      else {
        console.log(count);
        count -= 1;
      }
    }, 1000);
    
    socket.on("updatePlayers", onPlayers)

    return (() => {
      socket.off("updatePlayers", onPlayers);
    })
  },[]) 

  return (
    <>
      <Interface/>
      
      <Canvas camera={{ fov:75, position:[1.5, 8, 4]}}>
        {/* <SocketManager /> */}
        <ambientLight/>
        <directionalLight intensity={5} position={[0, 5, 5]} />
        <OrbitControls />
        <Physics gravity={[0, -2.6, 0]}>
          <Debug>
            {/*
              players.map((player) => (
                  <Car id={player.id} key={player.id} position={player.position} rotation={player.rotation} color={player.color} state={state}/>
              ))
              */} 
            <Library position={[40, 0, 0]}/>
            <Castle/>
          </Debug>
        </Physics>
      </Canvas>
    </>
  );
}

export default Scene;
