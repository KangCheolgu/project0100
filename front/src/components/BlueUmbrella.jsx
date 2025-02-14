/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 public/assets/models/BlueUmbrella.glb -o src/components/BlueUmbrella.jsx -r public/ 
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import ColliderBox from '../ColliderBox'

export function BlueUmbrella(props) {
  const { nodes, materials } = useGLTF('/assets/models/BlueUmbrella.glb')
  const position=props.position
  return (
    <group {...props} dispose={null}>
      <ColliderBox scale={[0.3, 5, 0.3]} position={position}/>
      <mesh castShadow geometry={nodes.group1776344293.geometry} material={materials.mat21} />
      <mesh castShadow geometry={nodes.mesh822346014.geometry} material={materials.mat21} />
      <mesh castShadow geometry={nodes.mesh822346014_1.geometry} material={materials.mat5} />
      <mesh castShadow geometry={nodes.mesh822346014_2.geometry} material={materials.mat16} />
      <mesh castShadow geometry={nodes.mesh822346014_3.geometry} material={materials.mat22} />
    </group>
  )
}

useGLTF.preload('/assets/models/BlueUmbrella.glb')
