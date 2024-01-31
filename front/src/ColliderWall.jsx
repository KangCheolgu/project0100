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
        {/* 동 */}
        <ColliderBox position = {[-28, 10, 3.57]} scale = {[100, 1, 20]} rotation={[Math.PI/2, 0, 0]}></ColliderBox>
        <ColliderBox position = {[-25, 10, -3.57]} scale = {[120, 1, 20]} rotation={[Math.PI/2, 0, 0]}></ColliderBox>
        {/* <mesh ref={meshRef} geometry ={wallGeometry} position = {[-28, 10, 3.57]} scale = {[100, 1, 20]} rotation={[Math.PI/2, 0, 0]} material = {wallMaterial}/>
        <mesh ref={meshRef} geometry ={wallGeometry} position = {[-25, 10, -3.57]} scale = {[120, 1, 20]} rotation={[Math.PI/2, 0, 0]} material = {wallMaterial}/> */}
        {/* 서 */}
        <ColliderBox position = {[-28, 10, 36.5]} scale = {[100, 1, 20]} rotation={[Math.PI/2, 0, 0]}></ColliderBox>
        <ColliderBox position = {[-25, 10, 43.5]} scale = {[120, 1, 20]} rotation={[Math.PI/2, 0, 0]}></ColliderBox>
        {/* <mesh ref={meshRef} geometry ={wallGeometry} position = {[-28, 10, 36.5]} scale = {[100, 1, 20]} rotation={[Math.PI/2, 0, 0]} material = {wallMaterial}/>
        <mesh ref={meshRef} geometry ={wallGeometry} position = {[-25, 10, 43.5]} scale = {[120, 1, 20]} rotation={[Math.PI/2, 0, 0]} material = {wallMaterial}/> */}
        
        {/* 북 */}
        <ColliderBox position = {[-77, 10, 20]} scale = {[34, 1, 20]} rotation={[Math.PI/2, 0, Math.PI/2]}></ColliderBox>
        <ColliderBox position = {[-84, 10, 20]} scale = {[50, 1, 20]} rotation={[Math.PI/2, 0, Math.PI/2]}></ColliderBox>
        {/* <mesh ref={meshRef} geometry ={wallGeometry} position = {[-77, 10, 20]} scale = {[34, 1, 20]} rotation={[Math.PI/2, 0, Math.PI/2]} material = {wallMaterial}/>
        <mesh ref={meshRef} geometry ={wallGeometry} position = {[-84, 10, 20]} scale = {[50, 1, 20]} rotation={[Math.PI/2, 0, Math.PI/2]} material = {wallMaterial}/> */}
        {/* 남 */}
        <ColliderBox position = {[22, 10, 20]} scale = {[34, 1, 20]} rotation={[Math.PI/2, 0, Math.PI/2]}></ColliderBox>
        <ColliderBox position = {[29, 10, 20]} scale = {[50, 1, 20]} rotation={[Math.PI/2, 0, Math.PI/2]}></ColliderBox>
        {/* <mesh ref={meshRef} geometry ={wallGeometry} position = {[22, 10, 20]} scale = {[34, 1, 20]} rotation={[Math.PI/2, 0, Math.PI/2]} material = {wallMaterial}/>
        <mesh ref={meshRef} geometry ={wallGeometry} position = {[29, 10, 20]} scale = {[50, 1, 20]} rotation={[Math.PI/2, 0, Math.PI/2]} material = {wallMaterial}/> */}
        
        {/* 사선 */}
        <ColliderBox position={[28.5, 10, 0]} scale={[20, 1, 20]} material = {wallMaterial} rotation={[Math.PI/2, 0, Math.PI/4]}></ColliderBox>
        <ColliderBox position={[28.5, 10, 40]} scale={[20, 1, 20]} material = {wallMaterial} rotation={[Math.PI/2, 0, -Math.PI/4]}></ColliderBox>
        <ColliderBox position={[-83.5, 10, 0]} scale={[20, 1, 20]} material = {wallMaterial} rotation={[-Math.PI/2, 0, Math.PI/4]}></ColliderBox>
        <ColliderBox position={[-83.5, 10, 40]} scale={[20, 1, 20]} material = {wallMaterial} rotation={[Math.PI/2, 0, Math.PI/4]}></ColliderBox>
        {/* <mesh ref={meshRef} geometry = {wallGeometry} position={[28.5, 10, 0]} scale={[20, 1, 20]} material = {wallMaterial} rotation={[Math.PI/2, 0, Math.PI/4]}/>
        <mesh ref={meshRef} geometry = {wallGeometry} position={[28.5, 10, 40]} scale={[20, 1, 20]} material = {wallMaterial} rotation={[Math.PI/2, 0, -Math.PI/4]}/>
        <mesh ref={meshRef} geometry = {wallGeometry} position={[-83.5, 10, 0]} scale={[20, 1, 20]} material = {wallMaterial} rotation={[-Math.PI/2, 0, Math.PI/4]}/>
        <mesh ref={meshRef} geometry = {wallGeometry} position={[-83.5, 10, 40]} scale={[20, 1, 20]} material = {wallMaterial} rotation={[Math.PI/2, 0, Math.PI/4]}/> */}
    </group>
    )
}