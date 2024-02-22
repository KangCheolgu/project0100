import React, { useEffect, useRef } from 'react';

function EngineSound({ currentSpeed, engineSoundFile }) {
    const audioContextRef = useRef(null);
    const sourceRef = useRef(null);
    const isPlayingRef = useRef(false);
    const lastSpeedRef = useRef(currentSpeed); // 마지막 속도를 추적하기 위한 ref

    useEffect(() => {
        if (!audioContextRef.current) {
            audioContextRef.current = new (window.AudioContext || window.webkitAudioContext)();
        }

        const loadAndPlaySound = async () => {
            try {
                const response = await fetch(engineSoundFile);
                const arrayBuffer = await response.arrayBuffer();
                const audioBuffer = await audioContextRef.current.decodeAudioData(arrayBuffer);

                if (!sourceRef.current) {
                    sourceRef.current = audioContextRef.current.createBufferSource();
                    sourceRef.current.buffer = audioBuffer;
                    sourceRef.current.loop = true;
                    sourceRef.current.connect(audioContextRef.current.destination);
                }

                if (!isPlayingRef.current) {
                    sourceRef.current.start(0);
                    isPlayingRef.current = true;
                }

                updatePlaybackRate(currentSpeed);
            } catch (error) {
                console.error("엔진 소리 로딩 실패:", error);
            }
        };

        loadAndPlaySound();

        return () => {
            if (sourceRef.current) {
                sourceRef.current.stop();
                isPlayingRef.current = false;
            }
            if (audioContextRef.current && audioContextRef.current.state !== 'closed') {
                audioContextRef.current.close();
            }
        };
    }, [engineSoundFile]);

    useEffect(() => {
        const significantChange = Math.abs(currentSpeed - lastSpeedRef.current) > 5; // 상당한 변화가 있는지 확인
        if (significantChange && sourceRef.current && isPlayingRef.current) {
            updatePlaybackRate(currentSpeed);
            lastSpeedRef.current = currentSpeed; // 마지막 속도 업데이트
        }
    }, [currentSpeed]);

    const updatePlaybackRate = (speed) => {
        const playbackRate = calculatePlaybackRate(speed);
        if (sourceRef.current) {
            // 부드러운 피치 변경을 위한 로직
            sourceRef.current.playbackRate.linearRampToValueAtTime(playbackRate, audioContextRef.current.currentTime + 0.1);
        }
    };

    const calculatePlaybackRate = (speed) => {
        const maxSpeed = 60;
        return speed / maxSpeed + 0.5; // 속도에 따라 피치를 조절하는 로직, 기본값: 0.5, 최대값: 1.5
    };

    return null;
}

export default EngineSound;
