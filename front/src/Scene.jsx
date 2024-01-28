import { Canvas } from "@react-three/fiber";
import { Ground } from "./Ground";
import { Physics, Debug } from "@react-three/cannon";
import Car from "./Car";
import DummyBall from "./dummy/DummyBall";
import DummyBox from "./dummy/DummyBox";
import DummyWall from "./dummy/DummyWall";
import io from "socket.io-client"
import { useState, useEffect, useRef, React } from "react";

export const socket = io("http://localhost:5000")
function Scene() {
  // 플레이어 받아서 플레이어 마다 Car 컴포넌트 생성
  const [players, setPlayers] = useState([])
  const [state, setState] = useState(false)
  let count = 3;
  useEffect(() => {
    function onPlayers(backEndPlayers){ 
      const playersArray = Object.values(backEndPlayers);
      setPlayers(playersArray)
    }
    // 핑퐁 테스트
    // setInterval(() => {
    //   const start = Date.now();
    //   console.log(start);
    //   socket.emit("ping", () => {
    //     const duration = Date.now() - start;
    //     console.log("ping is ", duration, " ms");
    //   });
    // }, 1000);

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
        <ambientLight/>
        <directionalLight position={[0, 5, 5]} />
        <Physics gravity={[0, -2.6, 0]}>
          <Debug>
            {
              players.map((player) => (
                  <Car id={player.id} key={player.id} position={player.position} rotation={player.rotation} color={player.color} state={state}/>
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
