/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 public/assets/models/Signs2.glb -o src/components/Signs2.jsx -r public/ 
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Signs2(props) {
  const { nodes, materials } = useGLTF('/assets/models/Signs2.glb')
  return (
    <group {...props} dispose={null}>
      <group position={[6.223, -1.397, 0.056]} rotation={[Math.PI / 2, 0, -Math.PI]} scale={0.01}>
        <group position={[643.714, 141.642, -195.47]}>
          <group position={[0, 2.5, -214.6]} rotation={[0, Math.PI / 4, -Math.PI]} scale={[0.916, 1, 0.916]}>
            <mesh geometry={nodes.Plane.geometry} material={materials.Sign_Backing} scale={[50, 100, 50]} />
            <mesh geometry={nodes.Plane_001.geometry} material={materials.Sign_Backing} position={[0, -0.1, -50]} rotation={[-1.57, 0, 0]} scale={[50, 100, 0.2]} />
            <mesh geometry={nodes.Plane_002.geometry} material={materials.Sign_Backing} position={[50, -0.1, 0]} rotation={[-Math.PI / 2, 0, -Math.PI / 2]} scale={[50, 100, 0.2]} />
            <mesh geometry={nodes.Plane_003.geometry} material={materials.Sign_Backing} position={[-50, -0.1, 0]} rotation={[Math.PI / 2, 0, Math.PI / 2]} scale={[50, 100, 0.2]} />
            <mesh geometry={nodes.Plane_004.geometry} material={materials.Sign_Backing} position={[0, -0.1, 50]} rotation={[1.57, 0, 0]} scale={[50, 100, 0.2]} />
          </group>
          <group position={[0, 2.8, -214.6]} rotation={[-Math.PI / 2, 0, 0]} scale={[-0.13, -0.13, -1]}>
            <mesh geometry={nodes.Scene004.geometry} material={materials.Sign_Sharp_Right} />
            <mesh geometry={nodes.Scene004_1.geometry} material={materials.Sign_Post_1} />
          </group>
        </group>
        <group position={[793.714, 134.642, -195.47]}>
          <group position={[0, 2.5, -214.6]} rotation={[0, Math.PI / 4, -Math.PI]} scale={[0.916, 1, 0.916]}>
            <mesh geometry={nodes.Plane_001_1.geometry} material={materials.Sign_Backing} position={[0, -0.1, -50]} rotation={[-1.57, 0, 0]} scale={[50, 100, 0.2]} />
            <mesh geometry={nodes.Plane_1.geometry} material={materials.Sign_Backing} scale={[50, 100, 50]} />
            <mesh geometry={nodes.Plane_002_1.geometry} material={materials.Sign_Backing} position={[50, -0.1, 0]} rotation={[-Math.PI / 2, 0, -Math.PI / 2]} scale={[50, 100, 0.2]} />
            <mesh geometry={nodes.Plane_003_1.geometry} material={materials.Sign_Backing} position={[-50, -0.1, 0]} rotation={[Math.PI / 2, 0, Math.PI / 2]} scale={[50, 100, 0.2]} />
            <mesh geometry={nodes.Plane_004_1.geometry} material={materials.Sign_Backing} position={[0, -0.1, 50]} rotation={[1.57, 0, 0]} scale={[50, 100, 0.2]} />
          </group>
        </group>
        <group position={[947.714, 145.642, -195.47]}>
          <group position={[-11.046, 23.586, -177.955]} rotation={[Math.PI / 2, 0, 0]} scale={[0.081, 0.1, 1]}>
            <mesh geometry={nodes.Scene004_2.geometry} material={materials.Sign_Speed_55} />
            <mesh geometry={nodes.Scene004_3.geometry} material={materials.Sign_Post_1} />
          </group>
        </group>
      </group>
      <group position={[6.223, -1.397, 0.056]} rotation={[Math.PI / 2, 0, -Math.PI]} scale={0.01}>
        <group position={[793.714, 134.642, -320.47]} rotation={[-Math.PI / 2, 0, 0]} scale={[1, 1.25, 1]}>
          <mesh geometry={nodes.Scene006.geometry} material={materials.Sign_Post_2} />
          <mesh geometry={nodes.Scene006_1.geometry} material={materials.Sign_Sharp_Right} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/assets/models/Signs2.glb')
