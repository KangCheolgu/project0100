import React, { useEffect, useRef, useState } from 'react'
import * as THREE from 'three'
import { Canvas, useFrame } from '@react-three/fiber'
import { computeBoundsTree, disposeBoundsTree, acceleratedRaycast, MeshBVHVisualizer } from 'three-mesh-bvh'
import { Perf } from 'r3f-perf'
import { useHelper } from '@react-three/drei'
import { DebugRayCast } from './addRaycaster'
import { useControls } from 'leva'

THREE.BufferGeometry.prototype.computeBoundsTree = computeBoundsTree
THREE.BufferGeometry.prototype.disposeBoundsTree = disposeBoundsTree
THREE.Mesh.prototype.raycast = acceleratedRaycast

function Torus(prop
    s) {
  // This reference will give us direct access to the mesh
  const mesh = useRef()
  // Set up state for the hovered and active state
  const [active, setActive] = useState(false)
  // Rotate mesh every frame, this is outside of React without overhead
  useFrame(() => {
    mesh.current.rotation.x = mesh.current.rotation.y += 0.01
  })
  const { useComputeThree } = useControls({
    useComputeThree: true
  })
  useEffect(() => {
    mesh.current.geometry.computeBoundsTree({ strategy: 'CENTER' })

    return () => {
      if (mesh.current.geometry.boundsTree) {
        mesh.current.geometry.disposeBoundsTree()
      }
    }
  }, [])

  useEffect(() => {
    if (useComputeThree) {
      mesh.current.geometry.computeBoundsTree()
    } else {
      if (mesh.current.geometry.boundsTree) {
        mesh.current.geometry.disposeBoundsTree()
      }
    }
  }, [useComputeThree])

  useHelper(mesh, MeshBVHVisualizer)

  return (
    <mesh {...props} ref={mesh} scale={active ? 1.2 : 1} onClick={(e) => setActive(!active)}>
      <torusKnotBufferGeometry args={[1, 0.4, 200, 50]} />
      <meshNormalMaterial />
    </mesh>
  )
}

export default function App() {
  const grp = useRef()
  return (
    <Canvas camera-position-z={40} camera-far={100}>
      <Perf position="bottom-right" />
      <group ref={grp}>
        <Torus position={[0, 0, 0]} />
      </group>
      <DebugRayCast grp={grp} />
    </Canvas>
  )
}
