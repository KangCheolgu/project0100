import { } from "@react-three/cannon";
import { Building_7_Blue, Building_9_Blue, Building_8_Green, Building_5_Green, Building_6_Green, Building_4_Red, Building_3_Red, Building_2, Building_8_Red, Building_9_Red, Building_1_Red, Building_10_Red, Building_10_Blue, Building_5_Red } from "../components/resort/Buildings"

export default function Section1(props){
    return(<group castShadow receiveShadow >

    <Building_10_Blue position={[70, 0, -69.5]} />
    <Building_9_Red position={[68, 0, -75.3]} rotation={[0, Math.PI / 2, 0]} />
    <Building_5_Red position={[67.5, 0, -81.5]} rotation={[0, -Math.PI / 2, 0]}/>
    <Building_10_Red position={[67.5, 0, -86.5]} rotation={[0, -Math.PI / 2, 0]}/>

    </group>
    );
}