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
import { Rock } from './Rock'
import { RockLarge } from './RockLarge'

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
      
      position: [57,1.2,-37],
      shapes: [
        { args: [2,0.3,5], position: [0, 0, 1.75], type: 'Box' },
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
    <mesh ref={bump19}>
    </mesh>
    <mesh ref={bump20}>
    </mesh>
    <mesh ref={bump21}>
    </mesh>
    <mesh ref={bump22}>
    </mesh>

    </group>
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
    <mesh ref={box} castShadow receiveShadow>
      <MotorbikeYellow position={[0,-0.5,0]}/>
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

export function Brick(){
  const [Box1, api1] = useBox(() =>({
    mass: 1,
    args: [0.5,0.5,0.8],
    position: [50,0.3,-15]
  }))
  const [Box2, api2] = useBox(() =>({
    mass: 1,
    args: [0.5,0.5,0.8],
    position: [50,0.3,-16]
  }))
  const [Box3, api3] = useBox(() =>({
    mass: 1,
    args: [0.5,0.5,0.8],
    position: [50,0.3,-14]
  }))
  // const [Box4, api4] = useBox(() =>({
  //   mass: 1,
  //   args: [0.5,0.5,0.8],
  //   position: [50,1,-15]
  // }))
  // const [Box5, api5] = useBox(() =>({
  //   mass: 1,
  //   args: [0.5,0.5,0.8],
  //   position: [50,1,-15]
  // }))
  // const [Box6, api6] = useBox(() =>({
  //   mass: 1,
  //   args: [0.5,0.5,0.8],
  //   position: [50,1,-15]
  // }))
  // const [Box7, api7] = useBox(() =>({
  //   mass: 1,
  //   args: [0.5,0.5,0.8],
  //   position: [50,1,-15]
  // }))
  // const [Box8, api8] = useBox(() =>({
  //   mass: 1,
  //   args: [0.5,0.5,0.8],
  //   position: [50,1,-15]
  // }))
  // const [Box9, api9] = useBox(() =>({
  //   mass: 1,
  //   args: [0.5,0.5,0.8],
  //   position: [50,1,-15]
  // }))

  // useEffect(()=>{
  //   api1.applyImpulse([-3,0,0], [0,0,1]) //0,0,0의 지점에 0,0,-5라는 힘을 주겠다.
  // })
  
  return(
    <mesh ref={Box1}>
      <meshStandardMaterial/>
    </mesh>
  )
}