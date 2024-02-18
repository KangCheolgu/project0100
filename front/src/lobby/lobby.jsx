import {Container, Row, Col, Button, Modal, ModalHeader, ModalBody} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import io from "socket.io-client"
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import cookie from 'react-cookies';
import axios from "axios";

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
  const getRankingList = async () => {
    try {
        const response = await axios.get(CURRENT_URL + '/api/database/getrankinglist');
        // 서버로부터 받은 랭킹 목록을 반환합니다.
        console.log("response");
        return response.data;
    } catch (error) {
        console.error('Error fetching ranking list:', error);
        return []; // 에러 발생 시 빈 배열 반환
    }
  };

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
    getRankingList()
    .then(rankingList => {
        console.log('Ranking list:', rankingList);
        // 여기서 랭킹 목록을 처리합니다.
    });
  },[])

  return (
    <Container style={{marginTop:"30px"}}>
      <Row style={{textAlign:"center"}}>
        <Col></Col>  
        <Col md="10" style={{fontSize:"70px"}}>L O B B Y</Col>  
        <Col></Col>  
      </Row>
      <Row style={{fontSize:"20px", marginBottom:"12px"}}>
        <Col md="2"></Col>
        <Col style={{textAlign:"right"}}>{userName} 님 환영합니다. &nbsp;&nbsp;&nbsp; 
          <Button onClick={logOut}>로그아웃</Button></Col>
        <Col md="2"></Col>
      </Row>
      <Row style={{textAlign:"center"}}>
        <Col></Col>  
        <Col md="8" style={{border:"solid 1px",borderRadius:"10px", padding:"30px 60px 30px 60px"}}>
          <Row style={{height:"400px"}}>
            <Col style={{height:"100%"}}>
              <Row style={{height:"320px", border:"1px solid"}}>
                <Col style={{fontSize:"20px"}}>
                  Top Ranking
                </Col>
              </Row>
              <Row>
                <Col>
                  <Button onClick={createRoom} style={{width:"100%", height:"100%", fontSize:"30px", marginTop:"10px"}}>
                    Create Room
                  </Button>
                </Col>
              </Row>
            </Col>
            <Col md="1"></Col>
            <Col md="5" style={{border:"solid 1px", fontSize:"30px", padding:" 0px 0px 10px 20px", overflowY:"scroll"}}>
              <Row style={{height:"380px",width:"100%"}}>
                <Col>
                  {
                    roomList ? roomList.map((room, index) => (
                      <Row style={{height:"50px", marginTop:"10px"}}>
                        <Col style={{height:"100%", padding:"0"}}>
                          <Button 
                          onClick={() => joinRoom({
                            userEmail: room.roomName,
                            userName: userName,
                            type:0
                          })}
                          style={{width:"100%", height:"100%"}} 
                          key={room.roomName}>
                            <span>{room.roomHost} 님의 방</span>
                          </Button>
                        </Col>
                        <Col md="3" style={{height:"100%", padding:"0"}}>
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
                        </Col>
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
              </Row>
            </Col> 
          </Row>
        </Col>  
        <Col></Col>  
      </Row>
    </Container>
  )
}