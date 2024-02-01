import XBasicAlley4 from "./Map/XBasicAlley4.jsx"
import ZBasicAlley4 from "./Map/ZBasicAlley4.jsx"
import ColliderWall from "../../ColliderWall.jsx"
import {C_Wall,C_TopWall, C_LeftWall, C_Floor3, C_Floor2} from './Ruins/Library_C_Ruin.jsx'
import {YellowWall} from './Map/YellowWall.jsx'
import TownCenter from './object/TownCenter.jsx'
import {StoneStep} from './Map/StoneStep.jsx'
import {RedCarpet} from './object/RedCarpet.jsx'
import {OvergrownWall} from './Ruins/Library_Ruins.jsx'
import YBasicAlley4 from "./Map/ZBasicAlley4.jsx"
import {Statue2} from "./object/Statue2.jsx"
import {CheckedFloor} from "./Map/CheckedFloor.jsx"
import {Bookcase} from "./object/Bookcase.jsx"
import {Bookshelf} from "./object/Bookshelf.jsx"
// import {Banner} from "./ojbect/Banner.jsx"
import {CarpetRed} from "./object/CarpetRed.jsx"
import {Rug} from "./object/Rug.jsx"
import {StartLine} from "./object/StartLine.jsx"
import ColliderBox from "../../ColliderBox.jsx"

