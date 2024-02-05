import { } from "@react-three/cannon";
import { useEffect, useMemo, useRef, useState, forwardRef } from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import { Building } from "../components/resort/Buildings";

export default function Section1(props){
    return(<group castShadow receiveShadow >

    <Building position={[60, 0, -100]} />

    </group>
    );
}