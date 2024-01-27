import create  from 'zustand' 
import { subscribeWithSelector } from 'zustand/middleware'

export default create(subscribeWithSelector(//상태 변경시 자동 호출
(set)=>
{
    return {
        
        // Time        
        startTime: 0, 
        endTime: 0,
        
        // lap
        lap : 0,
        // Phase
        phase: 'ready',
        start:() =>

        {
            set((state)=>
            {
                if(state.phase === 'ready'){
                    return {phase: 'playing', startTime: Date.now(), lap: 1 }
                }
                return {}
            })
        },

        restart:() =>
        {
            set((state)=>
            {
                if(state.phase === 'playing'||state.phase==='ended')
                    return {phase: 'ready'}
                return {}
            })
        },

        end:() =>
        {
            set((state)=>
            {
                if(state.phase === 'playing')
                    return {phase: 'ended', endTime: Date.now()}
                return {}
            })
        }
    }
}))