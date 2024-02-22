
import { } from "@react-three/cannon";
import { Grass, Road_1, Road_4, Road_3, Sidewalk, Road_half_3, Sidewalk_corner_3, Sidewalk_corner_7,} from "../components/resort/Road.jsx"
import Section1 from "./Section1.jsx";

 
export default function Map2(props){
    const position = props.position
    const rotation = props.rotation
    const scale = props.scale
    return(<group receiveShadow >
        <Section1 position={[position[0]+60, position[1]+0.09, position[2]]} />

        <Road_3 position={[position[0]+24, position[1]+0, position[2]+0]} rotation={[0, Math.PI/2, 0]}/>
        <Road_1 position={[position[0]+30, position[1]+0,position[2]+ 0]} rotation={[0, Math.PI/2, 0]}/>
        <Road_4 position={[position[0]+42, position[1]+0, position[2]+0]} rotation={[0, Math.PI/2, 0]}/>
        {/* <Sidewalk_corner_7 position={[position[0]+42, position[1]+0.09, position[2]+0]} rotation={[0, -Math.PI/2, 0]}/> */}
        <Road_1 position={[position[0]+36, position[1]+0, position[2]+0]} rotation={[0, Math.PI/2, 0]}/>
        
        {/* <Sidewalk_corner_3 position={[position[0]+24, position[1]+0.12, position[2]]} rotation={[0, Math.PI ,0]}/> */}

        <Sidewalk position={[position[0]+19.5, position[1]+0.09, position[2]]} rotation={[0, Math.PI/2, 0]}/>
        <Sidewalk position={[position[0]+19.5, position[1]+0.09, position[2]-6]} rotation={[0, Math.PI/2, 0]}/>
        <Sidewalk position={[position[0]+19.5, position[1]+0.09, position[2]-12]} rotation={[0, Math.PI/2, 0]}/>
        <Sidewalk position={[position[0]+19.5, position[1]+0.09, position[2]-18]} rotation={[0, Math.PI/2, 0]}/>
        
        <Sidewalk_corner_7 position={[position[0]+15, position[1]+0.09, position[2]-21]} rotation={[0, 0 ,0]}/>
        <Road_half_3 position={[position[0]+18, position[1], position[2]-6]} rotation={[0, Math.PI/2, 0]}/>

        <Sidewalk position={[position[0]+4.5, position[1]+0.09, position[2]]} rotation={[0, Math.PI/2, 0]}/>
        <Sidewalk position={[position[0]+4.5, position[1]+0.09, position[2]-6]} rotation={[0, Math.PI/2, 0]}/>
        <Sidewalk position={[position[0]+4.5, position[1]+0.09, position[2]-12]} rotation={[0, Math.PI/2, 0]}/>
        <Sidewalk position={[position[0]+4.5, position[1]+0.09, position[2]-18]} rotation={[0, Math.PI/2, 0]}/>
        <Sidewalk_corner_7 position={[position[0]+9, position[1]+0.09, position[2]-21]} rotation={[0, Math.PI/2 ,0]}/>
        <Road_half_3 position={[position[0]+18, position[1], position[2]-6]} rotation={[0, Math.PI/2, 0]}/>
        <Sidewalk position={[position[0]+12, position[1]+0.09, position[2]-25.5]}/>
        {/* [60, 0, -6]~[60, 0, -30]*/}
        <Road_1 position={[position[0]+60, position[1]+0, position[2]+60]}/>
        <Road_1 position={[position[0]+60, position[1]+0, position[2]+54]}/>
        <Road_1 position={[position[0]+60, position[1]+0, position[2]+48]}/>
        <Road_1 position={[position[0]+60, position[1]+0, position[2]+42]}/>
        <Road_1 position={[position[0]+60, position[1]+0, position[2]+36]}/>
        <Road_1 position={[position[0]+60, position[1]+0, position[2]+30]}/>
        <Road_1 position={[position[0]+60, position[1]+0, position[2]+24]}/>
        <Road_1 position={[position[0]+60, position[1]+0, position[2]+18]}/>
        <Road_1 position={[position[0]+60, position[1]+0, position[2]+12]}/>
        <Road_1 position={[position[0]+60, position[1]+0, position[2]+6]}/>
        <Road_1 position={[position[0]+60, position[1]+0, position[2]]}/>
        <Road_1 position={[position[0]+60, position[1]+0, position[2]-6]}/>
        <Road_1 position={[position[0]+60, position[1]+0, position[2]-12]}/>
        <Road_1 position={[position[0]+60, position[1]+0, position[2]-18]}/>
        <Road_1 position={[position[0]+60, position[1]+0, position[2]-24]}/>
        <Road_3 position={[position[0]+60, position[1]+0, position[2]-30]}/>

        {/* [0, 0, -6]~[0, 0, -36]*/}
        <Road_1 position={[position[0]+0, position[1]+0, position[2]+60]}/>
        <Road_1 position={[position[0]+0, position[1]+0, position[2]+54]}/>
        <Road_1 position={[position[0]+0, position[1]+0, position[2]+48]}/>
        <Road_1 position={[position[0]+0, position[1]+0, position[2]+42]}/>
        <Road_1 position={[position[0]+0, position[1]+0, position[2]+36]}/>
        <Road_1 position={[position[0]+0, position[1]+0, position[2]+30]}/>
        <Road_1 position={[position[0]+0, position[1]+0, position[2]+24]}/>
        <Road_1 position={[position[0]+0, position[1]+0, position[2]+18]}/>
        <Road_1 position={[position[0]+0, position[1]+0, position[2]+12]}/>
        <Road_1 position={[position[0]+0, position[1]+0, position[2]+6]}/>
        <Road_1 position={[position[0]+0, position[1]+0, position[2]]}/>
        <Road_1 position={[position[0]+0, position[1]+0, position[2]-6]}/>
        <Road_1 position={[position[0]+0, position[1]+0, position[2]-12]}/>
        <Road_1 position={[position[0]+0, position[1]+0, position[2]-18]}/>
        <Road_1 position={[position[0]+0, position[1]+0, position[2]-24]}/>
        <Road_3 position={[position[0]+0, position[1]+0, position[2]-30]}/>

        
        <Road_4 position={[position[0]+24, position[1], position[2]]}/>
        <Road_1 position={[position[0]+24, position[1]+0, position[2]-6]}/>
        <Road_1 position={[position[0]+24, position[1]+0, position[2]-12]}/>
        <Road_1 position={[position[0]+24, position[1]+0, position[2]-18]}/>
        <Road_1 position={[position[0]+24, position[1]+0, position[2]-24]}/>
        <Road_3 position={[position[0]+24, position[1]+0, position[2]-30]} rotation={[0, -Math.PI/2,0]}/>
        <Road_half_3 position={[position[0]+24, position[1], position[2]-30]} rotation={[0, 0, 0]}/> 
        
        <Road_1 position={[position[0]+42, position[1]+0, position[2]-6]}/>
        <Road_1 position={[position[0]+42, position[1]+0, position[2]-12]}/>
        <Road_1 position={[position[0]+42, position[1]+0, position[2]-18]}/>
        <Road_1 position={[position[0]+42, position[1]+0, position[2]-24]}/>

        <Road_half_3 position={[position[0]+6, position[1], position[2]-27]} rotation={[0, -Math.PI/2, 0]}/>
        <Road_half_3 position={[position[0]+18, position[1], position[2]-27]} rotation={[0, Math.PI, 0]}/>


        <Road_1 position={[position[0]+6, position[1]+0, position[2]-30]} rotation={[0, Math.PI/2, 0]}/>
        <Road_1 position={[position[0]+12, position[1]+0, position[2]-30]} rotation={[0, Math.PI/2, 0]}/>
        <Road_1 position={[position[0]+18, position[1]+0, position[2]-30]} rotation={[0, Math.PI/2, 0]}/>
        <Road_3 position={[position[0]+42, position[1]+0, position[2]-30]} rotation={[0, 0, 0]}/>

        <Road_3 position={[position[0]+6, position[1]+0.08, position[2]-23]} rotation={[0, Math.PI/2, 0]}/>
        <Road_3 position={[position[0]+12, position[1]+0.08, position[2]-23]} rotation={[0, Math.PI/2, 0]}/>
        <Road_3 position={[position[0]+18, position[1]+0.08, position[2]-23]} rotation={[0, Math.PI/2, 0]}/>
        <Road_3 position={[position[0]+6, position[1]+0.08, position[2]-17]} rotation={[0, Math.PI/2, 0]}/>
        <Road_3 position={[position[0]+12, position[1]+0.08, position[2]-17]} rotation={[0, Math.PI/2, 0]}/>
        <Road_3 position={[position[0]+18, position[1]+0.08, position[2]-17]} rotation={[0, Math.PI/2, 0]}/>
        <Road_3 position={[position[0]+6, position[1]+0.08, position[2]-11]} rotation={[0, Math.PI/2, 0]}/>
        <Road_3 position={[position[0]+12, position[1]+0.08, position[2]-11]} rotation={[0, Math.PI/2, 0]}/>
        <Road_3 position={[position[0]+18, position[1]+0.08, position[2]-11]} rotation={[0, Math.PI/2, 0]}/>
        <Road_3 position={[position[0]+6, position[1]+0.08, position[2]-5]} rotation={[0, Math.PI/2, 0]}/>
        <Road_3 position={[position[0]+12, position[1]+0.08, position[2]-5]} rotation={[0, Math.PI/2, 0]}/>
        <Road_3 position={[position[0]+18, position[1]+0.08, position[2]-5]} rotation={[0, Math.PI/2, 0]}/>
        <Road_3 position={[position[0]+6, position[1]+0.08, position[2]+1]} rotation={[0, Math.PI/2, 0]}/>
        <Road_3 position={[position[0]+12, position[1]+0.08, position[2]+1]} rotation={[0, Math.PI/2, 0]}/>
        <Road_3 position={[position[0]+18, position[1]+0.08, position[2]+1]} rotation={[0, Math.PI/2, 0]}/>

        <Road_1 position={[position[0]+36, position[1]+0, position[2]-30]} rotation={[0, Math.PI/2, 0]}/>
        <Road_1 position={[position[0]+48, position[1]+0, position[2]-30]} rotation={[0, Math.PI/2, 0]}/>
        <Road_1 position={[position[0]+54, position[1]+0, position[2]-30]} rotation={[0, Math.PI/2, 0]}/>

        <Sidewalk_corner_7 position={[position[0]+24, position[1]+0.09, position[2]-30]} rotation={[0, 0 ,0]}/>
        <Sidewalk_corner_7 position={[position[0]+33, position[1]+0.09, position[2]-9]} rotation={[0, Math.PI ,0]}/>
        <Road_half_3 position={[position[0]+30, position[1], position[2]-6]} rotation={[0, 0, 0]}/>
        <Sidewalk_corner_7 position={[position[0]+33, position[1]+0.09, position[2]-9]} rotation={[0, -Math.PI/2 ,0]}/>
        <Sidewalk position={[position[0]+28.5, position[1]+0.09, position[2]-30]} rotation={[0, Math.PI/2, 0]}/>
        <Sidewalk position={[position[0]+28.5, position[1]+0.09, position[2]-24]} rotation={[0, Math.PI/2, 0]}/>
        <Sidewalk position={[position[0]+28.5, position[1]+0.09, position[2]-18]} rotation={[0, Math.PI/2, 0]}/>
        <Sidewalk position={[position[0]+28.5, position[1]+0.09, position[2]-12]} rotation={[0, Math.PI/2, 0]}/>
        <Sidewalk position={[position[0]+37.5, position[1]+0.09, position[2]-30]} rotation={[0, Math.PI/2, 0]}/>
        <Sidewalk position={[position[0]+37.5, position[1]+0.09, position[2]-24]} rotation={[0, Math.PI/2, 0]}/>
        <Sidewalk position={[position[0]+37.5, position[1]+0.09, position[2]-18]} rotation={[0, Math.PI/2, 0]}/>
        <Sidewalk position={[position[0]+37.5, position[1]+0.09, position[2]-12]} rotation={[0, Math.PI/2, 0]}/>

        <Sidewalk_corner_7 position={[position[0]+51, position[1]+0.09, position[2]-21]} rotation={[0, Math.PI/2 ,0]}/>
        <Road_half_3 position={[position[0]+48, position[1], position[2]-24]} rotation={[0, -Math.PI/2, 0]}/>
        <Sidewalk_corner_7 position={[position[0]+51, position[1]+0.09, position[2]-21]} rotation={[0, 0 ,0]}/>
        <Road_half_3 position={[position[0]+54, position[1], position[2]-24]} rotation={[0, Math.PI, 0]}/>

        <Road_half_3 position={[position[0]+36, position[1], position[2]-6]} rotation={[0, Math.PI/2, 0]}/>
        <Sidewalk position={[position[0]+46.5, position[1]+0.09, position[2]-18]} rotation={[0, Math.PI/2, 0]}/>
        <Sidewalk position={[position[0]+46.5, position[1]+0.09, position[2]-12]} rotation={[0, Math.PI/2, 0]}/>
        <Sidewalk position={[position[0]+46.5, position[1]+0.09, position[2]-6]} rotation={[0, Math.PI/2, 0]}/>
        <Sidewalk position={[position[0]+46.5, position[1]+0.09, position[2]]} rotation={[0, Math.PI/2, 0]}/>
        <Sidewalk position={[position[0]+55.5, position[1]+0.09, position[2]-18]} rotation={[0, Math.PI/2, 0]}/>
        <Sidewalk position={[position[0]+55.5, position[1]+0.09, position[2]-12]} rotation={[0, Math.PI/2, 0]}/>
        <Sidewalk position={[position[0]+55.5, position[1]+0.09, position[2]-6]} rotation={[0, Math.PI/2, 0]}/>
        <Sidewalk position={[position[0]+55.5, position[1]+0.09, position[2]]} rotation={[0, Math.PI/2, 0]}/>

        <Grass position={[position[0]+33, position[1]+0.08, position[2]-6]}/>
        <Grass position={[position[0]+33, position[1]+0.08, position[2]-12]}/>  
        <Grass position={[position[0]+33, position[1]+0.08, position[2]-18]}/>
        <Grass position={[position[0]+33, position[1]+0.08, position[2]-24]}/> 
        <Grass position={[position[0]+33, position[1]+0.09, position[2]-30]}/>   

        <Grass position={[position[0]+51, position[1]+0.08, position[2]]}/>
        <Grass position={[position[0]+51, position[1]+0.08, position[2]-6]}/>
        <Grass position={[position[0]+51, position[1]+0.08, position[2]-12]}/>  
        <Grass position={[position[0]+51, position[1]+0.08, position[2]-18]}/>
        <Grass position={[position[0]+51, position[1]+0.08, position[2]-24]}/>  

        <Sidewalk_corner_3 position={[position[0]+0, position[1]+0.09, position[2]-30]} rotation={[0, Math.PI/2 ,0]}/>
        <Sidewalk_corner_3 position={[position[0]+60, position[1]+0.09, position[2]-30]} rotation={[0, 0 ,0]}/>

        {/* 서쪽 인도 */}
        <Sidewalk position={[position[0]-4.5, position[1]+0.09, position[2]+6]} rotation={[0, Math.PI/2, 0]}/>
        <Sidewalk position={[position[0]-4.5, position[1]+0.09, position[2]+3]} rotation={[0, Math.PI/2, 0]}/>
        <Sidewalk position={[position[0]-4.5, position[1]+0.09, position[2]-3]} rotation={[0, Math.PI/2, 0]}/>
        <Sidewalk position={[position[0]-4.5, position[1]+0.09, position[2]-9]} rotation={[0, Math.PI/2, 0]}/>
        <Sidewalk position={[position[0]-4.5, position[1]+0.09, position[2]-15]} rotation={[0, Math.PI/2, 0]}/>
        <Sidewalk position={[position[0]-4.5, position[1]+0.09, position[2]-21]} rotation={[0, Math.PI/2, 0]}/>
        <Sidewalk position={[position[0]-4.5, position[1]+0.09, position[2]-27]} rotation={[0, Math.PI/2, 0]}/>

        <Sidewalk position={[position[0]-7.5, position[1]+0.09, position[2]+6]} rotation={[0, Math.PI/2, 0]}/>
        <Sidewalk position={[position[0]-7.5, position[1]+0.09, position[2]+3]} rotation={[0, Math.PI/2, 0]}/>
        <Sidewalk position={[position[0]-7.5, position[1]+0.09, position[2]-3]} rotation={[0, Math.PI/2, 0]}/>
        <Sidewalk position={[position[0]-7.5, position[1]+0.09, position[2]-9]} rotation={[0, Math.PI/2, 0]}/>
        <Sidewalk position={[position[0]-7.5, position[1]+0.09, position[2]-15]} rotation={[0, Math.PI/2, 0]}/>
        <Sidewalk position={[position[0]-7.5, position[1]+0.09, position[2]-21]} rotation={[0, Math.PI/2, 0]}/>
        <Sidewalk position={[position[0]-7.5, position[1]+0.09, position[2]-27]} rotation={[0, Math.PI/2, 0]}/>
        <Sidewalk position={[position[0]-7.5, position[1]+0.09, position[2]-30]} rotation={[0, Math.PI/2, 0]}/>
        <Sidewalk position={[position[0]-7.5, position[1]+0.09, position[2]-33]} rotation={[0, Math.PI/2, 0]}/>

        <Sidewalk position={[position[0]-10.5, position[1]+0.09, position[2]+6]} rotation={[0, Math.PI/2, 0]}/>
        <Sidewalk position={[position[0]-10.5, position[1]+0.09, position[2]+3]} rotation={[0, Math.PI/2, 0]}/>
        <Sidewalk position={[position[0]-10.5, position[1]+0.09, position[2]-3]} rotation={[0, Math.PI/2, 0]}/>
        <Sidewalk position={[position[0]-10.5, position[1]+0.09, position[2]-9]} rotation={[0, Math.PI/2, 0]}/>
        <Sidewalk position={[position[0]-10.5, position[1]+0.09, position[2]-15]} rotation={[0, Math.PI/2, 0]}/>
        <Sidewalk position={[position[0]-10.5, position[1]+0.09, position[2]-21]} rotation={[0, Math.PI/2, 0]}/>
        <Sidewalk position={[position[0]-10.5, position[1]+0.09, position[2]-27]} rotation={[0, Math.PI/2, 0]}/>
        <Sidewalk position={[position[0]-10.5, position[1]+0.09, position[2]-30]} rotation={[0, Math.PI/2, 0]}/>
        <Sidewalk position={[position[0]-10.5, position[1]+0.09, position[2]-33]} rotation={[0, Math.PI/2, 0]}/>

        {/* 동쪽 인도 */}
        <Sidewalk position={[position[0]+64.5, position[1]+0.09, position[2]+6]} rotation={[0, Math.PI/2, 0]}/>
        <Sidewalk position={[position[0]+64.5, position[1]+0.09, position[2]+3]} rotation={[0, Math.PI/2, 0]}/>
        <Sidewalk position={[position[0]+64.5, position[1]+0.09, position[2]-3]} rotation={[0, Math.PI/2, 0]}/>
        <Sidewalk position={[position[0]+64.5, position[1]+0.09, position[2]-9]} rotation={[0, Math.PI/2, 0]}/>
        <Sidewalk position={[position[0]+64.5, position[1]+0.09, position[2]-15]} rotation={[0, Math.PI/2, 0]}/>
        <Sidewalk position={[position[0]+64.5, position[1]+0.09, position[2]-21]} rotation={[0, Math.PI/2, 0]}/>
        <Sidewalk position={[position[0]+64.5, position[1]+0.09, position[2]-27]} rotation={[0, Math.PI/2, 0]}/>

        <Sidewalk position={[position[0]+67.5, position[1]+0.09, position[2]+6]} rotation={[0, Math.PI/2, 0]}/>
        <Sidewalk position={[position[0]+67.5, position[1]+0.09, position[2]+3]} rotation={[0, Math.PI/2, 0]}/>
        <Sidewalk position={[position[0]+67.5, position[1]+0.09, position[2]-3]} rotation={[0, Math.PI/2, 0]}/>
        <Sidewalk position={[position[0]+67.5, position[1]+0.09, position[2]-9]} rotation={[0, Math.PI/2, 0]}/>
        <Sidewalk position={[position[0]+67.5, position[1]+0.09, position[2]-15]} rotation={[0, Math.PI/2, 0]}/>
        <Sidewalk position={[position[0]+67.5, position[1]+0.09, position[2]-21]} rotation={[0, Math.PI/2, 0]}/>
        <Sidewalk position={[position[0]+67.5, position[1]+0.09, position[2]-27]} rotation={[0, Math.PI/2, 0]}/>
        <Sidewalk position={[position[0]+67.5, position[1]+0.09, position[2]-33]} rotation={[0, Math.PI/2, 0]}/>
        <Sidewalk position={[position[0]+67.5, position[1]+0.09, position[2]-39]} rotation={[0, Math.PI/2, 0]}/>

        <Sidewalk position={[position[0]+70.5, position[1]+0.09, position[2]+6]} rotation={[0, Math.PI/2, 0]}/>
        <Sidewalk position={[position[0]+70.5, position[1]+0.09, position[2]+3]} rotation={[0, Math.PI/2, 0]}/>
        <Sidewalk position={[position[0]+70.5, position[1]+0.09, position[2]-3]} rotation={[0, Math.PI/2, 0]}/>
        <Sidewalk position={[position[0]+70.5, position[1]+0.09, position[2]-9]} rotation={[0, Math.PI/2, 0]}/>
        <Sidewalk position={[position[0]+70.5, position[1]+0.09, position[2]-15]} rotation={[0, Math.PI/2, 0]}/>
        <Sidewalk position={[position[0]+70.5, position[1]+0.09, position[2]-21]} rotation={[0, Math.PI/2, 0]}/>
        <Sidewalk position={[position[0]+70.5, position[1]+0.09, position[2]-27]} rotation={[0, Math.PI/2, 0]}/>
        <Sidewalk position={[position[0]+70.5, position[1]+0.09, position[2]-33]} rotation={[0, Math.PI/2, 0]}/>
        <Sidewalk position={[position[0]+70.5, position[1]+0.09, position[2]-39]} rotation={[0, Math.PI/2, 0]}/>

        <Sidewalk position={[position[0]+73.5, position[1]+0.09, position[2]+6]} rotation={[0, Math.PI/2, 0]}/>
        <Sidewalk position={[position[0]+73.5, position[1]+0.09, position[2]+3]} rotation={[0, Math.PI/2, 0]}/>
        <Sidewalk position={[position[0]+73.5, position[1]+0.09, position[2]-3]} rotation={[0, Math.PI/2, 0]}/>
        <Sidewalk position={[position[0]+73.5, position[1]+0.09, position[2]-9]} rotation={[0, Math.PI/2, 0]}/>
        <Sidewalk position={[position[0]+73.5, position[1]+0.09, position[2]-15]} rotation={[0, Math.PI/2, 0]}/>
        <Sidewalk position={[position[0]+73.5, position[1]+0.09, position[2]-21]} rotation={[0, Math.PI/2, 0]}/>
        <Sidewalk position={[position[0]+73.5, position[1]+0.09, position[2]-27]} rotation={[0, Math.PI/2, 0]}/>
        <Sidewalk position={[position[0]+73.5, position[1]+0.09, position[2]-33]} rotation={[0, Math.PI/2, 0]}/>
        
        

        {/* 북쪽 인도 */}
        <Sidewalk position={[position[0]+3, position[1]+0.09, position[2]-34.5]} rotation={[0, 0, 0]}/>
        <Sidewalk position={[position[0]+9, position[1]+0.09, position[2]-34.5]} rotation={[0, 0, 0]}/>
        <Sidewalk position={[position[0]+15, position[1]+0.09, position[2]-34.5]} rotation={[0, 0, 0]}/>
        <Sidewalk position={[position[0]+21, position[1]+0.09, position[2]-34.5]} rotation={[0, 0, 0]}/>
        <Sidewalk position={[position[0]+27, position[1]+0.06, position[2]-34.5]} rotation={[0, 0, 0]}/>
        <Sidewalk position={[position[0]+33, position[1]+0.06, position[2]-34.5]} rotation={[0, 0, 0]}/>
        <Sidewalk position={[position[0]+39, position[1]+0.09, position[2]-34.5]} rotation={[0, 0, 0]}/>
        <Sidewalk position={[position[0]+45, position[1]+0.09, position[2]-34.5]} rotation={[0, 0, 0]}/>
        <Sidewalk position={[position[0]+51, position[1]+0.09, position[2]-34.5]} rotation={[0, 0, 0]}/>
        <Sidewalk position={[position[0]+57, position[1]+0.09, position[2]-34.5]} rotation={[0, 0, 0]}/>


        <Sidewalk position={[position[0]-3, position[1]+0.09, position[2]-37.5]} rotation={[0, 0, 0]}/>
        <Sidewalk position={[position[0], position[1]+0.09, position[2]-37.5]} rotation={[0, 0, 0]}/>
        <Sidewalk position={[position[0]+3, position[1]+0.09, position[2]-37.5]} rotation={[0, 0, 0]}/>
        <Sidewalk position={[position[0]+9, position[1]+0.09, position[2]-37.5]} rotation={[0, 0, 0]}/>
        <Sidewalk position={[position[0]+15, position[1]+0.09, position[2]-37.5]} rotation={[0, 0, 0]}/>
        <Sidewalk position={[position[0]+21, position[1]+0.09, position[2]-37.5]} rotation={[0, 0, 0]}/>
        <Sidewalk position={[position[0]+27, position[1]+0.06, position[2]-37.5]} rotation={[0, 0, 0]}/>
        <Sidewalk position={[position[0]+33, position[1]+0.06, position[2]-37.5]} rotation={[0, 0, 0]}/>
        <Sidewalk position={[position[0]+39, position[1]+0.09, position[2]-37.5]} rotation={[0, 0, 0]}/>
        <Sidewalk position={[position[0]+45, position[1]+0.09, position[2]-37.5]} rotation={[0, 0, 0]}/>
        <Sidewalk position={[position[0]+51, position[1]+0.09, position[2]-37.5]} rotation={[0, 0, 0]}/>
        <Sidewalk position={[position[0]+57, position[1]+0.09, position[2]-37.5]} rotation={[0, 0, 0]}/>
        <Sidewalk position={[position[0]+60, position[1]+0.09, position[2]-37.5]} rotation={[0, 0, 0]}/>
        <Sidewalk position={[position[0]+63, position[1]+0.09, position[2]-37.5]} rotation={[0, 0, 0]}/>

        <Sidewalk position={[position[0]-3, position[1]+0.09, position[2]-40.5]} rotation={[0, 0, 0]}/>
        <Sidewalk position={[position[0], position[1]+0.09, position[2]-40.5]} rotation={[0, 0, 0]}/>
        <Sidewalk position={[position[0]+3, position[1]+0.09, position[2]-40.5]} rotation={[0, 0, 0]}/>
        <Sidewalk position={[position[0]+9, position[1]+0.09, position[2]-40.5]} rotation={[0, 0, 0]}/>
        <Sidewalk position={[position[0]+15, position[1]+0.09, position[2]-40.5]} rotation={[0, 0, 0]}/>
        <Sidewalk position={[position[0]+21, position[1]+0.09, position[2]-40.5]} rotation={[0, 0, 0]}/>
        <Sidewalk position={[position[0]+27, position[1]+0.06, position[2]-40.5]} rotation={[0, 0, 0]}/>
        <Sidewalk position={[position[0]+33, position[1]+0.06, position[2]-40.5]} rotation={[0, 0, 0]}/>
        <Sidewalk position={[position[0]+39, position[1]+0.09, position[2]-40.5]} rotation={[0, 0, 0]}/>
        <Sidewalk position={[position[0]+45, position[1]+0.09, position[2]-40.5]} rotation={[0, 0, 0]}/>
        <Sidewalk position={[position[0]+51, position[1]+0.09, position[2]-40.5]} rotation={[0, 0, 0]}/>
        <Sidewalk position={[position[0]+57, position[1]+0.09, position[2]-40.5]} rotation={[0, 0, 0]}/>
        <Sidewalk position={[position[0]+60, position[1]+0.09, position[2]-40.5]} rotation={[0, 0, 0]}/>
        <Sidewalk position={[position[0]+63, position[1]+0.09, position[2]-40.5]} rotation={[0, 0, 0]}/>

        <Sidewalk position={[position[0]-3, position[1]+0.09, position[2]-43.5]} rotation={[0, 0, 0]}/>
        <Sidewalk position={[position[0], position[1]+0.09, position[2]-43.5]} rotation={[0, 0, 0]}/>
        <Sidewalk position={[position[0]+3, position[1]+0.09, position[2]-43.5]} rotation={[0, 0, 0]}/>
        <Sidewalk position={[position[0]+9, position[1]+0.09, position[2]-43.5]} rotation={[0, 0, 0]}/>
        <Sidewalk position={[position[0]+15, position[1]+0.09, position[2]-43.5]} rotation={[0, 0, 0]}/>
        <Sidewalk position={[position[0]+21, position[1]+0.09, position[2]-43.5]} rotation={[0, 0, 0]}/>
        <Sidewalk position={[position[0]+27, position[1]+0.06, position[2]-43.5]} rotation={[0, 0, 0]}/>
        <Sidewalk position={[position[0]+33, position[1]+0.06, position[2]-43.5]} rotation={[0, 0, 0]}/>
        <Sidewalk position={[position[0]+39, position[1]+0.09, position[2]-43.5]} rotation={[0, 0, 0]}/>
        <Sidewalk position={[position[0]+45, position[1]+0.09, position[2]-43.5]} rotation={[0, 0, 0]}/>
        <Sidewalk position={[position[0]+51, position[1]+0.09, position[2]-43.5]} rotation={[0, 0, 0]}/>
        <Sidewalk position={[position[0]+57, position[1]+0.09, position[2]-43.5]} rotation={[0, 0, 0]}/>
        <Sidewalk position={[position[0]+60, position[1]+0.09, position[2]-43.5]} rotation={[0, 0, 0]}/>
        <Sidewalk position={[position[0]+63, position[1]+0.09, position[2]-43.5]} rotation={[0, 0, 0]}/>

        <Sidewalk position={[position[0]-3, position[1]+0.09, position[2]-46.5]} rotation={[0, 0, 0]}/>
        <Sidewalk position={[position[0], position[1]+0.09, position[2]-46.5]} rotation={[0, 0, 0]}/>
        <Sidewalk position={[position[0]+3, position[1]+0.09, position[2]-46.5]} rotation={[0, 0, 0]}/>
        <Sidewalk position={[position[0]+9, position[1]+0.09, position[2]-46.5]} rotation={[0, 0, 0]}/>
        <Sidewalk position={[position[0]+15, position[1]+0.09, position[2]-46.5]} rotation={[0, 0, 0]}/>
        <Sidewalk position={[position[0]+21, position[1]+0.09, position[2]-46.5]} rotation={[0, 0, 0]}/>
        <Sidewalk position={[position[0]+27, position[1]+0.06, position[2]-46.5]} rotation={[0, 0, 0]}/>
        <Sidewalk position={[position[0]+33, position[1]+0.06, position[2]-46.5]} rotation={[0, 0, 0]}/>
        <Sidewalk position={[position[0]+39, position[1]+0.09, position[2]-46.5]} rotation={[0, 0, 0]}/>
        <Sidewalk position={[position[0]+45, position[1]+0.09, position[2]-46.5]} rotation={[0, 0, 0]}/>
        <Sidewalk position={[position[0]+51, position[1]+0.09, position[2]-46.5]} rotation={[0, 0, 0]}/>
        <Sidewalk position={[position[0]+57, position[1]+0.09, position[2]-46.5]} rotation={[0, 0, 0]}/>
        <Sidewalk position={[position[0]+60, position[1]+0.09, position[2]-46.5]} rotation={[0, 0, 0]}/>
        <Sidewalk position={[position[0]+63, position[1]+0.09, position[2]-46.5]} rotation={[0, 0, 0]}/>

        {/* 남쪽 인도 */}
        <Sidewalk position={[position[0]+6, position[1]+0.09, position[2]+4.5]} rotation={[0, 0, 0]}/>
        <Sidewalk position={[position[0]+9, position[1]+0.09, position[2]+4.5]} rotation={[0, 0, 0]}/>
        <Sidewalk position={[position[0]+15, position[1]+0.09, position[2]+4.5]} rotation={[0, 0, 0]}/>
        <Sidewalk position={[position[0]+21, position[1]+0.09, position[2]+4.5]} rotation={[0, 0, 0]}/>
        <Sidewalk position={[position[0]+27, position[1]+0.09, position[2]+4.5]} rotation={[0, 0, 0]}/>
        <Sidewalk position={[position[0]+33, position[1]+0.09, position[2]+4.5]} rotation={[0, 0, 0]}/>
        <Sidewalk position={[position[0]+39, position[1]+0.09, position[2]+4.5]} rotation={[0, 0, 0]}/>
        <Sidewalk position={[position[0]+45, position[1]+0.09, position[2]+4.5]} rotation={[0, 0, 0]}/>
        <Sidewalk position={[position[0]+51, position[1]+0.09, position[2]+4.5]} rotation={[0, 0, 0]}/>
        <Sidewalk position={[position[0]+54, position[1]+0.09, position[2]+4.5]} rotation={[0, 0, 0]}/>
        
        <Sidewalk position={[position[0]+6, position[1]+0.09, position[2]+7.5]} rotation={[0, 0, 0]}/>
        <Sidewalk position={[position[0]+9, position[1]+0.09, position[2]+7.5]} rotation={[0, 0, 0]}/>
        <Sidewalk position={[position[0]+15, position[1]+0.09, position[2]+7.5]} rotation={[0, 0, 0]}/>
        <Sidewalk position={[position[0]+21, position[1]+0.09, position[2]+7.5]} rotation={[0, 0, 0]}/>
        <Sidewalk position={[position[0]+27, position[1]+0.09, position[2]+7.5]} rotation={[0, 0, 0]}/>
        <Sidewalk position={[position[0]+33, position[1]+0.09, position[2]+7.5]} rotation={[0, 0, 0]}/>
        <Sidewalk position={[position[0]+39, position[1]+0.09, position[2]+7.5]} rotation={[0, 0, 0]}/>
        <Sidewalk position={[position[0]+45, position[1]+0.09, position[2]+7.5]} rotation={[0, 0, 0]}/>
        <Sidewalk position={[position[0]+51, position[1]+0.09, position[2]+7.5]} rotation={[0, 0, 0]}/>
        <Sidewalk position={[position[0]+54, position[1]+0.09, position[2]+7.5]} rotation={[0, 0, 0]}/>

        <Sidewalk_corner_7 position={[position[0]+51, position[1]+0.09, position[2]]} rotation={[0, -Math.PI / 2, 0]}/>
        <Sidewalk_corner_7 position={[position[0]+51, position[1]+0.09, position[2]]} rotation={[0, Math.PI, 0]}/>

        <Sidewalk_corner_7 position={[position[0]+15, position[1]+0.09, position[2]]} rotation={[0, -Math.PI / 2, 0]}/>
        <Sidewalk_corner_7 position={[position[0]+9, position[1]+0.09, position[2]]} rotation={[0, Math.PI, 0]}/>
        
    </group>
    );
} 