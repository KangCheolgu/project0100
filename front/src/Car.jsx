import { useCompoundBody, useRaycastVehicle } from "@react-three/cannon";
import { useEffect, useMemo, useRef, useState, Suspense } from "react";
import { Html } from '@react-three/drei'
import { useControls } from "leva";
import { useWheels } from "./utils/useWheels";
import { useVehicleControls } from "./utils/useVehicleControls";
import { Vector3 } from "three";
import { socket } from "./Scene.jsx";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import { CarModel } from "./components/CarModel.jsx";
import { Wheel } from "./components/Wheel.jsx";
import { CheckPoint } from "./utils/CheckPoint.jsx";
import collisionSound from './sound/car-hit/car-hit-2.wav';
import klaxonSoundFile from './sound/car-horn/car-horn-1.wav';
import engineSoundFile from './sound/engines/1/low_on.wav';
import { Speed } from "./Speeds.jsx";
let checkPointIndex = 0

const Car = ({cameraGroup, ...props}) => {
  // 체크포인트 위치
  // const spot = [{x: -32, y: 0, z:-13},
  //   {x: -1, y: 0, z:-17},
  //   {x: 59, y: 0, z:12},
  //   {x: 4, y: 0, z:41}]
  //  // 시작 지점
  //  const startSpot={x:-28, y:0, z:39}  
  // const reset = () =>
  // {
  //   // 직접 position 속성을 이용하여 초기 위치로 설정
  //   chassisApi.position.set(0, 0.3, -12);
  //   chassisApi.velocity.set(0, 0, 0);  // 필요에 따라 속도도 초기화
  //   chassisApi.angularVelocity.set(0, 0, 0);  // 필요에 따라 각속도도 초기화
  // }

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
  front = 0.2;
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

  // 자동차 충돌 관리///////////////////////////////////////////
  const [isCollision, setIsCollision] = useState(false)
  // console.log(isCollision)
  const handleCollision = () => {
    const sound = new Audio(collisionSound);
    sound.play().catch(error => console.error("오디오 재생 실패:", error));
    //Boom 관련 시작
    if (socket.id === props.id) {
      setIsCollision(true)
      setImagePosition(getRandomPosition())
    }
    // console.log(imagePosition)

  };
  if (isCollision === true) {
    setTimeout(() => {
      setIsCollision(false)
    }, 350)
  }



  const getRandomPosition = () => {

    const cellWidth = window.innerWidth / 3
    const cellHeight = window.innerHeight / 3

    const startX = cellWidth
    const startY = cellHeight * 2


    const randomX = startX + Math.random() * cellWidth
    const randomY = startY + Math.random() * cellHeight
    return { x: randomX, y: randomY }
  }

  const [imagePosition, setImagePosition] = useState(getRandomPosition())

  // useEffect(()=>{
  //   setImagePosition(getRandomPosition())
  // }, [imagePosition])

  ////-------crash 말풍선 관련 끝------/////

  ////////////////////////////////////////////////////////////////

  // 클락션 소리 /////////////////////////////////////////////////////////
  const klaxonDuration = 500; // 1초
  ///////////////////////////////////////////////////////////////////////

  // 엔진 소리 관리 //////////////////////////////////////////////////////////////
  const engineSoundRef = useRef(new Audio(engineSoundFile)); // 엔진 소리 객체를 참조로 저장
  useEffect(() => {
    // 엔진 소리를 항상 재생하도록 수정
    engineSoundRef.current.loop = true;
    engineSoundRef.current.volume = 0.4; // 원하는 볼륨으로 설정
    engineSoundRef.current.play().catch(error => console.error("엔진 소리 재생 실패:", error));
  }, []);

  const [wheels, wheelInfos] = useWheels(width, height, front, wheelRadius);
  
  const [vehicle, vehicleApi] = useRaycastVehicle(
    () => ({
      chassisBody,
      wheelInfos,
      wheels,
    }),
    useRef(null),
  );

  useVehicleControls(vehicleApi, chassisApi, props.id, props.state, klaxonDuration, klaxonSoundFile);

  const [smoothedCameraPosition] = useState(
    () => new THREE.Vector3(10, 10, 10)
  );
  const [smoothedCameraRotation] = useState(
    () => new THREE.Quaternion()
  );
  const [carVelocity, setCarVelocity] = useState(new THREE.Vector3());
  /* 
  *   About phase
  */
  // const end = useGame((state)=> state.end)
  // const around = useGame((state)=> state.around)
  // const inspot= useGame((state)=> state.inspot)
  // let isIn = useGame((state)=> state.isIn)
  // const lapse = useGame((state)=> state.lapse)
    
  // Back-View 카메라
  useFrame((state, delta) => {
    const bodyPosition = chassisBody.current.getWorldPosition(worldPosition);
    if (socket.id === props.id) {

      const cpX = parseFloat(bodyPosition.x.toFixed(4))
      const cpY = parseFloat(bodyPosition.y.toFixed(4))
      const cpZ = parseFloat(bodyPosition.z.toFixed(4))

      const bodyRotation = chassisBody.current.getWorldQuaternion(worldQuaternion);

      // 카메라의 상대 위치 (자동차 뒷부분에서의 상대 위치)
      const relativeCameraPosition = new THREE.Vector3(0, 0.5, 0.9);

      // 카메라의 전역 위치 계산
      const cameraPosition = new THREE.Vector3();
      cameraPosition.copy(relativeCameraPosition);
      cameraPosition.applyQuaternion(bodyRotation); // 카메라 위치를 자동차의 회전에 따라 변환
      cameraPosition.add({ x: cpX, y: cpY, z: cpZ }); // 카메라 위치를 자동차 위치에 더함
      
      // 부스터 이펙트 위치 및 방향 지정.
      cameraGroup.current.quaternion.copy(bodyRotation);
      cameraGroup.current.position.lerp(new THREE.Vector3(cpX, cpY, cpZ), delta*24);
      
      // smooth camera 전환속도
      smoothedCameraPosition.lerp(cameraPosition, 0.2);

      state.camera.position.copy(smoothedCameraPosition);
      // state.camera.position.copy(cameraPosition);

      // 카메라가 항상 자동차의 뒷부분을 바라보도록 설정
      const cameraTarget = new THREE.Vector3();
      cameraTarget.copy({ x: cpX, y: cpY, z: cpZ });
      cameraTarget.y += 0.35;
      state.camera.lookAt(cameraTarget);

      /* Phases*/

      /* 종료 조건 : 2바퀴 완주 및 모든 체크포인트 true 및 body가 시작지점*/
      /* 한 바퀴 조건 : 모든 체크포인트 true 및 body가 시작지점일 때 체크포인트 false로 초기화 */
      // if(isIn.every((elem)=>elem===true)
      //   && bodyPosition.x < startSpot.x + 1&& bodyPosition.x > startSpot.x - 1 
      //   && bodyPosition.z < startSpot.z+ 1 && bodyPosition.z > startSpot.z-1){
      //   around()
      //   if(lapse==2){
      //     end()
      //   }
      // } else {
      // /* 체크포인트 지날 때 */
      //   const newisIn = [false, false, false, false]
      //   for(let i=0;i<4;i++){
      //     newisIn[i] = bodyPosition.x < spot[i].x + 3 && bodyPosition.x > spot[i].x - 3 && bodyPosition.z < spot[i].z+ 3 && bodyPosition.z > spot[i].z-3
      //     if(newisIn[0]){
      //       inspot(0)
      //       break
      //     }

      //     if(isIn[i-1]===true&&newisIn[i]){
      //       inspot(i)
      //     }
      //   }
      // } 

      // 체크 포인트 인덱스 갱신 
      // 지정된 위치를 지나면 checkpointIndex를 올림
      if (CheckPoint[checkPointIndex % (CheckPoint.length)].axis === 'x') {
        if (CheckPoint[checkPointIndex % (CheckPoint.length)].x - 10 < bodyPosition.x && bodyPosition.x < CheckPoint[checkPointIndex % (CheckPoint.length)].x + 10
          && CheckPoint[checkPointIndex % (CheckPoint.length)].z - 0.5 < bodyPosition.z && bodyPosition.z < CheckPoint[checkPointIndex % (CheckPoint.length)].z + 0.5) {
          // checkPointIndex++
        }

      } else if (CheckPoint[checkPointIndex % (CheckPoint.length)].axis === 'z') {
        if (CheckPoint[checkPointIndex % (CheckPoint.length)].z - 10 < bodyPosition.z && bodyPosition.z < CheckPoint[checkPointIndex % (CheckPoint.length)].z + 10
          && CheckPoint[checkPointIndex % (CheckPoint.length)].x - 0.5 < bodyPosition.x && bodyPosition.x < CheckPoint[checkPointIndex % (CheckPoint.length)].x + 0.5) {
          // checkPointIndex++
        }
      }
    }

  });

  useEffect(() => {
    // const unsubscribeReset = useGame.subscribe(
    //   (state) => state.phase,
    //   (value) =>
    //   {
    //     if(value === 'ready')
    //       reset()
    //   }
    // )
    //console.log(props.position);
    let lastPosition = new THREE.Vector3(props.position[0], props.position[1], props.position[2]);
    let lastQuaternion = new THREE.Quaternion(chassisApi.quaternion._x, chassisApi.quaternion._y, chassisApi.quaternion._z, chassisApi.quaternion._w);

    function updateAnotherPlayer(updateData) {
      const targetPosition = new THREE.Vector3(updateData.position.x, updateData.position.y, updateData.position.z);
      const bodyPosition = chassisBody.current.getWorldPosition(worldPosition);

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
          const targetY = parseFloat(targetPosition.y.toFixed(3))
          const targetZ = parseFloat(targetPosition.z.toFixed(3))
          // 나의 실시간 위치
          const myX = parseFloat(bodyPosition.x.toFixed(3))
          const myY = parseFloat(bodyPosition.y.toFixed(3))
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
        const delta = 0.15; // 100ms expressed in seconds
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
          checkPointIndex: checkPointIndex
        };
        socket.emit("currentState", currentState);
      }
    }, 15);
  };
  return (<>
    <group ref={cameraGroup}>
      <Speed/>
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
        {isCollision && <img className="crash" src="/assets/images/crash.png" alt="crash" />}
        {/* style={{position: "absolute", top: imagePosition.y, left: imagePosition.x}}/>} */}
      </Html>
    </group>
    </>

  )
}
const Car_App = (props) => {
  const cameraGroup = useRef();
  return <Car {...props} cameraGroup={cameraGroup} />;
};
export default Car_App;