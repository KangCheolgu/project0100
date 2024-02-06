import { useEffect, useMemo, useRef } from 'react'
import { useCompoundBody, useBox } from '@react-three/cannon'
import { useFrame } from '@react-three/fiber'
import { BoxGeometry, Vector3 } from 'three'

function lerp(from, to, speed) {
  const r = (1 - speed) * from + speed * to
  return Math.abs(from - to) < 0.001 ? to : r
}

export function SpinObstacle() {
  const [ref, api] = useCompoundBody(
    () => ({
      mass: 10000,
      position: [3,0.55,0],
      shapes: [
        { args: [1,1,1], position: [1.75, 0, 0], type: 'Box' },
        { args: [0.5], position: [0, 0, 0], type: 'Sphere' },
        { args: [1,1,1], position: [-1.75, 0, 0], type: 'Box' }
      ]
    }),

    useRef()
  )
  // sapi.position.set([0, 0.7, 0])
  useEffect(() => {
    api.angularFactor.set(0, 0.5, 0) // causes the obstacles to remain upright in case of collision
    api.linearFactor.set(0, 0, 0) // locks it in place so it doesnt slide when bumped
  }, [api.angularFactor, api.linearFactor])

  useFrame((_, delta) => {
    api.angularVelocity.set(0, 100*delta, 0)
  })

  return (
    <mesh ref={ref} castShadow receiveShadow>
      {/* 가운데 기둥 */}
     
      <meshStandardMaterial />
      
    </mesh>
  )
}

export function LeftAndRightObstacle(){
  
  const [box, {position}] = useBox(()=>({
    mass: 0,
    position: [-3, 0.5, 0],
    material: 'object',
    args: [1,1,1]
  }),
  useRef()
  )  
  
  const targetPosition = useRef(0)
  const direction = useRef(1)
  
  useEffect(() => {
    const unsubscribe = position.subscribe((v) => {
      position.set(lerp(v[0], targetPosition.current, 0.1), v[1], v[2])
    })
    return unsubscribe
  }, [])

  useFrame((_, delta) => {
    targetPosition.current += direction.current * delta
    if (targetPosition.current > 2) direction.current = -1
    if (targetPosition.current < -2) direction.current = 1
  })

  return (
    <mesh ref={box} castShadow>
      <meshStandardMaterial />
    </mesh>
  )
}