import React from 'react'
import * as THREE from 'three'
import { useBox } from "@react-three/cannon";
import ColliderBox from '../ColliderBox';

export default function Wall(props){
    const wallGeometry = new THREE.BoxGeometry(1, 1, 1)
    const wallMaterial = new THREE.MeshStandardMaterial({color: "brown"})
    const position = props.position || [60, 0, -94]
    // const [meshRef] = useBox(
    //     () => ({ mass: 1, type: 'Static'}),
    //  )
    return (
    <group rotation={props.rotation}>
        <ColliderBox scale={[12, 0.1, 50]} position={[position[0] + 9, position[1]+0.05, position[2] - 16]}/>
        <ColliderBox scale={[12, 0.1, 50]} position={[position[0] - 69, position[1]+0.05, position[2] - 16]}/>

        <ColliderBox scale={[12, 0.1, 34]} position={[position[0] - 9, position[1]+0.05, position[2] - 8]} />
        <ColliderBox scale={[12, 0.1, 34]} position={[position[0] - 27, position[1]+0.05, position[2] - 22]} />
        <ColliderBox scale={[18, 0.1, 34]} position={[position[0] - 48, position[1]+0.05, position[2] - 8]} />

        <ColliderBox scale={[100, 0.1, 12]} position={[position[0] - 30, position[1]+0.05, position[2] - 38.9]} />

        
    </group>
    )
}

// export default function CurveWall(props) {
//     const curveRef = useRef();
//     const meshRef = useRef();

//     useFrame(() => {
//         const curve = curveRef.current;

//         // 이 부분에서 베지어 곡선을 따라 mesh의 위치를 업데이트합니다.
//         const position = curve.getPointAt(props.progress);
//         meshRef.current.position.copy(position);
//     });

//     return (
//         <>
//             <mesh ref={meshRef}>
//                 <boxGeometry args={[1, 1, 1]} />
//                 <meshStandardMaterial color="brown" />
//             </mesh>
//             <line ref={curveRef}>
//                 <bufferGeometry attach="geometry" />
//                 <lineBasicMaterial attach="material" color="white" />
//             </line>
//         </>
//     );
// }