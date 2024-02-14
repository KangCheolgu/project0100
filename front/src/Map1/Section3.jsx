import { Bench, Hydrant } from "../components/resort/Objects1.jsx";
import { TownCenter } from "../components/TownCenter.jsx";
import { Palm_1, Palm_2, Palm_3, Palm_4, Palm_5 } from "../components/resort/Trees1.jsx";
import {Grass, Road_1,Road_4, Road_3,Sidewalk_2, Sidewalk, Sidewalk_half, Road_half_3, Sidewalk_corner_3,Sidewalk_corner_7, Border_1, Border_2, Border_3, Border_4, Border_4_1} from "../components/resort/Roads";
import ColliderBox from "../ColliderBox.jsx";
import { IceCreamCart, CarGreen, CarRed } from "../components/resort/Vehicles1.jsx";
import { Cone, Hatch, Lighter, Mailbox, TrashCan, TrashBag } from "../components/resort/Objects1.jsx";

export default function Section3(props){
    const position = props.position
    return(<group castShadow receiveShadow >
        <TownCenter position={[position[0]+51, position[1]+0, position[2]-15]} scale={3}/>
        <Bench position={[position[0]+48, position[1]+0, position[2]-10]} rotation={[0, Math.PI*3/4, 0]}/>
        <Bench position={[position[0]+54, position[1]+0, position[2]-10]} rotation={[0, -Math.PI*3/4, 0]}/>
        <Bench position={[position[0]+51, position[1]+0, position[2]-9]} rotation={[0, Math.PI, 0]}/>
        <Bench position={[position[0]+48, position[1]+0, position[2]-20]} rotation={[0, Math.PI/4, 0]}/>
        <Bench position={[position[0]+54, position[1]+0, position[2]-20]} rotation={[0, -Math.PI/4, 0]}/>
        <Bench position={[position[0]+51, position[1]+0, position[2]-21]} rotation={[0, 0, 0]}/>
        
        <Palm_2 position={[position[0]+47, position[1]+0, position[2]-21]}/>
        <Palm_3 position={[position[0]+47, position[1]+0, position[2]-15]}/>
        <Palm_4 position={[position[0]+47, position[1]+0, position[2]-9]}/>
        <Palm_5 position={[position[0]+56, position[1]+0, position[2]-21]}/>
        <Palm_2 position={[position[0]+56, position[1]+0, position[2]-15]}/>
        <Palm_5 position={[position[0]+56, position[1]+0, position[2]-9]}/>

        {/*Section3 연석 */}
        <Border_1 position={[position[0]+48, position[1]-0.04, position[2]-6]} rotation={[0, -Math.PI/4, 0]} scale={[1.45, 1, 1]} />
        <Border_1 position={[position[0]+54, position[1]-0.04, position[2]-6]} rotation={[0, Math.PI/4, 0]} scale={[1.4, 1, 1]} />
        <Border_1 position={[position[0]+48, position[1]-0.04, position[2]-24]} rotation={[0, Math.PI/4, 0]} scale={[1.4, 1, 1]} />
        <Border_1 position={[position[0]+54, position[1]-0.04, position[2]-24]} rotation={[0, -Math.PI/4, 0]} scale={[1.45, 1, 1]} />
        <Border_1 position={[position[0]+45, position[1]-0.04, position[2]-12]} rotation={[0, Math.PI/2, 0]} />
        <Border_1 position={[position[0]+45, position[1]-0.04, position[2]-18]} rotation={[0, Math.PI/2, 0]} />
        <Border_1 position={[position[0]+57, position[1]-0.04, position[2]-12]} rotation={[0, Math.PI/2, 0]} />
        <Border_1 position={[position[0]+57, position[1]-0.04, position[2]-18]} rotation={[0, Math.PI/2, 0]} />

        <ColliderBox scale={[8.5, 0.1, 8.5]} rotation={[0, Math.PI/4, 0]} position={[position[0]+51, position[1]+0.05, position[2]-21]}/>
        <ColliderBox scale={[8.5, 0.1, 8.5]} rotation={[0, Math.PI/4, 0]} position={[position[0]+51, position[1]+0.05, position[2]-9]}/>

        <Grass position={[position[0]+48, position[1]-0.05, position[2]-24]}/>
        <Grass position={[position[0]+48, position[1]-0.05, position[2]-18]}/>
        <Grass position={[position[0]+48, position[1]-0.05, position[2]-12]}/>
        <Grass position={[position[0]+48, position[1]-0.05, position[2]-6]}/>
        <Grass position={[position[0]+54, position[1]-0.05, position[2]-24]}/>
        <Grass position={[position[0]+54, position[1]-0.05, position[2]-18]}/>
        <Grass position={[position[0]+54, position[1]-0.05, position[2]-12]}/>
        <Grass position={[position[0]+54, position[1]-0.05, position[2]-6]}/>

        <Road_half_3 position={[position[0]+48, position[1]+0, position[2]-24]} rotation={[0, -Math.PI/2, 0]}/>
        <Road_half_3 position={[position[0]+54, position[1]+0, position[2]-24]} rotation={[0, Math.PI, 0]}/>
        <Road_half_3 position={[position[0]+48, position[1]+0, position[2]-6]} rotation={[0, 0, 0]}/>
        <Road_half_3 position={[position[0]+54, position[1]+0, position[2]-6]} rotation={[0, Math.PI/2, 0]}/>

        <IceCreamCart position={[position[0]+49, position[1] , position[2]-5]} rotation={[0, -Math.PI / 4, 0]}/>
        <CarGreen position={[position[0] + 50, position[1] - 0.09, position[2] - 33]} rotation={[Math.PI / 36, -Math.PI / 2, 0]} />
        <CarRed position={[position[0] + 55, position[1] - 0.09, position[2] - 33]} rotation={[Math.PI / 36, -Math.PI / 2, 0]} />
        <CarGreen position={[position[0] + 38.9, position[1] - 0.09, position[2] - 10]} rotation={[0, Math.PI, Math.PI / 36]} />

        <Cone position={[position[0] +38.5, position[1], position[2] - 32.5]} rotation={[0, -Math.PI / 4, 0]}/>
        <Cone position={[position[0] +36.8, position[1] , position[2] - 31]} rotation={[0, -Math.PI / 4, 0]}/>
        <Cone position={[position[0] +40.2, position[1] , position[2] - 31]} rotation={[0, -Math.PI / 4, 0]}/>
        <Cone position={[position[0] +38.5, position[1] , position[2] - 29.5]} rotation={[0, -Math.PI / 4, 0]}/>
        <Hatch position={[position[0] +38.5, position[1], position[2] - 31]} rotation={[0, -Math.PI / 4, 0]}/>
        
        <Cone position={[position[0] +38.5, position[1], position[2] - 1.5]} rotation={[0, -Math.PI / 4, 0]}/>
        <Cone position={[position[0] +36.8, position[1] , position[2] ]} rotation={[0, -Math.PI / 4, 0]}/>
        <Cone position={[position[0] +40.2, position[1] , position[2] ]} rotation={[0, -Math.PI / 4, 0]}/>
        <Cone position={[position[0] +38.5, position[1] , position[2] + 1.95]} rotation={[0, -Math.PI / 4, 0]}/>
        <Hatch position={[position[0] +38.5, position[1], position[2] ]} rotation={[0, -Math.PI / 4, 0]}/>

        <Lighter position={[position[0] + 14, position[1] - 0.09, position[2] - 5]} />
        <Lighter position={[position[0] + 14, position[1] - 0.09, position[2] - 15]} />
        <Lighter position={[position[0] + 14, position[1] - 0.09, position[2] - 25]} />
        <Lighter position={[position[0] + 14, position[1] - 0.09, position[2] - 35]} />

        <Lighter position={[position[0] + 22, position[1] - 0.09, position[2] - 5]} />
        <Lighter position={[position[0] + 22, position[1] - 0.09, position[2] - 15]} />
        <Lighter position={[position[0] + 22, position[1] - 0.09, position[2] - 25]} />

        <Lighter position={[position[0] + 38, position[1] - 0.09, position[2] - 5]} />
        <Lighter position={[position[0] + 38, position[1] - 0.09, position[2] - 15]} />
        <Lighter position={[position[0] + 38, position[1] - 0.09, position[2] - 25]} />

        <Lighter position={[position[0] + 64, position[1] - 0.09, position[2] - 5]} />
        <Lighter position={[position[0] + 64, position[1] - 0.09, position[2] - 25]} />

        <Lighter position={[position[0] + 74, position[1] - 0.09, position[2] - 5]} />
        <Lighter position={[position[0] + 74, position[1] - 0.09, position[2] - 25]} />

        <Lighter position={[position[0] + 82, position[1] - 0.09, position[2] - 5]} />
        <Lighter position={[position[0] + 82, position[1] - 0.09, position[2] - 15]} />
        <Lighter position={[position[0] + 82, position[1] - 0.09, position[2] - 25]} />
        <Lighter position={[position[0] + 82, position[1] - 0.09, position[2] - 30]} />

        <Mailbox position={[position[0] + 74, position[1] - 0.09, position[2] - 7]} rotation={[0, Math.PI/2,0]} />
        <TrashCan position={[position[0] + 35, position[1] - 0.04, position[2] - 8]} rotation={[0, Math.PI/2,0]} />
        <TrashBag position={[position[0] + 35.1, position[1] - 0.04, position[2] - 18.3]} rotation={[0, Math.PI/2,0]} />
        <TrashBag position={[position[0] + 34.8, position[1] - 0.04, position[2] - 18.8]} rotation={[0, -Math.PI/2,0]} />

        <Hydrant position={[position[0] + 63.7, position[1] - 0.04, position[2] - 6.3]} />
        <Hydrant position={[position[0] + 37.9, position[1] - 0.04, position[2] - 6.3]} />

    </group>
    );
}