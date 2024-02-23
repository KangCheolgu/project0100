// CollisionHandler.js
export const CollisionHandler = (setIsCollision, collisionSound, isCurrentUser) => {
  if (isCurrentUser) {
    const sound = new Audio(collisionSound);
    
    // 볼륨을 0.5로 설정
    sound.volume = 0.1;

    sound.play().catch(error => console.error("오디오 재생 실패:", error));
    setIsCollision(true);
    
    // 충돌 상태를 일정 시간 후에 false로 설정하여 충돌 상태를 리셋
    setTimeout(() => setIsCollision(false), 350);
  }
};
