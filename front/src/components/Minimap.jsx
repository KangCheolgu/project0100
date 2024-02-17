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

let targetX, targetZ, myX, myZ

export function Minimap({size=300, sizeHeight=300, chassisBody, socket, vehicleId }){

  socket.on("updateAnotherPlayer", (data)=>{
    //data => id, position, quaternion, velocity, acceleration checkPointIndex, index
    const targetPosition = new THREE.Vector3(data.position.x, data.position.y ,data.position.z);
    targetX = parseFloat(targetPosition.x.toFixed(3))
    targetZ = parseFloat(targetPosition.z.toFixed(3))
    // console.log(targetX)
    
  })
  

  // useEffect(()=>{
    //   const myX = bodyPosition.x.
    
    //     console.log(myX)
    //   }, [bodyPosition])
    
    
    //수정된 부분: useFBO 훅을 사용하여 buffer 생성
    const virtualScene = useMemo(() => new THREE.Scene(), [])
    const buffer = useFBO(600, 600)
    const miniMapCamera = useRef()
    const miniMap = useRef()
    const { gl, camera, scene, size: screenSize } = useThree(({ camera, gl, scene, size }) => ({ gl, camera, scene, size }))
    const [screenPosition, setScreenPosition] = useState(new THREE.Vector3(screenSize.width / 2 - size / 2, screenSize.height / 2 - size / 2, 0))
    const player1 = useRef()
    const player2 = useRef()
    // const matrix = new THREE.Matrix4()
    
    useEffect(() => {
      setScreenPosition(new THREE.Vector3(screenSize.width/2 - size/2, screenSize.height/2-sizeHeight/2), [screenSize])
    }, [])
    
    useFrame(() => {
      const bodyPosition = chassisBody.current.getWorldPosition(new THREE.Vector3())

      gl.autoClear = true
      gl.render(scene, camera)
      gl.autoClear = false
      gl.clearDepth()
      
      if(socket.id === vehicleId){
    
        myX = parseFloat(bodyPosition.x.toFixed(3))
        myZ = parseFloat(bodyPosition.z.toFixed(3))
      }
        // matrix.copy(camera.matrix).invert()
        // miniMap.current.quaternion.setFromRotationMatrix(matrix)
        // player.current.quaternion.setFromRotationMatrix(matrix)
        
        const ratioX = size / 10
        const ratioY = 600 / size
        
      player1.current.position.set(screenPosition.x - 74 + myX, screenPosition.y - 65 - myZ, 0)
      player2.current.position.set(screenPosition.x - 74 + targetX, screenPosition.y - 65 - targetZ, 0)
      gl.render(virtualScene, miniMapCamera.current)
      
      },0.1)
      

    return (
        <>
      {createPortal(
        <>
          <OrthographicCamera ref={miniMapCamera} makeDefault={false} position={[0, 0, 100]} />
          <sprite ref={miniMap} position={screenPosition} scale={[size, sizeHeight, 1]}>
            <spriteMaterial map={buffer.texture} />
          </sprite>
          <sprite material-color={"#00FF00"} ref={player1} position={screenPosition} scale={[size / 30, size / 30, 1]} />
          <sprite material-color={"red"} ref={player2} position={screenPosition} scale={[size / 30, size/ 30, 1]} />
        </>,    
        virtualScene,
      )}
      <MiniMapTexture buffer={buffer} />
    </>
    );

}