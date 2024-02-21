import React, { useRef } from 'react'
import { meshBounds, useGLTF } from '@react-three/drei'

export function Building_1_Red(props) {
  const { nodes, materials } = useGLTF('/assets/models/Buildings.glb')
  return (
    <group {...props} dispose={null}>
      <group position={[0, 0, 0]} rotation={[Math.PI / 2, 0, 0]} scale={0.005}>
          <mesh raycast ={meshBounds} castShadow geometry={nodes.Scene407.geometry} material={materials['Brick_walls_2_1.004']} />
          <mesh raycast ={meshBounds} castShadow geometry={nodes.Scene407_1.geometry} material={materials['Walls_1.005']} />
          <mesh raycast ={meshBounds} castShadow geometry={nodes.Scene407_2.geometry} material={materials['Doors.005']} />
          <mesh raycast ={meshBounds} castShadow geometry={nodes.Scene407_3.geometry} material={materials['Parts.004']} />
          <mesh raycast ={meshBounds} castShadow geometry={nodes.Scene407_4.geometry} material={materials['Tile_1.004']} />
          <mesh raycast ={meshBounds} castShadow geometry={nodes.Scene407_5.geometry} material={materials['Plinth_1.004']} />
          <mesh raycast ={meshBounds} castShadow geometry={nodes.Scene407_6.geometry} material={materials['Roof.005']} />
          <mesh raycast ={meshBounds} castShadow geometry={nodes.Scene407_7.geometry} material={materials['Stairs.005']} />
          <mesh raycast ={meshBounds} castShadow geometry={nodes.Scene407_8.geometry} material={materials['Walls_2_3.004']} />
          <mesh raycast ={meshBounds} castShadow geometry={nodes.Scene407_9.geometry} material={materials['Windows.005']} />
          <mesh raycast ={meshBounds} castShadow geometry={nodes.Scene407_10.geometry} material={materials['Airing.005']} />
      </group>
    </group>
  )
}

export function Building_5_Red(props) {
  const { nodes, materials } = useGLTF('/assets/models/Buildings.glb')
  return (
    <group {...props} dispose={null}>
      <group position={[0, 0, 0]} rotation={[Math.PI / 2, 0, 0]} scale={0.005}>
          <mesh raycast ={meshBounds} castShadow geometry={nodes.Scene411.geometry} material={materials['Roof.005']} />
          <mesh raycast ={meshBounds} castShadow geometry={nodes.Scene411_1.geometry} material={materials['Parts.004']} />
          <mesh raycast ={meshBounds} castShadow geometry={nodes.Scene411_2.geometry} material={materials['Walls_4.005']} />
          <mesh raycast ={meshBounds} castShadow geometry={nodes.Scene411_3.geometry} material={materials['Doors.005']} />
          <mesh raycast ={meshBounds} castShadow geometry={nodes.Scene411_4.geometry} material={materials['Plinth_3.005']} />
          <mesh raycast ={meshBounds} castShadow geometry={nodes.Scene411_5.geometry} material={materials['Stairs.005']} />
          <mesh raycast ={meshBounds} castShadow geometry={nodes.Scene411_6.geometry} material={materials['Brick_walls_2_1.004']} />
          <mesh raycast ={meshBounds} castShadow geometry={nodes.Scene411_7.geometry} material={materials['Brick_walls_1.004']} />
          <mesh raycast ={meshBounds} castShadow geometry={nodes.Scene411_8.geometry} material={materials['Walls_1_3.004']} />
          <mesh raycast ={meshBounds} castShadow geometry={nodes.Scene411_9.geometry} material={materials['Windows.005']} />
          <mesh raycast ={meshBounds} castShadow geometry={nodes.Scene411_10.geometry} material={materials['Airing.005']} />
          <mesh raycast ={meshBounds} castShadow geometry={nodes.Scene411_11.geometry} material={materials['Solar_panel.004']} />
          <mesh raycast ={meshBounds} castShadow geometry={nodes.Scene411_12.geometry} material={materials['Wall_clumb.004']} />
      </group>
    </group>
  )
}

