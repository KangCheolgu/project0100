import { BuildingSmallOrange, BuildingSmallRed,BuildingSmallRedPalnt,BuildingSmallSide,Building5, Building5_1, Building6, Building_6_1, Building_7, Building_8, Building_8_1, Building_9, Building_9_1, Building_10, Building_10_1, Building_10_1_1, Building_10_1_2} from "./components/resort/Buildings.jsx"
import { Bench } from "./components/resort/Objects.jsx";
import { TownCenter } from "./components/TownCenter.jsx";
import { TreeGreen, TreePink } from "./components/Trees.jsx";


export default function Section1(props){
    return(<group castShadow receiveShadow >
        <TownCenter position={[51, 0, -15]} scale={3}/>
        <Bench position={[48, 0, -10]} rotation={[0, Math.PI*3/4, 0]}/>
        <Bench position={[54, 0, -10]} rotation={[0, -Math.PI*3/4, 0]}/>
        <Bench position={[51, 0, -9]} rotation={[0, Math.PI, 0]}/>
        <Bench position={[48, 0, -20]} rotation={[0, Math.PI/4, 0]}/>
        <Bench position={[54, 0, -20]} rotation={[0, -Math.PI/4, 0]}/>
        <Bench position={[51, 0, -21]} rotation={[0, 0, 0]}/>
        <TreePink position={[55.5, 0, -21]}/>
        <TreeGreen position={[47, 0, -15]}/>
        <TreePink position={[55.5, 0, -9]}/>
        <TreeGreen position={[56, 0, -21]}/>
        <TreePink position={[64.5, 0, -15]}/>
        <TreeGreen position={[56, 0, -9]}/>
        
    </group>
    );
}