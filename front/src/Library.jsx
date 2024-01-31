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
    return(<group>
        
      {/* Alley1 */}
      {generateXBasicAlley8(position[0]+0, position[0]+8, position[2])}


      <C_Wall position={[position[0]+12, position[1]+0, position[2]+1]}/>
      {/*<C_Wall position={[14, 0, 0]} rotation={[0, Math.PI/4, 0]} scale={[2, 0, 0]}/>*/}
      <C_Wall position={[position[0]+14, position[1]+0, position[2]+-1.5]} rotation={[0, -Math.PI/2, 0]}/>
      <C_Floor3 position={[position[0]+12, position[1], position[2]]}/>

      <YBasicAlley4 position={[position[0]+12, position[1]+0, position[2]-4]}/>
        
      {generateCFloor2(position[0]+0, position[0]+26, position[2]-8)}
      {generateCFloor2(position[0]+0, position[0]+26, position[2]-12)}
      {generateCFloor2(position[0]+0, position[0]+26, position[2]-16)}
      {generateCFloor2(position[0]+0, position[0]+26, position[2]-20)}
      {generateCFloor2(position[0]+0, position[0]+26, position[2]-24)}
      {generateCFloor2(position[0]+0, position[0]+26, position[2]-28)}
      {generateCFloor2(position[0]+0, position[0]+26, position[2]-32)}
      {generateCFloor2(position[0]+0, position[0]+26, position[2]-36)}

      {generateWallsX(position[0]+0, position[0]+10, position[2]-7)}
      {generateWallsX(position[0]+16, position[0]+26, position[2]-7)}

      {generateWallsX(position[0]+0, position[0]+10, position[2]-39)}
      {generateWallsX(position[0]+16, position[0]+26, position[2]-39)}
        
      {/* generateWallsZ */ }
      {generateWallsZ(position[2]-37, position[2]-9, position[0]-2, leftZoffset)}
      {generateWallsZ(position[2]-37, position[2]-9, position[0]+26, rightZoffset)}

      {/*Alley2*/}
      <YBasicAlley4 position={[position[0]+12, position[1]+0, position[2]-40]}/>
      <YBasicAlley4 position={[position[0]+12, position[1]+0, position[2]-44]}/>

      <C_Wall position={[position[0]+12, position[1]+0, position[2]-51.5]}/>
      {/*<C_Wall position={[14, 0, 0]} rotation={[0, Math.PI/4, 0]} scale={[2, 0, 0]}/>*/}
      <C_Wall position={[position[0]+13.5, position[1]+0, position[2]-49.5]} rotation={[0, -Math.PI/2, 0]}/>
      <C_Floor3 position={[position[0]+12, position[1]+0, position[2]-48]}/>

      <C_Wall position={[position[0]+8, position[1]+0, position[2]-47.5]}/>
      {/*<C_Wall position={[14, 0, 0]} rotation={[0, Math.PI/4, 0]} scale={[2, 0, 0]}/>*/}
      <C_Wall position={[position[0]+5.8, position[1]+0, position[2]-49.5]} rotation={[0, -Math.PI/2, 0]}/>
      <C_Floor3 position={[position[0]+8, position[1]+0, position[2]-48]}/>

      <YBasicAlley4 position={[position[0]+8, position[1]+0, position[2]-52]}/>

      {/* Art Room */}
      {generateCFloor2(position[0]+0, position[0]+16, position[2]-56)}
      {generateCFloor2(position[0]+0, position[0]+16, position[2]-60)}
      {generateCFloor2(position[0]+0, position[0]+16, position[2]-64)}
      {generateCFloor2(position[0]+0, position[0]+16, position[2]-68)}
      {generateCFloor2(position[0]+0, position[0]+16, position[2]-72)}
      {generateCFloor2(position[0]+0, position[0]+16, position[2]-76)}
      {generateCFloor2(position[0]+0, position[0]+16, position[2]-80)}

      {generateWallsX(position[0]+0, position[0]+4, position[2]-55)}
      {generateWallsX(position[0]+12, position[0]+16, position[2]-55)}

      {generateWallsX(position[0]+0, position[0]+16, position[2]-83)}      

      {/* generateWallZ */}
      {generateWallsZ(position[2]-81, position[2]-57, position[0]-2, leftZoffset)}
      {generateWallsZ(position[2]-81, position[2]-78, position[0]+18, rightZoffset)}
      {generateWallsZ(position[2]-73, position[2]-57, position[0]+18, rightZoffset)}

      {/* Alley3 */}
      {generateXBasicAlley8(position[0]+20, position[0]+24, position[2]-76)}
      
      {/* library */}
      {generateCFloor2(position[0]+28, position[0]+36, position[2]-80)}
      {generateCFloor2(position[0]+28, position[0]+36, position[2]-76)}
      {generateCFloor2(position[0]+28, position[0]+36, position[2]-72)}
      {generateCFloor2(position[0]+28, position[0]+36, position[2]-68)}
      {generateCFloor2(position[0]+28, position[0]+36, position[2]-64)}
      {generateCFloor2(position[0]+28, position[0]+36, position[2]-60)}
      {generateCFloor2(position[0]+28, position[0]+36, position[2]-56)}

      {generateWallsZ(position[2]-82,position[2]-79, position[0]+26, leftZoffset)}
      {generateWallsZ(position[2]-74, position[2]-58, position[0]+26, leftZoffset)}
      {generateWallsZ(position[2]-82, position[2]-62, position[0]+38, rightZoffset)}

      {generateWallsX(position[0]+28, position[0]+36, position[2]-83.5)}
      
      {/* Alley 4*/}
      

      <C_Wall position={[position[0]+40, position[1]+0, position[2]-59.5]}/>
      {/*<C_Wall position={[14, 0, 0]} rotation={[0, Math.PI/4, 0]} scale={[2, 0, 0]}/>*/}
      <C_Wall position={[position[0]+42, position[1]+0, position[2]-57.5]} rotation={[0, -Math.PI/2, 0]}/>
      <C_Floor3 position={[position[0]+40, position[1]+0, position[2]-56]}/>

      <C_Wall position={[position[0]+40, position[1]+0, position[2]-51.5]}/>
      {/*<C_Wall position={[14, 0, 0]} rotation={[0, Math.PI/4, 0]} scale={[2, 0, 0]}/>*/}
      <C_Wall position={[position[0]+42, position[1]+0, position[2]-53.5]} rotation={[0, -Math.PI/2, 0]}/>
      <C_Floor3 position={[position[0]+40, position[1]+0, position[2]-52]}/>
      
      {generateXBasicAlley8(position[0]+24, position[0]+38, position[2]-52)}

      <C_Wall position={[position[0]+20, position[1]+0, position[2]-55.5]}/>
      {/*<C_Wall position={[14, 0, 0]} rotation={[0, Math.PI/4, 0]} scale={[2, 0, 0]}/>*/}
      <C_Wall position={[position[0]+17.5, position[1]+0, position[2]-53.5]} rotation={[0, -Math.PI/2, 0]}/>
      <C_Floor3 position={[position[0]+20, position[1]+0, position[2]-52]}/>

      <YBasicAlley4 position={[position[0]+20, position[1]+0, position[2]-48]}/>
      <YBasicAlley4 position={[position[0]+20, position[1]+0, position[2]-44]}/>

      <C_Wall position={[position[0]+20, position[1]+0, position[2]-55.5]}/>
      {/*<C_Wall position={[14, 0, 0]} rotation={[0, Math.PI/4, 0]} scale={[2, 0, 0]}/>*/}
      <C_Wall position={[position[0]+17.5, position[1]+0, position[2]-53.5]} rotation={[0, -Math.PI/2, 0]}/>
      <C_Floor3 position={[position[0]+20, position[1]+0, position[2]-52]}/>

      <C_Wall position={[position[0]+20, position[1]+0, position[2]-39]}/>
      {/*<C_Wall position={[14, 0, 0]} rotation={[0, Math.PI/4, 0]} scale={[2, 0, 0]}/>*/}
      <C_Wall position={[position[0]+17.5, position[1]+0, position[2]-41.5]} rotation={[0, -Math.PI/2, 0]}/>
      <C_Floor3 position={[position[0]+20, position[1]+0, position[2]-40]}/>

      {generateXBasicAlley8(position[0]+24, position[0]+32, position[2]-40)}
      
      <C_Wall position={[position[0]+36, position[1]+0, position[2]-43.5]}/>
      {/*<C_Wall position={[14, 0, 0]} rotation={[0, Math.PI/4, 0]} scale={[2, 0, 0]}/>*/}
      <C_Wall position={[position[0]+38, position[1]+0, position[2]-41.5]} rotation={[0, -Math.PI/2, 0]}/>
      <C_Floor3 position={[position[0]+36, position[1]+0, position[2]-40]}/>

      <YBasicAlley4 position={[position[0]+36, position[1]+0, position[2]-36]}/>
      <YBasicAlley4 position={[position[0]+36, position[1]+0, position[2]-32]}/>
      <YBasicAlley4 position={[position[0]+36, position[1]+0, position[2]-28]}/>
      <YBasicAlley4 position={[position[0]+36, position[1]+0, position[2]-24]}/>
      <YBasicAlley4 position={[position[0]+36, position[1]+0, position[2]-20]}/>
      <YBasicAlley4 position={[position[0]+36, position[1]+0, position[2]-16]}/>
      <YBasicAlley4 position={[position[0]+36, position[1]+0, position[2]-12]}/>
      <YBasicAlley4 position={[position[0]+36, position[1]+0, position[2]-8]}/>
      <YBasicAlley4 position={[position[0]+36, position[1]+0, position[2]-4]}/>
      <YBasicAlley4 position={[position[0]+36, position[1]+0, position[2]+0]}/>


    </group>
    );
}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     