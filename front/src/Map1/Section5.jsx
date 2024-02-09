import { Tent } from "../components/Tent";
import { Hut } from "../components/Hut";
import { Cabin } from "../components/Cabin";
import { BeachBall } from "../components/BeachBall";
import { Surfboard } from "../components/Surfboard";

export default function Section5(props){
    const position = props.position
    return(<group castShadow receiveShadow >
        <Tent position={[position[0]+33,position[1]+1.1,position[2]+13]} scale={5} rotation = {[0, -Math.PI/6, 0]}/>
        <Tent position={[position[0]+42,position[1]+1.1,position[2]+13]} scale={5} rotation = {[0, Math.PI/6, 0]}/>
        {/*<Cabin position={[position[0]+3,position[1]+0,position[2]+17]} scale={[0.01, 0.01, 0.005]} rotation = {[0, Math.PI, 0]}/>
        <Cabin position={[position[0]+13,position[1]+0,position[2]+17]} scale={[0.01, 0.01, 0.005]} rotation = {[0, Math.PI, 0]}/>*/}
        <BeachBall position={[position[0]+22,position[1]+2,position[2]+10]} scale={10}/>
        <Surfboard position={[position[0]+50,position[1]+5,position[2]+10]} scale = {0.3} rotation = {[0, Math.PI/2, 0]}/>
    </group>
    );
}