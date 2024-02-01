/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 public\assets\models\Art2.glb -o src/components/library/object/Art2.jsx -r public 
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/assets/models/Art2.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes['Node-Mesh'].geometry} material={materials.mat23} />
      <mesh geometry={nodes['Node-Mesh_1'].geometry} material={materials.mat21} />
      <mesh geometry={nodes['Node-Mesh_2'].geometry} material={materials.mat7} />
      <mesh geometry={nodes['Node-Mesh_3'].geometry} material={materials.mat6} />
      <mesh geometry={nodes['Node-Mesh_4'].geometry} material={materials.mat17} />
      <mesh geometry={nodes['Node-Mesh_5'].geometry} material={materials.mat24} />
      <mesh geometry={nodes['Node-Mesh_6'].geometry} material={materials.mat25} />
    </group>
  )
}

useGLTF.preload('/assets/models/Art2.glb')
