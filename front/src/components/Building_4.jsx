/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 public/assets/models/Building_4.glb -o src/components/Building_4.jsx -r public/ -s -S -T 
Files: public/assets/models/Building_4.glb [1.99MB] > C:\Users\푸린\Desktop\activity\jungle\project0100\front\src\components\Building_4-transformed.glb [357.04KB] (82%)
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/../src/components/Building_4-transformed.glb')
  return (
    <group {...props} dispose={null}>
      <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
        <mesh castShadow receiveShadow geometry={nodes.Scene005.geometry} material={materials['Walls_2_3.002']} />
        <mesh castShadow receiveShadow geometry={nodes.Scene005_1.geometry} material={materials['Walls_3.001']} />
        <mesh castShadow receiveShadow geometry={nodes.Scene005_2.geometry} material={materials['Walls_4.001']} />
        <mesh castShadow receiveShadow geometry={nodes.Scene005_3.geometry} material={materials['Doors.002']} />
        <mesh castShadow receiveShadow geometry={nodes.Scene005_4.geometry} material={materials['Parts.002']} />
        <mesh castShadow receiveShadow geometry={nodes.Scene005_5.geometry} material={materials['Wood.001']} />
        <mesh castShadow receiveShadow geometry={nodes.Scene005_6.geometry} material={materials['Plinth_3.001']} />
        <mesh castShadow receiveShadow geometry={nodes.Scene005_7.geometry} material={materials['Roof.002']} />
        <mesh castShadow receiveShadow geometry={nodes.Scene005_8.geometry} material={materials['Stairs.002']} />
        <mesh castShadow receiveShadow geometry={nodes.Scene005_9.geometry} material={materials['Brick_walls_2_1.002']} />
        <mesh castShadow receiveShadow geometry={nodes.Scene005_10.geometry} material={materials['Windows.002']} />
        <mesh castShadow receiveShadow geometry={nodes.Scene005_11.geometry} material={materials['Airing.002']} />
        <mesh castShadow receiveShadow geometry={nodes.Scene005_12.geometry} material={materials['Wall_clumb.001']} />
        <mesh castShadow receiveShadow geometry={nodes.Scene005_13.geometry} material={materials['Walls_3_2.001']} />
      </group>
    </group>
  )
}

useGLTF.preload('/../src/components/Building_4-transformed.glb')
