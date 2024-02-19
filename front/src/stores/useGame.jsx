import create  from 'zustand' 
import { subscribeWithSelector } from 'zustand/middleware'
import { useNavigate } from 'react-router-dom'


export default create(subscribeWithSelector(//상태 변경시 자동 호출
(set)=>
{
    return {
        
        //Countdown
        count: 5,

        // Time        
        startTime: 0, 
        endTime: 0,
        
        // lap
        lapse : 1,

        // winner
        winner : "",
        recordTime : 0,
        // Phase
        phase: 'ready',
        start:() =>
        {
            set((state)=>
            {
                if(state.phase === 'ready'){
                    return {phase: 'playing', startTime: Date.now()}
                }
                return {}
            })
        },

        restart:() =>
        {
            set((state)=>
            {
                if(state.phase === 'playing'|| state.phase==='ended')
                    return {phase: 'ready', isIn: [false, false, false, false], lapse: 1}
                return {}
            })
        },

        end:() =>
        {
            set((state)=>
            {  
                if(state.phase === 'playing') { 
                    return {phase: 'ended', endTime: Date.now()}
                }
                return {}
            })
        },
        
        around:()=>
        {
            set((state)=>
            {
                return {lapse: state.lapse+1}
            })
        },

        Countdown: ()=>{
            set((state)=>{
                if(state.count > -3)
                    return {count : state.count - 1}
                else
                    return {count : state.count = -3}
            })
        },
    }
}))