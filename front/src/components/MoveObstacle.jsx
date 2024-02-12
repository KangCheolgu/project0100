import { useEffect, useMemo, useRef } from 'react'
import { useCompoundBody, useBox, useSphere } from '@react-three/cannon'
import { useFrame } from '@react-three/fiber'
import { BoxGeometry, Vector3 } from 'three'
import { StreetVendorCart } from './StreetVendorCart'
import { PoliceCar } from './PoliceCar'
import { BananaCar } from './BananaCar'
import * as THREE from "three";
import { CarRed, CarGreen, MotorbikeYellow } from './resort/Vehicles'

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
      
      position: [63,0.5,-37],
      shapes: [
        { args: [2,0.3,3.5], position: [0, 0, 1.75], type: 'Box' },
      ],
      type: 'Kinematic',
      rotation: [-Math.PI/2,0,-Math.PI/2]
    }),

    useRef()
  )
  
  const isClockwise = useRef(true)
  const elapsedTime = useRef(0)
  const isStopping = useRef(false)
  const angularVelocity = useRef()

  useEffect(() => {
    api.angularFactor.set(0, 0.5, 0.5) // causes the obstacles to remain upright in case of collision
    api.linearFactor.set(0, 0, 0) // locks it in place so it doesnt slide when bumped
  }, [api.angularFactor, api.linearFactor])

  useFrame((_, delta) => {
    elapsedTime.current += delta
    //console.log(elapsedTime.current)
    
    if(elapsedTime.current >= 1.95){
      isClockwise.current = !isClockwise.current //방향전환
      elapsedTime.current = 0 // 초기화
      isStopping.current = true // 정지시킴
    }

    //장애물 멈추면 
    if(isStopping.current){
      api.angularVelocity.set(0,0,0) // 잠깐 정지
      if(elapsedTime.current >= 1.9){
        isStopping.current = false // 정지 종료
        elapsedTime.current = 0 // 초기화
      }
    } else{
      angularVelocity.current = isClockwise.current ? -100 : 100

      api.angularVelocity.set(0,0, angularVelocity.current * delta)
    }
  })

  return (
    <mesh ref={ref} castShadow receiveShadow>
      {/* 가운데 기둥 */}
      <meshStandardMaterial position={[0,-1,0]}/>
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

//////////////////// 울퉁불퉁 장애물 ////////////////////////
export function Bump(props){

  const [bump1] = useSphere(()=>({
    args: [0.7],
    position: [props.position[0],props.position[1],props.position[2]]
  })
  )

  const [bump2] = useSphere(()=>({
    args: [0.7],
    position: [props.position[0]+1,props.position[1],props.position[2]+1]
  })
  )

  const [bump3] = useSphere(()=>({
    args: [0.7],
    position: [props.position[0]-1,props.position[1],props.position[2]+1]
  })
  )

  const [bump4] = useSphere(()=>({
    args: [0.7],
    position: [props.position[0]-2,props.position[1],props.position[2]]
  })
  )

  const [bump5] = useSphere(()=>({
    args: [0.7],
    position: [props.position[0]+2,props.position[1],props.position[2]]
  })
  )

  const [bump6] = useSphere(()=>({
    args: [0.7],
    position: [props.position[0]-1,props.position[1],props.position[2]-1]
  })
  )

  const [bump7] = useSphere(()=>({
    args: [0.7],
    position: [props.position[0]+1,props.position[1],props.position[2]-1]
  })
  )

  const [bump8] = useSphere(()=>({
    args: [0.7],
    position: [props.position[0],props.position[1],props.position[2]-2]
  })
  )

  const [bump9] = useSphere(()=>({
    args: [0.7],
    position: [props.position[0],props.position[1],props.position[2]+2]
  })
  )

  const [bump10] = useSphere(()=>({
    args: [0.7],
    position: [props.position[0]+1,props.position[1],props.position[2]-3]
  })
  )
  const [bump11] = useSphere(()=>({
    args: [0.7],
    position: [props.position[0]+2,props.position[1],props.position[2]-2]
  })
  )
  const [bump12] = useSphere(()=>({
    args: [0.7],
    position: [props.position[0]-2,props.position[1],props.position[2]-2]
  })
  )
  const [bump13] = useSphere(()=>({
    args: [0.7],
    position: [props.position[0]-1,props.position[1],props.position[2]-3]
  })
  )
  const [bump14] = useSphere(()=>({
    args: [0.7],
    position: [props.position[0]+1,props.position[1],props.position[2]-3]
  })
  )
  const [bump15] = useSphere(()=>({
    args: [0.7],
    position: [props.position[0]+2,props.position[1],props.position[2]+2]
  })
  )
  const [bump16] = useSphere(()=>({
    args: [0.7],
    position: [props.position[0]-2,props.position[1],props.position[2]+2]
  })
  )
  const [bump17] = useSphere(()=>({
    args: [0.7],
    position: [props.position[0]-3,props.position[1],props.position[2]-3]
  })
  )
  const [bump18] = useSphere(()=>({
    args: [0.7],
    position: [props.position[0]+3,props.position[1],props.position[2]-3]
  })
  )
  const [bump19] = useSphere(()=>({
    args: [0.7],
    position: [props.position[0]+3,props.position[1],props.position[2]+1]
  })
  )
  const [bump20] = useSphere(()=>({
    args: [0.7],
    position: [props.position[0]+3,props.position[1],props.position[2]-1]
  })
  )
  const [bump21] = useSphere(()=>({
    args: [0.7],
    position: [props.position[0]-3,props.position[1],props.position[2]+1]
  })
  )
  const [bump22] = useSphere(()=>({
    args: [0.7],
    position: [props.position[0]-3,props.position[1],props.position[2]-1]
  })
  )

  return(
    <group>

    <mesh ref={bump1}>
    </mesh>
    <mesh ref={bump2}>
    </mesh>
    <mesh ref={bump3}>
    </mesh>
    <mesh ref={bump4}>
    </mesh>
    <mesh ref={bump5}>
    </mesh>
    <mesh ref={bump6}>
    </mesh>
    <mesh ref={bump7}>
    </mesh>
    <mesh ref={bump8}>
    </mesh>
    <mesh ref={bump9}>
    </mesh>
    <mesh ref={bump10}>
    </mesh>
    <mesh ref={bump11}>
    </mesh>
    <mesh ref={bump12}>
    </mesh>
    <mesh ref={bump13}>
    </mesh>
    <mesh ref={bump14}>
    </mesh>
    <mesh ref={bump15}>
    </mesh>
    <mesh ref={bump16}>
    </mesh>
    <mesh ref={bump17}>
    </mesh>
    <mesh ref={bump18}>
    </mesh>
    </group>
  )
}

//////////// 빨간색 차 장애물 //////////////
export function CarRedObstacle(props){
  
  const [box, {position}] = useBox(()=>({
    mass: 0,
    position: [61.8, 0.7, -90],
    material: 'object',
    args: [1.5,1,3.5]
  }),
  useRef()
  )  
  
  const targetPosition = useRef(-60)
  const direction = useRef(1)

  useEffect(() => {
    const unsubscribe = position.subscribe((v) => {
      position.set(v[0], v[1], lerp(v[2], targetPosition.current, 0.4)) //lerp(from,to,speed)
    })
    return unsubscribe
  }, [])


  useFrame((_, delta) => {
    targetPosition.current += direction.current * delta * 5
    if (targetPosition.current > -40) direction.current = -1
    if (targetPosition.current < -85) direction.current = 1
  })

  return (
    <mesh ref={box} castShadow>
      <CarRed rotation={[0,Math.PI,0]} position={[0,-0.7,0]}/>
      <meshStandardMaterial/>
    </mesh>
  )
}

//////////// 초록색 차 장애물 //////////////
export function CarGreenObstacle(props){
  
  const [box, {position}] = useBox(()=>({
    mass: 0,
    position: [58.7, 0.7, -90],
    material: 'object',
    args: [1.5,1,3.5]
  }),
  useRef()
  )  
  
  const targetPosition = useRef(-10)
  const direction = useRef(1)

  useEffect(() => {
    const unsubscribe = position.subscribe((v) => {
      position.set(v[0], v[1], lerp(v[2], targetPosition.current, 0.004)) //lerp(from,to,speed)
    })
    return unsubscribe
  }, [])


  useFrame((_, delta) => {
    targetPosition.current += direction.current * delta * 5
    if (targetPosition.current > -40) direction.current = -1
    if (targetPosition.current < -85) direction.current = 1
  })

  return (
    <mesh ref={box} castShadow>
      <CarGreen position={[0,-0.7,0]}/>
      <meshStandardMaterial/>
    </mesh>
  )
}

//////////// 오토바이 골목막는 장애물 //////////////
export function MotorObstacle(props){
  
  const [box, {position}] = useBox(()=>({
    mass: 0,
    position: [36, 0.5, -90],
    material: 'object',
    args: [0.5,1,2]
  }),
  useRef()
  )  
  
  const targetPosition = useRef(-95)
  const direction = useRef(1)

  useEffect(() => {
    const unsubscribe = position.subscribe((v) => {
      position.set(v[0], v[1], lerp(v[2], targetPosition.current, 0.008)) //lerp(from,to,speed)
    })
    return unsubscribe
  }, [])


  useFrame((_, delta) => {
    targetPosition.current += direction.current * delta * 5
    //console.log(targetPosition.current)
    if (targetPosition.current > -89) direction.current = -1
    if (targetPosition.current < -103) direction.current = 1
  })

  return (
    <mesh ref={box} castShadow>
      <MotorbikeYellow position={[0,-0.5,0]}/>
      <meshStandardMaterial/>
    </mesh>
  )
}

//////////// 게 장애물 ///////////////////
export function CrabObstacle(props) {
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