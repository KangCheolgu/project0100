import {Container, Row, Col, Button} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const CURRENT_URL = "http://localhost:5000"
// const CURRENT_URL = "https://project0100.shop:5000"

function LoginPage() {
  const navigate = useNavigate();

  const signInWithGoogle = () => {
    window.open(CURRENT_URL + "/auth/google", "_self", 'toolbar=no, scrollbars=yes, resizable=no, width=1000, height=auto')
  }
  const signInWithNaver = () => {
    window.open(CURRENT_URL + "/auth/naver", "_self", 'toolbar=no, scrollbars=yes, resizable=no, width=1000, height=auto')
  }
  const signInWithKakao = () => {
    window.open(CURRENT_URL + "/auth/kakao", "_self", 'toolbar=no, scrollbars=yes, resizable=no, width=1000, height=auto')
  }

  return (
    <Container>
      <Row style={{textAlign:"center"}} >
        <Col style={{ fontSize:"160px"}}>제로백</Col>
      </Row>
      <Row style={{textAlign:"center", height:"250px", }}>
        <Col></Col>
        <Col md="5" style={{border:"1px solid", borderRadius:"10px", padding:"30px"}}>
          <Row>
            <Col>접속하세요!</Col>
          </Row>
          <Row style={{marginTop:"10px"}}>
            <Col></Col>
            <Col md="7"><Button onClick={signInWithGoogle} style={{width:"100%"}} >구글 로그인</Button></Col>
            <Col></Col>
          </Row>
          <Row style={{marginTop:"10px"}}>
            <Col></Col>
            <Col md="7"><Button style={{width:"100%"}}>카카오 로그인</Button></Col>
            <Col></Col>
          </Row>
          <Row style={{marginTop:"10px"}}>
            <Col></Col>
            <Col md="7"><Button style={{width:"100%"}}>네이버 로그인</Button></Col>
            <Col></Col>
          </Row>
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
}

export default LoginPage;
