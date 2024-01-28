import { useBox, useCompoundBody, useRaycastVehicle } from "@react-three/cannon";
import { useEffect, useMemo, useRef, useState, forwardRef } from "react";
import DummyCarBody from "./dummy/DummyCarBody";
import DummyWheel from "./dummy/DummyWheel";
import { useControls } from "leva";
import { useWheels } from "./utils/useWheels";
import { useVehicleControls } from "./utils/useVehicleControls";
import { Vector3 } from "three";
import { socket } from "./Scene.jsx";
import * as THREE from "three";
import { useFrame, useThree } from "@react-three/fiber";
// import useFollowCam from "./utils/useFollowCam";
import { Object3D } from 'three'
import useGame from './stores/useGame.jsx'
import { useKeyboardControls } from '@react-three/drei';

const Car = (props) => {
  // 체크포인트 위치
  const spot = [{x: 20, y: 0, z:0},
                {x: 20, y: 0, z:40},
                {x: -80, y: 0, z:40},
                {x: -80, y: 0, z:0}]
  
  // 시작 지점
  const startSpot={x:0, y:0, z:0}
  const [subscribeKeys, getKeys] = useKeyboardControls()
  const worldPosition = useMemo(() => new Vector3(), [])

  const chassisBodyValue = useControls('chassisBody', {
    width: { value: 0.16, min: 0, max: 1, },
    height: { value: 0.12, min: 0, max: 1, },
    front: { value: 0.17, min: 0, max: 1, },
  })
  // 위치 초기값
  const position = [0, 0.1, 0];

  let width, height, front, mass, wheelRadius;

  width = 0.16;
  height = 0.12;
  front = 0.17;
  wheelRadius = 0.05;
  mass = 150;

  const chassisBodyArgs = [width, height, front * 2];

  const [chassisBody, chassisApi] = useCompoundBody(
    () => ({
      position,
      mass: mass,
      rotation: [0, -Math.PI/2, 0],
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

  useVehicleControls(vehicleApi, chassisApi, props.player.id)

  const body = useRef();

  const [smoothedCameraPosition] = useState(
    () => new THREE.Vector3(10, 10, 10)
  );
  const [smoothedCameraTarget] = useState(() => new THREE.Vector3());

  /* 
  *   About phase
  */
  const start = useGame((state) => state.start)
  const end = useGame((state)=> state.end)
  const restart = useGame((state)=> state.restart)
  const phase = useGame((state)=> state.phase)
  const around = useGame((state)=> state.around)
  const inspot= useGame((state)=> state.inspot)
  const outspot = useGame((state)=> state.outspot)
  let isIn = useGame((state)=> state.isIn)
  const lapse = useGame((state)=> state.lapse)

  // const velocity = chassisBody.velocity

  const reset = () =>
  {
    // 직접 position 속성을 이용하여 초기 위치로 설정
    chassisApi.position.set(0, 1, 0);
    chassisApi.velocity.set(0, 0, 0);  // 필요에 따라 속도도 초기화
    chassisApi.angularVelocity.set(0, 0, 0);  // 필요에 따라 각속도도 초기화
  }
  useEffect(()=>
  {
    const unsubscribeReset = useGame.subscribe(
      (state) => state.phase,
      (value) =>
      {
        if(value === 'ready')
          reset()
      }
    )
    const unsubscribeAny = subscribeKeys(
      ()=>
      {
        start()
      }
    )
    return()=>
    {
      unsubscribeReset()
      unsubscribeAny()
    }
  })
// Back-View 카메라
useFrame((state, delta) => {
  const bodyPosition = chassisBody.current.getWorldPosition(new THREE.Vector3());
  if (socket.id === props.player.id) {
      const worldQuaternion = new THREE.Quaternion();  // Quaternion 인스턴스 생성
    const bodyRotation = chassisBody.current.getWorldQuaternion(worldQuaternion);

    // 카메라의 상대 위치 (자동차 뒷부분에서의 상대 위치)
    const relativeCameraPosition = new THREE.Vector3(0, 0.55, 0.65);

    // 카메라의 전역 위치 계산
    const cameraPosition = new THREE.Vector3();
    cameraPosition.copy(relativeCameraPosition);
    cameraPosition.applyQuaternion(bodyRotation); // 카메라 위치를 자동차의 회전에 따라 변환
    cameraPosition.add(bodyPosition); // 카메라 위치를 자동차 위치에 더함

    //smooth camera 전환속도
    smoothedCameraPosition.lerp(cameraPosition, 3 * delta);

    state.camera.position.copy(smoothedCameraPosition);

    //카메라가 항상 자동차의 뒷부분을 바라보도록 설정
    const cameraTarget = new THREE.Vector3();
    cameraTarget.copy(bodyPosition);
    cameraTarget.y += 0.25;
    state.camera.lookAt(cameraTarget);
  }
  /* Phases*/

  /* 종료 조건 : 2바퀴 완주 및 모든 체크포인트 true 및 body가 시작지점*/
  if(lapse===2
    &&bodyPosition.x < startSpot.x + 1 && startSpot.x > startSpot.x - 1 
    && bodyPosition.z < startSpot.z+ 10 && bodyPosition.z > startSpot.z-10){
    end()
    console.log("end")
  }
  /* 한 바퀴 조건 : 모든 체크포인트 true 및 body가 시작지점일 때 체크포인트 false로 초기화 */
  else if(isIn.every((elem)=>elem===true)
          &&bodyPosition.x < startSpot.x + 1&& bodyPosition.x > startSpot.x - 1 
          && bodyPosition.z < startSpot.z+ 10 && bodyPosition.z > startSpot.z-10){
    around()
    
    console.log("around")
  }
  else{
    /* 체크포인트 지날 때 */
    const newisIn = [false, false, false, false]
    for(let i=0;i<4;i++){
      newisIn[i] = bodyPosition.x < spot[i].x + 10 && bodyPosition.x > spot[i].x - 10 && bodyPosition.z < spot[i].z+ 10 && bodyPosition.z > spot[i].z-10
      if(newisIn[0]){
        inspot(0)
        break
      }
      
      if(isIn[i-1]===true&&newisIn[i]){
        inspot(i)
      }
    }
  } 
  /* outspot 구현 예정
      체크 포인트를 잘못된 방향으로 벗어났을때 true-> false */
})

  return (
    <group ref={body}>
      <group ref={vehicle}>
        <group ref={chassisBody}>
          <DummyCarBody width={chassisBodyValue.width} height={chassisBodyValue.height} front={chassisBodyValue.front * 2} color={props.player.color} />
        </group>
        <DummyWheel wheelRef={wheels[0]} radius={wheelRadius} />
        <DummyWheel wheelRef={wheels[1]} radius={wheelRadius} />
        <DummyWheel wheelRef={wheels[2]} radius={wheelRadius} />
        <DummyWheel wheelRef={wheels[3]} radius={wheelRadius} />
      </group>
    </group>
  )
}

export default Car