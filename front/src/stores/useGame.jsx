import create  from 'zustand' 
import { subscribeWithSelector } from 'zustand/middleware'

export default create(subscribeWithSelector(//상태 변경시 자동 호출
(set)=>
{
    return {
        
        //Countdown
        count: 10,

        // Time        
        startTime: 0, 
        endTime: 0,
        
        // lap
        lapse : 1,
        isIn : [false,false, false, false],

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
                if(state.phase === 'playing'||state.phase==='ended')
                    return {phase: 'ready', isIn: [false, false, false, false], lapse: 0}
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
        },
        
        around:()=>
        {
            set((state)=>
            {
                return {lapse: state.lapse+1, isIn: [false, false, false, false]}
                
            })
        },

        inspot:(index)=>
        {
            set((state) => {
                const updateIsIn = [...state.isIn];
                updateIsIn[index] = true;
                return { isIn: updateIsIn };
            });
    
        },
        outspot: (state, index)=>
        {
            const updateIsIn = [...state.isIn]
            updateIsIn[index] = false
            return { ...state, isIn: updateIsIn };
        },

        Countdown: ()=>{
            set((state)=>{
                if(state.count > -3)
                    return {count : state.count - 1}
                else
                    return {count : state.count = -3}
            })
        }
    }
}))