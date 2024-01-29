// import React from 'react';
// import * as THREE from 'three';

// export default function Upward(position, rotation){
//     const geometry = new THREE.PlaneGeometry(10, 4)
//     const material = new THREE.MeshStandardMaterial({color: "brown"})

//     const {ref, body} = useCannon({mass:1});

//     // const innerRadius = 5;
//     // const outerRadius = 7;
//     // const thetaSegments = 18;
//     // const phiSegments = 2;
//     // const thetaStart = Math.PI * 0.5;
//     // const thetaLength = Math.PI * 0.5;
//     // const ringGeometry = new THREE.RingGeometry(
//     //     innerRadius,
//     //     outerRadius,
//     //     thetaSegments,
//     //     phiSegments,
//     //     thetaStart,
//     //     thetaLength
//     // );

//     // const extrudeSettings = {
//     //     steps: 2,
//     //     depth: 2, // Set the extrusion depth to give it a 3D effect
//     //     bevelEnabled: true,
//     //     bevelThickness: 1,
//     //     bevelSize: 1,
//     //     bevelOffset: 0,
//     //     bevelSegments: 1,
//     // };

//     // const exGeometry = new THREE.ExtrudeGeometry(ringGeometry, extrudeSettings);

//     // const roadMaterial = new THREE.MeshStandardMaterial({ color: 'slategrey' });

//     return (
//         <>
//             <mesh ref={ref} geometry={geometry} material={material} rotation={rotation} position={position} />
//         </>
//     );
// }