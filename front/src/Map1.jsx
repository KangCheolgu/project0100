
import { } from "@react-three/cannon";
import { useEffect, useMemo, useRef, useState, forwardRef } from "react";
import * as THREE from "three";
import { useFrame, useThree } from "@react-three/fiber";
import {RoadLanes, RoadLanesHalf, RoadLeftBottomCurve, RoadPlain, CrossWalkHalf,Side, Side2, Side3, SideRightTopCurve, SideLeftBottom, SideRightTopInnerCurve,SideRightTopInnerCurve2,SideRightTopInnerCurve3, SideRightTopOutterCurve2, CurbLeftBottomCurve, SideRightTopOutterCurve1, SideRightTopCurveLong} from "./components/resort/Road.jsx"
import {Model, BuildingGreen, BuildingRed} from "./components/resort/Object.jsx"
 
export default function Map1(props){
    const position = props.position
    const rotation = props.rotation
    const scale = props.scale
    return(<group receiveShadow >
        {/* [0, 0, 0]~[60, 0, 0]}
        {/* Curve 0, 0 ,0 */}
        <RoadLeftBottomCurve position={[position[0]+0, position[1]+0, position[2]+0]}/>
        <RoadLanes position={[position[0]+6, position[1]+0, position[2]+0]} rotation={[0, Math.PI/2, 0]}/>
        <RoadLanes position={[position[0]+12, position[1]+0, position[2]+0]} rotation={[0, Math.PI/2, 0]}/>
        <RoadLanes position={[position[0]+18, position[1]+0, position[2]+0]} rotation={[0, Math.PI/2, 0]}/>
        <RoadPlain position={[position[0]+24, position[1]+0, position[2]+0]} rotation={[0, Math.PI/2, 0]}/>
        <RoadLanes position={[position[0]+30, position[1]+0,position[2]+ 0]} rotation={[0, Math.PI/2, 0]}/>
        <RoadPlain position={[position[0]+36, position[1]+0, position[2]+0]} rotation={[0, Math.PI/2, 0]}/>
        <RoadLanes position={[position[0]+42, position[1]+0, position[2]+0]} rotation={[0, Math.PI/2, 0]}/>
        <RoadLanes position={[position[0]+48, position[1]+0, position[2]+0]} rotation={[0, Math.PI/2, 0]}/>
        <RoadLanes position={[position[0]+54, position[1]+0, position[2]+0]} rotation={[0, Math.PI/2, 0]}/>
        <RoadLeftBottomCurve position={[position[0]+60, position[1]+0, position[2]+0]} rotation={[0, Math.PI/2, 0]}/>
        
        <SideRightTopInnerCurve3 position={[position[0]+9, position[1]+0.01, position[2]-9]} rotation={[0, Math.PI ,0]}/>
        <SideLeftBottom position={[position[0]+6, position[1]+0, position[2]-6]} rotation={[0, 0, 0]}/>
        <SideRightTopInnerCurve position={[position[0]+0, position[1]+0.01, position[2]]} rotation={[0, Math.PI ,0]}/>
        <Side2 position={[position[0]+12, position[1]+0.01, position[2]-4.5]}/>
        <SideRightTopInnerCurve3 position={[position[0]+15, position[1]+0.01, position[2]-9]} rotation={[0, -Math.PI/2 ,0]}/>
        <SideLeftBottom position={[position[0]+18, position[1]+0, position[2]-6]} rotation={[0, Math.PI/2, 0]}/>
        <Side2 position={[position[0]+19.5, position[1]+0.01, position[2]-12]} rotation={[0, Math.PI/2, 0]}/>
        <Side2 position={[position[0]+19.5, position[1]+0.01, position[2]-18]} rotation={[0, Math.PI/2, 0]}/>
        <Side2 position={[position[0]+19.5, position[1]+0.01, position[2]-24]} rotation={[0, Math.PI/2, 0]}/>
        <SideRightTopInnerCurve3 position={[position[0]+15, position[1]+0.01, position[2]-24]} rotation={[0, 0 ,0]}/>
        <SideLeftBottom position={[position[0]+18, position[1]+0, position[2]-6]} rotation={[0, Math.PI/2, 0]}/>

        <Side2 position={[position[0]+4.5, position[1]+0.01, position[2]-12]} rotation={[0, Math.PI/2, 0]}/>
        <Side2 position={[position[0]+4.5, position[1]+0.01, position[2]-18]} rotation={[0, Math.PI/2, 0]}/>
        <Side2 position={[position[0]+4.5, position[1]+0.01, position[2]-23]} rotation={[0, Math.PI/2, 0]}/>
        <SideRightTopInnerCurve3 position={[position[0]+9, position[1]+0.01, position[2]-24]} rotation={[0, Math.PI/2 ,0]}/>
        <SideLeftBottom position={[position[0]+18, position[1]+0, position[2]-6]} rotation={[0, Math.PI/2, 0]}/>
        <Side2 position={[position[0]+12, position[1]+0.01, position[2]-28.5]}/>
        {/* [60, 0, -6]~[60, 0, -30]*/}
        <RoadLanes position={[position[0]+60, position[1]+0, position[2]-6]}/>
        <RoadLanes position={[position[0]+60, position[1]+0, position[2]-12]}/>
        <RoadLanes position={[position[0]+60, position[1]+0, position[2]-18]}/>
        <RoadLanes position={[position[0]+60, position[1]+0, position[2]-24]}/>
        <RoadLanes position={[position[0]+60, position[1]+0, position[2]-30]}/>

        {/* [0, 0, -6]~[0, 0, -36]*/}
        <RoadLanes position={[position[0]+0, position[1]+0, position[2]-6]}/>
        <RoadLanes position={[position[0]+0, position[1]+0, position[2]-12]}/>
        <RoadLanes position={[position[0]+0, position[1]+0, position[2]-18]}/>
        <RoadLanes position={[position[0]+0, position[1]+0, position[2]-24]}/>
        <RoadLanes position={[position[0]+0, position[1]+0, position[2]-30]}/>

        {/* [0, 0, -6]~[0, 0, -36]*/}
        <RoadLanes position={[position[0]+0, position[1]+0, position[2]-6]}/>
        <RoadLanes position={[position[0]+0, position[1]+0, position[2]-12]}/>
        <RoadLanes position={[position[0]+0, position[1]+0, position[2]-18]}/>
        <RoadLanes position={[position[0]+0, position[1]+0, position[2]-24]}/>
        <RoadLanes position={[position[0]+0, position[1]+0, position[2]-30]}/>

        <RoadLanes position={[position[0]+24, position[1]+0, position[2]-6]}/>
        <RoadLanes position={[position[0]+24, position[1]+0, position[2]-12]}/>
        <RoadLanes position={[position[0]+24, position[1]+0, position[2]-18]}/>
        <RoadLanes position={[position[0]+24, position[1]+0, position[2]-24]}/>
        <RoadLeftBottomCurve position={[position[0]+24, position[1]+0, position[2]-30]} rotation={[0, -Math.PI/2,0]}/>

        <RoadLanes position={[position[0]+30, position[1]+0, position[2]-30]} rotation={[0, Math.PI/2, 0]}/>
        <RoadLeftBottomCurve position={[position[0]+36, position[1]+0, position[2]-30]} rotation={[0, Math.PI,0]}/>

        <RoadLanes position={[position[0]+36, position[1]+0, position[2]-6]}/>
        <RoadLanes position={[position[0]+36, position[1]+0, position[2]-12]}/>
        <RoadLanes position={[position[0]+36, position[1]+0, position[2]-18]}/>
        <RoadLanes position={[position[0]+36, position[1]+0, position[2]-24]}/>
    </group>
    );
} 