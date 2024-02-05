import { } from "@react-three/cannon";
import { useEffect, useMemo, useRef, useState, forwardRef } from "react";
import * as THREE from "three";
import { useFrame} from "@react-three/fiber";
import {GrassPlain, RoadLanes, RoadLanesHalf, RoadLeftBottomCurve, RoadPlain, CrossWalkHalf,Side, Side2, Side3, SideRightTopCurve, SideLeftBottom, SideRightTopInnerCurve,SideRightTopInnerCurve2,SideRightTopInnerCurve3, SideRightTopOutterCurve2, CurbLeftBottomCurve, SideRightTopOutterCurve1, SideRightTopCurveLong} from "./components/resort/Road.jsx"
import { BuildingSmallOrange, BuildingSmallRed,BuildingSmallRedPalnt,BuildingSmallSide,Building5, Building5_1, Building6, Building_6_1, Building_7, Building_8, Building_8_1, Building_9, Building_9_1, Building_10, Building_10_1, Building_10_1_1, Building_10_1_2} from "./components/resort/Buildings.jsx"
import { Startline } from "./components/Startline.jsx";
export default function Section1(props){
    return(<group castShadow receiveShadow >
        <BuildingSmallSide position={[10, 0, -10]}/>
        <Building_10_1_1 position={[15.5, 0, -10.5]} scale={[0.9,0.9, 0.5]} rotation={[0, Math.PI/2, 0]}/>
        <Building_8 position={[9.7, 0, -20]} scale={[0.5,0.5, 0.5]} rotation={[0, -Math.PI/2, 0]}/>
    </group>
    );
}