export function Building_9_Red(props) {
  const { nodes, materials } = useGLTF('/assets/models/Buildings.glb')
  return (
    <group {...props} dispose={null}>
      <group position={[0, 0, 0]} rotation={[Math.PI / 2, 0, 0]} scale={0.005}>
        <group position={[0, 0, 0]}>
          <mesh raycast ={meshBounds} castShadow geometry={nodes.Scene416.geometry} material={materials['Roof.005']} />
          <mesh raycast ={meshBounds} castShadow geometry={nodes.Scene416_1.geometry} material={materials['Walls_1.005']} />
          <mesh raycast ={meshBounds} castShadow geometry={nodes.Scene416_2.geometry} material={materials['Doors.005']} />
          <mesh raycast ={meshBounds} castShadow geometry={nodes.Scene416_3.geometry} material={materials['Plinth_3.005']} />
          <mesh raycast ={meshBounds} castShadow geometry={nodes.Scene416_4.geometry} material={materials['Stairs.005']} />
          <mesh raycast ={meshBounds} castShadow geometry={nodes.Scene416_5.geometry} material={materials['Brick_walls_2_1.004']} />
          <mesh raycast ={meshBounds} castShadow geometry={nodes.Scene416_6.geometry} material={materials['Brick_walls_2.004']} />
          <mesh raycast ={meshBounds} castShadow geometry={nodes.Scene416_7.geometry} material={materials['Windows.005']} />
          <mesh raycast ={meshBounds} castShadow geometry={nodes.Scene416_8.geometry} material={materials['Airing.005']} />
          <mesh raycast ={meshBounds} castShadow geometry={nodes.Scene416_9.geometry} material={materials['Awnings_2.005']} />
        </group>
      </group>
    </group>
  )
}

export function Building_8_Red(props) {
  const { nodes, materials } = useGLTF('/assets/models/Buildings.glb')
  return (
    <group {...props} dispose={null}>
      <group position={[0, 0, 0]} rotation={[Math.PI / 2, 0, 0]} scale={0.005}>
        <mesh raycast ={meshBounds} castShadow geometry={nodes.Scene419.geometry} material={materials['Roof.006']} />
        <mesh raycast ={meshBounds} castShadow geometry={nodes.Scene419_1.geometry} material={materials['Shutters.006']} />
        <mesh raycast ={meshBounds} castShadow geometry={nodes.Scene419_2.geometry} material={materials['Windows.006']} />
        <mesh raycast ={meshBounds} castShadow geometry={nodes.Scene419_3.geometry} material={materials['Walls_4_2.004']} />
        <mesh raycast ={meshBounds} castShadow geometry={nodes.Scene419_4.geometry} material={materials['Brick_walls_1.005']} />
        <mesh raycast ={meshBounds} castShadow geometry={nodes.Scene419_5.geometry} material={materials['Walls_2.006']} />
        <mesh raycast ={meshBounds} castShadow geometry={nodes.Scene419_6.geometry} material={materials['Stairs.006']} />
        <mesh raycast ={meshBounds} castShadow geometry={nodes.Scene419_7.geometry} material={materials['Plinth_1.005']} />
        <mesh raycast ={meshBounds} castShadow geometry={nodes.Scene419_8.geometry} material={materials['Doors.006']} />
        <mesh raycast ={meshBounds} castShadow geometry={nodes.Scene419_9.geometry} material={materials['Walls_3.006']} />
        <mesh raycast ={meshBounds} castShadow geometry={nodes.Scene419_10.geometry} material={materials['Parts.005']} />
        <mesh raycast ={meshBounds} castShadow geometry={nodes.Scene419_11.geometry} material={materials['Awnings_2.006']} />
        <mesh raycast ={meshBounds} castShadow geometry={nodes.Scene419_12.geometry} material={materials['Airing.006']} />
      </group>
    </group>
  )
}

