import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function CarModel() {
  const { nodes, materials } = useGLTF('/assets/models/Rover.glb')
  return (
    <group scale={[0.34,0.32,0.46]} position={[0,-0.13,-0.02]} rotation-y={Math.PI}>
        <group position={[-0.001, 0.246, -0.031]}  rotation={[-Math.PI / 2, 0, 0]} scale={20}>
            <mesh geometry={nodes.Rover_1.geometry} material={materials.Atlas} />
        </group>
    </group>
  )
}

useGLTF.preload('/assets/models/Rover.glb')