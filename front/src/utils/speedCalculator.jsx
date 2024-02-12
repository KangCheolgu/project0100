// utils/speedCalculator.js

export const calculateSpeed = (currentPosition, lastPosition, deltaTime) => {
  const distanceTraveled = currentPosition.distanceTo(lastPosition);
  const speed = distanceTraveled / deltaTime;
  return Math.floor(speed * 3.6); // Convert to km/h and round down
};
