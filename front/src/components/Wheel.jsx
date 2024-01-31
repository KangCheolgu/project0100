import { useGLTF } from "@react-three/drei";

useGLTF.preload(`/assets/models/Rover.glb`)

export const Wheel = ({ wheelRef, radius, lefSide }) => {
  const { nodes, materials } = useGLTF(`/assets/models/Rover.glb`)

  return(
    <group ref={wheelRef} scale={0.5}>
      <group rotation={lefSide ? [0, -Math.PI, 0 ] :[ 0, 0, 0] }>
        <mesh geometry={nodes.Wheel_4001.geometry} material={materials.Atlas} rotation={[-Math.PI / 2, 0, 0]} scale={20}/>
        <mesh geometry={nodes.Wheel_5.geometry} material={materials.Atlas}rotation={[-Math.PI / 2, 0, 0]} scale={20}/>
        <mesh geometry={nodes.Wheel_1002.geometry} material={materials.Atlas}  rotation={[-Math.PI / 2, 0, 0]} scale={20}/>
        <mesh geometry={nodes.Wheel_4002.geometry} material={materials.Atlas}  rotation={[-Math.PI / 2, 0, 0]} scale={20}/>
      </group>
    </group>
  );
};