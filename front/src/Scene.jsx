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
import useGame from "./stores/useGame.jsx";
import { UpdownObstacle } from "./components/UpdownObstacle.jsx";

export const socket = io("http://localhost:5000")

function Scene() {
  const defaultY = -0.08
  // 플레이어 받아서 플레이어 마다 Car 컴포넌트 생성
  const [players, setPlayers] = useState([])
  const [state, setState] = useState(false)
  let numPlayers = 2
  let count = useGame((state)=> state.count)
  let Countdown = useGame((state)=> state.Countdown)
  var countIntervalRef = useRef(null)
  
  //count값 바뀔 때마다 
  useEffect(()=>{
    if (count <= 0){
      console.log("start")
      setState(true)
      clearInterval(countIntervalRef.current)
    }
  },[count])

  const startCountdown = ()=>{
   countIntervalRef.current = setInterval(()=>{
    Countdown()
  }, 1000)
}
  useEffect(() => {
    function onPlayers(backEndPlayers){ 
      const playersArray = Object.values(backEndPlayers);
      setPlayers(playersArray)
    }

    socket.on("clientCount", (numClient)=>{
      if (numClient === numPlayers){
        if(count > 0)
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
              
//             <UpdownObstacle position={[0, 0.3, 0]} speed={0.5}/>
//             {/*x축 + */}
//             <StraightRoad scale={0.3} position={[0, defaultY, 0]}/>
//             <StraightRoad scale={0.3} position={[5, defaultY, 0]}/>
//             <StraightRoad scale={0.3} position={[10, defaultY, 0]}/>
//             <StraightRoad scale={0.3} position={[15, defaultY, 0]}/>
//             <StraightRoad scale={0.3} position={[20, defaultY, 0]}/>

//             <CurvedRoad scale={0.31} position={[25, defaultY, 0.43]}/>
//             {/* x축 - */}
//             <StraightRoad scale={0.3} position={[-5, defaultY, 0]}/>
//             <StraightRoad scale={0.3} position={[-10, defaultY, 0]}/>
//             <StraightRoad scale={0.3} position={[-15, defaultY, 0]}/>
//             <StraightRoad scale={0.3} position={[-20, defaultY, 0]}/>
//             <StraightRoad scale={0.3} position={[-25, defaultY, 0]}/>
//             <StraightRoad scale={0.3} position={[-30, defaultY, 0]}/>
//             <StraightRoad scale={0.3} position={[-35, defaultY, 0]}/>
//             <StraightRoad scale={0.3} position={[-40, defaultY, 0]}/>
//             <StraightRoad scale={0.3} position={[-45, defaultY, 0]}/>
//             <StraightRoad scale={0.3} position={[-50, defaultY, 0]}/>
//             <StraightRoad scale={0.3} position={[-55, defaultY, 0]}/>
//             <StraightRoad scale={0.3} position={[-60, defaultY, 0]}/>
//             <StraightRoad scale={0.3} position={[-65, defaultY, 0]}/>
//             <StraightRoad scale={0.3} position={[-70, defaultY, 0]}/>
//             <StraightRoad scale={0.3} position={[-75, defaultY, 0]}/>

//             <CurvedRoad scale={0.31} position={[-80, defaultY, 0.43]} rotation={[0, Math.PI/2, 0]}/>


//             <StraightRoad scale={0.3} position={[0, defaultY, 40]}/>
//             <StraightRoad scale={0.3} position={[5, defaultY, 40]}/>
//             <StraightRoad scale={0.3} position={[10, defaultY, 40]}/>
//             <StraightRoad scale={0.3} position={[15, defaultY, 40]}/>
//             <StraightRoad scale={0.3} position={[20, defaultY, 40]}/>
//             <CurvedRoad scale={0.31} position={[-80, defaultY, 39.5]} rotation={[0, Math.PI, 0]}/>
            

//             <StraightRoad scale={0.3} position={[-5, defaultY, 40]}/>
//             <StraightRoad scale={0.3} position={[-10, defaultY, 40]}/>
//             <StraightRoad scale={0.3} position={[-15, defaultY, 40]}/>
//             <StraightRoad scale={0.3} position={[-20, defaultY, 40]}/>
//             <StraightRoad scale={0.3} position={[-25, defaultY, 40]}/>
//             <StraightRoad scale={0.3} position={[-30, defaultY, 40]}/>
//             <StraightRoad scale={0.3} position={[-35, defaultY, 40]}/>
//             <StraightRoad scale={0.3} position={[-40, defaultY, 40]}/>
//             <StraightRoad scale={0.3} position={[-45, defaultY, 40]}/>
//             <StraightRoad scale={0.3} position={[-50, defaultY, 40]}/>
//             <StraightRoad scale={0.3} position={[-55, defaultY, 40]}/>
//             <StraightRoad scale={0.3} position={[-60, defaultY, 40]}/>
//             <StraightRoad scale={0.3} position={[-65, defaultY, 40]}/>
//             <StraightRoad scale={0.3} position={[-70, defaultY, 40]}/>
//             <StraightRoad scale={0.3} position={[-75, defaultY, 40]}/>
//             <CurvedRoad scale={0.31} position={[25, defaultY, 39.5]} rotation={[0, Math.PI+1.55, 0]}/>

//             <StraightRoad scale={0.3} position={[25.5, defaultY, 5.9]} rotation={[0, Math.PI/2, 0]}/>
//             <StraightRoad scale={0.3} position={[25.5, defaultY, 10]} rotation={[0, Math.PI/2, 0]}/>
//             <StraightRoad scale={0.3} position={[25.5, defaultY, 15]} rotation={[0, Math.PI/2, 0]}/>
//             <StraightRoad scale={0.3} position={[25.5, defaultY, 20]} rotation={[0, Math.PI/2, 0]}/>
//             <StraightRoad scale={0.3} position={[25.5, defaultY, 25]} rotation={[0, Math.PI/2, 0]}/>
//             <StraightRoad scale={0.3} position={[25.5, defaultY, 30]} rotation={[0, Math.PI/2, 0]}/>
//             <StraightRoad scale={0.3} position={[25.5, defaultY, 35]} rotation={[0, Math.PI/2, 0]}/>

//             <StraightRoad scale={0.3} position={[-80.5, defaultY, 5.8]} rotation={[0, Math.PI/2, 0]}/>
//             <StraightRoad scale={0.3} position={[-80.5, defaultY, 10]} rotation={[0, Math.PI/2, 0]}/>
//             <StraightRoad scale={0.3} position={[-80.5, defaultY, 15]} rotation={[0, Math.PI/2, 0]}/>
//             <StraightRoad scale={0.3} position={[-80.5, defaultY, 20]} rotation={[0, Math.PI/2, 0]}/>
//             <StraightRoad scale={0.3} position={[-80.5, defaultY, 25]} rotation={[0, Math.PI/2, 0]}/>
//             <StraightRoad scale={0.3} position={[-80.5, defaultY, 30]} rotation={[0, Math.PI/2, 0]}/>
//             <StraightRoad scale={0.3} position={[-80.5, defaultY, 35]} rotation={[0, Math.PI/2, 0]}/>
//             <ColliderWall/>
          </Debug>
        </Physics>
      </Canvas>
    </>
  );
}

export default Scene;