export function Building_10_Red(props) {
  const { nodes, materials } = useGLTF('/assets/models/Buildings.glb')
  return (
    <group {...props} dispose={null}>
      <group position={[0, 0, 0]} rotation={[Math.PI / 2, 0, 0]} scale={0.005}>
          <mesh raycast ={meshBounds} castShadow geometry={nodes.Scene421.geometry} material={materials['Brick_walls_1_1.006']} />
          <mesh raycast ={meshBounds} castShadow geometry={nodes.Scene421_1.geometry} material={materials['Shutters.008']} />
          <mesh raycast ={meshBounds} castShadow geometry={nodes.Scene421_2.geometry} material={materials['Walls_2.007']} />
          <mesh raycast ={meshBounds} castShadow geometry={nodes.Scene421_3.geometry} material={materials['Windows.008']} />
          <mesh raycast ={meshBounds} castShadow geometry={nodes.Scene421_4.geometry} material={materials['Walls_2_2.006']} />
          <mesh raycast ={meshBounds} castShadow geometry={nodes.Scene421_5.geometry} material={materials['Stairs.008']} />
          <mesh raycast ={meshBounds} castShadow geometry={nodes.Scene421_6.geometry} material={materials['Roof.008']} />
          <mesh raycast ={meshBounds} castShadow geometry={nodes.Scene421_7.geometry} material={materials['Plinth_3.007']} />
          <mesh raycast ={meshBounds} castShadow geometry={nodes.Scene421_8.geometry} material={materials['Doors.008']} />
          <mesh raycast ={meshBounds} castShadow geometry={nodes.Scene421_9.geometry} material={materials['Walls_4.007']} />
          <mesh raycast ={meshBounds} castShadow geometry={nodes.Scene421_10.geometry} material={materials['Walls_3.007']} />
          <mesh raycast ={meshBounds} castShadow geometry={nodes.Scene421_11.geometry} material={materials['Awnings_2.008']} />
          <mesh raycast ={meshBounds} castShadow geometry={nodes.Scene421_12.geometry} material={materials['Airing.008']} />
      </group>
    </group>
  )
}

export function Building_2(props) {
  const { nodes, materials } = useGLTF('/assets/models/Buildings.glb')
  return (
    <group {...props} dispose={null}>
      <group position={[0, 0, 0]} rotation={[Math.PI / 2, 0, 0]} scale={0.005}>
        <mesh raycast ={meshBounds} castShadow geometry={nodes.Scene408.geometry} material={materials['Roof.005']} />
        <mesh raycast ={meshBounds} castShadow geometry={nodes.Scene408_1.geometry} material={materials['Walls_3.005']} />
        <mesh raycast ={meshBounds} castShadow geometry={nodes.Scene408_2.geometry} material={materials['Walls_1.005']} />
        <mesh raycast ={meshBounds} castShadow geometry={nodes.Scene408_3.geometry} material={materials['Doors.005']} />
        <mesh raycast ={meshBounds} castShadow geometry={nodes.Scene408_4.geometry} material={materials['Wood.004']} />
        <mesh raycast ={meshBounds} castShadow geometry={nodes.Scene408_5.geometry} material={materials['Plinth_2.004']} />
        <mesh raycast ={meshBounds} castShadow geometry={nodes.Scene408_6.geometry} material={materials['Stairs.005']} />
        <mesh raycast ={meshBounds} castShadow geometry={nodes.Scene408_7.geometry} material={materials['Brick_walls_1_1.005']} />
        <mesh raycast ={meshBounds} castShadow geometry={nodes.Scene408_8.geometry} material={materials['Walls_2_3.004']} />
        <mesh raycast ={meshBounds} castShadow geometry={nodes.Scene408_9.geometry} material={materials['Windows.005']} />
        <mesh raycast ={meshBounds} castShadow geometry={nodes.Scene408_10.geometry} material={materials['Airing.005']} />
        <mesh raycast ={meshBounds} castShadow geometry={nodes.Scene408_11.geometry} material={materials['Parts.004']} />
        <mesh raycast ={meshBounds} castShadow geometry={nodes.Scene408_12.geometry} material={materials['Awnings_2.005']} />
      </group>
    </group>
  )
}

