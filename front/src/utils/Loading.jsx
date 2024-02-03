import React from "react";
import Spinner from "../static/gear_gif.gif";
import { Html, useProgress } from "@react-three/drei"

const LoadingPage = () => {
  const { progress } = useProgress();

  return (
    <Html>
      <div> {progress} Loading . . .</div>
      <img src={Spinner} alt="로딩" width="100px" />
    </Html>
  );
};

export default LoadingPage