import XBasicAlley4 from "./components/Map/XBasicAlley4.jsx"
import YBasicAlley4 from "./components/Map/YBasicAlley4.jsx"
import ColliderWall from "./ColliderWall.jsx"
import {C_Wall,C_Floor3, C_Floor2} from './components/Ruins/C_Ruin.jsx'
import {YellowWall} from './components/Map/YellowWall.jsx'

export default function Map(props){
  const leftZoffset = Math.PI/2
  const rightZoffset = -Math.PI/2

  const position = props.position

    const generateXBasicAlley8 = (startX, endX, offsetY) => {
        const alleys = [];
        for (let x = startX; x <= endX; x += 4) {
          alleys.push(<XBasicAlley4 key={`alley-${x}`} position={[x, 0, offsetY]} />);
        }
        return alleys;
      };
    
      const generateCFloor2 = (startX, endX, offsetY) => {
        const floors = [];
        for (let x = startX; x <= endX; x += 4) {
          floors.push(<C_Floor2 key={`floor-${x}`} position={[x, 0, offsetY]} />);
        }
        return floors;
      };
    
      const generateWallsX = (startX, endX, offsetY) => {
        const wallsX = [];
        for (let x = startX; x <= endX; x += 4) {
          wallsX.push(<C_Wall key={`wall-${x}`} position={[x, 0, offsetY]} />);
        }
        return wallsX;
      };
      
      const generateWallsZ = (startZ, endZ, offsetX, offset) => {
        const wallsZ = [];
        for (let z = startZ; z <= endZ; z += 4) {
          wallsZ.push(<C_Wall key={`wall-${z}`} position={[offsetX, 0, z]} rotation={[0, offset, 0]} />);
        }
        return wallsZ ;
      };
    
    return(<group {...props}>
        
      {/* Alley1 */}
      {generateXBasicAlley8(0, 8, 0)}


      <C_Wall position={[12, 0, 1]}/>
      {/*<C_Wall position={[14, 0, 0]} rotation={[0, Math.PI/4, 0]} scale={[2, 0, 0]}/>*/}
      <C_Wall position={[14, 0, -1.5]} rotation={[0, -Math.PI/2, 0]}/>
      <C_Floor3 position={[12, 0, 0]}/>

      <YBasicAlley4 position={[12, 0, -4]}/>
        
      {generateCFloor2(0, 26, -8)}
      {generateCFloor2(0, 26, -12)}
      {generateCFloor2(0, 26, -16)}
      {generateCFloor2(0, 26, -20)}
      {generateCFloor2(0, 26, -24)}
      {generateCFloor2(0, 26, -28)}
      {generateCFloor2(0, 26, -32)}
      {generateCFloor2(0, 26, -36)}

      {generateWallsX(0, 10, -7)}
      {generateWallsX(16, 26, -7)}

      {generateWallsX(0, 10, -39)}
      {generateWallsX(16, 26, -39)}
        
      {/* generateWallsZ */ }
      {generateWallsZ(-37, -9, -2, leftZoffset)}
      {generateWallsZ(-37, -9, 26, rightZoffset)}

      {/*Alley2*/}
      <YBasicAlley4 position={[12, 0, -40]}/>
      <YBasicAlley4 position={[12, 0, -44]}/>

      <C_Wall position={[12, 0, -51.5]}/>
      {/*<C_Wall position={[14, 0, 0]} rotation={[0, Math.PI/4, 0]} scale={[2, 0, 0]}/>*/}
      <C_Wall position={[13.5, 0, -49.5]} rotation={[0, -Math.PI/2, 0]}/>
      <C_Floor3 position={[12, 0, -48]}/>

      <C_Wall position={[8, 0, -47.5]}/>
      {/*<C_Wall position={[14, 0, 0]} rotation={[0, Math.PI/4, 0]} scale={[2, 0, 0]}/>*/}
      <C_Wall position={[5.8, 0, -49.5]} rotation={[0, -Math.PI/2, 0]}/>
      <C_Floor3 position={[8, 0, -48]}/>

      <YBasicAlley4 position={[8, 0, -52]}/>

      {/* Art Room */}
      {generateCFloor2(0, 16, -56)}
      {generateCFloor2(0, 16, -60)}
      {generateCFloor2(0, 16, -64)}
      {generateCFloor2(0, 16, -68)}
      {generateCFloor2(0, 16, -72)}
      {generateCFloor2(0, 16, -76)}
      {generateCFloor2(0, 16, -80)}

      {generateWallsX(0, 4, -55)}
      {generateWallsX(12, 16, -55)}

      {generateWallsX(0, 16, -83)}      

      {/* generateWallZ */}
      {generateWallsZ(-81, -57, -2, leftZoffset)}
      {generateWallsZ(-81, -78, 18, rightZoffset)}
      {generateWallsZ(-73, -57, 18, rightZoffset)}

      {/* Alley3 */}
      {generateXBasicAlley8(20, 24, -76)}
      
      {/* library */}
      {generateCFloor2(28, 36, -80)}
      {generateCFloor2(28, 36, -76)}
      {generateCFloor2(28, 36, -72)}
      {generateCFloor2(28, 36, -68)}
      {generateCFloor2(28, 36, -64)}
      {generateCFloor2(28, 36, -60)}
      {generateCFloor2(28, 36, -56)}

      {generateWallsZ(-82, -79, 26, leftZoffset)}
      {generateWallsZ(-74, -58, 26, leftZoffset)}
      {generateWallsZ(-82, -62, 38, rightZoffset)}

      {generateWallsX(28, 36, -83.5)}
      
      {/* Alley 4*/}
      

      <C_Wall position={[40, 0, -59.5]}/>
      {/*<C_Wall position={[14, 0, 0]} rotation={[0, Math.PI/4, 0]} scale={[2, 0, 0]}/>*/}
      <C_Wall position={[42, 0, -57.5]} rotation={[0, -Math.PI/2, 0]}/>
      <C_Floor3 position={[40, 0, -56]}/>

      <C_Wall position={[40, 0, -51.5]}/>
      {/*<C_Wall position={[14, 0, 0]} rotation={[0, Math.PI/4, 0]} scale={[2, 0, 0]}/>*/}
      <C_Wall position={[42, 0, -53.5]} rotation={[0, -Math.PI/2, 0]}/>
      <C_Floor3 position={[40, 0, -52]}/>
      
      {generateXBasicAlley8(24, 38, -52)}

      <C_Wall position={[20, 0, -55.5]}/>
      {/*<C_Wall position={[14, 0, 0]} rotation={[0, Math.PI/4, 0]} scale={[2, 0, 0]}/>*/}
      <C_Wall position={[17.5, 0, -53.5]} rotation={[0, -Math.PI/2, 0]}/>
      <C_Floor3 position={[20, 0, -52]}/>

      <YBasicAlley4 position={[20, 0, -48]}/>
      <YBasicAlley4 position={[20, 0, -44]}/>

      <C_Wall position={[20, 0, -55.5]}/>
      {/*<C_Wall position={[14, 0, 0]} rotation={[0, Math.PI/4, 0]} scale={[2, 0, 0]}/>*/}
      <C_Wall position={[17.5, 0, -53.5]} rotation={[0, -Math.PI/2, 0]}/>
      <C_Floor3 position={[20, 0, -52]}/>

      <C_Wall position={[20, 0, -39]}/>
      {/*<C_Wall position={[14, 0, 0]} rotation={[0, Math.PI/4, 0]} scale={[2, 0, 0]}/>*/}
      <C_Wall position={[17.5, 0, -41.5]} rotation={[0, -Math.PI/2, 0]}/>
      <C_Floor3 position={[20, 0, -40]}/>

      {generateXBasicAlley8(24, 32, -40)}
      
      <C_Wall position={[36, 0, -43.5]}/>
      {/*<C_Wall position={[14, 0, 0]} rotation={[0, Math.PI/4, 0]} scale={[2, 0, 0]}/>*/}
      <C_Wall position={[38, 0, -41.5]} rotation={[0, -Math.PI/2, 0]}/>
      <C_Floor3 position={[36, 0, -40]}/>

      <YBasicAlley4 position={[36, 0, -36]}/>
      <YBasicAlley4 position={[36, 0, -32]}/>
      <YBasicAlley4 position={[36, 0, -28]}/>
      <YBasicAlley4 position={[36, 0, -24]}/>
      <YBasicAlley4 position={[36, 0, -20]}/>
      <YBasicAlley4 position={[36, 0, -16]}/>
      <YBasicAlley4 position={[36, 0, -12]}/>
      <YBasicAlley4 position={[36, 0, -8]}/>
      <YBasicAlley4 position={[36, 0, -4]}/>
      <YBasicAlley4 position={[36, 0, 0]}/>


    </group>
    );
}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     