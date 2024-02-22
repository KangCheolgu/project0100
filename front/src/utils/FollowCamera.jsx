// utils/FollowCamera.jsx
import React, { useState, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const FollowCamera = ({ chassisBody, socket, vehicleId }) => {
    const [smoothedCameraPosition] = useState(() => new THREE.Vector3(10, 10, 10));
    const cameraPosition = useMemo(() => new THREE.Vector3(), []);
    const cameraTarget = useMemo(() => new THREE.Vector3(), []);
    const relativeCameraPosition = new THREE.Vector3(0, 0.5, 0.9); // 더 나은 후방 시야를 위해 조정됨

    useFrame((state) => {
        if (socket.id === vehicleId) {
            // Assuming chassisBody.current is always available; otherwise, guard with an if-statement.
            const bodyPosition = chassisBody.current.getWorldPosition(new THREE.Vector3());
            const bodyRotation = chassisBody.current.getWorldQuaternion(new THREE.Quaternion());

            // Directly use the body position and rotation without rounding.
            cameraPosition.copy(relativeCameraPosition).applyQuaternion(bodyRotation).add(bodyPosition);

            // Use a more direct approach for smoothing camera movement.

            // smoothedCameraPosition.lerp(cameraPosition, 0.3);

            // option 1. smoothCamera
            // state.camera.position.copy(smoothedCameraPosition);
            // option 2. camera
            state.camera.position.copy(cameraPosition);

            // Directly set the camera target without intermediate variables.
            cameraTarget.set(bodyPosition.x, bodyPosition.y + 0.4, bodyPosition.z);
            state.camera.lookAt(cameraTarget);
        }
    });
    return null; // 이 컴포넌트는 아무것도 렌더링하지 않음
};

export default FollowCamera;
