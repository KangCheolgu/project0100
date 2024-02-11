/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 public/assets/models/Seagull1.glb -o src/components/Seagull1.jsx -r public/ 
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import ColliderBox from '../ColliderBox'
export function Seagull1(props) {
  const { nodes, materials } = useGLTF('/assets/models/Seagull1.glb')
  const position=props.position
  const rotation= props.rotation
  return (
    <group {...props} dispose={null}>
      <ColliderBox scale={[1, 5, 1.7]} position={[position[0], position[1], position[2]+0.3]} rotation={rotation}/>
      <mesh castShadow geometry={nodes.Gull.geometry} material={materials.lambert4SG} />
    </group>
  )
}

useGLTF.preload('/assets/models/Seagull1.glb')
