import ColliderWall from './ColliderWall.jsx'
import { Wall, Wall2, Floor3, Floor4, Floor5, Floor6, Floor7, BrickDoor } from '../components/Ruins/Castle.Ruin.jsx';
import { Torch, Torch2 } from './Object/Torch.jsx';
import { Sign } from './Object/Sign.jsx';
import { RedCarpet } from './Object/RedCarpet.jsx';

export default function Map(props){
    
    return(<group {...props}>
        {/* z좌표 -는 왼쪽, +는 오른쪽 */}

        {/* 오른쪽 세로벽 */}
        <Wall position= {[0, 0, 1]}/>
        <Wall position= {[4, 0, 1]}/>
        <Wall position= {[8, 0, 1]}/>
        <Wall position= {[12, 0, 1]}/>
        <Wall position= {[16, 0, 1]}/>

        <Wall position= {[8, 0, 9]}/>

        <Wall position= {[0, 0, 9]}/>

        <Wall position= {[20, 0, 13]}/>
        <Wall position= {[24, 0, 17]}/>
        <Wall position= {[28, 0, 17]}/>
        <Wall position= {[32, 0, 17]}/>
        <Wall position= {[36, 0, 13]}/>

        <Wall position= {[40, 0, 1]}/>
        <Wall position= {[44, 0, 1]}/>
        <Wall position= {[48, 0, 13]}/>
        <Wall position= {[52, 0, 13]}/>
        <Wall position= {[56, 0, 13]}/>

        <Wall position= {[56, 0, 17]}/>
        <Wall position= {[52, 0, 17]}/>
        <Wall position= {[48, 0, 17]}/>
        <Wall position= {[44, 0, 17]}/>
        <Wall position= {[40, 0, 17]}/>
        <Wall position= {[36, 0, 17]}/>
        <Wall position= {[32, 0, 17]}/>

        <Wall position= {[60, 0, 33]}/>

        <Wall position= {[56, 0, 41]}/>
        <Wall position= {[52, 0, 41]}/>
        <Wall position= {[48, 0, 41]}/>
        <Wall position= {[44, 0, 41]}/>
        <Wall position= {[40, 0, 41]}/>
        <Wall position= {[36, 0, 41]}/>
        <Wall position= {[32, 0, 41]}/>
        <Wall position= {[28, 0, 41]}/>
        <Wall position= {[24, 0, 41]}/>
        <Wall position= {[20, 0, 41]}/>
        <Wall position= {[16, 0, 41]}/>
        <Wall position= {[12, 0, 41]}/>
        <Wall position= {[8, 0, 41]}/>
        <Wall position= {[0, 0, 41]}/>


        {/* 왼쪽 세로벽 */}
        <Wall position= {[0, 0, -2.8]}/>
        <Wall position= {[4, 0, -2.8]}/>
        <Wall position= {[8, 0, -2.8]}/>
        <Wall position= {[12, 0, -2.8]}/>
        <Wall position= {[16, 0, -2.8]}/>
        <Wall position= {[20, 0, -2.8]}/>

        <Wall position= {[24, 0, 5]}/>
        <Wall position= {[28, 0, 5]}/>
        <Wall position= {[32, 0, 5]}/>

        <Wall position= {[36, 0, -2.8]}/>
        <Wall position= {[40, 0, -2.8]}/>
        <Wall position= {[44, 0, -2.8]}/>
        <Wall position= {[48, 0, -2.8]}/>
        <Wall position= {[52, 0, -2.8]}/>
        <Wall position= {[56, 0, -2.8]}/>
        <Wall position= {[60, 0, -2.8]}/>
        

        {/* 가로벽 */}
        <Wall2 position= {[18.2, 0, 3]}/>
        <Wall2 position= {[18.2, 0, 7]}/>
        <Wall2 position= {[18.2, 0, 11]}/>

        <Wall2 position= {[34.2, 0, 15]}/>
        <Wall2 position= {[34.2, 0, 7]}/>
        <Wall2 position= {[34.2, 0, 3]}/>
        <Wall2 position= {[34.2, 0, -1]}/>

        <Wall2 position= {[46.2, 0, 3]}/>
        <Wall2 position= {[46.2, 0, 7]}/>
        <Wall2 position= {[46.2, 0, 11]}/>
        <Wall2 position= {[58.2, 0, 15]}/>
        <Wall2 position= {[58.2, 0, 19]}/>
        <Wall2 position= {[58.2, 0, 23]}/>
        <Wall2 position= {[58.2, 0, 35]}/>
        <Wall2 position= {[58.2, 0, 39]}/>

        <Wall2 position= {[22, 0, -1]}/>
        <Wall2 position= {[22, 0, 3]}/>
        <Wall2 position= {[22, 0, 7]}/>
        <Wall2 position= {[22, 0, 15]}/>

        <Wall2 position= {[38, 0, 11]}/>
        <Wall2 position= {[38, 0, 7]}/>
        <Wall2 position= {[38, 0, 3]}/>

        <Wall2 position= {[62, 0, -1]}/>
        <Wall2 position= {[62, 0, 3]}/>
        <Wall2 position= {[62, 0, 7]}/>
        <Wall2 position= {[62, 0, 11]}/>
        <Wall2 position= {[62, 0, 15]}/>
        <Wall2 position= {[62, 0, 19]}/>
        <Wall2 position= {[62, 0, 23]}/>
        <Wall2 position= {[62, 0, 27]}/>
        <Wall2 position= {[62, 0, 31]}/>

        <Wall2 position= {[10, 0, 39]}/>
        <Wall2 position= {[10, 0, 35]}/>
        <Wall2 position= {[10, 0, 31]}/>
        <Wall2 position= {[10, 0, 27]}/>
        <Wall2 position= {[10, 0, 23]}/>
        <Wall2 position= {[10, 0, 19]}/>
        <Wall2 position= {[10, 0, 15]}/>
        <Wall2 position= {[10, 0, 11]}/>
        <Wall2 position= {[6, 0, 7]}/>

        <Wall2 position= {[2, 0, 3]}/>
        <Wall2 position= {[2, 0, 7]}/>

        <Wall2 position= {[-2, 0, 39]}/>
        <Wall2 position= {[-2, 0, 35]}/>
        <Wall2 position= {[-2, 0, 31]}/>
        <Wall2 position= {[-2, 0, 27]}/>
        <Wall2 position= {[-2, 0, 23]}/>
        <Wall2 position= {[-2, 0, 19]}/>
        <Wall2 position= {[-2, 0, 15]}/>
        <Wall2 position= {[-2, 0, 11]}/>
        

        {/* 바닥 */}
        <Floor3 position={[0, 0, -1]}/>
        <Floor3 position={[4, 0, -1]}/>
        <Floor3 position={[8, 0, -1]}/>
        <Floor3 position={[12, 0, -1]}/>
        <Floor3 position={[16, 0, -1]}/>
        <Floor3 position={[20, 0, -1]}/>

        <Floor3 position={[20, 0, 3]}/>
        <Floor3 position={[20, 0, 7]}/>
        <Floor3 position={[20, 0, 11]}/>
        <Floor3 position={[24, 0, 7]}/>
        <Floor3 position={[24, 0, 11]}/>
        <Floor3 position={[24, 0, 15]}/>
        <Floor3 position={[28, 0, 7]}/>
        <Floor3 position={[28, 0, 11]}/>
        <Floor3 position={[28, 0, 15]}/>
        <Floor3 position={[32, 0, 7]}/>
        <Floor3 position={[32, 0, 11]}/>
        <Floor3 position={[32, 0, 15]}/>
        <Floor3 position={[36, 0, 11]}/>

        <Floor3 position={[36, 0, 7]}/>
        <Floor3 position={[36, 0, 3]}/>
        <Floor3 position={[36, 0, -1]}/>
        
        <Floor3 position={[40, 0, -1]}/>
        <Floor3 position={[44, 0, -1]}/>
        <Floor3 position={[48, 0, -1]}/>
        <Floor3 position={[52, 0, -1]}/>
        <Floor3 position={[56, 0, -1]}/>
        <Floor3 position={[60, 0, -1]}/>

        <Floor3 position={[48, 0, 3]}/>
        <Floor3 position={[52, 0, 3]}/>
        <Floor3 position={[56, 0, 3]}/>
        <Floor3 position={[60, 0, 3]}/>

        <Floor3 position={[48, 0, 7]}/>
        <Floor3 position={[52, 0, 7]}/>
        <Floor3 position={[56, 0, 7]}/>
        <Floor3 position={[60, 0, 7]}/>

        <Floor3 position={[48, 0, 11]}/>
        <Floor3 position={[52, 0, 11]}/>
        <Floor3 position={[56, 0, 11]}/>
        <Floor3 position={[60, 0, 11]}/>

        <Floor3 position={[60, 0, 15]}/>
        <Floor3 position={[60, 0, 19]}/>
        <Floor3 position={[60, 0, 23]}/>
        <Floor3 position={[60, 0, 27]}/>
        <Floor3 position={[60, 0, 31]}/>

        <Floor3 position={[20, 0, 15]}/>
        <Floor3 position={[16, 0, 15]}/>
        <Floor3 position={[16, 0, 11]}/>
        <Floor3 position={[16, 0, 7]}/>
        <Floor3 position={[16, 0, 3]}/>
        <Floor3 position={[12, 0, 15]}/>
        <Floor3 position={[12, 0, 11]}/>
        <Floor3 position={[12, 0, 7]}/>
        <Floor3 position={[12, 0, 3]}/>

        <Floor3 position={[8, 0, 3]}/>
        <Floor3 position={[8, 0, 7]}/>

        <Floor3 position={[4, 0, 3]}/>
        <Floor3 position={[4, 0, 7]}/>

        <Floor6 position={[4, 0, 25]}/>

        {/* <Floor7 position={[-2, 0, -2]}/> */}


        {/* 천장 */}
        <Floor4 position={[0, 4, -1]}/>
        <Floor4 position={[4, 4, -1]}/>
        <Floor4 position={[8, 4, -1]}/>
        <Floor4 position={[12, 4, -1]}/>
        <Floor4 position={[16, 4, -1]}/>
        <Floor4 position={[20, 4, -1]}/>

        <Floor4 position={[20, 4, 3]}/>
        <Floor4 position={[20, 4, 7]}/>
        <Floor4 position={[20, 4, 11]}/>
        <Floor4 position={[24, 4, 7]}/>
        <Floor4 position={[24, 4, 11]}/>
        <Floor4 position={[24, 4, 15]}/>
        <Floor4 position={[28, 4, 7]}/>
        <Floor4 position={[28, 4, 11]}/>
        <Floor4 position={[28, 4, 15]}/>
        <Floor4 position={[32, 4, 7]}/>
        <Floor4 position={[32, 4, 11]}/>
        <Floor4 position={[32, 4, 15]}/>
        <Floor4 position={[36, 4, 11]}/>

        <Floor4 position={[36, 4, 7]}/>
        <Floor4 position={[36, 4, 3]}/>
        <Floor4 position={[36, 4, -1]}/>
        
        <Floor4 position={[40, 4, -1]}/>
        <Floor4 position={[44, 4, -1]}/>
        <Floor4 position={[48, 4, -1]}/>
        <Floor4 position={[52, 4, -1]}/>
        <Floor4 position={[56, 4, -1]}/>
        <Floor4 position={[60, 4, -1]}/>

        <Floor4 position={[48, 4, 3]}/>
        <Floor4 position={[52, 4, 3]}/>
        <Floor4 position={[56, 4, 3]}/>
        <Floor4 position={[60, 4, 3]}/>

        <Floor4 position={[48, 4, 7]}/>
        <Floor4 position={[52, 4, 7]}/>
        <Floor4 position={[56, 4, 7]}/>
        <Floor4 position={[60, 4, 7]}/>

        <Floor4 position={[48, 4, 11]}/>
        <Floor4 position={[52, 4, 11]}/>
        <Floor4 position={[56, 4, 11]}/>
        <Floor4 position={[60, 4, 11]}/>

        <Floor4 position={[60, 4, 15]}/>
        <Floor4 position={[60, 4, 19]}/>
        <Floor4 position={[60, 4, 23]}/>
        <Floor4 position={[60, 4, 27]}/>
        <Floor4 position={[60, 4, 31]}/>
    

        <Floor5 position={[34, 0, 29]} />

        {/* <Floor7 position={[0, 1, 0]} /> */}

        {/* 오브젝트 */}
        <BrickDoor position={[-2, 0, -1]}/>

        <Sign position={[21.45, 1.5, -1.3]}/>

        <RedCarpet position={[38, -0.01, 29]} />

        {/* <Torch position={[1, 2, -2.7]}/>
        <Torch position={[9, 2, -2.7]}/>
        <Torch position={[17, 2, -2.7]}/>

        <Torch2 position={[1, 2, 0.5]}/>
        <Torch2 position={[9, 2, 0.5]}/>
        <Torch2 position={[17, 2, 0.5]}/> */}

    </group>
    );
}