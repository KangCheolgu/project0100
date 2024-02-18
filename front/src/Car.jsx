import { useCompoundBody, useRaycastVehicle } from "@react-three/cannon";
import { useEffect, useMemo, useRef, useState, Suspense } from "react";
import { Html } from '@react-three/drei'
import { useWheels } from "./utils/useWheels";
import { useVehicleControls } from "./utils/useVehicleControls";
import { Vector3 } from "three";
// import { socket } from "./Scene.jsx";
import { socket } from "./lobby/lobby.jsx";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import { CarModel } from "./components/CarModel.jsx";
import { Wheel } from "./components/Wheel.jsx";
import { CheckPoint } from "./utils/CheckPoint.jsx";
import collisionSound from './sound/car-hit/car-hit-2.wav';
import klaxonSoundFile from './sound/car-horn/car-horn-1.wav';
import engineSoundFile from './sound/engines/1/low_on.wav';
import { Speed } from "./Speeds.jsx";
import FollowCamera from "./utils/FollowCamera.jsx";
import { CollisionHandler } from "./CollisionHandler.jsx";
import { calculateSpeed } from "./utils/speedCalculator.jsx";
import useGame from "./stores/useGame.jsx";
import Speedometer from "./utils/Speedometer.jsx";
import Needle from "./utils/Needle_v1.jsx";
import { Minimap } from "./Minimap.jsx";
import axios from "axios";

let checkPointIndex = 0
let lapseCheck = [false, false]

