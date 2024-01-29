import React from 'react'
import * as THREE from 'three'
export default function Curve(){


    const CubicBezierCurve = () => {
    const curve = new THREE.CubicBezierCurve3(
        new THREE.Vector3(-10, 0, 0),
        new THREE.Vector3(-5, 15, 0),
        new THREE.Vector3(20, 15, 0),
        new THREE.Vector3(10, 0, 0)
        );
        
        const points = curve.getPoints(50);
        const geometry = new THREE.BufferGeometry().setFromPoints(points);
      
        const material = new THREE.LineBasicMaterial({ color: 0xff0000 });
        return <line geometry={geometry} material={material} />;
    }
    const shape = new THREE.Shape(CubicBezierCurve().geometry.attributes.position.array);

    const extrudeSettings = {
        steps: 2,
        depth: 16,
        bevelEnabled: true,
        bevelThickness: 1,
        bevelSize: 1,
        bevelOffset: 0,
        bevelSegments: 1
    };

    const geometry = new THREE.ExtrudeGeometry( shape, extrudeSettings );
    const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );


  return (
    <>
        <mesh geometry={geometry} material={material} position={[0, 0, 0]} />  
    </>
  );
}