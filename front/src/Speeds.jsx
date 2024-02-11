import {Instances, Instance} from "@react-three/drei";
import {useFrame} from "@react-three/fiber";
import {useRef} from "react";
import {AdditiveBlending, DoubleSide, MathUtils} from "three";
const INSTANCES = 240;
const MAX_OPACITY=0.1;

const SpeedShape=()=>{
    const ref = useRef();
    let randomPosition={
        x: 0,
        y: 0,
        z:0,
    }
    let randomSpeed =0;

    const resetRandom = ()=>{
        randomPosition = {
            x: MathUtils.randFloatSpread(8),
            y:MathUtils.randFloatSpread(5),
            z: MathUtils.randFloatSpread(8),
        }
        randomSpeed=MathUtils.randFloat(16, 20);
    }
    resetRandom();
    useFrame((_state, delta)=>{
        if(ref.current){
            ref.current.position.z+=randomSpeed*delta;
            if(ref.current.position.z>5){
                resetRandom();
                ref.current.position.z = randomPosition.z;
            }
        }
    });
    return (
    <Instance
        ref={ref} 
        color="black" 
        position={[randomPosition.x, randomPosition.y, randomPosition.z]}
        rotation-y={Math.PI/2}
        />
    );
};
export const Speed = () =>{
    const speedMaterial = useRef();
    return(
        <group>
            <Instances>
                <planeGeometry args={[1, 0.01]}/>
                <meshBasicMaterial
                    side={DoubleSide}
                    blending={'AdditiveBlending'}
                    opacity={1}
                    transparent
                    ref={speedMaterial}
                />
                {Array(INSTANCES)
                    .fill()
                    .map((_, key)=>(
                    <SpeedShape key ={key}/>
                ))}
            </Instances>
        </group>
    );
};