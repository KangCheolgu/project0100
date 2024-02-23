// utils/Needle.js
import { useState, useEffect } from 'react';

function Needle({ socket, props, currentSpeed }) {
    const maxSpeed = 120;
    // useState to manage the angle state
    const [angle, setAngle] = useState((currentSpeed / maxSpeed) * 90 - 10);
    const [color, setColor] = useState('white'); // 초기 색상 white

    // useEffect to update the angle smoothly upon currentSpeed change
    useEffect(() => {
        const newAngle = (currentSpeed / maxSpeed) * 100 - 10;
        setAngle(newAngle);

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
                    width: '170px',
                    height: '15px',
                    backgroundColor: color,
                    position: 'absolute',
                    bottom: '22%',
                    right: '15%',
                    transform: `translate(-50%, -50%) rotate(${angle}deg)`,
                    transformOrigin: '240px 50%',
                    clipPath: 'polygon(60% 0, 100% 50%, 60% 100%, 0 50%)',
                    transition: 'transform 0.5s ease-out', // CSS transition for smooth movement
                    opacity: 0.7,
                }}
            />
        );
    }
    return null; // Return null if the condition is not met for rendering
}

export default Needle;
