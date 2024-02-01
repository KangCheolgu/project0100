/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 public\assets\models\Easel2.glb -o src/components/library/object/Easel2.jsx -r public 
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/assets/models/Easel2.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Box010.geometry} material={materials._crayfishdiffuse} />
      <mesh geometry={nodes.Box011.geometry} material={materials._crayfishdiffuse} />
      <mesh geometry={nodes.Box012.geometry} material={materials._crayfishdiffuse} />
      <mesh geometry={nodes.Box014.geometry} material={materials._crayfishdiffuse} />
      <mesh geometry={nodes.Box015.geometry} material={materials._crayfishdiffuse} />
      <mesh geometry={nodes.Box016.geometry} material={materials._crayfishdiffuse} />
      <mesh geometry={nodes.Box017.geometry} material={materials._crayfishdiffuse} />
      <mesh geometry={nodes.Cylinder025.geometry} material={materials['07___Default']} />
      <mesh geometry={nodes.Cylinder026.geometry} material={materials['19___Default']} />
      <mesh geometry={nodes.Cylinder027.geometry} material={materials['20___Default']} />
      <mesh geometry={nodes.Cylinder028.geometry} material={materials['03___Default']} />
      <mesh geometry={nodes.Cylinder029.geometry} material={materials['15___Default']} />
      <mesh geometry={nodes.Cylinder030.geometry} material={materials['13___Default']} />
      <mesh geometry={nodes.Cylinder031.geometry} material={materials['14___Default']} />
      <mesh geometry={nodes.Cylinder032.geometry} material={materials['08___Default']} />
      <mesh geometry={nodes.Cylinder033.geometry} material={materials['07___Default']} />
      <mesh geometry={nodes.Cylinder034.geometry} material={materials['19___Default']} />
      <mesh geometry={nodes.Cylinder035.geometry} material={materials['20___Default']} />
      <mesh geometry={nodes.Cylinder036.geometry} material={materials['03___Default']} />
      <mesh geometry={nodes.Cylinder037.geometry} material={materials['14___Default']} />
      <mesh geometry={nodes.Cylinder038.geometry} material={materials['15___Default']} />
      <mesh geometry={nodes.Cylinder039.geometry} material={materials['13___Default']} />
      <mesh geometry={nodes.Cylinder040.geometry} material={materials['08___Default']} />
      <mesh geometry={nodes.Box013_1.geometry} material={materials._crayfishdiffuse} />
      <mesh geometry={nodes.Box013_1_1.geometry} material={materials['02___Default']} />
    </group>
  )
}

useGLTF.preload('/assets/models/Easel2.glb')
