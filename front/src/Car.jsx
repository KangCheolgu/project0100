import { useCompoundBody, useRaycastVehicle } from "@react-three/cannon";
import { useEffect, useMemo, useRef, useState, forwardRef } from "react";
import { useControls } from "leva";
import { useWheels } from "./utils/useWheels";
import { useVehicleControls } from "./utils/useVehicleControls";
import { Vector3 } from "three";
import { socket } from "./Scene.jsx";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber"
import { CarModel } from "./components/CarModel.jsx";
import { Wheel } from "./components/Wheel.jsx";


const Car = (props) => {

  // Quaternion, Position 인스턴스 생성
  const worldPosition = useMemo(() => new Vector3(), [])
  const worldQuaternion = useMemo(() => new THREE.Quaternion(), [])

  const chassisBodyValue = useControls('chassisBody', {
    width: { value: 0.16, min: 0, max: 1, },
    height: { value: 0.12, min: 0, max: 1, },
    front: { value: 0.17, min: 0, max: 1, },
  })

  const [position, setPosition] = useState();
  // const [rotation, setRotation] = useState();
  const [quaternion, setQuaternion] = useState();
  // 위치 값
  useEffect(() => {
    setPosition(props.position)
    setQuaternion(props.rotation)
  },[])

  let width, height, front, mass, wheelRadius;

  width = 0.15;
  height = 0.12;
  front = 0.14;
  wheelRadius = 0.05;
  mass = 150;

  const chassisBodyArgs = [width, height, front * 2];

  const [chassisBody, chassisApi] = useCompoundBody(
    () => ({
      position,
      mass: mass,
      rotation:[0, 0, 0, 0],
      shapes: [
        {
          args: chassisBodyArgs,
          position: [0, 0, 0],
          type: "Box"
        },
        {
          args: [width, height, front],
          position: [0, height, 0],
          type: "Box",
        },
      ],
    }),
    useRef(null)
  );

  const [wheels, wheelInfos] = useWheels(width, height, front, wheelRadius);

  const [vehicle, vehicleApi] = useRaycastVehicle(
    () => ({
      chassisBody,
      wheelInfos,
      wheels,
    }),
    useRef(null),
  );

  useVehicleControls(vehicleApi, chassisApi, props.id, props.state)

  const [smoothedCameraPosition] = useState(
    () => new THREE.Vector3(10, 10, 10)
  );
  const [smoothedCameraTarget] = useState(() => new THREE.Vector3());


// Back-View 카메라
  useFrame((state, delta) => {
    if (socket.id === props.id) {
      
      const bodyPosition = chassisBody.current.getWorldPosition(worldPosition);
      const bodyRotation = chassisBody.current.getWorldQuaternion(worldQuaternion);

      // 카메라의 상대 위치 (자동차 뒷부분에서의 상대 위치)
      const relativeCameraPosition = new THREE.Vector3(0, 0.5, 0.9);

      // 카메라의 전역 위치 계산
      const cameraPosition = new THREE.Vector3();
      cameraPosition.copy(relativeCameraPosition);
      cameraPosition.applyQuaternion(bodyRotation); // 카메라 위치를 자동차의 회전에 따라 변환
      cameraPosition.add(bodyPosition); // 카메라 위치를 자동차 위치에 더함

      // smooth camera 전환속도
      // smoothedCameraPosition.lerp(cameraPosition, 0.5);

      // state.camera.position.copy(smoothedCameraPosition);
      state.camera.position.copy(cameraPosition);

      // 카메라가 항상 자동차의 뒷부분을 바라보도록 설정
      const cameraTarget = new THREE.Vector3();
      cameraTarget.copy(bodyPosition);
      cameraTarget.y += 0.25;
      state.camera.lookAt(cameraTarget);
    } 
  })

  useEffect(() => {
    let lastPosition = new THREE.Vector3(chassisApi.position.x, chassisApi.position.y, chassisApi.position.z);
    let lastQuaternion = new THREE.Vector4(chassisApi.quaternion._x,chassisApi.quaternion._y,chassisApi.quaternion._z,chassisApi.quaternion._w)
    // let lastQuaternion = new THREE.Vector4(chassisApi.quaternion[0],chassisApi.quaternion[1],chassisApi.quaternion[2],chassisApi.quaternion[3])

    function updateAnotherPlayer(updateData){
      if(updateData.id === props.id) {
        // const targetPosition = new THREE.Vector3(updateData.position.x, updateData.position.y, updateData.position.z);
        // const targetQuaternion = new THREE.Quaternion(updateData.rotation[0], updateData.rotation[1], updateData.rotation[2], updateData.rotation[3]);
        
        // // chassisApi.position.set(updateData.position.x, updateData.position.y, updateData.position.z);
        // // chassisApi.quaternion.set(updateData.rotation[0], updateData.rotation[1], updateData.rotation[2], updateData.rotation[3]);
        // // chassisApi.velocity.set(0, 0, 0); // Optional: Reset velocity if needed
        // // chassisApi.angularVelocity.set(0, 0, 0); // Optional: Reset angular velocity if needed

        // lastPosition.lerp(targetPosition, 0.5); // 두 번째 매개변수는 보간 강도입니다.
        // chassisApi.position.copy(lastPosition);

        // // 쿼터니언도 마찬가지로 보간합니다.
        // lastQuaternion.lerp(targetQuaternion, 0.5);
        // chassisApi.quaternion.copy(lastQuaternion);

        const targetPosition = new THREE.Vector3(updateData.position.x, updateData.position.y, updateData.position.z);
        const targetQuaternion = new THREE.Quaternion(updateData.rotation[0], updateData.rotation[1], updateData.rotation[2], updateData.rotation[3]);
        
        // 보간된 값을 계산합니다.
        const newPosition = new THREE.Vector3().lerpVectors(lastPosition, targetPosition, 0.5);
        const newQuaternion = new THREE.Quaternion().slerpQuaternions(lastQuaternion, targetQuaternion, 0.5);
        
        // 물리 엔진을 통해 위치와 방향을 설정합니다.
        chassisApi.position.set(newPosition.x, newPosition.y, newPosition.z);
        chassisApi.quaternion.set(newQuaternion.x, newQuaternion.y, newQuaternion.z, newQuaternion.w);
        
        // 이전 위치와 방향을 업데이트합니다.
        lastPosition.copy(newPosition);
        lastQuaternion.copy(newQuaternion);
      }
    }

    

    socket.on("updateAnotherPlayer", updateAnotherPlayer)

    return(() => {
      socket.off("updateAnotherPlayer", updateAnotherPlayer)
    })
  })

 //시간마다 현재 위치를 서버로 보냄
  const useInterval = (callback, delay) => {
    const savedCallback = useRef();
    useEffect(() => {
        savedCallback.current = callback;
    }, [callback]);

    useEffect(() => {
      function tick() {
        savedCallback.current()
      }
      
      if (delay !== null) {
        let id = setInterval(tick, delay)
        return (() => clearInterval(id))
      }
    },[delay])
  }
  const Timer = () => {
      useInterval(() => {
        if(socket.id === props.id){
          const bodyPosition = chassisBody.current.getWorldPosition(worldPosition);
          const bodyRotation = chassisBody.current.getWorldQuaternion(worldQuaternion);
        
          const currentState = {
            id: socket.id,
            position: chassisBody.current.getWorldPosition(bodyPosition),
            rotation: chassisBody.current.getWorldQuaternion(bodyRotation)
          }
          socket.emit("currentState", currentState)   
        } 
      }, 100)
  }

  return (
      <group ref={vehicle}>
        <group ref={chassisBody}>
            <CarModel />
        </group>
        <Wheel wheelRef={wheels[0]} radius={wheelRadius} />
        <Wheel wheelRef={wheels[1]} radius={wheelRadius} />
        <Wheel wheelRef={wheels[2]} radius={wheelRadius} />
        <Wheel wheelRef={wheels[3]} radius={wheelRadius} />
        <Timer />
      </group>
  )
}

export default Car