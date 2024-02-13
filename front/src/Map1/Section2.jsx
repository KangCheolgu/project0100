import { Building_7_Blue, Building_9_Blue, Building_8_Green, Building_5_Green, Building_6_Green, Building_4_Red, Building_3_Red, Building_2, Building_8_Red, Building_9_Red, Building_1_Red, Building_10_Red, Building_10_Blue, Building_5_Red } from "../components/resort/Buildings"
import {Grass, Road_1,Road_4, Road_3,Sidewalk_2, Sidewalk, Sidewalk_half, Road_half_3, Sidewalk_corner_3,Sidewalk_corner_7, Border_1, Border_2, Border_3, Border_4, Border_4_1} from "../components/resort/Roads.jsx"
import ColliderBox from "../ColliderBox.jsx";

export default function Section2(props){
    const position = props.position
    return(<group castShadow receiveShadow >
        <Border_2 position={[position[0]+30, position[1]+0, position[2]-6]} rotation={[0, Math.PI, 0]}/>
        <Border_2 position={[position[0]+36, position[1]+0, position[2]-6]} rotation={[0, -Math.PI/2, 0]}/>
        <Border_1 position={[position[0]+39, position[1]+0, position[2]-18]} rotation={[0, Math.PI/2, 0]} />
        <Border_1 position={[position[0]+39, position[1]+0, position[2]-12]} rotation={[0, Math.PI/2, 0]} />
        <Border_2 position={[position[0]+36, position[1]+0, position[2]-24]} rotation={[0, 0, 0]}/>
        <Border_2 position={[position[0]+30, position[1]+0, position[2]-24]} rotation={[0, Math.PI/2, 0]}/>
        <Border_1 position={[position[0]+27, position[1]+0, position[2]-12]} rotation={[0, Math.PI/2, 0]} />
        <Border_1 position={[position[0]+27, position[1]+0, position[2]-18]} rotation={[0, Math.PI/2, 0]} />
        <ColliderBox scale = {[4,0.1, 6]} position={[position[0]+37, position[1]+0.05, position[2]-9]} rotation={[0, 0, 0]}/>
        <ColliderBox scale = {[4,0.1, 6]} position={[position[0]+37, position[1]+0.05, position[2]-15]} rotation={[0, 0, 0]}/>
        <ColliderBox scale = {[4,0.1, 6]} position={[position[0]+37, position[1]+0.05, position[2]-21]} rotation={[0, 0, 0]}/>

        <ColliderBox scale = {[4,0.1, 6]} position={[position[0]+29, position[1]+0.05, position[2]-9]} rotation={[0, 0, 0]}/>
        <ColliderBox scale = {[4,0.1, 6]} position={[position[0]+29, position[1]+0.05, position[2]-15]} rotation={[0, 0, 0]}/>
        <ColliderBox scale = {[4,0.1, 6]} position={[position[0]+29, position[1]+0.05, position[2]-21]} rotation={[0, 0, 0]}/>

        <ColliderBox scale = {[4,0.1, 6]} position={[position[0]+33, position[1]+0.05, position[2]-9]} rotation={[0, 0, 0]}/>
        <ColliderBox scale = {[4,0.1, 6]} position={[position[0]+33, position[1]+0.05, position[2]-15]} rotation={[0, 0, 0]}/>
        <ColliderBox scale = {[4,0.1, 6]} position={[position[0]+33, position[1]+0.05, position[2]-21]} rotation={[0, 0, 0]}/>

        <ColliderBox scale = {[4,0.1, 6]} position={[position[0]+33, position[1]+0.05, position[2]-25]} rotation={[0, Math.PI/2, 0]}/>

        <Grass position={[position[0]+33, position[1]-0.01, position[2]-6]}/>
        <Grass position={[position[0]+33, position[1]-0.01, position[2]-12]}/>
        <Grass position={[position[0]+33, position[1]-0.01, position[2]-18]}/>
        <Grass position={[position[0]+33, position[1]-0.01, position[2]-24]}/>  
        <Sidewalk position={[position[0]+33, position[1]+0, position[2]-15]}/>

        {/*Section2*/}
        <Sidewalk_corner_7 position={[position[0]+33, position[1]+0.01, position[2]-21]} rotation={[0, Math.PI/2 ,0]}/>
        <Road_half_3 position={[position[0]+30, position[1]+0, position[2]-24]} rotation={[0, -Math.PI/2, 0]}/>
        <Sidewalk_corner_7 position={[position[0]+33, position[1]+0.01, position[2]-21]} rotation={[0, 0 ,0]}/>
        <Road_half_3 position={[position[0]+36, position[1]+0, position[2]-24]} rotation={[0, Math.PI, 0]}/>
        <Sidewalk_corner_7 position={[position[0]+33, position[1]+0.01, position[2]-9]} rotation={[0, Math.PI ,0]}/>
        <Road_half_3 position={[position[0]+30, position[1]+0, position[2]-6]} rotation={[0, 0, 0]}/>
        <Sidewalk_corner_7 position={[position[0]+33, position[1]+0.01, position[2]-9]} rotation={[0, -Math.PI/2 ,0]}/>
        <Road_half_3 position={[position[0]+36, position[1]+0, position[2]-6]} rotation={[0, Math.PI/2, 0]}/>
        <Sidewalk position={[position[0]+28.5, position[1]+0.01, position[2]-18]} rotation={[0, Math.PI/2, 0]}/>
        <Sidewalk position={[position[0]+28.5, position[1]+0.01, position[2]-12]} rotation={[0, Math.PI/2, 0]}/>
        <Sidewalk position={[position[0]+37.5, position[1]+0.01, position[2]-18]} rotation={[0, Math.PI/2, 0]}/>
        <Sidewalk position={[position[0]+37.5, position[1]+0.01, position[2]-12]} rotation={[0, Math.PI/2, 0]}/>

        <Building_8_Green  position={[position[0]+33, position[1], position[2]-10]} rotation={[0, Math.PI/2, 0]}/>
        <Building_8_Red position={[position[0]+33, position[1], position[2]-20]} rotation={[0, Math.PI/2, 0]}/>
    </group>
    );
}