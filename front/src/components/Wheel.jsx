// Wheel.jsx

import { useGLTF } from "@react-three/drei";

useGLTF.preload(`/assets/models/ToyCar-red.glb`)

export const Wheel = ({ wheelRef, radius, lefSide }) => {
  const { nodes, materials } = useGLTF(`/assets/models/ToyCar-red.glb`)

  return(
    <group ref={wheelRef} scale={[0.0018, 0.001875, 0.001875]}>
      <group rotation={lefSide ? [0, Math.PI, 0 ] :[ 0, 0, 0] }>
        <mesh castShadow geometry={nodes.FL_wheel.geometry} material={materials.toy_Cars_color_01} position={[-4, 0, 0]}/>
        <mesh castShadow geometry={nodes.FR_wheel.geometry} material={materials.toy_Cars_color_01} position={[4, 0, 0]}/>
        <mesh castShadow geometry={nodes.RL_wheel.geometry} material={materials.toy_Cars_color_01} position={[-4, 0, 0]}/>
        <mesh castShadow geometry={nodes.RR_wheel.geometry} material={materials.toy_Cars_color_01} position={[4, 0, 0]}/>
      </group>
    </group>
  );
}