export function Building_3_Red(props) {
  const { nodes, materials } = useGLTF('/assets/models/Buildings.glb')
  return (
    <group {...props} dispose={null}>
      <group position={[0, 0, 0]} rotation={[Math.PI / 2, 0, 0]} scale={0.005}>
        <mesh raycast ={meshBounds} castShadow geometry={nodes.Scene409.geometry} material={materials['Parts.004']} />
        <mesh raycast ={meshBounds} castShadow geometry={nodes.Scene409_1.geometry} material={materials['Walls_3.005']} />
        <mesh raycast ={meshBounds} castShadow geometry={nodes.Scene409_2.geometry} material={materials['Walls_4.005']} />
        <mesh raycast ={meshBounds} castShadow geometry={nodes.Scene409_3.geometry} material={materials['Doors.005']} />
        <mesh raycast ={meshBounds} castShadow geometry={nodes.Scene409_4.geometry} material={materials['Tile_1.004']} />
        <mesh raycast ={meshBounds} castShadow geometry={nodes.Scene409_5.geometry} material={materials['Plinth_3.005']} />
        <mesh raycast ={meshBounds} castShadow geometry={nodes.Scene409_6.geometry} material={materials['Roof.005']} />
        <mesh raycast ={meshBounds} castShadow geometry={nodes.Scene409_7.geometry} material={materials['Stairs.005']} />
        <mesh raycast ={meshBounds} castShadow geometry={nodes.Scene409_8.geometry} material={materials['Brick_walls_1.004']} />
        <mesh raycast ={meshBounds} castShadow geometry={nodes.Scene409_9.geometry} material={materials['Walls_1.005']} />
        <mesh raycast ={meshBounds} castShadow geometry={nodes.Scene409_10.geometry} material={materials['Walls_2_3.004']} />
        <mesh raycast ={meshBounds} castShadow geometry={nodes.Scene409_11.geometry} material={materials['Windows.005']} />
        <mesh raycast ={meshBounds} castShadow geometry={nodes.Scene409_12.geometry} material={materials['Airing.005']} />
        <mesh raycast ={meshBounds} castShadow geometry={nodes.Scene409_13.geometry} material={materials['Shutters.005']} />
        <mesh raycast ={meshBounds} castShadow geometry={nodes.Scene409_14.geometry} material={materials['Wall_clumb.004']} />
      </group>
    </group>
  )
}

export function Building_4_Red(props) {
  const { nodes, materials } = useGLTF('/assets/models/Buildings.glb')
  return (
    <group {...props} dispose={null}>
      <group position={[0, 0, 0]} rotation={[Math.PI / 2, 0, 0]} scale={0.005}>
          <mesh raycast ={meshBounds} castShadow geometry={nodes.Scene410.geometry} material={materials['Walls_2_3.004']} />
          <mesh raycast ={meshBounds} castShadow geometry={nodes.Scene410_1.geometry} material={materials['Walls_3.005']} />
          <mesh raycast ={meshBounds} castShadow geometry={nodes.Scene410_2.geometry} material={materials['Walls_4.005']} />
          <mesh raycast ={meshBounds} castShadow geometry={nodes.Scene410_3.geometry} material={materials['Doors.005']} />
          <mesh raycast ={meshBounds} castShadow geometry={nodes.Scene410_4.geometry} material={materials['Parts.004']} />
          <mesh raycast ={meshBounds} castShadow geometry={nodes.Scene410_5.geometry} material={materials['Wood.004']} />
          <mesh raycast ={meshBounds} castShadow geometry={nodes.Scene410_6.geometry} material={materials['Plinth_3.005']} />
          <mesh raycast ={meshBounds} castShadow geometry={nodes.Scene410_7.geometry} material={materials['Roof.005']} />
          <mesh raycast ={meshBounds} castShadow geometry={nodes.Scene410_8.geometry} material={materials['Stairs.005']} />
          <mesh raycast ={meshBounds} castShadow geometry={nodes.Scene410_9.geometry} material={materials['Brick_walls_2_1.004']} />
          <mesh raycast ={meshBounds} castShadow geometry={nodes.Scene410_10.geometry} material={materials['Windows.005']} />
          <mesh raycast ={meshBounds} castShadow geometry={nodes.Scene410_11.geometry} material={materials['Airing.005']} />
          <mesh raycast ={meshBounds} castShadow geometry={nodes.Scene410_12.geometry} material={materials['Wall_clumb.004']} />
          <mesh raycast ={meshBounds} castShadow geometry={nodes.Scene410_13.geometry} material={materials['Walls_3_2.004']} />
      </group>
    </group>
  )
}

