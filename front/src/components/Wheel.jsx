import { useGLTF} from "@react-three/drei";
import { useLayoutEffect, useMemo } from "react";
import * as THREE from 'three'

useGLTF.preload(`/assets/models/Rover.glb`)

export const Wheel = ({ wheelRef, radius, lefSide }) => {
  const { nodes, materials } = useGLTF(`/assets/models/Rover.glb`)
  {/*useLayoutEffect(()=>nodes.traverse(o=> o.isMesh&&(o.castShadow = o.receiveShadow=true)), [])*/}
  useMemo(() => {
    if (nodes instanceof THREE.Object3D) {
      nodes.traverse(obj => {
        obj.receiveShadow = true;
        obj.castShadow = true;
      });
    }
  }, [nodes]);
  
  return(
    <group ref={wheelRef} scale={0.5}>
      <group rotation={lefSide ? [0, -Math.PI, 0 ] :[ 0, 0, 0] }>
        <mesh castShadow receiveShadow geometry={nodes.Wheel_4001.geometry} material={materials.Atlas} rotation={[-Math.PI / 2, 0, 0]} scale={20}/>
        <mesh castShadow receiveShadow geometry={nodes.Wheel_5.geometry} material={materials.Atlas}rotation={[-Math.PI / 2, 0, 0]} scale={20}/>
        <mesh castShadow receiveShadow geometry={nodes.Wheel_1002.geometry} material={materials.Atlas}  rotation={[-Math.PI / 2, 0, 0]} scale={20}/>
        <mesh castShadow receiveShadow geometry={nodes.Wheel_4002.geometry} material={materials.Atlas}  rotation={[-Math.PI / 2, 0, 0]} scale={20}/>
      </group>
    </group>
  );
}