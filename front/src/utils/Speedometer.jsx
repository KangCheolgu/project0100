import { useState, useEffect } from 'react';

function Speedometer({ socket, props, currentSpeed }) {
  const [color, setColor] = useState('white'); // 초기 색상 white

  // useEffect to update the angle smoothly upon currentSpeed change
  useEffect(() => {
    // 바늘 색
    if (currentSpeed >= 50) {
        setColor('#FF6666');
    } else {
        setColor('white'); 
    }
  }, [currentSpeed]);

  if (socket.id === props.id) {
    return (
      <div
        style={{
          position: 'fixed',
          top: '450px',
          left: '770px',
          width: '300px',
          height: '200px',
          backgroundColor: 'rgba(0, 0, 0, 0)',
          borderRadius: '10px',
          zIndex: 999,
          opacity: 0.7 // 동적 opacity 적용
        }}
      >
        <div
          style={{
            position: 'absolute',
            bottom: '60px',
            left: '10px',
            color: color,
            fontSize: '100px',
            fontFamily: 'Cafe24',
          }}
        >
          {currentSpeed}
        </div>
        <div
          style={{
            position: 'absolute',
            bottom: '40px',
            left: '10px',
            color: color,
            fontSize: '30px',
            fontFamily: 'Cafe24',
          }}
        >
          KMH
        </div>
      </div>
    );
  }
  return null;
}


export default Speedometer; 