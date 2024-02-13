import {useCylinder} from '@react-three/cannon';

export default function ColliderCylinder(props){
    const position = props.position
    const rotation = props.rotation
    const args = props.args
    useCylinder(()=>({
        args: args,
        position,
        rotation,
        type: "Static",
    }));

    return (
        <mesh position={position} rotation={rotation}>
            <cylinderGeometry args={args}/>
            <meshBasicMaterial transparent={false} opacity={1}/>
        </mesh>
    )
}