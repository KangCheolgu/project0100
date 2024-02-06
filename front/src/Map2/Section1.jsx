import { } from "@react-three/cannon";
import { Building_7_Blue, Building_9_Blue, Building_8_Green, Building_5_Green, Building_6_Green, Building_4_Red, Building_3_Red, Building_2, Building_8_Red, Building_9_Red, Building_1_Red, Building_10_Red, Building_10_Blue, Building_5_Red, Building_10_1_Blue } from "../components/resort/Buildings"
import { CarRed } from "../components/resort/Vehicles";
import { Palm_1, Palm_2, Palm_3, Palm_4, Palm_5 } from "../components/Trees";

export default function Section1(props){
    return(<group castShadow receiveShadow >

    <Building_10_Blue position={[70, 0, -69.5]} />
    <Building_9_Red position={[68, 0, -75.3]} rotation={[0, Math.PI / 2, 0]} />
    <Building_5_Red position={[67.5, 0, -81.5]} rotation={[0, -Math.PI / 2, 0]}/>
    <Building_10_Red position={[67.5, 0, -86.5]} rotation={[0, -Math.PI / 2, 0]}/>
    <Building_4_Red position={[65.5, 0, -94]} rotation={[0, 0, 0]} />
    <Building_9_Blue position={[59.5, 0, -98]} rotation={[0, 0, 0]} />
    <Building_9_Red position={[40.5, 0, -97]} rotation={[0, 0, 0]} />
    <Building_10_Blue position={[46, 0, -98]} rotation={[0, Math.PI / 2, 0]}/>

    <Building_2 position={[51.5, 0, -80]} rotation={[0, Math.PI / 2, 0]}/>

    <Building_2 position={[42, 0, -54]} rotation={[0, Math.PI, 0]}/>

    <Building_2 position={[31, 0, -54]} rotation={[0, Math.PI, 0]}/>
    
    <Building_3_Red position={[37, 0, -54]} rotation={[0, Math.PI, 0]} />

    <Building_9_Blue position={[31.5, 0, -90]} rotation={[0, Math.PI / 2, 0]} />

    <Building_8_Green position={[32, 0, -98]} rotation={[0, 0, 0]} />

    <Building_7_Blue position={[33, 0, -80]} rotation={[0, Math.PI / 2, 0]} />

    <Building_3_Red position={[33, 0, -73]} rotation={[0, Math.PI / 2, 0]} />

    <Building_10_Red position={[25, 0, -98]} rotation={[0, 0, 0]}/>

    <Building_10_Red position={[19, 0, -98]} rotation={[0, 0, 0]}/>

    <Building_9_Red position={[11, 0, -98]} rotation={[0, 0, 0]} />

    <Building_9_Blue position={[3, 0, -99.5]} rotation={[0, 0, 0]} />

    <Building_8_Green position={[-9, 0, -98]} rotation={[0, Math.PI / 2, 0]} />

    <Building_9_Red position={[-8, 0, -87]} rotation={[0, Math.PI / 2, 0]} />

    <Building_7_Blue position={[-7, 0, -78]} rotation={[0, Math.PI / 2, 0]} />

    <Building_9_Blue position={[-9, 0, -71]} rotation={[0, Math.PI / 2, 0]} />


    <CarRed position={[62, -0.09, -70]} />

    <Palm_1 position={[58, -0.09, -70]} />


    </group>
    );
}