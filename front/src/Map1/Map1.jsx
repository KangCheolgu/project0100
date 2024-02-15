
import { } from "@react-three/cannon";
import * as THREE from "three";
import {Grass, Road_1,Road_4, Road_3,Sidewalk_2, Sidewalk, Sidewalk_half, Road_half_3, Sidewalk_corner_3,Sidewalk_corner_7, Border_1, Border_2, Border_3, Border_4, Border_4_1, Border_half} from "../components/resort/Roads.jsx"
import { Fence2, WallClumb } from "../components/resort/Objects1.jsx";
import { Startline } from "../components/Startline.jsx";
import { Block } from "../components/resort/Objects1.jsx";
import Section1 from "./Section1.jsx";
import Section2 from "./Section2.jsx";
import Section3 from "./Section3.jsx";
import Section4 from "./Section4.jsx";
import Section5 from "./Section5.jsx";
import { MeshDistortMaterial, MeshWobbleMaterial } from "@react-three/drei";
import ColliderBox from "../ColliderBox.jsx";
import Water from "../Water.jsx";
import { BasketballCourt } from "../components/resort/Basketball.jsx";
import { Signs } from "../components/Signs.jsx";
import { Signs2 } from "../components/Signs2.jsx";
import { Arrow2 } from "../components/Arrow2.jsx";
import { ResortOcean } from "../components/ResortOcean.jsx";

