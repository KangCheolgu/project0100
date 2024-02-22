import React, { useState, useEffect } from 'react';
import * as THREE from 'three';

function Minimap({ socket, props, chassisBody, index }) {
  const [opponentPosition, setOpponentPosition] = useState({ x: 0, z: 0 });
  const [myPosition, setMyPosition] = useState({ x: 0, z: 0 });
  const minimapSrc = '/assets/images/minimap.png';
  const blueCarSrc = '/assets/images/blue-car.png';
  const redCarSrc = '/assets/images/red-car.png';

  const scaleX = 150 / 32;
  const scaleZ = 250 / 100;

  useEffect(() => {
    // 상대방 위치 추적
    socket.on("updateAnotherPlayer", (data) => {
      setOpponentPosition({ x: data.position.x, z: data.position.z });
    });

    return () => {
      socket.off("updateAnotherPlayer");
    };
  }, [socket]);

  useEffect(() => {
    // 내 위치 추적
    const updateMyPosition = () => {
      const bodyPosition = chassisBody.current.getWorldPosition(new THREE.Vector3());
      setMyPosition({ x: bodyPosition.x, z: bodyPosition.z });
    };

    updateMyPosition();

    // 선택적: 위치 업데이트를 위한 인터벌 설정
    const interval = setInterval(updateMyPosition, 500); // 매 1초마다 위치 업데이트

    return () => clearInterval(interval);
  }, [chassisBody]);

  // 위치에 따라 차량 이미지 위치 조정
  // 예시로, 미니맵과 실제 게임 월드의 스케일이 1:1이라고 가정함
  // 실제 구현에서는 게임 월드와 미니맵의 스케일 비율에 따라 조정 필요
  const myCarStyle = {
    position: 'absolute',
    left: `${myPosition.x * scaleX + 80}px`,
    top: `${myPosition.z * scaleZ + 380}px`,
    width: '20%',
    height: '15%',
    transform: 'translate(-50%, -50%)', // 중앙 정렬
    zIndex: 999,
  };

  const opponentCarStyle = {
    position: 'absolute',
    left: `${opponentPosition.x * scaleX + 80}px`,
    top: `${opponentPosition.z * scaleZ + 380}px`,
    width: '20%',
    height: '15%',
    transform: 'translate(-50%, -50%)', // 중앙 정렬
    zIndex: 999,
  };

  if (socket.id === props.id) 
  {
    if (index === 0)
    {
    return (
      <div style={{ position: 'absolute', bottom: '60%', right: '0%' }}>
        <img src={minimapSrc} alt="Minimap" style={{ width: '100%', height: '100%' }} />
        <img src={blueCarSrc} alt="My Car" style={myCarStyle} />
        <img src={redCarSrc} alt="Opponent's Car" style={opponentCarStyle} />
      </div>
    );
    }
    else
    {
    return (
      <div style={{ position: 'absolute', bottom: '60%', right: '0%' }}>
        <img src={minimapSrc} alt="Minimap" style={{ width: '100%', height: '100%' }} />
        <img src={redCarSrc} alt="My Car" style={myCarStyle} />
        <img src={blueCarSrc} alt="Opponent's Car" style={opponentCarStyle} />
      </div>
    );
    }
  }
}

export default Minimap;