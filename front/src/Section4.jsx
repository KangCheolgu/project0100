import { BuildingSmallOrange, BuildingSmallRed,BuildingSmallRedPalnt,BuildingSmallSide,Building5, Building5_1, Building6, Building_6_1, Building_7, Building_8, Building_8_1, Building_9, Building_9_1, Building_10, Building_10_1, Building_10_1_1, Building_10_1_2} from "./components/resort/Buildings.jsx"
import { Fence2 } from "./components/resort/Objects.jsx";
import { TownCenter } from "./components/TownCenter.jsx";
import { TreeGreen, TreePink } from "./components/Trees.jsx";
import { Bamboo, FlowerBush } from "./components/Plants.jsx";

export default function Section4(props){
    return(<group castShadow receiveShadow >
        <Building_9_1 position={[-11, 0, -1.5]} rotation={[0, Math.PI/2, 0]}/>
        <Fence2 position={[-8, 0, -11]}/>
        <Fence2 position={[-11, 0, -11]}/>
        <Fence2 position={[-14, 0, -11]}/>
        <Building_10_1_2 position={[-11.5, 0, -17.5]} rotation={[0, Math.PI/2, 0]}/>

        <Bamboo position={[-2, 4, 9]} scale={4}/>
        <Bamboo position={[-1, 4, 10]} scale={4}/>
        <Bamboo position={[0, 4, 9]} scale={4}/>
        <Bamboo position={[2, 4, 9]} scale={4}/>
        <Bamboo position={[3, 4, 10]} scale={4}/>
        <Bamboo position={[4, 4, 9]} scale={4}/>
        <Bamboo position={[6, 4, 9]} scale={4}/>
        <Bamboo position={[7, 4, 10]} scale={4}/>
        <Bamboo position={[8, 4, 9]} scale={4}/>

        <Building_9 position={[-11, 0, 14.5]} rotation={[0, Math.PI/2, 0]}/>
        <FlowerBush position={[0, 0, 0]}/>
        
    </group>
    );
}