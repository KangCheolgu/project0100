import { Howl, Howler } from 'howler';
import button from './button/button1.mp3'
import { useEffect } from 'react';

const ButtonSound = () => {
 useEffect(() => {
        // 오디오 파일 경로
        const sound = new Howl({
            src: [button],
            loop: false, // 오디오 반복 재생 여부
            autoplay: true // 자동 재생 여부
        });
    
        // 오디오 재생
        sound.play();

        return () => {
            sound.unload();
        };
    
      }, []);
}

export default ButtonSound;

