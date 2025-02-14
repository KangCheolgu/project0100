/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 public/assets/models/RainbowUmbrella.glb -o src/components/RainbowUmbrella.jsx -r public/ 
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function RainbowUmbrella(props) {
  const { nodes, materials } = useGLTF('/assets/models/RainbowUmbrella.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.group1776344293.geometry} material={materials.mat21} />
      <mesh geometry={nodes.mesh822346014.geometry} material={materials.mat4} />
      <mesh geometry={nodes.mesh822346014_1.geometry} material={materials.mat5} />
      <mesh geometry={nodes.mesh822346014_2.geometry} material={materials.mat2} />
      <mesh geometry={nodes.mesh822346014_3.geometry} material={materials.mat1} />
      <mesh geometry={nodes.mesh822346014_4.geometry} material={materials.mat7} />
      <mesh geometry={nodes.mesh822346014_5.geometry} material={materials.mat8} />
      <mesh geometry={nodes.mesh822346014_6.geometry} material={materials.mat14} />
      <mesh geometry={nodes.mesh822346014_7.geometry} material={materials.mat13} />
      <mesh geometry={nodes.mesh822346014_8.geometry} material={materials.mat12} />
      <mesh geometry={nodes.mesh822346014_9.geometry} material={materials.mat9} />
      <mesh geometry={nodes.mesh822346014_10.geometry} material={materials.mat10} />
      <mesh geometry={nodes.mesh822346014_11.geometry} material={materials.mat11} />
      <mesh geometry={nodes.mesh822346014_12.geometry} material={materials.mat16} />
      <mesh geometry={nodes.mesh822346014_13.geometry} material={materials.mat22} />
    </group>
  )
}

useGLTF.preload('/assets/models/RainbowUmbrella.glb')
