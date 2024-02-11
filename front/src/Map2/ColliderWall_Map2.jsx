import React from 'react'
import * as THREE from 'three'
import { useBox } from "@react-three/cannon";
import ColliderBox from '../ColliderBox';

export default function Wall(props){
    const wallGeometry = new THREE.BoxGeometry(1, 1, 1)
    const wallMaterial = new THREE.MeshStandardMaterial({color: "brown"})
    const position = props.position || [60, 0, -60]
    // const [meshRef] = useBox(
    //     () => ({ mass: 1, type: 'Static'}),
    //  )
    return (
    <group rotation={props.rotation}>
        <ColliderBox scale={[4, 0.1, 6]} position={[position[0] + 5, position[1]+0.06, position[2] + 6]}/>
        <ColliderBox scale={[4, 0.1, 6]} position={[position[0] + 5, position[1]+0.06, position[2]]} />
        <ColliderBox scale={[4, 0.1, 6]} position={[position[0] + 5, position[1]+0.06, position[2] - 6]} />
        <ColliderBox scale={[4, 0.1, 6]} position={[position[0] + 5, position[1]+0.06, position[2] - 12]} />
        <ColliderBox scale={[4, 0.1, 6]} position={[position[0] + 5, position[1]+0.06, position[2] - 18]} />
        <ColliderBox scale={[4, 0.1, 6]} position={[position[0] + 5, position[1]+0.06, position[2] - 24]} />

        <ColliderBox scale={[4, 0.1, 6]} position={[position[0] - 5, position[1]+0.06, position[2] + 6]} />
        <ColliderBox scale={[4, 0.1, 6]} position={[position[0] - 5, position[1]+0.06, position[2]]} />
        <ColliderBox scale={[4, 0.1, 6]} position={[position[0] - 5, position[1]+0.06, position[2] - 6]} />
        <ColliderBox scale={[4, 0.1, 6]} position={[position[0] - 5, position[1]+0.06, position[2] - 12]} />
        <ColliderBox scale={[4, 0.1, 6]} position={[position[0] - 5, position[1]+0.06, position[2] - 18]} />

        <ColliderBox scale={[0.2, 0.1, 6]} position={[position[0] - 14.9, position[1]+0.05, position[2] - 6]} />
        <ColliderBox scale={[0.2, 0.1, 6]} position={[position[0] - 14.9, position[1]+0.05, position[2] - 12]} />
        <ColliderBox scale={[0.2, 0.1, 6]} position={[position[0] - 14.9, position[1]+0.05, position[2] - 18]} />

        <ColliderBox scale={[0.2, 0.1, 6]} position={[position[0] - 21.1, position[1]+0.05, position[2] - 12]} />
        <ColliderBox scale={[0.2, 0.1, 6]} position={[position[0] - 21.1, position[1]+0.05, position[2] - 18]} />
        <ColliderBox scale={[0.2, 0.1, 6]} position={[position[0] - 21.1, position[1]+0.05, position[2] - 24]} />
        <ColliderBox scale={[0.2, 0.1, 6]} position={[position[0] - 21.1, position[1]+0.05, position[2] - 30]} />

        <ColliderBox scale={[0.2, 0.1, 6]} position={[position[0] - 32.9, position[1]+0.05, position[2] - 12]} />
        <ColliderBox scale={[0.2, 0.1, 6]} position={[position[0] - 32.9, position[1]+0.05, position[2] - 18]} />
        <ColliderBox scale={[0.2, 0.1, 6]} position={[position[0] - 32.9, position[1]+0.05, position[2] - 24]} />

        <ColliderBox scale={[0.2, 0.1, 6]} position={[position[0] - 39.1, position[1]+0.05, position[2] - 6]} />
        <ColliderBox scale={[0.2, 0.1, 6]} position={[position[0] - 39.1, position[1]+0.05, position[2] - 12]} />
        <ColliderBox scale={[0.2, 0.1, 6]} position={[position[0] - 39.1, position[1]+0.05, position[2] - 18]} />

        <ColliderBox scale={[0.2, 0.1, 6]} position={[position[0] - 56.9, position[1]+0.05, position[2]]} />
        <ColliderBox scale={[0.2, 0.1, 6]} position={[position[0] - 56.9, position[1]+0.05, position[2] - 6]} />
        <ColliderBox scale={[0.2, 0.1, 6]} position={[position[0] - 56.9, position[1]+0.05, position[2] - 12]} />
        <ColliderBox scale={[0.2, 0.1, 6]} position={[position[0] - 56.9, position[1]+0.05, position[2] - 18]} />

        <ColliderBox scale={[0.2, 0.1, 6]} position={[position[0] - 63.1, position[1]+0.05, position[2]]} />
        <ColliderBox scale={[0.2, 0.1, 6]} position={[position[0] - 63.1, position[1]+0.05, position[2] - 6]} />
        <ColliderBox scale={[0.2, 0.1, 6]} position={[position[0] - 63.1, position[1]+0.05, position[2] - 12]} />
        <ColliderBox scale={[0.2, 0.1, 6]} position={[position[0] - 63.1, position[1]+0.05, position[2] - 18]} />
        <ColliderBox scale={[0.2, 0.1, 6]} position={[position[0] - 63.1, position[1]+0.05, position[2] - 24]} />

        <ColliderBox scale={[0.2, 0.1, 6]} position={[position[0] - 6, position[1]+0.05, position[2] - 3]} />
        <ColliderBox scale={[0.2, 0.1, 6]} position={[position[0] - 6, position[1]+0.05, position[2] - 9]} />
        <ColliderBox scale={[0.2, 0.1, 6]} position={[position[0] - 6, position[1]+0.05, position[2] - 15]} />
        <ColliderBox scale={[0.2, 0.1, 6]} position={[position[0] - 6, position[1]+0.05, position[2] - 18]} />

        <ColliderBox scale={[0.2, 0.1, 6]} position={[position[0] - 12, position[1]+0.05, position[2] - 3]} />
        <ColliderBox scale={[0.2, 0.1, 6]} position={[position[0] - 12, position[1]+0.05, position[2] - 9]} />
        <ColliderBox scale={[0.2, 0.1, 6]} position={[position[0] - 12, position[1]+0.05, position[2] - 15]} />
        <ColliderBox scale={[0.2, 0.1, 6]} position={[position[0] - 12, position[1]+0.05, position[2] - 18]} />
        
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