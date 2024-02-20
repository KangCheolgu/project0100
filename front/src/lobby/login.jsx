import {Container, Row, Col, Button} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import googleButton from "../static/button/googlelogo.png"
import naverButton from "../static/button/naverlogo.png"
import styles from './login.module.css'

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
      <Row className={styles.title} >
        <Col className={styles.title_text}>0100</Col>
      </Row>
      <Row className={styles.center}>
        <Col></Col>
        <Col md="5" className={styles.inside_contents}>
          <Row className={styles.center_text}>
            <Col>로그인하여 게임 시작</Col>
          </Row>
          <Row className={styles.login_area}>
            <Col md="2"></Col>
            <Col>
              <div>
              <button className={styles.google_btn} onClick={signInWithGoogle}>
                <img src={googleButton} typeof='button' alt="google button Img" width={25} height={25}/>
                <span>Google 로그인</span>
              </button>
              </div>
            </Col>
            <Col md="2"></Col>
            <Col>
              <div>
              <button className={styles.naver_btn} onClick={signInWithNaver}>
                <img src={naverButton} typeof='button' alt="naver button Img" width={30} height={30}/>
                <span>네이버 로그인</span>
              </button>
              </div>

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
