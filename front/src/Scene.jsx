import { Canvas } from "@react-three/fiber";
import { Ground } from "./Ground";
import { Physics, Debug } from "@react-three/cannon";
import Car from "./Car";
import io from "socket.io-client"
import { useState, useEffect, useRef, React } from "react";
import Map from "./Map/Map";
import { OrbitControls } from '@react-three/drei'

export const socket = io("http://localhost:5000")
function Scene() {
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
      <Canvas camera={{ fov:75, position:[1.5, 8, 4]}}>
        {/* <SocketManager /> */}

        <OrbitControls makeDefault />
        <ambientLight/>
        <directionalLight intensity={4} position={[0, 5, 5]} />
        <Physics gravity={[0, -2.6, 0]}>
          <Debug>
            {
              players.map((player) => (
                  <Car id={player.id} key={player.id} position={player.position} rotation={player.rotation} color={player.color} state={state}/>
              ))
            } 
            <Map/>
          </Debug>
        </Physics>
      </Canvas>
    </>
  );
}

export default Scene;
