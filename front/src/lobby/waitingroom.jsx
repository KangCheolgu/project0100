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
import Light from "../Light.jsx";
import SvgIcon from "@mui/material/SvgIcon";
import SportsScoreIcon from '@mui/icons-material/SportsScore';

function Flag(props){
  return (
    <SvgIcon component={SportsScoreIcon} inheritViewBox/>
  )
}
function ProfileCard(props, cnt) {
  const name = props.name
  const isHost=["Host", "Player"]
  return (
    <Card
      sx={{
        width: 320,
        maxWidth: '100%',
        boxShadow: 'lg',
      }}
      style={{ backgroundColor: "white" }}
    >
      <img src="/assets/images/flag3.png" style={{position:"absolute", width:"100px", height:"100px", transform: "translateX(-10px) rotate(-45deg) scaleX(-1)"}}/>
      <img src="/assets/images/flag3.png" style={{position:"absolute", width:"100px", height:"100px", transform: "translateX(200px) rotate(45deg)"}}/>
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
        
        <Typography style={{ fontSize: "2.5rem" }}>{name}</Typography>
        
        
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
    <Container style={{marginTop:"100px"}}>
      <Row style={{textAlign:"center"}}>
        <Col></Col>  
        
        <Col md="8" style={{ backgroundColor:"rgba(255, 255, 255, 0.5)", padding:"50px 80px 50px 80px"} }>
          <Row>
            <Typography style={{ fontSize: "3rem", marginBottom:"30px" }}>Wating Room</Typography>
          </Row>
          <Row style={{height:"230px"}}>
            <Col>
              <Row>
                {
                players && players.map((player, index) => (
                    <Col >
                      <ProfileCard name={player.name?player.name:"Guest"} cnt={index}/>
                    </Col>
                ))
                }
              </Row>
            </Col>
          </Row>
          <Row style={{marginTop:"20px"}}>
            <Col style={{height:"100px"}}>
              
              <Button className="btn"
                onClick={(e) => {e.currentTarget.style.marginTop = "15px"; e.currentTarget.style.marginBottom="5px"; e.currentTarget.style.boxShadow="0px 0px 0px 0px";  startGameInRoom();}}
                sx={{fontFamily: 'CookieRun_Black, sans-serif'}}
                style={{width:"100%", height:"100px", fontSize:"40px", 
                boxShadow: "7px 7px 0px 2px #01939A",  transition: "all 0.2s", 
                fontSize:"3.5rem", 
                textShadow: "-3px 0px black, 0px 3px black, 3px 0px black, 0px -3px black",
                backgroundColor: "#5DC8CD"
                }}>{/*#FFD400  #FFF0A6 #000080*/}
                  GAME START</Button>
            </Col>
          </Row>
          <Row style={{marginTop:"20px"}}>
            <Col>
              {/*<Button onClick={exitRoom} style={{width:"50%", height:"50px", fontSize:"20px"}}>나가기</Button>*/} 
            </Col>
          </Row>
        </Col>  
        <Col></Col>  
            </Row>
    </Container>
    <Canvas style={{ position: 'absolute', top: 0, left: 0, zIndex: -1 }}>
      <color attach="background" args={["#abdbe3"]} />
      <PerspectiveCamera position={[20, 50, 30]} fov={75} makeDefault lookAt={targetObject} rotation={[-Math.PI/2, 0, Math.PI]}/>
      <ambientLight intensity={2} color="#fff7e6"/>
      <Light/>
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
