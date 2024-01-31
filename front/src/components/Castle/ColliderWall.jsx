import React from 'react'
import * as THREE from 'three'
import { useBox } from "@react-three/cannon";
import ColliderBox from './ColliderBox'

export default function Wall(){
    const wallGeometry = new THREE.BoxGeometry(1, 1, 1)
    const wallMaterial = new THREE.MeshStandardMaterial({color: "brown"})
    // const [meshRef] = useBox(
    //     () => ({ mass: 1, type: 'Static'}),
    //  )
    return (<>
        {/* 동 */}
        <ColliderBox position = {[0, 0, 0]} scale = {[40, 0.1, 40]} rotation={[Math.PI/2, 0, 0]}></ColliderBox>
        {/* 서 */}
        <ColliderBox position = {[-28, 10, 36.5]} scale = {[100, 1, 20]} rotation={[Math.PI/2, 0, 0]}></ColliderBox>
        
        {/* 북 */}
        <ColliderBox position = {[-84, 10, 20]} scale = {[50, 1, 20]} rotation={[Math.PI/2, 0, Math.PI/2]}></ColliderBox>
        {/* 남 */}
        <ColliderBox position = {[22, 10, 20]} scale = {[34, 1, 20]} rotation={[Math.PI/2, 0, Math.PI/2]}></ColliderBox>
    </>
    )
}