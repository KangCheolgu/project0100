import React, { useRef } from 'react';
import { useThree } from '@react-three/fiber';
import * as THREE from 'three';

export default function Light(){
  const lightRef = useRef();
  const { scene } = useThree();
  const targetObject = new THREE.Object3D();
  targetObject.position.set(50, 0, -50);

  // Create a DirectionalLight
  const light = new THREE.DirectionalLight(0xffffff, 0.3);
  light.position.set(50, 80, -50); // Set light position
  light.castShadow = true;
  light.target =targetObject
  light.shadow.camera.top = 100;
  light.shadow.camera.bottom = -100;
  light.shadow.camera.left = -120;
  light.shadow.camera.right = 100;
  light.shadow.camera.far = 150;
  light.shadow.mapSize.height = 512;
  light.shadow.mapSize.width = 512;
  light.shadow.bias = 0.1;
  lightRef.current = light;

  // Create a DirectionalLightHelper
  //const helper = new THREE.DirectionalLightHelper(lightRef.current, 5);
  const shadowHelper = new THREE.CameraHelper(light.shadow.camera)

  // Add the light and helper to the scene
  scene.add(lightRef.current);
  scene.add(shadowHelper);
  return null; // Since this component doesn't render any JSX, return null
};