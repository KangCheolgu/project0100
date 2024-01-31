import { useGLTF } from "@react-three/drei";

useGLTF.preload(`/assets/models/CAR Model.glb`)

export const Wheel = ({ wheelRef, radius, rightSide }) => {
  const { nodes, materials } = useGLTF(`/assets/models/CAR Model.glb`)

  return(
    <group ref={wheelRef} scale={radius * 0.1}>
      <group rotation={rightSide ? [0, -Math.PI, 0 ] :[ 0, 0, 0] }>
        <mesh geometry={nodes.Lamborghini_Aventador_Wheel_FR.geometry} material={materials._Lamborghini_AventadorLamborghini_Aventador_BodySG} rotation={[-1.576, 0, 0]} scale={0.02} />
      </group>
    </group>
  );
};

