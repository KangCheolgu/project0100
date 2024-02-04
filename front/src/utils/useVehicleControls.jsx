import { useEffect, useState } from "react";
import { socket } from "../Scene.jsx";

export const useVehicleControls = (vehicleApi, chassisApi, id, state) => {
  const [controls, setControls] = useState({});
  const engineForce = 120;

  // 키 이벤트 핸들러를 하나로 통합
  const handleKeyDown = (e) => {
    setControls((currentControls) => ({
      ...currentControls,
      [e.key]: true,
      boost: e.key === 'Shift' ? true : currentControls.boost // Shift 키를 누를 때 boost 활성화
    }));
  }

  const handleKeyUp = (e) => {
    setControls((currentControls) => ({
      ...currentControls,
      [e.key]: false,
      boost: e.key === 'Shift' ? false : currentControls.boost // Shift 키를 떼면 boost 비활성화
    }));
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
  }, [state, id]); // 의존성 배열에 state와 id 추가

  // 차량 제어 로직
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
  }, [controls, vehicleApi, chassisApi]); // 의존성 배열에 controls 추가

  return controls;
}
