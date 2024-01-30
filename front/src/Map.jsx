import XBasicAlley8 from "./components/Map/XBasicAlley8.jsx"
import YBasicAlley8 from "./components/Map/YBasicAlley8.jsx"
import ColliderWall from "./ColliderWall"
import {C_Wall,C_Floor3, C_Floor2} from './components/Ruins/C_Ruin.jsx'
import {YellowWall} from './components/Map/YellowWall.jsx'

export default function Map(props){
    const generateXBasicAlley8 = (startX, endX, offsetY) => {
        const alleys = [];
        for (let x = startX; x <= endX; x += 4) {
          alleys.push(<XBasicAlley8 key={`alley-${x}`} position={[x, 0, offsetY]} />);
        }
        return alleys;
      };
    
      const generateCFloor2 = (startX, endX, offsetY) => {
        const floors = [];
        for (let x = startX; x <= endX; x += 2) {
          floors.push(<C_Floor2 key={`floor-${x}`} position={[x, 0, offsetY]} />);
        }
        return floors;
      };
    
      const generateWallsX = (startX, endX, offsetY) => {
        const wallsX = [];
        for (let x = startX; x <= endX; x += 2) {
          wallsX.push(<C_Wall key={`wall-${x}`} position={[x, 0, offsetY]} />);
        }
        return wallsX;
      };
      
      {/*const generateWallsZ = (startY, endY, offsetX) => {
        const wallsX = [];
        for (let z = startY; z <= endY; z += 2) {
          wallsX.push(<C_Wall key={`wall-${z}`} position={[z, 0, offsetX]} />);
        }
        return wallsX;
      };*/}
    
    return(<group {...props}>
        
        {/* Alley1 */}
        {/* Alley1 */}
        {/*generateXBasicAlley8(0, 8, 0)*/}
        <XBasicAlley8 position = {[0, 0, 0]}/>
        
        {/*<C_Wall position={[12, 0, 1]}/>
        <C_Wall position={[14, 0, 0]} rotation={[0, Math.PI/4, 0]} scale={[2, 0, 0]}/>
    <C_Wall position={[15, 0, -2]} rotation={[0, -Math.PI/2, 0]}/>
        <C_Floor3 position={[12, 0, 0]}/>
        <C_Floor3 position={[12, 0, -2]}/>
        <C_Floor3 position={[14, 0, 0]}/>
        <C_Floor3 position={[14, 0, -2]}/>
    <YBasicAlley8 position={[12, 0, -4]}/>*/}
        
        {generateCFloor2(0, 26, -8)}
        {generateCFloor2(0, 26, -10)}
        {generateCFloor2(0, 26, -12)}
        {generateCFloor2(0, 26, -14)}
        {generateCFloor2(0, 26, -16)}
        {generateCFloor2(0, 26, -18)}
        {generateCFloor2(0, 26, -20)}
        {generateCFloor2(0, 26, -22)}
        {generateCFloor2(0, 26, -24)}
        {generateCFloor2(0, 26, -26)}
        {generateCFloor2(0, 26, -28)}
        {generateCFloor2(0, 26, -30)}
        {generateCFloor2(0, 26, -32)}
        {generateCFloor2(0, 26, -34)}
        {generateCFloor2(0, 26, -36)}

        {generateWallsX(0, 10, -7)}
        {generateWallsX(16, 26, -7)}
        
        <YellowWall position={[0, 0, -37]}/>
    </group>
    );
}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     