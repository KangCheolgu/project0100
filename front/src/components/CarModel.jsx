import React, { useEffect } from 'react';
import { useGLTF } from '@react-three/drei';
import { Color } from 'three';
import { conditionalExpression } from '@babel/types';

export function CarModel({ brakeLightsOn, index, ...props }) {
  const modelPath = index === 0 ? '/assets/models/ToyCar-blue.glb' : '/assets/models/ToyCar-red.glb';
  const { nodes, materials } = useGLTF(modelPath);

  useEffect(() => {
    // 브레이크등 상태에 따른 색상 변경
    const brakeLightColor = brakeLightsOn ? new Color(1, 0.1, 0) : new Color(0, 0, 0); // 붉은색 또는 검정색
    if (materials.redl && materials.redr) {
      materials.redl.emissive = brakeLightColor;
      materials.redr.emissive = brakeLightColor;
      console.log(brakeLightColor);
    }
  }, [brakeLightsOn, materials]);

  console.log(brakeLightsOn);

  if(index === 0 && nodes.Formula) {
    return (
      <group {...props} dispose={null}>
        <mesh castShadow receiveShadow geometry={nodes.Formula.geometry} material={materials.toy_Cars_color_01} position={[0, -0.1, 0]} rotation={[Math.PI / 2, 0, Math.PI]} scale={0.0017}>
          <mesh geometry={nodes.BreakLight_L.geometry} material={materials.redl} position={[44, -175, -71]} scale={150}/>
          <mesh geometry={nodes.BreakLight_R.geometry} material={materials.redr} position={[-44, -175, -71]} scale={150}/>
        </mesh>
      </group>
    )
  } else if (nodes.Formula) {
    return (
      <group {...props} dispose={null}>
        <mesh castShadow receiveShadow geometry={nodes.Formula.geometry} material={materials.toy_Cars_color_01} position={[0, -0.1, 0]} rotation={[Math.PI / 2, 0, Math.PI]} scale={0.0017}>
          <mesh geometry={nodes.BreakLight_L.geometry} material={materials.redl} position={[44, -175, -71]} scale={150}/>
          <mesh geometry={nodes.BreakLight_R.geometry} material={materials.redr} position={[-44, -175, -71]} scale={150}/>
        </mesh>
      </group>
    )
  }
}

useGLTF.preload('/assets/models/ToyCar-blue.glb');
useGLTF.preload('/assets/models/ToyCar-red.glb');
