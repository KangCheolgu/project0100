import {Container, Row, Col, Button} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import googleButton from "../static/button/google_button.png"
import naverButton from "../static/button/naver_button.png"
import kakaoButton from "../static/button/kakao_button.png"

const CURRENT_URL = "http://localhost:5000"
// const CURRENT_URL = "https://project0100.shop"

function LoginPage() {
  const navigate = useNavigate();

  const signInWithGoogle = () => {
    window.open(CURRENT_URL + "/api/auth/google", "_self", 'toolbar=no, scrollbars=yes, resizable=no, width=1000, height=auto')
  }
  const signInWithNaver = () => {
    window.open(CURRENT_URL + "/api/auth/naver", "_self", 'toolbar=no, scrollbars=yes, resizable=no, width=1000, height=auto')
  }
  const signInWithKakao = () => {
    window.open(CURRENT_URL + "/api/auth/kakao", "_self", 'toolbar=no, scrollbars=yes, resizable=no, width=1000, height=auto')
  }

  return (
    <Container>
      <Row style={{textAlign:"center"}} >
        <Col style={{ fontSize:"160px"}}>제로백</Col>
      </Row>
      <Row style={{textAlign:"center", height:"250px", }}>
        <Col></Col>
        <Col md="5" style={{border:"1px solid", borderRadius:"10px", padding:"10px"}}>
          <Row style={{marginTop:"10px"}}>
            <Col style={{fontSize:"30px"}}>지금 바로 접속하세요!</Col>
          </Row>
          <Row style={{marginTop:"40px"}}>
            <Col md="2"></Col>
            <Col>
              <Button onClick={signInWithGoogle} style={{width:"100%", backgroundColor:"white", border:"none", padding:"0"}}>
                <img src={googleButton} typeof='button' style={{ width: '100%', height: 'auto'}} alt="google button Img"/>
              </Button>
            </Col>
            <Col md="2"></Col>
            <Col>
              <Button onClick={signInWithNaver} style={{width:"100%", backgroundColor:"white", border:"none", padding:"0"}}>
                <img src={naverButton} typeof='button' style={{ width: '100%', height: 'auto'}} alt="google button Img"/>
              </Button>
            </Col>
            <Col md="2"></Col> 
            {/* <Col>
              <Button onClick={signInWithKakao} style={{width:"100%", backgroundColor:"white", border:"none", padding:"0"}}>
                <img src={kakaoButton} typeof='button' style={{ width: '100%', height: 'auto'}} alt="google button Img"/>
              </Button>
            </Col>
            <Col md="1"></Col> */}
          </Row>
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
}

export default LoginPage;
