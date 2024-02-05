import { Fence2 } from "./components/resort/Objects.jsx";
import { TownCenter } from "./components/TownCenter.jsx";
import { TreeGreen, TreePink } from "./components/Trees.jsx";
import { Bamboo, FlowerBush } from "./components/Plants.jsx";

export default function Section4(props){
    return(<group castShadow receiveShadow >

        <Fence2 position={[-8, 0, -11]}/>
        <Fence2 position={[-11, 0, -11]}/>
        <Fence2 position={[-14, 0, -11]}/>


        <Bamboo position={[-2, 4, 9]} scale={4}/>
        <Bamboo position={[-1, 4, 10]} scale={4}/>
        <Bamboo position={[0, 4, 9]} scale={4}/>
        <Bamboo position={[2, 4, 9]} scale={4}/>
        <Bamboo position={[3, 4, 10]} scale={4}/>
        <Bamboo position={[4, 4, 9]} scale={4}/>
        <Bamboo position={[6, 4, 9]} scale={4}/>
        <Bamboo position={[7, 4, 10]} scale={4}/>
        <Bamboo position={[8, 4, 9]} scale={4}/>


        <FlowerBush position={[0, 0, 0]}/>
        
    </group>
    );
}