import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Scene from './Scene';
import { KeyboardControls } from '@react-three/drei';
import { BrowserRouter, Route, Routes } from "react-router-dom";

import LoginPage from './lobby/login';
import GamePage from './GamePage';
import { LobbyPage } from './lobby/lobby';
import RoomPage from './lobby/waitingroom';
import AuthGoogle from './lobby/authgoogle';
import AuthNaver from './lobby/authnaver';
import LobbyBgmSound from './sound/LobbySound';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/lobby" element={<LobbyPage />} />
      <Route path="/waitingroom" element={<RoomPage />} />
      <Route path="/gameroom" element={<GamePage />} /> 
      <Route path="/auth/google/redirect" element={<AuthGoogle />} /> 
      <Route path="/auth/naver/redirect" element={<AuthNaver />} /> 
    </Routes>
  </BrowserRouter>
  </>
);