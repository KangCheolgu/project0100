import { } from "@react-three/cannon";
import { Building_7_Blue, Building_9_Blue, Building_8_Green, Building_5_Green, Building_6_Green, Building_4_Red, Building_3_Red, Building_2, Building_8_Red, Building_9_Red, Building_1_Red, Building_10_Red, Building_10_Blue, Building_5_Red, Building_10_1_Blue } from "../components/resort/Buildings"
import { CarRed, CarGreen, IceCreamCart, MotorbikeYellow, MotorbikeOrange } from "../components/resort/Vehicles1.jsx";
import { Grass, Road_1, Road_4, Road_3, Sidewalk, Road_half_3, Sidewalk_corner_3, Sidewalk_corner_7, Border_1, Border_2, Border_3, Border_4, Border_4_1, Border_5, Border_half} from "../components/resort/Road.jsx"
import { Lighter, TrafficLight, Bench, Clumb_empty_1, Fence1, Fence2, TrashBag, TrashCan, Hatch, Hydrant, RoadPillar, Mailbox, Block, Cone } from "../components/resort/Objects1.jsx";
import { Palm_1, Palm_2, Palm_3, Palm_4, Palm_5, Clumb_1, Clumb_2, Clumb_3, Clumb_4, Clumb_5, Clumb_6, Clumb_7, Clumb_8, Bush_1, Bush_2, Bush_3 } from "../components/Trees.jsx";
import { BasketballCourt } from "../components/resort/Basketball.jsx";
import { Metalfence } from "../components/resort/Metalfence.jsx";
import { Bridge } from "../components/resort/Bridge.jsx";
import { StoneWall } from "../components/StoneWall.jsx";

