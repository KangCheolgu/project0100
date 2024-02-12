import { Bench } from "../components/resort/Objects.jsx";
import { TownCenter } from "../components/TownCenter.jsx";
import { Palm_1, Palm_2, Palm_3, Palm_4, Palm_5 } from "../components/resort/Trees.jsx";
export default function Section3(props){
    const position = props.position
    return(<group castShadow receiveShadow >
        <TownCenter position={[position[0]+51, position[1]+0, position[2]-15]} scale={3}/>
        <Bench position={[position[0]+48, position[1]+0, position[2]-8]} rotation={[0, Math.PI*3/4, 0]}/>
        <Bench position={[position[0]+54, position[1]+0, position[2]-10]} rotation={[0, -Math.PI*3/4, 0]}/>
        <Bench position={[position[0]+51, position[1]+0, position[2]+-9]} rotation={[0, Math.PI, 0]}/>
        <Bench position={[position[0]+48, position[1]+0, position[2]+-20]} rotation={[0, Math.PI/4, 0]}/>
        <Bench position={[position[0]+54, position[1]+0, position[2]-20]} rotation={[0, -Math.PI/4, 0]}/>
        <Bench position={[position[0]+51, position[1]+0, position[2]-21]} rotation={[0, 0, 0]}/>
        
        <Palm_2 position={[position[0]+47, position[1]+0, position[2]-21]}/>
        <Palm_3 position={[position[0]+47, position[1]+0, position[2]-15]}/>
        <Palm_4 position={[position[0]+47, position[1]+0, position[2]-9]}/>
        <Palm_5 position={[position[0]+56, position[1]+0, position[2]-21]}/>
        <Palm_2 position={[position[0]+56, position[1]+0, position[2]-15]}/>
        <Palm_5 position={[position[0]+56, position[1]+0, position[2]-9]}/>
        
    </group>
    );
}