import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import ColliderBox from '../../Map/ColliderBox';

export function Wall(props) { // 큰 세로벽
  const { nodes, materials } = useGLTF('/assets/models/ModularRuinsPack.glb')
  const position = props.position || [0, 0, 0];
  const rotation = props.rotation || [0, 0, 0];
  return (
    <group {...props} dispose={null}>
      <ColliderBox position={[position[0],position[1]+2, position[2]-0.2]} scale={[4, 0.5, 4]} rotation ={[rotation[2]-Math.PI/2, rotation[0], rotation[1]]}></ColliderBox>
      <group  rotation={[-Math.PI / 2, 0, 0]} scale={200}>
        <mesh geometry={nodes.Wall_1.geometry} material={materials.Highlights} />
        <mesh geometry={nodes.Wall_2.geometry} material={materials.Main} />
      </group>
    </group>
  )
}
export function Wall1(props) { // 작은 세로벽
  const { nodes, materials } = useGLTF('/assets/models/ModularRuinsPack.glb')
  const position = props.position || [0, 0, 0];
  const rotation = props.rotation || [0, 0, 0];
  return (
    <group {...props} dispose={null}>
      <ColliderBox position={[position[0],position[1]+1, position[2]-0.11]} scale={[2, 0.29, 2]} rotation ={[rotation[2]-Math.PI/2, rotation[0], rotation[1]]}></ColliderBox>
      <group  rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh geometry={nodes.Wall_1.geometry} material={materials.Highlights} />
        <mesh geometry={nodes.Wall_2.geometry} material={materials.Main} />
      </group>
    </group>
  )
}

export function Wall2(props) { // 큰 가로벽
  const { nodes, materials } = useGLTF('/assets/models/ModularRuinsPack.glb')
  const position = props.position || [0, 0, 0];
  const rotation = props.rotation || [0, Math.PI/2 , Math.PI/2];
  return (
    <group {...props} dispose={null}>
      <ColliderBox position={[position[0]-0.2,position[1]+2, position[2]]} scale={[4, 0.5, 4]} rotation ={[rotation[2]-Math.PI/2, rotation[0], rotation[1]]}></ColliderBox>
      <group  rotation={[-Math.PI/2, 0, Math.PI /2]} scale={200}>
        <mesh geometry={nodes.Wall_1.geometry} material={materials.Highlights} />
        <mesh geometry={nodes.Wall_2.geometry} material={materials.Main} />
      </group>
    </group>
  )
}

export function Wall3(props) { // 작은 가로벽
  const { nodes, materials } = useGLTF('/assets/models/ModularRuinsPack.glb')
  const position = props.position || [0, 0, 0];
  const rotation = props.rotation || [0, Math.PI/2 , Math.PI/2];
  return (
    <group {...props} dispose={null}>
      <ColliderBox position={[position[0]-0.1,position[1]+1, position[2]]} scale={[2, 0.29, 2]} rotation ={[rotation[2]-Math.PI/2, rotation[0], rotation[1]]}></ColliderBox>
      <group  rotation={[-Math.PI/2, 0, Math.PI /2]} scale={100}>
        <mesh geometry={nodes.Wall_1.geometry} material={materials.Highlights} />
        <mesh geometry={nodes.Wall_2.geometry} material={materials.Main} />
      </group>
    </group>
  )
}

export function Floor(props) {
    const { nodes, materials } = useGLTF('/assets/models/ModularRuinsPack.glb')
    return (
      <group {...props} dispose={null}>
        <ColliderBox {...props} scale={[2, 0.29, 2]} rotation ={[0, 0, 0]}></ColliderBox>
        <group position={[0, -0.03, 0]} rotation={[Math.PI / 2, 0, 0]} scale={[100, 100, 5.973]}>
            <mesh geometry={nodes.Floor_Standard_1.geometry} material={materials.Highlights} />
            <mesh geometry={nodes.Floor_Standard_2.geometry} material={materials.Main} />
      </group>
      </group>
    )
}

