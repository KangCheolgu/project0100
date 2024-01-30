import { useCompoundBody, useRaycastVehicle } from "@react-three/cannon";
import { useEffect, useMemo, useRef, useState } from "react";
import DummyCarBody from "./dummy/DummyCarBody";
import DummyWheel from "./dummy/DummyWheel";
import { useControls } from "leva";
import { useWheels } from "./utils/useWheels";
import { useVehicleControls } from "./utils/useVehicleControls";
import { Vector3 } from "three";
import { socket } from "./Scene.jsx";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";

const Car = (props) => {
  // Quaternion, Position 인스턴스 생성
  const worldPosition = useMemo(() => new Vector3(), []);
  const worldQuaternion = useMemo(() => new THREE.Quaternion(), []);

  const chassisBodyValue = useControls('chassisBody', {
    width: { value: 0.16, min: 0, max: 1, },
    height: { value: 0.12, min: 0, max: 1, },
    front: { value: 0.17, min: 0, max: 1, },
  });

  const [quaternion, setQuaternion] = useState();

  // 위치 값
  useEffect(() => {
    setPosition(props.position);
    setQuaternion(props.rotation);
  }, []);

  let width, height, front, mass, wheelRadius;

  width = 0.16;
  height = 0.12;
  front = 0.17;
  wheelRadius = 0.05;
  mass = 150;

  // 랜덤 위치 생성 함수
  const randomPosition = () => {
    return [
      Math.random() * 10 - 5, // X 축
      0.1,                    // Y 축 (지면 위에 위치)
      Math.random() * 10 - 5  // Z 축
    ];
  };

  // 랜덤 초기 위치 설정
  const [initialPosition] = useState(randomPosition());

  const chassisBodyArgs = [width, height, front * 2];
  const [position, setPosition] = useState();
  const [chassisBody, chassisApi] = useCompoundBody(() => ({
    position: initialPosition,
    mass: mass,
    rotation: [0, 0, 0, 0],
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
  }), useRef(null));

  const [wheels, wheelInfos] = useWheels(width, height, front, wheelRadius);

  const [vehicle, vehicleApi] = useRaycastVehicle(
    () => ({
      chassisBody,
      wheelInfos,
      wheels,
    }),
    useRef(null),
  );

  useVehicleControls(vehicleApi, chassisApi, props.id, props.state);

  const [smoothedCameraPosition] = useState(
    () => new THREE.Vector3(10, 10, 10)
  );
  const [smoothedCameraRotation] = useState(
    () => new THREE.Quaternion()
  );
  const [carVelocity, setCarVelocity] = useState(new THREE.Vector3());

  // // Back-View 카메라
  // useFrame((state, delta) => {
  //   if (socket.id === props.id) {

  //     const bodyPosition = chassisBody.current.getWorldPosition(worldPosition);
  //     const bodyRotation = chassisBody.current.getWorldQuaternion(worldQuaternion);

  //     // 카메라의 상대 위치 (자동차 뒷부분에서의 상대 위치)
  //     const relativeCameraPosition = new THREE.Vector3(0, 0.7, 0.65);

  //     // 카메라의 전역 위치 계산
  //     const cameraPosition = new THREE.Vector3();
  //     cameraPosition.copy(relativeCameraPosition);
  //     cameraPosition.applyQuaternion(bodyRotation); // 카메라 위치를 자동차의 회전에 따라 변환
  //     cameraPosition.add(bodyPosition); // 카메라 위치를 자동차 위치에 더함

  //     // smooth camera 전환속도
  //     smoothedCameraPosition.lerp(cameraPosition, 0.5);

  //     state.camera.position.copy(smoothedCameraPosition);
  //     // state.camera.position.copy(cameraPositin);

  //     // 카메라가 항상 자동차의 뒷부분을 바라보도록 설정
  //     const cameraTarget = new THREE.Vector3();
  //     cameraTarget.copy(bodyPosition);
  //     cameraTarget.y += 0.25;
  //     state.camera.lookAt(cameraTarget);
  //   }
  // })

  // back-vie 카메라 수정중
  useFrame((state, delta) => {
    if (socket.id === props.id) {
      const bodyPosition = chassisBody.current.getWorldPosition(worldPosition);
      const bodyRotation = chassisBody.current.getWorldQuaternion(worldQuaternion);

      const relativeCameraPosition = new THREE.Vector3(0, 0.7, 0.65);
      const cameraPosition = new THREE.Vector3();
      cameraPosition.copy(relativeCameraPosition);
      cameraPosition.applyQuaternion(bodyRotation);
      cameraPosition.add(bodyPosition);

      const dampingFactor = Math.min(Math.max(carVelocity.length() * 0.1, 0.5), 0.8);

      const delta = 0.5;
      smoothedCameraPosition.lerp(cameraPosition, dampingFactor * delta);
      const desiredRotation = new THREE.Quaternion(); // 원하는 회전 계산 필요
      smoothedCameraRotation.slerp(desiredRotation, dampingFactor * delta);

      state.camera.position.copy(smoothedCameraPosition);
      state.camera.quaternion.copy(smoothedCameraRotation);

      const cameraTarget = new THREE.Vector3();
      cameraTarget.copy(bodyPosition);
      cameraTarget.y += 0.25;
      state.camera.lookAt(cameraTarget);
    }
  });

  useEffect(() => {
    let lastPosition = new THREE.Vector3(chassisApi.position.x, chassisApi.position.y, chassisApi.position.z);
    let lastQuaternion = new THREE.Quaternion(chassisApi.quaternion._x, chassisApi.quaternion._y, chassisApi.quaternion._z, chassisApi.quaternion._w);

    function updateAnotherPlayer(updateData) {
      if (updateData.id === props.id) {
        const targetPosition = new THREE.Vector3(updateData.position.x, updateData.position.y, updateData.position.z);
        const targetQuaternion = new THREE.Quaternion(updateData.quaternion[0], updateData.quaternion[1], updateData.quaternion[2], updateData.quaternion[3]);
        const targetVelocity = new THREE.Vector3(updateData.velocity.x, updateData.velocity.y, updateData.velocity.z);
        const targetAcceleration = new THREE.Vector3(updateData.acceleration.x, updateData.acceleration.y, updateData.acceleration.z);

        const networkLatency = 0.003; // 3ms = 0.003 seconds, 핑 3ms 가정
        const delta = 0;
        const adjustedDelta = delta + networkLatency; // 전송 주기 + 서버 핑

        const extrapolatedPosition = targetPosition.clone();
        extrapolatedPosition.add(targetVelocity.clone().multiplyScalar(adjustedDelta));
        extrapolatedPosition.add(targetAcceleration.clone().multiplyScalar(0.5 * Math.pow(adjustedDelta, 2)));

        // extrapolation을 한 포지션과 이전 위치를 interpolation
        const lerpFactor = 0.6; // Interpolation strength
        lastPosition.lerp(extrapolatedPosition, lerpFactor);
        chassisApi.position.copy(lastPosition);

        // quaternion interpolation
        lastQuaternion.slerp(targetQuaternion, lerpFactor);
        chassisApi.quaternion.copy(lastQuaternion);
      }
    }

    socket.on("updateAnotherPlayer", updateAnotherPlayer);

    return () => {
      socket.off("updateAnotherPlayer", updateAnotherPlayer);
    };
  });

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
    }, [delay])
  }

  const Timer = () => {
    const lastState = useRef({
      position: new THREE.Vector3(),
      velocity: new THREE.Vector3(),
      acceleration: new THREE.Vector3(),
    });

    useInterval(() => {
      if (socket.id === props.id) {
        const delta = 0.05; // 100ms expressed in seconds
        const bodyPosition = chassisBody.current.getWorldPosition(worldPosition);
        const bodyQuaternion = chassisBody.current.getWorldQuaternion(worldQuaternion);

        // 속도 계산
        const newVelocity = new THREE.Vector3();
        newVelocity.subVectors(bodyPosition, lastState.current.position).divideScalar(delta);

        // 가속도 계산
        const newAcceleration = new THREE.Vector3();
        newAcceleration.subVectors(newVelocity, lastState.current.velocity).divideScalar(delta);

        // 마지막 상태 업데이트
        lastState.current = {
          position: bodyPosition.clone(),
          velocity: newVelocity.clone(),
          acceleration: newAcceleration.clone(),
        };

        setCarVelocity(newVelocity.clone()); // 속도 상태 업데이트

        const currentState = {
          id: socket.id,
          position: bodyPosition,
          quaternion: bodyQuaternion,
          velocity: newVelocity,
          acceleration: newAcceleration,
        };
        socket.emit("currentState", currentState);
      }
    }, 30);
  };

  return (
    <group ref={vehicle}>
      <group ref={chassisBody}>
        <DummyCarBody width={chassisBodyValue.width} height={chassisBodyValue.height} front={chassisBodyValue.front * 2} color={props.color} />
      </group>
      <DummyWheel wheelRef={wheels[0]} radius={wheelRadius} />
      <DummyWheel wheelRef={wheels[1]} radius={wheelRadius} />
      <DummyWheel wheelRef={wheels[2]} radius={wheelRadius} />
      <DummyWheel wheelRef={wheels[3]} radius={wheelRadius} />
      <Timer />
    </group>
  )
}

export default Car