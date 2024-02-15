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

    // 유저 목록을 받아서 목록에 추가해줌
    const [players, setPlayers] = useState([])
    const [spectators, setSpectators] = useState([])
    const [ranking, setRanking] = useState("");
    const [animationStart, setAnimationStart] = useState(null);

    const [player1Ranking, setPlayer1Ranking] = useState("1등");
    const [player2Ranking, setPlayer2Ranking] = useState("2등");
    let elapsedTime = 0

    useEffect(() => {
      if (count > -1 && count < 4) {
        setAnimationStart(Date.now()); // 클래스를 추가할 타이밍을 현재 시간으로 지정
      } else {
        setAnimationStart(null); // 클래스 제거.
      }
    }, [count]);

    useEffect(()=>
    {
        function onPlayers(roomData){ 
            setPlayers(roomData.players)
            setSpectators(roomData.spectators)
        }

        socket.on("startGameSignInRoom", () => {
          elapsedTime = 0; // 시간 초기화
        });

        socket.on("updatePlayers", onPlayers);

        const unsubscribeEffect = addEffect(() => {
            const state = useGame.getState();

            let newLapse = state.lapse;
            if (state.phase === 'playing')
              elapsedTime = Date.now() - state.startTime;
            else if (state.phase === 'ended') {
              elapsedTime = state.endTime - state.startTime;
            }

            // elapsedTime /= 1000;
            // elapsedTime = elapsedTime.toFixed(3);

            let minutes = Math.floor((elapsedTime % (1000 * 60 * 60)) / (1000 * 60));
            let seconds = Math.floor((elapsedTime % (1000 * 60)) / 1000);
            let milliseconds = elapsedTime % 1000;

            minutes = String(minutes).padStart(2, '0');
            seconds = String(seconds).padStart(2, '0');
            milliseconds = String(milliseconds).padStart(3, '0');

            const formattedTime = `${minutes}:${seconds}:${milliseconds}`;

            if (time.current)
                time.current.textContent = "TIME  : "+ formattedTime;
            if (lapse.current)
                lapse.current.textContent = "LAPS  : " + newLapse + " / 2";

        });

        socket.on("rankingChange", (rankingData) => {
            if (rankingData === "호스트가1등") {
              setPlayer1Ranking("1등");
              setPlayer2Ranking("2등");
            } else {
              setPlayer1Ranking("2등");
              setPlayer2Ranking("1등");
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
      <div ref={lapse} style={{fontFamily:"RacingFont", fontSize:"60px"}} className ="lapse">1/2</div>
      {/* Time */}
      <div ref = { time } style={{fontFamily:"RacingFont", fontSize:"60px"}} className="time">00:00:000</div>
      {/* Ranking */}
      <div className='rankingSpace'>
        {players.length >= 1 && (
          <div className={player1Ranking === "1등" ? 'first-place' : 'other-places'}>
            {player1Ranking === "1등" ? '1st : ' : '2nd :'} {players[0].name}
          </div>
        )}
        {players.length >= 2 && (
          <div className={player2Ranking === "1등" ? 'first-place' : 'other-places'}>
            {player2Ranking === "1등" ? '1st : ' : '2nd : '} {players[1].name}
          </div>
        )}
      </div>k
      {/* Countdown */}
      {count > 0 && count < 4 && 
        <div className={`countdown ${animationStart ? 'countdown-animation' : ''}`} >
          {count}
        </div>
      }
      {/* raceStart */}
      {count <=0 && count > -2 &&
        <div className={`startSign ${animationStart ? 'startSign-animation' : ''}`} >
          START
        </div>}
      {/* Restart */}
      {phase==='ended'?<div style={{fontFamily:'sans-serif'}} className="restart" onClick={restart}>로비로 나가기</div>:null}
      {phase==='ended'?<div className="endtime"></div>:null}

      {/* 관전자에게만 보이는 부분 */}
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

      {/* 플레이어 한테만 보이는 부분 */}
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