import React from 'react'
import * as THREE from 'three'
import ColliderBox from '../ColliderBox';

export default function Wall(props){
    const wallGeometry = new THREE.BoxGeometry(1, 1, 1)
    const wallMaterial = new THREE.MeshStandardMaterial({color: "brown"})
    const position = props.position || [60, 0, -94]

    return (
    <group rotation={props.rotation}>
        {/* 바닥 */}
        <ColliderBox scale={[12, 0.1, 50]} position={[position[0] + 9, position[1]+0.05, position[2] - 16]}/>
        <ColliderBox scale={[12, 0.1, 50]} position={[position[0] - 69, position[1]+0.05, position[2] - 16]}/>

        <ColliderBox scale={[11.8, 0.1, 0.5]} position={[position[0] - 9, position[1]+0.05, position[2] - 25.2]} />
        <ColliderBox scale={[11.4, 0.1, 0.5]} position={[position[0] - 9, position[1]+0.05, position[2] - 25.7]} />
        <ColliderBox scale={[10.8, 0.1, 0.5]} position={[position[0] - 9, position[1]+0.05, position[2] - 26.2]} />
        <ColliderBox scale={[10.2, 0.1, 0.3]} position={[position[0] - 9, position[1]+0.05, position[2] - 26.5]} />
        <ColliderBox scale={[9, 0.1, 0.5]} position={[position[0] - 9, position[1]+0.05, position[2] - 26.8]} />

        <ColliderBox scale={[17.8, 0.1, 0.5]} position={[position[0] - 48, position[1]+0.05, position[2] - 25.2]} />
        <ColliderBox scale={[17.4, 0.1, 0.5]} position={[position[0] - 48, position[1]+0.05, position[2] - 25.7]} />
        <ColliderBox scale={[16.8, 0.1, 0.5]} position={[position[0] - 48, position[1]+0.05, position[2] - 26.2]} />
        <ColliderBox scale={[16.2, 0.1, 0.3]} position={[position[0] - 48, position[1]+0.05, position[2] - 26.5]} />
        <ColliderBox scale={[15, 0.1, 0.5]} position={[position[0] - 48, position[1]+0.05, position[2] - 26.8]} />

        <ColliderBox scale={[11.8, 0.1, 0.5]} position={[position[0] - 27, position[1]+0.05, position[2] - 4.8]} />
        <ColliderBox scale={[11.4, 0.1, 0.5]} position={[position[0] - 27, position[1]+0.05, position[2] - 4.3]} />
        <ColliderBox scale={[10.8, 0.1, 0.5]} position={[position[0] - 27, position[1]+0.05, position[2] - 3.8]} />
        <ColliderBox scale={[10.2, 0.1, 0.3]} position={[position[0] - 27, position[1]+0.05, position[2] - 3.5]} />
        <ColliderBox scale={[9, 0.1, 0.5]} position={[position[0] - 27, position[1]+0.05, position[2] - 3.2]} />

        <ColliderBox scale={[12, 0.1, 34]} position={[position[0] - 9, position[1]+0.05, position[2] - 8]} />
        <ColliderBox scale={[12, 0.1, 34]} position={[position[0] - 27, position[1]+0.05, position[2] - 22]} />
        <ColliderBox scale={[18, 0.1, 34]} position={[position[0] - 48, position[1]+0.05, position[2] - 8]} />

        <ColliderBox scale={[10.5, 0.1, 20]} position={[position[0] - 48, position[1]+0.1, position[2] - 11]} />

        <ColliderBox scale={[100, 0.1, 12]} position={[position[0] - 30, position[1]+0.05, position[2] - 38.9]} />
        <ColliderBox scale={[35, 0.1, 6]} position={[position[0] - 30, position[1]+0.05, position[2] + 6]} />


        {/* 건물 */}
        {/* 세로 */}
        <ColliderBox scale={[0.1, 10, 50]} position={[position[0]+3, position[1]+0.05, position[2] + 33]}/>
        <ColliderBox scale={[0.1, 10, 50]} position={[position[0]-3, position[1]+0.05, position[2] + 33]}/>
        <ColliderBox scale={[0.1, 10, 50]} position={[position[0]-63, position[1]+0.05, position[2] + 33]}/>
        <ColliderBox scale={[0.1, 10, 50]} position={[position[0]-57, position[1]+0.05, position[2] + 33]}/>

        <ColliderBox scale={[0.1, 10, 30]} position={[position[0]-6, position[1]+0.05, position[2] - 7]}/>
        <ColliderBox scale={[0.1, 10, 30]} position={[position[0]-12, position[1]+0.05, position[2] - 7]}/>

        <ColliderBox scale={[0.1, 10, 16]} position={[position[0]+12.5, position[1]+5, position[2] + 1]}/>
        <ColliderBox scale={[0.1, 10, 30]} position={[position[0]+5.5, position[1]+5, position[2] - 22]}/>

        <ColliderBox scale={[0.1, 10, 30]} position={[position[0] - 25, position[1]+5, position[2] - 26]}/>
        <ColliderBox scale={[0.1, 10, 30]} position={[position[0] - 29, position[1]+5, position[2] - 26]}/>
        
        <ColliderBox scale={[0.1, 10, 25]} position={[position[0]-42.7, position[1]+0.05, position[2] - 6]}/>
        <ColliderBox scale={[0.1, 10, 10]} position={[position[0]-53.5, position[1]+0.05, position[2] + 0.5]}/>
        <ColliderBox scale={[0.1, 10, 14]} position={[position[0]-53.5, position[1]+0.05, position[2] - 14]}/>

        <ColliderBox scale={[0.1, 10, 50]} position={[position[0]-65, position[1]+0.05, position[2] - 15]}/>

        {/* 가로 */}
        <ColliderBox scale={[9, 10, 0.1]} position={[position[0]+7.6, position[1]+5, position[2] + 9]}/>
        <ColliderBox scale={[40, 10, 0.1]} position={[position[0]-30, position[1]+5, position[2] + 3.8]}/>

        <ColliderBox scale={[9, 10, 0.1]} position={[position[0]+10, position[1]+5, position[2] - 7]}/>
        
        <ColliderBox scale={[70, 10, 0.1]} position={[position[0]-30, position[1]+5, position[2] -34]}/>

        <ColliderBox scale={[6.2, 10, 0.1]} position={[position[0]-9, position[1]+5, position[2] - 22]}/>

        <ColliderBox scale={[4.2, 10, 0.1]} position={[position[0]-27, position[1]+5, position[2] - 11]}/>

        <ColliderBox scale={[10.8, 10, 0.1]} position={[position[0]-48.1, position[1], position[2] - 21]}/>
        <ColliderBox scale={[10.8, 10, 0.1]} position={[position[0]-48.1, position[1], position[2] - 1]}/>

        {/* 오브젝트 */}
        <ColliderBox scale={[3, 4, 6]} position={[position[0] + 9, position[1]+0.05, position[2] - 1]}/>

        <ColliderBox scale={[2, 2, 1]} position={[position[0] + 5.5, position[1], position[2] - 1]} rotation={[0, -Math.PI/4, 0]}/>

        {/* 가로등 */}
        <ColliderBox scale={[0.15, 8, 0.15]} position={[position[0] - 4, position[1] - 0.09, position[2] - 3]} />

        <ColliderBox scale={[0.15, 8, 0.15]} position={[position[0] - 4, position[1] - 0.09, position[2] - 13]} />
        <ColliderBox scale={[0.15, 8, 0.15]} position={[position[0] - 4, position[1] - 0.09, position[2] - 23]} />

        <ColliderBox scale={[0.15, 8, 0.15]} position={[position[0] - 14, position[1] - 0.09, position[2] - 23]} />
        <ColliderBox scale={[0.15, 8, 0.15]} position={[position[0] - 14, position[1] - 0.09, position[2] - 13]} />
        <ColliderBox scale={[0.15, 8, 0.15]} position={[position[0] - 14, position[1] - 0.09, position[2] - 3]} />

        <ColliderBox scale={[0.15, 8, 0.15]} position={[position[0] - 22, position[1] - 0.09, position[2] - 33]} rotation={[0, Math.PI / 2, 0]} />
        <ColliderBox scale={[0.15, 8, 0.15]} position={[position[0] - 22, position[1] - 0.09, position[2] - 26]} />
        <ColliderBox scale={[0.15, 8, 0.15]} position={[position[0] - 22, position[1] - 0.09, position[2] - 16]} />
        <ColliderBox scale={[0.15, 8, 0.15]} position={[position[0] - 22, position[1] - 0.09, position[2] - 5]} />

        <ColliderBox scale={[0.15, 8, 0.15]} position={[position[0] - 32, position[1] - 0.09, position[2] - 5]} />
        <ColliderBox scale={[0.15, 8, 0.15]} position={[position[0] - 32, position[1] - 0.09, position[2] - 22]} />

        <ColliderBox scale={[0.15, 8, 0.15]} position={[position[0] - 40, position[1] - 0.09, position[2] - 5]} />
        <ColliderBox scale={[0.15, 8, 0.15]} position={[position[0] - 40, position[1] - 0.09, position[2] - 23]}/>
        <ColliderBox scale={[0.15, 8, 0.15]} position={[position[0] - 48, position[1] - 0.09, position[2] - 26]} rotation={[0, Math.PI / 2, 0]}/>
        <ColliderBox scale={[0.15, 8, 0.15]} position={[position[0] - 48, position[1] - 0.09, position[2] - 33.5]} rotation={[0, Math.PI / 2, 0]}/>

        <ColliderBox scale={[0.15, 8, 0.15]} position={[position[0] - 56, position[1] - 0.09, position[2] - 5]} />
        <ColliderBox scale={[0.15, 8, 0.15]} position={[position[0] - 56, position[1] - 0.09, position[2] - 23]}/>

        <ColliderBox scale={[0.15, 8, 0.15]} position={[position[0] - 64, position[1] - 0.09, position[2] - 5]} />
        <ColliderBox scale={[0.15, 8, 0.15]} position={[position[0] - 64, position[1] - 0.09, position[2] - 23]}/>
        <ColliderBox scale={[0.15, 8, 0.15]} position={[position[0] - 64, position[1] - 0.09, position[2] - 33]} rotation={[0, Math.PI / 2, 0]}/>

        <ColliderBox scale={[0.15, 8, 0.15]} position={[position[0] + 4, position[1] - 0.09, position[2] - 3]} />
        <ColliderBox scale={[0.15, 8, 0.15]} position={[position[0] + 4, position[1] - 0.09, position[2] - 13]} />
        <ColliderBox scale={[0.15, 8, 0.15]} position={[position[0] + 4, position[1] - 0.09, position[2] - 23]} />

        <ColliderBox scale={[0.15, 8, 0.15]} position={[position[0] -9, position[1] - 0.09, position[2] - 34]} rotation={[0, Math.PI / 2, 0]}/>

        <ColliderBox scale={[0.15, 8, 0.15]} position={[position[0] - 4, position[1] - 0.09, position[2] - 6]} rotation={[0, Math.PI / 2, 0]}/>
        <ColliderBox scale={[0.15, 8, 0.15]} position={[position[0] - 33, position[1] - 0.09, position[2] - 33]} rotation={[0, Math.PI / 2, 0]}/>

        {/* Block */}
        <ColliderBox scale={[2, 2, 1.2]} position={[position[0]-4, position[1] -0.1, position[2] + 7]} rotation={[0, Math.PI / 2, 0]}/>
        <ColliderBox scale={[2, 2, 1.2]} position={[position[0]-4, position[1] -0.1, position[2] + 5]} rotation={[0, Math.PI / 2, 0]}/>
        <ColliderBox scale={[2, 2, 1.2]} position={[position[0]-5, position[1] -0.1, position[2] + 3]} rotation={[0, -Math.PI / 4, 0]}/>
        <ColliderBox scale={[2, 2, 1.2]} position={[position[0]-12, position[1] -0.1, position[2] + 3]} rotation={[0, Math.PI / 2, 0]}/>
        <ColliderBox scale={[2, 2, 1.2]} position={[position[0]-24, position[1] -0.1, position[2] - 33]} rotation={[0, Math.PI / 2, 0]}/>
        <ColliderBox scale={[2, 2, 1.2]} position={[position[0]-30, position[1] -0.1, position[2] - 33]} rotation={[0, Math.PI / 2, 0]}/>
        <ColliderBox scale={[2, 2, 1.2]} position={[position[0]-43, position[1] -0.1, position[2] + 1]} rotation={[0, Math.PI / 2, 0]}/>
        <ColliderBox scale={[2, 2, 1.2]} position={[position[0]-53, position[1] -0.1, position[2] + 1]} rotation={[0, Math.PI / 2, 0]}/>
        <ColliderBox scale={[2, 2, 1.2]} position={[position[0]-58.5, position[1] -0.1, position[2] + 20]} rotation={[0, 0, 0]}/>
        <ColliderBox scale={[2, 2, 1.2]} position={[position[0]-61.5, position[1] -0.1, position[2] + 30]} rotation={[0, 0, 0]}/>
        <ColliderBox scale={[2, 2, 1.2]} position={[position[0]-58.5, position[1] -0.1, position[2] + 40]} rotation={[0, 0, 0]}/>
        <ColliderBox scale={[2, 2, 1.2]} position={[position[0]-61.5, position[1] -0.1, position[2] + 50]} rotation={[0, 0, 0]}/>

        {/* 콘 */}
        <ColliderBox scale={[0.5, 2, 0.5]} position={[position[0] + 1, position[1] -0.1, position[2] - 29.5]} rotation={[0, -Math.PI / 4, 0]}/>
        <ColliderBox scale={[0.5, 2, 0.5]} position={[position[0] + 2.2, position[1] -0.1, position[2] - 31]} rotation={[0, -Math.PI / 4, 0]}/>
        <ColliderBox scale={[0.5, 2, 0.5]} position={[position[0] - 0.2, position[1] -0.1, position[2] - 31]} rotation={[0, -Math.PI / 4, 0]}/>
        <ColliderBox scale={[0.5, 2, 0.5]} position={[position[0] + 1, position[1] -0.1, position[2] - 32.5]} rotation={[0, -Math.PI / 4, 0]}/>

        <ColliderBox scale={[0.5, 2, 0.5]} position={[position[0] -60, position[1] -0.1, position[2] - 29.5]} rotation={[0, -Math.PI / 4, 0]}/>
        <ColliderBox scale={[0.5, 2, 0.5]} position={[position[0] -62.2, position[1] -0.1, position[2] - 31]} rotation={[0, -Math.PI / 4, 0]}/>
        <ColliderBox scale={[0.5, 2, 0.5]} position={[position[0] -57.8, position[1] -0.1, position[2] - 31]} rotation={[0, -Math.PI / 4, 0]}/>
        <ColliderBox scale={[0.5, 2, 0.5]} position={[position[0] -60, position[1] -0.1, position[2] - 32.5]} rotation={[0, -Math.PI / 4, 0]}/>

        {/* Hydrant */}
        <ColliderBox scale={[0.3, 2, 0.3]} position={[position[0] + 3, position[1] - 0.04, position[2] - 32]} />
        <ColliderBox scale={[0.3, 2, 0.3]} position={[position[0] - 5, position[1] - 0.04, position[2] - 26]} />
        <ColliderBox scale={[0.3, 2, 0.3]} position={[position[0] - 23, position[1] + 0.04, position[2] - 4]} />

        {/* Vehicle */}
        <ColliderBox scale={[1.5, 3, 3.5]} position={[position[0] - 15, position[1] - 0.09, position[2] - 33]} rotation={[Math.PI / 36, -Math.PI / 2, 0]} />
        <ColliderBox scale={[1.5, 3, 3.5]} position={[position[0] - 40, position[1] - 0.09, position[2] - 33]} rotation={[Math.PI / 36, -Math.PI / 2, 0]} />
        <ColliderBox scale={[1.5, 3, 3.5]} position={[position[0] - 55, position[1] - 0.09, position[2] - 33]} rotation={[Math.PI / 36, -Math.PI / 2, 0]} />

        <ColliderBox scale={[1.5, 3, 3.5]} position={[position[0] - 15, position[1] - 0.09, position[2] - 20]} rotation={[0, Math.PI, -Math.PI / 36]} />
        <ColliderBox scale={[1.5, 3, 3.5]} position={[position[0] - 21, position[1] - 0.09, position[2] - 10]} rotation={[0, 0, -Math.PI / 36]} />
        <ColliderBox scale={[1.5, 3, 3.5]} position={[position[0] - 33, position[1] - 0.09, position[2] - 20]} rotation={[0, Math.PI, -Math.PI / 36]} />
        <ColliderBox scale={[1.5, 3, 3.5]} position={[position[0] - 39, position[1] - 0.09, position[2] - 15]} rotation={[0, 0, -Math.PI / 36]} />
        <ColliderBox scale={[1.5, 3, 3.5]} position={[position[0] - 63, position[1] - 0.09, position[2] - 10]} rotation={[0, 0, -Math.PI / 36]} />
        <ColliderBox scale={[1.5, 3, 3.5]} position={[position[0] - 63, position[1] - 0.09, position[2]]} rotation={[0, 0, -Math.PI / 36]} />

        {/* TrashCan */}
        <ColliderBox scale={[3.5, 4, 2]} position={[position[0] - 27.5, position[1] - 0.04, position[2] - 10.1]} />

    </group>
    )
}
