import React from 'react'
import {useRef, useEffect} from 'react'
import * as THREE from 'three'
import { useKeyboardControls } from '@react-three/drei'
import {addEffect} from '@react-three/fiber'
import useGame from './stores/useGame'
export default function Interface(){
    const lapse = useRef()
    const time = useRef()
    const forward = useKeyboardControls((state)=>state.forward) 
    const backward = useKeyboardControls((state)=>state.backward)
    const leftward = useKeyboardControls((state)=>state.leftrward)
    const rightward = useKeyboardControls((state)=>state.rightward)
    const restart = useGame((state)=> state.restart)
    const phase = useGame((state)=> state.phase)

    useEffect(()=>
    {
        const unsubscribeEffect = addEffect(()=>
        {
            const state = useGame.getState()
            let elapsedTime=0
            let newLapse = state.lapse
            if(state.phase ==='playing')
                elapsedTime = Date.now() - state.startTime
            else if(state.phase==='ended')
                elapsedTime = state.endTime-state.startTime

            elapsedTime /= 1000
            elapsedTime = elapsedTime.toFixed(2)

            if(time.current)
                time.current.textContent = elapsedTime
                lapse.current.textContent = newLapse+"/2"
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
        {/* Restart */}
        {phase==='ended'?<div className="restart" onClick={restart}>Restart</div>:null}
        {/*<div className="restart" onClick={restart}>Restart</div>*/}

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