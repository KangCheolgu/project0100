import { } from "@react-three/cannon";
import { Building_7_Blue, Building_9_Blue, Building_8_Green, Building_5_Green, Building_6_Green, Building_4_Red, Building_3_Red, Building_2, Building_8_Red, Building_9_Red, Building_1_Red, Building_10_Red, Building_10_Blue, Building_5_Red, Building_10_1_Blue } from "../components/resort/Buildings"
import { CarRed } from "../components/resort/Vehicles";
import { PalmTree, PalmTree2 } from "../components/resort/PalmTree"
import { Grass, Road_1, Road_4, Road_3, Sidewalk, Road_half_3, Sidewalk_corner_3, Sidewalk_corner_7, Border_1, Border_2, Border_3, Border_4, Border_4_1, Border_5, Border_half} from "../components/resort/Road.jsx"
import { Fence1, Fence2 } from "../components/resort/Objects.jsx";

export default function Section1(props){
    const position = props.position || [60, 0, -60]

    return(<group castShadow receiveShadow >

    <Building_10_Blue position={[position[0]+10, position[1], position[2]-9.5]} />
    {/* <Building_10_Blue position={[70, 0, -69.5]} /> */}
    <Building_9_Red position={[position[0]+8, position[1], position[2]-15.3]} rotation={[0, Math.PI / 2, 0]} />
    {/* <Building_9_Red position={[68, 0, -75.3]} rotation={[0, Math.PI / 2, 0]} /> */}
    <Building_5_Red position={[position[0]+7.5, position[1], position[2]-21.5]} rotation={[0, -Math.PI / 2, 0]}/>
    {/* <Building_5_Red position={[67.5, 0, -81.5]} rotation={[0, -Math.PI / 2, 0]}/> */}
    <Building_10_Red position={[position[0]+7.5, position[1], position[2]-26.5]} rotation={[0, -Math.PI / 2, 0]}/>
    {/* <Building_10_Red position={[67.5, 0, -86.5]} rotation={[0, -Math.PI / 2, 0]}/> */}
    <Building_4_Red position={[position[0]+5.5, position[1], position[2]-34]} rotation={[0, 0, 0]} />
    <Building_9_Blue position={[position[0]-0.5, position[1], position[2]-38]} rotation={[0, 0, 0]} />
    <Building_9_Red position={[position[0]-19.5, position[1], position[2]-37]} rotation={[0, 0, 0]} />
    <Building_10_Blue position={[position[0]-14, position[1], position[2]-38]} rotation={[0, Math.PI / 2, 0]}/>

    <Building_2 position={[position[0]-8.5, position[1], position[2]-20]} rotation={[0, Math.PI / 2, 0]}/>

    <Building_2 position={[position[0]-18, position[1], position[2]+6]} rotation={[0, Math.PI, 0]}/>

    <Building_2 position={[position[0]-29, position[1], position[2]+6]} rotation={[0, Math.PI, 0]}/>

    <Building_3_Red position={[position[0]-23, position[1], position[2]+6]} rotation={[0, Math.PI, 0]} />

    <Building_9_Blue position={[position[0]-28.5, position[1], position[2]-30]} rotation={[0, Math.PI / 2, 0]} />

    <Building_8_Green position={[position[0]-28, position[1], position[2]-38]} rotation={[0, 0, 0]} />

    <Building_7_Blue position={[position[0]-27, position[1], position[2]-20]} rotation={[0, Math.PI / 2, 0]} />

    <Building_3_Red position={[position[0]-27, position[1], position[2]-13]} rotation={[0, Math.PI / 2, 0]} />

    <Building_10_Red position={[position[0]-35, position[1], position[2]-38]} rotation={[0, 0, 0]}/>

    <Building_10_Red position={[position[0]-41, position[1], position[2]-38]} rotation={[0, 0, 0]}/>

    <Building_9_Red position={[position[0]-49, position[1], position[2]-38]} rotation={[0, 0, 0]} />

    <Building_9_Blue position={[position[0]-57, position[1], position[2]-39.5]} rotation={[0, 0, 0]} />

    <Building_8_Green position={[position[0]-69, position[1], position[2]-38]} rotation={[0, Math.PI / 2, 0]} />

    <Building_9_Red position={[position[0]-68, position[1], position[2]-27]} rotation={[0, Math.PI / 2, 0]} />

    <Building_7_Blue position={[position[0]-67, position[1], position[2]-18]} rotation={[0, Math.PI / 2, 0]} />

    <Building_9_Blue position={[position[0]-69, position[1], position[2]-11]} rotation={[0, Math.PI / 2, 0]} />



    <CarRed position={[position[0] + 2, position[1] - 0.09, position[2] - 10]} />

    <PalmTree position={[position[0] - 9, position[1] - 0.09, position[2] - 10]} />


    {/* 보더라인 */}
    <Border_1 position={[position[0] + 3.1, position[1], position[2]]} rotation={[0, Math.PI / 2, 0]} />
    <Border_1 position={[position[0] + 3.1, position[1], position[2] - 6]} rotation={[0, Math.PI / 2, 0]} />
    <Border_1 position={[position[0] + 3.1, position[1], position[2] - 12]} rotation={[0, Math.PI / 2, 0]} />
    <Border_1 position={[position[0] + 3.1, position[1], position[2] - 18]} rotation={[0, Math.PI / 2, 0]} />
    <Border_1 position={[position[0] + 3.1, position[1], position[2] - 24]} rotation={[0, Math.PI / 2, 0]} />

    <Border_1 position={[position[0] - 3.1, position[1], position[2]]} rotation={[0, Math.PI / 2, 0]} />
    <Border_1 position={[position[0] - 3.1, position[1], position[2] - 6]} rotation={[0, Math.PI / 2, 0]} />
    <Border_1 position={[position[0] - 3.1, position[1], position[2] - 12]} rotation={[0, Math.PI / 2, 0]} />
    <Border_1 position={[position[0] - 3.1, position[1], position[2] - 18]} rotation={[0, Math.PI / 2, 0]} />

    <Border_1 position={[position[0] - 14.9, position[1], position[2] - 6]} rotation={[0, Math.PI / 2, 0]} />
    <Border_1 position={[position[0] - 14.9, position[1], position[2] - 12]} rotation={[0, Math.PI / 2, 0]} />
    <Border_1 position={[position[0] - 14.9, position[1], position[2] - 18]} rotation={[0, Math.PI / 2, 0]} />

    <Border_1 position={[position[0] - 21.1, position[1], position[2] - 12]} rotation={[0, Math.PI / 2, 0]} />
    <Border_1 position={[position[0] - 21.1, position[1], position[2] - 18]} rotation={[0, Math.PI / 2, 0]} />
    <Border_1 position={[position[0] - 21.1, position[1], position[2] - 24]} rotation={[0, Math.PI / 2, 0]} />
    <Border_1 position={[position[0] - 21.1, position[1], position[2] - 30]} rotation={[0, Math.PI / 2, 0]} />

    <Border_1 position={[position[0] - 32.9, position[1], position[2] - 12]} rotation={[0, Math.PI / 2, 0]} />
    <Border_1 position={[position[0] - 32.9, position[1], position[2] - 18]} rotation={[0, Math.PI / 2, 0]} />
    <Border_1 position={[position[0] - 32.9, position[1], position[2] - 24]} rotation={[0, Math.PI / 2, 0]} />

    <Border_1 position={[position[0] - 39.1, position[1], position[2] - 6]} rotation={[0, Math.PI / 2, 0]} />
    <Border_1 position={[position[0] - 39.1, position[1], position[2] - 12]} rotation={[0, Math.PI / 2, 0]} />
    <Border_1 position={[position[0] - 39.1, position[1], position[2] - 18]} rotation={[0, Math.PI / 2, 0]} />

    <Border_1 position={[position[0] - 56.9, position[1], position[2]]} rotation={[0, Math.PI / 2, 0]} />
    <Border_1 position={[position[0] - 56.9, position[1], position[2] - 6]} rotation={[0, Math.PI / 2, 0]} />
    <Border_1 position={[position[0] - 56.9, position[1], position[2] - 12]} rotation={[0, Math.PI / 2, 0]} />
    <Border_1 position={[position[0] - 56.9, position[1], position[2] - 18]} rotation={[0, Math.PI / 2, 0]} />

    <Border_1 position={[position[0] - 63.1, position[1], position[2]]} rotation={[0, Math.PI / 2, 0]} />
    <Border_1 position={[position[0] - 63.1, position[1], position[2] - 6]} rotation={[0, Math.PI / 2, 0]} />
    <Border_1 position={[position[0] - 63.1, position[1], position[2] - 12]} rotation={[0, Math.PI / 2, 0]} />
    <Border_1 position={[position[0] - 63.1, position[1], position[2] - 18]} rotation={[0, Math.PI / 2, 0]} />
    <Border_1 position={[position[0] - 63.1, position[1], position[2] - 24]} rotation={[0, Math.PI / 2, 0]} />

    <Border_1 position={[position[0] - 6, position[1], position[2] - 3]} rotation={[0, Math.PI / 2, 0]} />
    <Border_1 position={[position[0] - 6, position[1], position[2] - 9]} rotation={[0, Math.PI / 2, 0]} />
    <Border_1 position={[position[0] - 6, position[1], position[2] - 15]} rotation={[0, Math.PI / 2, 0]} />
    <Border_1 position={[position[0] - 6, position[1], position[2] - 18]} rotation={[0, Math.PI / 2, 0]} />

    <Border_1 position={[position[0] - 12, position[1], position[2] - 3]} rotation={[0, Math.PI / 2, 0]} />
    <Border_1 position={[position[0] - 12, position[1], position[2] - 9]} rotation={[0, Math.PI / 2, 0]} />
    <Border_1 position={[position[0] - 12, position[1], position[2] - 15]} rotation={[0, Math.PI / 2, 0]} />
    <Border_1 position={[position[0] - 12, position[1], position[2] - 18]} rotation={[0, Math.PI / 2, 0]} />

    <Border_1 position={[position[0] - 5.9, position[1], position[2] - 33]} rotation={[0, 0, 0]} />
    <Border_1 position={[position[0] - 11.9, position[1], position[2] - 33]} rotation={[0, 0, 0]} />
    <Border_1 position={[position[0] - 17.9, position[1], position[2] - 33]} rotation={[0, 0, 0]} />
    <Border_1 position={[position[0] - 41.9, position[1], position[2] - 33]} rotation={[0, 0, 0]} />
    <Border_1 position={[position[0] - 47.9, position[1], position[2] - 33]} rotation={[0, 0, 0]} />
    <Border_1 position={[position[0] - 53.9, position[1], position[2] - 33]} rotation={[0, 0, 0]} />

    <Border_1 position={[position[0] - 47.9, position[1], position[2] - 27]} rotation={[0, 0, 0]} />
    <Border_1 position={[position[0] - 48, position[1], position[2] - 24]} rotation={[0, 0, 0]} />
    <Border_1 position={[position[0] - 48, position[1], position[2] + 3]} rotation={[0, 0, 0]} />

    <Border_1 position={[position[0] - 23.9, position[1], position[2] + 3]} rotation={[0, 0, 0]} />
    <Border_1 position={[position[0] - 29.9, position[1], position[2] + 3]} rotation={[0, 0, 0]} />


    {/* <Border_1 position={[54, 0, -63]} rotation={[0, Math.PI / 2, 0]} />
    <Border_1 position={[54, 0, -69]} rotation={[0, Math.PI / 2, 0]} />
    <Border_1 position={[54, 0, -75]} rotation={[0, Math.PI / 2, 0]} />
    <Border_1 position={[54, 0, -78]} rotation={[0, Math.PI / 2, 0]} />

    <Border_1 position={[48, 0, -63]} rotation={[0, Math.PI / 2, 0]} />
    <Border_1 position={[48, 0, -69]} rotation={[0, Math.PI / 2, 0]} />
    <Border_1 position={[48, 0, -75]} rotation={[0, Math.PI / 2, 0]} />
    <Border_1 position={[48, 0, -78]} rotation={[0, Math.PI / 2, 0]} />

    <Border_1 position={[54.1, 0, -93]} rotation={[0, 0, 0]} />
    <Border_1 position={[48.1, 0, -93]} rotation={[0, 0, 0]} />
    <Border_1 position={[42.1, 0, -93]} rotation={[0, 0, 0]} />
    <Border_1 position={[18.1, 0, -93]} rotation={[0, 0, 0]} />
    <Border_1 position={[12.1, 0, -93]} rotation={[0, 0, 0]} />
    <Border_1 position={[6.1, 0, -93]} rotation={[0, 0, 0]} />

    <Border_1 position={[12.1, 0, -87]} rotation={[0, 0, 0]} />
    <Border_1 position={[12, 0, -84]} rotation={[0, 0, 0]} />
    <Border_1 position={[12, 0, -57]} rotation={[0, 0, 0]} />

    <Border_1 position={[36.1, 0, -57]} rotation={[0, 0, 0]} />
    <Border_1 position={[30.1, 0, -57]} rotation={[0, 0, 0]} /> */}

    <Border_2 position={[position[0] + 0.1, position[1], position[2] - 30]} rotation={[0, 0, 0]} />
    <Border_2 position={[position[0] - 6.1, position[1], position[2] - 24]} rotation={[0, 0, 0]} />
    <Border_2 position={[position[0] - 11.9, position[1], position[2] - 24]} rotation={[0, Math.PI / 2, 0]} />
    {/* <Border_2 position={[60.1, 0, -90]} rotation={[0, 0, 0]} />
    <Border_2 position={[53.9, 0, -84]} rotation={[0, 0, 0]} />
    <Border_2 position={[48.1, 0, -84]} rotation={[0, Math.PI / 2, 0]} /> */}


    <Border_2 position={[position[0] -35.9, position[1], position[2] - 30]} rotation={[0, 0, 0]} />
    <Border_2 position={[position[0] -60.1, position[1], position[2] - 30]} rotation={[0, Math.PI / 2, 0]} />
    <Border_2 position={[position[0] -42.1, position[1], position[2] - 24]} rotation={[0, 0, 0]} />
    <Border_2 position={[position[0] -53.9, position[1], position[2] - 24]} rotation={[0, Math.PI / 2, 0]} />
    {/* <Border_2 position={[24.1, 0, -90]} rotation={[0, 0, 0]} /> */}
    {/* <Border_2 position={[-0.1, 0, -90]} rotation={[0, Math.PI / 2, 0]} /> */}
    {/* <Border_2 position={[17.9, 0, -84]} rotation={[0, 0, 0]} /> */}
    {/* <Border_2 position={[6.1, 0, -84]} rotation={[0, Math.PI / 2, 0]} /> */}

    <Border_2 position={[position[0] -17.9, position[1], position[2]]} rotation={[0, -Math.PI / 2, 0]} />
    <Border_2 position={[position[0] -24.1, position[1], position[2]-6]} rotation={[0, -Math.PI / 2, 0]} />
    {/* <Border_2 position={[42.1, 0, -60]} rotation={[0, -Math.PI / 2, 0]} /> */}
    {/* <Border_2 position={[35.9, 0, -66]} rotation={[0, -Math.PI / 2, 0]} /> */}

    <Border_2 position={[position[0] -29.9, position[1], position[2]-6]} rotation={[0, Math.PI, 0]} />
    <Border_2 position={[position[0] -36.1, position[1], position[2]]} rotation={[0, Math.PI, 0]} />
    {/* <Border_2 position={[30.1, 0, -66]} rotation={[0, Math.PI, 0]} /> */}
    {/* <Border_2 position={[23.9, 0, -60]} rotation={[0, Math.PI, 0]} /> */}

    <Border_5 position={[position[0] -9, position[1], position[2]-21]} rotation={[0, 0, 0]} />
    <Border_5 position={[position[0] -9, position[1], position[2]-21]} rotation={[0, Math.PI / 2, 0]} />
    {/* <Border_5 position={[51, 0, -81]} rotation={[0, 0, 0]}/> */}
    {/* <Border_5 position={[51, 0, -81]} rotation={[0, Math.PI / 2, 0]}/> */}

    <Border_5 position={[position[0] -45, position[1], position[2]-21]} rotation={[0, 0, 0]} />
    <Border_5 position={[position[0] -51, position[1], position[2]-21]} rotation={[0, Math.PI / 2, 0]} />
    {/* <Border_5 position={[15, 0, -81]} rotation={[0, 0, 0]}/>
    <Border_5 position={[9, 0, -81]} rotation={[0, Math.PI / 2, 0]}/> */}

    <Border_5 position={[position[0] -9, position[1], position[2]]} rotation={[0, Math.PI, 0]} />
    <Border_5 position={[position[0] -9, position[1], position[2]]} rotation={[0, -Math.PI / 2, 0]} />
    {/* <Border_5 position={[51, 0, -60]} rotation={[0, Math.PI, 0]}/>
    <Border_5 position={[51, 0, -60]} rotation={[0, -Math.PI / 2, 0]}/> */}

    <Border_5 position={[position[0] - 51, position[1], position[2]]} rotation={[0, Math.PI, 0]}/>
    <Border_5 position={[position[0] - 45, position[1], position[2]]} rotation={[0, -Math.PI / 2, 0]}/>
    {/* <Border_5 position={[9, 0, -60]} rotation={[0, Math.PI, 0]}/>
    <Border_5 position={[15, 0, -60]} rotation={[0, -Math.PI / 2, 0]}/> */}

    <Fence2 position={[position[0] + 12.5, position[1], position[2] - 1]} rotation={[0, Math.PI / 2, 0]} />
    <Fence2 position={[position[0] + 12.5, position[1], position[2] - 5]} rotation={[0, Math.PI / 2, 0]} />
    <Fence2 position={[position[0] + 9, position[1], position[2] - 30]} rotation={[0, Math.PI / 2, 0]} />
    <Fence2 position={[position[0] + 9, position[1], position[2] - 34]} rotation={[0, Math.PI / 2, 0]} />
    <Fence2 position={[position[0] + 9, position[1], position[2] - 38]} rotation={[0, Math.PI / 2, 0]} />

    <Fence2 position={[position[0] - 0.5, position[1], position[2] - 40]} rotation={[0, 0, 0]} />
    <Fence2 position={[position[0] + 3.5, position[1], position[2] - 40]} rotation={[0, 0, 0]} />
    <Fence2 position={[position[0] + 7, position[1], position[2] - 40]} rotation={[0, 0, 0]} />

    <Fence2 position={[position[0] - 9.5, position[1], position[2] - 40.5]} rotation={[0, 0, 0]} />
    <Fence2 position={[position[0] - 5.5, position[1], position[2] - 40.5]} rotation={[0, 0, 0]} />

    <Fence2 position={[position[0] - 24, position[1], position[2] - 40.5]} rotation={[0, 0, 0]} />

    <Fence2 position={[position[0] - 33.7, position[1], position[2] - 40.5]} rotation={[0, 0, 0]} />
    <Fence2 position={[position[0] - 45, position[1], position[2] - 40.5]} rotation={[0, 0, 0]} />
    <Fence2 position={[position[0] - 53, position[1], position[2] - 40.5]} rotation={[0, 0, 0]} />
    <Fence2 position={[position[0] - 64, position[1], position[2] - 40.5]} rotation={[0, 0, 0]} />
    {/* <Fence2 position={[72.5, 0, -61]} rotation={[0, Math.PI / 2, 0]} />
    <Fence2 position={[72.5, 0, -65]} rotation={[0, Math.PI / 2, 0]} />
    <Fence2 position={[69, 0, -90]} rotation={[0, Math.PI / 2, 0]} />
    <Fence2 position={[69, 0, -94]} rotation={[0, Math.PI / 2, 0]} />
    <Fence2 position={[69, 0, -98]} rotation={[0, Math.PI / 2, 0]} />

    <Fence2 position={[59.5, 0, -100]} rotation={[0, 0, 0]} />
    <Fence2 position={[63.5, 0, -100]} rotation={[0, 0, 0]} />
    <Fence2 position={[67, 0, -100]} rotation={[0, 0, 0]} />

    <Fence2 position={[50.5, 0, -100.5]} rotation={[0, 0, 0]} />
    <Fence2 position={[54.5, 0, -100.5]} rotation={[0, 0, 0]} />

    <Fence2 position={[36, 0, -100.5]} rotation={[0, 0, 0]} />

    <Fence2 position={[26.3, 0, -100.5]} rotation={[0, 0, 0]} />
    <Fence2 position={[15, 0, -100.5]} rotation={[0, 0, 0]} />
    <Fence2 position={[7, 0, -100.5]} rotation={[0, 0, 0]} />
    <Fence2 position={[-4, 0, -100.5]} rotation={[0, 0, 0]} /> */}


    </group>
    );
}