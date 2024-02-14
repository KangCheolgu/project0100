// CollisionHandler.js
export const CollisionHandler = (setIsCollision, collisionSound, isCurrentUser) => {
  if (isCurrentUser) {
    const sound = new Audio(collisionSound);
    sound.play().catch(error => console.error("오디오 재생 실패:", error));
    setIsCollision(true);
    setTimeout(() => setIsCollision(false), 350);
  }
};
