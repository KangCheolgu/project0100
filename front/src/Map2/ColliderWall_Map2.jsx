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

        <ColliderBox scale={[11.8, 0.1, 0.5]} position={[position[0] - 9, position[1]+0.05, position[2] - 25.2]} />
        <ColliderBox scale={[11.4, 0.1, 0.5]} position={[position[0] - 9, position[1]+0.05, position[2] - 25.7]} />
        <ColliderBox scale={[10.8, 0.1, 0.5]} position={[position[0] - 9, position[1]+0.05, position[2] - 26.2]} />
        <ColliderBox scale={[10.2, 0.1, 0.3]} position={[position[0] - 9, position[1]+0.05, position[2] - 26.5]} />
        <ColliderBox scale={[9, 0.1, 0.5]} position={[position[0] - 9, position[1]+0.05, position[2] - 26.8]} />

        <ColliderBox scale={[17.8, 0.1, 0.5]} position={[position[0] - 48, position[1]+0.05, position[2] - 25.2]} />
        <ColliderBox scale={[17.4, 0.1, 0.5]} position={[position[0] - 48, position[1]+0.05, position[2] - 25.7]} />
        <ColliderBox scale={[16.8, 0.1, 0.5]} position={[position[0] - 48, position[1]+0.05, position[2] - 26.2]} />
        <ColliderBox scale={[16.2, 0.1, 0.3]} position={[position[0] - 48, position[1]+0.05, position[2] - 26.5]} />
        <ColliderBox scale={[15, 0.1, 0.5]} position={[position[0] - 48, position[1]+0.05, position[2] - 26.8]} />

        <ColliderBox scale={[11.8, 0.1, 0.5]} position={[position[0] - 27, position[1]+0.05, position[2] - 4.8]} />
        <ColliderBox scale={[11.4, 0.1, 0.5]} position={[position[0] - 27, position[1]+0.05, position[2] - 4.3]} />
        <ColliderBox scale={[10.8, 0.1, 0.5]} position={[position[0] - 27, position[1]+0.05, position[2] - 3.8]} />
        <ColliderBox scale={[10.2, 0.1, 0.3]} position={[position[0] - 27, position[1]+0.05, position[2] - 3.5]} />
        <ColliderBox scale={[9, 0.1, 0.5]} position={[position[0] - 27, position[1]+0.05, position[2] - 3.2]} />

        <ColliderBox scale={[12, 0.1, 34]} position={[position[0] - 9, position[1]+0.05, position[2] - 8]} />
        <ColliderBox scale={[12, 0.1, 34]} position={[position[0] - 27, position[1]+0.05, position[2] - 22]} />
        <ColliderBox scale={[18, 0.1, 34]} position={[position[0] - 48, position[1]+0.05, position[2] - 8]} />

        <ColliderBox scale={[100, 0.1, 12]} position={[position[0] - 30, position[1]+0.05, position[2] - 38.9]} />
        <ColliderBox scale={[35, 0.1, 6]} position={[position[0] - 30, position[1]+0.05, position[2] + 6]} />


        {/* 건물 */}
        <ColliderBox scale={[0.1, 10, 50]} position={[position[0]+3, position[1]+0.05, position[2] + 33]}/>
        <ColliderBox scale={[0.1, 10, 50]} position={[position[0]-3, position[1]+0.05, position[2] + 33]}/>
        <ColliderBox scale={[0.1, 10, 50]} position={[position[0]-63, position[1]+0.05, position[2] + 33]}/>
        <ColliderBox scale={[0.1, 10, 50]} position={[position[0]-57, position[1]+0.05, position[2] + 33]}/>

        <ColliderBox scale={[0.1, 10, 30]} position={[position[0]-3, position[1]+0.05, position[2] - 10]}/>
        <ColliderBox scale={[0.1, 10, 30]} position={[position[0]-15, position[1]+0.05, position[2] - 10]}/>

        <ColliderBox scale={[0.1, 10, 16]} position={[position[0]+12.5, position[1]+5, position[2] + 1]}/>
        <ColliderBox scale={[0.1, 10, 30]} position={[position[0] + 5.5, position[1]+5, position[2] - 22]}/>

        <ColliderBox scale={[0.1, 10, 30]} position={[position[0] - 25, position[1]+5, position[2] - 26]}/>
        <ColliderBox scale={[0.1, 10, 30]} position={[position[0] - 29, position[1]+5, position[2] - 26]}/>
        
    </group>
    )
}
