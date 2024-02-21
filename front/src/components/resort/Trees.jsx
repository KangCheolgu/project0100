/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 public/assets/models/resort-trees_remove.glb -o src/components/Trees.jsx -r public/ 
*/
import React, { useRef } from 'react'
import { meshBounds, useGLTF } from '@react-three/drei'
import { useTrimesh } from "@react-three/cannon";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useLoader } from "@react-three/fiber";
import ColliderBox from '../../ColliderBox';
export function Palm_5(props) {
  const { nodes, materials } = useGLTF('/assets/models/resort-trees_remove.glb')
  const position= props.position
  return (
    <group {...props} dispose={null}>
      <ColliderBox scale={[0.6, 10, 0.6]} position={position}/>
      <mesh raycast ={meshBounds} geometry={nodes.Palm_5.geometry} material={materials.Palms} position={[0, 0, 0]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
    </group>
  )
}

export function Palm_4(props) {
  const { nodes, materials } = useGLTF('/assets/models/resort-trees_remove.glb')
  const position= props.position
  return (
    <group {...props} dispose={null}>
      <ColliderBox scale={[0.8, 10, 0.8]} position={position}/>
      <mesh raycast ={meshBounds} geometry={nodes.Palm_4.geometry} material={materials.Palms} position={[0, 0, 0]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
    </group>
  )
}

export function Palm_3(props) {
  const { nodes, materials } = useGLTF('/assets/models/resort-trees_remove.glb')
  const position= props.position
  return (
    <group {...props} dispose={null}>
      <ColliderBox scale={[0.8, 10, 0.8]} position={position}/>
      <mesh raycast ={meshBounds} geometry={nodes.Palm_3.geometry} material={materials.Palms} position={[0,0,0]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
    </group>
  )
}

export function Palm_2(props) {
  const { nodes, materials } = useGLTF('/assets/models/resort-trees_remove.glb')
  const position= props.position
  return (
    <group {...props} dispose={null}>
      <ColliderBox scale={[0.8, 10, 0.8]} position={position}/>
      <mesh raycast ={meshBounds} geometry={nodes.Palm_2.geometry} material={materials.Palms} position={[0,0,0]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
    </group>
  )
}

export function Palm_1(props) {
  const { nodes, materials } = useGLTF('/assets/models/resort-trees_remove.glb')
  const position= props.position
  {/*const result = useLoader(GLTFLoader, process.env.PUBLIC_URL + "/assets/models/resort-trees_remove.glb");
  console.log(result.nodes)
  const geometry = result.nodes.Palm_1.geometry;
  const vertices = geometry.attributes.position.array;
const indices  = geometry.index.array;
  const [ref] = useTrimesh(
    () => ({
      args: [vertices, indices],
      mass: 0,
      type: "Static",
    }),
    useRef(null)
  );*/}
  return (
    <group {...props} dispose={null}>
      <ColliderBox scale={[0.5, 10, 0.5]} position={position}/>
      <mesh raycast ={meshBounds} geometry={nodes.Palm_1.geometry} material={materials.Palms} position={[0,0,0]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
    </group>
  )
}

export function Grass_Tree(props) {
  const { nodes, materials } = useGLTF('/assets/models/resort-trees_remove.glb')
  return (
    <group {...props} dispose={null}>
      <mesh raycast ={meshBounds} geometry={nodes.Grass.geometry} material={materials.Plants} position={[0,0,0]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
    </group>
  )
}

export function Clumb_8(props) {
  const { nodes, materials } = useGLTF('/assets/models/resort-trees_remove.glb')
  return (
    <group {...props} dispose={null}>
      <mesh raycast ={meshBounds} geometry={nodes.Clumb_8.geometry} material={materials.Clumbs} position={[0,0,0]} rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
        <mesh raycast ={meshBounds} geometry={nodes.Bush_1.geometry} material={materials.Plants} position={[0, 0, -76.4]} scale={[1.335, 1.35, 1.35]} />
      </mesh>
    </group>
  )
}

export function Clumb_7(props) {
  const { nodes, materials } = useGLTF('/assets/models/resort-trees_remove.glb')
  return (
    <group {...props} dispose={null}>
      <mesh raycast ={meshBounds} geometry={nodes.Clumb_7.geometry} material={materials.Clumbs} position={[0,0,0]} rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
        <mesh raycast ={meshBounds} geometry={nodes.Bush_2.geometry} material={materials.Plants} position={[0, 0, -70.2]} scale={1.3} />
      </mesh>
    </group>
  )
}

export function Clumb_6(props) {
  const { nodes, materials } = useGLTF('/assets/models/resort-trees_remove.glb')
  return (
    <group {...props} dispose={null}>
      <mesh raycast ={meshBounds} geometry={nodes.Clumb_6.geometry} material={materials.Clumbs} position={[0,0,0]} rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
        <mesh raycast ={meshBounds} geometry={nodes.Bush_3.geometry} material={materials.Plants} position={[0, 0, -27.6]} />
      </mesh>
    </group>
  )
}

export function Clumb_5(props) {
  const { nodes, materials } = useGLTF('/assets/models/resort-trees_remove.glb')
  return (
    <group {...props} dispose={null}>
      <mesh raycast ={meshBounds} geometry={nodes.Clumb_5.geometry} material={materials.Clumbs} position={[0,0,0]} rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
        <mesh raycast ={meshBounds} geometry={nodes.Palm_5_1.geometry} material={materials.Palms} position={[0, 0, -32]} />
      </mesh>
    </group>
  )
}

export function Clumb_4(props) {
  const { nodes, materials } = useGLTF('/assets/models/resort-trees_remove.glb')
  return (
    <group {...props} dispose={null}>
      <mesh raycast ={meshBounds} geometry={nodes.Clumb_4.geometry} material={materials.Clumbs} position={[0,0,0]} rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
        <mesh raycast ={meshBounds} geometry={nodes.Palm_4_1.geometry} material={materials.Palms} position={[0, 0, -27.4]} />
      </mesh>
    </group>
  )
}

export function Clumb_3(props) {
  const { nodes, materials } = useGLTF('/assets/models/resort-trees_remove.glb')
  return (
    <group {...props} dispose={null}>
      <mesh raycast ={meshBounds} geometry={nodes.Clumb_3.geometry} material={materials.Clumbs} position={[0,0,0]} rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
        <mesh raycast ={meshBounds} geometry={nodes.Palm_3_1.geometry} material={materials.Palms} position={[8.2, 4.8, -36.2]} />
      </mesh>
    </group>
  )
}

export function Clumb_2(props) {
  const { nodes, materials } = useGLTF('/assets/models/resort-trees_remove.glb')
  return (
    <group {...props} dispose={null}>
      <mesh raycast ={meshBounds} geometry={nodes.Clumb_2.geometry} material={materials.Clumbs} position={[0,0,0]} rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
        <mesh raycast ={meshBounds} geometry={nodes.Palm_2_1.geometry} material={materials.Palms} position={[-6, 4, -36.2]} />
      </mesh>
    </group>
  )
}

export function Clumb_1(props) {
  const { nodes, materials } = useGLTF('/assets/models/resort-trees_remove.glb')
  return (
    <group {...props} dispose={null}>
      <mesh raycast ={meshBounds} geometry={nodes.Clumb_1.geometry} material={materials.Clumbs} position={[0,0,0]} rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
        <mesh raycast ={meshBounds} geometry={nodes.Palm_1_1.geometry} material={materials.Palms} position={[0, 0, -34.7]} />
      </mesh>
    </group>
  )
}

export function Bush_3_1(props) {
  const { nodes, materials } = useGLTF('/assets/models/resort-trees_remove.glb')
  const position=props.position
  return (
    <group {...props} dispose={null}>
      <ColliderBox scale={[2, 2,2]} position={position}/>
      <mesh raycast ={meshBounds} geometry={nodes.Bush_3_1.geometry} material={materials.Plants} position={[0,0,0]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
    </group>
  )
}

export function Bush_2_1(props) {
  const { nodes, materials } = useGLTF('/assets/models/resort-trees_remove.glb')
  const position = props.position
  return (
    <group {...props} dispose={null}>
      <ColliderBox scale={[1.3, 1.5, 1.3]} position={position}/>
      <mesh raycast ={meshBounds} geometry={nodes.Bush_2_1.geometry} material={materials.Plants} position={[0,0,0]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
    </group>
  )
}

export function Bush_1_1(props) {
  const { nodes, materials } = useGLTF('/assets/models/resort-trees_remove.glb')
  const position = props.position
  return (
    <group {...props} dispose={null}>
      <ColliderBox scale={[1.3, 1.5, 1.3]} position={position}/>
      <mesh raycast ={meshBounds} geometry={nodes.Bush_1_1.geometry} material={materials.Plants} position={[0,0,0]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
    </group>
  )
}

useGLTF.preload('/assets/models/resort-trees_remove.glb')