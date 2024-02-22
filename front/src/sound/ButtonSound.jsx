import { Howl } from 'howler';
import buttonSoundFile from './button/buttonhigh.mp3';
import { useEffect } from 'react';

const ButtonSound = () => {
  useEffect(() => {
    const playButtonSound = () => {
        console.log("버튼 클릭");
      // 오디오 파일 경로
      const sound = new Howl({
        src: [buttonSoundFile],
        loop: false, // 오디오 반복 재생 여부
        autoplay: true, // 자동 재생 여부
      });

      // 오디오 재생
      sound.play();

      return () => {
        sound.unload();
      };
    };

    // className이 'button-class'인 모든 요소에 클릭 이벤트를 추가합니다.
    const buttons = document.querySelectorAll('.buttonSound');
    buttons.forEach((button) => {
      button.addEventListener('click', playButtonSound);
    });

    // 컴포넌트가 언마운트될 때 이벤트 리스너를 제거합니다.
    return () => {
      buttons.forEach((button) => {
        button.removeEventListener('click', playButtonSound);
      });
    };
  }, []);

  return null; // 이 컴포넌트는 UI를 렌더링하지 않습니다.
};

export default ButtonSound;