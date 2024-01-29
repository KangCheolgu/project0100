import {Wall,Floor3} from '../Ruins/Ruin.jsx'

export default function BasicAlley(props){
    const position = props.position||[0, 0, 0];
    return(<group {...props}>
        
        <Wall position= {[position[0], position[1], position[2]+1]}/>
        <Wall position= {[position[0]+2, position[1], position[2]+1]}/>
        <Wall position= {[position[0]+2, position[1], position[2]-3]}/>
        <Wall position= {[position[0], position[1], position[2]-3]}/>
        <Floor3 position={[position[0], position[1], position[2]]}/>
        <Floor3 position={[position[0]+2, position[1], position[2]]}/>
        <Floor3 position={[position[0], position[1], position[2]-2]}/>
        <Floor3 position={[position[0]+2, position[1], position[2]-2]}/>
    </group>
    );
}