import {Container, Row, Col, Button} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import { useState} from 'react';
import { useNavigate } from 'react-router-dom';
import googleButton from "../static/button/google_button.png"
import naverButton from "../static/button/naver_button.png"
import kakaoButton from "../static/button/kakao_button.png"
import Map1 from '../Map1/Map1';
import Map2 from '../Map2/Map2';
import { Canvas, useThree, extend, useFrame } from "@react-three/fiber";
import { OrbitControls, useProgress, Stats, PerspectiveCamera, CameraShake} from '@react-three/drei';
import { Physics, Debug } from "@react-three/cannon";
import * as THREE from 'three';
import Sand from '../Sand';
import { Background } from '../components/Background';
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

  const targetObject = new THREE.Object3D();
  targetObject.position.set(0, 0, -50);

  function Rig() {
    const [vec] = useState(() => new THREE.Vector3())
    const { camera, mouse } = useThree()
    useFrame(() => camera.position.lerp(vec.set(mouse.x * 2+20, 15, 30), 0.05))
    return <CameraShake maxYaw={0.01} maxPitch={0.01} maxRoll={0.01} yawFrequency={0.5} pitchFrequency={0.5} rollFrequency={0.4} />
  }

  return (<>
  <Container style={{ position: 'relative' }}>
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
  );
}

export default LoginPage;
