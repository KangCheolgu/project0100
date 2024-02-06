import React, { useState } from 'react'
import {useRef, useEffect} from 'react'
import * as THREE from 'three'
import { useKeyboardControls } from '@react-three/drei'
import {addEffect} from '@react-three/fiber'
import useGame from './stores/useGame'
import Scene, { socket } from './Scene'

export default function Interface(props){
    const lapse = useRef()
    const time = useRef()
    const endtime = useRef()
    const forward = useKeyboardControls((state)=>state.forward) 
    const backward = useKeyboardControls((state)=>state.backward)
    const leftward = useKeyboardControls((state)=>state.leftward)
    const rightward = useKeyboardControls((state)=>state.rightward)
    const restart = useGame((state)=> state.restart)
    const phase = useGame((state)=> state.phase)
    let count = useGame((state)=> state.count)
    let elapsedTime = 0

    // 유저 목록을 받아서 목록에 추가해줌
    const [players, setPlayers] = useState([])


    useEffect(()=>
    {
        function onPlayers(backEndPlayers){ 
            const playersArray = Object.values(backEndPlayers);
            setPlayers(playersArray)
        }

        socket.on("updatePlayers", onPlayers)

        const unsubscribeEffect = addEffect(()=>
        {
            const state = useGame.getState()
            
            let newLapse = state.lapse
            if(state.phase ==='playing')
                elapsedTime = Date.now() - state.startTime
            else if(state.phase==='ended'){
                elapsedTime = state.endTime-state.startTime
            }
            elapsedTime /= 1000
            elapsedTime = elapsedTime.toFixed(3)

            if(time.current)
                time.current.textContent = elapsedTime
            if(lapse.current)
                lapse.current.textContent = newLapse+"/2"
                
        })
        
        socket.on("rankingChange", (rankingData) => {
            if(rankingData === "호스트가1등") {
                console.log("1등 ~");
            } else {
                console.log("2등 ㅜ");
            }
        })

        return ()=>{
            unsubscribeEffect()
        }
    }, [])

    const controls = useKeyboardControls((state)=>state)

    return <div className="interface">
        {/* lapse */}
        <div ref={lapse} className ="lapse">0/2</div>
        {/* Time */}
        <div ref = { time } className="time">0.00</div>
        {/* Ranking */}
        <div id='rankingSpace'>
        {
            players.map((player, index) => (
                <div id={player.id} key={player.id}>
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

        {/* Controls */}
        <div className="controls">
            <div className="raw">
                <div className={`key ${forward ? 'active' : '' }`}></div>
            </div>
            <div className="raw">
                <div className={`key ${leftward ? 'active' : '' }`}></div>
                <div className={`key ${backward ? 'active' : '' }`}></div>
                <div className={`key ${rightward ? 'active' : '' }`}></div>
            </div>
        </div>
    </div> 
}