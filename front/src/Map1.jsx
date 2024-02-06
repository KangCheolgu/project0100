
import { } from "@react-three/cannon";
import { useEffect, useMemo, useRef, useState, forwardRef } from "react";
import * as THREE from "three";
import { useFrame} from "@react-three/fiber";
import {Grass, Road_1, Road_4, Road_3,Side, Sidewalk, Sidewalk_half, Road_half_3, Sidewalk_corner_3,Sidewalk_corner_7} from "./components/resort/comp-resort-roads.jsx"
import { BuildingSmallOrange, BuildingSmallRed,BuildingSmallRedPalnt,BuildingSmallSide,Building5, Building5_1, Building6, Building_6_1, Building_7, Building_8, Building_8_1, Building_9, Building_9_1, Building_10, Building_10_1, Building_10_1_1, Building_10_1_2} from "./components/resort/Buildings.jsx"
import { Startline } from "./components/Startline.jsx";
import Section1 from "./Section1.jsx";
import Section2 from "./Section2.jsx";
import Section3 from "./Section3.jsx"
import Section4 from "./Section4.jsx"
import ColliderBox from "./ColliderBox.jsx";
import { Buildings } from "./components/resort/comp-resort-buildings.jsx";
export default function Map1(props){
    const position = props.position
    const rotation = props.rotation
    const scale = props.scale
    const boxGeometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    return(<group castShadow receiveShadow >
        {/* [0, 0, 0]~[60, 0, 0]*/}
        <Buildings/>
        {/*첫번째 블럭 */}
        <Section1/>
        {/*두번째 블럭*/}
        <Section2/>
        {/* 세번째 블럭 */}
        <Section3/>
        {/* 서쪽 외곽 */}
        <Section4/>
        
        <mesh geometry={boxGeometry} material={material} position={[60, 9.5, -28]} scale={[6, 0.1, 42]} rotation={[Math.PI/9, 0, 0]}/>
        <ColliderBox position={[60, 2, -28]} scale={[6, 0.1, 42]} rotation={[Math.PI/9, 0, 0]}/>
        <Startline position={[position[0]+1.45, position[1]+0, position[2]-10]} scale={[1.3, 1, 1.15]} rotation={[0, Math.PI/2, 0]} castShadow receiveShadow/>
        <Road_4 position={[position[0]+0, position[1]+0, position[2]+0]}/>
        <Road_1 position={[position[0]+6, position[1]+0, position[2]+0]} rotation={[0, Math.PI/2, 0]}/>
        <Road_1 position={[position[0]+12, position[1]+0, position[2]+0]} rotation={[0, Math.PI/2, 0]}/>
        <Road_1 position={[position[0]+18, position[1]+0, position[2]+0]} rotation={[0, Math.PI/2, 0]}/>
        <Road_3 position={[position[0]+24, position[1]+0, position[2]+0]} rotation={[0, Math.PI/2, 0]}/>
        <Road_1 position={[position[0]+30, position[1]+0,position[2]+ 0]} rotation={[0, Math.PI/2, 0]}/>
        <Road_3 position={[position[0]+42, position[1]+0, position[2]+0]} rotation={[0, Math.PI/2, 0]}/>
        <Road_1 position={[position[0]+36, position[1]+0, position[2]+0]} rotation={[0, Math.PI/2, 0]}/>
        <Road_1 position={[position[0]+48, position[1]+0, position[2]+0]} rotation={[0, Math.PI/2, 0]}/>
        <Road_1 position={[position[0]+54, position[1]+0, position[2]+0]} rotation={[0, Math.PI/2, 0]}/>
        <Road_4 position={[position[0]+60, position[1]+0, position[2]+0]} rotation={[0, Math.PI/2, 0]}/>
        
        <Sidewalk_corner_7 position={[position[0]+9, position[1]+0.01, position[2]-9]} rotation={[0, Math.PI ,0]}/>
        <Road_half_3 position={[position[0]+6, position[1]+0, position[2]-6]} rotation={[0, 0, 0]}/>
        <Sidewalk position={[position[0]+12, position[1]+0.01, position[2]-4.5]}/>
        <Sidewalk_corner_7 position={[position[0]+15, position[1]+0.01, position[2]-9]} rotation={[0, -Math.PI/2 ,0]}/>
        <Road_half_3 position={[position[0]+18, position[1]+0, position[2]-6]} rotation={[0, Math.PI/2, 0]}/>
        <Sidewalk position={[position[0]+19.5, position[1]+0.01, position[2]-12]} rotation={[0, Math.PI/2, 0]}/>
        <Sidewalk position={[position[0]+19.5, position[1]+0.01, position[2]-18]} rotation={[0, Math.PI/2, 0]}/>
        <Sidewalk_corner_7 position={[position[0]+15, position[1]+0.01, position[2]-21]} rotation={[0, 0 ,0]}/>
        <Road_half_3 position={[position[0]+18, position[1]+0, position[2]-6]} rotation={[0, Math.PI/2, 0]}/>

        <Sidewalk position={[position[0]+4.5, position[1]+0.01, position[2]-12]} rotation={[0, Math.PI/2, 0]}/>
        <Sidewalk position={[position[0]+4.5, position[1]+0.01, position[2]-18]} rotation={[0, Math.PI/2, 0]}/>
        <Sidewalk_corner_7 position={[position[0]+9, position[1]+0.01, position[2]-21]} rotation={[0, Math.PI/2 ,0]}/>
        <Road_half_3 position={[position[0]+18, position[1]+0, position[2]-6]} rotation={[0, Math.PI/2, 0]}/>
        <Sidewalk position={[position[0]+12, position[1]+0.01, position[2]-25.5]}/>
        {/* [60, 0, -6]~[60, 0, -30]*/}
        <Road_1 position={[position[0]+60, position[1]+0, position[2]-6]}/>
        <Road_1 position={[position[0]+60, position[1]+0, position[2]-12]}/>
        <Road_1 position={[position[0]+60, position[1]+0, position[2]-18]}/>
        <Road_1 position={[position[0]+60, position[1]+0, position[2]-24]}/>
        <Road_3 position={[position[0]+60, position[1]+0, position[2]-30]}/>

        {/* [0, 0, -6]~[0, 0, -36]*/}
        <Road_1 position={[position[0]+0, position[1]+0, position[2]-6]}/>
        <Road_1 position={[position[0]+0, position[1]+0, position[2]-12]}/>
        <Road_1 position={[position[0]+0, position[1]+0, position[2]-18]}/>
        <Road_1 position={[position[0]+0, position[1]+0, position[2]-24]}/>
        <Road_3 position={[position[0]+0, position[1]+0, position[2]-30]}/>

        

        <Road_1 position={[position[0]+24, position[1]+0, position[2]-6]}/>
        <Road_1 position={[position[0]+24, position[1]+0, position[2]-12]}/>
        <Road_1 position={[position[0]+24, position[1]+0, position[2]-18]}/>
        <Road_1 position={[position[0]+24, position[1]+0, position[2]-24]}/>
        <Road_3 position={[position[0]+24, position[1]+0, position[2]-30]} rotation={[0, -Math.PI/2,0]}/>
        <Road_half_3 position={[position[0]+24, position[1]+0, position[2]-30]} rotation={[0, 0, 0]}/>

        <Road_1 position={[position[0]+30, position[1]+0, position[2]-30]} rotation={[0, Math.PI/2, 0]}/>
        
        
        <Road_1 position={[position[0]+42, position[1]+0, position[2]-6]}/>
        <Road_1 position={[position[0]+42, position[1]+0, position[2]-12]}/>
        <Road_1 position={[position[0]+42, position[1]+0, position[2]-18]}/>
        <Road_1 position={[position[0]+42, position[1]+0, position[2]-24]}/>

        <Road_half_3 position={[position[0]+6, position[1]+0, position[2]-27]} rotation={[0, -Math.PI/2, 0]}/>
        <Road_half_3 position={[position[0]+18, position[1]+0, position[2]-27]} rotation={[0, Math.PI, 0]}/>


        <Road_1 position={[position[0]+6, position[1]+0, position[2]-30]} rotation={[0, Math.PI/2, 0]}/>
        <Road_1 position={[position[0]+12, position[1]+0, position[2]-30]} rotation={[0, Math.PI/2, 0]}/>
        <Road_1 position={[position[0]+18, position[1]+0, position[2]-30]} rotation={[0, Math.PI/2, 0]}/>
        <Road_3 position={[position[0]+42, position[1]+0, position[2]-30]} rotation={[0, 0, 0]}/>

        <Road_1 position={[position[0]+36, position[1]+0, position[2]-30]} rotation={[0, Math.PI/2, 0]}/>
        <Road_1 position={[position[0]+48, position[1]+0, position[2]-30]} rotation={[0, Math.PI/2, 0]}/>
        <Road_1 position={[position[0]+54, position[1]+0, position[2]-30]} rotation={[0, Math.PI/2, 0]}/>

        <Sidewalk_corner_7 position={[position[0]+33, position[1]+0.01, position[2]-21]} rotation={[0, Math.PI/2 ,0]}/>
        <Road_half_3 position={[position[0]+30, position[1]+0, position[2]-24]} rotation={[0, -Math.PI/2, 0]}/>
        <Sidewalk_corner_7 position={[position[0]+33, position[1]+0.01, position[2]-21]} rotation={[0, 0 ,0]}/>
        <Road_half_3 position={[position[0]+36, position[1]+0, position[2]-24]} rotation={[0, Math.PI, 0]}/>
        <Sidewalk_corner_7 position={[position[0]+33, position[1]+0.01, position[2]-9]} rotation={[0, Math.PI ,0]}/>
        <Road_half_3 position={[position[0]+30, position[1]+0, position[2]-6]} rotation={[0, 0, 0]}/>
        <Sidewalk_corner_7 position={[position[0]+33, position[1]+0.01, position[2]-9]} rotation={[0, -Math.PI/2 ,0]}/>
        <Road_half_3 position={[position[0]+36, position[1]+0, position[2]-6]} rotation={[0, Math.PI/2, 0]}/>
        <Sidewalk position={[position[0]+28.5, position[1]+0.01, position[2]-18]} rotation={[0, Math.PI/2, 0]}/>
        <Sidewalk position={[position[0]+28.5, position[1]+0.01, position[2]-12]} rotation={[0, Math.PI/2, 0]}/>
        <Sidewalk position={[position[0]+37.5, position[1]+0.01, position[2]-18]} rotation={[0, Math.PI/2, 0]}/>
        <Sidewalk position={[position[0]+37.5, position[1]+0.01, position[2]-12]} rotation={[0, Math.PI/2, 0]}/>

        <Road_half_3 position={[position[0]+48, position[1]+0, position[2]-24]} rotation={[0, -Math.PI/2, 0]}/>
        <Road_half_3 position={[position[0]+54, position[1]+0, position[2]-24]} rotation={[0, Math.PI, 0]}/>
        <Road_half_3 position={[position[0]+48, position[1]+0, position[2]-6]} rotation={[0, 0, 0]}/>
        <Road_half_3 position={[position[0]+54, position[1]+0, position[2]-6]} rotation={[0, Math.PI/2, 0]}/>
        <Grass position={[position[0]+48, position[1]-0.05, position[2]-24]}/>
        <Grass position={[position[0]+48, position[1]-0.05, position[2]-18]}/>
        <Grass position={[position[0]+48, position[1]-0.05, position[2]-12]}/>
        <Grass position={[position[0]+48, position[1]-0.05, position[2]-6]}/>
        <Grass position={[position[0]+54, position[1]-0.05, position[2]-24]}/>
        <Grass position={[position[0]+54, position[1]-0.05, position[2]-18]}/>
        <Grass position={[position[0]+54, position[1]-0.05, position[2]-12]}/>
        <Grass position={[position[0]+54, position[1]-0.05, position[2]-6]}/>
        
        
        <Grass position={[position[0]+8, position[1]+0, position[2]-6]}/>
        <Grass position={[position[0]+8, position[1]+0, position[2]-12]}/>  
        <Grass position={[position[0]+8, position[1]+0, position[2]-18]}/>
        <Grass position={[position[0]+8, position[1]+0, position[2]-24]}/>

        <Grass position={[position[0]+11, position[1]+0, position[2]-6]}/>
        <Grass position={[position[0]+11, position[1]+0, position[2]-12]}/>  
        <Grass position={[position[0]+11, position[1]+0, position[2]-18]}/>
        <Grass position={[position[0]+11, position[1]+0, position[2]-24]}/>

        <Grass position={[position[0]+16, position[1]+0, position[2]-6]}/>
        <Grass position={[position[0]+16, position[1]+0, position[2]-12]}/>  
        <Grass position={[position[0]+16, position[1]+0, position[2]-18]}/>
        <Grass position={[position[0]+16, position[1]+0, position[2]-24]}/> 

        <Grass position={[position[0]+33, position[1]-0.01, position[2]-6]}/>
        <Grass position={[position[0]+33, position[1]-0.01, position[2]-12]}/>
        <Grass position={[position[0]+33, position[1]-0.01, position[2]-18]}/>
        <Grass position={[position[0]+33, position[1]-0.01, position[2]-24]}/>  
        <Sidewalk position={[position[0]+33, position[1]+0, position[2]-15]}/>
        
         

        <Sidewalk_corner_3 position={[position[0]+0, position[1]+0.01, position[2]]} rotation={[0, Math.PI ,0]}/>
        <Sidewalk_corner_3 position={[position[0]+0, position[1]+0.01, position[2]-30]} rotation={[0, Math.PI/2 ,0]}/>
        <Sidewalk_corner_3 position={[position[0]+60, position[1]+0.01, position[2]-30]} rotation={[0, 0 ,0]}/>
        <Sidewalk_corner_3 position={[position[0]+60, position[1]+0.01, position[2]+0]} rotation={[0, -Math.PI/2 ,0]}/>

        {/* 서쪽 인도 */}
        <Sidewalk position={[position[0]-4.5, position[1]+0.01, position[2]-3]} rotation={[0, Math.PI/2, 0]}/>
        <Sidewalk position={[position[0]-4.5, position[1]+0.01, position[2]-9]} rotation={[0, Math.PI/2, 0]}/>
        <Sidewalk position={[position[0]-4.5, position[1]+0.01, position[2]-15]} rotation={[0, Math.PI/2, 0]}/>
        <Sidewalk position={[position[0]-4.5, position[1]+0.01, position[2]-21]} rotation={[0, Math.PI/2, 0]}/>
        <Sidewalk position={[position[0]-4.5, position[1]+0.01, position[2]-27]} rotation={[0, Math.PI/2, 0]}/>

        <Sidewalk_half position={[position[0]-7.5, position[1]+0.01, position[2]+3]} rotation={[0, Math.PI/2, 0]}/>
        <Sidewalk position={[position[0]-7.5, position[1]+0.01, position[2]-0]} rotation={[0, Math.PI/2, 0]}/>
        <Sidewalk position={[position[0]-7.5, position[1]+0.01, position[2]-3]} rotation={[0, Math.PI/2, 0]}/>
        <Sidewalk position={[position[0]-7.5, position[1]+0.01, position[2]-9]} rotation={[0, Math.PI/2, 0]}/>
        <Sidewalk position={[position[0]-7.5, position[1]+0.01, position[2]-15]} rotation={[0, Math.PI/2, 0]}/>
        <Sidewalk position={[position[0]-7.5, position[1]+0.01, position[2]-21]} rotation={[0, Math.PI/2, 0]}/>
        <Sidewalk position={[position[0]-7.5, position[1]+0.01, position[2]-27]} rotation={[0, Math.PI/2, 0]}/>
        <Sidewalk position={[position[0]-7.5, position[1]+0.01, position[2]-30]} rotation={[0, Math.PI/2, 0]}/>
        <Side position={[position[0]-7.5, position[1]+0.01, position[2]-34]} rotation={[0, Math.PI/2, 0]}/>

        <Sidewalk_half position={[position[0]-10.5, position[1]+0.01, position[2]+3]} rotation={[0, Math.PI/2, 0]}/>
        <Sidewalk position={[position[0]-10.5, position[1]+0.01, position[2]-0]} rotation={[0, Math.PI/2, 0]}/>
        <Sidewalk position={[position[0]-10.5, position[1]+0.01, position[2]-3]} rotation={[0, Math.PI/2, 0]}/>
        <Sidewalk position={[position[0]-10.5, position[1]+0.01, position[2]-9]} rotation={[0, Math.PI/2, 0]}/>
        <Sidewalk position={[position[0]-10.5, position[1]+0.01, position[2]-15]} rotation={[0, Math.PI/2, 0]}/>
        <Sidewalk position={[position[0]-10.5, position[1]+0.01, position[2]-21]} rotation={[0, Math.PI/2, 0]}/>
        <Sidewalk position={[position[0]-10.5, position[1]+0.01, position[2]-27]} rotation={[0, Math.PI/2, 0]}/>
        <Sidewalk position={[position[0]-10.5, position[1]+0.01, position[2]-30]} rotation={[0, Math.PI/2, 0]}/>
        <Side position={ [position[0]-10.5, position[1]+0.01, position[2]-34]} rotation={[0, Math.PI/2, 0]}/>

        <Sidewalk_half position={[position[0]-13.5, position[1]+0.01, position[2]+3]} rotation={[0, Math.PI/2, 0]}/>
        <Sidewalk position={[position[0]-13.5, position[1]+0.01, position[2]-0]} rotation={[0, Math.PI/2, 0]}/>
        <Sidewalk position={[position[0]-13.5, position[1]+0.01, position[2]-3]} rotation={[0, Math.PI/2, 0]}/>
        <Sidewalk position={[position[0]-13.5, position[1]+0.01, position[2]-9]} rotation={[0, Math.PI/2, 0]}/>
        <Sidewalk position={[position[0]-13.5, position[1]+0.01, position[2]-15]} rotation={[0, Math.PI/2, 0]}/>
        <Sidewalk position={[position[0]-13.5, position[1]+0.01, position[2]-21]} rotation={[0, Math.PI/2, 0]}/>
        <Sidewalk position={[position[0]-13.5, position[1]+0.01, position[2]-27]} rotation={[0, Math.PI/2, 0]}/>
        <Sidewalk position={[position[0]-13.5, position[1]+0.01, position[2]-30]} rotation={[0, Math.PI/2, 0]}/>
        <Side position={ [position[0]-13.5, position[1]+0.01, position[2]-34]} rotation={[0, Math.PI/2, 0]}/>

        <Sidewalk_half position={[position[0]-16.5, position[1]+0.01, position[2]+3]} rotation={[0, Math.PI/2, 0]}/>
        <Sidewalk position={[position[0]-16.5, position[1]+0.01, position[2]-0]} rotation={[0, Math.PI/2, 0]}/>
        <Sidewalk position={[position[0]-16.5, position[1]+0.01, position[2]-3]} rotation={[0, Math.PI/2, 0]}/>
        <Sidewalk position={[position[0]-16.5, position[1]+0.01, position[2]-9]} rotation={[0, Math.PI/2, 0]}/>
        <Sidewalk position={[position[0]-16.5, position[1]+0.01, position[2]-15]} rotation={[0, Math.PI/2, 0]}/>
        <Sidewalk position={[position[0]-16.5, position[1]+0.01, position[2]-21]} rotation={[0, Math.PI/2, 0]}/>
        <Sidewalk position={[position[0]-16.5, position[1]+0.01, position[2]-27]} rotation={[0, Math.PI/2, 0]}/>
        <Sidewalk position={[position[0]-16.5, position[1]+0.01, position[2]-30]} rotation={[0, Math.PI/2, 0]}/>
        <Side position={ [position[0]-16.5, position[1]+0.01, position[2]-34]} rotation={[0, Math.PI/2, 0]}/>

        <Sidewalk_half position={[position[0]-19.5, position[1]+0.01, position[2]+3]} rotation={[0, Math.PI/2, 0]}/>
        <Sidewalk position={[position[0]-19.5, position[1]+0.01, position[2]-0]} rotation={[0, Math.PI/2, 0]}/>
        <Sidewalk position={[position[0]-19.5, position[1]+0.01, position[2]-3]} rotation={[0, Math.PI/2, 0]}/>
        <Sidewalk position={[position[0]-19.5, position[1]+0.01, position[2]-9]} rotation={[0, Math.PI/2, 0]}/>
        <Sidewalk position={[position[0]-19.5, position[1]+0.01, position[2]-15]} rotation={[0, Math.PI/2, 0]}/>
        <Sidewalk position={[position[0]-19.5, position[1]+0.01, position[2]-21]} rotation={[0, Math.PI/2, 0]}/>
        <Sidewalk position={[position[0]-19.5, position[1]+0.01, position[2]-27]} rotation={[0, Math.PI/2, 0]}/>
        <Sidewalk position={[position[0]-19.5, position[1]+0.01, position[2]-30]} rotation={[0, Math.PI/2, 0]}/>
        <Side position={ [position[0]-19.5, position[1]+0.01, position[2]-34]} rotation={[0, Math.PI/2, 0]}/>

        <Sidewalk_half position={[position[0]-22.5, position[1]+0.01, position[2]+3]} rotation={[0, Math.PI/2, 0]}/>
        <Sidewalk position={[position[0]-22.5, position[1]+0.01, position[2]-0]} rotation={[0, Math.PI/2, 0]}/>
        <Sidewalk position={[position[0]-22.5, position[1]+0.01, position[2]-3]} rotation={[0, Math.PI/2, 0]}/>
        <Sidewalk position={[position[0]-22.5, position[1]+0.01, position[2]-9]} rotation={[0, Math.PI/2, 0]}/>
        <Sidewalk position={[position[0]-22.5, position[1]+0.01, position[2]-15]} rotation={[0, Math.PI/2, 0]}/>
        <Sidewalk position={[position[0]-22.5, position[1]+0.01, position[2]-21]} rotation={[0, Math.PI/2, 0]}/>
        <Sidewalk position={[position[0]-22.5, position[1]+0.01, position[2]-27]} rotation={[0, Math.PI/2, 0]}/>
        <Sidewalk position={[position[0]-22.5, position[1]+0.01, position[2]-30]} rotation={[0, Math.PI/2, 0]}/>
        <Side position={ [position[0]-22.5, position[1]+0.01, position[2]-34]} rotation={[0, Math.PI/2, 0]}/>
        

        {/* 동쪽 인도 */}
        <Sidewalk position={[position[0]+64.5, position[1]+0.01, position[2]-3]} rotation={[0, Math.PI/2, 0]}/>
        <Sidewalk position={[position[0]+64.5, position[1]+0.01, position[2]-9]} rotation={[0, Math.PI/2, 0]}/>
        <Sidewalk position={[position[0]+64.5, position[1]+0.01, position[2]-15]} rotation={[0, Math.PI/2, 0]}/>
        <Sidewalk position={[position[0]+64.5, position[1]+0.01, position[2]-21]} rotation={[0, Math.PI/2, 0]}/>
        <Sidewalk position={[position[0]+64.5, position[1]+0.01, position[2]-27]} rotation={[0, Math.PI/2, 0]}/>

        {/* 북쪽 인도 */}
        <Sidewalk position={[position[0]+3, position[1]+0.01, position[2]-34.5]} rotation={[0, 0, 0]}/>
        <Sidewalk position={[position[0]+9, position[1]+0.01, position[2]-34.5]} rotation={[0, 0, 0]}/>
        <Sidewalk position={[position[0]+15, position[1]+0.01, position[2]-34.5]} rotation={[0, 0, 0]}/>
        <Sidewalk position={[position[0]+21, position[1]+0.01, position[2]-34.5]} rotation={[0, 0, 0]}/>
        <Sidewalk position={[position[0]+27, position[1]+0.01, position[2]-34.5]} rotation={[0, 0, 0]}/>
        <Sidewalk position={[position[0]+33, position[1]+0.01, position[2]-34.5]} rotation={[0, 0, 0]}/>
        <Sidewalk position={[position[0]+39, position[1]+0.01, position[2]-34.5]} rotation={[0, 0, 0]}/>
        <Sidewalk position={[position[0]+45, position[1]+0.01, position[2]-34.5]} rotation={[0, 0, 0]}/>
        <Sidewalk position={[position[0]+51, position[1]+0.01, position[2]-34.5]} rotation={[0, 0, 0]}/>
        <Sidewalk position={[position[0]+57, position[1]+0.01, position[2]-34.5]} rotation={[0, 0, 0]}/>

        {/* 남쪽 인도 */}
        <Sidewalk position={[position[0]+3, position[1]+0.01, position[2]+4.5]} rotation={[0, 0, 0]}/>
        <Sidewalk position={[position[0]+9, position[1]+0.01, position[2]+4.5]} rotation={[0, 0, 0]}/>
        <Sidewalk position={[position[0]+15, position[1]+0.01, position[2]+4.5]} rotation={[0, 0, 0]}/>
        <Sidewalk position={[position[0]+21, position[1]+0.01, position[2]+4.5]} rotation={[0, 0, 0]}/>
        <Sidewalk position={[position[0]+27, position[1]+0.01, position[2]+4.5]} rotation={[0, 0, 0]}/>
        <Sidewalk position={[position[0]+33, position[1]+0.01, position[2]+4.5]} rotation={[0, 0, 0]}/>
        <Sidewalk position={[position[0]+39, position[1]+0.01, position[2]+4.5]} rotation={[0, 0, 0]}/>
        <Sidewalk position={[position[0]+45, position[1]+0.01, position[2]+4.5]} rotation={[0, 0, 0]}/>
        <Sidewalk position={[position[0]+51, position[1]+0.01, position[2]+4.5]} rotation={[0, 0, 0]}/>
        <Sidewalk position={[position[0]+57, position[1]+0.01, position[2]+4.5]} rotation={[0, 0, 0]}/>

        <Sidewalk position={[position[0]-9, position[1]+0.01, position[2]+6]} rotation={[0, 0, 0]}/>
        <Sidewalk position={[position[0]-15, position[1]+0.01, position[2]+6]} rotation={[0, 0, 0]}/>
        <Sidewalk position={[position[0]-21, position[1]+0.01, position[2]+6]} rotation={[0, 0, 0]}/>
        <Sidewalk position={[position[0]-9, position[1]+0.01, position[2]+9]} rotation={[0, 0, 0]}/>
        <Sidewalk position={[position[0]-15, position[1]+0.01, position[2]+9]} rotation={[0, 0, 0]}/>
        <Sidewalk position={[position[0]-21, position[1]+0.01, position[2]+9]} rotation={[0, 0, 0]}/>
        <Grass position={[position[0]-3, position[1], position[2]+9]}/>
        <Grass position={[position[0]+3, position[1], position[2]+9]}/>
        <Grass position={[position[0]+9, position[1], position[2]+9]}/>
        <Grass position={[position[0]+15, position[1], position[2]+9]}/>

        <Sidewalk position={[position[0]-3, position[1]+0.01, position[2]+13.5]} rotation={[0, 0, 0]}/>
        <Sidewalk position={[position[0]+3, position[1]+0.01, position[2]+13.5]} rotation={[0, 0, 0]}/>
        <Sidewalk position={[position[0]+9, position[1]+0.01, position[2]+13.5]} rotation={[0, 0, 0]}/>
        <Sidewalk position={[position[0]+12, position[1]+0.01, position[2]+13.5]} rotation={[0, 0, 0]}/>
        <Sidewalk position={[position[0]+18, position[1]+0.01, position[2]+13.5]} rotation={[0, 0, 0]}/>
        <Sidewalk_half position={[position[0]+21, position[1]+0.01, position[2]+10.5]}/>

        <Sidewalk_corner_7 position={[position[0]+15, position[1]+0.01, position[2]+9]}/>
        <Sidewalk_corner_7 position={[position[0]+15, position[1]+0.01, position[2]+9]} rotation={[0, -Math.PI/2, 0]}/>
        <Sidewalk_corner_7 position={[position[0]-3, position[1]+0.01, position[2]+9]} rotation={[0, Math.PI, 0]}/>
        <Sidewalk_corner_7 position={[position[0]-3, position[1]+0.01, position[2]+9]} rotation={[0, Math.PI/2, 0]}/>

        <Sidewalk position={[position[0]-6, position[1]+0.01, position[2]+16]} rotation={[0, 0, 0]}/>
        <Sidewalk position={[position[0]-0, position[1]+0.01, position[2]+16]} rotation={[0, 0, 0]}/>
        <Sidewalk position={[position[0]+6, position[1]+0.01, position[2]+16]} rotation={[0, 0, 0]}/>
        <Sidewalk position={[position[0]+12, position[1]+0.01, position[2]+16]} rotation={[0, 0, 0]}/>
        <Sidewalk position={[position[0]+18, position[1]+0.01, position[2]+16]} rotation={[0, 0, 0]}/>
        <Sidewalk position={[position[0]+24, position[1]+0.01, position[2]+16]} rotation={[0, 0, 0]}/>
        <Sidewalk position={[position[0]+30, position[1]+0.01, position[2]+16]} rotation={[0, 0, 0]}/>
        <Sidewalk position={[position[0]+36, position[1]+0.01, position[2]+16]} rotation={[0, 0, 0]}/>
        <Sidewalk position={[position[0]+42, position[1]+0.01, position[2]+16]} rotation={[0, 0, 0]}/>
        <Sidewalk position={[position[0]+48, position[1]+0.01, position[2]+16]} rotation={[0, 0, 0]}/>
        <Sidewalk position={[position[0]+54, position[1]+0.01, position[2]+16]} rotation={[0, 0, 0]}/>
        <Sidewalk position={[position[0]+60, position[1]+0.01, position[2]+16]} rotation={[0, 0, 0]}/>
        <Sidewalk_half position={[position[0]+66, position[1]+0.01, position[2]+16]} rotation={[0, 0, 0]}/>

        <Sidewalk position={[position[0]-6,  position[1]+0.01, position[2]+19]} rotation={[0, 0, 0]}/>
        <Sidewalk position={[position[0]-0,  position[1]+0.01, position[2]+19]} rotation={[0, 0, 0]}/>
        <Sidewalk position={[position[0]+6,  position[1]+0.01, position[2]+19]} rotation={[0, 0, 0]}/>
        <Sidewalk position={[position[0]+12, position[1]+0.01, position[2]+19]} rotation={[0, 0, 0]}/>
        <Sidewalk position={[position[0]+18, position[1]+0.01, position[2]+19]} rotation={[0, 0, 0]}/>
        <Sidewalk position={[position[0]+24, position[1]+0.01, position[2]+19]} rotation={[0, 0, 0]}/>
        <Sidewalk position={[position[0]+30, position[1]+0.01, position[2]+19]} rotation={[0, 0, 0]}/>
        <Sidewalk position={[position[0]+36, position[1]+0.01, position[2]+19]} rotation={[0, 0, 0]}/>
        <Sidewalk position={[position[0]+42, position[1]+0.01, position[2]+19]} rotation={[0, 0, 0]}/>
        <Sidewalk position={[position[0]+48, position[1]+0.01, position[2]+19]} rotation={[0, 0, 0]}/>
        <Sidewalk position={[position[0]+54, position[1]+0.01, position[2]+19]} rotation={[0, 0, 0]}/>
        <Sidewalk position={[position[0]+60, position[1]+0.01, position[2]+19]} rotation={[0, 0, 0]}/>
        <Sidewalk_half position={[position[0]+66, position[1]+0.01, position[2]+19]} rotation={[0, 0, 0]}/>

        <Sidewalk position={[position[0]-6, position[1]+0.01,  position[2]+22]} rotation={[0, 0, 0]}/>
        <Sidewalk position={[position[0]-0, position[1]+0.01,  position[2]+22]} rotation={[0, 0, 0]}/>
        <Sidewalk position={[position[0]+6, position[1]+0.01,  position[2]+22]} rotation={[0, 0, 0]}/>
        <Sidewalk position={[position[0]+12, position[1]+0.01, position[2]+22]} rotation={[0, 0, 0]}/>
        <Sidewalk position={[position[0]+18, position[1]+0.01, position[2]+22]} rotation={[0, 0, 0]}/>
        <Sidewalk position={[position[0]+24, position[1]+0.01, position[2]+22]} rotation={[0, 0, 0]}/>
        <Sidewalk position={[position[0]+30, position[1]+0.01, position[2]+22]} rotation={[0, 0, 0]}/>
        <Sidewalk position={[position[0]+36, position[1]+0.01, position[2]+22]} rotation={[0, 0, 0]}/>
        <Sidewalk position={[position[0]+42, position[1]+0.01, position[2]+22]} rotation={[0, 0, 0]}/>
        <Sidewalk position={[position[0]+48, position[1]+0.01, position[2]+22]} rotation={[0, 0, 0]}/>
        <Sidewalk position={[position[0]+54, position[1]+0.01, position[2]+22]} rotation={[0, 0, 0]}/>
        <Sidewalk position={[position[0]+60, position[1]+0.01, position[2]+22]} rotation={[0, 0, 0]}/>
        <Sidewalk_half position={[position[0]+66, position[1]+0.01, position[2]+22]} rotation={[0, 0, 0]}/>

        <Sidewalk position={[position[0]-6, position[1]+0.01,  position[2]+25]} rotation={[0, 0, 0]}/>
        <Sidewalk position={[position[0]-0, position[1]+0.01,  position[2]+25]} rotation={[0, 0, 0]}/>
        <Sidewalk position={[position[0]+6, position[1]+0.01,  position[2]+25]} rotation={[0, 0, 0]}/>
        <Sidewalk position={[position[0]+12, position[1]+0.01, position[2]+25]} rotation={[0, 0, 0]}/>
        <Sidewalk position={[position[0]+18, position[1]+0.01, position[2]+25]} rotation={[0, 0, 0]}/>
        <Sidewalk position={[position[0]+24, position[1]+0.01, position[2]+25]} rotation={[0, 0, 0]}/>
        <Sidewalk position={[position[0]+30, position[1]+0.01, position[2]+25]} rotation={[0, 0, 0]}/>
        <Sidewalk position={[position[0]+36, position[1]+0.01, position[2]+25]} rotation={[0, 0, 0]}/>
        <Sidewalk position={[position[0]+42, position[1]+0.01, position[2]+25]} rotation={[0, 0, 0]}/>
        <Sidewalk position={[position[0]+48, position[1]+0.01, position[2]+25]} rotation={[0, 0, 0]}/>
        <Sidewalk position={[position[0]+54, position[1]+0.01, position[2]+25]} rotation={[0, 0, 0]}/>
        <Sidewalk position={[position[0]+60, position[1]+0.01, position[2]+25]} rotation={[0, 0, 0]}/>
        <Sidewalk_half position={[position[0]+66, position[1]+0.01, position[2]+25]} rotation={[0, 0, 0]}/>

        <Sidewalk position={[position[0]-6, position[1]+0.01,  position[2]+28]} rotation={[0, 0, 0]}/>
        <Sidewalk position={[position[0]-0, position[1]+0.01,  position[2]+28]} rotation={[0, 0, 0]}/>
        <Sidewalk position={[position[0]+6, position[1]+0.01,  position[2]+28]} rotation={[0, 0, 0]}/>
        <Sidewalk position={[position[0]+12, position[1]+0.01, position[2]+28]} rotation={[0, 0, 0]}/>
        <Sidewalk position={[position[0]+18, position[1]+0.01, position[2]+28]} rotation={[0, 0, 0]}/>
        <Sidewalk position={[position[0]+24, position[1]+0.01, position[2]+28]} rotation={[0, 0, 0]}/>
        <Sidewalk position={[position[0]+30, position[1]+0.01, position[2]+28]} rotation={[0, 0, 0]}/>
        <Sidewalk position={[position[0]+36, position[1]+0.01, position[2]+28]} rotation={[0, 0, 0]}/>
        <Sidewalk position={[position[0]+42, position[1]+0.01, position[2]+28]} rotation={[0, 0, 0]}/>
        <Sidewalk position={[position[0]+48, position[1]+0.01, position[2]+28]} rotation={[0, 0, 0]}/>
        <Sidewalk position={[position[0]+54, position[1]+0.01, position[2]+28]} rotation={[0, 0, 0]}/>
        <Sidewalk position={[position[0]+60, position[1]+0.01, position[2]+28]} rotation={[0, 0, 0]}/>
        <Sidewalk_half position={[position[0]+66, position[1]+0.01, position[2]+28]} rotation={[0, 0, 0]}/>

        <Sidewalk position={[position[0]+24, position[1]+0.01, position[2]+10]} rotation={[0, 0, 0]}/>
        <Sidewalk position={[position[0]+30, position[1]+0.01, position[2]+10]} rotation={[0, 0, 0]}/>
        <Sidewalk position={[position[0]+36, position[1]+0.01, position[2]+10]} rotation={[0, 0, 0]}/>
        <Sidewalk position={[position[0]+42, position[1]+0.01, position[2]+10]} rotation={[0, 0, 0]}/>
        <Sidewalk position={[position[0]+48, position[1]+0.01, position[2]+10]} rotation={[0, 0, 0]}/>
        <Sidewalk position={[position[0]+54, position[1]+0.01, position[2]+10]} rotation={[0, 0, 0]}/>
        <Sidewalk position={[position[0]+60, position[1]+0.01, position[2]+10]} rotation={[0, 0, 0]}/>
        <Sidewalk_half position={[position[0]+66, position[1]+0.01, position[2]+10]} rotation={[0, 0, 0]}/>

        <Sidewalk position={[position[0]+24, position[1]+0.01, position[2]+13]} rotation={[0, 0, 0]}/>
        <Sidewalk position={[position[0]+30, position[1]+0.01, position[2]+13]} rotation={[0, 0, 0]}/>
        <Sidewalk position={[position[0]+36, position[1]+0.01, position[2]+13]} rotation={[0, 0, 0]}/>
        <Sidewalk position={[position[0]+42, position[1]+0.01, position[2]+13]} rotation={[0, 0, 0]}/>
        <Sidewalk position={[position[0]+48, position[1]+0.01, position[2]+13]} rotation={[0, 0, 0]}/>
        <Sidewalk position={[position[0]+54, position[1]+0.01, position[2]+13]} rotation={[0, 0, 0]}/>
        <Sidewalk position={[position[0]+60, position[1]+0.01, position[2]+13]} rotation={[0, 0, 0]}/>
        <Sidewalk_half position={[position[0]+66, position[1]+0.01, position[2]+13]} rotation={[0, 0, 0]}/>

        <Sidewalk_half position={[position[0]+21, position[1]+0.01, position[2]+7.5]}/>
        <Sidewalk position={[position[0]+24, position[1]+0.01, position[2]+7.5]}/>
        <Sidewalk position={[position[0]+30, position[1]+0.01, position[2]+7.5]}/>
        <Sidewalk position={[position[0]+36, position[1]+0.01, position[2]+7.5]}/>
        <Sidewalk position={[position[0]+42, position[1]+0.01, position[2]+7.5]}/>
        <Sidewalk position={[position[0]+48, position[1]+0.01, position[2]+7.5]}/>
        <Sidewalk position={[position[0]+54, position[1]+0.01, position[2]+7.5]}/>
        <Sidewalk position={[position[0]+60, position[1]+0.01, position[2]+7.5]}/>
        <Sidewalk_half position={[position[0]+66, position[1]+0.01, position[2]+7.5]}/>

        
        
    </group>
    );
} 