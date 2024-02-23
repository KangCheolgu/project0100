import React, { useEffect, useRef, useState } from 'react';
import { Html, useGLTF } from '@react-three/drei';
import { useSphere } from '@react-three/cannon';
import { motion } from 'framer-motion-3d';

// 변경된 모델을 미리 로드합니다.
useGLTF.preload(`/assets/models/Basketball.glb`);

export function Ball({ position }) {
  // 변경된 모델 경로로 useGLTF를 업데이트합니다.
  const { nodes, materials } = useGLTF(`/assets/models/Basketball.glb`);
  const [info, setInfo] = useState(false)
  const [ref, api] = useSphere(() => ({
    position,
    args: [0.3], // 공의 크기나 물리적 특성에 따라 조정이 필요할 수 있습니다.
    mass: 0.5,
    onCollide: handleCollision
  }), useRef(null));

  const handleCollision = (e) => {
    const { body } = e;
    if (body.name === "chassisBody") {
      setInfo(true);
      api.velocity.set(0, 0, 0)
    }
  }

  useEffect(() => {
    let timeout;
    if (info) {
      timeout = setTimeout(() => {
        setInfo(false)
      }, 600);
    }
    return () => clearTimeout(timeout);
  }, [info]);

  return (
    <motion.group
      initial={{scale:0}}
      animate={{scale: 1}}
      transition={{
          delay: 3,
          duration: 0.3,
      }}
      ref={ref}>
      {/* 변경된 모델의 노드와 재질을 사용하여 mesh를 업데이트합니다. */}
      <group scale={0.6} position={[0, 0.02, 0]}>
        <mesh castShadow receiveShadow geometry={nodes.Sphere.geometry} material={materials['Material.001']} />
      </group>
    </motion.group>
  );
}
