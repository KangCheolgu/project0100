import {useBox} from '@react-three/cannon';

export default function ColliderBox({position, scale, rotation}){
    useBox(()=>({
        args:scale,
        position,
        rotation,
        type: "Static",
    }));

    return (
        <mesh position={position} rotation={rotation}>
            <boxGeometry args={scale}/>
            <meshBasicMaterial transparent={true} opacity={0}/>
        </mesh>
    )
}