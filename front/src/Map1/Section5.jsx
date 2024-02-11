import { Tent } from "../components/Tent";
import { Hut } from "../components/Hut";
import { Cabin } from "../components/Cabin";
import { BeachBall } from "../components/BeachBall";
import { Surfboard } from "../components/Surfboard";
import {Grass, Road_1,Road_4, Road_3,Sidewalk_2, Sidewalk, Sidewalk_half, Road_half_3, Sidewalk_corner_3,Sidewalk_corner_7, Border_1, Border_2, Border_3, Border_4, Border_4_1} from "../components/resort/Roads";
import { Palm_1, Palm_2, Palm_3, Palm_4, Palm_5, Grass_Tree, Clumb_1, Clumb_2, Clumb_3, Clumb_4, Clumb_5, Clumb_6, Clumb_7, Clumb_8, Bush_1_1, Bush_2_1, Bush_3_1 } from "../components/resort/Trees";
import { Rock1 } from "../components/Rock1";
import { RockLarge1 } from "../components/RockLarge1";
import { RockLarge2 } from "../components/RockLarge2";
import { RockLarge3 } from "../components/RockLarge3";
import ColliderBox from "../ColliderBox";
import { Cliff } from "../components/Cliff";
import { Umbrella } from "../components/resort/Objects";
import { RedUmbrella } from "../components/RedUmbrella";
import { BlueUmbrella } from "../components/BlueUmbrella";
import { RainbowUmbrella } from "../components/RainbowUmbrella";
import { DarkUmbrella } from "../components/DarkUmbrella";
import { Chair1 } from "../components/Chair1";
import { Chair2 } from "../components/Chair2";
import { SandCastle } from "../components/SandCastle";
import { Surfboard2 } from "../components/Surfboard2";
import { Seagull1 } from "../components/Seagull1";
import { Seagull2 } from "../components/Seagull2";
import { Duck } from "../components/Duck";