const Car = ({ cameraGroup, ...props }) => {
    // 이전 등수 현재등수
  const [previousRank, setPreviousRank] = useState(1);
  const [currentRank, setCurrentRank] = useState(1);

  // Quaternion, Position 인스턴스 생성
  const worldPosition = useMemo(() => new Vector3(), []);
  const worldQuaternion = useMemo(() => new THREE.Quaternion(), []);

  let position = props.position;
  let rotation = props.rotation;

  let width, height, front, mass, wheelRadius;

  width = 0.25;
  height = 0.06;
  front = 0.25;
  wheelRadius = 0.05;
  mass = 150;

  const chassisBodyArgs = [width, height, front * 2];
  const startEuler = new THREE.Euler(0, -Math.PI / 2, 0, 'XYZ');
  const startQuaternion = new THREE.Quaternion();
  startQuaternion.setFromEuler(startEuler);
  const [chassisBody, chassisApi] = useCompoundBody(
    () => ({
      position,
      mass: mass,
      allowSleep: false,
      rotation,
      onCollide: (e) => handleCollision(e),
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

  // 바퀴
  const [wheels, wheelInfos] = useWheels(width, height, front, wheelRadius);

  // 자동차 조작
  const [vehicle, vehicleApi] = useRaycastVehicle(
    () => ({
      chassisBody,
      wheelInfos,
      wheels,
    }),
    useRef(null),
  );

  // brake lights
  // const { controls, brakeLightsOn } = useVehicleControls(vehicleApi, chassisApi, props.id, props.state);

  // 클락션 소리 /////////////////////////////////////////////////////////
  const klaxonDuration = 500; // 1초
  ///////////////////////////////////////////////////////////////////////

  // 자동차 충돌
  const [isCollision, setIsCollision] = useState(false)
  const handleCollision = () => {
    const isCurrentUser = socket.id === props.id;
    CollisionHandler(setIsCollision, collisionSound, isCurrentUser);
  };

  // 엔진 소리 관리
  const engineSoundRef = useRef(new Audio(engineSoundFile));
  useEffect(() => {
    engineSoundRef.current.loop = true;
    engineSoundRef.current.volume = 0.4;
    engineSoundRef.current.play().catch(error => console.error("엔진 소리 재생 실패:", error));
  }, []);

  useVehicleControls(vehicleApi, chassisApi, props.id, props.state, klaxonDuration, klaxonSoundFile);

  // 속도계 
  const [currentSpeed, setCurrentSpeed] = useState(0);
  const lastSpeed = useRef(0); // Reference to store the last updated speed
  const lastPosition = useRef(new Vector3());
  const lastUpdateTime = useRef(Date.now());

  useEffect(() => {
    if (socket.id === props.id) {
      const updateSpeed = () => {
        const now = Date.now();
        const deltaTime = (now - lastUpdateTime.current) / 1000; // Convert to seconds
        const currentPosition = chassisBody.current.getWorldPosition(new Vector3());
        // Use the utility function to calculate speed
        const speed = calculateSpeed(currentPosition, lastPosition.current, deltaTime);
        // Check if the speed has changed significantly (by 10 km/h or more)
        // if (Math.abs(speed - lastSpeed.current) >= 10) {
          setCurrentSpeed(speed); // Update the state only if the change is significant
          lastSpeed.current = speed; // Update the last speed reference
        // }

        // Always update the last position and time, regardless of whether the speed was updated
        lastPosition.current.copy(currentPosition);
        lastUpdateTime.current = now;
      };
    

      const intervalId = setInterval(updateSpeed, 500); // Continue to check speed every 200ms
      return () => clearInterval(intervalId);
    }
  }, []);

  // 랩타임 관련
  const end = useGame((state)=> state.end)
  const around = useGame((state) => state.around)

  useFrame((state, delta) => {
    if (socket.id === props.id) {
      const bodyPosition = chassisBody.current.getWorldPosition(worldPosition);
      const bodyRotation = chassisBody.current.getWorldQuaternion(worldQuaternion);
        // 부스터 이펙트 위치 및 방향 지정.
      cameraGroup.current.quaternion.copy(bodyRotation);
      cameraGroup.current.position.lerp(new THREE.Vector3(bodyPosition.x, bodyPosition.y - 1.7, bodyPosition.z), delta*24);

      // if (checkPointIndex === (CheckPoint.length) + 1 && lapseCheck[0] === false) {
      //   around()
      //   lapseCheck[0] = true
      // }
      // if (checkPointIndex === (CheckPoint.length) * 2 + 1) {
      //   end()
      // }
        
      if (checkPointIndex ===  CheckPoint.length + 1 && lapseCheck[0] === false) {
        lapseCheck[0] = true
        around()
      }
      if (checkPointIndex ===  CheckPoint.length * 2 + 1 && lapseCheck[1] === false) {
        lapseCheck[1] = true
        end()
        useGame.setState({ winner: socket.id });
      }

      // 체크 포인트 인덱스 갱신 
      // 지정된 위치를 지나면 checkpointIndex를 올림
      if(checkPointIndex % (CheckPoint.length) === 13 ){
        if (CheckPoint[checkPointIndex % (CheckPoint.length)].z - 25 < bodyPosition.z && bodyPosition.z < CheckPoint[checkPointIndex % (CheckPoint.length)].z + 25
            && CheckPoint[checkPointIndex % (CheckPoint.length)].x - 0.5 < bodyPosition.x && bodyPosition.x < CheckPoint[checkPointIndex % (CheckPoint.length)].x + 0.5) {
              console.log(checkPointIndex % (CheckPoint.length),"번 체크포인트 지남")
              checkPointIndex++
        }
      } else {
        if (CheckPoint[checkPointIndex % (CheckPoint.length)].axis === 'x') {
          if (CheckPoint[checkPointIndex % (CheckPoint.length)].x - 10 < bodyPosition.x && bodyPosition.x < CheckPoint[checkPointIndex % (CheckPoint.length)].x + 10
            && CheckPoint[checkPointIndex % (CheckPoint.length)].z - 0.5 < bodyPosition.z && bodyPosition.z < CheckPoint[checkPointIndex % (CheckPoint.length)].z + 0.5) {
            console.log(checkPointIndex % (CheckPoint.length),"번 체크포인트 지남")
            checkPointIndex++
          }

        } else if (CheckPoint[checkPointIndex % (CheckPoint.length)].axis === 'z') {
          if (CheckPoint[checkPointIndex % (CheckPoint.length)].z - 10 < bodyPosition.z && bodyPosition.z < CheckPoint[checkPointIndex % (CheckPoint.length)].z + 10
            && CheckPoint[checkPointIndex % (CheckPoint.length)].x - 0.5 < bodyPosition.x && bodyPosition.x < CheckPoint[checkPointIndex % (CheckPoint.length)].x + 0.5) {
            console.log(checkPointIndex % (CheckPoint.length),"번 체크포인트 지남")
            checkPointIndex++
          }
        }
      }
    }
  });

  const [targetX, setMinimapTargetX] = useState(1)
  const [targetZ, setMinimapTargetZ] = useState(12)

  const [myX, setMinimapMyX] = useState(-1)
  const [myZ, setMinimapMyZ] = useState(-12)
  
  useEffect(() => {
    
    let lastPosition = new THREE.Vector3(props.position[0], props.position[1], props.position[2]);
    let lastQuaternion = new THREE.Quaternion(chassisApi.quaternion._x, chassisApi.quaternion._y, chassisApi.quaternion._z, chassisApi.quaternion._w);
    
    function updateAnotherPlayer(updateData) {
      const targetPosition = new THREE.Vector3(updateData.position.x, updateData.position.y, updateData.position.z);
      const bodyPosition = chassisBody.current.getWorldPosition(worldPosition);

      
      const targetX1 = parseFloat(targetPosition.x.toFixed(2))
      const targetZ1 = parseFloat(targetPosition.z.toFixed(2))
      const myX1 = parseFloat(bodyPosition.x.toFixed(2))
      const myZ1 = parseFloat(bodyPosition.z.toFixed(2))
      

      if (updateData.id === props.id && socket.id !== props.id) {
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
        const lerpFactor = 0.4; // Interpolation strength
        lastPosition.lerp(extrapolatedPosition, lerpFactor);
        chassisApi.position.copy(lastPosition);

        // quaternion interpolation
        lastQuaternion.slerp(targetQuaternion, lerpFactor);
        chassisApi.quaternion.copy(lastQuaternion);
      }

      if (socket.id === props.id && props.index === 0) {
        // 순서대로 찍은 체크포인트의 수가 다르다면 체크포인트가 계산할 필요 없이 높은 사람이 등수가 높다 
        if (updateData.checkPointIndex !== checkPointIndex) {
          if (updateData.checkPointIndex > checkPointIndex) {
            const newRank = 2
            // 랭킹을 세팅한다. 
            setPreviousRank(currentRank);
            setCurrentRank(newRank);
          } else {
            const newRank = 1
            // 랭킹을 세팅한다. 
            setPreviousRank(currentRank);
            setCurrentRank(newRank);
          }
          // 체크포인트 인덱스가 같은경우 체크포인트의 axis에 따라 x축을 비교하던 z축을 비교하던 더 가까운 쪽이 1등
        } else {
          // 상대방 실시간 위치
          const targetX = parseFloat(targetPosition.x.toFixed(3))
          const targetZ = parseFloat(targetPosition.z.toFixed(3))
          // 나의 실시간 위치
          const myX = parseFloat(bodyPosition.x.toFixed(3))
          const myZ = parseFloat(bodyPosition.z.toFixed(3))
          // 체크포인트 축이 z라면 x 비교 
          if (CheckPoint[checkPointIndex].axis === 'z') {
            if (targetX > myX) {
              const newRank = 2
              setPreviousRank(currentRank);
              setCurrentRank(newRank);
            } else {
              const newRank = 1
              setPreviousRank(currentRank);
              setCurrentRank(newRank);
            }
            // 체크 포인트 축이 x라면 z비교
          } else {
            if (targetZ > myZ) {
              const newRank = 2
              setPreviousRank(currentRank);
              setCurrentRank(newRank);
            } else {
              const newRank = 1
              setPreviousRank(currentRank);
              setCurrentRank(newRank);
            }
          }
        }
      }
    }

    if (props.state === true)
      socket.on("updateAnotherPlayer", updateAnotherPlayer);

    return () => {
      socket.off("updateAnotherPlayer", updateAnotherPlayer);
      // unsubscribeReset()
    };
  });

  // 등수가 변했을 때 소켓으로 신호를 보냄
  useEffect(() => {
    if (previousRank !== currentRank) {
      // 일등이 되었다 socket
      if (currentRank === 1) {
        socket.emit("overtaking")
      } else if (currentRank === 2) {
        socket.emit("overtaken")
      }

      console.log('등수가 변했습니다. 새로운 등수:', currentRank);
    }
  }, [previousRank, currentRank]);

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
      checkPointIndex: checkPointIndex
    });

    useInterval(() => {
      if (socket.id === props.id) {
        const delta = 0.30; // 100ms expressed in seconds
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
          checkPointIndex: checkPointIndex
        };
        const currentState = {
          id: socket.id,
          position: bodyPosition,
          quaternion: bodyQuaternion,
          velocity: newVelocity,
          acceleration: newAcceleration,
          checkPointIndex: checkPointIndex,
          index: props.index
        };
        socket.emit("currentState", currentState);
      }
    }, 30);
  };

  return (<>
    <group ref={cameraGroup}>
      <Speed id={socket.id}/>
    </group>
    <group ref={vehicle} castShadow receiveShadow>
      <Suspense>
        <group ref={chassisBody} castShadow>
          <CarModel castShadow />
        </group>
      </Suspense>
      <Wheel wheelRef={wheels[0]} radius={wheelRadius} />
      <Wheel wheelRef={wheels[1]} radius={wheelRadius} />
      <Wheel wheelRef={wheels[2]} radius={wheelRadius} />
      <Wheel wheelRef={wheels[3]} radius={wheelRadius} />
      <Timer />
       <Html>
        <div style={{position: 'fixed', width: window.screen.width/2 , height: window.screen.height/2 }}>
          <Needle socket={socket} props={props} currentSpeed={currentSpeed * 2} />
          <Speedometer socket={socket} props={props} currentSpeed={currentSpeed * 2} />
        </div>
          {isCollision && <img className="crash" src="/assets/images/crash.png" alt="crash" />}
      </Html>
      <FollowCamera chassisBody={chassisBody} socket={socket} vehicleId={props.id} />
      <Minimap chassisBody={chassisBody} socket={socket} vehicleId={props.id}/>
    </group>
  </>

  )
}
const Car_App = (props) => {
  const cameraGroup = useRef();
  return <Car {...props} cameraGroup={cameraGroup}/>;
};
export default Car_App;