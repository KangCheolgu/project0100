import { Canvas } from "@react-three/fiber";
import { Ground } from "./Ground";
import { Physics, Debug } from "@react-three/cannon";
import Car from "./Car";
import io from "socket.io-client"
import { useState, useEffect, useRef, React } from "react";
import { OrbitControls } from '@react-three/drei';
import { StraightRoad } from "./components/StraightRoad"
import { CurvedRoad } from "./components/CurveRoad"
import {Wall, Floor, Floor2, Floor3} from './components/Ruins/Ruin.jsx'
import Interface from "./Interface"
import ColliderWall from "./ColliderWall"
export const socket = io("http://localhost:5000")
function Scene() {
  const defaultY = -0.08
  // 플레이어 받아서 플레이어 마다 Car 컴포넌트 생성
  const [players, setPlayers] = useState([])
  const [state, setState] = useState(false)
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
        <OrbitControls makeDefault/>
        
        <ambientLight/>
        <directionalLight position={[0, 5, 5]} />
        <Physics gravity={[0, -2.6, 0]}>
          <Debug>
            {
              players.map((player, index) => (
                  <Car id={player.id} key={player.id} position={player.position} rotation={player.rotation} color={player.color} state={state} index={index}/>
              ))
            } 
            {/* <Wall/> */}
            <Floor3 position={[0, 0, 0]}/>
            <Ground rotation={[-Math.PI/2,0,0]}/>
          </Debug>
        </Physics>
      </Canvas>
    </>
  );
}

export default Scene;
