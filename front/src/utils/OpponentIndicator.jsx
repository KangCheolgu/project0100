import React, { useState, useEffect } from 'react';

// 상대방의 아이콘을 위한 스타일
const iconStyle = (angle) => ({
  position: 'absolute',
  transform: `translate(-50%, -50%) rotate(${angle}deg)`,
  // 화면의 중앙에 가깝게 위치시키기 위한 예시 값
  left: '50%',
  top: '50%',
  // 아이콘의 크기와 기타 스타일링은 여기에 추가
});

function OpponentIndicator({ myPosition, opponentPosition }) {
  const [angle, setAngle] = useState(0);

  useEffect(() => {
    const calculateAngle = () => {
      const dx = opponentPosition.x - myPosition.x;
      const dz = opponentPosition.z - myPosition.z;
      // atan2를 사용하여 두 위치 사이의 각도(라디안) 계산
      let calculatedAngle = Math.atan2(dz, dx) * 180 / Math.PI;
      // 각도를 0~360 범위로 조정
      calculatedAngle = (calculatedAngle + 360) % 360;
      setAngle(calculatedAngle);
    };

    calculateAngle();
  }, [myPosition, opponentPosition]);

  return (
    <div style={{ position: 'relative', width: '100%', height: '100%' }}>
      {/* 상대방의 아이콘을 화면에 표시 */}
      <img
        src="/assets/images/red-car.png" // 상대방 아이콘의 경로
        alt="Opponent"
        style={iconStyle(angle)}
      />
    </div>
  );
}

export default OpponentIndicator;
