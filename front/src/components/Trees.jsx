/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 public\assets\models\trees.glb -o src/components/trees.jsx -r public -s 
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function TreeGreen(props) {
  const { nodes, materials } = useGLTF('/assets/models/Trees.glb')
  return (
    <group {...props} dispose={null}>
      <mesh castShadow receiveShadow geometry={nodes.Icosphere010.geometry} material={materials['Material.001']} position={[-0.979, 4.463, 0.875]} rotation={[-Math.PI / 2, 0, 0]} scale={50.266} />
      <mesh castShadow receiveShadow geometry={nodes.tree.geometry} material={materials['Material.002']} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
    </group>
  )
}

export function TreePink(props) {
  const { nodes, materials } = useGLTF('/assets/models/Trees.glb')
  return (
    <group {...props} dispose={null}>
      <mesh castShadow receiveShadow geometry={nodes.Icosphere001.geometry} material={materials['Material.003']} position={[-9.257, 4.463, 0.875]} rotation={[-Math.PI / 2, 0, 0]} scale={50.266} />
      <mesh castShadow receiveShadow geometry={nodes.tree001.geometry} material={materials['Material.002']} position={[-8.278, 0, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
    </group>
  )
}


useGLTF.preload('/assets/models/trees.glb')
