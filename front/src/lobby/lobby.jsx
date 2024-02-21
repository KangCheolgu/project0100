import {Container, Row, Col, Button, Modal, ModalHeader, ModalBody} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import io from "socket.io-client"
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import cookie from 'react-cookies';
import axios from "axios";
import styles from './lobby.module.css'
import directionkey from "../static/button/directionkey.png"

import Map1 from '../Map1/Map1';
import Map2 from '../Map2/Map2';
import { Canvas, useThree, extend, useFrame } from "@react-three/fiber";
import { OrbitControls, useProgress, Stats, PerspectiveCamera, CameraShake} from '@react-three/drei';
import { Physics, Debug } from "@react-three/cannon";
import * as THREE from 'three';
import Sand from '../Sand';
import { Background } from '../components/Background';
export const socket = io("http://localhost:5000/")

// export const socket = io("https://project0100.shop")

const CURRENT_URL = "http://localhost:5000"
// const CURRENT_URL = "https://project0100.shop"

export const LobbyPage = () => {
  const navigate = useNavigate()
  const [roomList, setRoomList] = useState([])

  const userEmail = cookie.load("userEmail")
  const userName = cookie.load("userName")
  // 일단 로그인시 얻게되는 id나 name 같은 걸 얻어서 가져오자
  // 그걸 조인 룸으로 보낸다. 일단 socket.id를 보냄
  const createRoom = () => {
    console.log("createRoom");
    const userData = {
      userEmail,
      userName,
      type:0
    }
    socket.emit("joinRoom", userData)
    navigate('/waitingroom');
  }

  //로그아웃시 쿠키 제거
  const logOut = () => {
    cookie.remove("userName");
    cookie.remove("userEmail");
    navigate("/")
  }

  // 방 리스트 누르면 방에 조인
  const joinRoom = (roomData) => {
    let sign
    // 방 클릭하면 해당 방에 조인
    socket.emit("joinRoom", roomData)
    // 이걸 누르면 방에 입장하는데,
    // 방에서 room을 받아서 인원을 하나하나 map 함

    socket.on("joinRoomSign",(message) => {
      sign = message
    })

    if(sign === "fail") {
      alert("정원이 초과되었습니다.")
    } else {
      navigate('/waitingroom');
    }

    return () => {
      socket.off("joinRoomSign")
    }
  }

  const spectateRoom = (roomData) => {

    let sign

    // 방 클릭하면 해당 방에 조인
    socket.emit("joinRoom", roomData)
    // 이걸 누르면 방에 입장하는데,
    // 방에서 room을 받아서 인원을 하나하나 map 함

    socket.on("joinRoomSign",(message) => {
      sign = message
    })

    if(sign === "fail") {
      alert("정원이 초과되었습니다.")
    } else {
      navigate('/waitingroom');
    }

    return () => {
      socket.off("joinRoomSign")
    }
  }
  // 기록이 작은 순으로 3개 가져옴
  // const getRankingList = async () => {
  //   try {
  //       const response = await axios.get(CURRENT_URL + '/api/database/getrankinglist');
  //       // 서버로부터 받은 랭킹 목록을 반환합니다.
  //       console.log("response");
  //       return response.data;
  //   } catch (error) {
  //       console.error('Error fetching ranking list:', error);
  //       return []; // 에러 발생 시 빈 배열 반환
  //   }
  // };

  useEffect(() => {
    // 받은 방 리스트
    socket.on("getRoomlist", (roomlist) => {
      const roomlistArray = Object.values(roomlist);
      setRoomList(roomlistArray)
    })

    return () => {  
      socket.off("getRoomlist")
    }

  },[roomList])

  useEffect(() => {
    // 처음에 렌더링 되면 방 리스트와 랭킹을 불러와서 나타냄
    socket.emit("roomlist")
    // getRankingList()
    // .then(rankingList => {
    //     console.log('Ranking list:', rankingList);
    //     // 여기서 랭킹 목록을 처리합니다.
    // });
  },[])

  const targetObject = new THREE.Object3D();
  targetObject.position.set(0, 0, -50);

  function Rig() {
    const [vec] = useState(() => new THREE.Vector3())
    const { camera, mouse } = useThree()
    useFrame(() => camera.position.lerp(vec.set(mouse.x * 2+20, 15, 30), 0.05))
    return <CameraShake maxYaw={0.01} maxPitch={0.01} maxRoll={0.01} yawFrequency={0.5} pitchFrequency={0.5} rollFrequency={0.4} />
  }

  return (<>
    <Container className={styles.lobby_container}>
      {/* 환영합니다. */}
      <Row className={styles.welcome}>
        <Col md="1"></Col>
        <Col>{userName} 님 환영합니다. &nbsp;&nbsp;&nbsp; 
          <Button onClick={logOut}>로그아웃</Button></Col>
        <Col md="1"></Col>
      </Row>
      {/* 겉에 큰 박스 */}
      <Row className={styles.lobby}>
        <Col>
          <Row className={styles.row1}>
            <Col className={styles.left_area}>
              <div className={styles.text}><h4>RANKING</h4></div>
              <div className={styles.ranking_area}>
              </div>
              <div className={styles.text}><h4>CONTROL</h4></div>
              <div className={styles.control_area}>

                <br/>
                <span className={styles.keyboard}>SPACE</span>
                 :&nbsp; 브레이크<br/><br/>
                <span className={styles.keyboard}>SHIFT</span>
                 :&nbsp;부스터<br/>
                 <br/>
                <span className={styles.keyboard}>H</span>
                 :&nbsp;빵빵<br/><br/>
                <span className={styles.keyboard}>R</span>
                :&nbsp;리셋<br/>
              </div>
              <img className={styles.key} src={directionkey} alt="directionkey" />
            </Col>
            <Col md="2"></Col>
            {/* 대기방 영역 */}
            <Col className={styles.right_area} >
              <div className={styles.text}><h4>ROOM</h4></div>
              <div className={styles.room_area}>
                <Col>
                  {
                    roomList ? roomList.map((room, index) => (
                      <Row className={styles.players_room} >
                        <Col>
                          <Button className={styles.join_btn}
                          onClick={() => joinRoom({
                            userEmail: room.roomName,
                            userName: userName,
                            type:0
                          })}
                          key={room.roomName}>
                            <span>{room.roomHost} 님의 방</span>
                          </Button>
                        </Col>
                        {/* <Col md="3" style={{height:"100%", padding:"0"}}>
                          <Button 
                            onClick={() => spectateRoom({
                              userEmail: room.roomName,
                              userName: userName,
                              type:1
                            })}
                            style={{width:"100%", height:"100%"}} 
                            key={room.roomName}>
                              <span style={{fontSize:"13px"}}>관전</span>
                          </Button>
                        </Col> */}
                      </Row>
                    )) : (
                      <Row style={{height:"50px", marginTop:"10px"}}>
                        <Col style={{height:"100%"}}>
                          현재 방이 없습니다!
                        </Col>
                      </Row>
                    )
                  }
                </Col>
              </div>
              <div className={styles.create_room_area}>
                <Button className={styles.create_room} onClick={createRoom}>
                    방 만들기
                  </Button>
              </div>
            </Col> 
          </Row>
        </Col>
      </Row>
    </Container>
    <Canvas style={{ position: 'absolute', top: 0, left: 0, zIndex: -1 }}>
    <color attach="background" args={["#abdbe3"]} />
    <PerspectiveCamera position={[20, 50, 30]} fov={75} makeDefault lookAt={targetObject} rotation={[-Math.PI/2, 0, Math.PI]}/>
    <ambientLight intensity={2} color="#fff7e6"/>
    <directionalLight
      castShadow
      targetObject ={targetObject}
      intensity={4}
      shadow-camera-top={30}
      shadow-camera-bottom={-60}
      shadow-camera-left={-120}
      shadow-camera-right={100}
      shadow-camera-far={100}
      shadow-mapSize-height={512*4}
      shadow-mapSize-width={512*4}
      position={[50, 80, -50]}
      color="#ffffff"
    />
    <Physics>
      <Sand/>
      <Map1 position={[0, 0, 0]}/>
      <Map2 position={[0, 0, -94]}/>
    </Physics>
    <Rig />
  </Canvas>
  </>
  )
}