export default function Section5(props){
    const position = props.position
    return(<group castShadow receiveShadow >
        <Duck position={[position[0]+37,position[1]-0.5,position[2]+13]} rotation={[0, Math.PI/2, 0]}/>
        <Chair1 scale={7} position={[position[0]+43,position[1]-0.1,position[2]+30]} rotation={[0, Math.PI/3, 0]}/>
        <Chair2 scale={20} position={[position[0]+47,position[1]-0.1,position[2]+50]} />
        <Chair2 scale={20} position={[position[0]+15,position[1]-0.1,position[2]+50]} rotation={[0, -Math.PI/3, 0]}/> 
        <Seagull1 position={[position[0]+49,position[1]-0.5,position[2]+42]} scale={0.09} rotation={[0, Math.PI/3, 0]}/>
        <Seagull2 position={[position[0]+55,position[1]+2.2,position[2]+40]} rotation={[0, -Math.PI/3, 0]} scale={0.09}/>
        <SandCastle scale={0.08} position={[position[0]+20,position[1]-0.5,position[2]+22]}/>
        <BlueUmbrella scale={10} position={[position[0]+10,position[1]+2,position[2]+30]}/>
        <RedUmbrella scale={10} position={[position[0]+14,position[1]+2,position[2]+50]}/>
        <BlueUmbrella scale={10} position={[position[0]+28,position[1]+2,position[2]+50]}/>
        <RedUmbrella scale={10} position={[position[0]+50,position[1]+2,position[2]+50]}/>
        <BlueUmbrella scale={10} position={[position[0]+40,position[1]+2,position[2]+30]}/>
        <Palm_1 position={[position[0]-5,position[1]-1,position[2]+43]}/>
        <Palm_1 position={[position[0]+60,position[1]-1,position[2]+43]}/>
        <Palm_2 position={[position[0]+10,position[1]-0.5,position[2]+40]}/>
        <Palm_2 position={[position[0]+35,position[1]-0.5,position[2]+20]}/>
        <Palm_3 position={[position[0]+20,position[1]-0.5,position[2]+43]}/>
        <Palm_3 position={[position[0]+30,position[1]-0.5,position[2]+30]}/>
        <Palm_4 position={[position[0]+30,position[1]-0.5,position[2]+40]}/>
        <Palm_4 position={[position[0]+20,position[1]-0.5,position[2]+30]}/>
        <Palm_2 position={[position[0]+40,position[1]-0.5,position[2]+43]}/>
        <Cliff position={[position[0]-25,position[1]+13,position[2]+40]} scale={[0.05, 0.04, 0.05]} rotation={[0, Math.PI/2, 0]}/>
        <Cliff position={[position[0]+80,position[1]+13,position[2]+40]} scale={[0.05, 0.04, 0.05]} rotation={[0, -Math.PI/2, 0]}/>
        <Palm_1 position={[position[0]+5,position[1]-0.5,position[2]+10]}/>
        <Palm_2 position={[position[0]+4,position[1]-0.5,position[2]+12]}/>
        <Palm_3 position={[position[0]-4,position[1]-0.5,position[2]+10]}/>
        <Palm_4 position={[position[0]-5,position[1]-0.5,position[2]+12]} rotation = {[0, Math.PI/2, 0]}/>
        <Palm_2 position={[position[0]-4,position[1]-0.5,position[2]+14]}/>
        <Tent position={[position[0]+52,position[1]+0,position[2]+16]} scale={4} rotation = {[0, Math.PI/6, 0]}/>
        <Tent position={[position[0]+52,position[1],position[2]+24]} scale={4} rotation = {[0, Math.PI/6, 0]}/>
        <BeachBall position={[position[0]+6,position[1]+2,position[2]+18]} scale={10}/>
        <BeachBall position={[position[0]+6,position[1]+2,position[2]+18]} scale={10}/>
        <Surfboard position={[position[0]+6,position[1]+3,position[2]+25]} scale = {0.2} rotation = {[0, Math.PI/2, 0]}/>
        <Road_1 position={[position[0]+0, position[1]-0.26, position[2]+6]} rotation={[Math.PI/36, 0, 0]}/>
        {/*<mesh geometry={boxGeometry} material={material} position={[0, -0.4, 6]} scale={[6, 0.1, 6]} rotation={[Math.PI/36, 0, 0]}/>*/}
        <ColliderBox position={[position[0]+0, position[1]-0.26, position[0]+6]} scale={[6, 0.1, 6]} rotation={[Math.PI/36, 0, 0]}/>
        
        <mesh position={[position[0]+6, position[1]-0.26, position[2]+6]} rotation={[-Math.PI/2+Math.PI/36, 0, 0]}>
            <planeGeometry args={[6, 6]}/>
            <meshBasicMaterial color="#929292"/>
        </mesh>
        <ColliderBox position={[position[0]+6, position[1]-0.26, position[0]+6]} scale={[6, 0.1, 6]} rotation={[Math.PI/36, 0, 0]}/>
        
        <mesh position={[position[0]+12, position[1]-0.26, position[2]+6]} rotation={[-Math.PI/2+Math.PI/36, 0, 0]}>
            <planeGeometry args={[6, 6]}/>
            <meshBasicMaterial color="#929292"/>
        </mesh>
        <ColliderBox position={[position[0]+12, position[1]-0.26, position[0]+6]} scale={[6, 0.1, 6]} rotation={[Math.PI/36, 0, 0]}/>

        <mesh position={[position[0]+12, position[1]-0.26, position[2]+6]} rotation={[-Math.PI/2+Math.PI/36, 0, 0]}>
            <planeGeometry args={[6, 6]}/>
            <meshBasicMaterial color="#929292"/>
        </mesh>
        <ColliderBox position={[position[0]+12, position[1]-0.26, position[0]+6]} scale={[6, 0.1, 6]} rotation={[Math.PI/36, 0, 0]}/>

        <mesh position={[position[0]+18, position[1]-0.26, position[2]+6]} rotation={[-Math.PI/2+Math.PI/36, 0, 0]}>
            <planeGeometry args={[6, 6]}/>
            <meshBasicMaterial color="#929292"/>
        </mesh>
        <ColliderBox position={[position[0]+18, position[1]-0.26, position[0]+6]} scale={[6, 0.1, 6]} rotation={[Math.PI/36, 0, 0]}/>

        <mesh position={[position[0]+24, position[1]-0.26, position[2]+6]} rotation={[-Math.PI/2+Math.PI/36, 0, 0]}>
            <planeGeometry args={[6, 6]}/>
            <meshBasicMaterial color="#929292"/>
        </mesh>
        <ColliderBox position={[position[0]+24, position[1]-0.26, position[0]+6]} scale={[6, 0.1, 6]} rotation={[Math.PI/36, 0, 0]}/>

        <mesh position={[position[0]+30, position[1]-0.26, position[2]+6]} rotation={[-Math.PI/2+Math.PI/36, 0, 0]}>
            <planeGeometry args={[6, 6]}/>
            <meshBasicMaterial color="#929292"/>
        </mesh>
        <ColliderBox position={[position[0]+30, position[1]-0.26, position[0]+6]} scale={[6, 0.1, 6]} rotation={[Math.PI/36, 0, 0]}/>

        <mesh position={[position[0]+36, position[1]-0.26, position[2]+6]} rotation={[-Math.PI/2+Math.PI/36, 0, 0]}>
            <planeGeometry args={[6, 6]}/>
            <meshBasicMaterial color="#929292"/>
        </mesh>
        <ColliderBox position={[position[0]+36, position[1]-0.26, position[0]+6]} scale={[6, 0.1, 6]} rotation={[Math.PI/36, 0, 0]}/>

        <mesh position={[position[0]+42, position[1]-0.26, position[2]+6]} rotation={[-Math.PI/2+Math.PI/36, 0, 0]}>
            <planeGeometry args={[6, 6]}/>
            <meshBasicMaterial color="#929292"/>
        </mesh>
        <ColliderBox position={[position[0]+42, position[1]-0.26, position[0]+6]} scale={[6, 0.1, 6]} rotation={[Math.PI/36, 0, 0]}/>

        <mesh position={[position[0]+48, position[1]-0.26, position[2]+6]} rotation={[-Math.PI/2+Math.PI/36, 0, 0]}>
            <planeGeometry args={[6, 6]}/>
            <meshBasicMaterial color="#929292"/>
        </mesh>
        <ColliderBox position={[position[0]+48, position[1]-0.26, position[0]+6]} scale={[6, 0.1, 6]} rotation={[Math.PI/36, 0, 0]}/>

        <mesh position={[position[0]+54, position[1]-0.26, position[2]+6]} rotation={[-Math.PI/2+Math.PI/36, 0, 0]}>
            <planeGeometry args={[6, 6]}/>
            <meshBasicMaterial color="#929292"/>
        </mesh>
        <ColliderBox position={[position[0]+54, position[1]-0.26, position[0]+6]} scale={[6, 0.1, 6]} rotation={[Math.PI/36, 0, 0]}/>

        <Road_1 position={[position[0]+0, position[1]-0.49, position[2]+11.5]} rotation={[0, 0, 0]}/>
        <Road_1 position={[position[0]+0, position[1]-0.49, position[2]+17.5]} rotation={[0, 0, 0]}/>
        <Road_1 position={[position[0]+0, position[1]-0.49, position[2]+23.5]} rotation={[0, 0, 0]}/>
        <Road_1 position={[position[0]+0, position[1]-0.49, position[2]+29.5]} rotation={[0, 0, 0]}/>
        <Road_4 position={[position[0]+0, position[1]-0.49, position[2]+35.5]}/>
        <Road_1 position={[position[0]+6, position[1]-0.49, position[2]+35.5]} rotation={[0, Math.PI/2, 0]}/>
        <Road_1 position={[position[0]+12, position[1]-0.49, position[2]+35.5]} rotation={[0, Math.PI/2, 0]}/>
        <Road_1 position={[position[0]+18, position[1]-0.49, position[2]+35.5]} rotation={[0, Math.PI/2, 0]}/>
        <Road_1 position={[position[0]+24, position[1]-0.49, position[2]+35.5]} rotation={[0, Math.PI/2, 0]}/>
        <Road_1 position={[position[0]+30, position[1]-0.49, position[2]+35.5]} rotation={[0, Math.PI/2, 0]}/>
        <Road_1 position={[position[0]+36, position[1]-0.49, position[2]+35.5]} rotation={[0, Math.PI/2, 0]}/>
        <Road_1 position={[position[0]+42, position[1]-0.49, position[2]+35.5]} rotation={[0, Math.PI/2, 0]}/>
        <Road_1 position={[position[0]+48, position[1]-0.49, position[2]+35.5]} rotation={[0, Math.PI/2, 0]}/>
        <Road_1 position={[position[0]+54, position[1]-0.49, position[2]+35.5]} rotation={[0, Math.PI/2, 0]}/>
        <Road_4 position={[position[0]+60, position[1]-0.49, position[2]+35.5]} rotation={[0, Math.PI/2, 0]}/>  
        <Road_1 position={[position[0]+60, position[1]-0.49, position[2]+29.5]} rotation={[0, 0, 0]}/>
        <Road_1 position={[position[0]+60, position[1]-0.49, position[2]+23.5]} rotation={[0, 0, 0]}/>
        <Road_1 position={[position[0]+60, position[1]-0.49, position[2]+17.5]} rotation={[0, 0, 0]}/>
        <Road_1 position={[position[0]+60, position[1]-0.49, position[2]+11.5]} rotation={[0, 0, 0]}/>

        <Road_1 position={[position[0]+60, position[1]-0.26, position[2]+6]} rotation={[Math.PI/36, 0, 0]}/>
        <ColliderBox position={[position[0]+60, position[1]-0.26, position[0]+6]} scale={[6, 0.1, 6]} rotation={[Math.PI/36, 0, 0]}/>

        

        
    </group>
    );
}