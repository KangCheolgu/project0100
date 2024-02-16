// import { useEffect, useRef } from "react";
// import { useThree, Canvas } from "@react-three/fiber";
// import {Html} from "@react-three/drei"

// export function Minimap({targetX, targetZ, myX, myZ}){
  
//   const targetRef = useRef(null);
//   const myRef = useRef(null);

//   useEffect(() => {
//     // 타겟 위치 업데이트
//     targetRef.current.style.left = `${targetX}px`;
//     targetRef.current.style.top = `${targetZ}px`;

//     // 내 위치 업데이트
//     myRef.current.style.left = `${myX}px`;
//     myRef.current.style.top = `${myZ}px`;
//   }, [targetX, targetZ, myX, myZ]);

//   return (
//     <Html>

//     <div style={{ position: 'relative', width: '500px', height: '500px', border: '1px solid black' }}>
//       <div
//         ref={targetRef}
//         style={{ position: 'absolute', width: '10px', height: '10px', backgroundColor: 'red', borderRadius: '50%' }}
//         ></div>
//       <div
//         ref={myRef}
//         style={{ position: 'absolute', width: '10px', height: '10px', backgroundColor: 'blue', borderRadius: '50%' }}
//         ></div>
//     </div>
//       </Html>
//   );
// }

import { OrthographicCamera, useFBO } from '@react-three/drei'
import { createPortal, useThree, useFrame } from '@react-three/fiber'
import { useEffect, useRef, useMemo, useState } from 'react'
import * as THREE from 'three';

function MiniMapTexture({ buffer }) {
    const camera = useRef()
    const { gl, scene } = useThree()

    useEffect(() => {
      gl.setRenderTarget(buffer)
      // 수정된 부분: 상대적인 값 대신에 절대적인 값으로 설정
      camera.current.bottom = -60
      camera.current.top = 150
      camera.current.left = -10
      camera.current.right =70
      // 수정된 부분: 카메라 위치 재설정
      camera.current.position.set(0, 100, 0)
      camera.current.updateProjectionMatrix()
      gl.render(scene, camera.current)
      gl.setRenderTarget(null)
    }, [])

    return <OrthographicCamera ref={camera} makeDefault={false} rotation={[-Math.PI / 2, 0, 0]} near={20} far={500} />
}

export function Minimap({size=300, targetX, targetZ, myX, myZ }){
    // 수정된 부분: useFBO 훅을 사용하여 buffer 생성
    // const virtualScene = useMemo(() => new THREE.Scene(), [])
    // const buffer = useFBO(600, 600)
    // const miniMapCamera = useRef()
    // const miniMap = useRef()
    // const { gl, camera, scene, size: screenSize } = useThree(({ camera, gl, scene, size }) => ({ gl, camera, scene, size }))
    // const [screenPosition, setScreenPosition] = useState(new THREE.Vector3(screenSize.width / 2 - size / 2, screenSize.height / 2 - size / 2, 0))
    // const player = useRef()
    // const player2 = useRef()
    // const matrix = new THREE.Matrix4()

    // useEffect(() => {
    //     setScreenPosition(new THREE.Vector3(0,0,0), [screenSize])
    // }, [])

    // useFrame(() => {
    //     matrix.copy(camera.matrix).invert()
    //     miniMap.current.quaternion.setFromRotationMatrix(matrix)
    //     player.current.quaternion.setFromRotationMatrix(matrix)
    //     // player2.current.quaternion.setFromRotationMatrix(matrix)
    //     gl.autoClear = true
    //     gl.render(scene, camera)
    //     gl.autoClear = false
    //     gl.clearDepth()

    //     const ratioX = size / 10
    //     const ratioY = 600 / size
        
    //     player.current.position.set(screenPosition.x + myX * ratioX, screenPosition.y - myZ * ratioY, 0)
    //     // player2.current.position.set(screenPosition.x + targetX * ratioX, screenPosition - targetZ * ratioY, 0)
    //     gl.render(virtualScene, miniMapCamera.current)
    //   }, 1)
      

    // return (
    //     <>
    //   {createPortal(
    //     <>
    //       <OrthographicCamera ref={miniMapCamera} makeDefault={false} position={[0, 0, 100]} />
    //       <sprite ref={miniMap} position={screenPosition} scale={[size, size, 1]}>
    //         <spriteMaterial map={buffer.texture} />
    //       </sprite>
    //       <sprite ref={player} position={screenPosition} scale={[size / 30, size / 30, 1]} />
    //       {/* <sprite ref={player2} position={screenPosition} scale={[size / 30, size/ 30, 1]} /> */}
    //     </>,    
    //     virtualScene,
    //   )}
    //   <MiniMapTexture buffer={buffer} />
    // </>
    // );
}