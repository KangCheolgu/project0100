import { Howl, Howler } from 'howler';
import Start from './countdown/StartSoundEffect.mp3'
import { useEffect } from 'react';

const StartSound = () => {
    // 오디오 파일 경로 설정
    // const sound = new Howl({
    //     src: ['sound.mp3', 'sound.ogg'], // 지원하는 형식으로 여러 파일을 제공할 수 있습니다.
    //     volume: 0.5, // 오디오 볼륨 설정 (0.0 ~ 1.0)
    //     loop: true, // 오디오 반복 재생 여부
    //     autoplay: true // 자동 재생 여부
    // });

    useEffect(() => {
        // 오디오 파일 경로
        const startSound = new Howl({
            src: [Start],
            loop: false, // 오디오 반복 재생 여부
            autoplay: true // 자동 재생 여부
        });
    
        // 오디오 재생
        startSound.play();

        return () => {
            startSound.unload();
        };
    
      }, []);
}

export default StartSound;

