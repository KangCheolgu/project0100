import { BuildingSmallOrange, BuildingSmallRed,BuildingSmallRedPalnt,BuildingSmallSide,Building5, Building5_1, Building6, Building_6_1, Building_7, Building_8, Building_8_1, Building_9, Building_9_1, Building_10, Building_10_1, Building_10_1_1, Building_10_1_2} from "./components/resort/Buildings.jsx"
export default function Section1(props){
    return(<group castShadow receiveShadow >
        <BuildingSmallRed position={[32.5, 0, -9.5]} rotation={[0, -Math.PI/2, 0]} scale={[0.9, 0.90, 0.9]}/>
        <Building_8_1 position={[32.5, 0, -20]} rotation={[0, -Math.PI/2, 0]} scale={[0.5, 0.5, 0.5]}/>
    </group>
    );
}