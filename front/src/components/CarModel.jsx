import React, { useEffect, useMemo } from 'react';
import { useGLTF } from '@react-three/drei';
import { Color, Vector3, Shape, ExtrudeGeometry, MeshStandardMaterial, Mesh } from 'three';
import { conditionalExpression } from '@babel/types';

export function CarModel({ brakeLightsOn, index, ...props }) {
  const modelPath = index === 0 ? '/assets/models/ToyCar-blue.glb' : '/assets/models/ToyCar-red.glb';
  const { nodes, materials } = useGLTF(modelPath);

  const triangleShape = useMemo(() => {
    const shape = new Shape();
    shape.moveTo(0, 0); // 역삼각형의 상단 점
    shape.lineTo(-1, -2); // 왼쪽 하단
    shape.lineTo(1, -2); // 오른쪽 하단
    shape.lineTo(0, 0); // 다시 상단 점으로
    return shape;
  }, []);

  // 역삼각형의 3D 형태 생성
  const triangleGeometry = useMemo(() => new ExtrudeGeometry(triangleShape, { depth: 0.1, bevelEnabled: false }), [triangleShape]);

  // 차량 색상에 따른 역삼각형 색상 설정
  const triangleMaterial = useMemo(() => new MeshStandardMaterial({ color: index === 0 ? '#1e90ff' : '#ff6347' }), [index]);

  useEffect(() => {
    // 브레이크등 상태에 따른 색상 변경
    const brakeLightColor = brakeLightsOn ? new Color(1, 0.1, 0) : new Color(0, 0, 0); // 붉은색 또는 검정색
    if (materials.redl && materials.redr) {
      materials.redl.emissive = brakeLightColor;
      materials.redr.emissive = brakeLightColor;
      // console.log(brakeLightColor);
    }
  }, [brakeLightsOn, materials]);

  // console.log(brakeLightsOn);

  if(index === 0 && nodes.Formula) {
    return (
      <group {...props} dispose={null}>
        <mesh castShadow receiveShadow geometry={nodes.Formula.geometry} material={materials.toy_Cars_color_01} position={[0, -0.1, 0]} rotation={[Math.PI / 2, 0, Math.PI]} scale={0.0017}>
          <mesh geometry={nodes.BreakLight_L.geometry} material={materials.redl} position={[44, -175, -71]} scale={150}/>
          <mesh geometry={nodes.BreakLight_R.geometry} material={materials.redr} position={[-44, -175, -71]} scale={150}/>
          <mesh geometry={triangleGeometry} material={triangleMaterial} position={[0, -150, -590]} rotation={[Math.PI/2, Math.PI, 0]} scale={[100, 100, 100]}/>
        </mesh>
      </group>
    )
  } else if (nodes.Formula) {
    return (
      <group {...props} dispose={null}>
        <mesh castShadow receiveShadow geometry={nodes.Formula.geometry} material={materials.toy_Cars_color_01} position={[0, -0.1, 0]} rotation={[Math.PI / 2, 0, Math.PI]} scale={0.0017}>
          <mesh geometry={nodes.BreakLight_L.geometry} material={materials.redl} position={[44, -175, -71]} scale={150}/>
          <mesh geometry={nodes.BreakLight_R.geometry} material={materials.redr} position={[-44, -175, -71]} scale={150}/>
          <mesh geometry={triangleGeometry} material={triangleMaterial} position={[0, -150, -590]} rotation={[Math.PI/2, Math.PI, 0]} scale={[150, 150, 150]}/>
        </mesh>
      </group>
    )
  }
}

useGLTF.preload('/assets/models/ToyCar-blue.glb');
useGLTF.preload('/assets/models/ToyCar-red.glb');
