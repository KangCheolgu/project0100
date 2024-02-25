import { useEffect, useMemo, useRef } from 'react'
import { useCompoundBody, useBox, useSphere, useCannon } from '@react-three/cannon'
import { useFrame } from '@react-three/fiber'
import { BoxGeometry, Vector3 } from 'three'
import { StreetVendorCart } from './StreetVendorCart'
import { PoliceCar } from './PoliceCar'
import { BananaCar } from './BananaCar'
import * as THREE from "three";
import { CarRed, CarGreen, MotorbikeYellow, MotorbikeOrange, MotorbikePizza } from './resort/Vehicles'
import { Crab } from './Crab'
import { BasketBall3 } from './BasketBall3'

function lerp(from, to, speed) {
  const r = (1 - speed) * from + speed * to
  return Math.abs(from - to) < 0.001 ? to : r
}
//////////// 회전 장애물 ///////////////////
export function SpinObstacle(props) {
  const position = props.position
  const offset = props.offset

  const [ref, api] = useCompoundBody(
    () => ({
      
      position: [position[0],position[1],position[2]],
      shapes: [
        { args: [0.6,1,1.7], position: [offset, 0, 0], type: 'Box' },
        
        { args: [0.6,1,1.7], position: [-offset, 0, 0], type: 'Box' }
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
      <MotorbikeOrange position={[offset, -0.5, 0]} rotation={[0,Math.PI,0]} castShadow receiveShadow/>
      <MotorbikePizza position={[-offset, -0.5,0]} castShadow receiveShadow/>
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

/////////////셔터 장애물 /////////////////////

export function ShutterObstacle(props) {
  const [ref, api] = useCompoundBody(
    () => ({
      
      position: [-3,1.5,-85],
      shapes: [
        { args: [0.5,0.5,6,5], position: [0, 0, 1.75], type: 'Box' },
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
    
    if(elapsedTime.current >= 1.4){
      isClockwise.current = !isClockwise.current //방향전환
      elapsedTime.current = 0 // 초기화
      isStopping.current = true // 정지시킴
    }

    //장애물 멈추면 
    if(isStopping.current){
      api.angularVelocity.set(0,0,0) // 잠깐 정지
      if(elapsedTime.current >= 1.38){
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

//////////// 빨간색 차 장애물 //////////////
export function CarRedObstacle(props){
  
  const position1 = props.position
  const offset = props.offset
  const rotation = props.rotation

  const [box, {position}] = useBox(()=>({
    mass: 0,
    position: [position1[0]+61.8, position1[1]+0.7, position1[2]-90],
    material: 'object',
    args: [1.5,1,3.5]
  }),
  useRef()
  )  
  
  const targetPosition = useRef(offset)
  const direction = useRef(1)

  useEffect(() => {
    const unsubscribe = position.subscribe((v) => {
      position.set(v[0], v[1], lerp(v[2], targetPosition.current, 0.4)) //lerp(from,to,speed)
    })
    return unsubscribe
  }, [])


  useFrame((_, delta) => {
    targetPosition.current += direction.current * delta * 5
    if (targetPosition.current > offset+40) direction.current = -1 //큰거 놓기
    if (targetPosition.current < offset-40) direction.current = 1 //작은거 놓기
  })

  return (
    <mesh ref={box} castShadow receiveShadow>
      <CarRed rotation={[rotation[0],rotation[1],rotation[2]]} position={[0,position1[1]-0.7,0]} castShadow receiveShadow/>
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
  
  const targetPosition = useRef(-120)
  const direction = useRef(1)

  useEffect(() => {
    const unsubscribe = position.subscribe((v) => {
      position.set(v[0], v[1], lerp(v[2], targetPosition.current, 0.006)) //lerp(from,to,speed)
    })
    return unsubscribe
  }, [])


  useFrame((_, delta) => {
    targetPosition.current += direction.current * delta * 5
    if (targetPosition.current > -35) direction.current = -1
    if (targetPosition.current < -125) direction.current = 1
  })

  return (
    <mesh ref={box} castShadow receiveShadow>
      <CarGreen position={[0,-0.7,0]} castShadow receiveShadow/>
      <meshStandardMaterial/>
    </mesh>
  )
}

//////////// 오토바이 골목막는 장애물 //////////////
export function MotorObstacle(props){
  
  const [box, {position}] = useBox(()=>({
    mass: 0,
    position: [6, 0.5, -90],
    material: 'object',
    args: [0.5,1,2]
  }),
  useRef()
  )  
  
  const targetPosition = useRef(-105)
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
    if (targetPosition.current > -95) direction.current = -1
    if (targetPosition.current < -106) direction.current = 1
  })

  return (
    <mesh ref={box} castShadow receiveShadow>
      <MotorbikeYellow position={[0,-0.4,0]}/>
      <meshStandardMaterial/>
    </mesh>
  )
}

//////////// 게 장애물 //////////////
export function CrabObstacle(props){
  const position1=props.position;
  const offset= props.offset;

  const [box, {position}] = useBox(()=>({
    mass: 0,
    position: [position1[0]+32, position1[1]-0.05, position1[2]-50],
    material: 'object',
    args: [1,2,1.5]
  }),
  useRef()
  )  
  
  const targetPosition = useRef(offset)
  const direction = useRef(1)

  useEffect(() => {
    const unsubscribe = position.subscribe((v) => {
      position.set(v[0], v[1], lerp(v[2], targetPosition.current, 0.06)) //lerp(from,to,speed)
    })
    return unsubscribe
  }, [])


  useFrame((_, delta) => {
    targetPosition.current += direction.current * delta * 5
    if (targetPosition.current > offset+4) direction.current = -1 //targetPosition 보다 큰거 넣기
    if (targetPosition.current < offset-4) direction.current = 1 //작은거 넣기
  })

  return (
    <mesh ref={box} castShadow receiveShadow>
      <Crab scale={0.1} position={[0,position1[1]-0.3,0]} rotation={[0,Math.PI,0]} castShadow receiveShadow/>
      <meshStandardMaterial/>
    </mesh>
  )
}

export function BasketballObstacle(){
  const [Ball1] = useSphere(() =>({
    mass: 1,
    args: [0.35],
    position: [11,1,-110]
  }))

  const [Ball2] = useSphere(() =>({
    mass: 1,
    args: [0.35],
    position: [9,1,-103]
  }))

  const [Ball3] = useSphere(() =>({
    mass: 1,
    args: [0.35],
    position: [11,1,-104]
  }))

  const [Ball4] = useSphere(() =>({
    mass: 1,
    args: [0.35],
    position: [13,1,-101]
  }))

  const [Ball5] = useSphere(() =>({
    mass: 1,
    args: [0.35],
    position: [15,1,-110]
  }))
  
  const [Ball6] = useSphere(() =>({
    mass: 1,
    args: [0.35],
    position: [13,1,-109]
  }))

  // const [Ball7] = useSphere(() =>({
  //   mass: 30,
  //   args: [0.35],
  //   position: [17,1,-107]
  // }))

  return (
    <>
    <mesh ref={Ball1}>
      <BasketBall3 scale={0.68} position={[0, 0, 0]} rotation={[Math.PI/2, Math.PI/4, Math.PI/2]}/>
      <meshStandardMaterial/>
    </mesh>
    <mesh ref={Ball2}>
    <BasketBall3 scale={0.68} position={[0, 0, 0]} rotation={[0, Math.PI/4, Math.PI/2]}/>
    <meshStandardMaterial/>
    </mesh>
    <mesh ref={Ball3} >
    <BasketBall3 scale={0.68} position={[0, 0, 0]} rotation={[Math.PI/4, Math.PI/2, 0]}/>
    <meshStandardMaterial/>
    </mesh>
    <mesh ref={Ball4}>
    <BasketBall3 scale={0.68} position={[0, 0, 0]} rotation={[0, Math.PI/2, 0]}/>
    <meshStandardMaterial/>
    </mesh>
    <mesh ref={Ball5}>
    <BasketBall3 scale={0.68} position={[0, 0, 0]}/>
    <meshStandardMaterial/>
    </mesh>
    <mesh ref={Ball6}>
    <BasketBall3 scale={0.68} position={[0, 0, 0]} rotation={[Math.PI/2, Math.PI/4, Math.PI/2]}/>
    <meshStandardMaterial/>
    </mesh>
    {/* <mesh ref={Ball7}>
    <BasketBall scale={1.5} position={[0,-0.05,0]}/>
    <meshStandardMaterial/>
    </mesh> */}
    </>

  )
}
