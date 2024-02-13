import {Container, Row, Col, Button} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { socket } from './lobby';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import cookie from 'react-cookies';

function RoomPage() {

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

  return (
    <Container style={{marginTop:"30px"}}>
      <Row style={{textAlign:"center"}}>
        <Col></Col>  
        <Col md="10" style={{fontSize:"50px"}}> {currentRoomHost}님 의 방</Col>  
        <Col></Col>  
      </Row>
      <br />
      <Row style={{textAlign:"center"}}>
        <Col></Col>  
        <Col md="8" style={{border:"solid 1px", padding:"50px 80px 50px 80px"}}>
          <Row style={{height:"300px"}}>
            <Col style={{height:"100%", border:"1px solid", borderRadius:"10px"}}>
              <Row>
                <Col style={{fontSize:"30px", backgroundColor:"#e2e2e2", borderRadius:"10px 10px 0px 0px", borderTopRightRadius:"10px"}}>
                  참가자
                </Col>
              </Row>
              {
                players && players.map((player, index) => (
                  <Row key={index}>
                    <Col style={{fontSize:"30px", backgroundColor:"#e2e2e2", border:"1px solid", margin:"10px 10px 0px 10px"}}>
                      {player.name ? player.name : "Guest"}
                    </Col>
                  </Row> 
                ))
              }
            </Col>
            <Col md="1"></Col>
            <Col style={{height:"100%", border:"1px solid", borderRadius:"10px"}}>
              <Row>
                <Col style={{fontSize:"30px", backgroundColor:"#e2e2e2", borderRadius:"10px 10px 0px 0px", borderTopRightRadius:"10px"}}>
                  관전자
                </Col>
              </Row>
              {
                spectators && spectators.map((spectator, index) => (
                  <Row key={index}>
                    <Col style={{fontSize:"30px", backgroundColor:"#e2e2e2", border:"1px solid", margin:"10px 10px 0px 10px"}}>
                      {spectator.name ? spectator.name : "Guest"}
                    </Col>
                  </Row> 
                ))
              }
            </Col>
          </Row>
          <Row style={{marginTop:"20px"}}>
            <Col>
              <Button onClick={startGameInRoom} style={{width:"100%", height:"100px", fontSize:"40px"}}>GAME START</Button> 
            </Col>
          </Row>
          <Row style={{marginTop:"20px"}}>
            <Col>
              <Button onClick={exitRoom} style={{width:"50%", height:"50px", fontSize:"20px"}}>나가기</Button> 
            </Col>
          </Row>
        </Col>  
        <Col></Col>  
      </Row>
    </Container>
  )
}

export default RoomPage;
