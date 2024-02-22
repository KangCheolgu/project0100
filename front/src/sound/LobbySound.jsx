import { Howl } from 'howler';
import lobbyBackgroundMusic from './bgm/lobby_bgm.mp3';
import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LobbyBgmSound = () => {
    // 오디오 파일 경로 설정
    // const sound = new Howl({
    //     src: ['sound.mp3', 'sound.ogg'], // 지원하는 형식으로 여러 파일을 제공할 수 있습니다.
    //     volume: 0.5, // 오디오 볼륨 설정 (0.0 ~ 1.0)
    //     loop: true, // 오디오 반복 재생 여부
    //     autoplay: true // 자동 재생 여부
    // });
    const bgmRef = useRef(null); // Howler 인스턴스를 저장할 useRef
    const navigate = useNavigate();
    
    useEffect(() => {
        // console.log(window.location.pathname);
        // 오디오 파일 경로
        const BGMEffect = new Howl({
            src: [lobbyBackgroundMusic],
            loop: true, // 오디오 반복 재생 여부
            autoplay: true, // 자동 재생 여부
            volume: 0.1,
            onplay: false,
        });

        bgmRef.current = BGMEffect; // Howler 인스턴스 저장

        if (navigate && window.location.pathname === '/lobby' && bgmRef.current.onplay === false ) {
            BGMEffect.play();
            bgmRef.current.onplay = true
        }

        return () => {
            if (window.location.pathname !== '/lobby') {
                // console.log(window.location.pathname);
                bgmRef.current.stop();
            }
        };
      }, []);
}

export default LobbyBgmSound;



