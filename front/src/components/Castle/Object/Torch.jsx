import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import * as THREE from 'three'

export function Torch(props) {
  const { nodes, materials } = useGLTF('/assets/models/Torch.glb')
  
  return (
    <group {...props} dispose={null}>
    <pointLight color={0xff0000} intensity={2} distance={100} position={[0, 0.3, 0]} />
      <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh geometry={nodes.Torch_1.geometry} material={materials.DarkMetal} />
        <mesh geometry={nodes.Torch_2.geometry} material={materials.Fire} />
      </group>
    </group>
  )
}

export function Torch2(props) {
    const { nodes, materials } = useGLTF('/assets/models/Torch.glb')
    
    return (
      <group {...props} dispose={null}>
      <pointLight color={0xff0000} intensity={2} distance={100} position={[0, 0.3, 0]} />
        <group rotation={[-Math.PI / 2, 0, Math.PI]} scale={100}>
          <mesh geometry={nodes.Torch_1.geometry} material={materials.DarkMetal} />
          <mesh geometry={nodes.Torch_2.geometry} material={materials.Fire} />
        </group>
      </group>
    )
  }

useGLTF.preload('/assets/models/Torch.glb')
