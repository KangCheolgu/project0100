import { useEffect, useMemo, useRef } from 'react'
import { useCompoundBody, useBox } from '@react-three/cannon'
import { useFrame } from '@react-three/fiber'
import { BoxGeometry, Vector3 } from 'three'
import { StreetVendorCart } from './StreetVendorCart'
import { PoliceCar } from './PoliceCar'
import { BananaCar } from './BananaCar'
import * as THREE from "three";

function lerp(from, to, speed) {
  const r = (1 - speed) * from + speed * to
  return Math.abs(from - to) < 0.001 ? to : r
}
//////////// 회전 장애물 ///////////////////
export function SpinObstacle(props) {
  const [ref, api] = useCompoundBody(
    () => ({
      
      position: [19,0.5,-4],
      shapes: [
        { args: [0.9,1,1.5], position: [1.75, 0, 0], type: 'Box' },
        
        { args: [0.6,1,1.4], position: [-1.75, 0, 0], type: 'Box' }
      ],
      type: 'Kinematic'
    }),

    useRef()
  )

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
//////////// 좌우로 장애물 //////////////
export function LeftAndRightObstacle(props){
  
  const [box, {position}] = useBox(()=>({
    mass: 0,
    position: [23, 0.7, -15],
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
    if (targetPosition.current > 28) direction.current = -1
    if (targetPosition.current < 18) direction.current = 1
  })

  return (
    <mesh ref={box} castShadow>
      <StreetVendorCart scale={[0.3,0.3,0.3]} position={[0, -0.1, 0]}/>
      <meshStandardMaterial/>
    </mesh>
  )
}
//////////////// 위아래 장애물 ////////////////////
export function UpDownObstacle(props){
  
  const [box, {position}] = useBox(()=>({
    mass: 0,
    position: [20, 0.5, -20],
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

/////////////셔터 장애물 /////////////////////

export function ShutterObstacle(props) {
  const [ref, api] = useCompoundBody(
    () => ({
      
      position: [0,1,-5],
      shapes: [
        { args: [0.3,0.3,3.5], position: [0, 0, 1.75], type: 'Box' },
      ],
      type: 'Kinematic',
      rotation: [Math.PI/2,0,Math.PI/2]
    }),

    useRef()
  )
  

  useEffect(() => {
    api.angularFactor.set(0, 0.5, 0.5) // causes the obstacles to remain upright in case of collision
    api.linearFactor.set(0, 0, 0) // locks it in place so it doesnt slide when bumped
  }, [api.angularFactor, api.linearFactor])

  useFrame((_, delta) => {
    api.angularVelocity.set(0, 0, 100*delta)
  })

  return (
    <mesh ref={ref} castShadow receiveShadow>
      {/* 가운데 기둥 */}
      <meshStandardMaterial />
    </mesh>
  )
}

//////////// 좌우로 장애물 //////////////
export function LeftRightObstacle(props){
  
  const [box, {position}] = useBox(()=>({
    mass: 0,
    position: [40, 0.7, -15],
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
    if (targetPosition.current > 45) direction.current = -1
    if (targetPosition.current < 36) direction.current = 1
  })

  return (
    <mesh ref={box} castShadow>
      <StreetVendorCart scale={[0.3,0.3,0.3]} position={[0, -0.1, 0]}/>
      <meshStandardMaterial/>
    </mesh>
  )
}

//////////// 회전 장애물 ///////////////////
export function CarObstacle(props) {
  const [ref, api] = useCompoundBody(
    () => ({
      position: [61.5,0.5,-70],
      shapes: [
        { args: [0.9,1,1.5], position: [0, 0, 0], type: 'Box' },
        //{ args: [0.6,1,1.4], position: [-1.75, 0, 0], type: 'Box' }
      ],
      type: 'Kinematic'
    }),
    useRef()
  )
  const anglePoint = useRef(0)
  useEffect(() => {
    api.angularFactor.set(0, 0.5, 0) // causes the obstacles to remain upright in case of collision
    api.linearFactor.set(0, 0, 0) // locks it in place so it doesnt slide when bumped
  }, [api.angularFactor, api.linearFactor])
  useFrame((_, delta) => {
    // const time = performance.now() * 0.001; // 초 단위로 변환
    // //console.log(time)
    // const angleZ = time * Math.PI * 2 * 0.05; // z 축 회전 속도, 적절히 조절하여 타원 모양을 만듦
    // const angleX = Math.sin(time * Math.PI * 2 * 0.05) * 10; // x 축 회전 각도, 타원 모양을 만듦
    // const x = 5 * Math.cos(angleX); // x 좌표 계산
    // const z = 40 * Math.sin(angleZ); // z 좌표 계산
    // api.position.set(55 + x, 0.5, - 30 +z); // 위치 업데이트
    // // 장애물이 회전하도록 각속도 설정
    anglePoint.current += delta +0.1
    api.velocity.set(0, 0, 0);
    //api.angularVelocity.set(0, 100*delta, 0)
  })
  return (
    <mesh ref={ref} castShadow receiveShadow>
      {/* 가운데 기둥 */}
      <meshStandardMaterial />
    </mesh>
  )
}