export function Building_6_Green(props) {
  const { nodes, materials } = useGLTF('/assets/models/Buildings.glb')
  return (
    <group {...props} dispose={null}>
      <group position={[0, 0, 0]} rotation={[Math.PI / 2, 0, 0]} scale={0.005}>
        <group rotation={[-Math.PI / 2, 0, 0]}>
          <mesh raycast ={meshBounds} castShadow geometry={nodes.Scene418.geometry} material={materials['Roof.005']} />
          <mesh raycast ={meshBounds} castShadow geometry={nodes.Scene418_1.geometry} material={materials['Walls_6.004']} />
          <mesh raycast ={meshBounds} castShadow geometry={nodes.Scene418_2.geometry} material={materials['Walls_1.005']} />
          <mesh raycast ={meshBounds} castShadow geometry={nodes.Scene418_3.geometry} material={materials['Walls_4.005']} />
          <mesh raycast ={meshBounds} castShadow geometry={nodes.Scene418_4.geometry} material={materials['Doors.005']} />
          <mesh raycast ={meshBounds} castShadow geometry={nodes.Scene418_5.geometry} material={materials['Plinth_1.004']} />
          <mesh raycast ={meshBounds} castShadow geometry={nodes.Scene418_6.geometry} material={materials['Stairs.005']} />
          <mesh raycast ={meshBounds} castShadow geometry={nodes.Scene418_7.geometry} material={materials['Walls_5_2.004']} />
          <mesh raycast ={meshBounds} castShadow geometry={nodes.Scene418_8.geometry} material={materials['Walls_1_2.004']} />
          <mesh raycast ={meshBounds} castShadow geometry={nodes.Scene418_9.geometry} material={materials['Walls_5.004']} />
          <mesh raycast ={meshBounds} castShadow geometry={nodes.Scene418_10.geometry} material={materials['Walls_2_2.005']} />
          <mesh raycast ={meshBounds} castShadow geometry={nodes.Scene418_11.geometry} material={materials['Windows.005']} />
          <mesh raycast ={meshBounds} castShadow geometry={nodes.Scene418_12.geometry} material={materials['Airing.005']} />
          <mesh raycast ={meshBounds} castShadow geometry={nodes.Scene418_13.geometry} material={materials['Wall_clumb.004']} />
          <mesh raycast ={meshBounds} castShadow geometry={nodes.Scene418_14.geometry} material={materials['Shutters.005']} />
        </group>
      </group>
    </group>
  )
}

