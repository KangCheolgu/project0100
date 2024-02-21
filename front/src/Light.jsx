import React, { useRef } from 'react';
import { useThree } from '@react-three/fiber';
import * as THREE from 'three';

const Light = () => {
  const lightRef = useRef();
  const { scene } = useThree();
  const targetObject = new THREE.Object3D();
  targetObject.position.set(0, 0, -50);

  // Create a DirectionalLight
  const light = new THREE.DirectionalLight(0xffffff, 0.5);
  light.position.set(50, 80, -50); // Set light position
  light.target =targetObject
  targetObject.position.set(0, 0, -50);
  light.castShadow = true; // Enable shadow casting
  light.shadow.camera.top = 30;
  light.shadow.camera.bottom = -60;
  light.shadow.camera.left = -120;
  light.shadow.camera.right = 100;
  light.shadow.camera.far = 100;
  light.shadow.mapSize.height = 512;
  light.shadow.mapSize.width = 512;
  lightRef.current = light;

  // Create a DirectionalLightHelper
  const helper = new THREE.DirectionalLightHelper(lightRef.current, 5);
  const shadowHelper = new THREE.CameraHelper(light.shadow.camera)

  // Add the light and helper to the scene
  scene.add(lightRef.current);
  scene.add(helper);
scene.add(shadowHelper);
  return null; // Since this component doesn't render any JSX, return null
};

export default Light