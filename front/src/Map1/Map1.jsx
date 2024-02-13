
import { } from "@react-three/cannon";
import * as THREE from "three";
import {Grass, Road_1,Road_4, Road_3,Sidewalk_2, Sidewalk, Sidewalk_half, Road_half_3, Sidewalk_corner_3,Sidewalk_corner_7, Border_1, Border_2, Border_3, Border_4, Border_4_1} from "../components/resort/Roads.jsx"
import { Startline } from "../components/Startline.jsx";
import { Block } from "../components/resort/Objects.jsx";
import Section1 from "./Section1.jsx";
import Section2 from "./Section2.jsx";
import Section3 from "./Section3.jsx";
import Section4 from "./Section4.jsx";
import Section5 from "./Section5.jsx";
import { MeshDistortMaterial, MeshWobbleMaterial } from "@react-three/drei";
import ColliderBox from "../ColliderBox.jsx";
import Water from "../Water.jsx";
import { BasketballCourt } from "../components/resort/Basketball.jsx";

export default function Map1(props){
    const position = props.position
    const rotation = props.rotation
    const scale = props.scale
    return(<group castShadow receiveShadow >   

        <Startline position={[position[0]+1.45, position[1]+0, position[2]-10]} scale={[1.3, 1, 1.15]} rotation={[0, Math.PI/2, 0]} castShadow receiveShadow/>
        
        <Block position={[position[0]+6.6, position[1], position[2]-31.5]} rotation={[0, Math.PI/2, 0]}/>
        <Block position={[position[0]+6.6, position[1], position[2]-28.5]} rotation={[0, Math.PI/2, 0]}/>
        <Block position={[position[0]+6.6, position[1], position[2]-25.5]} rotation={[0, Math.PI/2, 0]}/>
        <Block position={[position[0]+6.6, position[1], position[2]-34.5]} rotation={[0, Math.PI/2, 0]}/>
        
        <Block position={[position[0]+17, position[1], position[2]-31.5]} rotation={[0, Math.PI/2, 0]}/>
        <Block position={[position[0]+17, position[1], position[2]-28.5]} rotation={[0, Math.PI/2, 0]}/>
        <Block position={[position[0]+17, position[1], position[2]-25.5]} rotation={[0, Math.PI/2, 0]}/>
        <Block position={[position[0]+17, position[1], position[2]-34.5]} rotation={[0, Math.PI/2, 0]}/>
        
        <Block position={[position[0]+6.5, position[1], position[2]-1.5]} rotation={[0, Math.PI/2, 0]}/>
        <Block position={[position[0]+6.5, position[1], position[2]+1.5]} rotation={[0, Math.PI/2, 0]}/>
        <Block position={[position[0]+6.5, position[1], position[2]-4.5]} rotation={[0, Math.PI/2, 0]}/>

        <Block position={[position[0]+17, position[1], position[2]-1.5]} rotation={[0, Math.PI/2, 0]}/>
        <Block position={[position[0]+17, position[1], position[2]+1.5]} rotation={[0, Math.PI/2, 0]}/>
        <Block position={[position[0]+17, position[1], position[2]-4.5]} rotation={[0, Math.PI/2, 0]}/>
        
        <Block position={[position[0]+40.5, position[1], position[2]-17]} rotation={[0, 0, 0]}/>
        <Block position={[position[0]+43, position[1], position[2]-17]} rotation={[0, 0, 0]}/>
        <Block position={[position[0]+45.5, position[1], position[2]-17]} rotation={[0, 0, 0]}/>
        <Block position={[position[0]+40.5, position[1], position[2]-22.9]} rotation={[0, 0, 0]}/>
        <Block position={[position[0]+43, position[1], position[2]-22.9]} rotation={[0, 0, 0]}/>
        <Block position={[position[0]+45.5, position[1], position[2]-22.9]} rotation={[0, 0, 0]}/>

        {/*<Block position={[position[0]+58, position[1], position[2]-9.5]} rotation={[0, 0, 0]}/>
        <Block position={[position[0]+61, position[1], position[2]-9.5]} rotation={[0, 0, 0]}/>
        <Block position={[position[0]+64, position[1], position[2]-9.5]} rotation={[0, 0, 0]}/>*/}
        
        <Block position={[position[0]+57, position[1], position[2]-17]} rotation={[0, 0, 0]}/>
        <Block position={[position[0]+60.5, position[1], position[2]-17]} rotation={[0, 0, 0]}/>
        <Block position={[position[0]+64, position[1], position[2]-17]} rotation={[0, 0, 0]}/>
        <Block position={[position[0]+57, position[1], position[2]-22.9]} rotation={[0, 0, 0]}/>
        <Block position={[position[0]+60.5, position[1], position[2]-22.9]} rotation={[0, 0, 0]}/>
        <Block position={[position[0]+64, position[1], position[2]-22.9]} rotation={[0, 0, 0]}/>

        <Block position={[position[0]+54, position[1], position[2]-4]} rotation={[0, Math.PI/2, 0]}/>
        <Block position={[position[0]+54, position[1], position[2]-1]} rotation={[0, Math.PI/2, 0]}/>
        <Block position={[position[0]+54, position[1], position[2]+2]} rotation={[0, Math.PI/2, 0]}/>

        <Block position={[position[0]+48, position[1], position[2]-4]} rotation={[0, Math.PI/2, 0]}/>
        <Block position={[position[0]+48, position[1], position[2]-1]} rotation={[0, Math.PI/2, 0]}/>
        <Block position={[position[0]+48, position[1], position[2]+2]} rotation={[0, Math.PI/2, 0]}/>
        
        {/*<Block position={[position[0]+44, position[1], position[2]-31.5]} rotation={[0, Math.PI/2, 0]}/>
        <Block position={[position[0]+44, position[1], position[2]-28.5]} rotation={[0, Math.PI/2, 0]}/>
        <Block position={[position[0]+44, position[1], position[2]-25.5]} rotation={[0, Math.PI/2, 0]}/>
        <Block position={[position[0]+44, position[1], position[2]-22.5]} rotation={[0, Math.PI/2, 0]}/>*/}

        {/*<Block position={[position[0]+28, position[1], position[2]-1.5]} rotation={[0, Math.PI/2, 0]}/>
        <Block position={[position[0]+28, position[1], position[2]+1.5]} rotation={[0, Math.PI/2, 0]}/>
        <Block position={[position[0]+38, position[1], position[2]-1.5]} rotation={[0, Math.PI/2, 0]}/>
    <Block position={[position[0]+38, position[1], position[2]+1.5]} rotation={[0, Math.PI/2, 0]}/>*/}
        
        {/*첫번째 블럭 */}
        <Section1 position={[position[0], position[1], position[2]]}/>
        {/*두번째 블럭*/}
        <Section2 position={[position[0]+18, position[1], position[2]]}/>
        {/* 세번째 블럭 */}
        <Section3 position={[position[0]-18, position[1], position[2]]}/>
        {/* 서쪽 외곽 */}
        <Section4 position={position}/>
        {/* 남쪽 외곽 */}
        <Section5 position={position}/>
    
        
        {/* 연결다리*/}
        {/* <Road_1 position={[position[0], position[1]+0, position[2]-36]}/>
        <Road_1 position={[position[0], position[1]+0, position[2]-42]}/>
        <Road_1 position={[position[0], position[1]+0, position[2]-48]}/>
        <Road_1 position={[position[0], position[1]+0, position[2]-54]}/>
        <Road_1 position={[position[0]+60, position[1]+0, position[2]-36]}/>
        <Road_1 position={[position[0]+60, position[1]+0, position[2]-42]}/>
        <Road_1 position={[position[0]+60, position[1]+0, position[2]-48]}/>
        <Road_1 position={[position[0]+60, position[1]+0, position[2]-54]}/> */}
    {/*}
        <Grass position={[position[0]+6, position[1]+0.01, position[2]-48]}/>
        <Grass position={[position[0]+12, position[1]+0.01, position[2]-48]}/>
        <Grass position={[position[0]+18, position[1]-0.01, position[2]-48]}/>
        <Grass position={[position[0]+24, position[1]-0.01, position[2]-48]}/>
        <Grass position={[position[0]+30, position[1]-0.01, position[2]-48]}/>
        <Grass position={[position[0]+36, position[1]-0.01, position[2]-48]}/>
        <Grass position={[position[0]+42, position[1]-0.01, position[2]-48]}/>
        <Grass position={[position[0]+48, position[1]-0.01, position[2]-48]}/>
        <Grass position={[position[0]+54, position[1]-0.01, position[2]-48]}/>

        <Grass position={[position[0]+6, position[1]-0.01, position[2]-42]}/>
        <Grass position={[position[0]+12, position[1]-0.01, position[2]-42]}/>
        <Grass position={[position[0]+18, position[1]-0.01, position[2]-42]}/>
        <Grass position={[position[0]+24, position[1]-0.01, position[2]-42]}/>
        <Grass position={[position[0]+30, position[1]-0.01, position[2]-42]}/>
        <Grass position={[position[0]+36, position[1]-0.01, position[2]-42]}/>
        <Grass position={[position[0]+42, position[1]-0.01, position[2]-42]}/>
        <Grass position={[position[0]+48, position[1]-0.01, position[2]-42]}/>
        <Grass position={[position[0]+54, position[1]-0.01, position[2]-42]}/>
        
        <Grass position={[position[0]+6, position[1]-0.01, position[2]-36]}/>
        <Grass position={[position[0]+12, position[1]-0.01, position[2]-36]}/>
        <Grass position={[position[0]+18, position[1]-0.01, position[2]-36]}/>
        <Grass position={[position[0]+24, position[1]-0.01, position[2]-36]}/>
        <Grass position={[position[0]+30, position[1]-0.01, position[2]-36]}/>
        <Grass position={[position[0]+36, position[1]-0.01, position[2]-36]}/>
        <Grass position={[position[0]+42, position[1]-0.01, position[2]-36]}/>
        <Grass position={[position[0]+48, position[1]-0.01, position[2]-36]}/>
        <Grass position={[position[0]+54, position[1]-0.01, position[2]-36]}/>
    */} 
        {/*서쪽 연석*/}
        <Border_1 position={[position[0]-3, position[1]+0, position[2]]} rotation={[0, Math.PI/2, 0]} />
        <Border_1 position={[position[0]-3, position[1]+0, position[2]-6]} rotation={[0, Math.PI/2, 0]} />
        <Border_1 position={[position[0]-3, position[1]+0, position[2]-12]} rotation={[0, Math.PI/2, 0]} />
        <Border_1 position={[position[0]-3, position[1]+0, position[2]-18]} rotation={[0, Math.PI/2, 0]} />
        <Border_1 position={[position[0]-3, position[1]+0, position[2]-24]} rotation={[0, Math.PI/2, 0]} />
        
        <ColliderBox scale = {[4,0.1, 6 ]} position={[position[0]-5, position[1]+0.05, position[2]]}/>
        <ColliderBox scale = {[4,0.1, 6 ]} position={[position[0]-5, position[1]+0.05, position[2]-6]}/>
        <ColliderBox scale = {[4,0.1, 6 ]} position={[position[0]-5, position[1]+0.05, position[2]-12]}/>
        <ColliderBox scale = {[4,0.1, 6 ]} position={[position[0]-5, position[1]+0.05, position[2]-18]}/>
        <ColliderBox scale = {[4,0.1, 6 ]} position={[position[0]-5, position[1]+0.05, position[2]-24]}/>
        <ColliderBox scale = {[4,0.1, 6 ]} position={[position[0]-5, position[1]+0.05, position[2]-30]}/>
        {/*<Border_2 position={[position[0]+0, position[1]+0, position[2]-0]} rotation={[0, Math.PI, 0]}/>*/}

        
        
        {/*남쪽 연석*/}
        <Border_1 position={[position[0]+6, position[1]+0, position[2]+3]} rotation={[0, 0, 0]} />
        <Border_1 position={[position[0]+12, position[1]+0, position[2]+3]} rotation={[0, 0, 0]} />
        <Border_1 position={[position[0]+18, position[1]+0, position[2]+3]} rotation={[0, 0, 0]} />
        <Border_1 position={[position[0]+30, position[1]+0, position[2]+3]} rotation={[0, 0, 0]} />
        <Border_1 position={[position[0]+36, position[1]+0, position[2]+3]} rotation={[0, 0, 0]} />
        <Border_1 position={[position[0]+42, position[1]+0, position[2]+3]} rotation={[0, 0, 0]} />
        <Border_1 position={[position[0]+48, position[1]+0, position[2]+3]} rotation={[0, 0, 0]} />
        <Border_1 position={[position[0]+54, position[1]+0, position[2]+3]} rotation={[0, 0, 0]} />
        <Border_2 position={[position[0]+60, position[1]+0, position[2]+0]} rotation={[0, -Math.PI/2, 0]}/>

        {/* 동쪽 연석 */}
        <Border_1 position={[position[0]+63, position[1]+0, position[2]-6]} rotation={[0, Math.PI/2, 0]} />
        <Border_1 position={[position[0]+63, position[1]+0, position[2]-12]} rotation={[0, Math.PI/2, 0]} />
        <Border_1 position={[position[0]+63, position[1]+0, position[2]-18]} rotation={[0, Math.PI/2, 0]} />
        <Border_1 position={[position[0]+63, position[1]+0, position[2]-24]} rotation={[0, Math.PI/2, 0]} />
        <Border_1 position={[position[0]+63, position[1]+0, position[2]-30]} rotation={[0, Math.PI/2, 0]} />
        <ColliderBox scale = {[4,0.1, 6]} position={[position[0]+65, position[1]+0.05, position[2]-0]} rotation={[0, 0, 0]}/>
        <ColliderBox scale = {[4,0.1, 6]} position={[position[0]+65, position[1]+0.05, position[2]-6]} rotation={[0, 0, 0]}/>
        <ColliderBox scale = {[4,0.1, 6]} position={[position[0]+65, position[1]+0.05, position[2]-12]} rotation={[0, 0, 0]}/>
        <ColliderBox scale = {[4,0.1, 6]} position={[position[0]+65, position[1]+0.05, position[2]-18]} rotation={[0, 0, 0]}/>
        <ColliderBox scale = {[4,0.1, 6]} position={[position[0]+65, position[1]+0.05, position[2]-24]} rotation={[0, 0, 0]}/>
        <ColliderBox scale = {[4,0.1, 6]} position={[position[0]+65, position[1]+0.05, position[2]-30]} rotation={[0, 0, 0]}/>


        {/* 북쪽 연석 */}
        <Border_1 position={[position[0]+54, position[1]+0, position[2]-33]} rotation={[0, 0, 0]} />
        <Border_1 position={[position[0]+48, position[1]+0, position[2]-33]} rotation={[0, 0, 0]} />
        <Border_1 position={[position[0]+42, position[1]+0, position[2]-33]} rotation={[0, 0, 0]} />
        <Border_1 position={[position[0]+36, position[1]+0, position[2]-33]} rotation={[0, 0, 0]} />
        <Border_1 position={[position[0]+30, position[1]+0, position[2]-33]} rotation={[0, 0, 0]} />
        <Border_1 position={[position[0]+24, position[1]+0, position[2]-33]} rotation={[0, 0, 0]} />
        <Border_1 position={[position[0]+18, position[1]+0, position[2]-33]} rotation={[0, 0, 0]} />
        <Border_1 position={[position[0]+12, position[1]+0, position[2]-33]} rotation={[0, 0, 0]} />
        <Border_1 position={[position[0]+6, position[1]+0, position[2]-33]} rotation={[0, 0, 0]} />
        
        <ColliderBox scale = {[4,0.1, 6 ]} position={[position[0]+6, position[1]+0.05, position[2]-35]} rotation={[0, Math.PI/2, 0]}/>
        <ColliderBox scale = {[4,0.1, 6 ]} position={[position[0]+12, position[1]+0.05, position[2]-35]} rotation={[0, Math.PI/2, 0]}/>
        <ColliderBox scale = {[4,0.1, 6 ]} position={[position[0]+18, position[1]+0.05, position[2]-35]} rotation={[0, Math.PI/2, 0]}/>
        <ColliderBox scale = {[4,0.1, 6 ]} position={[position[0]+24, position[1]+0.05, position[2]-35]} rotation={[0, Math.PI/2, 0]}/>
        <ColliderBox scale = {[4,0.1, 6 ]} position={[position[0]+30, position[1]+0.05, position[2]-35]} rotation={[0, Math.PI/2, 0]}/>
        <ColliderBox scale = {[4,0.1, 6 ]} position={[position[0]+36, position[1]+0.05, position[2]-35]} rotation={[0, Math.PI/2, 0]}/>
        <ColliderBox scale = {[4,0.1, 6 ]} position={[position[0]+42, position[1]+0.05, position[2]-35]} rotation={[0, Math.PI/2, 0]}/>
        <ColliderBox scale = {[4,0.1, 6 ]} position={[position[0]+48, position[1]+0.05, position[2]-35]} rotation={[0, Math.PI/2, 0]}/>
        <ColliderBox scale = {[4,0.1, 6 ]} position={[position[0]+54, position[1]+0.05, position[2]-35]} rotation={[0, Math.PI/2, 0]}/>

        {/* Section1 연석 */}
        <Border_2 position={[position[0]+6, position[1]+0, position[2]-6]} rotation={[0, Math.PI, 0]}/>
        <Border_1 position={[position[0]+3, position[1]+0, position[2]-12]} rotation={[0, Math.PI/2, 0]} />
        <Border_1 position={[position[0]+3, position[1]+0, position[2]-18]} rotation={[0, Math.PI/2, 0]} />
        <Border_1 position={[position[0]+12, position[1]+0, position[2]-3]} rotation={[0, 0, 0]} />
        <Border_2 position={[position[0]+6, position[1]+0, position[2]-24]} rotation={[0, Math.PI/2, 0]}/>
        <Border_1 position={[position[0]+12, position[1]+0, position[2]-27]} rotation={[0, 0, 0]} />
        <Border_2 position={[position[0]+18, position[1]+0, position[2]-24]} rotation={[0, 0, 0]}/>
        <Border_1 position={[position[0]+21, position[1]+0, position[2]-18]} rotation={[0, Math.PI/2, 0]} />
        <Border_1 position={[position[0]+21, position[1]+0, position[2]-12]} rotation={[0, Math.PI/2, 0]} />
        <Border_2 position={[position[0]+18, position[1]+0, position[2]-6]} rotation={[0, -Math.PI/2, 0]}/>
        <ColliderBox scale = {[4,0.1, 6]} position={[position[0]+9, position[1]+0.05, position[2]-5]} rotation={[0, Math.PI/2, 0]}/>
        <ColliderBox scale = {[4,0.1, 6]} position={[position[0]+15, position[1]+0.05, position[2]-5]} rotation={[0, Math.PI/2, 0]}/>
        <ColliderBox scale = {[4,0.1, 6]} position={[position[0]+19, position[1]+0.05, position[2]-9]} rotation={[0, 0, 0]}/>
        <ColliderBox scale = {[4,0.1, 6]} position={[position[0]+19, position[1]+0.05, position[2]-15]} rotation={[0, 0, 0]}/>
        <ColliderBox scale = {[4,0.1, 6]} position={[position[0]+19, position[1]+0.05, position[2]-21]} rotation={[0, 0, 0]}/>
        <ColliderBox scale = {[4,0.1, 6]} position={[position[0]+9, position[1]+0.05, position[2]-25]} rotation={[0, Math.PI/2, 0]}/>
        <ColliderBox scale = {[4,0.1, 6]} position={[position[0]+15, position[1]+0.05, position[2]-25]} rotation={[0, Math.PI/2, 0]}/>
        <ColliderBox scale = {[4,0.1, 6]} position={[position[0]+5, position[1]+0.05, position[2]-9]} rotation={[0, 0, 0]}/>
        <ColliderBox scale = {[4,0.1, 6]} position={[position[0]+5, position[1]+0.05, position[2]-15]} rotation={[0, 0, 0]}/>
        <ColliderBox scale = {[4,0.1, 6]} position={[position[0]+5, position[1]+0.05, position[2]-21]} rotation={[0, 0, 0]}/>
        
        

        {/* 화단 연석 */}{/*}
        <Border_2 position={[position[0]-3, position[1]+0, position[2]+9]} rotation={[0,Math.PI/2, 0]}/>
        <Border_2 position={[position[0]-3, position[1]+0, position[2]+9]} rotation={[0,Math.PI, 0]}/>
        <Border_1 position={[position[0]+3, position[1]+0, position[2]+6]} rotation={[0, 0, 0]} />
        <Border_1 position={[position[0]+9, position[1]+0, position[2]+6]} rotation={[0, 0, 0]} />
        <Border_1 position={[position[0]+3, position[1]+0, position[2]+12]} rotation={[0, 0, 0]} />
        <Border_1 position={[position[0]+9, position[1]+0, position[2]+12]} rotation={[0, 0, 0]} />
        <Border_2 position={[position[0]+15, position[1]+0, position[2]+9]} rotation={[0,-Math.PI/2, 0]}/>
        <Border_2 position={[position[0]+15, position[1]+0, position[2]+9]} rotation={[0,0, 0]}/>
    */}

        <Road_4 position={[position[0]+0, position[1]+0, position[2]+0]}/>
        <Road_1 position={[position[0]+6, position[1]+0, position[2]+0]} rotation={[0, Math.PI/2, 0]}/>
        <Road_1 position={[position[0]+12, position[1]+0, position[2]+0]} rotation={[0, Math.PI/2, 0]}/>
        <Road_1 position={[position[0]+18, position[1]+0, position[2]+0]} rotation={[0, Math.PI/2, 0]}/>
        <Road_3 position={[position[0]+24, position[1]+0, position[2]+0]} rotation={[0, Math.PI/2, 0]}/>
        <Road_1 position={[position[0]+30, position[1]+0,position[2]+ 0]} rotation={[0, Math.PI/2, 0]}/>
        <Road_3 position={[position[0]+42, position[1]+0, position[2]+0]} rotation={[0, Math.PI/2, 0]}/>
        <Road_1 position={[position[0]+36, position[1]+0, position[2]+0]} rotation={[0, Math.PI/2, 0]}/>
        <Road_1 position={[position[0]+48, position[1]+0, position[2]+0]} rotation={[0, Math.PI/2, 0]}/>
        <Road_1 position={[position[0]+54, position[1]+0, position[2]+0]} rotation={[0, Math.PI/2, 0]}/>
        <Road_4 position={[position[0]+60, position[1]+0, position[2]+0]} rotation={[0, Math.PI/2, 0]}/>
        
        {/*Section1*/}
        <Sidewalk_corner_7 position={[position[0]+9, position[1]+0.01, position[2]-9]} rotation={[0, Math.PI ,0]}/>
        <Road_half_3 position={[position[0]+6, position[1]+0, position[2]-6]} rotation={[0, 0, 0]}/>
        <Sidewalk position={[position[0]+12, position[1]+0.01, position[2]-4.5]}/>
        <Sidewalk_corner_7 position={[position[0]+15, position[1]+0.01, position[2]-9]} rotation={[0, -Math.PI/2 ,0]}/>
        <Road_half_3 position={[position[0]+18, position[1]+0, position[2]-6]} rotation={[0, Math.PI/2, 0]}/>
        <Sidewalk position={[position[0]+19.5, position[1]+0.01, position[2]-12]} rotation={[0, Math.PI/2, 0]}/>
        <Sidewalk position={[position[0]+19.5, position[1]+0.01, position[2]-18]} rotation={[0, Math.PI/2, 0]}/>
        <Sidewalk_corner_7 position={[position[0]+15, position[1]+0.01, position[2]-21]} rotation={[0, 0 ,0]}/>
        <Road_half_3 position={[position[0]+18, position[1]+0, position[2]-6]} rotation={[0, Math.PI/2, 0]}/>
        <Sidewalk position={[position[0]+4.5, position[1]+0.01, position[2]-12]} rotation={[0, Math.PI/2, 0]}/>
        <Sidewalk position={[position[0]+4.5, position[1]+0.01, position[2]-18]} rotation={[0, Math.PI/2, 0]}/>
        <Sidewalk_corner_7 position={[position[0]+9, position[1]+0.01, position[2]-21]} rotation={[0, Math.PI/2 ,0]}/>
        <Road_half_3 position={[position[0]+18, position[1]+0, position[2]-6]} rotation={[0, Math.PI/2, 0]}/>
        <Sidewalk position={[position[0]+12, position[1]+0.01, position[2]-25.5]}/>
        {/* [60, 0, -6]~[60, 0, -30]*/}
        <Road_1 position={[position[0]+60, position[1]+0, position[2]-6]}/>
        <Road_1 position={[position[0]+60, position[1]+0, position[2]-12]}/>
        <Road_1 position={[position[0]+60, position[1]+0, position[2]-18]}/>
        <Road_1 position={[position[0]+60, position[1]+0, position[2]-24]}/>
        <Road_3 position={[position[0]+60, position[1]+0, position[2]-30]}/>

        {/* [0, 0, -6]~[0, 0, -36]*/}
        <Road_1 position={[position[0]+0, position[1]+0, position[2]-6]}/>
        <Road_1 position={[position[0]+0, position[1]+0, position[2]-12]}/>
        <Road_1 position={[position[0]+0, position[1]+0, position[2]-18]}/>
        <Road_1 position={[position[0]+0, position[1]+0, position[2]-24]}/>
        <Road_3 position={[position[0]+0, position[1]+0, position[2]-30]}/>

        
        
        <Road_1 position={[position[0]+24, position[1]+0, position[2]-6]}/>
        <Road_1 position={[position[0]+24, position[1]+0, position[2]-12]}/>
        <Road_1 position={[position[0]+24, position[1]+0, position[2]-18]}/>
        <Road_1 position={[position[0]+24, position[1]+0, position[2]-24]}/>
        <Road_3 position={[position[0]+24, position[1]+0, position[2]-30]} rotation={[0, -Math.PI/2,0]}/>
        <Road_half_3 position={[position[0]+24, position[1]+0, position[2]-30]} rotation={[0, 0, 0]}/>

        <Road_1 position={[position[0]+30, position[1]+0, position[2]-30]} rotation={[0, Math.PI/2, 0]}/>
        
        
        <Road_1 position={[position[0]+42, position[1]+0, position[2]-6]}/>
        <Road_1 position={[position[0]+42, position[1]+0, position[2]-12]}/>
        <Road_1 position={[position[0]+42, position[1]+0, position[2]-18]}/>
        <Road_1 position={[position[0]+42, position[1]+0, position[2]-24]}/>

        <Road_half_3 position={[position[0]+6, position[1]+0, position[2]-27]} rotation={[0, -Math.PI/2, 0]}/>
        <Road_half_3 position={[position[0]+18, position[1]+0, position[2]-27]} rotation={[0, Math.PI, 0]}/>


        <Road_1 position={[position[0]+6, position[1]+0, position[2]-30]} rotation={[0, Math.PI/2, 0]}/>
        <Road_1 position={[position[0]+12, position[1]+0, position[2]-30]} rotation={[0, Math.PI/2, 0]}/>
        <Road_1 position={[position[0]+18, position[1]+0, position[2]-30]} rotation={[0, Math.PI/2, 0]}/>
        <Road_1 position={[position[0]+36, position[1]+0, position[2]-30]} rotation={[0, Math.PI/2, 0]}/>
        <Road_3 position={[position[0]+42, position[1]+0, position[2]-30]} rotation={[0, 0, 0]}/>

        {/*<Road_1 position={[position[0]+36, position[1]+0, position[2]-30]} rotation={[0, Math.PI/2, 0]}/>*/}
        <Road_1 position={[position[0]+48, position[1]+0, position[2]-30]} rotation={[0, Math.PI/2, 0]}/>
        <Road_1 position={[position[0]+54, position[1]+0, position[2]-30]} rotation={[0, Math.PI/2, 0]}/>
        
        <Grass position={[position[0]+8, position[1]+0, position[2]-6]}/>
        <Grass position={[position[0]+8, position[1]+0, position[2]-12]}/>  
        <Grass position={[position[0]+8, position[1]+0, position[2]-18]}/>
        <Grass position={[position[0]+8, position[1]+0, position[2]-24]}/>

        <Grass position={[position[0]+11, position[1]+0, position[2]-6]}/>
        <Grass position={[position[0]+11, position[1]+0, position[2]-12]}/>  
        <Grass position={[position[0]+11, position[1]+0, position[2]-18]}/>
        <Grass position={[position[0]+11, position[1]+0, position[2]-24]}/>

        <Grass position={[position[0]+16, position[1]+0, position[2]-6]}/>
        <Grass position={[position[0]+16, position[1]+0, position[2]-12]}/>  
        <Grass position={[position[0]+16, position[1]+0, position[2]-18]}/>
        <Grass position={[position[0]+16, position[1]+0, position[2]-24]}/> 


        
         

        {/*<Sidewalk_corner_3 position={[position[0]+0, position[1]+0.01, position[2]]} rotation={[0, Math.PI ,0]}/>*/}
        <Sidewalk_corner_3 position={[position[0]+0, position[1]+0.01, position[2]-30]} rotation={[0, Math.PI/2 ,0]}/>
        {/*<Sidewalk_corner_3 position={[position[0]+60, position[1]+0.01, position[2]-30]} rotation={[0, 0 ,0]}/>*/}

        {/* 서쪽 인도 */}
        <Sidewalk position={[position[0]-4.5, position[1]+0.01, position[2]-3]} rotation={[0, Math.PI/2, 0]}/>
        <Sidewalk position={[position[0]-4.5, position[1]+0.01, position[2]-9]} rotation={[0, Math.PI/2, 0]}/>
        <Sidewalk position={[position[0]-4.5, position[1]+0.01, position[2]-15]} rotation={[0, Math.PI/2, 0]}/>
        <Sidewalk position={[position[0]-4.5, position[1]+0.01, position[2]-21]} rotation={[0, Math.PI/2, 0]}/>
        <Sidewalk position={[position[0]-4.5, position[1]+0.01, position[2]-27]} rotation={[0, Math.PI/2, 0]}/>
        <Sidewalk_half position={[position[0]-4.5, position[1]+0.01, position[2]]} rotation={[0, Math.PI/2, 0]}/>


        <Sidewalk position={[position[0]-7.5, position[1]+0.01, position[2]-0]} rotation={[0, Math.PI/2, 0]}/>
        <Sidewalk position={[position[0]-7.5, position[1]+0.01, position[2]-3]} rotation={[0, Math.PI/2, 0]}/>
        <Sidewalk position={[position[0]-7.5, position[1]+0.01, position[2]-9]} rotation={[0, Math.PI/2, 0]}/>
        <Sidewalk position={[position[0]-7.5, position[1]+0.01, position[2]-15]} rotation={[0, Math.PI/2, 0]}/>
        <Sidewalk position={[position[0]-7.5, position[1]+0.01, position[2]-21]} rotation={[0, Math.PI/2, 0]}/>
        <Sidewalk position={[position[0]-7.5, position[1]+0.01, position[2]-27]} rotation={[0, Math.PI/2, 0]}/>
        <Sidewalk position={[position[0]-7.5, position[1]+0.01, position[2]-30]} rotation={[0, Math.PI/2, 0]}/>
        <Sidewalk_2 position={[position[0]-7.5, position[1]+0.01, position[2]-34]} rotation={[0, Math.PI/2, 0]}/>

        <Sidewalk position={[position[0]-10.5, position[1]+0.01, position[2]-0]} rotation={[0, Math.PI/2, 0]}/>
        <Sidewalk position={[position[0]-10.5, position[1]+0.01, position[2]-3]} rotation={[0, Math.PI/2, 0]}/>
        <Sidewalk position={[position[0]-10.5, position[1]+0.01, position[2]-9]} rotation={[0, Math.PI/2, 0]}/>
        <Sidewalk position={[position[0]-10.5, position[1]+0.01, position[2]-15]} rotation={[0, Math.PI/2, 0]}/>
        <Sidewalk position={[position[0]-10.5, position[1]+0.01, position[2]-21]} rotation={[0, Math.PI/2, 0]}/>
        <Sidewalk position={[position[0]-10.5, position[1]+0.01, position[2]-27]} rotation={[0, Math.PI/2, 0]}/>
        <Sidewalk position={[position[0]-10.5, position[1]+0.01, position[2]-30]} rotation={[0, Math.PI/2, 0]}/>
        <Sidewalk_2 position={ [position[0]-10.5, position[1]+0.01, position[2]-34]} rotation={[0, Math.PI/2, 0]}/>

        <Sidewalk position={[position[0]-13.5, position[1]+0.01, position[2]-0]} rotation={[0, Math.PI/2, 0]}/>
        <Sidewalk position={[position[0]-13.5, position[1]+0.01, position[2]-3]} rotation={[0, Math.PI/2, 0]}/>
        <Sidewalk position={[position[0]-13.5, position[1]+0.01, position[2]-9]} rotation={[0, Math.PI/2, 0]}/>
        <Sidewalk position={[position[0]-13.5, position[1]+0.01, position[2]-15]} rotation={[0, Math.PI/2, 0]}/>
        <Sidewalk position={[position[0]-13.5, position[1]+0.01, position[2]-21]} rotation={[0, Math.PI/2, 0]}/>
        <Sidewalk position={[position[0]-13.5, position[1]+0.01, position[2]-27]} rotation={[0, Math.PI/2, 0]}/>
        <Sidewalk position={[position[0]-13.5, position[1]+0.01, position[2]-30]} rotation={[0, Math.PI/2, 0]}/>
        <Sidewalk_2 position={ [position[0]-13.5, position[1]+0.01, position[2]-34]} rotation={[0, Math.PI/2, 0]}/>

        <Sidewalk position={[position[0]-16.5, position[1]+0.01, position[2]-0]} rotation={[0, Math.PI/2, 0]}/>
        <Sidewalk position={[position[0]-16.5, position[1]+0.01, position[2]-3]} rotation={[0, Math.PI/2, 0]}/>
        <Sidewalk position={[position[0]-16.5, position[1]+0.01, position[2]-9]} rotation={[0, Math.PI/2, 0]}/>
        <Sidewalk position={[position[0]-16.5, position[1]+0.01, position[2]-15]} rotation={[0, Math.PI/2, 0]}/>
        <Sidewalk position={[position[0]-16.5, position[1]+0.01, position[2]-21]} rotation={[0, Math.PI/2, 0]}/>
        <Sidewalk position={[position[0]-16.5, position[1]+0.01, position[2]-27]} rotation={[0, Math.PI/2, 0]}/>
        <Sidewalk position={[position[0]-16.5, position[1]+0.01, position[2]-30]} rotation={[0, Math.PI/2, 0]}/>
        <Sidewalk_2 position={ [position[0]-16.5, position[1]+0.01, position[2]-34]} rotation={[0, Math.PI/2, 0]}/>

        <Sidewalk position={[position[0]-19.5, position[1]+0.01, position[2]-0]} rotation={[0, Math.PI/2, 0]}/>
        <Sidewalk position={[position[0]-19.5, position[1]+0.01, position[2]-3]} rotation={[0, Math.PI/2, 0]}/>
        <Sidewalk position={[position[0]-19.5, position[1]+0.01, position[2]-9]} rotation={[0, Math.PI/2, 0]}/>
        <Sidewalk position={[position[0]-19.5, position[1]+0.01, position[2]-15]} rotation={[0, Math.PI/2, 0]}/>
        <Sidewalk position={[position[0]-19.5, position[1]+0.01, position[2]-21]} rotation={[0, Math.PI/2, 0]}/>
        <Sidewalk position={[position[0]-19.5, position[1]+0.01, position[2]-27]} rotation={[0, Math.PI/2, 0]}/>
        <Sidewalk position={[position[0]-19.5, position[1]+0.01, position[2]-30]} rotation={[0, Math.PI/2, 0]}/>
        <Sidewalk_2 position={ [position[0]-19.5, position[1]+0.01, position[2]-34]} rotation={[0, Math.PI/2, 0]}/>

        <Sidewalk position={[position[0]-22.5, position[1]+0.01, position[2]-0]} rotation={[0, Math.PI/2, 0]}/>
        <Sidewalk position={[position[0]-22.5, position[1]+0.01, position[2]-3]} rotation={[0, Math.PI/2, 0]}/>
        <Sidewalk position={[position[0]-22.5, position[1]+0.01, position[2]-9]} rotation={[0, Math.PI/2, 0]}/>
        <Sidewalk position={[position[0]-22.5, position[1]+0.01, position[2]-15]} rotation={[0, Math.PI/2, 0]}/>
        <Sidewalk position={[position[0]-22.5, position[1]+0.01, position[2]-21]} rotation={[0, Math.PI/2, 0]}/>
        <Sidewalk position={[position[0]-22.5, position[1]+0.01, position[2]-27]} rotation={[0, Math.PI/2, 0]}/>
        <Sidewalk position={[position[0]-22.5, position[1]+0.01, position[2]-30]} rotation={[0, Math.PI/2, 0]}/>
        <Sidewalk_2 position={ [position[0]-22.5, position[1]+0.01, position[2]-34]} rotation={[0, Math.PI/2, 0]}/>
        

        {/* 동쪽 인도 */}
        <Sidewalk position={[position[0]+64.5, position[1]+0.01, position[2]-3]} rotation={[0, Math.PI/2, 0]}/>
        <Sidewalk position={[position[0]+64.5, position[1]+0.01, position[2]-9]} rotation={[0, Math.PI/2, 0]}/>
        <Sidewalk position={[position[0]+64.5, position[1]+0.01, position[2]-15]} rotation={[0, Math.PI/2, 0]}/>
        <Sidewalk position={[position[0]+64.5, position[1]+0.01, position[2]-21]} rotation={[0, Math.PI/2, 0]}/>
        <Sidewalk position={[position[0]+64.5, position[1]+0.01, position[2]-27]} rotation={[0, Math.PI/2, 0]}/>
        <Sidewalk position={[position[0]+64.5, position[1]+0.01, position[2]-33]} rotation={[0, Math.PI/2, 0]}/>

        {/* 북쪽 인도 */}
        <Sidewalk position={[position[0]+3, position[1]+0.01, position[2]-34.5]} rotation={[0, 0, 0]}/>
        <Sidewalk position={[position[0]+9, position[1]+0.01, position[2]-34.5]} rotation={[0, 0, 0]}/>
        <Sidewalk position={[position[0]+15, position[1]+0.01, position[2]-34.5]} rotation={[0, 0, 0]}/>
        <Sidewalk position={[position[0]+21, position[1]+0.01, position[2]-34.5]} rotation={[0, 0, 0]}/>
        <Sidewalk position={[position[0]+27, position[1]+0.01, position[2]-34.5]} rotation={[0, 0, 0]}/>
        <Sidewalk position={[position[0]+33, position[1]+0.01, position[2]-34.5]} rotation={[0, 0, 0]}/>
        <Sidewalk position={[position[0]+39, position[1]+0.01, position[2]-34.5]} rotation={[0, 0, 0]}/>
        <Sidewalk position={[position[0]+45, position[1]+0.01, position[2]-34.5]} rotation={[0, 0, 0]}/>
        <Sidewalk position={[position[0]+51, position[1]+0.01, position[2]-34.5]} rotation={[0, 0, 0]}/>
        <Sidewalk_half position={[position[0]+57, position[1]+0.01, position[2]-34.5]} rotation={[0, 0, 0]}/>

        {/* 남쪽 인도 */}
        {/*<Sidewalk position={[position[0]+3, position[1]+0.01, position[2]+4.5]} rotation={[0, 0, 0]}/>
        <Sidewalk position={[position[0]-4.5, position[1]+0.01, position[2]+3]} rotation={[0, Math.PI/2, 0]}/>
        <Sidewalk position={[position[0]+9, position[1]+0.01, position[2]+4.5]} rotation={[0, 0, 0]}/>
        <Sidewalk position={[position[0]+15, position[1]+0.01, position[2]+4.5]} rotation={[0, 0, 0]}/>
        <Sidewalk position={[position[0]+21, position[1]+0.01, position[2]+4.5]} rotation={[0, 0, 0]}/>
        <Sidewalk position={[position[0]+27, position[1]+0.01, position[2]+4.5]} rotation={[0, 0, 0]}/>
        <Sidewalk position={[position[0]+33, position[1]+0.01, position[2]+4.5]} rotation={[0, 0, 0]}/>
        <Sidewalk position={[position[0]+39, position[1]+0.01, position[2]+4.5]} rotation={[0, 0, 0]}/>
        <Sidewalk position={[position[0]+45, position[1]+0.01, position[2]+4.5]} rotation={[0, 0, 0]}/>
<Sidewalk position={[position[0]+51, position[1]+0.01, position[2]+4.5]} rotation={[0, 0, 0]}/>*/}
        <Sidewalk_2 position={[position[0]+64.5, position[1]+0.01, position[2]+1.5]} rotation={[0, 0, 0]}/>

        {/*<Sidewalk position={[position[0]-9, position[1]+0.01, position[2]+6]} rotation={[0, 0, 0]}/>
        <Sidewalk position={[position[0]-15, position[1]+0.01, position[2]+6]} rotation={[0, 0, 0]}/>
        <Sidewalk position={[position[0]-21, position[1]+0.01, position[2]+6]} rotation={[0, 0, 0]}/>
        <Sidewalk position={[position[0]-9, position[1]+0.01, position[2]+9]} rotation={[0, 0, 0]}/>
        <Sidewalk position={[position[0]-15, position[1]+0.01, position[2]+9]} rotation={[0, 0, 0]}/>
        <Sidewalk position={[position[0]-21, position[1]+0.01, position[2]+9]} rotation={[0, 0, 0]}/>
        <Grass position={[position[0]-3, position[1], position[2]+9]}/>
        <Grass position={[position[0]+3, position[1], position[2]+9]}/>
        <Grass position={[position[0]+9, position[1], position[2]+9]}/>
        <Grass position={[position[0]+15, position[1], position[2]+9]}/>
    */}
        {/*<Sidewalk position={[position[0]-3, position[1]+0.01, position[2]+13.5]} rotation={[0, 0, 0]}/>
        <Sidewalk position={[position[0]+3, position[1]+0.01, position[2]+13.5]} rotation={[0, 0, 0]}/>
        <Sidewalk position={[position[0]+9, position[1]+0.01, position[2]+13.5]} rotation={[0, 0, 0]}/>
        <Sidewalk position={[position[0]+12, position[1]+0.01, position[2]+13.5]} rotation={[0, 0, 0]}/>
        <Sidewalk position={[position[0]+18, position[1]+0.01, position[2]+13.5]} rotation={[0, 0, 0]}/>
        <Sidewalk_half position={[position[0]+21, position[1]+0.01, position[2]+10.5]}/>

        <Sidewalk_corner_7 position={[position[0]+15, position[1]+0.01, position[2]+9]}/>
        <Sidewalk_corner_7 position={[position[0]+15, position[1]+0.01, position[2]+9]} rotation={[0, -Math.PI/2, 0]}/>
        <Sidewalk_corner_7 position={[position[0]-3, position[1]+0.01, position[2]+9]} rotation={[0, Math.PI, 0]}/>
        <Sidewalk_corner_7 position={[position[0]-3, position[1]+0.01, position[2]+9]} rotation={[0, Math.PI/2, 0]}/>
    */}
        {/*<Sidewalk position={[position[0]-6, position[1]+0.01, position[2]+16]} rotation={[0, 0, 0]}/>
        <Sidewalk position={[position[0]-0, position[1]+0.01, position[2]+16]} rotation={[0, 0, 0]}/>
        <Sidewalk position={[position[0]+6, position[1]+0.01, position[2]+16]} rotation={[0, 0, 0]}/>
        <Sidewalk position={[position[0]+12, position[1]+0.01, position[2]+16]} rotation={[0, 0, 0]}/>
        <Sidewalk position={[position[0]+18, position[1]+0.01, position[2]+16]} rotation={[0, 0, 0]}/>
        <Sidewalk position={[position[0]+24, position[1]+0.01, position[2]+16]} rotation={[0, 0, 0]}/>
        <Sidewalk position={[position[0]+30, position[1]+0.01, position[2]+16]} rotation={[0, 0, 0]}/>
        <Sidewalk position={[position[0]+36, position[1]+0.01, position[2]+16]} rotation={[0, 0, 0]}/>
        <Sidewalk position={[position[0]+42, position[1]+0.01, position[2]+16]} rotation={[0, 0, 0]}/>
        <Sidewalk position={[position[0]+48, position[1]+0.01, position[2]+16]} rotation={[0, 0, 0]}/>
        <Sidewalk position={[position[0]+54, position[1]+0.01, position[2]+16]} rotation={[0, 0, 0]}/>
        <Sidewalk position={[position[0]+60, position[1]+0.01, position[2]+16]} rotation={[0, 0, 0]}/>
        <Sidewalk_half position={[position[0]+66, position[1]+0.01, position[2]+16]} rotation={[0, 0, 0]}/>

        <Sidewalk position={[position[0]-6,  position[1]+0.01, position[2]+19]} rotation={[0, 0, 0]}/>
        <Sidewalk position={[position[0]-0,  position[1]+0.01, position[2]+19]} rotation={[0, 0, 0]}/>
        <Sidewalk position={[position[0]+6,  position[1]+0.01, position[2]+19]} rotation={[0, 0, 0]}/>
        <Sidewalk position={[position[0]+12, position[1]+0.01, position[2]+19]} rotation={[0, 0, 0]}/>
        <Sidewalk position={[position[0]+18, position[1]+0.01, position[2]+19]} rotation={[0, 0, 0]}/>
        <Sidewalk position={[position[0]+24, position[1]+0.01, position[2]+19]} rotation={[0, 0, 0]}/>
        <Sidewalk position={[position[0]+30, position[1]+0.01, position[2]+19]} rotation={[0, 0, 0]}/>
        <Sidewalk position={[position[0]+36, position[1]+0.01, position[2]+19]} rotation={[0, 0, 0]}/>
        <Sidewalk position={[position[0]+42, position[1]+0.01, position[2]+19]} rotation={[0, 0, 0]}/>
        <Sidewalk position={[position[0]+48, position[1]+0.01, position[2]+19]} rotation={[0, 0, 0]}/>
        <Sidewalk position={[position[0]+54, position[1]+0.01, position[2]+19]} rotation={[0, 0, 0]}/>
        <Sidewalk position={[position[0]+60, position[1]+0.01, position[2]+19]} rotation={[0, 0, 0]}/>
        <Sidewalk_half position={[position[0]+66, position[1]+0.01, position[2]+19]} rotation={[0, 0, 0]}/>

        <Sidewalk position={[position[0]-6, position[1]+0.01,  position[2]+22]} rotation={[0, 0, 0]}/>
        <Sidewalk position={[position[0]-0, position[1]+0.01,  position[2]+22]} rotation={[0, 0, 0]}/>
        <Sidewalk position={[position[0]+6, position[1]+0.01,  position[2]+22]} rotation={[0, 0, 0]}/>
        <Sidewalk position={[position[0]+12, position[1]+0.01, position[2]+22]} rotation={[0, 0, 0]}/>
        <Sidewalk position={[position[0]+18, position[1]+0.01, position[2]+22]} rotation={[0, 0, 0]}/>
        <Sidewalk position={[position[0]+24, position[1]+0.01, position[2]+22]} rotation={[0, 0, 0]}/>
        <Sidewalk position={[position[0]+30, position[1]+0.01, position[2]+22]} rotation={[0, 0, 0]}/>
        <Sidewalk position={[position[0]+36, position[1]+0.01, position[2]+22]} rotation={[0, 0, 0]}/>
        <Sidewalk position={[position[0]+42, position[1]+0.01, position[2]+22]} rotation={[0, 0, 0]}/>
        <Sidewalk position={[position[0]+48, position[1]+0.01, position[2]+22]} rotation={[0, 0, 0]}/>
        <Sidewalk position={[position[0]+54, position[1]+0.01, position[2]+22]} rotation={[0, 0, 0]}/>
        <Sidewalk position={[position[0]+60, position[1]+0.01, position[2]+22]} rotation={[0, 0, 0]}/>
        <Sidewalk_half position={[position[0]+66, position[1]+0.01, position[2]+22]} rotation={[0, 0, 0]}/>

        <Sidewalk position={[position[0]-6, position[1]+0.01,  position[2]+25]} rotation={[0, 0, 0]}/>
        <Sidewalk position={[position[0]-0, position[1]+0.01,  position[2]+25]} rotation={[0, 0, 0]}/>
        <Sidewalk position={[position[0]+6, position[1]+0.01,  position[2]+25]} rotation={[0, 0, 0]}/>
        <Sidewalk position={[position[0]+12, position[1]+0.01, position[2]+25]} rotation={[0, 0, 0]}/>
        <Sidewalk position={[position[0]+18, position[1]+0.01, position[2]+25]} rotation={[0, 0, 0]}/>
        <Sidewalk position={[position[0]+24, position[1]+0.01, position[2]+25]} rotation={[0, 0, 0]}/>
        <Sidewalk position={[position[0]+30, position[1]+0.01, position[2]+25]} rotation={[0, 0, 0]}/>
        <Sidewalk position={[position[0]+36, position[1]+0.01, position[2]+25]} rotation={[0, 0, 0]}/>
        <Sidewalk position={[position[0]+42, position[1]+0.01, position[2]+25]} rotation={[0, 0, 0]}/>
        <Sidewalk position={[position[0]+48, position[1]+0.01, position[2]+25]} rotation={[0, 0, 0]}/>
        <Sidewalk position={[position[0]+54, position[1]+0.01, position[2]+25]} rotation={[0, 0, 0]}/>
        <Sidewalk position={[position[0]+60, position[1]+0.01, position[2]+25]} rotation={[0, 0, 0]}/>
        <Sidewalk_half position={[position[0]+66, position[1]+0.01, position[2]+25]} rotation={[0, 0, 0]}/>

        <Sidewalk position={[position[0]-6, position[1]+0.01,  position[2]+28]} rotation={[0, 0, 0]}/>
        <Sidewalk position={[position[0]-0, position[1]+0.01,  position[2]+28]} rotation={[0, 0, 0]}/>
        <Sidewalk position={[position[0]+6, position[1]+0.01,  position[2]+28]} rotation={[0, 0, 0]}/>
        <Sidewalk position={[position[0]+12, position[1]+0.01, position[2]+28]} rotation={[0, 0, 0]}/>
        <Sidewalk position={[position[0]+18, position[1]+0.01, position[2]+28]} rotation={[0, 0, 0]}/>
        <Sidewalk position={[position[0]+24, position[1]+0.01, position[2]+28]} rotation={[0, 0, 0]}/>
        <Sidewalk position={[position[0]+30, position[1]+0.01, position[2]+28]} rotation={[0, 0, 0]}/>
        <Sidewalk position={[position[0]+36, position[1]+0.01, position[2]+28]} rotation={[0, 0, 0]}/>
        <Sidewalk position={[position[0]+42, position[1]+0.01, position[2]+28]} rotation={[0, 0, 0]}/>
        <Sidewalk position={[position[0]+48, position[1]+0.01, position[2]+28]} rotation={[0, 0, 0]}/>
        <Sidewalk position={[position[0]+54, position[1]+0.01, position[2]+28]} rotation={[0, 0, 0]}/>
        <Sidewalk position={[position[0]+60, position[1]+0.01, position[2]+28]} rotation={[0, 0, 0]}/>
        <Sidewalk_half position={[position[0]+66, position[1]+0.01, position[2]+28]} rotation={[0, 0, 0]}/>

        <Sidewalk position={[position[0]+24, position[1]+0.01, position[2]+10]} rotation={[0, 0, 0]}/>
        <Sidewalk position={[position[0]+30, position[1]+0.01, position[2]+10]} rotation={[0, 0, 0]}/>
        <Sidewalk position={[position[0]+36, position[1]+0.01, position[2]+10]} rotation={[0, 0, 0]}/>
        <Sidewalk position={[position[0]+42, position[1]+0.01, position[2]+10]} rotation={[0, 0, 0]}/>
        <Sidewalk position={[position[0]+48, position[1]+0.01, position[2]+10]} rotation={[0, 0, 0]}/>
        <Sidewalk position={[position[0]+54, position[1]+0.01, position[2]+10]} rotation={[0, 0, 0]}/>
        <Sidewalk position={[position[0]+60, position[1]+0.01, position[2]+10]} rotation={[0, 0, 0]}/>
        <Sidewalk_half position={[position[0]+66, position[1]+0.01, position[2]+10]} rotation={[0, 0, 0]}/>

        <Sidewalk position={[position[0]+24, position[1]+0.01, position[2]+13]} rotation={[0, 0, 0]}/>
        <Sidewalk position={[position[0]+30, position[1]+0.01, position[2]+13]} rotation={[0, 0, 0]}/>
        <Sidewalk position={[position[0]+36, position[1]+0.01, position[2]+13]} rotation={[0, 0, 0]}/>
        <Sidewalk position={[position[0]+42, position[1]+0.01, position[2]+13]} rotation={[0, 0, 0]}/>
        <Sidewalk position={[position[0]+48, position[1]+0.01, position[2]+13]} rotation={[0, 0, 0]}/>
        <Sidewalk position={[position[0]+54, position[1]+0.01, position[2]+13]} rotation={[0, 0, 0]}/>
        <Sidewalk position={[position[0]+60, position[1]+0.01, position[2]+13]} rotation={[0, 0, 0]}/>
    <Sidewalk_half position={[position[0]+66, position[1]+0.01, position[2]+13]} rotation={[0, 0, 0]}/>*/}

        {/*<Sidewalk_half position={[position[0]+21, position[1]+0.01, position[2]+7.5]}/>
        <Sidewalk position={[position[0]+24, position[1]+0.01, position[2]+7.5]}/>
        <Sidewalk position={[position[0]+30, position[1]+0.01, position[2]+7.5]}/>
        <Sidewalk position={[position[0]+36, position[1]+0.01, position[2]+7.5]}/>
        <Sidewalk position={[position[0]+42, position[1]+0.01, position[2]+7.5]}/>
        <Sidewalk position={[position[0]+48, position[1]+0.01, position[2]+7.5]}/>
        <Sidewalk position={[position[0]+54, position[1]+0.01, position[2]+7.5]}/>
        <Sidewalk position={[position[0]+60, position[1]+0.01, position[2]+7.5]}/>
        <Sidewalk_half position={[position[0]+66, position[1]+0.01, position[2]+7.5]}/>
*/}
        
        
    </group>
    );
} 