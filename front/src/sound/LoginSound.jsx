import { Howl } from 'howler';
import lobbyBackgroundMusic from './bgm/login_bgm.mp3';
import { useEffect, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const LoginBgmSound = () => {
    const bgmRef = useRef(null);
    const location = useLocation();
    const navigate = useNavigate();
    
    useEffect(() => {
        const LobbyBGMEffect = new Howl({
            src: [lobbyBackgroundMusic],
            volume: 0.1,
            loop: true,
            autoplay: true
        });

        bgmRef.current = LobbyBGMEffect;

        // 배경 음악이 현재 재생 중이 아닌 경우에만 재생합니다.
        if (!bgmRef.current.playing() && location.pathname === '/login') {
            // console.log("노래재생");
            LobbyBGMEffect.play();
        }

        return () => {
            // '/gameroom'으로 이동할 때 배경 음악을 중지합니다.
            if (location.pathname !== '/login' && bgmRef.current) {
                // console.log("노래종료");
                bgmRef.current.stop();
            }
        };
    
    }, [location.pathname, navigate]);

    return null; // 이 컴포넌트는 UI를 렌더링하지 않습니다.
}

export default LoginBgmSound;