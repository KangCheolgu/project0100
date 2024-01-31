import * as THREE from 'three'
import {useBox} from '@react-three/cannon'
import ColliderBox from '../ColliderBox'
import React, {useEffect, useRef} from 'react'
import { TextureLoader } from 'three'
import { BookShelf } from './BookShelf'
import {WallWindow} from './WallWindow'

export function QuestionObstacle(props){
  // const boxGeometry = new THREE.BoxGeometry(1, 1, 1)
  // const obstacleMaterial = new THREE.MeshStandardMaterial({color: 'orangered'})
  const texture = new TextureLoader().load('../assets/images/questionmark.png')
  
  //x = 1, y=1, z=1 

  //뚫려있는 물음표
  const [real] = useBox(()=>({
    mass: 0,
    position: [props.position[0]+1, props.position[1]-0.1, -(props.position[2]+1)],
    scale: [1, 1, 2],
    collisionFilterGroup: 0,
  }))

  //막혀있는 물음표
  const [trick] = useBox(()=>({
    mass: 700,
    args: [2.5, 1.8, 2.5],
    position: [props.position[0]+1,props.position[1]-0.1, props.position[2]+1],
    scale: [0, 0, 0],
    
  }))


  return <>
    {/* 뚫린 물음표 */}
    <mesh ref={real} scale={[2.5, 1.8, 2.5]}>
      <boxGeometry/>
      <meshStandardMaterial map={texture}/>
    </mesh>
    {/* 막혀있는 물음표 */}
    <mesh ref={trick} scale={[2.5,1.8,2.5]}>
      <boxGeometry/>
      <meshStandardMaterial map={texture}/>
    </mesh>
    {/* 책장 */}
    <BookShelf position={[props.position[0]+0.8,props.position[1],-(props.position[2]-1)]} scale={[0.28, 0.5, 2]} rotation={[0, Math.PI/2, 0]}/>
    <ColliderBox position={[props.position[0]+0.8,props.position[1],-(props.position[2]-1)]} scale={[2, 3, 1.4]}/>
    {/* 물음표 위 창벽 */}
    <WallWindow position={[props.position[0]+0.1, props.position[1]+0.8, props.position[2]+1]} scale={[1.3, 0.3, 8]} rotation={[0, -Math.PI/2, 0]}/>
    <WallWindow position={[props.position[0]+0.1, props.position[1]+0.8, -(props.position[2]+1)]} scale={[1.3, 0.3, 8]} rotation={[0, -Math.PI/2, 0]}/>
    
  </>
}