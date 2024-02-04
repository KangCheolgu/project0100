// Wheel.jsx

import { useGLTF } from "@react-three/drei";

useGLTF.preload(`/assets/models/porche.glb`)

export const Wheel = ({ wheelRef, radius, lefSide }) => {
  const { nodes, materials } = useGLTF(`/assets/models/porchelow.glb`)

  return(
    <group ref={wheelRef} scale={[0.003, 0.0025, 0.0025]}>
      <group rotation={lefSide ? [0, -Math.PI, 0 ] :[ 0, 0, 0] }>
        <group rotation={[Math.PI / 2, 0, 0]} scale={1}>
          <mesh geometry={nodes.brakes003_1.geometry} material={materials.CARRERA_4096}>
            <mesh geometry={nodes.tyre003_1.geometry} material={materials.CARRERA_4096} />
          </mesh>
          <mesh geometry={nodes.brakes004_1.geometry} material={materials.CARRERA_4096}>
            <mesh geometry={nodes.tyre004_1.geometry} material={materials.CARRERA_4096}/>
          </mesh>
          <mesh geometry={nodes.brakes1_1.geometry} material={materials.CARRERA_4096}>
            <mesh geometry={nodes.tyre1_1.geometry} material={materials.CARRERA_4096}/>
          </mesh>
          <mesh geometry={nodes.brakes2_1.geometry} material={materials.CARRERA_4096}>
            <mesh geometry={nodes.tyre2_1.geometry} material={materials.CARRERA_4096}/>
          </mesh>
        </group>
      </group>
    </group>
  );
};