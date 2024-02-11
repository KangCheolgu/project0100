/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 public/assets/models/Duck.glb -o src/components/Duck.jsx -r public/ 
*/
import {useBox } from '@react-three/cannon'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import ColliderBox from '../ColliderBox'
export function Duck(props) {
  const position = props.position
  const { nodes, materials } = useGLTF('/assets/models/Duck.glb')
  
  return (
    
    <group {...props} dispose={null}>
      <ColliderBox scale={[5.5, 5, 3.8]} position={position}/>
      <mesh geometry={nodes.RubberDuck_mesh.geometry} material={materials.RubberDuck_mat1} />
    </group>
  )
}

useGLTF.preload('/assets/models/Duck.glb')
