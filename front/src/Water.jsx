import { Plane, PositionalAudio, shaderMaterial, OrbitControls, Stars } from '@react-three/drei'
import { extend, useFrame, Canvas } from '@react-three/fiber'
import glsl from 'babel-plugin-glsl/macro'
import { folder, useControls } from 'leva'
import React, { useRef, Suspense } from 'react'
import * as THREE from 'three'
{/* #0066b3'*/}
export default function Water(props) {
  const position=props.position
  const {
    animate,
    bigWavesElevation,
    bigWavesFrequency,
    bigWaveSpeed,
    surfaceColor,
    depthColor,
    colorOffset,
    colorMultiplier,
    smallWavesElevation,
    smallWavesFrequency,
    smallWavesSpeed,
    smallIterations,
  } = useControls({
    precison: 'lowp',
    animate: true,
    colors: folder({ surfaceColor: '#c1e4fe', depthColor: '#87cbff', colorOffset: 0.08, colorMultiplier: 1.4 }),
    bigWaves: folder({ bigWavesElevation: 0.8, bigWavesFrequency: [0.2, 0.7], bigWaveSpeed: 0.75 }),
    smallWaves: folder({ smallWavesElevation: 0.15, smallWavesFrequency: 3, smallWavesSpeed: 0.2, smallIterations: 4 }),
  })
  const shaderRef = useRef()
  useFrame((_, delta) => animate && (shaderRef.current.uTime += delta))
  return (
    <Plane args={[50, 70, 1026, 1026]} position={position} receiveShadow rotation-x={-Math.PI / 2} >
      <ragingSeaMaterial
        key={RagingSeaMaterial.key}
        ref={shaderRef}
        uBigWavesElevation={bigWavesElevation}
        uBigWavesFrequency={bigWavesFrequency}
        uBigWavesSpeed={bigWaveSpeed}
        uSurfaceColor={surfaceColor}
        uDepthColor={depthColor}
        uColorOffset={colorOffset}
        uColorMultiplier={colorMultiplier}
        uSmallWavesElevation={smallWavesElevation}
        uSmallWavesFrequency={smallWavesFrequency}
        uSmallWavesSpeed={smallWavesSpeed}
        uSmallIterations={smallIterations}
      />
    </Plane>
  )
}

const RagingSeaMaterial = new shaderMaterial(
  {
    uTime: 1,
    uBigWavesElevation: 0.8,
    uBigWavesFrequency: [0.1, 0.3],
    uBigWavesSpeed: 0.3,
    uSurfaceColor: new THREE.Color('#c1e4fe'),
    uDepthColor: new THREE.Color('#0066b3'),
    uColorOffset: 0.08,
    uColorMultiplier: 1.4,
    uSmallWavesElevation: 0.15,
    uSmallWavesFrequency: 0.5,
    uSmallWavesSpeed: 0.1,
    uSmallIterations: 0,
  },
  glsl/* glsl */ `
  #pragma glslify: cnoise2 = require(glsl-noise/classic/2d.glsl)
  #pragma glslify: cnoise3 = require(glsl-noise/classic/3d.glsl)
    uniform float uTime;
    uniform float uBigWavesElevation;
    uniform float uBigWavesSpeed;
    uniform vec2 uBigWavesFrequency;

    uniform float uSmallWavesElevation;
    uniform float uSmallWavesFrequency;
    uniform float uSmallWavesSpeed;
    uniform float uSmallIterations;

    varying float vElevation;

    void main() {
      vec4 modelPosition = modelMatrix * vec4(position, 1.0);
      float elevation = sin(modelPosition.x * uBigWavesFrequency.x + uTime * uBigWavesSpeed) *
        sin(modelPosition.z * uBigWavesFrequency.y + uTime * uBigWavesSpeed) *
        (cnoise3(vec3(modelPosition.xz / 5.0, (uTime / 5.0))) * 2.0) * uBigWavesElevation;
      for (float i = 1.0; i <= uSmallIterations; i++) {
        elevation -= abs(cnoise3(vec3(modelPosition.xz * uSmallWavesFrequency * i, uTime * uSmallWavesSpeed)) * uSmallWavesElevation / i);
      }
      modelPosition.y += elevation;
      vec4 viewPosition = viewMatrix * modelPosition;
      vec4 projectedPosition = projectionMatrix * viewPosition;
      gl_Position = projectedPosition;
      vElevation = elevation;
    }
  `,
  glsl/* glsl */ `
    uniform vec3 uSurfaceColor;
    uniform vec3 uDepthColor;
    uniform float uColorOffset;
    uniform float uColorMultiplier;
    varying float vElevation;

    void main() {
      float mixStrength = (vElevation + uColorOffset) * uColorMultiplier;
      vec3 color = mix(uDepthColor, uSurfaceColor, mixStrength);
      gl_FragColor = vec4(color, 1.0);
    }
  `,
)

RagingSeaMaterial.key = Math.random()

extend({ RagingSeaMaterial })