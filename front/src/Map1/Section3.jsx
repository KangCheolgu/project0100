import { Bench } from "../components/resort/Objects.jsx";
import { TownCenter } from "../components/TownCenter.jsx";
import { ParkTreeGreen, ParkTreePink } from "../components/ParkTrees.jsx";

export default function Section3(props){
    return(<group castShadow receiveShadow >
        <TownCenter position={[51, 0, -15]} scale={3}/>
        <Bench position={[48, 0, -8]} rotation={[0, Math.PI*3/4, 0]}/>
        <Bench position={[54, 0, -10]} rotation={[0, -Math.PI*3/4, 0]}/>
        <Bench position={[51, 0, -9]} rotation={[0, Math.PI, 0]}/>
        <Bench position={[48, 0, -20]} rotation={[0, Math.PI/4, 0]}/>
        <Bench position={[54, 0, -20]} rotation={[0, -Math.PI/4, 0]}/>
        <Bench position={[51, 0, -21]} rotation={[0, 0, 0]}/>
        <ParkTreePink position={[55.5, 0, -21]}/>
        <ParkTreeGreen position={[47, 0, -15]}/>
        <ParkTreePink position={[55.5, 0, -9]}/>
        <ParkTreeGreen position={[56, 0, -21]}/>
        <ParkTreePink position={[64.5, 0, -15]}/>
        <ParkTreeGreen position={[56, 0, -9]}/>
        
    </group>
    );
}