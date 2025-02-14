/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 public/assets/models/Building_10.glb -o src/components/Building_10.jsx -r public/ -s -S -T 
Files: public/assets/models/Building_10.glb [1.22MB] > C:\Users\푸린\Desktop\activity\jungle\project0100\front\src\components\Building_10-transformed.glb [219.26KB] (82%)
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/../src/components/Building_10-transformed.glb')
  return (
    <group {...props} dispose={null}>
      <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
        <mesh castShadow receiveShadow geometry={nodes.Scene010.geometry} material={materials['Roof.002']} />
        <mesh castShadow receiveShadow geometry={nodes.Scene010_1.geometry} material={materials['Walls_4.001']} />
        <mesh castShadow receiveShadow geometry={nodes.Scene010_2.geometry} material={materials['Walls_1.002']} />
        <mesh castShadow receiveShadow geometry={nodes.Scene010_3.geometry} material={materials['Doors.002']} />
        <mesh castShadow receiveShadow geometry={nodes.Scene010_4.geometry} material={materials['Plinth_3.001']} />
        <mesh castShadow receiveShadow geometry={nodes.Scene010_5.geometry} material={materials['Stairs.002']} />
        <mesh castShadow receiveShadow geometry={nodes.Scene010_6.geometry} material={materials['Walls_6.001']} />
        <mesh castShadow receiveShadow geometry={nodes.Scene010_7.geometry} material={materials['Walls_1_3.001']} />
        <mesh castShadow receiveShadow geometry={nodes.Scene010_8.geometry} material={materials['Windows.002']} />
        <mesh castShadow receiveShadow geometry={nodes.Scene010_9.geometry} material={materials['Airing.002']} />
        <mesh castShadow receiveShadow geometry={nodes.Scene010_10.geometry} material={materials['Awnings.001']} />
        <mesh castShadow receiveShadow geometry={nodes.Scene010_11.geometry} material={materials['Shutters.001']} />
      </group>
    </group>
  )
}

useGLTF.preload('/../src/components/Building_10-transformed.glb')