export default function Map1(props){
    const position = props.position
    const rotation = props.rotation
    const scale = props.scale
    return(<group castShadow receiveShadow >   
        <Fence2 position={[position[0]-22, position[1], position[2]-35]}/> 
        <Fence2 position={[position[0]-18, position[1], position[2]-35]}/> 
        <Fence2 position={[position[0]-14, position[1], position[2]-35]}/> 
        <Fence2 position={[position[0]-10, position[1], position[2]-35]}/> 
        <Fence2 position={[position[0]-6, position[1], position[2]-35]}/> 
        <Fence2 position={[position[0]+6, position[1], position[2]-35]}/> 
        <Fence2 position={[position[0]+10, position[1], position[2]-35]}/>
        <Fence2 position={[position[0]+14, position[1], position[2]-35]}/>  
        <Fence2 position={[position[0]+18, position[1], position[2]-35]}/> 
        <Fence2 position={[position[0]+22, position[1], position[2]-35]}/> 
        <Fence2 position={[position[0]+26, position[1], position[2]-35]}/> 
        <Fence2 position={[position[0]+30, position[1], position[2]-35]}/> 
        <Fence2 position={[position[0]+34, position[1], position[2]-35]}/> 
        <Fence2 position={[position[0]+38, position[1], position[2]-35]}/> 
        <Fence2 position={[position[0]+42, position[1], position[2]-35]}/> 
        <Fence2 position={[position[0]+46, position[1], position[2]-35]}/> 
        <Fence2 position={[position[0]+50, position[1], position[2]-35]}/> 
        <Fence2 position={[position[0]+54, position[1], position[2]-35]}/> 
        <Fence2 position={[position[0]+65, position[1], position[2]-35]}/> 

        <ResortOcean scale={[0.2,0.2, 0.2]} position={[30,0.1, 145]} rotation={[Math.PI/30, 0, 0]}/>
        <ResortOcean scale={[0.2,0.2, 0.2]} position={[30,-5, -65]} rotation={[Math.PI/30, 0, 0]}/>
        <ResortOcean scale={[0.2,0.2, 0.2]} position={[-90,-5, -65]} rotation={[Math.PI/30, 0, 0]}/>
        <ResortOcean scale={[0.2,0.2, 0.2]} position={[150,-5, -65]} rotation={[Math.PI/30, 0, 0]}/>
        <ResortOcean scale={[0.2,0.2, 0.2]} position={[-90,-5, 80]} rotation={[Math.PI/30, 0, 0]}/>
        <ResortOcean scale={[0.2,0.2, 0.2]} position={[150,-5, 80]} rotation={[Math.PI/30, 0, 0]}/>

        <Arrow2 scale={[2.5, 2, 2]} position={[position[0]+1, position[1]+2, position[2]+40]} rotation={[-Math.PI/2, Math.PI, 0]}/>
        <Arrow2 scale={[2.5, 2, 2]} position={[position[0]+63, position[1]+2, position[2]+35]} rotation={[-Math.PI/2, Math.PI, -Math.PI/2]}/>
        <Arrow2 scale={[2.5, 2, 2]} position={[position[0]+60, position[1]+2, position[2]-16]} rotation={[-Math.PI/2, Math.PI, Math.PI]}/>
        <Arrow2 scale={[2.5, 2, 2]} position={[position[0]+38.5, position[1]+2, position[2]-12]} rotation={[-Math.PI/2, Math.PI, Math.PI/2]}/>
        <Arrow2 scale={[2.5, 2, 2]} position={[position[0]+21, position[1]+2, position[2]+0]} rotation={[Math.PI/2, Math.PI, Math.PI/2]}/>
        <Arrow2 scale={[2.5, 2, 2]} position={[position[0]+25, position[1]+2, position[2]-33]} rotation={[Math.PI/2, Math.PI,0]}/>
        <Arrow2 scale={[2.5, 2, 2]} position={[position[0]+64, position[1]+2, position[2]-33]} rotation={[Math.PI/2, 0,Math.PI/2]}/>
        
        <Arrow2 scale={[2.5, 2, 2]} position={[position[0]+60, position[1]+2, position[2]-128]} rotation={[Math.PI/2, 0, 0]}/>
        <Arrow2 scale={[2.5, 2, 2]} position={[position[0]+37, position[1]+2, position[2]-124]} rotation={[Math.PI/2, 0, -Math.PI/2]}/>
        <Arrow2 scale={[2.5, 2, 2]} position={[position[0]+40, position[1]+2, position[2]-90]} rotation={[-Math.PI/2, 0,0]}/>
        <Arrow2 scale={[2.5, 2, 2]} position={[position[0]+19, position[1]+2, position[2]-95]} rotation={[-Math.PI/2, 0,-Math.PI/2]}/>
        <Arrow2 scale={[2.5, 2, 2]} position={[position[0]+22, position[1]+2, position[2]-128]} rotation={[Math.PI/2, 0, 0]}/>
        <Arrow2 scale={[2.5, 2, 2]} position={[position[0]-5, position[1]+2, position[2]-123]} rotation={[Math.PI/2, 0, -Math.PI/2]}/>
        
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
    
        {/*서쪽 연석*/}
        <Border_1 position={[position[0]-3, position[1]-0.04, position[2]]} rotation={[0, Math.PI/2, 0]} />
        <Border_1 position={[position[0]-3, position[1]-0.04, position[2]-6]} rotation={[0, Math.PI/2, 0]} />
        <Border_1 position={[position[0]-3, position[1]-0.04, position[2]-12]} rotation={[0, Math.PI/2, 0]} />
        <Border_1 position={[position[0]-3, position[1]-0.04, position[2]-18]} rotation={[0, Math.PI/2, 0]} />
        <Border_1 position={[position[0]-3, position[1]-0.04, position[2]-24]} rotation={[0, Math.PI/2, 0]} />
        <Border_1 position={[position[0]-3, position[1]-0.04, position[2]-30]} rotation={[0, Math.PI/2, 0]} />
        <Border_half position={[position[0]-3, position[1]-0.04, position[2]-32.9]} rotation={[0, Math.PI/2, 0]} />

        <ColliderBox scale = {[4,0.1, 6 ]} position={[position[0]-5, position[1]+0.05, position[2]]}/>
        <ColliderBox scale = {[4,0.1, 6 ]} position={[position[0]-5, position[1]+0.05, position[2]-6]}/>
        <ColliderBox scale = {[4,0.1, 6 ]} position={[position[0]-5, position[1]+0.05, position[2]-12]}/>
        <ColliderBox scale = {[4,0.1, 6 ]} position={[position[0]-5, position[1]+0.05, position[2]-18]}/>
        <ColliderBox scale = {[4,0.1, 6 ]} position={[position[0]-5, position[1]+0.05, position[2]-24]}/>
        <ColliderBox scale = {[4,0.1, 6 ]} position={[position[0]-5, position[1]+0.05, position[2]-30]}/>
        <ColliderBox scale = {[4,0.1, 6 ]} position={[position[0]-5, position[1]+0.05, position[2]-36]}/>


        {/*남쪽 연석*/}
        <Border_1 position={[position[0]+6, position[1]-0.04, position[2]+3]} rotation={[0, 0, 0]} />
        <Border_1 position={[position[0]+12, position[1]-0.04, position[2]+3]} rotation={[0, 0, 0]} />
        <Border_1 position={[position[0]+18, position[1]-0.04, position[2]+3]} rotation={[0, 0, 0]} />
        <Border_1 position={[position[0]+30, position[1]-0.04, position[2]+3]} rotation={[0, 0, 0]} />
        <Border_1 position={[position[0]+36, position[1]-0.04, position[2]+3]} rotation={[0, 0, 0]} />
        <Border_1 position={[position[0]+42, position[1]-0.04, position[2]+3]} rotation={[0, 0, 0]} />
        <Border_1 position={[position[0]+48, position[1]-0.04, position[2]+3]} rotation={[0, 0, 0]} />
        <Border_1 position={[position[0]+54, position[1]-0.04, position[2]+3]} rotation={[0, 0, 0]} />

        {/* 동쪽 연석 */}
        <Border_1 position={[position[0]+63, position[1]-0.04, position[2]]} rotation={[0, Math.PI/2, 0]} />
        <Border_1 position={[position[0]+63, position[1]-0.04, position[2]-6]} rotation={[0, Math.PI/2, 0]} />
        <Border_1 position={[position[0]+63, position[1]-0.04, position[2]-12]} rotation={[0, Math.PI/2, 0]} />
        <Border_1 position={[position[0]+63, position[1]-0.04, position[2]-18]} rotation={[0, Math.PI/2, 0]} />
        <Border_1 position={[position[0]+63, position[1]-0.04, position[2]-24]} rotation={[0, Math.PI/2, 0]} />
        <Border_1 position={[position[0]+63, position[1]-0.04, position[2]-30]} rotation={[0, Math.PI/2, 0]} />
        <Border_half position={[position[0]+63, position[1]-0.04, position[2]-33]} rotation={[0, Math.PI/2, 0]} />
        <ColliderBox scale = {[4,0.1, 6]} position={[position[0]+65, position[1]+0.05, position[2]-0]} rotation={[0, 0, 0]}/>
        <ColliderBox scale = {[4,0.1, 6]} position={[position[0]+65, position[1]+0.05, position[2]-6]} rotation={[0, 0, 0]}/>
        <ColliderBox scale = {[4,0.1, 6]} position={[position[0]+65, position[1]+0.05, position[2]-12]} rotation={[0, 0, 0]}/>
        <ColliderBox scale = {[4,0.1, 6]} position={[position[0]+65, position[1]+0.05, position[2]-18]} rotation={[0, 0, 0]}/>
        <ColliderBox scale = {[4,0.1, 6]} position={[position[0]+65, position[1]+0.05, position[2]-24]} rotation={[0, 0, 0]}/>
        <ColliderBox scale = {[4,0.1, 6]} position={[position[0]+65, position[1]+0.05, position[2]-30]} rotation={[0, 0, 0]}/>
        <ColliderBox scale = {[4,0.1, 6]} position={[position[0]+65, position[1]+0.05, position[2]-36]} rotation={[0, 0, 0]}/>


        {/* 북쪽 연석 */}
        <Border_half position={[position[0]+57, position[1]-0.04, position[2]-32.9]} rotation={[0, Math.PI/2, 0]} />
        <Border_1 position={[position[0]+54, position[1]-0.04, position[2]-33]} rotation={[0, 0, 0]} />
        <Border_1 position={[position[0]+48, position[1]-0.04, position[2]-33]} rotation={[0, 0, 0]} />
        <Border_1 position={[position[0]+42, position[1]-0.04, position[2]-33]} rotation={[0, 0, 0]} />
        <Border_1 position={[position[0]+36, position[1]-0.04, position[2]-33]} rotation={[0, 0, 0]} />
        <Border_1 position={[position[0]+30, position[1]-0.04, position[2]-33]} rotation={[0, 0, 0]} />
        <Border_1 position={[position[0]+24, position[1]-0.04, position[2]-33]} rotation={[0, 0, 0]} />
        <Border_1 position={[position[0]+18, position[1]-0.04, position[2]-33]} rotation={[0, 0, 0]} />
        <Border_1 position={[position[0]+12, position[1]-0.04, position[2]-33]} rotation={[0, 0, 0]} />
        <Border_1 position={[position[0]+6, position[1]-0.04, position[2]-33]} rotation={[0, 0, 0]} />
        <Border_half position={[position[0]+3, position[1]-0.04, position[2]-32.9]} rotation={[0, Math.PI/2, 0]} />
        
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
        <Border_2 position={[position[0]+6, position[1]-0.04, position[2]-6]} rotation={[0, Math.PI, 0]}/>
        <Border_1 position={[position[0]+3, position[1]-0.04, position[2]-12]} rotation={[0, Math.PI/2, 0]} />
        <Border_1 position={[position[0]+3, position[1]-0.04, position[2]-18]} rotation={[0, Math.PI/2, 0]} />
        <Border_1 position={[position[0]+12, position[1]-0.04, position[2]-3]} rotation={[0, 0, 0]} />
        <Border_2 position={[position[0]+6, position[1]-0.04, position[2]-24]} rotation={[0, Math.PI/2, 0]}/>
        <Border_1 position={[position[0]+12, position[1]-0.04, position[2]-27]} rotation={[0, 0, 0]} />
        <Border_2 position={[position[0]+18, position[1]-0.04, position[2]-24]} rotation={[0, 0, 0]}/>
        <Border_1 position={[position[0]+21, position[1]-0.04, position[2]-18]} rotation={[0, Math.PI/2, 0]} />
        <Border_1 position={[position[0]+21, position[1]-0.04, position[2]-12]} rotation={[0, Math.PI/2, 0]} />
        <Border_2 position={[position[0]+18, position[1]-0.04, position[2]-6]} rotation={[0, -Math.PI/2, 0]}/>
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
        
        {/* 연석 커브 하단 우측 */}
        <ColliderBox scale={[+3, +0.1, +1.5]} position={[position[0]+19.5, position[1]+0.05, position[2]-5.25]}/>
        <ColliderBox scale={[+2.9, +0.1,+0.3]} position={[position[0]+19.4, position[1]+0.05, position[2]-4.35]}/>
        <ColliderBox scale={[+2.9, +0.1,+0.3]} position={[position[0]+19.2, position[1]+0.05, position[2]-4.1]}/>
        <ColliderBox scale={[+2.9, +0.1,+0.3]} position={[position[0]+19.1, position[1]+0.05, position[2]-3.9]}/>
        <ColliderBox scale={[+2.9, +0.1,+0.3]} position={[position[0]+18.9, position[1]+0.05, position[2]-3.6]}/>
        <ColliderBox scale={[+2.9, +0.1,+0.3]} position={[position[0]+18.5, position[1]+0.05, position[2]-3.3]}/>
        <ColliderBox scale={[+2.9, +0.1,+0.3]} position={[position[0]+18.2, position[1]+0.05, position[2]-3.15]}/>
        {/* 연석 커브 하단 좌측 */}
        <ColliderBox scale={[+3, +0.1, +1.5]} position={[position[0]+4.5, position[1]+0.05, position[2]-5.25]}/>
        <ColliderBox scale={[+2.9, +0.1,+0.3]} position={[position[0]+4.6, position[1]+0.05, position[2]-4.35]}/>
        <ColliderBox scale={[+2.9, +0.1,+0.3]} position={[position[0]+4.7, position[1]+0.05, position[2]-4.1]}/>
        <ColliderBox scale={[+2.9, +0.1,+0.3]} position={[position[0]+4.8, position[1]+0.05, position[2]-3.9]}/>
        <ColliderBox scale={[+2.9, +0.1,+0.3]} position={[position[0]+5.1, position[1]+0.05, position[2]-3.6]}/>
        <ColliderBox scale={[+2.9, +0.1,+0.3]} position={[position[0]+5.5, position[1]+0.05, position[2]-3.3]}/>
        <ColliderBox scale={[+2.9, +0.1,+0.3]} position={[position[0]+5.9, position[1]+0.05, position[2]-3.15 ]}/>
        {/* 연석 커브 상단 좌측*/}
        <ColliderBox scale={[+3, +0.1, +1.5]} position={[position[0]+4.5, position[1]+0.05, position[2]-24.7]}/>
        <ColliderBox scale={[+2.9, +0.1,+0.3]} position={[position[0]+4.6, position[1]+0.05, position[2]-25.6]}/>
        <ColliderBox scale={[+2.9, +0.1,+0.3]} position={[position[0]+4.7, position[1]+0.05, position[2]-25.85]}/>
        <ColliderBox scale={[+2.9, +0.1,+0.3]} position={[position[0]+4.8, position[1]+0.05, position[2]-26.1]}/>
        <ColliderBox scale={[+2.9, +0.1,+0.3]} position={[position[0]+5.1, position[1]+0.05, position[2]-26.35]}/>
        <ColliderBox scale={[+2.9, +0.1,+0.3]} position={[position[0]+5.5, position[1]+0.05, position[2]-26.6]}/>
        <ColliderBox scale={[+2.9, +0.1,+0.3]} position={[position[0]+5.9, position[1]+0.05, position[2]-26.85 ]}/>
        {/* 연석 커브 상단 우측 */}
        <ColliderBox scale={[+3, +0.1, +1.5]} position={[position[0]+19.5, position[1]+0.05, position[2]-24.7]}/>
        <ColliderBox scale={[+2.9, +0.1,+0.3]} position={[position[0]+19.4, position[1]+0.05, position[2]-25.6]}/>
        <ColliderBox scale={[+2.9, +0.1,+0.3]} position={[position[0]+19.2, position[1]+0.05, position[2]-25.85]}/>
        <ColliderBox scale={[+2.9, +0.1,+0.3]} position={[position[0]+19.0, position[1]+0.05, position[2]-26.1]}/>
        <ColliderBox scale={[+2.9, +0.1,+0.3]} position={[position[0]+18.9, position[1]+0.05, position[2]-26.35]}/>
        <ColliderBox scale={[+2.9, +0.1,+0.3]} position={[position[0]+18.7, position[1]+0.05, position[2]-26.6]}/>
        <ColliderBox scale={[+2.9, +0.1,+0.3]} position={[position[0]+18.3, position[1]+0.05, position[2]-26.85 ]}/>

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
        <Sidewalk_corner_7 position={[position[0]+9, position[1]+0.05, position[2]-9]} rotation={[0, Math.PI ,0]}/>
        <Road_half_3 position={[position[0]+6, position[1]+0, position[2]-6]} rotation={[0, 0, 0]}/>
        <Sidewalk position={[position[0]+12, position[1]+0.05, position[2]-4.5]}/>
        <Sidewalk_corner_7 position={[position[0]+15, position[1]+0.05, position[2]-9]} rotation={[0, -Math.PI/2 ,0]}/>
        <Road_half_3 position={[position[0]+18, position[1]+0, position[2]-6]} rotation={[0, Math.PI/2, 0]}/>
        <Sidewalk position={[position[0]+19.5, position[1]+0.05, position[2]-12]} rotation={[0, Math.PI/2, 0]}/>
        <Sidewalk position={[position[0]+19.5, position[1]+0.05, position[2]-18]} rotation={[0, Math.PI/2, 0]}/>
        <Sidewalk_corner_7 position={[position[0]+15, position[1]+0.05, position[2]-21]} rotation={[0, 0 ,0]}/>
        <Road_half_3 position={[position[0]+18, position[1]+0, position[2]-6]} rotation={[0, Math.PI/2, 0]}/>
        <Sidewalk position={[position[0]+4.5, position[1]+0.05, position[2]-12]} rotation={[0, Math.PI/2, 0]}/>
        <Sidewalk position={[position[0]+4.5, position[1]+0.05, position[2]-18]} rotation={[0, Math.PI/2, 0]}/>
        <Sidewalk_corner_7 position={[position[0]+9, position[1]+0.05, position[2]-21]} rotation={[0, Math.PI/2 ,0]}/>
        <Road_half_3 position={[position[0]+18, position[1]+0, position[2]-6]} rotation={[0, Math.PI/2, 0]}/>
        <Sidewalk position={[position[0]+12, position[1]+0.05, position[2]-25.5]}/>
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

        {/* 서쪽 인도 */}
        <Sidewalk position={[position[0]-4.5, position[1]+0.05, position[2]-3]} rotation={[0, Math.PI/2, 0]}/>
        <Sidewalk position={[position[0]-4.5, position[1]+0.05, position[2]-9]} rotation={[0, Math.PI/2, 0]}/>
        <Sidewalk position={[position[0]-4.5, position[1]+0.05, position[2]-15]} rotation={[0, Math.PI/2, 0]}/>
        <Sidewalk position={[position[0]-4.5, position[1]+0.05, position[2]-21]} rotation={[0, Math.PI/2, 0]}/>
        <Sidewalk position={[position[0]-4.5, position[1]+0.05, position[2]-27]} rotation={[0, Math.PI/2, 0]}/>
        <Sidewalk_half position={[position[0]-4.5, position[1]+0.05, position[2]]} rotation={[0, Math.PI/2, 0]}/>
        <Sidewalk position={[position[0]-4.5, position[1]+0.05, position[2]-33]} rotation={[0, Math.PI/2, 0]}/>


        <Sidewalk position={[position[0]-7.5, position[1]+0.05, position[2]-0]} rotation={[0, Math.PI/2, 0]}/>
        <Sidewalk position={[position[0]-7.5, position[1]+0.05, position[2]-3]} rotation={[0, Math.PI/2, 0]}/>
        <Sidewalk position={[position[0]-7.5, position[1]+0.05, position[2]-9]} rotation={[0, Math.PI/2, 0]}/>
        <Sidewalk position={[position[0]-7.5, position[1]+0.05, position[2]-15]} rotation={[0, Math.PI/2, 0]}/>
        <Sidewalk position={[position[0]-7.5, position[1]+0.05, position[2]-21]} rotation={[0, Math.PI/2, 0]}/>
        <Sidewalk position={[position[0]-7.5, position[1]+0.05, position[2]-27]} rotation={[0, Math.PI/2, 0]}/>
        <Sidewalk position={[position[0]-7.5, position[1]+0.05, position[2]-30]} rotation={[0, Math.PI/2, 0]}/>
        <Sidewalk_2 position={[position[0]-7.5, position[1]+0.05, position[2]-34]} rotation={[0, Math.PI/2, 0]}/>5
        <Sidewalk position={[position[0]-10.5, position[1]+0.05, position[2]-0]} rotation={[0, Math.PI/2, 0]}/>
        <Sidewalk position={[position[0]-10.5, position[1]+0.05, position[2]-3]} rotation={[0, Math.PI/2, 0]}/>
        <Sidewalk position={[position[0]-10.5, position[1]+0.05, position[2]-9]} rotation={[0, Math.PI/2, 0]}/>
        <Sidewalk position={[position[0]-10.5, position[1]+0.05, position[2]-15]} rotation={[0, Math.PI/2, 0]}/>
        <Sidewalk position={[position[0]-10.5, position[1]+0.05, position[2]-21]} rotation={[0, Math.PI/2, 0]}/>
        <Sidewalk position={[position[0]-10.5, position[1]+0.05, position[2]-27]} rotation={[0, Math.PI/2, 0]}/>
        <Sidewalk position={[position[0]-10.5, position[1]+0.05, position[2]-30]} rotation={[0, Math.PI/2, 0]}/>
        <Sidewalk_2 position={ [position[0]-10.5, position[1]+0.05, position[2]-34]} rotation={[0, Math.PI/2, 0]}/>

        <Sidewalk position={[position[0]-13.5, position[1]+0.05, position[2]-0]} rotation={[0, Math.PI/2, 0]}/>
        <Sidewalk position={[position[0]-13.5, position[1]+0.05, position[2]-3]} rotation={[0, Math.PI/2, 0]}/>
        <Sidewalk position={[position[0]-13.5, position[1]+0.05, position[2]-9]} rotation={[0, Math.PI/2, 0]}/>
        <Sidewalk position={[position[0]-13.5, position[1]+0.05, position[2]-15]} rotation={[0, Math.PI/2, 0]}/>
        <Sidewalk position={[position[0]-13.5, position[1]+0.05, position[2]-21]} rotation={[0, Math.PI/2, 0]}/>
        <Sidewalk position={[position[0]-13.5, position[1]+0.05, position[2]-27]} rotation={[0, Math.PI/2, 0]}/>
        <Sidewalk position={[position[0]-13.5, position[1]+0.05, position[2]-30]} rotation={[0, Math.PI/2, 0]}/>
        <Sidewalk_2 position={ [position[0]-13.5, position[1]+0.05, position[2]-34]} rotation={[0, Math.PI/2, 0]}/>

        <Sidewalk position={[position[0]-16.5, position[1]+0.05, position[2]-0]} rotation={[0, Math.PI/2, 0]}/>
        <Sidewalk position={[position[0]-16.5, position[1]+0.05, position[2]-3]} rotation={[0, Math.PI/2, 0]}/>
        <Sidewalk position={[position[0]-16.5, position[1]+0.05, position[2]-9]} rotation={[0, Math.PI/2, 0]}/>
        <Sidewalk position={[position[0]-16.5, position[1]+0.05, position[2]-15]} rotation={[0, Math.PI/2, 0]}/>
        <Sidewalk position={[position[0]-16.5, position[1]+0.05, position[2]-21]} rotation={[0, Math.PI/2, 0]}/>
        <Sidewalk position={[position[0]-16.5, position[1]+0.05, position[2]-27]} rotation={[0, Math.PI/2, 0]}/>
        <Sidewalk position={[position[0]-16.5, position[1]+0.05, position[2]-30]} rotation={[0, Math.PI/2, 0]}/>
        <Sidewalk_2 position={ [position[0]-16.5, position[1]+0.05, position[2]-34]} rotation={[0, Math.PI/2, 0]}/>

        <Sidewalk position={[position[0]-19.5, position[1]+0.05, position[2]-0]} rotation={[0, Math.PI/2, 0]}/>
        <Sidewalk position={[position[0]-19.5, position[1]+0.05, position[2]-3]} rotation={[0, Math.PI/2, 0]}/>
        <Sidewalk position={[position[0]-19.5, position[1]+0.05, position[2]-9]} rotation={[0, Math.PI/2, 0]}/>
        <Sidewalk position={[position[0]-19.5, position[1]+0.05, position[2]-15]} rotation={[0, Math.PI/2, 0]}/>
        <Sidewalk position={[position[0]-19.5, position[1]+0.05, position[2]-21]} rotation={[0, Math.PI/2, 0]}/>
        <Sidewalk position={[position[0]-19.5, position[1]+0.05, position[2]-27]} rotation={[0, Math.PI/2, 0]}/>
        <Sidewalk position={[position[0]-19.5, position[1]+0.05, position[2]-30]} rotation={[0, Math.PI/2, 0]}/>
        <Sidewalk_2 position={ [position[0]-19.5, position[1]+0.05, position[2]-34]} rotation={[0, Math.PI/2, 0]}/>

        <Sidewalk position={[position[0]-22.5, position[1]+0.05, position[2]-0]} rotation={[0, Math.PI/2, 0]}/>
        <Sidewalk position={[position[0]-22.5, position[1]+0.05, position[2]-3]} rotation={[0, Math.PI/2, 0]}/>
        <Sidewalk position={[position[0]-22.5, position[1]+0.05, position[2]-9]} rotation={[0, Math.PI/2, 0]}/>
        <Sidewalk position={[position[0]-22.5, position[1]+0.05, position[2]-15]} rotation={[0, Math.PI/2, 0]}/>
        <Sidewalk position={[position[0]-22.5, position[1]+0.05, position[2]-21]} rotation={[0, Math.PI/2, 0]}/>
        <Sidewalk position={[position[0]-22.5, position[1]+0.05, position[2]-27]} rotation={[0, Math.PI/2, 0]}/>
        <Sidewalk position={[position[0]-22.5, position[1]+0.05, position[2]-30]} rotation={[0, Math.PI/2, 0]}/>
        <Sidewalk_2 position={ [position[0]-22.5, position[1]+0.05, position[2]-34]} rotation={[0, Math.PI/2, 0]}/>
        

        {/* 동쪽 인도 */}
        <Sidewalk position={[position[0]+64.5, position[1]+0.05, position[2]-3]} rotation={[0, Math.PI/2, 0]}/>
        <Sidewalk position={[position[0]+64.5, position[1]+0.05, position[2]-9]} rotation={[0, Math.PI/2, 0]}/>
        <Sidewalk position={[position[0]+64.5, position[1]+0.05, position[2]-15]} rotation={[0, Math.PI/2, 0]}/>
        <Sidewalk position={[position[0]+64.5, position[1]+0.05, position[2]-21]} rotation={[0, Math.PI/2, 0]}/>
        <Sidewalk position={[position[0]+64.5, position[1]+0.05, position[2]-27]} rotation={[0, Math.PI/2, 0]}/>
        <Sidewalk position={[position[0]+64.5, position[1]+0.05, position[2]-33]} rotation={[0, Math.PI/2, 0]}/>

        {/* 북쪽 인도 */}
        <Sidewalk_2 position={[position[0]+4.5, position[1]+0.05, position[2]-34.5]} rotation={[0, 0, 0]}/>
        <Sidewalk position={[position[0]+9, position[1]+0.05, position[2]-34.5]} rotation={[0, 0, 0]}/>
        <Sidewalk position={[position[0]+15, position[1]+0.05, position[2]-34.5]} rotation={[0, 0, 0]}/>
        <Sidewalk position={[position[0]+21, position[1]+0.05, position[2]-34.5]} rotation={[0, 0, 0]}/>
        <Sidewalk position={[position[0]+27, position[1]+0.05, position[2]-34.5]} rotation={[0, 0, 0]}/>
        <Sidewalk position={[position[0]+33, position[1]+0.05, position[2]-34.5]} rotation={[0, 0, 0]}/>
        <Sidewalk position={[position[0]+39, position[1]+0.05, position[2]-34.5]} rotation={[0, 0, 0]}/>
        <Sidewalk position={[position[0]+45, position[1]+0.05, position[2]-34.5]} rotation={[0, 0, 0]}/>
        <Sidewalk position={[position[0]+51, position[1]+0.05, position[2]-34.5]} rotation={[0, 0, 0]}/>
        <Sidewalk_half position={[position[0]+57, position[1]+0.05, position[2]-34.5]} rotation={[0, 0, 0]}/>

        <Sidewalk_2 position={[position[0]+64.5, position[1]+0.05, position[2]+1.5]} rotation={[0, 0, 0]}/>
        
        
    </group>
    );
} 