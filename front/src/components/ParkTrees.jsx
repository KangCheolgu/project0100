/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 public\assets\models\ParkTrees.glb -o src/components/ParkTrees.jsx -r public 
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function ParkTreePink(props) {
  const { nodes, materials } = useGLTF('/assets/models/ParkTrees.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Icosphere001.geometry} material={materials['Material.003']} position={[-9.257, 4.463, 0.875]} rotation={[-Math.PI / 2, 0, 0]} scale={50.266} />
      <mesh geometry={nodes.tree001.geometry} material={materials['Material.002']} position={[-8.278, 0, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
    </group>
  )
}
export function ParkTreeGreen(props) {
  const { nodes, materials } = useGLTF('/assets/models/ParkTrees.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Icosphere010.geometry} material={materials['Material.001']} position={[-0.979, 4.463, 0.875]} rotation={[-Math.PI / 2, 0, 0]} scale={50.266} />
      <mesh geometry={nodes.tree.geometry} material={materials['Material.002']} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
    </group>
  )
}

useGLTF.preload('/assets/models/ParkTrees.glb')
