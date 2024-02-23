import Scene from './Scene';
import { KeyboardControls } from '@react-three/drei';
import BgmSound from './sound/BgmSound';
const GamePage = () => {
    return (
        <>
            <BgmSound />
            <KeyboardControls
                map={[
                {name: 'forward', keys:['ArrowUp', 'KeyW']},
                {name: 'backward', keys:['ArrowDown', 'KeyS']},
                {name: 'leftward', keys:['ArrowLeft', 'KeyA']},
                {name: 'rightward', keys:['ArrowRight', 'KeyD']},
                {name: 'space', keys:['Space']},
                {name: 'shift', keys:['Shift']},
                {name: 'reposition', keys:['KeyR']},
                {name: 'horn', keys:['KeyH']}
                ] } 
            >
                <Scene />
            </KeyboardControls>
        </>
    )
}

export default GamePage