import React, { useRef, useState, useEffect,useMemo } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { socket } from "./lobby/lobby.jsx";
import { Text, Html  } from '@react-three/drei';
import * as THREE from "three";

function Spectator(props) {
  const cameraRef = useRef();
  
  const positions = [
    [0, 10, 0], 
    [20, 10, 20], 
    [-20, 10, -20] 
  ];

  const [positionIndex, setPositionIndex] = useState(0);
  const [receivingData, setReceivingData] = useState(false); // 정보 수신 상태
  const [selectedPlayer, setSelectedPlayer] = useState(null); // 선택된 플레이어 v
  
  const [bodyPosition, setBodyPosition] = useState(new THREE.Vector3(0, 0, 0)); // 바디 포지션
  const [bodyRotation, setBodyRotation] = useState(new THREE.Quaternion()); // 바디 로테이션

  // 카메라 컨트롤
  useEffect(() => {
    const handlePrevCameraMove = () => {
      let nextIndex = positionIndex - 1;
      if (nextIndex < 0) {
        nextIndex = positions.length - 1;
      }
      console.log("handlePrevCameraMove",nextIndex);
      setPositionIndex(nextIndex);
      setReceivingData(false); 
      setSelectedPlayer(null); 
    };
  
    const handleNextCameraMove = () => {
      let nextIndex = positionIndex + 1;
      if (nextIndex >= positions.length) {
        nextIndex = 0;
      }
      console.log("handleNextCameraMove", nextIndex);
      setPositionIndex(nextIndex);
      setReceivingData(false); 
      setSelectedPlayer(null); 
    };
  
    const handle1pButtonClick = () => {
      setReceivingData(true); // 정보 수신 재개
      setSelectedPlayer(0); // 1p 선택
    };
  
    const handle2pButtonClick = () => {
      setReceivingData(true); // 정보 수신 재개
      setSelectedPlayer(1); // 2p 선택
    };

    socket.on("prevCameraMove", handlePrevCameraMove)
    socket.on("1pCameraMove", handle1pButtonClick)
    socket.on("2pCameraMove", handle2pButtonClick)
    socket.on("nextCameraMove", handleNextCameraMove)

    return () => {
      socket.off("prevCameraMove")
      socket.off("1pCameraMove")
      socket.off("2pCameraMove")
      socket.off("nextCameraMove")
    }
  },[positionIndex])

  //
  useEffect(() => {
    //이 관전자만 실행
    if (socket.id === props.id) {
      const handleSocketData = (updateData) => {
        if (!receivingData || (selectedPlayer !== null && updateData.index !== selectedPlayer)) {
          return; // 정보 수신 중이 아니거나 선택된 플레이어가 아닐 경우 무시
        }
        setBodyPosition({x:updateData.position.x, y:updateData.position.y, z:updateData.position.z})
        setBodyRotation({
          isQuaternion: true,
          x: updateData.quaternion[0],
          y: updateData.quaternion[1],
          z: updateData.quaternion[2],
          w: updateData.quaternion[3] 
        })
      };
    
      socket.on("updateAnotherPlayer", handleSocketData);
    
      return () => {
        socket.off("updateAnotherPlayer", handleSocketData);
      };
    }
  }, [receivingData, selectedPlayer]);
  
  const [smoothedCameraPosition] = useState(() => new THREE.Vector3(10, 10, 10));
  const cameraPosition = useMemo(() => new THREE.Vector3(), []);
  const cameraTarget = useMemo(() => new THREE.Vector3(), []);
  const relativeCameraPosition = new THREE.Vector3(0, 0.5, 0.9);
  useFrame((state) => {
    // 해당 관전자만
    if (socket.id === props.id) {
      // 위치고정 카메라일시
      if (!receivingData && selectedPlayer === null) {
        // 관전 모드에서는 선택된 플레이어의 위치를 표시하지 않음
        const [x, y, z] = positions[positionIndex];
        cameraPosition.copy(relativeCameraPosition)
        cameraPosition.add({ x: x, y: y, z: z })
        state.camera.position.copy(cameraPosition);
      // 플레이어 고정 카메라일시
      } else {
        cameraPosition.copy(relativeCameraPosition).applyQuaternion(bodyRotation).add(bodyPosition);

        smoothedCameraPosition.lerp(cameraPosition, 0.2);

        // state.camera.position.copy(smoothedCameraPosition);
        state.camera.position.copy(cameraPosition);

        cameraTarget.set(bodyPosition.x, bodyPosition.y + 0.4, bodyPosition.z);
        state.camera.lookAt(cameraTarget);
      }
    }
  });

  return (
    <>
      <perspectiveCamera
        ref={cameraRef}
        fov={75}
        aspect={window.innerWidth / window.innerHeight}
        near={0.1}
        far={1000}
      />
    </>
  );
}

export default Spectator;