import React from 'react'
import * as THREE from 'three'
import { useBox } from "@react-three/cannon";
import ColliderBox from '../ColliderBox'

export default function Wall(props){
    const wallGeometry = new THREE.BoxGeometry(1, 1, 1)
    const wallMaterial = new THREE.MeshStandardMaterial({color: "brown"})
    // const [meshRef] = useBox(
    //     () => ({ mass: 1, type: 'Static'}),
    //  )
    return (
    <group rotation={props.rotation}>
        <ColliderBox scale={[80, 20, 0.1]} position={[29, 7, +65]}/>
        <ColliderBox scale={[0.1, 20, 120]} position={[-6, 9, +20]}/>
        <ColliderBox scale={[0.1, 20, 120]} position={[65, 9, +20]}/>
        
        <ColliderBox scale={[100, 0.1, 150]} position={[30, 0, -72]} />
        <ColliderBox scale={[100, 0.01, 60]} position={[30, -0.51, 39]} />

        <ColliderBox scale={[12.25, 10, 12]} position={[33,  5,-15]}/>
        {/*<ColliderBox scale={[7.2, 10, 7.5]} position={[33,  5, -19.8]}/>*/}
        
        {/* Section 3 */}
        <ColliderBox scale={[7.2, 10, 7.5]} position={[51,  5, -9.85]}/>
        <ColliderBox scale={[7.2, 10, 7.5]} position={[51,  5, -19.8]}/>

        

        {/*<ColliderBox scale={[21, 10, 12]} position={[55, 5, -15]}/>*/}
        {/* Section1 */}
        <ColliderBox scale={[12, 10, 18]} position={[12, 5, -15]}/>
        
        {/*<ColliderBox scale={[76, 20, 0.1]} position={[29, 10, 6]}/>*/}
        <ColliderBox scale={[55, 20, 0.1]} position={[29, 10, -36]}/>
        



        {/* Block*/ }
        <ColliderBox scale={[12, 10, 12]} position={[12, 5, -30]}/>
        {/*<ColliderBox scale={[12, 10, 15]} position={[51, 5, -28.5]}/>*/}
        {/*<ColliderBox scale={[12, 10, 17]} position={[24, 5, -15]}/>*/}
        <ColliderBox scale={[12, 10, 9]} position={[12, 5, -1.5]}/>
        <ColliderBox scale={[11, 10, 7.5]} position={[60,  5, -19.8]}/>
        <ColliderBox scale={[8.25, 10, 7.5]} position={[43.25, 5, -19.8]}/>
        <ColliderBox scale={[7.2, 10, 9.4]} position={[51,  5, -1.4]}/>
        
        
    </group>
    )
}