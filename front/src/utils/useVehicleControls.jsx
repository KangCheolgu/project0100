import { useEffect, useRef, useState } from "react";
import { socket } from "../lobby/lobby.jsx";
import klaxonSoundFile from '../sound/car-horn/car-horn-1.wav';
import * as THREE from 'three';
import { Vector3 } from "three";
import { CheckPoint } from "./CheckPoint.jsx";

export const useVehicleControls = (vehicleApi, chassisApi, chassisBody, checkPointIndex, id, state) => {
  const engineForce = 80;
  const [brake, setBrake] = useState(false);
  const klaxonDuration = 500;

  // 클락션 상태와 타이머 관련 상태 추가
  const [klaxon, setKlaxon] = useState(false);
  const [klaxonTimer, setKlaxonTimer] = useState(null);

  // brake
  const [brakeLightsOn, setBrakeLightsOn] = useState(false);

  const [currentEngineForce, setCurrentEngineForce] = useState(engineForce);

  useEffect(() => {

    const handleKeyPress = (e) => {
        if (e.key === 'r') {
            const currentPosition = chassisBody.current.getWorldPosition(new Vector3());
            chassisApi.position.set(currentPosition.x,currentPosition.y + 0.05,currentPosition.z);
            chassisApi.velocity.set(0, 0, 0); // Optionally reset velocity
            chassisApi.angularVelocity.set(0, 0, 0); // Optionally reset angular velocity
            if(checkPointIndex !== 0 && CheckPoint[checkPointIndex % (CheckPoint.length)].axis === "x"){
              if((CheckPoint[checkPointIndex % (CheckPoint.length)].z - currentPosition.z) >= 0) {
                chassisApi.quaternion.set(0, 1, 0, 0)
              } else {
                chassisApi.quaternion.set(0, 0, 0, 1);
              }
            } else if (checkPointIndex !== 0 && CheckPoint[checkPointIndex % (CheckPoint.length)].axis === "z") {
              if((CheckPoint[checkPointIndex % (CheckPoint.length)].x - currentPosition.x) >= 0) {
                chassisApi.quaternion.set(0, -1, 0, 1);
              } else {
                chassisApi.quaternion.set(0, 1, 0, 1);
              }
            }
        }
    };

    window.addEventListener('keydown', handleKeyPress);

    return () => {
        window.removeEventListener('keydown', handleKeyPress);
    };
  }, [checkPointIndex]);

  // 키 다운 이벤트
  const handleKeyDown = (e) => {
    // for brake lights
    if (e.key === ' ') {
      setBrake(true);
      setBrakeLightsOn(true);  // Turn on brake lights
    }

    // 'R' 키 입력 시 자동차 위치 y 좌표 증가 및 쿼터니언 초기화
    // if (e.key === 'r') {
      
    //   const currentPosition = chassisBody.current.getWorldPosition(new Vector3());
    //   console.log(checkPointIndex);
    //   console.log(CheckPoint[checkPointIndex]);
    //   chassisApi.position.set(currentPosition.x,currentPosition.y + 0.05,currentPosition.z)
       
    //   chassisApi.velocity.set(0, 0, 0); // Optionally reset velocity
    //   chassisApi.angularVelocity.set(0, 0, 0); // Optionally reset angular velocity
    //   if(CheckPoint[checkPointIndex].axis === 'x'){
    //     if(CheckPoint[checkPointIndex].z){

    //     }
    //   }
        
    //   chassisApi.quaternion.set(0, 0, 0, 1);
    // }
    

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
    }
  }

  const KeyUpPressHandler = (e) => {
    setControls((controls) => ({ 
      ...controls, [e.key]: false,
      boost: e.key === 'Shift' ? false : controls.boost
    }));
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

useEffect(() => {
  let currentEngineForce = controls.boost ? engineForce * 2 : engineForce; // boost 상태에 따라 엔진 힘 조정

  if (controls.ArrowUp || controls.w) {
    vehicleApi.applyEngineForce(currentEngineForce, 0);
    vehicleApi.applyEngineForce(currentEngineForce, 1);
  } else if (controls.ArrowDown || controls.s) {
    vehicleApi.applyEngineForce(-currentEngineForce, 0);
    vehicleApi.applyEngineForce(-currentEngineForce, 1);
  } else {
    vehicleApi.applyEngineForce(0, 0);
    vehicleApi.applyEngineForce(0, 1);
  }

  if (controls.ArrowLeft || controls.a) {
    vehicleApi.setSteeringValue(0.3, 2);
    vehicleApi.setSteeringValue(0.3, 3);
    vehicleApi.setSteeringValue(-0.07, 0);
    vehicleApi.setSteeringValue(-0.07, 1);
  } else if (controls.ArrowRight || controls.d) {
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
  if (brake && !controls.ArrowLeft && !controls.ArrowRight && !controls.a && !controls.d) {
    vehicleApi.setBrake(20, 0);
    vehicleApi.setBrake(20, 1);
  } else {
    vehicleApi.setBrake(0, 0);
    vehicleApi.setBrake(0, 1);
    vehicleApi.setBrake(0, 2);
    vehicleApi.setBrake(0, 3);
  }

}, [controls, vehicleApi, chassisApi]);

return { controls, brakeLightsOn };
}