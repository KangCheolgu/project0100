
import { } from "@react-three/cannon";
import { useEffect, useMemo, useRef, useState, forwardRef } from "react";
import * as THREE from "three";
import { useFrame, useThree } from "@react-three/fiber";
import {GrassPlain, RoadLanes, RoadLanesHalf, RoadLeftBottomCurve, RoadPlain, CrossWalkHalf,Side, Side2, Side3, SideRightTopCurve, SideLeftBottom, SideRightTopInnerCurve,SideRightTopInnerCurve2,SideRightTopInnerCurve3, SideRightTopOutterCurve2, CurbLeftBottomCurve, SideRightTopOutterCurve1, SideRightTopCurveLong} from "./components/resort/Road.jsx"
import {Model, BuildingGreen, BuildingRed} from "./components/resort/Object.jsx"
import { Startline } from "./components/Startline.jsx";
 
export default function Map1(props){
    const position = props.position
    const rotation = props.rotation
    const scale = props.scale
    return(<group receiveShadow >
        {/* [0, 0, 0]~[60, 0, 0]*/}

        <Startline position={[position[0]+1.45, position[1]+0, position[2]-10]} scale={[1.3, 1, 1.15]} rotation={[0, Math.PI/2, 0]}/>
        <RoadLeftBottomCurve position={[position[0]+0, position[1]+0, position[2]+0]}/>
        <RoadLanes position={[position[0]+6, position[1]+0, position[2]+0]} rotation={[0, Math.PI/2, 0]}/>
        <RoadLanes position={[position[0]+12, position[1]+0, position[2]+0]} rotation={[0, Math.PI/2, 0]}/>
        <RoadLanes position={[position[0]+18, position[1]+0, position[2]+0]} rotation={[0, Math.PI/2, 0]}/>
        <RoadPlain position={[position[0]+24, position[1]+0, position[2]+0]} rotation={[0, Math.PI/2, 0]}/>
        <RoadLanes position={[position[0]+30, position[1]+0,position[2]+ 0]} rotation={[0, Math.PI/2, 0]}/>
        <RoadPlain position={[position[0]+42, position[1]+0, position[2]+0]} rotation={[0, Math.PI/2, 0]}/>
        <RoadLanes position={[position[0]+36, position[1]+0, position[2]+0]} rotation={[0, Math.PI/2, 0]}/>
        <RoadLanes position={[position[0]+48, position[1]+0, position[2]+0]} rotation={[0, Math.PI/2, 0]}/>
        <RoadLanes position={[position[0]+54, position[1]+0, position[2]+0]} rotation={[0, Math.PI/2, 0]}/>
        <RoadLeftBottomCurve position={[position[0]+60, position[1]+0, position[2]+0]} rotation={[0, Math.PI/2, 0]}/>
        
        <SideRightTopInnerCurve3 position={[position[0]+9, position[1]+0.01, position[2]-9]} rotation={[0, Math.PI ,0]}/>
        <SideLeftBottom position={[position[0]+6, position[1]+0, position[2]-6]} rotation={[0, 0, 0]}/>
        <Side2 position={[position[0]+12, position[1]+0.01, position[2]-4.5]}/>
        <SideRightTopInnerCurve3 position={[position[0]+15, position[1]+0.01, position[2]-9]} rotation={[0, -Math.PI/2 ,0]}/>
        <SideLeftBottom position={[position[0]+18, position[1]+0, position[2]-6]} rotation={[0, Math.PI/2, 0]}/>
        <Side2 position={[position[0]+19.5, position[1]+0.01, position[2]-12]} rotation={[0, Math.PI/2, 0]}/>
        <Side2 position={[position[0]+19.5, position[1]+0.01, position[2]-18]} rotation={[0, Math.PI/2, 0]}/>
        <SideRightTopInnerCurve3 position={[position[0]+15, position[1]+0.01, position[2]-21]} rotation={[0, 0 ,0]}/>
        <SideLeftBottom position={[position[0]+18, position[1]+0, position[2]-6]} rotation={[0, Math.PI/2, 0]}/>

        <Side2 position={[position[0]+4.5, position[1]+0.01, position[2]-12]} rotation={[0, Math.PI/2, 0]}/>
        <Side2 position={[position[0]+4.5, position[1]+0.01, position[2]-18]} rotation={[0, Math.PI/2, 0]}/>
        <SideRightTopInnerCurve3 position={[position[0]+9, position[1]+0.01, position[2]-21]} rotation={[0, Math.PI/2 ,0]}/>
        <SideLeftBottom position={[position[0]+18, position[1]+0, position[2]-6]} rotation={[0, Math.PI/2, 0]}/>
        <Side2 position={[position[0]+12, position[1]+0.01, position[2]-25.5]}/>
        {/* [60, 0, -6]~[60, 0, -30]*/}
        <RoadLanes position={[position[0]+60, position[1]+0, position[2]-6]}/>
        <RoadLanes position={[position[0]+60, position[1]+0, position[2]-12]}/>
        <RoadLanes position={[position[0]+60, position[1]+0, position[2]-18]}/>
        <RoadLanes position={[position[0]+60, position[1]+0, position[2]-24]}/>
        <RoadPlain position={[position[0]+60, position[1]+0, position[2]-30]}/>

        {/* [0, 0, -6]~[0, 0, -36]*/}
        <RoadLanes position={[position[0]+0, position[1]+0, position[2]-6]}/>
        <RoadLanes position={[position[0]+0, position[1]+0, position[2]-12]}/>
        <RoadLanes position={[position[0]+0, position[1]+0, position[2]-18]}/>
        <RoadLanes position={[position[0]+0, position[1]+0, position[2]-24]}/>
        <RoadPlain position={[position[0]+0, position[1]+0, position[2]-30]}/>

        

        <RoadLanes position={[position[0]+24, position[1]+0, position[2]-6]}/>
        <RoadLanes position={[position[0]+24, position[1]+0, position[2]-12]}/>
        <RoadLanes position={[position[0]+24, position[1]+0, position[2]-18]}/>
        <RoadLanes position={[position[0]+24, position[1]+0, position[2]-24]}/>
        <RoadPlain position={[position[0]+24, position[1]+0, position[2]-30]} rotation={[0, -Math.PI/2,0]}/>
        <SideLeftBottom position={[position[0]+24, position[1]+0, position[2]-30]} rotation={[0, 0, 0]}/>

        <RoadLanes position={[position[0]+30, position[1]+0, position[2]-30]} rotation={[0, Math.PI/2, 0]}/>
        
        
        <RoadLanes position={[position[0]+42, position[1]+0, position[2]-6]}/>
        <RoadLanes position={[position[0]+42, position[1]+0, position[2]-12]}/>
        <RoadLanes position={[position[0]+42, position[1]+0, position[2]-18]}/>
        <RoadLanes position={[position[0]+42, position[1]+0, position[2]-24]}/>

        <SideLeftBottom position={[position[0]+6, position[1]+0, position[2]-27]} rotation={[0, -Math.PI/2, 0]}/>
        <SideLeftBottom position={[position[0]+18, position[1]+0, position[2]-27]} rotation={[0, Math.PI, 0]}/>


        <RoadLanes position={[position[0]+6, position[1]+0, position[2]-30]} rotation={[0, Math.PI/2, 0]}/>
        <RoadLanes position={[position[0]+12, position[1]+0, position[2]-30]} rotation={[0, Math.PI/2, 0]}/>
        <RoadLanes position={[position[0]+18, position[1]+0, position[2]-30]} rotation={[0, Math.PI/2, 0]}/>
        <RoadPlain position={[position[0]+42, position[1]+0, position[2]-30]} rotation={[0, 0, 0]}/>

        <RoadLanes position={[position[0]+36, position[1]+0, position[2]-30]} rotation={[0, Math.PI/2, 0]}/>
        <RoadLanes position={[position[0]+48, position[1]+0, position[2]-30]} rotation={[0, Math.PI/2, 0]}/>
        <RoadLanes position={[position[0]+54, position[1]+0, position[2]-30]} rotation={[0, Math.PI/2, 0]}/>

        <SideRightTopInnerCurve3 position={[position[0]+33, position[1]+0.01, position[2]-21]} rotation={[0, Math.PI/2 ,0]}/>
        <SideLeftBottom position={[position[0]+30, position[1]+0, position[2]-24]} rotation={[0, -Math.PI/2, 0]}/>
        <SideRightTopInnerCurve3 position={[position[0]+33, position[1]+0.01, position[2]-21]} rotation={[0, 0 ,0]}/>
        <SideLeftBottom position={[position[0]+36, position[1]+0, position[2]-24]} rotation={[0, Math.PI, 0]}/>
        <SideRightTopInnerCurve3 position={[position[0]+33, position[1]+0.01, position[2]-9]} rotation={[0, Math.PI ,0]}/>
        <SideLeftBottom position={[position[0]+30, position[1]+0, position[2]-6]} rotation={[0, 0, 0]}/>
        <SideRightTopInnerCurve3 position={[position[0]+33, position[1]+0.01, position[2]-9]} rotation={[0, -Math.PI/2 ,0]}/>
        <SideLeftBottom position={[position[0]+36, position[1]+0, position[2]-6]} rotation={[0, Math.PI/2, 0]}/>
        <Side2 position={[position[0]+28.5, position[1]+0.01, position[2]-18]} rotation={[0, Math.PI/2, 0]}/>
        <Side2 position={[position[0]+28.5, position[1]+0.01, position[2]-12]} rotation={[0, Math.PI/2, 0]}/>
        <Side2 position={[position[0]+37.5, position[1]+0.01, position[2]-18]} rotation={[0, Math.PI/2, 0]}/>
        <Side2 position={[position[0]+37.5, position[1]+0.01, position[2]-12]} rotation={[0, Math.PI/2, 0]}/>

        <SideRightTopInnerCurve3 position={[position[0]+51, position[1]+0.01, position[2]-21]} rotation={[0, Math.PI/2 ,0]}/>
        <SideLeftBottom position={[position[0]+48, position[1]+0, position[2]-24]} rotation={[0, -Math.PI/2, 0]}/>
        <SideRightTopInnerCurve3 position={[position[0]+51, position[1]+0.01, position[2]-21]} rotation={[0, 0 ,0]}/>
        <SideLeftBottom position={[position[0]+54, position[1]+0, position[2]-24]} rotation={[0, Math.PI, 0]}/>
        <SideRightTopInnerCurve3 position={[position[0]+51, position[1]+0.01, position[2]-9]} rotation={[0, Math.PI ,0]}/>
        <SideLeftBottom position={[position[0]+48, position[1]+0, position[2]-6]} rotation={[0, 0, 0]}/>
        <SideRightTopInnerCurve3 position={[position[0]+51, position[1]+0.01, position[2]-9]} rotation={[0, -Math.PI/2 ,0]}/>
        <SideLeftBottom position={[position[0]+54, position[1]+0, position[2]-6]} rotation={[0, Math.PI/2, 0]}/>
        <Side2 position={[position[0]+46.5, position[1]+0.01, position[2]-18]} rotation={[0, Math.PI/2, 0]}/>
        <Side2 position={[position[0]+46.5, position[1]+0.01, position[2]-12]} rotation={[0, Math.PI/2, 0]}/>
        <Side2 position={[position[0]+55.5, position[1]+0.01, position[2]-18]} rotation={[0, Math.PI/2, 0]}/>
        <Side2 position={[position[0]+55.5, position[1]+0.01, position[2]-12]} rotation={[0, Math.PI/2, 0]}/>
        
        <GrassPlain position={[position[0]+8, position[1]+0, position[2]-6]}/>
        <GrassPlain position={[position[0]+8, position[1]+0, position[2]-12]}/>  
        <GrassPlain position={[position[0]+8, position[1]+0, position[2]-18]}/>
        <GrassPlain position={[position[0]+8, position[1]+0, position[2]-24]}/>

        <GrassPlain position={[position[0]+11, position[1]+0, position[2]-6]}/>
        <GrassPlain position={[position[0]+11, position[1]+0, position[2]-12]}/>  
        <GrassPlain position={[position[0]+11, position[1]+0, position[2]-18]}/>
        <GrassPlain position={[position[0]+11, position[1]+0, position[2]-24]}/>

        <GrassPlain position={[position[0]+16, position[1]+0, position[2]-6]}/>
        <GrassPlain position={[position[0]+16, position[1]+0, position[2]-12]}/>  
        <GrassPlain position={[position[0]+16, position[1]+0, position[2]-18]}/>
        <GrassPlain position={[position[0]+16, position[1]+0, position[2]-24]}/> 

        <GrassPlain position={[position[0]+33, position[1]+0, position[2]-6]}/>
        <GrassPlain position={[position[0]+33, position[1]+0, position[2]-12]}/>  
        <GrassPlain position={[position[0]+33, position[1]+0, position[2]-18]}/>
        <GrassPlain position={[position[0]+33, position[1]+0, position[2]-24]}/>  

        <GrassPlain position={[position[0]+51, position[1]+0, position[2]-6]}/>
        <GrassPlain position={[position[0]+51, position[1]+0, position[2]-12]}/>  
        <GrassPlain position={[position[0]+51, position[1]+0, position[2]-18]}/>
        <GrassPlain position={[position[0]+51, position[1]+0, position[2]-24]}/>  

        <SideRightTopInnerCurve position={[position[0]+0, position[1]+0.01, position[2]]} rotation={[0, Math.PI ,0]}/>
        <SideRightTopInnerCurve position={[position[0]+0, position[1]+0.01, position[2]-30]} rotation={[0, Math.PI/2 ,0]}/>
        <SideRightTopInnerCurve position={[position[0]+60, position[1]+0.01, position[2]-30]} rotation={[0, 0 ,0]}/>
        <SideRightTopInnerCurve position={[position[0]+60, position[1]+0.01, position[2]+0]} rotation={[0, -Math.PI/2 ,0]}/>

        {/* 서쪽 인도 */}
        <Side2 position={[position[0]-4.5, position[1]+0.01, position[2]-3]} rotation={[0, Math.PI/2, 0]}/>
        <Side2 position={[position[0]-4.5, position[1]+0.01, position[2]-9]} rotation={[0, Math.PI/2, 0]}/>
        <Side2 position={[position[0]-4.5, position[1]+0.01, position[2]-15]} rotation={[0, Math.PI/2, 0]}/>
        <Side2 position={[position[0]-4.5, position[1]+0.01, position[2]-21]} rotation={[0, Math.PI/2, 0]}/>
        <Side2 position={[position[0]-4.5, position[1]+0.01, position[2]-27]} rotation={[0, Math.PI/2, 0]}/>

        {/* 동쪽 인도 */}
        <Side2 position={[position[0]+64.5, position[1]+0.01, position[2]-3]} rotation={[0, Math.PI/2, 0]}/>
        <Side2 position={[position[0]+64.5, position[1]+0.01, position[2]-9]} rotation={[0, Math.PI/2, 0]}/>
        <Side2 position={[position[0]+64.5, position[1]+0.01, position[2]-15]} rotation={[0, Math.PI/2, 0]}/>
        <Side2 position={[position[0]+64.5, position[1]+0.01, position[2]-21]} rotation={[0, Math.PI/2, 0]}/>
        <Side2 position={[position[0]+64.5, position[1]+0.01, position[2]-27]} rotation={[0, Math.PI/2, 0]}/>

        {/* 북쪽 인도 */}
        <Side2 position={[position[0]+3, position[1]+0.01, position[2]-34.5]} rotation={[0, 0, 0]}/>
        <Side2 position={[position[0]+9, position[1]+0.01, position[2]-34.5]} rotation={[0, 0, 0]}/>
        <Side2 position={[position[0]+15, position[1]+0.01, position[2]-34.5]} rotation={[0, 0, 0]}/>
        <Side2 position={[position[0]+21, position[1]+0.01, position[2]-34.5]} rotation={[0, 0, 0]}/>
        <Side2 position={[position[0]+27, position[1]+0.01, position[2]-34.5]} rotation={[0, 0, 0]}/>
        <Side2 position={[position[0]+33, position[1]+0.01, position[2]-34.5]} rotation={[0, 0, 0]}/>
        <Side2 position={[position[0]+39, position[1]+0.01, position[2]-34.5]} rotation={[0, 0, 0]}/>
        <Side2 position={[position[0]+45, position[1]+0.01, position[2]-34.5]} rotation={[0, 0, 0]}/>
        <Side2 position={[position[0]+51, position[1]+0.01, position[2]-34.5]} rotation={[0, 0, 0]}/>
        <Side2 position={[position[0]+57, position[1]+0.01, position[2]-34.5]} rotation={[0, 0, 0]}/>

        {/* 남쪽 인도 */}
        <Side2 position={[position[0]+3, position[1]+0.01, position[2]+4.5]} rotation={[0, 0, 0]}/>
        <Side2 position={[position[0]+9, position[1]+0.01, position[2]+4.5]} rotation={[0, 0, 0]}/>
        <Side2 position={[position[0]+15, position[1]+0.01, position[2]+4.5]} rotation={[0, 0, 0]}/>
        <Side2 position={[position[0]+21, position[1]+0.01, position[2]+4.5]} rotation={[0, 0, 0]}/>
        <Side2 position={[position[0]+27, position[1]+0.01, position[2]+4.5]} rotation={[0, 0, 0]}/>
        <Side2 position={[position[0]+33, position[1]+0.01, position[2]+4.5]} rotation={[0, 0, 0]}/>
        <Side2 position={[position[0]+39, position[1]+0.01, position[2]+4.5]} rotation={[0, 0, 0]}/>
        <Side2 position={[position[0]+45, position[1]+0.01, position[2]+4.5]} rotation={[0, 0, 0]}/>
        <Side2 position={[position[0]+51, position[1]+0.01, position[2]+4.5]} rotation={[0, 0, 0]}/>
        <Side2 position={[position[0]+57, position[1]+0.01, position[2]+4.5]} rotation={[0, 0, 0]}/>
        
        
    </group>
    );
} 