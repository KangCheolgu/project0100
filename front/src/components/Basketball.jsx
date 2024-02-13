import React, { useEffect, useRef, useState } from 'react';
import { Html, useGLTF } from '@react-three/drei';
import { useSphere } from '@react-three/cannon';
import { motion } from 'framer-motion-3d';

export function Basketball({ position }) {
  const { nodes, materials } = useGLTF(`/assets/models/Basketball.glb`);
  const [info, setInfo] = useState(false);
  const [ref, api] = useSphere(() => ({
    mass: 1,
    position,
    args: [0.24], // Assuming the diameter of a real basketball is around 24cm, adjust if your model differs
    onCollide: handleCollision
  }));

  const handleCollision = (e) => {
    const { body } = e;
    if (body.name === "chassisBody") { // Ensure this name matches your scene's object names
      setInfo(true);
      setTimeout(() => setInfo(false), 600); // Hide info after 600ms
    }
  };

  useEffect(() => {
    api.velocity.set(0, 1, 0); // Adjust initial velocity as needed
  }, [api.velocity]);

  return (
    <motion.group
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 1, duration: 0.5 }}
      ref={ref}
    >
      <mesh castShadow geometry={nodes.Sphere.geometry} material={materials['Material.001']} scale={[1, 1, 1]}>
        {info && <Html center><div className="information">나 강철구요...</div></Html>}
      </mesh>
    </motion.group>
  );
}
