import { useState, useEffect } from 'react';

function Speedometer({ socket, props, currentSpeed }) {
  // State to manage color
  const [color, setColor] = useState('white'); 
  const [rightpos, setRightpos] = useState('10%'); 

  // useEffect to update the angle smoothly upon currentSpeed change
  useEffect(() => {
    if (currentSpeed >= 10) {
      setRightpos('1%');
    } else {
      setRightpos('10%'); 
    }

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
          position: 'absolute',
          right: '10%',
          bottom: '10%',
          width: '300px',
          height: '200px',
          backgroundColor: 'rgba(0, 0, 0, 0)',
          zIndex: 999,
          opacity: 0.7 
        }}
      >
        <div
          style={{
            position: 'absolute',
            bottom: '10%',
            right: rightpos,
            color: color,
            fontSize: '100px',
            fontFamily: 'Aptos, sans-serif', // Aptos 폰트 적용
          }}
        >
          {currentSpeed}
        </div>
        <div
          style={{
            position: 'absolute',
            bottom: '3%',
            right: '8%',
            color: color,
            fontSize: '30px',
            fontFamily: 'Aptos-italic, sans-serif', // Aptos 폰트 적용
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