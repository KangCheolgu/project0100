import { useEffect, useRef, useState } from "react";
import { socket } from "../lobby/lobby.jsx";
import klaxonSoundFile from '../sound/car-horn/car-horn-1.wav';
import * as THREE from 'three';

export const useVehicleControls = (vehicleApi, chassisApi, id, state) => {
  const engineForce = 70;
  const [brake, setBrake] = useState(false);
  const klaxonDuration = 500;

  // 클락션 상태와 타이머 관련 상태 추가
  const [klaxon, setKlaxon] = useState(false);
  const [klaxonTimer, setKlaxonTimer] = useState(null);

  // brake
  const [brakeLightsOn, setBrakeLightsOn] = useState(false);

  const [currentEngineForce, setCurrentEngineForce] = useState(engineForce);

  // 키 다운 이벤트
  const handleKeyDown = (e) => {
    console.log(e);
    // for brake lights
    if (e.key === ' ') {
      setBrake(true);
      setBrakeLightsOn(true);  // Turn on brake lights
    }

    // 'R' 키 입력 시 자동차 위치 y 좌표 증가 및 쿼터니언 초기화
    if (e.key === 'r') {
      chassisApi.position.subscribe((position) => {
        const newPosition = [position[0], position[1] + 0.005, position[2]]; // Slightly raise the y-coordinate
        chassisApi.position.set(...newPosition);
      });
      chassisApi.quaternion.set(0, 1, 0, 0); // Reset quaternion to upright orientation
      chassisApi.velocity.set(0, 0, 0); // Optionally reset velocity
      chassisApi.angularVelocity.set(0, 0, 0); // Optionally reset angular velocity
    }

    // 클락션 소리 및 쉬프트 키와 함께 'h' 키 처리
    if (e.key.toLowerCase() === 'h') {
      if (!klaxon) {
        setKlaxon(true); // klaxon 활성화

        const klaxonSound = new Audio(klaxonSoundFile);
        klaxonSound.play().catch((error) =>
          console.error('클락쏜 소리 재생 실패:', error)
        );

        // 일정 시간 후에 klaxon 비활성화
        const timer = setTimeout(() => {
          setKlaxon(false);
        }, klaxonDuration);

        // 이전 타이머가 있다면 취소
        if (klaxonTimer) {
          clearTimeout(klaxonTimer);
        }

        // 새로운 타이머 설정
        setKlaxonTimer(timer);
      }
    }
  }

  const handleKeyUp = (e) => {
    if (e.key === ' ') {
      setBrake(false);
      setBrakeLightsOn(false);
    }
  }

  // 이벤트 리스너 등록 및 제거
  useEffect(() => {
    if (state === true && socket.id === id) {
      window.addEventListener('keydown', handleKeyDown);
      window.addEventListener('keyup', handleKeyUp);
      return () => {
        window.removeEventListener('keydown', handleKeyDown);
        window.removeEventListener('keyup', handleKeyUp);
      }
    }
  }, [state, id, klaxon, klaxonDuration, klaxonSoundFile, klaxonTimer]);

  const [controls, setControls] = useState({});

  // 기본 이동 관련 건들지 마시오
  const KeyDownPressHandler = (e) => {
    if(!controls[e.key]) {
      setControls((controls) => ({ 
        ...controls, [e.key]: true ,
        boost: e.key === 'Shift' || e.shiftKey ? true : controls.boost
      }));
      console.log("DOWN", e.key);
    }
  }

  const KeyUpPressHandler = (e) => {
    setControls((controls) => ({ 
      ...controls, [e.key]: false,
      boost: e.key === 'Shift' ? false : controls.boost
    }));
    console.log("UP", e.key);
  }
  /////////////// 건들지 마시오
  useEffect(()=>{
    if( state === true && socket.id === id){     
        window.addEventListener('keydown', KeyDownPressHandler);
        window.addEventListener('keyup', KeyUpPressHandler);
      return () => {
        window.removeEventListener('keydown', KeyDownPressHandler);
        window.removeEventListener('keyup', KeyUpPressHandler);
      }
    }
  })
  ////////////////// 건들지 마시오



  // 차량 제어 로직
  useEffect(() => {
    const isMovingForward = controls.ArrowUp || controls.w;
    const isMovingBackward = controls.ArrowDown || controls.s;
    const isTurningLeft = controls.ArrowLeft || controls.a;
    const isTurningRight = controls.ArrowRight || controls.d;
  
    // 엔진 힘 조정
    let appliedEngineForce = 0;
    if (isMovingForward) {
      appliedEngineForce = controls.boost ? engineForce * 2 : engineForce;
    } else if (isMovingBackward) {
      appliedEngineForce = controls.boost ? -engineForce * 2 : -engineForce;
    } else {
      // 감속 로직: 아무 이동 키도 누르지 않았을 때
      // 여기서는 간단한 선형 감속을 적용합니다. 실제 게임에서는 더 복잡한 물리 기반 로직을 사용할 수 있습니다.
      appliedEngineForce = currentEngineForce * 0.5; // 현재 엔진 힘의 98%를 적용하여 점진적으로 감속
    }
  
    // 엔진 힘 적용
    vehicleApi.applyEngineForce(appliedEngineForce, 0);
    vehicleApi.applyEngineForce(appliedEngineForce, 1);

    if (isTurningLeft) {
      vehicleApi.setSteeringValue(0.3, 2);
      vehicleApi.setSteeringValue(0.3, 3);
      vehicleApi.setSteeringValue(-0.07, 0);
      vehicleApi.setSteeringValue(-0.07, 1);
    } else if (isTurningRight) {
      vehicleApi.setSteeringValue(-0.3, 2);
      vehicleApi.setSteeringValue(-0.3, 3);
      vehicleApi.setSteeringValue(0.07, 0);
      vehicleApi.setSteeringValue(0.07, 1);
    } else {
      for (let i = 0; i < 4; i++) {
        vehicleApi.setSteeringValue(0, i);
      }
    }

    // 조향 키가 눌리지 않았을 때만 브레이크 적용
    if (brake &&  !isTurningLeft && !isTurningRight) {
      vehicleApi.setBrake(20, 0);
      vehicleApi.setBrake(20, 1);
    } else {
      vehicleApi.setBrake(0, 0);
      vehicleApi.setBrake(0, 1);
      vehicleApi.setBrake(0, 2);
      vehicleApi.setBrake(0, 3);
    }

    setCurrentEngineForce(appliedEngineForce);

  }, [controls, vehicleApi, chassisApi, currentEngineForce]);

  return { controls, brakeLightsOn };
}


