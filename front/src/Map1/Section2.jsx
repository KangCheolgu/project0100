import { Building_7_Blue, Building_9_Blue, Building_8_Green, Building_5_Green, Building_6_Green, Building_4_Red, Building_3_Red, Building_2, Building_8_Red, Building_9_Red, Building_1_Red, Building_10_Red, Building_10_Blue, Building_5_Red } from "../components/resort/Buildings"

export default function Section2(props){
    const position = props.position
    return(<group castShadow receiveShadow >
        <Building_8_Green  position={[position[0]+33, position[1], position[2]-10]} rotation={[0, Math.PI/2, 0]}/>
        <Building_8_Red position={[position[0]+33, position[1], position[2]-20]} rotation={[0, Math.PI/2, 0]}/>
    </group>
    );
}