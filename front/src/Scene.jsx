import { Canvas } from "@react-three/fiber";
import { Ground } from "./Ground";
import { Physics, Debug } from "@react-three/cannon";
import Car from "./Car";
import DummyBall from "./dummy/DummyBall";
import DummyBox from "./dummy/DummyBox";
import DummyWall from "./dummy/DummyWall";
import io from "socket.io-client"
import { useState, useEffect, useRef, React } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { OrbitControls } from '@react-three/drei';
import { StraightRoad } from "./components/StraightRoad"
import { CurvedRoad } from "./components/CurveRoad"
import Interface from "./Interface"
import useGame from './stores/useGame.jsx'
import {Wall, Floor} from './components/Ruins/Ruin.jsx'

export const socket = io("http://localhost:5000")
function Scene() {
  // const [players] = useAtom(PlayerAtom)
  const [players, setPlayers] = useState([])
  const defaultY = -0.08
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
      <Interface/>
      {/* <SocketManager/> */}
      <Canvas camera={{ fov:75, position:[1.5, 8, 4]}}>
        <OrbitControls makeDefault/>
        <ambientLight/>
        <directionalLight position={[0, 5, 5]} />
        <Physics gravity={[0, -2.6, 0]}>

          <Debug>
            {
              players.map((player) => (
                  <Car key={player.id} player={player}/>
              ))
            } 
            <Ground rotation={[-Math.PI/2,0,0]}/>
            {/*x축 + */}
            <StraightRoad scale={0.3} position={[0, defaultY, 0]}/>
            <StraightRoad scale={0.3} position={[5, defaultY, 0]}/>
            <StraightRoad scale={0.3} position={[10, defaultY, 0]}/>
            <StraightRoad scale={0.3} position={[15, defaultY, 0]}/>
            <StraightRoad scale={0.3} position={[20, defaultY, 0]}/>

            <CurvedRoad scale={0.31} position={[25, defaultY, 0.43]}/>
            {/* x축 - */}
            <StraightRoad scale={0.3} position={[-5, defaultY, 0]}/>
            <StraightRoad scale={0.3} position={[-10, defaultY, 0]}/>
            <StraightRoad scale={0.3} position={[-15, defaultY, 0]}/>
            <StraightRoad scale={0.3} position={[-20, defaultY, 0]}/>
            <StraightRoad scale={0.3} position={[-25, defaultY, 0]}/>
            <StraightRoad scale={0.3} position={[-30, defaultY, 0]}/>
            <StraightRoad scale={0.3} position={[-35, defaultY, 0]}/>
            <StraightRoad scale={0.3} position={[-40, defaultY, 0]}/>
            <StraightRoad scale={0.3} position={[-45, defaultY, 0]}/>
            <StraightRoad scale={0.3} position={[-50, defaultY, 0]}/>
            <StraightRoad scale={0.3} position={[-55, defaultY, 0]}/>
            <StraightRoad scale={0.3} position={[-60, defaultY, 0]}/>
            <StraightRoad scale={0.3} position={[-65, defaultY, 0]}/>
            <StraightRoad scale={0.3} position={[-70, defaultY, 0]}/>
            <StraightRoad scale={0.3} position={[-75, defaultY, 0]}/>

            <CurvedRoad scale={0.31} position={[-80, defaultY, 0.43]} rotation={[0, Math.PI/2, 0]}/>


            <StraightRoad scale={0.3} position={[0, defaultY, 40]}/>
            <StraightRoad scale={0.3} position={[5, defaultY, 40]}/>
            <StraightRoad scale={0.3} position={[10, defaultY, 40]}/>
            <StraightRoad scale={0.3} position={[15, defaultY, 40]}/>
            <StraightRoad scale={0.3} position={[20, defaultY, 40]}/>
            <CurvedRoad scale={0.31} position={[-80, defaultY, 39.5]} rotation={[0, Math.PI, 0]}/>
            

            <StraightRoad scale={0.3} position={[-5, defaultY, 40]}/>
            <StraightRoad scale={0.3} position={[-10, defaultY, 40]}/>
            <StraightRoad scale={0.3} position={[-15, defaultY, 40]}/>
            <StraightRoad scale={0.3} position={[-20, defaultY, 40]}/>
            <StraightRoad scale={0.3} position={[-25, defaultY, 40]}/>
            <StraightRoad scale={0.3} position={[-30, defaultY, 40]}/>
            <StraightRoad scale={0.3} position={[-35, defaultY, 40]}/>
            <StraightRoad scale={0.3} position={[-40, defaultY, 40]}/>
            <StraightRoad scale={0.3} position={[-45, defaultY, 40]}/>
            <StraightRoad scale={0.3} position={[-50, defaultY, 40]}/>
            <StraightRoad scale={0.3} position={[-55, defaultY, 40]}/>
            <StraightRoad scale={0.3} position={[-60, defaultY, 40]}/>
            <StraightRoad scale={0.3} position={[-65, defaultY, 40]}/>
            <StraightRoad scale={0.3} position={[-70, defaultY, 40]}/>
            <StraightRoad scale={0.3} position={[-75, defaultY, 40]}/>
            <CurvedRoad scale={0.31} position={[25, defaultY, 39.5]} rotation={[0, Math.PI+1.55, 0]}/>

            <StraightRoad scale={0.3} position={[25.5, defaultY, 5.9]} rotation={[0, Math.PI/2, 0]}/>
            <StraightRoad scale={0.3} position={[25.5, defaultY, 10]} rotation={[0, Math.PI/2, 0]}/>
            <StraightRoad scale={0.3} position={[25.5, defaultY, 15]} rotation={[0, Math.PI/2, 0]}/>
            <StraightRoad scale={0.3} position={[25.5, defaultY, 20]} rotation={[0, Math.PI/2, 0]}/>
            <StraightRoad scale={0.3} position={[25.5, defaultY, 25]} rotation={[0, Math.PI/2, 0]}/>
            <StraightRoad scale={0.3} position={[25.5, defaultY, 30]} rotation={[0, Math.PI/2, 0]}/>
            <StraightRoad scale={0.3} position={[25.5, defaultY, 35]} rotation={[0, Math.PI/2, 0]}/>

            <StraightRoad scale={0.3} position={[-80.5, defaultY, 5.8]} rotation={[0, Math.PI/2, 0]}/>
            <StraightRoad scale={0.3} position={[-80.5, defaultY, 10]} rotation={[0, Math.PI/2, 0]}/>
            <StraightRoad scale={0.3} position={[-80.5, defaultY, 15]} rotation={[0, Math.PI/2, 0]}/>
            <StraightRoad scale={0.3} position={[-80.5, defaultY, 20]} rotation={[0, Math.PI/2, 0]}/>
            <StraightRoad scale={0.3} position={[-80.5, defaultY, 25]} rotation={[0, Math.PI/2, 0]}/>
            <StraightRoad scale={0.3} position={[-80.5, defaultY, 30]} rotation={[0, Math.PI/2, 0]}/>
            <StraightRoad scale={0.3} position={[-80.5, defaultY, 35]} rotation={[0, Math.PI/2, 0]}/>
          </Debug>
        </Physics>
      </Canvas>
    </>
  );
}

export default Scene;