// useEffect(() => {
//   let currentEngineForce = controls.boost ? engineForce * 2 : engineForce; // boost 상태에 따라 엔진 힘 조정

//   if (controls.ArrowUp || controls.w) {
//     vehicleApi.applyEngineForce(currentEngineForce, 0);
//     vehicleApi.applyEngineForce(currentEngineForce, 1);
//   } else if (controls.ArrowDown || controls.s) {
//     vehicleApi.applyEngineForce(-currentEngineForce, 0);
//     vehicleApi.applyEngineForce(-currentEngineForce, 1);
//   } else {
//     vehicleApi.applyEngineForce(0, 0);
//     vehicleApi.applyEngineForce(0, 1);
//   }

//   if (controls.ArrowLeft || controls.a) {
//     vehicleApi.setSteeringValue(0.3, 2);
//     vehicleApi.setSteeringValue(0.3, 3);
//     vehicleApi.setSteeringValue(-0.07, 0);
//     vehicleApi.setSteeringValue(-0.07, 1);
//   } else if (controls.ArrowRight || controls.d) {
//     vehicleApi.setSteeringValue(-0.3, 2);
//     vehicleApi.setSteeringValue(-0.3, 3);
//     vehicleApi.setSteeringValue(0.07, 0);
//     vehicleApi.setSteeringValue(0.07, 1);
//   } else {
//     for (let i = 0; i < 4; i++) {
//       vehicleApi.setSteeringValue(0, i);
//     }
//   }

//   // 조향 키가 눌리지 않았을 때만 브레이크 적용
//   if (brake && !controls.ArrowLeft && !controls.ArrowRight && !controls.a && !controls.d) {
//     vehicleApi.setBrake(20, 0);
//     vehicleApi.setBrake(20, 1);
//   } else {
//     vehicleApi.setBrake(0, 0);
//     vehicleApi.setBrake(0, 1);
//     vehicleApi.setBrake(0, 2);
//     vehicleApi.setBrake(0, 3);
//   }

// }, [controls, vehicleApi, chassisApi]);

// return { controls, brakeLightsOn };
// }