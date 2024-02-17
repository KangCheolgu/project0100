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

    
    socket.on("updateAnotherPlayer", (data)=>{
      //data => id, position, quaternion, velocity, acceleration checkPointIndex, index
      const targetPosition = new THREE.Vector3(data.position.x, data.position.y ,data.position.z);
      targetX = parseFloat(targetPosition.x.toFixed(3))
      targetZ = parseFloat(targetPosition.z.toFixed(3))
      // console.log(targetX)
      
    })

    useEffect(() => {
        setScreenPosition(new THREE.Vector3(screenSize.width / 2 - size / 2, screenSize.height / 2 - size_height / 2, 0))
      }, [screenSize])
    

    useFrame(() => {      
        {/*matrix.copy(camera.matrix).invert()
        miniMap.current.quaternion.setFromRotationMatrix(matrix)
        player1.current.quaternion.setFromRotationMatrix(matrix)
    player2.current.quaternion.setFromRotationMatrix(matrix)*/}
        gl.autoClear = true
        gl.render(scene, camera)
        gl.autoClear = false
        gl.clearDepth()
        {/*direction.subVectors(new THREE.Vector3(myX, 0, myZ), new THREE.Vector3(0, 0, 0)*/}
        const bodyPosition = chassisBody.current.getWorldPosition(new THREE.Vector3())
        
        if(socket.id===vehicleId){
          myX = parseFloat(bodyPosition.x.toFixed(3))
          myZ = parseFloat(bodyPosition.z.toFixed(3))
        }
        player1.current.position.set(screenPosition.x-74+myX, screenPosition.y-65-myZ, 0)
        player2.current.position.set(screenPosition.x-74+targetX, screenPosition.y-65-targetZ, 0)
        
        const ratioX = size / 71
        const ratioY = 101 / size
        
       
        gl.render(virtualScene, miniMapCamera.current)
      }, 1)
    

    return (
        <>
      {createPortal(
        <>
          <OrthographicCamera ref={miniMapCamera} makeDefault={false} position={[0, 0, 100]} />
          <sprite ref={miniMap} position={screenPosition} scale={[size, size_height, 1]}>
            <spriteMaterial map={buffer.texture} />
          </sprite>
          <sprite material-color="red" ref={player1} position={[screenPosition]} scale={[size/30,size_height/50, 1]} />
          <sprite material-color="blue" ref={player2} position={[screenPosition]} scale={[size/30,size_height/50, 1]} />
        </>,    
        virtualScene,
      )}
      <MiniMapTexture buffer={buffer} />
    </>
    );
}