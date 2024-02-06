import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Border_half(props) {
  const { nodes, materials } = useGLTF('/assets/models/comp-resort-roads.glb')
  return (
    <group {...props} dispose={null}>
      <mesh receiveShadow geometry={nodes.Border_half.geometry} material={materials.Border_road_props} position={[0, 0, 0]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />  
    </group>
  )
}
export function Border_1(props) {
  const { nodes, materials } = useGLTF('/assets/models/comp-resort-roads.glb')
  return (
    <group {...props} dispose={null}>
      <mesh receiveShadow geometry={nodes.Border_1.geometry} material={materials.Border_road_props} position={[0, 0, 0]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
    </group>
  )
}
export function Border_2(props) {
  const { nodes, materials } = useGLTF('/assets/models/comp-resort-roads.glb')
  return (
    <group {...props} dispose={null}>
      <mesh receiveShadow geometry={nodes.Border_2.geometry} material={materials.Border_road_props} position={[0, 0, 0]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
    </group>
  )
}
export function Border_3(props) {
  const { nodes, materials } = useGLTF('/assets/models/comp-resort-roads.glb')
  return (
    <group {...props} dispose={null}>
      <mesh receiveShadow geometry={nodes.Border_3.geometry} material={materials.Border_road_props} position={[0, 0, 0]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
    </group>
  )
}
export function Border_4(props) {
  const { nodes, materials } = useGLTF('/assets/models/comp-resort-roads.glb')
  return (
    <group {...props} dispose={null}>
      <mesh receiveShadow geometry={nodes.Border_4.geometry} material={materials.Border_road_props} position={[0, 0, 0]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
    </group>
  )
}
export function Border_4_1(props) {
  const { nodes, materials } = useGLTF('/assets/models/comp-resort-roads.glb')
  return (
    <group {...props} dispose={null}>
      <mesh receiveShadow geometry={nodes.Border_4_1.geometry} material={materials.Border_road_props} position={[0, 0, 0]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
    </group>
  )
}
export function Border_5(props) {
  const { nodes, materials } = useGLTF('/assets/models/comp-resort-roads.glb')
  return (
    <group {...props} dispose={null}>
      <mesh receiveShadow geometry={nodes.Border_5.geometry} material={materials.Border_road_props} position={[0, 0, 0]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
    </group>
  )
}
export function Grass(props) {
  const { nodes, materials } = useGLTF('/assets/models/comp-resort-roads.glb')
  return (
    <group {...props} dispose={null}>
      <mesh receiveShadow geometry={nodes.Grass.geometry} material={materials.Grass} position={[0, 0, 0]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
    </group>
  )
}
export function Road_1(props) {
  const { nodes, materials } = useGLTF('/assets/models/comp-resort-roads.glb')
  return (
    <group {...props} dispose={null}>
      <mesh receiveShadow geometry={nodes.Road_1.geometry} material={materials.Asphalt} position={[0, 0, 0]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
    </group>
  )
}
export function Road_2(props) {
  const { nodes, materials } = useGLTF('/assets/models/comp-resort-roads.glb')
  return (
    <group {...props} dispose={null}>
      <mesh receiveShadow geometry={nodes.Road_2.geometry} material={materials.Asphalt_2} position={[0, 0, 0]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
    </group>
  )
}
export function Road_3(props) {
  const { nodes, materials } = useGLTF('/assets/models/comp-resort-roads.glb')
  return (
    <group {...props} dispose={null}>
      <mesh receiveShadow geometry={nodes.Road_3.geometry} material={materials.Asphalt_3} position={[0, 0, 0]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
    </group>
  )
}
export function Road_4(props) {
  const { nodes, materials } = useGLTF('/assets/models/comp-resort-roads.glb')
  return (
    <group {...props} dispose={null}>
      <mesh receiveShadow geometry={nodes.Road_4.geometry} material={materials.Asphalt_4} position={[0, 0, 0]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
    </group>
  )
}
export function Road_half(props) {
  const { nodes, materials } = useGLTF('/assets/models/comp-resort-roads.glb')
  return (
    <group {...props} dispose={null}>
      <mesh receiveShadow geometry={nodes.Road_half.geometry} material={materials.Asphalt_2} position={[0, 0, 0]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
    </group>
  )
}
export function Road_half_2(props) {
  const { nodes, materials } = useGLTF('/assets/models/comp-resort-roads.glb')
  return (
    <group {...props} dispose={null}>
      <mesh receiveShadow geometry={nodes.Road_half_2.geometry} material={materials.Asphalt_2} position={[0, 0, 0]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
    </group>
  )
}
export function Road_half_3(props) {
  const { nodes, materials } = useGLTF('/assets/models/comp-resort-roads.glb')
  return (
    <group {...props} dispose={null}>
      <mesh receiveShadow geometry={nodes.Road_half_3.geometry} material={materials.Asphalt_3} position={[0, 0, 0]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
    </group>
  )
}
export function Road_half_4(props) {
  const { nodes, materials } = useGLTF('/assets/models/comp-resort-roads.glb')
  return (
    <group {...props} dispose={null}>
      <mesh receiveShadow geometry={nodes.Road_half_4.geometry} material={materials.Asphalt} position={[0, 0, 0]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
    </group>
  )
}
export function Sidewalk(props) {
  const { nodes, materials } = useGLTF('/assets/models/comp-resort-roads.glb')
  return (
    <group {...props} dispose={null}>
      <mesh receiveShadow geometry={nodes.Sidewalk.geometry} material={materials.Sidewalk} position={[0, 0, 0]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
    </group>
  )
}
export function Sidewalk_2(props) {
  const { nodes, materials } = useGLTF('/assets/models/comp-resort-roads.glb')
  return (
    <group {...props} dispose={null}>
      <mesh receiveShadow geometry={nodes.Sidewalk_2.geometry} material={materials.Sidewalk} position={[0, 0, 0]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
    </group>
  )
}
export function Sidewalk_corner(props) {
  const { nodes, materials } = useGLTF('/assets/models/comp-resort-roads.glb')
  return (
    <group {...props} dispose={null}>
      <mesh receiveShadow geometry={nodes.Sidewalk_corner.geometry} material={materials.Sidewalk} position={[0, 0, 0]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
    </group>
  )
}
export function Sidewalk_corner_1(props) {
  const { nodes, materials } = useGLTF('/assets/models/comp-resort-roads.glb')
  return (
    <group {...props} dispose={null}>
      <mesh receiveShadow geometry={nodes.Sidewalk_corner_1.geometry} material={materials.Sidewalk} position={[0, 0, 0]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
    </group>
  )
}
export function Sidewalk_corner_2(props) {
  const { nodes, materials } = useGLTF('/assets/models/comp-resort-roads.glb')
  return (
    <group {...props} dispose={null}>
      <mesh receiveShadow geometry={nodes.Sidewalk_corner_2.geometry} material={materials.Sidewalk} position={[0, 0, 0]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
    </group>
  )
}
export function Sidewalk_corner_3(props) {
  const { nodes, materials } = useGLTF('/assets/models/comp-resort-roads.glb')
  return (
    <group {...props} dispose={null}>
      <mesh receiveShadow geometry={nodes.Sidewalk_corner_3.geometry} material={materials.Sidewalk} position={[0, 0, 0]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
    </group>
  )
}
export function Sidewalk_corner_4(props) {
  const { nodes, materials } = useGLTF('/assets/models/comp-resort-roads.glb')
  return (
    <group {...props} dispose={null}>
      <mesh receiveShadow geometry={nodes.Sidewalk_corner_4.geometry} material={materials.Sidewalk} position={[0, 0, 0]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
    </group>
  )
}
export function Sidewalk_corner_5(props) {
  const { nodes, materials } = useGLTF('/assets/models/comp-resort-roads.glb')
  return (
    <group {...props} dispose={null}>
      <mesh receiveShadow geometry={nodes.Sidewalk_corner_5.geometry} material={materials.Sidewalk} position={[0, 0, 0]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
    </group>
  )
}
export function Sidewalk_corner_6(props) {
  const { nodes, materials } = useGLTF('/assets/models/comp-resort-roads.glb')
  return (
    <group {...props} dispose={null}>
      <mesh receiveShadow geometry={nodes.Sidewalk_corner_6.geometry} material={materials.Sidewalk} position={[0, 0, 0]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
    </group>
  )
}
export function Sidewalk_corner_7(props) {
  const { nodes, materials } = useGLTF('/assets/models/comp-resort-roads.glb')
  return (
    <group {...props} dispose={null}>
      <mesh receiveShadow geometry={nodes.Sidewalk_corner_7.geometry} material={materials.Sidewalk} position={[0, 0, 0]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
    </group>
  )
}
export function Sidewalk_half(props) {
  const { nodes, materials } = useGLTF('/assets/models/comp-resort-roads.glb')
  return (
    <group {...props} dispose={null}>
      <mesh receiveShadow geometry={nodes.Sidewalk_half.geometry} material={materials.Sidewalk} position={[0, 0, 0]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
    </group>
  )
}
useGLTF.preload('/assets/models/comp-resort-roads.glb')