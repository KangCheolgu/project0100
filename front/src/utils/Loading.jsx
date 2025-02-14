import React from "react";
import Spinner from "../static/gear_svg.svg";
import { Html, useProgress } from "@react-three/drei"

const LoadingPage = ({started, onStarted}) => {
  const { progress } = useProgress();
  const screenWidth = window.screen.width
  const screenHeight = window.screen.height
  const topHeight = -screenHeight/2
  const topWidth = -screenWidth/2
  return (
    <div className="loadingPage" style={{border:"solid 10px", textAlign:"center",
      backgroundColor:"#f1f2f3", width:screenWidth, height:screenHeight}}>
      <div style={{marginTop:-topHeight-150, textAlign:"center"}}>
          <div style={{fontWeight:"bold", fontSize:"30px"}}> {progress.toFixed(2)} Loading . . .</div>
          <img src={Spinner} alt="로딩" />
      </div>
    </div>
  );
};

export default LoadingPage