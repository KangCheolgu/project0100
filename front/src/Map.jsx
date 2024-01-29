import BasicAlley from "./components/Map/BasicAlley"
import ColliderWall from "./ColliderWall"
import {Wall,Floor3} from './components/Ruins/Ruin.jsx'

export default function Map(props){
    
    return(<group {...props}>
        <Wall position= {[0, 0, 1]}/>
        <Wall position= {[2, 0, 1]}/>
        <Wall position= {[2, 0, -3]}/>
        <Wall position= {[0, 0, -3]}/>
        <Floor3 position={[0, 0, 0]}/>
        <Floor3 position={[2, 0, 0]}/>
        <Floor3 position={[0, 0, -2]}/>
        <Floor3 position={[2, 0, -2]}/>
    </group>
    );
}