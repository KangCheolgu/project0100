import { Tent } from "./components/Tent";
import { Hut } from "./components/Hut";
import { Cabin } from "./components/Cabin";

export default function Section5(props){
    const position = props.position
    return(<group castShadow receiveShadow >
        <Tent position={[position[0]+33,position[1]+0,position[2]+10]} scale={5} rotation = {[0, -Math.PI/6, 0]}/>
        <Tent position={[position[0]+42,position[1]+0,position[2]+10]} scale={5} rotation = {[0, Math.PI/6, 0]}/>
        <Cabin position={[position[0]+3,position[1]+0,position[2]+17]} scale={[0.01, 0.01, 0.005]} rotation = {[0, Math.PI, 0]}/>
        <Cabin position={[position[0]+13,position[1]+0,position[2]+17]} scale={[0.01, 0.01, 0.005]} rotation = {[0, Math.PI, 0]}/>

    </group>
    );
}