export function Building_5_Green(props) {
  const { nodes, materials } = useGLTF('/assets/models/Buildings.glb')
  return (
    <group {...props} dispose={null}>
      <group position={[0, 0, 0]} rotation={[Math.PI / 2, 0, 0]} scale={0.005}>
        <mesh raycast ={meshBounds} castShadow geometry={nodes.Scene423.geometry} material={materials['Walls_1.006']} />
        <mesh raycast ={meshBounds} castShadow geometry={nodes.Scene423_1.geometry} material={materials['Wall_clumb.005']} />
        <mesh raycast ={meshBounds} castShadow geometry={nodes.Scene423_2.geometry} material={materials['Solar_panel.005']} />
        <mesh raycast ={meshBounds} castShadow geometry={nodes.Scene423_3.geometry} material={materials['Windows.010']} />
        <mesh raycast ={meshBounds} castShadow geometry={nodes.Scene423_4.geometry} material={materials['Walls_2_3.006']} />
        <mesh raycast ={meshBounds} castShadow geometry={nodes.Scene423_5.geometry} material={materials['Walls_1_3.005']} />
        <mesh raycast ={meshBounds} castShadow geometry={nodes.Scene423_6.geometry} material={materials['Brick_walls_1_1.007']} />
        <mesh raycast ={meshBounds} castShadow geometry={nodes.Scene423_7.geometry} material={materials['Stairs.010']} />
        <mesh raycast ={meshBounds} castShadow geometry={nodes.Scene423_8.geometry} material={materials['Roof.010']} />
        <mesh raycast ={meshBounds} castShadow geometry={nodes.Scene423_9.geometry} material={materials['Plinth_2.005']} />
        <mesh raycast ={meshBounds} castShadow geometry={nodes.Scene423_10.geometry} material={materials['Doors.010']} />
        <mesh raycast ={meshBounds} castShadow geometry={nodes.Scene423_11.geometry} material={materials['Walls_5.006']} />
        <mesh raycast ={meshBounds} castShadow geometry={nodes.Scene423_12.geometry} material={materials['Parts.007']} />
        <mesh raycast ={meshBounds} castShadow geometry={nodes.Scene423_13.geometry} material={materials['Airing.010']} />
        <mesh raycast ={meshBounds} castShadow geometry={nodes.Scene423_14.geometry} material={materials['Wall_clumb.006']} />
        <mesh raycast ={meshBounds} castShadow geometry={nodes.Scene423_15.geometry} material={materials['Solar_panel.006']} />
        <mesh raycast ={meshBounds} castShadow geometry={nodes.Scene423_16.geometry} material={materials['Windows.011']} />
        <mesh raycast ={meshBounds} castShadow geometry={nodes.Scene423_17.geometry} material={materials['Walls_2_3.007']} />
        <mesh raycast ={meshBounds} castShadow geometry={nodes.Scene423_18.geometry} material={materials['Walls_1_3.006']} />
        <mesh raycast ={meshBounds} castShadow geometry={nodes.Scene423_19.geometry} material={materials['Brick_walls_1_1.008']} />
        <mesh raycast ={meshBounds} castShadow geometry={nodes.Scene423_20.geometry} material={materials['Stairs.011']} />
        <mesh raycast ={meshBounds} castShadow geometry={nodes.Scene423_21.geometry} material={materials['Roof.011']} />
        <mesh raycast ={meshBounds} castShadow geometry={nodes.Scene423_22.geometry} material={materials['Plinth_2.006']} />
        <mesh raycast ={meshBounds} castShadow geometry={nodes.Scene423_23.geometry} material={materials['Doors.011']} />
        <mesh raycast ={meshBounds} castShadow geometry={nodes.Scene423_24.geometry} material={materials['Walls_1.007']} />
        <mesh raycast ={meshBounds} castShadow geometry={nodes.Scene423_25.geometry} material={materials['Walls_5.007']} />
        <mesh raycast ={meshBounds} castShadow geometry={nodes.Scene423_26.geometry} material={materials['Parts.008']} />
        <mesh raycast ={meshBounds} castShadow geometry={nodes.Scene423_27.geometry} material={materials['Airing.011']} />
      </group>
    </group>
  )
}

export function Building_8_Green(props) {
  const { nodes, materials } = useGLTF('/assets/models/Buildings.glb')
  return (
    <group {...props} dispose={null}>
      <group position={[0, 0, 0]} rotation={[Math.PI / 2, 0, 0]} scale={0.005}>
        <mesh raycast ={meshBounds} castShadow geometry={nodes.Scene420.geometry} material={materials['Walls_4.006']} />
        <mesh raycast ={meshBounds} castShadow geometry={nodes.Scene420_1.geometry} material={materials['Parts.006']} />
        <mesh raycast ={meshBounds} castShadow geometry={nodes.Scene420_2.geometry} material={materials['Doors.007']} />
        <mesh raycast ={meshBounds} castShadow geometry={nodes.Scene420_3.geometry} material={materials['Plinth_3.006']} />
        <mesh raycast ={meshBounds} castShadow geometry={nodes.Scene420_4.geometry} material={materials['Roof.007']} />
        <mesh raycast ={meshBounds} castShadow geometry={nodes.Scene420_5.geometry} material={materials['Stairs.007']} />
        <mesh raycast ={meshBounds} castShadow geometry={nodes.Scene420_6.geometry} material={materials['Walls_2_3.005']} />
        <mesh raycast ={meshBounds} castShadow geometry={nodes.Scene420_7.geometry} material={materials['Walls_5.005']} />
        <mesh raycast ={meshBounds} castShadow geometry={nodes.Scene420_8.geometry} material={materials['Walls_5_2.005']} />
        <mesh raycast ={meshBounds} castShadow geometry={nodes.Scene420_9.geometry} material={materials['Windows.007']} />
        <mesh raycast ={meshBounds} castShadow geometry={nodes.Scene420_10.geometry} material={materials['Airing.007']} />
        <mesh raycast ={meshBounds} castShadow geometry={nodes.Scene420_11.geometry} material={materials['Awnings_2.007']} />
        <mesh raycast ={meshBounds} castShadow geometry={nodes.Scene420_12.geometry} material={materials['Shutters.007']} />
      </group>
    </group>
  )
}

