import { OrthographicCamera, useFBO } from '@react-three/drei'
import { extend, createPortal, useThree, useFrame } from '@react-three/fiber'
import { useEffect, useRef, useMemo, useState } from 'react'
import * as THREE from 'three';
import { MeshLineGeometry , MeshLineMaterial } from 'meshline'

extend({ MeshLineGeometry, MeshLineMaterial })

function MiniMapTexture({ buffer }) {
    const camera = useRef()
    const { gl, scene } = useThree(({ gl, scene }) => ({ gl, scene }))

    useEffect(() => {
      gl.setRenderTarget(buffer)
      // 수정된 부분: 상대적인 값 대신에 절대적인 값으로 설정
      camera.current.bottom = -55
      camera.current.top = 145
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

let targetX, targetZ, myX, myZ

export function Minimap({size=200, size_height=300, chassisBody, socket, vehicleId }){
    const virtualScene = useMemo(() => new THREE.Scene(), [])
    const buffer = useFBO(600, 600)
    const miniMapCamera = useRef()
    const miniMap = useRef()
    const { gl, camera, scene, size: screenSize } = useThree(({ camera, gl, scene, size, size_height }) => ({ gl, camera, scene, size, size_height }))
    const [screenPosition, setScreenPosition] = useState(new THREE.Vector3(screenSize.width / 2 - size / 2, screenSize.height / 2 - size_height / 2, 0))
    const player1 = useRef()
    const player2 = useRef()
    const matrix = new THREE.Matrix4()
    const direction = new THREE.Vector3()

    const points = [];
    {/*Map1*/}
    points.push(new THREE.Vector3(592, 77, 0.1)); // 해변 좌측 하단
    points.push(new THREE.Vector3(742, 77,  0.1)); // 해변 우측 하단
    points.push(new THREE.Vector3(742, 150,  0.1)); // 골목길 입구
    points.push(new THREE.Vector3(697, 150,  0.1)); // 골목길 출구
    points.push(new THREE.Vector3(697, 131,  0.1));
    points.push(new THREE.Vector3(653, 131,  0.1));
    points.push(new THREE.Vector3(653, 170,  0.1));
    points.push(new THREE.Vector3(742, 170,  0.1)); // 다리 입구
    {/* Map2*/}
    points.push(new THREE.Vector3(742, 316,  0.1)); // 우측 상단
    points.push(new THREE.Vector3(697, 316,  0.1));
    points.push(new THREE.Vector3(697, 270, 0.1));
    points.push(new THREE.Vector3(653, 270,  0.1));
    points.push(new THREE.Vector3(653, 316,  0.1));
    points.push(new THREE.Vector3(592, 316,  0.1)); // 좌측 상단
    points.push(new THREE.Vector3(592, 77,  0.1));
    
    socket.on("updateAnotherPlayer", (data)=>{
      const targetPosition = new THREE.Vector3(data.position.x, data.position.y ,data.position.z);
      targetX = parseFloat(targetPosition.x.toFixed(3))
      targetZ = parseFloat(targetPosition.z.toFixed(3))
      
    })

    useEffect(() => {
        setScreenPosition(new THREE.Vector3(screenSize.width / 2 - size / 2, screenSize.height / 2 - size_height / 2, 0))
      }, [screenSize])
    

    useFrame(() => {      
        gl.autoClear = true
        gl.render(scene, camera)
        gl.autoClear = false
        gl.clearDepth()

        const ratioX = 150 / 61
        const ratioY = 239 / 180
        
        const bodyPosition = chassisBody.current.getWorldPosition(new THREE.Vector3())
        if(socket.id===vehicleId){
          myX = parseFloat(bodyPosition.x.toFixed(3))
          myZ = parseFloat(bodyPosition.z.toFixed(3))
        }

        player1.current.position.set(screenPosition.x-74+myX*ratioX, screenPosition.y-64-myZ*ratioY, 0.2)
        player2.current.position.set(screenPosition.x-74+targetX*ratioX, screenPosition.y-64-targetZ*ratioY, 0.2)

        gl.render(virtualScene, miniMapCamera.current)
      }, 1) 

    return (
        <>
      {createPortal(
        <>
          <OrthographicCamera ref={miniMapCamera} makeDefault={false} position={[0, 0, 100]} />
          <sprite ref={miniMap} position={screenPosition} scale={[size, size_height, 1]}>
            <spriteMaterial map={buffer.texture} transparent={true} opacity={0.7}/>
          </sprite>
          <sprite material-color="blue" ref={player1} position={[screenPosition]} scale={[20,20, 1]} />
          <sprite material-color="black" ref={player2} position={[screenPosition]} scale={[20,20, 1]} />
          <mesh>
            <meshLineGeometry attach="geometry" points={points}/>
            <meshLineMaterial  attach="material" lineWidth ={0.02} color={"white"}/>
          </mesh>
        </>,    
        virtualScene,
      )}
      <MiniMapTexture buffer={buffer} />
    </>
    );
}