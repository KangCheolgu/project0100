import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Scene from './Scene';
import { KeyboardControls } from '@react-three/drei';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <KeyboardControls
        map={[
          {name: 'forward', keys:['ArrowUp', 'KeyW']},
          {name: 'backward', keys:['ArrowDown', 'KeyS']},
          {name: 'leftward', keys:['ArrowLeft', 'KeyA']},
          {name: 'rightward', keys:['ArrowRight', 'KeyD']},
          {name: 'jump', keys:['Space']}
        ] }
    >
      <Scene />
    </KeyboardControls>
  </React.StrictMode>
);