export function Building_10_1_Blue(props) {
  const { nodes, materials } = useGLTF('/assets/models/Buildings.glb')
  return (
    <group {...props} dispose={null}>
      <group position={[0, 0, 0]} rotation={[Math.PI / 2, 0, 0]} scale={0.005}>
        <group position={[0, 0, 0]}>
          <mesh raycast ={meshBounds} castShadow geometry={nodes.Scene413.geometry} material={materials['Roof.005']} />
          <mesh raycast ={meshBounds} castShadow geometry={nodes.Scene413_1.geometry} material={materials['Walls_4.005']} />
          <mesh raycast ={meshBounds} castShadow geometry={nodes.Scene413_2.geometry} material={materials['Walls_1.005']} />
          <mesh raycast ={meshBounds} castShadow geometry={nodes.Scene413_3.geometry} material={materials['Doors.005']} />
          <mesh raycast ={meshBounds} castShadow geometry={nodes.Scene413_4.geometry} material={materials['Plinth_2.004']} />
          <mesh raycast ={meshBounds} castShadow geometry={nodes.Scene413_5.geometry} material={materials['Stairs.005']} />
          <mesh raycast ={meshBounds} castShadow geometry={nodes.Scene413_6.geometry} material={materials['Walls_2_2.005']} />
          <mesh raycast ={meshBounds} castShadow geometry={nodes.Scene413_7.geometry} material={materials['Walls_6.004']} />
          <mesh raycast ={meshBounds} castShadow geometry={nodes.Scene413_8.geometry} material={materials['Windows.005']} />
          <mesh raycast ={meshBounds} castShadow geometry={nodes.Scene413_9.geometry} material={materials['Awnings.004']} />
          <mesh raycast ={meshBounds} castShadow geometry={nodes.Scene413_10.geometry} material={materials['Airing.005']} />
        </group>
      </group>
    </group>
  )
}

export function Building_10_Blue(props) {
  const { nodes, materials } = useGLTF('/assets/models/Buildings.glb')
  return (
    <group {...props} dispose={null}>
      <group position={[0, 0, 0]} rotation={[Math.PI / 2, 0, 0]} scale={0.005}>
        <mesh raycast ={meshBounds} castShadow geometry={nodes.Airing_4__1__3.geometry} material={materials['Airing.005']} rotation={[0, 0, 1.571]} />
        <mesh raycast ={meshBounds} castShadow geometry={nodes.Scene415.geometry} material={materials['Roof.005']} />
        <mesh raycast ={meshBounds} castShadow geometry={nodes.Scene415_1.geometry} material={materials['Walls_4.005']} />
        <mesh raycast ={meshBounds} castShadow geometry={nodes.Scene415_2.geometry} material={materials['Walls_1.005']} />
        <mesh raycast ={meshBounds} castShadow geometry={nodes.Scene415_3.geometry} material={materials['Doors.005']} />
        <mesh raycast ={meshBounds} castShadow geometry={nodes.Scene415_4.geometry} material={materials['Plinth_3.005']} />
        <mesh raycast ={meshBounds} castShadow geometry={nodes.Scene415_5.geometry} material={materials['Stairs.005']} />
        <mesh raycast ={meshBounds} castShadow geometry={nodes.Scene415_6.geometry} material={materials['Walls_6.004']} />
        <mesh raycast ={meshBounds} castShadow geometry={nodes.Scene415_7.geometry} material={materials['Walls_1_3.004']} />
        <mesh raycast ={meshBounds} castShadow geometry={nodes.Scene415_8.geometry} material={materials['Windows.005']} />
        <mesh raycast ={meshBounds} castShadow geometry={nodes.Scene415_9.geometry} material={materials['Airing.005']} />
        <mesh raycast ={meshBounds} castShadow geometry={nodes.Scene415_10.geometry} material={materials['Awnings.004']} />
        <mesh raycast ={meshBounds} castShadow geometry={nodes.Scene415_11.geometry} material={materials['Shutters.005']} />
      </group>
    </group>
  )
}

