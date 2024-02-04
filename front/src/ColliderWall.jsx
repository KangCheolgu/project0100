import React from 'react'
import * as THREE from 'three'
import { useBox } from "@react-three/cannon";
import ColliderBox from './ColliderBox'

export default function Wall(props){
    const wallGeometry = new THREE.BoxGeometry(1, 1, 1)
    const wallMaterial = new THREE.MeshStandardMaterial({color: "brown"})
    // const [meshRef] = useBox(
    //     () => ({ mass: 1, type: 'Static'}),
    //  )
    return (
    <group rotation={props.rotation}>
        <ColliderBox scale={[300, 0.1, 300]} position={[0, 0, 0]} />
        <ColliderBox scale={[11, 10, 15]} position={[12, 5, -15]}/>
        <ColliderBox scale={[5, 10, 15]} position={[33,  5, -15]}/>
        <ColliderBox scale={[5, 10, 15]} position={[51, 5, -15]}/>

        <ColliderBox scale={[76, 20, 0.1]} position={[29, 10, 6]}/>
        <ColliderBox scale={[55, 20, 0.1]} position={[29, 10, -36]}/>
        <ColliderBox scale={[0.1, 20, 44]} position={[-6, 10, -16]}/>
        <ColliderBox scale={[0.1, 20, 44]} position={[65, 10, -16]}/>
    </group>
    )
}