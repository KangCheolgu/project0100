import {Container, Row, Col} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { socket } from './lobby';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import cookie from 'react-cookies';
import * as React from 'react';
import Avatar from '@mui/joy/Avatar';
import Chip from '@mui/joy/Chip';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import ButtonGroup from '@mui/joy/ButtonGroup';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import Map1 from '../Map1/Map1';
import Map2 from '../Map2/Map2';
import { Canvas, useThree, extend, useFrame } from "@react-three/fiber";
import { OrbitControls, useProgress, Stats, PerspectiveCamera, CameraShake, Html } from '@react-three/drei';
import { Physics, Debug } from "@react-three/cannon";
import * as THREE from 'three';
import Sand from '../Sand';
import styles from './waitingroom.module.css'

function ProfileCard(props, cnt) {
  const name = props.name
  const isHost=["Host", "Player"]
  return (
    <Card
      sx={{
        width: 200,
        boxShadow: 'lg',
      }}
      style={{ backgroundColor: "white" }}
    >
      <img src="/assets/images/flag3.png" style={{position:"absolute", width:"80px", height:"80px", transform: "translateX(-40px) translateY(-20px) rotate(-45deg) scaleX(-1)"}}/>
      <CardContent sx={{ alignItems: 'center', textAlign: 'center'}}>
        <Avatar src="/static/images/avatar/1.jpg" sx={{ '--Avatar-size': '6rem' }} />
        <Chip
          size="sm"
          variant="soft"
          color="primary"
          sx={{
            mt: -1,
            mb: 1,
            border: '3px solid',
            borderColor: 'background.surface',
          }}
        >{cnt?"Player":"Host"}</Chip>
        
        <Typography style={{ fontSize: "1.5rem" }}>{name}</Typography>
        
        
      </CardContent>
    </Card>
  );
}

export default function RoomPage() {

  const navigate = useNavigate();
  const [players, setPlayers] = useState([])
  const [spectators, setSpectators] = useState([])
  const [currentRoomName, setCurrentRoomName] = useState("");
  const [currentRoomHost, setCurrentRoomHost] = useState("");

  const exitRoom = () => {
    //방장일시
    if(currentRoomName === cookie.load("userEmail")){
      socket.emit("hostLeft", currentRoomName)
    } else {
      //아닐시
      socket.emit("leaveRoom", currentRoomName)
    }
    navigate('/lobby')
  }

  // GameStart 버튼을 누르면 게임 시작
  const startGameInRoom = () => {
    socket.emit("startGameInRoom")
  }

  useEffect(() => {

    //게임 사인을 받으면 게임 페이지로 이동한다.
    socket.on("startGameSignInRoom", () => {
      navigate('/gameroom')
    })

    return () => {
      socket.off("startGameSignInRoom")
    }
 
  },[])

  useEffect(() => {
    // 방장이 나가면 삭제명령을 받는다
    socket.on("leftCommand", () => {
      navigate('/lobby')
    })

    return () => {
      socket.off("leftCommand")
    }
  })

  useEffect(() => {
    // 처음 렌더링될 때 방 정보 받고 설정
    socket.emit("getRoomData");
  }, []);

  useEffect(() => {
    socket.emit("getRoomData")

    // 방에 들어오면 유저 목록을 요청, 유저 목록이 바뀌어도 바뀜
    socket.on("updateRoomData", (roomData) => {
      setPlayers(roomData.players)
      setSpectators(roomData.spectators)
      setCurrentRoomHost(roomData.roomHost)
      setCurrentRoomName(roomData.roomName)
    })

    return () => {
      // 컴포넌트가 언마운트될 때 이벤트 리스너를 제거합니다.
      socket.off("updateRoomData");
    };

  },[currentRoomHost, currentRoomName, players, spectators]) 

  const targetObject = new THREE.Object3D();
  targetObject.position.set(0, 0, -50);
  
  function Rig() {
    const [vec] = useState(() => new THREE.Vector3())
    const { camera, mouse } = useThree()
    useFrame(() => camera.position.lerp(vec.set(mouse.x * 2+20, 15, 30), 0.05))
    return <CameraShake maxYaw={0.01} maxPitch={0.01} maxRoll={0.01} yawFrequency={0.5} pitchFrequency={0.5} rollFrequency={0.4} />
  }
  
  return (<>
    <Container className={styles.container}>
      <div className={styles.neon}>V </div>
      <div className={styles.flux}>S </div>
      <Row style={{textAlign:"center"}}>
        <Col></Col>  
        
        <Col md="8" className={styles.mainBox}>
          <Row className={styles.title}>
            <div class={styles.titleContext}>Waiting Room</div>
          </Row>
          <Row style={{height:"230px"}}>
            <Col style={{display:"flex", justifyContent: "center"}}>
              <Row>
                {
                players && players.map((player, index) => (
                    <Col style={{marginLeft:"40px", marginRight:"40px"}}>
                      <ProfileCard name={player.name?player.name:"Guest"} cnt={index}/>
                    </Col>
                ))
                }
              </Row>
            </Col>
          </Row>
          <Row style={{marginTop:"20px"}}>
            <Col>
              
              <button className={styles.btn}
                onClick={(e) => {startGameInRoom();}}
                sx={{fontFamily: 'CookieRun_Black, sans-serif'}}>
                <span>GAME START</span></button>
            </Col>
          </Row>
          {/*<Row>
            <Col>
              <Button onClick={exitRoom} style={{width:"50%", height:"50px", fontSize:"20px"}}>나가기</Button> 
            </Col>
          </Row>*/}
        </Col>  
        <Col></Col>  
      </Row>
    </Container>
  </>
  )
}
