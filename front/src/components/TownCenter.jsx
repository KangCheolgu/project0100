/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 public\assets\models\TownCenter.glb -o src/components/TownCenter.jsx -r public 
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function TownCenter(props) {
  const { nodes, materials } = useGLTF('/assets/models/TownCenter.glb')
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh castShadow receiveShadow geometry={nodes.TownCenter_SecondAge_Level3_1.geometry} material={materials.Stone} />
        <mesh castShadow receiveShadow geometry={nodes.TownCenter_SecondAge_Level3_2.geometry} material={materials.Green} />
        <mesh castShadow receiveShadow geometry={nodes.TownCenter_SecondAge_Level3_3.geometry} material={materials.Water} />
      </group>
    </group>
  )
}

useGLTF.preload('/assets/models/TownCenter.glb')
