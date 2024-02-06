import { Building_7_Blue, Building_9_Blue, Building_8_Green, Building_5_Green, Building_6_Green, Building_4_Red, Building_3_Red, Building_2, Building_8_Red, Building_9_Red, Building_1_Red, Building_10_Red, Building_10_Blue, Building_5_Red, Building_10_1_Blue } from "../components/resort/Buildings"

export default function Section4(props){
    return(<group castShadow receiveShadow >
        <Building_9_Blue position={[-10, 0, -24]} rotation={[0, Math.PI/2, 0]}/>
        <Building_10_Blue position={[-8.5, 0, -31]} rotation={[0, Math.PI/2, 0]}/>
        <Building_10_Red position={[-9.5, 0, -9]} rotation={[0, Math.PI/2, 0]}/>
        <Building_5_Green position={[-8.5, 0,-15]} rotation={[0, Math.PI/2, 0]}/>
        <Building_9_Red position={[-8.5, 0,0]} rotation={[0, Math.PI/2, 0]}/>
    </group>
    );
}