export default function Library(props){
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
      const generateCheckedFloor = (startX, endX, offsetY)=> {
        const floors = [];
        for (let x = startX; x <= endX; x += 4) {
          floors.push(<CheckedFloor key={`floor-${x}`} position={[x, 0, offsetY]} scale={12.5} />);
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
      <StartLine position={[position[0]+12, position[1]-0.09, position[2]+1]} rotation={[0, Math.PI/2, 0]} scale={[1, 1, 1]} />
      <ZBasicAlley4 position={[position[0]+12, position[1]+0, position[2]-4]}/>
      <ZBasicAlley4 position={[position[0]+12, position[1]+0, position[2]]}/>
    
      {/* Lobby */ } 
      <TownCenter position={[position[0]+12, position[1], position[2]-18]} scale={[5, 5, 5]}/>
      <StoneStep position={[position[0]+18, position[1], position[2]-32]} scale={[1, 0.8, 2]} rotation={[0, Math.PI/2, 0]}/>
      <StoneStep position={[position[0]+6, position[1], position[2]-32]} scale={[1, 0.8, 2]} rotation={[0, -Math.PI/2, 0]}/>
      <RedCarpet position={[position[0]+12, position[1], position[2]-10.5]} scale={[0.55, 1, 1.2]}/>
      <RedCarpet position={[position[0]+4, position[1], position[2]-18]} scale={[0.75, 1, 1.2]} rotation={[0, Math.PI/2, 0]}/>
      <RedCarpet position={[position[0]+12, position[1], position[2]-25]} scale={[0.55, 1, 1.2]}/>
      <RedCarpet position={[position[0]+20, position[1], position[2]-18]} scale={[0.75, 1, 1.2]} rotation={[0, Math.PI/2, 0]}/>
      <OvergrownWall position={[position[0]+12, position[1], position[2]-30]} scale={[1, 0.5, 1]}/>
      <OvergrownWall position={[position[0]+12, position[1], position[2]-34]} scale={[1, 0.5, 1]}/>
      <Statue2 position={[position[0]+8, position[1]+2.1, position[2]-29]} scale={[2 ,2, 2]}/>
      <Statue2 position={[position[0]+16, position[1]+2.1, position[2]-29]} scale={[2 ,2, 2]}/>

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
      <ZBasicAlley4 position={[position[0]+12.2, position[1]+0, position[2]-40]}/>
      <ZBasicAlley4 position={[position[0]+12.2, position[1]+0, position[2]-44]}/>

      <C_TopWall position={[position[0]+11.8, position[1]+0, position[2]-51.4]} rotation={[0, 0, 0]}/>
      <C_LeftWall position={[position[0]+13.8, position[1]+0, position[2]-49.5]} rotation={[0, -Math.PI/2, 0]}/>
      <C_Floor3 position={[position[0]+12, position[1]+0, position[2]-48]}/>

      <C_TopWall position={[position[0]+8, position[1]+0, position[2]-47.5]}/>
      {/*<C_Wall position={[14, 0, 0]} rotation={[0, Math.PI/4, 0]} scale={[2, 0, 0]}/>*/}
      <C_LeftWall position={[position[0]+5.8, position[1]+0, position[2]-49.5]} rotation={[0, -Math.PI/2, 0]}/>
      <C_Floor3 position={[position[0]+8, position[1]+0, position[2]-48]}/>

      <ZBasicAlley4 position={[position[0]+8, position[1]+0, position[2]-52]}/>

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
      {/* <Bookcase position={[position[0]+37, position[1], position[2]-80]} rotation={[0,-Math.PI/2, 0]} scale={[2, 1.2, 2]}/>
      <Bookcase position={[position[0]+37, position[1], position[2]-77]} rotation={[0,-Math.PI/2, 0]} scale={[2, 1.2, 2]}/>
      <Bookcase position={[position[0]+37, position[1], position[2]-74]} rotation={[0,-Math.PI/2, 0]} scale={[2, 1.2, 2]}/>
      <Bookcase position={[position[0]+37, position[1], position[2]-71]} rotation={[0,-Math.PI/2, 0]} scale={[2, 1.2, 2]}/> */}
      
      <Bookshelf position={[position[0]+37, position[1]+1.9, position[2]-66.5]} rotation={[0, -Math.PI/2+0.2, 0]} scale={[1, 0.7, 1]}/>
      {/* <Rug position={[position[0]+32, position[1]+0.1, position[2]-68]} scale={[100, 0.1 , 80]} rotation={[0, Math.PI/2, 0]}/> */}
      
      {generateCFloor2(position[0]+28, position[0]+36, position[2]-80)}
      {generateCFloor2(position[0]+28, position[0]+36, position[2]-76)}
      {generateCFloor2(position[0]+28, position[0]+36, position[2]-72)}
      {generateCFloor2(position[0]+28, position[0]+36, position[2]-68)}
      {generateCFloor2(position[0]+28, position[0]+36, position[2]-64)}
      {generateCFloor2(position[0]+28, position[0]+36, position[2]-60)}
      {generateCFloor2(position[0]+28, position[0]+36, position[2]-56)}

      {generateWallsZ(position[2]-82,position[2]-79, position[0]+26, leftZoffset)}
      {generateWallsZ(position[2]-73.9, position[2]-57.9, position[0]+26, leftZoffset)}
      {generateWallsZ(position[2]-82, position[2]-62, position[0]+38, rightZoffset)}

      {generateWallsX(position[0]+28, position[0]+36, position[2]-83.5)}
      
      {/* Alley 4*/}
      

      <C_TopWall position={[position[0]+40, position[1]+0, position[2]-59.5]}/>
      {/*<C_Wall position={[14, 0, 0]} rotation={[0, Math.PI/4, 0]} scale={[2, 0, 0]}/>*/}
      <C_LeftWall position={[position[0]+42, position[1]+0, position[2]-57.5]} rotation={[0, -Math.PI/2, 0]}/>
      <C_Floor3 position={[position[0]+40, position[1]+0, position[2]-56]}/>

      <C_TopWall position={[position[0]+40, position[1]+0, position[2]-51.5]}/>
      {/*<C_Wall position={[14, 0, 0]} rotation={[0, Math.PI/4, 0]} scale={[2, 0, 0]}/>*/}
      <C_LeftWall position={[position[0]+42, position[1]+0, position[2]-53.5]} rotation={[0, -Math.PI/2, 0]}/>
      <C_Floor3 position={[position[0]+40, position[1]+0, position[2]-52]}/>
      
      {generateXBasicAlley8(position[0]+24, position[0]+38, position[2]-52)}

      <C_TopWall position={[position[0]+20, position[1]+0, position[2]-55.4]}/>
      {/*<C_Wall position={[14, 0, 0]} rotation={[0, Math.PI/4, 0]} scale={[2, 0, 0]}/>*/}
      <C_LeftWall position={[position[0]+17.7, position[1]+0, position[2]-53.5]} rotation={[0, -Math.PI/2, 0]}/>
      <C_Floor3 position={[position[0]+20, position[1]+0, position[2]-52]}/>

      <ZBasicAlley4 position={[position[0]+20, position[1]+0, position[2]-48]}/>
      <ZBasicAlley4 position={[position[0]+20, position[1]+0, position[2]-44]}/>

      <C_TopWall position={[position[0]+20, position[1]+0, position[2]-55.5]}/>
      {/*<C_Wall position={[14, 0, 0]} rotation={[0, Math.PI/4, 0]} scale={[2, 0, 0]}/>*/}
      <C_LeftWall position={[position[0]+17.5, position[1]+0, position[2]-53.5]} rotation={[0, -Math.PI/2, 0]}/>
      <C_Floor3 position={[position[0]+20, position[1]+0, position[2]-52]}/>

      <C_TopWall position={[position[0]+20, position[1]+0, position[2]-39]}/>
      <C_LeftWall position={[position[0]+17.5, position[1]+0, position[2]-41.5]} rotation={[0, -Math.PI/2, 0]}/>
      <C_Floor3 position={[position[0]+20, position[1]+0, position[2]-40]}/>

      {generateXBasicAlley8(position[0]+24, position[0]+36, position[2]-40)}
      
      <ZBasicAlley4 position={[position[0]+44, position[1], position[2]+4]}/>
      <ZBasicAlley4 position={[position[0]+44, position[1], position[2]+8]}/>
      <ZBasicAlley4 position={[position[0]+44, position[1], position[2]+12]}/>
      <ZBasicAlley4 position={[position[0]+44, position[1], position[2]+16]}/>
      <ZBasicAlley4 position={[position[0]+44, position[1], position[2]+20]}/>
      <ZBasicAlley4 position={[position[0]+44, position[1], position[2]+24]}/>
     
      
      <C_TopWall position={[position[0]+44, position[1]+0, position[2]+28]} rotation={[0, Math.PI, 0]}/>
      <C_LeftWall position={[position[0]+46, position[1]+0, position[2]+26]} rotation={[0, Math.PI/2, 0]}/>
      <C_Floor3 position={[position[0]+44, position[1]+0, position[2]+28]}/>

      {generateXBasicAlley8(position[0]+16, position[0]+40, position[2]+28)}

      <C_TopWall position={[position[0]+12, position[1]+0, position[2]+28]} rotation={[0, Math.PI, 0]}/>
      <C_LeftWall position={[position[0]+10, position[1]+0, position[2]+26]} rotation={[0, Math.PI/2, 0]}/>
      <C_Floor3 position={[position[0]+12, position[1]+0, position[2]+28]}/>
      
      <ZBasicAlley4 position={[-28, 0, 63]}/>
      <ZBasicAlley4 position={[-28, 0, 59]}/>
      <ZBasicAlley4 position={[-28, 0, 55]}/>
      <ZBasicAlley4 position={[-28, 0, 51]}/>
      <ZBasicAlley4 position={[-28, 0, 47]}/>
      <ZBasicAlley4 position={[-28, 0, 43]}/>

    </group>
    );
}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            