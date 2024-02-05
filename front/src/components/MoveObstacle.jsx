import { useEffect, useMemo, useRef } from 'react'
import { useCompoundBody, useBox } from '@react-three/cannon'
import { useFrame } from '@react-three/fiber'
import { BoxGeometry, Vector3 } from 'three'
import { StreetVendorCart } from './StreetVendorCart'
import { PoliceCar } from './PoliceCar'
import { BananaCar } from './BananaCar'

function lerp(from, to, speed) {
  const r = (1 - speed) * from + speed * to
  return Math.abs(from - to) < 0.001 ? to : r
}

export function SpinObstacle() {
  const [ref, api] = useCompoundBody(
    () => ({
      
      position: [10,0.5,0],
      shapes: [
        { args: [0.9,1,1.5], position: [1.75, 0, 0], type: 'Box' },
        
        { args: [0.6,1,1.4], position: [-1.75, 0, 0], type: 'Box' }
      ],
      type: 'Kinematic'
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
      <PoliceCar scale={[0.07,0.07,0.07]} position={[1.8,-0.5,0]}/>
      <BananaCar scale={[0.002, 0.002, 0.002]} position={[-1.8, -0.1, 0]}/>
      <meshStandardMaterial />
    </mesh>
  )
}

export function LeftAndRightObstacle(){
  
  const [box, {position}] = useBox(()=>({
    mass: 0,
    position: [5, 0.7, 0],
    material: 'object',
    args: [1.1,1,1]
  }),
  useRef()
  )  
  
  const targetPosition = useRef(5)
  const direction = useRef(1)

  useEffect(() => {
    const unsubscribe = position.subscribe((v) => {
      position.set(lerp(v[0], targetPosition.current, 0.1), v[1], v[2]) //lerp(from,to,speed)
    })
    return unsubscribe
  }, [])


  useFrame((_, delta) => {
    targetPosition.current += direction.current * delta * 5
    if (targetPosition.current > 8) direction.current = -1
    if (targetPosition.current < 2) direction.current = 1
  })

  return (
    <mesh ref={box} castShadow>
      <StreetVendorCart scale={[0.3,0.3,0.3]} position={[0, -0.1, 0]}/>
      <meshStandardMaterial/>
    </mesh>
  )
}

export function UpDownObstacle(){
  
  const [box, {position}] = useBox(()=>({
    mass: 0,
    position: [2, 0.5, 2],
    material: 'object',
    args: [1.1,1,1]
  }),
  useRef()
  )  
  
  const targetPosition = useRef(5)
  const direction = useRef(1)

  useEffect(() => {
    const unsubscribe = position.subscribe((v) => {
      position.set(v[0], lerp(v[1], targetPosition.current, 0.1), v[2]) //lerp(from,to,speed)
    })
    return unsubscribe
  }, [])


  useFrame((_, delta) => {
    targetPosition.current += direction.current * delta * 2
    if (targetPosition.current > 4) direction.current = -1
    if (targetPosition.current < -2) direction.current = 1
  })

  return (
    <mesh ref={box} castShadow>
      <StreetVendorCart scale={[0.3,0.3,0.3]}/>
      <meshStandardMaterial/>
    </mesh>
  )
}