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
    const virtualScene = useMemo(() => new THREE.Scene(), [])
    const buffer = useFBO(600, 600)
    const miniMapCamera = useRef()
    const miniMap = useRef()
    const { gl, camera, scene, size: screenSize } = useThree(({ camera, gl, scene, size }) => ({ gl, camera, scene, size }))
    const [screenPosition, setScreenPosition] = useState(new THREE.Vector3(screenSize.width / 2 - size / 2, screenSize.height / 2 - size / 2, 0))
    const player = useRef()
    const matrix = new THREE.Matrix4()

    useEffect(() => {
        setScreenPosition(new THREE.Vector3(0,0,0), [screenSize])
    }, [])

    useFrame(() => {
        matrix.copy(camera.matrix).invert()
        miniMap.current.quaternion.setFromRotationMatrix(matrix)
        player.current.quaternion.setFromRotationMatrix(matrix)
        gl.autoClear = true
        gl.render(scene, camera)
        gl.autoClear = false
        gl.clearDepth()
        const ratioX = size / 10
        const ratioY = 600 / size
        player.current.position.set(screenPosition.x + 1 * ratioX, screenPosition.y - 1 * ratioY, 0)
        gl.render(virtualScene, miniMapCamera.current)
      }, 1)

    return (
        <>
      {createPortal(
        <>
          <OrthographicCamera ref={miniMapCamera} makeDefault={false} position={[0, 0, 100]} />
          <sprite ref={miniMap} position={screenPosition} scale={[size, size, 1]}>
            <spriteMaterial map={buffer.texture} />
          </sprite>
          <sprite ref={player} position={screenPosition} scale={[size / 30, size / 30, 1]} />
        </>,    
        virtualScene,
      )}
      <MiniMapTexture buffer={buffer} />
    </>
    );
}