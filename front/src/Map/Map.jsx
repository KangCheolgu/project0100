import ColliderWall from './ColliderWall.jsx'
import { Wall, Floor3, BrickDoor } from '../components/Ruins/Ruin.jsx';
import { Torch, Torch2 } from '../components/Object/Torch.jsx';

export default function Map(props){
    
    return(<group {...props}>
        {/* z좌표 -는 왼쪽, +는 오른쪽 */}

        {/* 오른쪽 벽 */}
        <Wall position= {[0, 0, 1]}/>
        <Wall position= {[2, 0, 1]}/>
        <Wall position= {[4, 0, 1]}/>
        <Wall position= {[6, 0, 1]}/>
        <Wall position= {[8, 0, 1]}/>
        <Wall position= {[10, 0, 1]}/>
        <Wall position= {[12, 0, 1]}/>
        <Wall position= {[14, 0, 1]}/>

        {/* 왼쪽 벽 */}
        <Wall position= {[0, 0, -3]}/>
        <Wall position= {[2, 0, -3]}/>
        <Wall position= {[4, 0, -3]}/>
        <Wall position= {[6, 0, -3]}/>
        <Wall position= {[8, 0, -3]}/>
        <Wall position= {[10, 0, -3]}/>
        <Wall position= {[12, 0, -3]}/>
        <Wall position= {[14, 0, -3]}/>


        {/* 오른쪽 바닥 */}
        <Floor3 position={[0, 0, 0]}/>
        <Floor3 position={[2, 0, 0]}/>
        <Floor3 position={[4, 0, 0]}/>
        <Floor3 position={[6, 0, 0]}/>
        <Floor3 position={[8, 0, 0]}/>
        <Floor3 position={[10, 0, 0]}/>
        <Floor3 position={[12, 0, 0]}/>
        <Floor3 position={[14, 0, 0]}/>


        {/* 왼쪽 바닥 */}
        <Floor3 position={[0, 0, -2]}/>
        <Floor3 position={[2, 0, -2]}/>
        <Floor3 position={[4, 0, -2]}/>
        <Floor3 position={[6, 0, -2]}/>
        <Floor3 position={[8, 0, -2]}/>
        <Floor3 position={[10, 0, -2]}/>
        <Floor3 position={[12, 0, -2]}/>
        <Floor3 position={[14, 0, -2]}/>


        <BrickDoor position={[-2, 0, 0]}/>

        <Torch position={[1, 1.5, -2.7]}/>
        <Torch position={[5, 1.5, -2.7]}/>
        <Torch position={[9, 1.5, -2.7]}/>
        <Torch position={[13, 1.5, -2.7]}/>

        <Torch2 position={[1, 1.5, 0.5]}/>
        <Torch2 position={[5, 1.5, 0.5]}/>
        <Torch2 position={[9, 1.5, 0.5]}/>
        <Torch2 position={[13, 1.5, 0.5]}/>
    </group>
    );
}