export function Building_9_Blue(props) {
  const { nodes, materials } = useGLTF('/assets/models/Buildings.glb')
  return (
    <group {...props} dispose={null}>
      <group position={[0, 10.3, 0]} rotation={[Math.PI / 2, 0, Math.PI / 2]} scale={0.005}>
          <mesh raycast ={meshBounds} castShadow geometry={nodes.Scene422.geometry} material={materials['Airing.009']} />
          <mesh raycast ={meshBounds} castShadow geometry={nodes.Scene422_1.geometry} material={materials['Windows.009']} />
          <mesh raycast ={meshBounds} castShadow geometry={nodes.Scene422_2.geometry} material={materials['Brick_walls_1.006']} />
          <mesh raycast ={meshBounds} castShadow geometry={nodes.Scene422_3.geometry} material={materials['Walls_6.005']} />
          <mesh raycast ={meshBounds} castShadow geometry={nodes.Scene422_4.geometry} material={materials['Walls_2_2.007']} />
          <mesh raycast ={meshBounds} castShadow geometry={nodes.Scene422_5.geometry} material={materials['Stairs.009']} />
          <mesh raycast ={meshBounds} castShadow geometry={nodes.Scene422_6.geometry} material={materials['Roof.009']} />
          <mesh raycast ={meshBounds} castShadow geometry={nodes.Scene422_7.geometry} material={materials['Plinth_3.008']} />
          <mesh raycast ={meshBounds} castShadow geometry={nodes.Scene422_8.geometry} material={materials['Doors.009']} />
          <mesh raycast ={meshBounds} castShadow geometry={nodes.Scene422_9.geometry} material={materials['Walls_4.008']} />
          <mesh raycast ={meshBounds} castShadow geometry={nodes.Scene422_10.geometry} material={materials['Awnings_2.009']} />
      </group>
    </group>
  )
}

export function Building_7_Blue(props) {
  const { nodes, materials } = useGLTF('/assets/models/Buildings.glb')
  return (
    <group {...props} dispose={null}>
      <group position={[0, 0, 0]} rotation={[Math.PI / 2, 0, 0]} scale={0.005}>
        <mesh raycast ={meshBounds} castShadow geometry={nodes.Scene417.geometry} material={materials['Roof.005']} />
        <mesh raycast ={meshBounds} castShadow geometry={nodes.Scene417_1.geometry} material={materials['Walls_6.004']} />
        <mesh raycast ={meshBounds} castShadow geometry={nodes.Scene417_2.geometry} material={materials['Doors.005']} />
        <mesh raycast ={meshBounds} castShadow geometry={nodes.Scene417_3.geometry} material={materials['Parts.004']} />
        <mesh raycast ={meshBounds} castShadow geometry={nodes.Scene417_4.geometry} material={materials['Tile_1.004']} />
        <mesh raycast ={meshBounds} castShadow geometry={nodes.Scene417_5.geometry} material={materials['Plinth_3.005']} />
        <mesh raycast ={meshBounds} castShadow geometry={nodes.Scene417_6.geometry} material={materials['Stairs.005']} />
        <mesh raycast ={meshBounds} castShadow geometry={nodes.Scene417_7.geometry} material={materials['Brick_walls_1_1.005']} />
        <mesh raycast ={meshBounds} castShadow geometry={nodes.Scene417_8.geometry} material={materials['Walls_6_2.004']} />
        <mesh raycast ={meshBounds} castShadow geometry={nodes.Scene417_9.geometry} material={materials['Walls_2_3.004']} />
        <mesh raycast ={meshBounds} castShadow geometry={nodes.Scene417_10.geometry} material={materials['Windows.005']} />
        <mesh raycast ={meshBounds} castShadow geometry={nodes.Scene417_11.geometry} material={materials['Airing.005']} />
        <mesh raycast ={meshBounds} castShadow geometry={nodes.Scene417_12.geometry} material={materials['Awnings.004']} />
        <mesh raycast ={meshBounds} castShadow geometry={nodes.Scene417_13.geometry} material={materials['Wall_clumb.004']} />
      </group>
    </group>
  )
}


useGLTF.preload('/assets/models/Buildings.glb')