export default function Section1(props){
    const position = props.position || [60, 0, -60]

    return(
    <group castShadow receiveShadow >

    <Bridge position={[position[0], position[1]-6, position[2] + 43]} rotation={[0, -Math.PI/2 , 0]} />
    <Bridge position={[position[0], position[1]-6, position[2] + 18]} rotation={[0, -Math.PI/2 , 0]} />

    <Bridge position={[position[0]-60, position[1]-6, position[2] + 48]} rotation={[0, Math.PI/2 , 0]} />
    <Bridge position={[position[0]-60, position[1]-6, position[2] + 23]} rotation={[0, Math.PI/2 , 0]} />

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

    <Building_2 position={[position[0]-12, position[1], position[2]+6]} rotation={[0, Math.PI, 0]}/>

    <Building_2 position={[position[0]-18, position[1], position[2]+6]} rotation={[0, Math.PI, 0]}/>

    <Building_3_Red position={[position[0]-24, position[1], position[2]+6]} rotation={[0, Math.PI, 0]} />

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

    <Building_7_Blue position={[position[0]-32, position[1], position[2]+6]} rotation={[0, Math.PI, 0]} />

    <Building_9_Red position={[position[0]-67.5, position[1], position[2]+1]} rotation={[0, Math.PI/2, 0]} />

    <Building_9_Blue position={[position[0]-48, position[1], position[2]+4.5]} rotation={[0, 0, 0]} />

    <Building_5_Red position={[position[0]-41, position[1], position[2]+5.5]} rotation={[0, Math.PI, 0]}/>

    <TrafficLight position={[position[0] - 4, position[1] - 0.09, position[2] - 6]} rotation={[0, Math.PI / 2, 0]}/>
    <TrafficLight position={[position[0] - 33, position[1] - 0.09, position[2] - 33]} rotation={[0, Math.PI / 2, 0]}/>

    <Block position={[position[0]-4, position[1] -0.1, position[2] + 7]} rotation={[0, Math.PI / 2, 0]}/>
    <Block position={[position[0]-4, position[1] -0.1, position[2] + 5]} rotation={[0, Math.PI / 2, 0]}/>
    <Block position={[position[0]-5, position[1] -0.1, position[2] + 3]} rotation={[0, -Math.PI / 4, 0]}/>
    <Block position={[position[0]-12, position[1] -0.1, position[2] + 3]} rotation={[0, Math.PI / 2, 0]}/>
    <Block position={[position[0]-24, position[1] -0.1, position[2] - 33]} rotation={[0, Math.PI / 2, 0]}/>
    <Block position={[position[0]-30, position[1] -0.1, position[2] - 33]} rotation={[0, Math.PI / 2, 0]}/>
    <Block position={[position[0]-43, position[1] -0.1, position[2] + 1]} rotation={[0, Math.PI / 2, 0]}/>
    <Block position={[position[0]-53, position[1] -0.1, position[2] + 1]} rotation={[0, Math.PI / 2, 0]}/>
    <Block position={[position[0]-58.5, position[1] -0.1, position[2] + 20]} rotation={[0, 0, 0]}/>
    <Block position={[position[0]-61.5, position[1] -0.1, position[2] + 30]} rotation={[0, 0, 0]}/>
    <Block position={[position[0]-58.5, position[1] -0.1, position[2] + 40]} rotation={[0, 0, 0]}/>
    <Block position={[position[0]-61.5, position[1] -0.1, position[2] + 50]} rotation={[0, 0, 0]}/>

    <Cone position={[position[0] + 1, position[1] -0.1, position[2] - 29.5]} rotation={[0, -Math.PI / 4, 0]}/>
    <Cone position={[position[0] + 2.2, position[1] -0.1, position[2] - 31]} rotation={[0, -Math.PI / 4, 0]}/>
    <Cone position={[position[0] - 0.2, position[1] -0.1, position[2] - 31]} rotation={[0, -Math.PI / 4, 0]}/>
    <Cone position={[position[0] + 1, position[1] -0.1, position[2] - 32.5]} rotation={[0, -Math.PI / 4, 0]}/>

    <Cone position={[position[0] -60, position[1] -0.1, position[2] - 29.5]} rotation={[0, -Math.PI / 4, 0]}/>
    <Cone position={[position[0] -62.2, position[1] -0.1, position[2] - 31]} rotation={[0, -Math.PI / 4, 0]}/>
    <Cone position={[position[0] -57.8, position[1] -0.1, position[2] - 31]} rotation={[0, -Math.PI / 4, 0]}/>
    <Cone position={[position[0] -60, position[1] -0.1, position[2] - 32.5]} rotation={[0, -Math.PI / 4, 0]}/>

    <Hatch position={[position[0] + 1, position[1] -0.1, position[2] - 31]} rotation={[0, -Math.PI / 4, 0]}/>
    <Hatch position={[position[0] -60, position[1] -0.1, position[2] - 31]} rotation={[0, -Math.PI / 4, 0]}/>

    <IceCreamCart position={[position[0] + 5.5, position[1] , position[2] - 1]} rotation={[0, -Math.PI / 4, 0]}/>

    <CarGreen position={[position[0] - 15, position[1] - 0.09, position[2] - 33]} rotation={[Math.PI / 36, -Math.PI / 2, 0]} />
    <CarRed position={[position[0] - 40, position[1] - 0.09, position[2] - 33]} rotation={[Math.PI / 36, -Math.PI / 2, 0]} />
    <CarGreen position={[position[0] - 55, position[1] - 0.09, position[2] - 33]} rotation={[Math.PI / 36, -Math.PI / 2, 0]} />

    <CarRed position={[position[0] - 15, position[1] - 0.09, position[2] - 20]} rotation={[0, Math.PI, -Math.PI / 36]} />
    <CarGreen position={[position[0] - 21, position[1] - 0.09, position[2] - 10]} rotation={[0, 0, -Math.PI / 36]} />
    <CarRed position={[position[0] - 33, position[1] - 0.09, position[2] - 20]} rotation={[0, Math.PI, -Math.PI / 36]} />
    <CarGreen position={[position[0] - 39, position[1] - 0.09, position[2] - 15]} rotation={[0, 0, -Math.PI / 36]} />
    <CarRed position={[position[0] - 63, position[1] - 0.09, position[2] - 10]} rotation={[0, 0, -Math.PI / 36]} />
    <CarGreen position={[position[0] - 63, position[1] - 0.09, position[2]]} rotation={[0, 0, -Math.PI / 36]} />

    <Palm_5 position={[position[0] + 9, position[1] - 0.09, position[2] - 1]} rotation={[0, Math.PI / 2, 0]}/>
    <Palm_2 position={[position[0] - 7, position[1] - 0.09, position[2] - 12]} rotation={[0, Math.PI / 2, 0]} />
    <Palm_2 position={[position[0] - 8.3, position[1] - 0.09, position[2] - 1]} rotation={[0, Math.PI / 2, 0]} />
    <Palm_2 position={[position[0] -9, position[1] - 0.09, position[2] - 7]} />
    <Palm_2 position={[position[0] - 9, position[1] - 0.1, position[2] - 5]} />
    <Palm_2 position={[position[0] - 10, position[1] - 0.1, position[2] - 8]} rotation={[0, Math.PI / 2, 0]} />
    <Palm_2 position={[position[0] - 9, position[1] - 0.1, position[2] - 15]} />

    <Palm_2 position={[position[0] -8.5, position[1] - 0.09, position[2] - 37]} rotation={[0, Math.PI / 2, 0]}/>

    <Palm_2 position={[position[0] - 10, position[1] - 0.09, position[2] -11]} rotation={[0, Math.PI / 2, 0]} />
    <Palm_2 position={[position[0] - 10, position[1] - 0.1, position[2]]} rotation={[0, Math.PI, 0]}/>
    <Palm_2 position={[position[0] - 10, position[1] - 0.1, position[2] - 2]} />
    <Palm_2 position={[position[0] -9, position[1] - 0.09, position[2] - 7]} />

    <Lighter position={[position[0] - 4, position[1] - 0.09, position[2] - 3]} />
    <Lighter position={[position[0] - 4, position[1] - 0.09, position[2] - 13]} />
    <Lighter position={[position[0] - 4, position[1] - 0.09, position[2] - 23]} />

    <Lighter position={[position[0] - 14, position[1] - 0.09, position[2] - 23]} />
    <Lighter position={[position[0] - 14, position[1] - 0.09, position[2] - 13]} />
    <Lighter position={[position[0] - 14, position[1] - 0.09, position[2] - 3]} />

    <Lighter position={[position[0] - 22, position[1] - 0.09, position[2] - 33]} rotation={[0, Math.PI / 2, 0]} />
    <Lighter position={[position[0] - 22, position[1] - 0.09, position[2] - 26]} />
    <Lighter position={[position[0] - 22, position[1] - 0.09, position[2] - 16]} />
    <Lighter position={[position[0] - 22, position[1] - 0.09, position[2] - 5]} />

    <Lighter position={[position[0] - 32, position[1] - 0.09, position[2] - 5]} />
    <Lighter position={[position[0] - 32, position[1] - 0.09, position[2] - 22]} />

    <Lighter position={[position[0] - 40, position[1] - 0.09, position[2] - 5]} />
    <Lighter position={[position[0] - 40, position[1] - 0.09, position[2] - 23]}/>
    <Lighter position={[position[0] - 48, position[1] - 0.09, position[2] - 26]} rotation={[0, Math.PI / 2, 0]}/>
    <Lighter position={[position[0] - 48, position[1] - 0.09, position[2] - 33.5]} rotation={[0, Math.PI / 2, 0]}/>

    <Lighter position={[position[0] - 56, position[1] - 0.09, position[2] - 5]} />
    <Lighter position={[position[0] - 56, position[1] - 0.09, position[2] - 23]}/>

    <Lighter position={[position[0] - 64, position[1] - 0.09, position[2] - 5]} />
    <Lighter position={[position[0] - 64, position[1] - 0.09, position[2] - 23]}/>
    <Lighter position={[position[0] - 64, position[1] - 0.09, position[2] - 33]} rotation={[0, Math.PI / 2, 0]}/>

    <Lighter position={[position[0] + 4, position[1] - 0.09, position[2] - 3]} />
    <Lighter position={[position[0] + 4, position[1] - 0.09, position[2] - 13]} />
    <Lighter position={[position[0] + 4, position[1] - 0.09, position[2] - 23]} />

    <Lighter position={[position[0] -9, position[1] - 0.09, position[2] - 34]} rotation={[0, Math.PI / 2, 0]}/>

    <Clumb_empty_1 position={[position[0] + 9, position[1] - 0.09, position[2] - 1]} />
    <Clumb_empty_1 position={[position[0] -8.5, position[1] - 0.09, position[2] - 37]} scale={0.7}/>

    <Bush_3 position={[position[0] + 9, position[1] + 0.09, position[2] - 1]} />
    <Bush_3 position={[position[0] - 8, position[1] - 0.1, position[2] - 1]} />
    <Bush_3 position={[position[0] - 10, position[1] - 0.1, position[2]]} />
    <Bush_3 position={[position[0] - 9, position[1] - 0.1, position[2] - 10]} />
    <Bush_3 position={[position[0] - 8, position[1] - 0.1, position[2] - 4]} />
    <Bush_3 position={[position[0] - 10, position[1] - 0.1, position[2] - 5]} />
    <Bush_3 position={[position[0] - 9, position[1] - 0.1, position[2] - 12]} />
    <Bush_3 position={[position[0] - 8, position[1] - 0.1, position[2] - 7]} />
    <Bush_3 position={[position[0] - 10, position[1] - 0.1, position[2] - 8]} />
    <Bush_3 position={[position[0] - 9, position[1] - 0.1, position[2] - 15]} />
    <Bush_3 position={[position[0] - 8, position[1] - 0.1, position[2] - 13]} />
    <Bush_3 position={[position[0] - 10, position[1] - 0.1, position[2] - 14]} />

    <Bench position={[position[0] + 9, position[1] - 0.09, position[2] - 3.5]} rotation={[0, 0, 0]}/>
    <Bench position={[position[0] + 9, position[1] - 0.09, position[2] + 1.5]} rotation={[0, Math.PI, 0]}/>
    <Bench position={[position[0] -10, position[1] - 0.09, position[2] - 37]} rotation={[0, Math.PI / 2, 0]}/>
    <Bench position={[position[0] -7, position[1] - 0.09, position[2] - 37]} rotation={[0, -Math.PI / 2, 0]}/>

    <Hydrant position={[position[0] + 3, position[1] - 0.04, position[2] - 32]} />
    <Hydrant position={[position[0] - 5, position[1] - 0.04, position[2] - 26]} />
    <Hydrant position={[position[0] - 23, position[1] + 0.04, position[2] - 4]} />

    <TrashCan position={[position[0] - 27.5, position[1] - 0.04, position[2] - 10.1]} />
    <TrashBag position={[position[0] - 26, position[1] + 0.04, position[2] - 9.3]} />
    <TrashBag position={[position[0] - 27, position[1] + 0.04, position[2] - 9.1]} />
    <TrashBag position={[position[0] - 28, position[1] + 0.04, position[2] - 9.2]} />

    <BasketballCourt position={[position[0] - 48, position[1] - 0.09, position[2] - 11]} rotation={[0, 0, 0]} scale={0.7}/>

    <Metalfence position={[position[0] - 44.5, position[1] - 0.09, position[2]-0.7]} rotation={[0, 0, 0]} scale={0.5}/>
    <Metalfence position={[position[0] - 48, position[1] - 0.09, position[2]-0.7]} rotation={[0, 0, 0]} scale={0.5}/>
    <Metalfence position={[position[0] - 51.5, position[1] - 0.09, position[2]-0.7]} rotation={[0, 0, 0]} scale={0.5}/>
    <Metalfence position={[position[0] - 44.5, position[1] - 0.09, position[2]-21]} rotation={[0, 0, 0]} scale={0.5}/>
    <Metalfence position={[position[0] - 48, position[1] - 0.09, position[2]-21]} rotation={[0, 0, 0]} scale={0.5}/>
    <Metalfence position={[position[0] - 51.5, position[1] - 0.09, position[2]-21]} rotation={[0, 0, 0]} scale={0.5}/>

    <Metalfence position={[position[0] - 42.7, position[1] - 0.09, position[2]-16.5]} rotation={[0, Math.PI / 2, 0]} scale={0.5}/>
    <Metalfence position={[position[0] - 42.7, position[1] - 0.09, position[2]-13]} rotation={[0, Math.PI / 2, 0]} scale={0.5}/>
    <Metalfence position={[position[0] - 42.7, position[1] - 0.09, position[2]-9.5]} rotation={[0, Math.PI / 2, 0]} scale={0.5}/>
    <Metalfence position={[position[0] - 42.7, position[1] - 0.09, position[2]-6]} rotation={[0, Math.PI / 2, 0]} scale={0.5}/>
    <Metalfence position={[position[0] - 42.7, position[1] - 0.09, position[2]-2.5]} rotation={[0, Math.PI / 2, 0]} scale={0.5}/>

    <Metalfence position={[position[0] - 53.5, position[1] - 0.09, position[2]-19.2]} rotation={[0, Math.PI / 2, 0]} scale={0.5}/>
    <Metalfence position={[position[0] - 53.5, position[1] - 0.09, position[2]-15.7]} rotation={[0, Math.PI / 2, 0]} scale={0.5}/>
    <Metalfence position={[position[0] - 53.5, position[1] - 0.09, position[2]-12.2]} rotation={[0, Math.PI / 2, 0]} scale={0.5}/>
    <Metalfence position={[position[0] - 53.5, position[1] - 0.09, position[2]-8.7]} rotation={[0, Math.PI / 2, 0]} scale={0.5}/>
    <Metalfence position={[position[0] - 53.5, position[1] - 0.09, position[2]-2.5]} rotation={[0, Math.PI / 2, 0]} scale={0.5}/>

    {/* 보더라인 */}
    <Border_1 position={[position[0] + 3.1, position[1]-0.04, position[2] + 6]} rotation={[0, Math.PI / 2, 0]} />
    <Border_1 position={[position[0] + 3.1, position[1]-0.04, position[2]]} rotation={[0, Math.PI / 2, 0]} />
    <Border_1 position={[position[0] + 3.1, position[1]-0.04, position[2] - 6]} rotation={[0, Math.PI / 2, 0]} />
    <Border_1 position={[position[0] + 3.1, position[1]-0.04, position[2] - 12]} rotation={[0, Math.PI / 2, 0]} />
    <Border_1 position={[position[0] + 3.1, position[1]-0.04, position[2] - 18]} rotation={[0, Math.PI / 2, 0]} />
    <Border_1 position={[position[0] + 3.1, position[1]-0.04, position[2] - 24]} rotation={[0, Math.PI / 2, 0]} />

    <Border_1 position={[position[0] - 3.1, position[1]-0.04, position[2] + 6]} rotation={[0, Math.PI / 2, 0]} />
    <Border_1 position={[position[0] - 3.1, position[1]-0.04, position[2]]} rotation={[0, Math.PI / 2, 0]} />
    <Border_1 position={[position[0] - 3.1, position[1]-0.04, position[2] - 6]} rotation={[0, Math.PI / 2, 0]} />
    <Border_1 position={[position[0] - 3.1, position[1]-0.04, position[2] - 12]} rotation={[0, Math.PI / 2, 0]} />
    <Border_1 position={[position[0] - 3.1, position[1]-0.04, position[2] - 18]} rotation={[0, Math.PI / 2, 0]} />0
    <Border_1 position={[position[0] - 14.9, position[1]-0.04, position[2]]} rotation={[0, Math.PI / 2, 0]} />
    <Border_1 position={[position[0] - 14.9, position[1]-0.04, position[2] - 6]} rotation={[0, Math.PI / 2, 0]} />
    <Border_1 position={[position[0] - 14.9, position[1]-0.04, position[2] - 12]} rotation={[0, Math.PI / 2, 0]} />
    <Border_1 position={[position[0] - 14.9, position[1]-0.04, position[2] - 18]} rotation={[0, Math.PI / 2, 0]} />

    <Border_1 position={[position[0] - 21.1, position[1]-0.04, position[2] - 12]} rotation={[0, Math.PI / 2, 0]} />
    <Border_1 position={[position[0] - 21.1, position[1]-0.04, position[2] - 18]} rotation={[0, Math.PI / 2, 0]} />
    <Border_1 position={[position[0] - 21.1, position[1]-0.04, position[2] - 24]} rotation={[0, Math.PI / 2, 0]} />
    <Border_1 position={[position[0] - 21.1, position[1]-0.04, position[2] - 30]} rotation={[0, Math.PI / 2, 0]} />

    <Border_1 position={[position[0] - 32.9, position[1]-0.04, position[2] - 12]} rotation={[0, Math.PI / 2, 0]} />
    <Border_1 position={[position[0] - 32.9, position[1]-0.04, position[2] - 18]} rotation={[0, Math.PI / 2, 0]} />
    <Border_1 position={[position[0] - 32.9, position[1]-0.04, position[2] - 24]} rotation={[0, Math.PI / 2, 0]} />

    <Border_1 position={[position[0] - 39.1, position[1]-0.04, position[2]]} rotation={[0, Math.PI / 2, 0]} />
    <Border_1 position={[position[0] - 39.1, position[1]-0.04, position[2] - 6]} rotation={[0, Math.PI / 2, 0]} />
    <Border_1 position={[position[0] - 39.1, position[1]-0.04, position[2] - 12]} rotation={[0, Math.PI / 2, 0]} />
    <Border_1 position={[position[0] - 39.1, position[1]-0.04, position[2] - 18]} rotation={[0, Math.PI / 2, 0]} />

    <Border_1 position={[position[0] - 56.9, position[1]-0.04, position[2] + 6]} rotation={[0, Math.PI / 2, 0]} />
    <Border_1 position={[position[0] - 56.9, position[1]-0.04, position[2]]} rotation={[0, Math.PI / 2, 0]} />
    <Border_1 position={[position[0] - 56.9, position[1]-0.04, position[2] - 6]} rotation={[0, Math.PI / 2, 0]} />
    <Border_1 position={[position[0] - 56.9, position[1]-0.04, position[2] - 12]} rotation={[0, Math.PI / 2, 0]} />
    <Border_1 position={[position[0] - 56.9, position[1]-0.04, position[2] - 18]} rotation={[0, Math.PI / 2, 0]} />

    <Border_1 position={[position[0] - 63.1, position[1]-0.04, position[2] + 6]} rotation={[0, Math.PI / 2, 0]} />
    <Border_1 position={[position[0] - 63.1, position[1]-0.04, position[2]]} rotation={[0, Math.PI / 2, 0]} />
    <Border_1 position={[position[0] - 63.1, position[1]-0.04, position[2] - 6]} rotation={[0, Math.PI / 2, 0]} />
    <Border_1 position={[position[0] - 63.1, position[1]-0.04, position[2] - 12]} rotation={[0, Math.PI / 2, 0]} />
    <Border_1 position={[position[0] - 63.1, position[1]-0.04, position[2] - 18]} rotation={[0, Math.PI / 2, 0]} />
    <Border_1 position={[position[0] - 63.1, position[1]-0.04, position[2] - 24]} rotation={[0, Math.PI / 2, 0]} />

    <Border_1 position={[position[0] - 6, position[1]-0.04, position[2] - 3]} rotation={[0, Math.PI / 2, 0]} />
    <Border_1 position={[position[0] - 6, position[1]-0.04, position[2] - 9]} rotation={[0, Math.PI / 2, 0]} />
    <Border_1 position={[position[0] - 6, position[1]-0.04, position[2] - 15]} rotation={[0, Math.PI / 2, 0]} />
    <Border_1 position={[position[0] - 6, position[1]-0.04, position[2] - 18]} rotation={[0, Math.PI / 2, 0]} />

    <Border_1 position={[position[0] - 12, position[1]-0.04, position[2] - 3]} rotation={[0, Math.PI / 2, 0]} />
    <Border_1 position={[position[0] - 12, position[1]-0.04, position[2] - 9]} rotation={[0, Math.PI / 2, 0]} />
    <Border_1 position={[position[0] - 12, position[1]-0.04, position[2] - 15]} rotation={[0, Math.PI / 2, 0]} />
    <Border_1 position={[position[0] - 12, position[1]-0.04, position[2] - 18]} rotation={[0, Math.PI / 2, 0]} />

    <Border_1 position={[position[0] - 5.9, position[1]-0.04, position[2] - 33]} rotation={[0, 0, 0]} />
    <Border_1 position={[position[0] - 11.9, position[1]-0.04, position[2] - 33]} rotation={[0, 0, 0]} />
    <Border_1 position={[position[0] - 17.9, position[1]-0.04, position[2] - 33]} rotation={[0, 0, 0]} />
    <Border_1 position={[position[0] - 41.9, position[1]-0.04, position[2] - 33]} rotation={[0, 0, 0]} />
    <Border_1 position={[position[0] - 47.9, position[1]-0.04, position[2] - 33]} rotation={[0, 0, 0]} />
    <Border_1 position={[position[0] - 53.9, position[1]-0.04, position[2] - 33]} rotation={[0, 0, 0]} />

    <Border_1 position={[position[0] - 47.9, position[1]-0.04, position[2] - 27]} rotation={[0, 0, 0]} />
    <Border_1 position={[position[0] - 48, position[1]-0.04, position[2] - 24]} rotation={[0, 0, 0]} />
    <Border_1 position={[position[0] - 48, position[1]-0.04, position[2] + 3]} rotation={[0, 0, 0]} />

    <Border_1 position={[position[0] - 18, position[1]-0.04, position[2] + 3]} rotation={[0, 0, 0]} />
    <Border_1 position={[position[0] - 24, position[1]-0.04, position[2] + 3]} rotation={[0, 0, 0]} />
    <Border_1 position={[position[0] - 30, position[1]-0.04, position[2] + 3]} rotation={[0, 0, 0]} />
    <Border_1 position={[position[0] - 36, position[1]-0.04, position[2] + 3]} rotation={[0, 0, 0]} />

    <Border_2 position={[position[0] + 0.1, position[1]-0.04, position[2] - 30]} rotation={[0, 0, 0]} />
    <Border_2 position={[position[0] - 6.1, position[1]-0.04, position[2] - 24]} rotation={[0, 0, 0]} />
    <Border_2 position={[position[0] - 11.9, position[1]-0.04, position[2] - 24]} rotation={[0, Math.PI / 2, 0]} />

    <Border_2 position={[position[0] -35.9, position[1]-0.04, position[2] - 30]} rotation={[0, 0, 0]} />
    <Border_2 position={[position[0] -60.1, position[1]-0.04, position[2] - 30]} rotation={[0, Math.PI / 2, 0]} />
    <Border_2 position={[position[0] -42.1, position[1]-0.04, position[2] - 24]} rotation={[0, 0, 0]} />
    <Border_2 position={[position[0] -53.9, position[1]-0.04, position[2] - 24]} rotation={[0, Math.PI / 2, 0]} />

    {/* <Border_2 position={[position[0] -17.9, position[1]-0.14, position[2]]} rotation={[0, -Math.PI / 2, 0]} /> */}
    <Border_2 position={[position[0] -24.1, position[1]-0.04, position[2]-6]} rotation={[0, -Math.PI / 2, 0]} />

    <Border_2 position={[position[0] -29.9, position[1]-0.04, position[2]-6]} rotation={[0, Math.PI, 0]} />
    {/* <Border_2 position={[position[0] -36.1, position[1]-0.14, position[2]]} rotation={[0, Math.PI, 0]} /> */}

    <Border_5 position={[position[0] -9, position[1]-0.04, position[2]-21]} rotation={[0, 0, 0]} />
    <Border_5 position={[position[0] -9, position[1]-0.04, position[2]-21]} rotation={[0, Math.PI / 2, 0]} />

    <Border_5 position={[position[0] -45, position[1]-0.04, position[2]-21]} rotation={[0, 0, 0]} />
    <Border_5 position={[position[0] -51, position[1]-0.04, position[2]-21]} rotation={[0, Math.PI / 2, 0]} />

    <Border_5 position={[position[0] -9, position[1]-0.04, position[2]]} rotation={[0, Math.PI, 0]} />
    <Border_5 position={[position[0] -9, position[1]-0.04, position[2]]} rotation={[0, -Math.PI / 2, 0]} />

    <Border_5 position={[position[0] - 51, position[1]-0.04, position[2]]} rotation={[0, Math.PI, 0]}/>
    <Border_5 position={[position[0] - 45, position[1]-0.04, position[2]]} rotation={[0, -Math.PI / 2, 0]}/>

    <Fence2 position={[position[0] - 6.5, position[1], position[2] + 9]} rotation={[0, 0, 0]} />
    <Fence2 position={[position[0] - 10, position[1], position[2] + 9]} rotation={[0, 0, 0]} />
    <Fence2 position={[position[0] - 13.5, position[1], position[2] + 9]} rotation={[0, 0, 0]} />
    <Fence2 position={[position[0] - 17, position[1], position[2] + 9]} rotation={[0, 0, 0]} />
    <Fence2 position={[position[0] - 20.5, position[1], position[2] + 9]} rotation={[0, 0, 0]} />
    <Fence2 position={[position[0] - 24, position[1], position[2] + 9]} rotation={[0, 0, 0]} />
    <Fence2 position={[position[0] - 27.5, position[1], position[2] + 9]} rotation={[0, 0, 0]} />
    <Fence2 position={[position[0] - 31, position[1], position[2] + 9]} rotation={[0, 0, 0]} />
    <Fence2 position={[position[0] - 34.5, position[1], position[2] + 9]} rotation={[0, 0, 0]} />
    <Fence2 position={[position[0] - 37, position[1], position[2] + 9]} rotation={[0, 0, 0]} />
    <Fence2 position={[position[0] - 39.5, position[1], position[2] + 9]} rotation={[0, 0, 0]} />
    <Fence2 position={[position[0] - 43, position[1], position[2] + 9]} rotation={[0, 0, 0]} />
    <Fence2 position={[position[0] - 46.5, position[1], position[2] + 9]} rotation={[0, 0, 0]} />
    <Fence2 position={[position[0] - 50, position[1], position[2] + 9]} rotation={[0, 0, 0]} />
    <Fence2 position={[position[0] - 53.5, position[1], position[2] + 9]} rotation={[0, 0, 0]} />
    <Fence2 position={[position[0] - 65.3, position[1], position[2] + 9]} rotation={[0, 0, 0]} />
    <Fence2 position={[position[0] - 68.8, position[1], position[2] + 9]} rotation={[0, 0, 0]} />
    <Fence2 position={[position[0] - 72.1, position[1], position[2] + 9]} rotation={[0, 0, 0]} />

    <Fence2 position={[position[0] - 72.1, position[1], position[2] + 6.5]} rotation={[0, Math.PI/2 , 0]} />
    <Fence2 position={[position[0] - 72.1, position[1], position[2] + 3.5]} rotation={[0, Math.PI/2 , 0]} />
    <Fence2 position={[position[0] - 72.1, position[1], position[2] + 0.5]} rotation={[0, Math.PI/2 , 0]} />
    <Fence2 position={[position[0] - 72.1, position[1], position[2] - 2.5]} rotation={[0, Math.PI/2 , 0]} />
    <Fence2 position={[position[0] - 72.1, position[1], position[2] - 5.5]} rotation={[0, Math.PI/2 , 0]} />
    <Fence2 position={[position[0] - 72.1, position[1], position[2] - 8.5]} rotation={[0, Math.PI/2 , 0]} />
    <Fence2 position={[position[0] - 72.1, position[1], position[2] - 11.5]} rotation={[0, Math.PI/2 , 0]} />
    <Fence2 position={[position[0] - 72.1, position[1], position[2] - 14.5]} rotation={[0, Math.PI/2 , 0]} />
    <Fence2 position={[position[0] - 72.1, position[1], position[2] - 17.5]} rotation={[0, Math.PI/2 , 0]} />
    <Fence2 position={[position[0] - 72.1, position[1], position[2] - 20.5]} rotation={[0, Math.PI/2 , 0]} />
    <Fence2 position={[position[0] - 72.1, position[1], position[2] - 23.5]} rotation={[0, Math.PI/2 , 0]} />
    <Fence2 position={[position[0] - 72.1, position[1], position[2] - 26.5]} rotation={[0, Math.PI/2 , 0]} />
    <Fence2 position={[position[0] - 72.1, position[1], position[2] - 29.5]} rotation={[0, Math.PI/2 , 0]} />
    <Fence2 position={[position[0] - 72.1, position[1], position[2] - 32.5]} rotation={[0, Math.PI/2 , 0]} />

    <Fence2 position={[position[0] + 5.15, position[1], position[2] + 9]} rotation={[0, 0, 0]} />
    <Fence2 position={[position[0] + 8.6, position[1], position[2] + 9]} rotation={[0, 0, 0]} />
    <Fence2 position={[position[0] + 12.1, position[1], position[2] + 9]} rotation={[0, 0, 0]} />

    <Fence2 position={[position[0] + 12.5, position[1], position[2] + 7]} rotation={[0, Math.PI / 2, 0]} />
    <Fence2 position={[position[0] + 12.5, position[1], position[2] + 3]} rotation={[0, Math.PI / 2, 0]} />
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

    <StoneWall position={[position[0] - 30, position[1]- 22.5, position[2] + 5]} rotation={[0, 0, 0]} />
    <StoneWall position={[position[0] - 30, position[1]- 22.5, position[2] + 65]} rotation={[0, 0, 0]} />

    </group>
    );
}