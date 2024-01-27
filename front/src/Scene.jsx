import { Canvas } from "@react-three/fiber";
import { Ground } from "./Ground";
import { Physics, Debug } from "@react-three/cannon";
import Car from "./Car";
import DummyBall from "./dummy/DummyBall";
import DummyBox from "./dummy/DummyBox";
import DummyWall from "./dummy/DummyWall";
import io, { Socket } from "socket.io-client"
import { useState, useEffect, useRef, React } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
// import SocketManager from "./SocketManager.jsx"

export const socket = io("http://localhost:5000")
function Scene() {

  // 플레이어 받아서 플레이어 마다 Car 컴포넌트 생성
  const [players, setPlayers] = useState([])
  useEffect(() => {

    function onPlayers(backEndPlayers){ 
      const playersArray = Object.values(backEndPlayers);
      setPlayers(playersArray)
    }

    return (() =>{
      socket.on("updatePlayers", onPlayers)
    })
  }) 

  return (
    <>
      <Canvas camera={{ fov:75, position:[1.5, 8, 4]}}>
        {/* <SocketManager /> */}
        <ambientLight/>
        <directionalLight position={[0, 5, 5]} />
        <Physics gravity={[0, -2.6, 0]}>
          <Debug>
            {
              players.map((player) => (
                  <Car key={player.id} player={player}/>
              ))
            } 
            <DummyBall position={[0,0.2,-2]} args={[0.15]}/>
            <DummyBox position={[1,0.2,-2]} args={[0.2,0.2,0.2]}/>
            <DummyBox position={[-1,0.2,1.5]} args={[0.2,0.4,0.2]} type={"Static"}/>
            <DummyWall position={[5,0.5,0]} args={[1,1,10]} />
            <Ground rotation={[-Math.PI/2,0,0]}/>
          </Debug>
        </Physics>
      </Canvas>
    </>
  );
}

export default Scene;
