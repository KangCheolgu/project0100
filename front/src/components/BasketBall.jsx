/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 public/assets/models/BasketBall.glb -o src/components/BasketBall.jsx -r public/ 
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function BasketBall(props) {
  const { nodes, materials } = useGLTF('/assets/models/BasketBall2.glb')
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh geometry={nodes.BasketBall1_1.geometry} material={materials.Orange1BasketBall1} />
        <mesh geometry={nodes.BasketBall1_2.geometry} material={materials.Black1BasketBall1} />
      </group>
    </group>
  )
}

useGLTF.preload('/assets/models/Basketball2.glb')
