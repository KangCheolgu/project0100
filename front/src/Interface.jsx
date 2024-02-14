import React, { useState } from 'react'
import {useRef, useEffect} from 'react'
import * as THREE from 'three'
import { Html, useKeyboardControls } from '@react-three/drei'
import {addEffect} from '@react-three/fiber'
import useGame from './stores/useGame'
// import Scene, { socket } from './Scene'
import Scene from './Scene'
import { socket } from "./lobby/lobby.jsx";

export default function Interface(){

    const lapse = useRef();
    const time = useRef();
    const endtime = useRef();
    const forward = useKeyboardControls((state) => state.forward);
    const backward = useKeyboardControls((state) => state.backward);
    const leftward = useKeyboardControls((state) => state.leftward);
    const rightward = useKeyboardControls((state) => state.rightward);
    const shift = useKeyboardControls((state) => state.shift);
    const space = useKeyboardControls((state) => state.space);
    const restart = useGame((state) => state.restart);
    const phase = useGame((state) => state.phase);
    let count = useGame((state) => state.count);
    let elapsedTime = 0;

    // 유저 목록을 받아서 목록에 추가해줌
    const [players, setPlayers] = useState([])
    const [spectators, setSpectators] = useState([])
    const [ranking, setRanking] = useState("");

    useEffect(()=>
    {
        function onPlayers(roomData){ 
            setPlayers(roomData.players)
            setSpectators(roomData.spectators)
        }

        socket.on("updatePlayers", onPlayers);

        const unsubscribeEffect = addEffect(() => {
            const state = useGame.getState();

            let newLapse = state.lapse;
            if (state.phase === 'playing')
                elapsedTime = Date.now() - state.startTime;
            else if (state.phase === 'ended') {
                elapsedTime = state.endTime - state.startTime;
            }
            elapsedTime /= 1000;
            elapsedTime = elapsedTime.toFixed(3);

            if (time.current)
                time.current.textContent = elapsedTime;
            if (lapse.current)
                lapse.current.textContent = newLapse + "/2";

        });

        socket.on("rankingChange", (rankingData) => {
            if (rankingData === "호스트가1등") {
                setRanking("1등");
            } else {
                setRanking("2등");
            }
        });

        return () => {
            unsubscribeEffect();
            socket.off("rankingChange");
        };
    }, []);

    const controls = useKeyboardControls((state)=>state)
    const isSpectator = spectators.some(spectator => spectator.id === socket.id);

    return <div className="interface">
      {/* lapse */}
      <div ref={lapse} className ="lapse">0/2</div>
      {/* Time */}
      <div ref = { time } className="time">0.00</div>
      {/* Ranking */}
      <div id='rankingSpace' style={{paddingTop:"100px", backgroundColor:"#ffffff", opacity:"30%"}}>
      {
          players.map((player, index) => (
              <div 
              id={player.id} 
              key={player.id}
              className={ ranking === "1등" ? 'first-place' : 'other-places'}
              >
                  {player.id} 
              </div>
          ))
      }
      </div>
      {/* Countdown */}
      {count > 0 && count < 4 && <div className="countdown" >{count}</div>}
      {/* raceStart */}
      {count <=0 && count > -2 && <div className="countdown" ><h1>Start</h1></div>}
      {/* Restart */}
      {phase==='ended'?<div className="restart" onClick={restart}>Restart</div>:null}
      {phase==='ended'?<div className="endtime"></div>:null}

      {/* 관전자에게만 보이는 카메라 이동 버튼 */}
      {isSpectator && (
        <div style={{position:"fixed",fontFamily:"sans-serif"}} className="spectator-button">
          <button  style={{margin:"5px",width:"50px", padding:"7px"}}
            onClick={() => {
            console.log("Prev 카메라 버튼");
            socket.emit("prevCameraButton")
            }}>
            Prev
          </button>
          <button  style={{margin:"5px",padding:"7px"}}
            onClick={() => {
            console.log("1 Player 카메라 버튼");
            socket.emit("1pCameraButton")
            }}>
            1 Player
          </button>
          <button style={{margin:"5px", padding:"7px"}}
            onClick={() => {
            console.log("2 Player 카메라 버튼");
            socket.emit("2pCameraButton")
            }}>
            2 Player
          </button>  
          <button  style={{margin:"5px", padding:"7px"}}
          onClick={() => {
          console.log("Next 카메라 버튼");
          socket.emit("nextCameraButton")
          }}>
            Next
          </button>
        </div>
      )}

      {/* 플레이어 한테만 보이는 키보드 조작 UI */}
      {!isSpectator && (
            <div className="controls">
            <div className="raw">
                <div className={`key ${forward ? 'active' : '' }`}></div>
            </div>
            <div className="raw">
                <div className={`key ${leftward ? 'active' : '' }`}></div>
                <div className={`key ${backward ? 'active' : '' }`}></div>
                <div className={`key ${rightward ? 'active' : '' }`}></div>
            </div>
            <div className="raw">
                <div className={`key ${shift ? 'active' : ''} large`}></div> {/* shift 키에 large 클래스 추가 */}
                <div className={`key ${space ? 'active' : ''} large`}></div> {/* 스페이스 바에 large 클래스 추가 */}
            </div>
      </div>
      )}
      {/* Controls */}
        
    </div> 
}