export function Floor2(props) {
    const { nodes, materials } = useGLTF('/assets/models/ModularRuinsPack.glb')
    return (
      <group {...props} dispose={null}>
        <ColliderBox {...props} scale={[2, 0.01, 2]}></ColliderBox>
        <group position={[0, -0.03, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={[100, 100, 5.973]}>
            <mesh geometry={nodes.Floor_Diamond_1.geometry} material={materials.Highlights} />
            <mesh geometry={nodes.Floor_Diamond_2.geometry} material={materials.Main} />
        </group>
      </group>
    )
}

export function Floor3(props) { // 큰바닥
  const { nodes, materials } = useGLTF('/assets/models/ModularRuinsPack.glb')
  const position = props.position || [0, 0, 0];

  return (
    <group {...props} dispose={null}>
      
      <ColliderBox {...props} scale={[4, 0.01, 4]}/>
      <group position={[0, -0.03, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={[200, 200, 5.973]}>
          <mesh geometry={nodes.Floor_Squares_1.geometry} material={materials.Highlights} />
          <mesh geometry={nodes.Floor_Squares_2.geometry} material={materials.Main} />
      </group>
    </group>
  )
}

export function Floor4(props) { // 큰바닥( 천장 )
  const { nodes, materials } = useGLTF('/assets/models/ModularRuinsPack.glb')
  const position = props.position || [0, 0, 0];

  return (
    <group {...props} dispose={null}>
      
      <ColliderBox {...props} scale={[4, 0.01, 4]}/>
      <group position={[0, -0.03, 0]} rotation={[-Math.PI / 2, Math.PI, 0]} scale={[200, 200, 5.973]}>
          <mesh geometry={nodes.Floor_Squares_1.geometry} material={materials.Highlights} />
          <mesh geometry={nodes.Floor_Squares_2.geometry} material={materials.Main} />
      </group>
    </group>
  )
}

export function Floor5(props) { // 큰 방바닥
  const { nodes, materials } = useGLTF('/assets/models/ModularRuinsPack.glb')
  const position = props.position || [0, 0, 0];

  return (
    <group {...props} dispose={null}>
      
      <ColliderBox {...props} scale={[48, 0.01, 24]}/>
      <group position={[0, -0.03, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={[2450, 1210, 5.973]}>
          <mesh geometry={nodes.Floor_Squares_1.geometry} material={materials.Highlights} />
          <mesh geometry={nodes.Floor_Squares_2.geometry} material={materials.Main} />
      </group>
    </group>
  )
}

export function Floor6(props) { // 작은 방바닥
  const { nodes, materials } = useGLTF('/assets/models/ModularRuinsPack.glb')
  const position = props.position || [0, 0, 0];

  return (
    <group {...props} dispose={null}>
      
      <ColliderBox {...props} scale={[12, 0.01, 32]}/>
      <group position={[0, -0.03, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={[600, 1620, 5.973]}>
          <mesh geometry={nodes.Floor_Squares_1.geometry} material={materials.Highlights} />
          <mesh geometry={nodes.Floor_Squares_2.geometry} material={materials.Main} />
      </group>
    </group>
  )
}

export function BrickDoor(props) {
  const { nodes, materials } = useGLTF('/assets/models/ModularRuinsPack.glb')
  const position = props.position || [0, 0, 0];
  const rotation = props.rotation || [0, 0, 0];

  return (
    <group {...props} dispose={null}>
      <group position={[0, 0, 0]} rotation={[-Math.PI / 2, 0, Math.PI / 2]} scale={150}>
        <mesh geometry={nodes.Arch_Round_RoundColumn_1.geometry} material={materials.Main} />
        <mesh geometry={nodes.Arch_Round_RoundColumn_2.geometry} material={materials.Black} />
      </group>
    </group>
  )
}




useGLTF.preload('/assets/models/ModularRuinsPack.glb')