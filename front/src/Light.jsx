import React, { useRef } from 'react';
import { useThree } from '@react-three/fiber';
import * as THREE from 'three';

const Light = () => {
  const lightRef = useRef();
  const { scene } = useThree();

  // Create a DirectionalLight
  const light = new THREE.DirectionalLight(0xffffff, 0.7);
  light.position.set(30, 60, -30); // Set light position
  light.castShadow = true; // Enable shadow casting
  light.shadow.camera.top = 100;
  light.shadow.camera.bottom = -100;
  light.shadow.camera.left = -100;
  light.shadow.camera.right = 100;
  light.shadow.mapSize.height = 512 * 4;
  light.shadow.mapSize.width = 512 * 4;
  lightRef.current = light;

  // Create a DirectionalLightHelper
  const helper = new THREE.DirectionalLightHelper(lightRef.current, 5);
  const shadowHelper = new THREE.CameraHelper(light.shadow.camera)

  // Add the light and helper to the scene
  scene.add(lightRef.current);
  {/*scene.add(helper);
scene.add(shadowHelper);*/}
  return null; // Since this component doesn't render any JSX, return null
};

export default Light