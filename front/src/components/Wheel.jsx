// Wheel.jsx

import { useGLTF } from "@react-three/drei";

useGLTF.preload(`/assets/models/Ford.glb`)

export const Wheel = ({ wheelRef, radius, lefSide }) => {
  const { nodes, materials } = useGLTF(`/assets/models/Ford.glb`)

  return(
    <group ref={wheelRef} scale={[0.0013, 0.001875, 0.001875]}>
      <group rotation={lefSide ? [0, -Math.PI, 0 ] :[ 0, 0, 0] }>
      <mesh geometry={nodes.WHEEL_FL.geometry} material={materials['texture.001']} rotation={[-1.57, 0, 0]} scale={80} />
        <mesh geometry={nodes.WHEEL_FR.geometry} material={materials['texture.001']} rotation={[-1.57, 0, 0]} scale={80} />
        <mesh geometry={nodes.WHEEL_RL.geometry} material={materials['texture.001']} rotation={[-1.57, 0, 0]} scale={80} />
        <mesh geometry={nodes.WHEEL_RR.geometry} material={materials['texture.001']} rotation={[-1.57, 0, 0]} scale={80} />
      </group>
    </group>
  );
}