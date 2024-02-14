import { } from "@react-three/cannon";
import { useEffect, useMemo, useRef, useState, forwardRef } from "react";
import * as THREE from "three";
import { useFrame} from "@react-three/fiber";
import { Building_7_Blue, Building_9_Blue, Building_8_Green, Building_5_Green, Building_6_Green, Building_4_Red, Building_3_Red, Building_2, Building_8_Red, Building_9_Red, Building_1_Red, Building_10_Red, Building_10_Blue, Building_5_Red } from "../components/resort/Buildings"
import { IceCreamCart } from "../components/resort/Vehicles1";

export default function Section1(props){
    const position = props.position
    return(<group castShadow receiveShadow >
        
        <Building_2  rotation={[0, -Math.PI/2, 0]} position={[position[0]+7.5 , position[1], position[2]-8]} scale={1}/>
        <Building_3_Red position={[position[0]+16, position[1], position[2]-21.5]} rotation={[0, Math.PI/2, 0]} scale={1}/>
        <Building_4_Red position={[position[0]+8, position[1], position[2]-22]} rotation={[0, -Math.PI/2, 0]}/>
        <Building_5_Green position={[position[0]+13, position[1], position[2]-7.5]}/>
        <Building_6_Green position={[position[0]+7.5, position[1], position[2]-15]} rotation={[0, Math.PI/2, 0]}/>
        <Building_7_Blue  position={[position[0]+16, position[1], position[2]-14]} rotation={[0, Math.PI/2, 0]}/>

        
    </group>
    );
}