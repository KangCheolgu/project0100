import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
export function BuildingRed(props) {
    const position = props.position
    const rotation = props.rotation
    const scale = props.scale
    const { nodes, materials } = useGLTF('/assets/models/resort-buildings.glb')
    return (
      <group {...props} dispose={null}>
        <group position={position} rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <mesh geometry={nodes.Airing_1__5__4.geometry} material={materials.Airing} position={[-350, -350, -1588.5]} rotation={[0, 0, 1.571]} />
          <mesh geometry={nodes.Airing_1__6__4.geometry} material={materials.Airing} position={[-350, 350, -1588.5]} rotation={[0, 0, 1.571]} />
          <mesh geometry={nodes.Airing_1__7__4.geometry} material={materials.Airing} position={[350, -350, -1588.5]} rotation={[0, 0, 1.571]} />
          <mesh geometry={nodes.Airing_1__8__4.geometry} material={materials.Airing} position={[350, 350, -1588.5]} rotation={[0, 0, 1.571]} />
          <mesh geometry={nodes.Shutter_4_1__11__1.geometry} material={materials.Shutters} position={[-46, 705.2, -290]} rotation={[0, 0, 2.985]} />
          <mesh geometry={nodes.Shutter_4_1__12__1.geometry} material={materials.Shutters} position={[-46, 705.2, -538.5]} rotation={[0, 0, 2.762]} />
          <mesh geometry={nodes.Shutter_4_1__13__1.geometry} material={materials.Shutters} position={[-46, 705.2, -788]} rotation={[0, 0, 3.031]} />
          <mesh geometry={nodes.Shutter_4_1__14__1.geometry} material={materials.Shutters} position={[-46, 705.2, -1037]} rotation={[0, 0, 2.985]} />
          <mesh geometry={nodes.Shutter_4_1__15__1.geometry} material={materials.Shutters} position={[-46, 705.2, -1285]} rotation={[0, 0, 2.927]} />
          <mesh geometry={nodes.Shutter_4_1__16__1.geometry} material={materials.Shutters} position={[-706, -50, -290]} rotation={[0, 0, -1.728]} />
          <mesh geometry={nodes.Shutter_4_1__17__1.geometry} material={materials.Shutters} position={[-706, -50, -538.5]} rotation={[0, 0, -1.95]} />
          <mesh geometry={nodes.Shutter_4_1__18__1.geometry} material={materials.Shutters} position={[-706, -50, -788]} rotation={[0, 0, -1.681]} />
          <mesh geometry={nodes.Shutter_4_1__19__1.geometry} material={materials.Shutters} position={[-706, -50, -1037]} rotation={[0, 0, -1.728]} />
          <mesh geometry={nodes.Shutter_4_1__20__1.geometry} material={materials.Shutters} position={[-706, -50, -1285]} rotation={[0, 0, -1.786]} />
          <mesh geometry={nodes.Awning_2__14__2.geometry} material={materials.Awnings_2} position={[350, 750, -325]} />
          <mesh geometry={nodes.Awning_2__25__4.geometry} material={materials.Awnings_2} position={[-350, 750, -325]} />
          <mesh geometry={nodes.Awning_2__26__4.geometry} material={materials.Awnings_2} position={[350, 750, -575]} />
          <mesh geometry={nodes.Awning_2__27__1.geometry} material={materials.Awnings_2} position={[350, 750, -825]} />
          <mesh geometry={nodes.Awning_2__28__1.geometry} material={materials.Awnings_2} position={[350, 750, -1075]} />
          <mesh geometry={nodes.Awning_2__29__1.geometry} material={materials.Awnings_2} position={[350, 750, -1325]} />
          <mesh geometry={nodes.Awning_2__30__1.geometry} material={materials.Awnings_2} position={[-350, 750, -575]} />
          <mesh geometry={nodes.Awning_2__31__1.geometry} material={materials.Awnings_2} position={[-350, 750, -825]} />
          <mesh geometry={nodes.Awning_2__32__1.geometry} material={materials.Awnings_2} position={[-350, 750, -1075]} />
          <mesh geometry={nodes.Awning_2__33__1.geometry} material={materials.Awnings_2} position={[-350, 750, -1325]} />
          <mesh geometry={nodes.Awning_2__34__1.geometry} material={materials.Awnings_2} position={[-750, 350, -325]} rotation={[0, 0, Math.PI / 2]} />
          <mesh geometry={nodes.Awning_2__35__1.geometry} material={materials.Awnings_2} position={[-750, -350, -325]} rotation={[0, 0, Math.PI / 2]} />
          <mesh geometry={nodes.Awning_2__36__1.geometry} material={materials.Awnings_2} position={[-750, 350, -575]} rotation={[0, 0, Math.PI / 2]} />
          <mesh geometry={nodes.Awning_2__37__1.geometry} material={materials.Awnings_2} position={[-750, 350, -825]} rotation={[0, 0, Math.PI / 2]} />
          <mesh geometry={nodes.Awning_2__38__1.geometry} material={materials.Awnings_2} position={[-750, 350, -1075]} rotation={[0, 0, Math.PI / 2]} />
          <mesh geometry={nodes.Awning_2__39__1.geometry} material={materials.Awnings_2} position={[-750, 350, -1325]} rotation={[0, 0, Math.PI / 2]} />
          <mesh geometry={nodes.Awning_2__40__1.geometry} material={materials.Awnings_2} position={[-750, -350, -575]} rotation={[0, 0, Math.PI / 2]} />
          <mesh geometry={nodes.Awning_2__41__1.geometry} material={materials.Awnings_2} position={[-750, -350, -825]} rotation={[0, 0, Math.PI / 2]} />
          <mesh geometry={nodes.Awning_2__42__1.geometry} material={materials.Awnings_2} position={[-750, -350, -1075]} rotation={[0, 0, Math.PI / 2]} />
          <mesh geometry={nodes.Awning_2__43__1.geometry} material={materials.Awnings_2} position={[-750, -350, -1325]} rotation={[0, 0, Math.PI / 2]} />
          <mesh geometry={nodes.Airing_4__17_.geometry} material={materials.Airing} position={[-400, -250, -1588.5]} />
          <mesh geometry={nodes.Airing_4__18_.geometry} material={materials.Airing} position={[-300, -250, -1588.5]} />
          <mesh geometry={nodes.Airing_4__19_.geometry} material={materials.Airing} position={[300, -250, -1588.5]} />
          <mesh geometry={nodes.Airing_4__20_.geometry} material={materials.Airing} position={[400, -250, -1588.5]} />
          <mesh geometry={nodes.Airing_4__21_.geometry} material={materials.Airing} position={[-400, 450, -1588.5]} />
          <mesh geometry={nodes.Airing_4__22_.geometry} material={materials.Airing} position={[-300, 450, -1588.5]} />
          <mesh geometry={nodes.Airing_4__23_.geometry} material={materials.Airing} position={[300, 450, -1588.5]} />
          <mesh geometry={nodes.Airing_4__24_.geometry} material={materials.Airing} position={[400, 450, -1588.5]} />
          <mesh geometry={nodes.Airing_4__25_.geometry} material={materials.Airing} position={[399.999, 250, -1588.5]} rotation={[0, 0, -Math.PI]} />
          <mesh geometry={nodes.Airing_4__26_.geometry} material={materials.Airing} position={[299.999, 250, -1588.5]} rotation={[0, 0, -Math.PI]} />
          <mesh geometry={nodes.Airing_4__27_.geometry} material={materials.Airing} position={[-300.001, 249.997, -1588.5]} rotation={[0, 0, -Math.PI]} />
          <mesh geometry={nodes.Airing_4__28_.geometry} material={materials.Airing} position={[-400.001, 249.997, -1588.5]} rotation={[0, 0, -Math.PI]} />
          <mesh geometry={nodes.Airing_4__29_.geometry} material={materials.Airing} position={[400.001, -450, -1588.5]} rotation={[0, 0, -Math.PI]} />
          <mesh geometry={nodes.Airing_4__30_.geometry} material={materials.Airing} position={[300.001, -450.001, -1588.5]} rotation={[0, 0, -Math.PI]} />
          <mesh geometry={nodes.Airing_4__31_.geometry} material={materials.Airing} position={[-299.999, -450.003, -1588.5]} rotation={[0, 0, -Math.PI]} />
          <mesh geometry={nodes.Airing_4__32_.geometry} material={materials.Airing} position={[-399.999, -450.004, -1588.5]} rotation={[0, 0, -Math.PI]} />
          <mesh geometry={nodes.Building_8_Boards.geometry} material={materials.Parts} />
          <mesh geometry={nodes.Building_8_Decor_1.geometry} material={materials.Walls_3} />
          <mesh geometry={nodes.Building_8_Doors.geometry} material={materials.Doors} />
          <mesh geometry={nodes.Building_8_Plinth.geometry} material={materials.Plinth_1} />
          <mesh geometry={nodes.Building_8_Roof.geometry} material={materials.Roof} />
          <mesh geometry={nodes.Building_8_Stairs.geometry} material={materials.Stairs} />
          <mesh geometry={nodes.Building_8_Walls_1.geometry} material={materials.Walls_2} />
          <mesh geometry={nodes.Building_8_Walls_2.geometry} material={materials.Brick_walls_1} />
          <mesh geometry={nodes.Building_8_Walls_3.geometry} material={materials.Walls_4_2} />
          <mesh geometry={nodes.Building_8_Walls_4.geometry} material={materials.Walls_4_2} />
          <mesh geometry={nodes.Building_8_Windows.geometry} material={materials.Windows} />
          <mesh geometry={nodes.Shutter_4_2__11__1.geometry} material={materials.Shutters} position={[46, 705.2, -290]} rotation={[0, 0, -3.031]} />
          <mesh geometry={nodes.Shutter_4_2__12__1.geometry} material={materials.Shutters} position={[46, 705.2, -538.5]} rotation={[0, 0, -3.107]} />
          <mesh geometry={nodes.Shutter_4_2__13__1.geometry} material={materials.Shutters} position={[46, 705.2, -788]} rotation={[0, 0, -3.031]} />
          <mesh geometry={nodes.Shutter_4_2__14__1.geometry} material={materials.Shutters} position={[46, 705.2, -1037]} rotation={[0, 0, -2.856]} />
          <mesh geometry={nodes.Shutter_4_2__15__1.geometry} material={materials.Shutters} position={[46, 705.2, -1285]} rotation={[0, 0, -3.031]} />
          <mesh geometry={nodes.Shutter_4_2__16__1.geometry} material={materials.Shutters} position={[-706, 50, -290]} rotation={[0, 0, -1.46]} />
          <mesh geometry={nodes.Shutter_4_2__17__1.geometry} material={materials.Shutters} position={[-706, 50, -538.5]} rotation={[0, 0, -1.537]} />
          <mesh geometry={nodes.Shutter_4_2__18__1.geometry} material={materials.Shutters} position={[-706, 50, -788]} rotation={[0, 0, -1.46]} />
          <mesh geometry={nodes.Shutter_4_2__19__1.geometry} material={materials.Shutters} position={[-706, 50, -1037]} rotation={[0, 0, -1.285]} />
          <mesh geometry={nodes.Shutter_4_2__20__1.geometry} material={materials.Shutters} position={[-706, 50, -1285]} rotation={[0, 0, -1.46]} />
        </group>
      </group>
        
    )
  }
  
  export function BuildingGreen(props) {
    const { nodes, materials } = useGLTF('/assets/models/resort-buildings.glb')
    const position = props.position
    const rotation = props.rotation
    const scale = props.scale
    return (
      <group {...props} dispose={null}>
        <group position={position} rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <mesh geometry={nodes.Airing_1__1__4.geometry} material={materials.Airing} position={[-350, -350, -1588.5]} rotation={[0, 0, 1.571]} />
          <mesh geometry={nodes.Airing_1__2__3.geometry} material={materials.Airing} position={[-350, 350, -1588.5]} rotation={[0, 0, 1.571]} />
          <mesh geometry={nodes.Airing_1__3__2.geometry} material={materials.Airing} position={[350, -350, -1588.5]} rotation={[0, 0, 1.571]} />
          <mesh geometry={nodes.Airing_1__4__2.geometry} material={materials.Airing} position={[350, 350, -1588.5]} rotation={[0, 0, 1.571]} />
          <mesh geometry={nodes.Shutter_4_1__10__1.geometry} material={materials.Shutters} position={[-706, -50, -1285]} rotation={[0, 0, -1.786]} />
          <mesh geometry={nodes.Shutter_4_1__1__2.geometry} material={materials.Shutters} position={[-46, 705.2, -290]} rotation={[0, 0, 2.985]} />
          <mesh geometry={nodes.Shutter_4_1__2__2.geometry} material={materials.Shutters} position={[-46, 705.2, -538.5]} rotation={[0, 0, 2.762]} />
          <mesh geometry={nodes.Shutter_4_1__3__2.geometry} material={materials.Shutters} position={[-46, 705.2, -788]} rotation={[0, 0, 3.031]} />
          <mesh geometry={nodes.Shutter_4_1__4__1.geometry} material={materials.Shutters} position={[-46, 705.2, -1037]} rotation={[0, 0, 2.985]} />
          <mesh geometry={nodes.Shutter_4_1__5__1.geometry} material={materials.Shutters} position={[-46, 705.2, -1285]} rotation={[0, 0, 2.927]} />
          <mesh geometry={nodes.Shutter_4_1__6__1.geometry} material={materials.Shutters} position={[-706, -50, -290]} rotation={[0, 0, -1.728]} />
          <mesh geometry={nodes.Shutter_4_1__7__1.geometry} material={materials.Shutters} position={[-706, -50, -538.5]} rotation={[0, 0, -1.95]} />
          <mesh geometry={nodes.Shutter_4_1__8__1.geometry} material={materials.Shutters} position={[-706, -50, -788]} rotation={[0, 0, -1.681]} />
          <mesh geometry={nodes.Shutter_4_1__9__1.geometry} material={materials.Shutters} position={[-706, -50, -1037]} rotation={[0, 0, -1.728]} />
          <mesh geometry={nodes.Awning_2__10__2.geometry} material={materials.Awnings_2} position={[-350, 750, -575]} />
          <mesh geometry={nodes.Awning_2__11__2.geometry} material={materials.Awnings_2} position={[-350, 750, -825]} />
          <mesh geometry={nodes.Awning_2__12__2.geometry} material={materials.Awnings_2} position={[-350, 750, -1075]} />
          <mesh geometry={nodes.Awning_2__13__2.geometry} material={materials.Awnings_2} position={[-350, 750, -1325]} />
          <mesh geometry={nodes.Awning_2__15__4.geometry} material={materials.Awnings_2} position={[-750, 350, -325]} rotation={[0, 0, Math.PI / 2]} />
          <mesh geometry={nodes.Awning_2__16__4.geometry} material={materials.Awnings_2} position={[-750, -350, -325]} rotation={[0, 0, Math.PI / 2]} />
          <mesh geometry={nodes.Awning_2__17__4.geometry} material={materials.Awnings_2} position={[-750, 350, -575]} rotation={[0, 0, Math.PI / 2]} />
          <mesh geometry={nodes.Awning_2__18__4.geometry} material={materials.Awnings_2} position={[-750, 350, -825]} rotation={[0, 0, Math.PI / 2]} />
          <mesh geometry={nodes.Awning_2__19__4.geometry} material={materials.Awnings_2} position={[-750, 350, -1075]} rotation={[0, 0, Math.PI / 2]} />
          <mesh geometry={nodes.Awning_2__20__4.geometry} material={materials.Awnings_2} position={[-750, 350, -1325]} rotation={[0, 0, Math.PI / 2]} />
          <mesh geometry={nodes.Awning_2__21__4.geometry} material={materials.Awnings_2} position={[-750, -350, -575]} rotation={[0, 0, Math.PI / 2]} />
          <mesh geometry={nodes.Awning_2__22__4.geometry} material={materials.Awnings_2} position={[-750, -350, -825]} rotation={[0, 0, Math.PI / 2]} />
          <mesh geometry={nodes.Awning_2__23__4.geometry} material={materials.Awnings_2} position={[-750, -350, -1075]} rotation={[0, 0, Math.PI / 2]} />
          <mesh geometry={nodes.Awning_2__24__4.geometry} material={materials.Awnings_2} position={[-750, -350, -1325]} rotation={[0, 0, Math.PI / 2]} />
          <mesh geometry={nodes.Awning_2__4__3.geometry} material={materials.Awnings_2} position={[350, 750, -325]} />
          <mesh geometry={nodes.Awning_2__5__3.geometry} material={materials.Awnings_2} position={[-350, 750, -325]} />
          <mesh geometry={nodes.Awning_2__6__2.geometry} material={materials.Awnings_2} position={[350, 750, -575]} />
          <mesh geometry={nodes.Awning_2__7__2.geometry} material={materials.Awnings_2} position={[350, 750, -825]} />
          <mesh geometry={nodes.Awning_2__8__2.geometry} material={materials.Awnings_2} position={[350, 750, -1075]} />
          <mesh geometry={nodes.Awning_2__9__2.geometry} material={materials.Awnings_2} position={[350, 750, -1325]} />
          <mesh geometry={nodes.Airing_4__10__1.geometry} material={materials.Airing} position={[299.998, 250, -1588.5]} rotation={[0, 0, -Math.PI]} />
          <mesh geometry={nodes.Airing_4__11__1.geometry} material={materials.Airing} position={[-300.002, 249.997, -1588.5]} rotation={[0, 0, -Math.PI]} />
          <mesh geometry={nodes.Airing_4__12__1.geometry} material={materials.Airing} position={[-400.002, 249.997, -1588.5]} rotation={[0, 0, -Math.PI]} />
          <mesh geometry={nodes.Airing_4__13__1.geometry} material={materials.Airing} position={[400.001, -450, -1588.5]} rotation={[0, 0, -Math.PI]} />
          <mesh geometry={nodes.Airing_4__14__1.geometry} material={materials.Airing} position={[300.001, -450, -1588.5]} rotation={[0, 0, -Math.PI]} />
          <mesh geometry={nodes.Airing_4__15__1.geometry} material={materials.Airing} position={[-299.999, -450.003, -1588.5]} rotation={[0, 0, -Math.PI]} />
          <mesh geometry={nodes.Airing_4__16__1.geometry} material={materials.Airing} position={[-399.999, -450.003, -1588.5]} rotation={[0, 0, -Math.PI]} />
          <mesh geometry={nodes.Airing_4__1__8.geometry} material={materials.Airing} position={[-400, -250, -1588.5]} />
          <mesh geometry={nodes.Airing_4__2__8.geometry} material={materials.Airing} position={[-300, -250, -1588.5]} />
          <mesh geometry={nodes.Airing_4__3__8.geometry} material={materials.Airing} position={[300, -250, -1588.5]} />
          <mesh geometry={nodes.Airing_4__4__7.geometry} material={materials.Airing} position={[400, -250, -1588.5]} />
          <mesh geometry={nodes.Airing_4__5_.geometry} material={materials.Airing} position={[-400, 450, -1588.5]} />
          <mesh geometry={nodes.Airing_4__6_.geometry} material={materials.Airing} position={[-300, 450, -1588.5]} />
          <mesh geometry={nodes.Airing_4__7_.geometry} material={materials.Airing} position={[300, 450, -1588.5]} />
          <mesh geometry={nodes.Airing_4__8_.geometry} material={materials.Airing} position={[400, 450, -1588.5]} />
          <mesh geometry={nodes.Airing_4__9__1.geometry} material={materials.Airing} position={[399.998, 250, -1588.5]} rotation={[0, 0, -Math.PI]} />
          <mesh geometry={nodes.Building_8_Boards_1.geometry} material={materials.Parts} />
          <mesh geometry={nodes.Building_8_Decor_1_1.geometry} material={materials.Walls_4} />
          <mesh geometry={nodes.Building_8_Doors_1.geometry} material={materials.Doors} />
          <mesh geometry={nodes.Building_8_Plinth_1.geometry} material={materials.Plinth_3} />
          <mesh geometry={nodes.Building_8_Roof_1.geometry} material={materials.Roof} />
          <mesh geometry={nodes.Building_8_Stairs_1.geometry} material={materials.Stairs} />
          <mesh geometry={nodes.Building_8_Walls_1_1.geometry} material={materials.Walls_2_3} />
          <mesh geometry={nodes.Building_8_Walls_2_1.geometry} material={materials.Walls_5} />
          <mesh geometry={nodes.Building_8_Walls_3_1.geometry} material={materials.Walls_5_2} />
          <mesh geometry={nodes.Building_8_Walls_4_1.geometry} material={materials.Walls_5_2} />
          <mesh geometry={nodes.Building_8_Windows_1.geometry} material={materials.Windows} />
          <mesh geometry={nodes.Shutter_4_2__10__1.geometry} material={materials.Shutters} position={[-706, 50, -1285]} rotation={[0, 0, -1.46]} />
          <mesh geometry={nodes.Shutter_4_2__1__2.geometry} material={materials.Shutters} position={[46, 705.2, -290]} rotation={[0, 0, -3.031]} />
          <mesh geometry={nodes.Shutter_4_2__2__2.geometry} material={materials.Shutters} position={[46, 705.2, -538.5]} rotation={[0, 0, -3.107]} />
          <mesh geometry={nodes.Shutter_4_2__3__2.geometry} material={materials.Shutters} position={[46, 705.2, -788]} rotation={[0, 0, -3.031]} />
          <mesh geometry={nodes.Shutter_4_2__4__1.geometry} material={materials.Shutters} position={[46, 705.2, -1037]} rotation={[0, 0, -2.856]} />
          <mesh geometry={nodes.Shutter_4_2__5__1.geometry} material={materials.Shutters} position={[46, 705.2, -1285]} rotation={[0, 0, -3.031]} />
          <mesh geometry={nodes.Shutter_4_2__6__1.geometry} material={materials.Shutters} position={[-706, 50, -290]} rotation={[0, 0, -1.46]} />
          <mesh geometry={nodes.Shutter_4_2__7__1.geometry} material={materials.Shutters} position={[-706, 50, -538.5]} rotation={[0, 0, -1.537]} />
          <mesh geometry={nodes.Shutter_4_2__8__1.geometry} material={materials.Shutters} position={[-706, 50, -788]} rotation={[0, 0, -1.46]} />
          <mesh geometry={nodes.Shutter_4_2__9__1.geometry} material={materials.Shutters} position={[-706, 50, -1037]} rotation={[0, 0, -1.285]} />
        </group>
      </group>
    )
  }
  export function Palm1(props) {
    const { nodes, materials } = useGLTF('/assets/models/resort-trees.glb')
    return (
      <group {...props} dispose={null}>
        <mesh geometry={nodes.Palm_5.geometry} material={materials.Palms} position={[0, 0, 0]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      </group>
        
    )
  }
  export function Palm2(props) {
  
    const { nodes, materials } = useGLTF('/assets/models/resort-trees.glb')
    return (
      <group {...props} dispose={null}>
            <mesh geometry={nodes.Palm_4.geometry} material={materials.Palms} position={[0, 0, 0]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />

      </group>
        
    )
  }
  export function Palm3(props) {
  
    const { nodes, materials } = useGLTF('/assets/models/resort-trees.glb')
    return (
      <group {...props} dispose={null}>
                  <mesh geometry={nodes.Palm_3.geometry} material={materials.Palms} position={[0 ,0, 0]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />


      </group>
        
    )
  }
  export function Palm4(props) {
    const { nodes, materials } = useGLTF('/assets/models/resort-trees.glb')
    return (
      <group {...props} dispose={null}>
        <mesh geometry={nodes.Palm_2.geometry} material={materials.Palms} position={[0, 0, 0]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      </group>
        
    )
  }
  export function Palm5(props) {
    const { nodes, materials } = useGLTF('/assets/models/resort-trees.glb')
    return (
      <group {...props} dispose={null}>
              <mesh geometry={nodes.Palm_1.geometry} material={materials.Palms} position={[0, 0 ,0]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      </group>
        
    )
  }
  export function Grass(props) {
    const { nodes, materials } = useGLTF('/assets/models/resort-trees.glb')
    return (
      <group {...props} dispose={null}>
        <mesh geometry={nodes.Grass.geometry} material={materials.Plants} position={[0, 0 ,0]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      </group>
        
    )
  }
  export function Clumb1(props) {
    const { nodes, materials } = useGLTF('/assets/models/resort-trees.glb')
    return (
      <group {...props} dispose={null}>
        <mesh geometry={nodes.Clumb_8.geometry} material={materials.Clumbs} position={[0, 0, 0]} rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
            <mesh geometry={nodes.Bush_1.geometry} material={materials.Plants} position={[0, 0, -76.4]} scale={[1.335, 1.35, 1.35]} />
        </mesh>
      </group>
        
    )
  }
  export function Clumb2(props) {
    const { nodes, materials } = useGLTF('/assets/models/resort-trees.glb')
    return (
      <group {...props} dispose={null}>
        <mesh geometry={nodes.Clumb_7.geometry} material={materials.Clumbs} position={[0, 0, 0]} rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
            <mesh geometry={nodes.Bush_2.geometry} material={materials.Plants} position={[0, 0, -70.2]} scale={1.3} />
        </mesh>
      </group>
        
    )
  }
  export function Clumb3(props) {
    const { nodes, materials } = useGLTF('/assets/models/resort-trees.glb')
    return (
      <group {...props} dispose={null}>
        <mesh geometry={nodes.Clumb_6.geometry} material={materials.Clumbs} position={[0, 0, 0]} rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
            <mesh geometry={nodes.Bush_3.geometry} material={materials.Plants} position={[0, 0, -27.6]} />
        </mesh>
      </group>
        
    )
  }
  export function Clumb4(props) {
    const { nodes, materials } = useGLTF('/assets/models/resort-trees.glb')
    return (
      <group {...props} dispose={null}>
        <mesh geometry={nodes.Clumb_5.geometry} material={materials.Clumbs} position={[0, 0, 0]} rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
            <mesh geometry={nodes.Palm_5_1.geometry} material={materials.Palms} position={[0, 0, -32]} />
        </mesh>
      </group>
        
    )
  }
  export function Clumb5(props) {
    const { nodes, materials } = useGLTF('/assets/models/resort-trees.glb')
    return (
      <group {...props} dispose={null}>
        <mesh geometry={nodes.Clumb_4.geometry} material={materials.Clumbs} position={[0, 0, 0]} rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
            <mesh geometry={nodes.Palm_4_1.geometry} material={materials.Palms} position={[0, 0, -27.4]} />
        </mesh>
      </group>
        
    )
  }
  export function Clumb6(props) {
    const { nodes, materials } = useGLTF('/assets/models/resort-trees.glb')
    return (
      <group {...props} dispose={null}>
        <mesh geometry={nodes.Clumb_3.geometry} material={materials.Clumbs} position={[0, 0, 0]} rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
            <mesh geometry={nodes.Palm_3_1.geometry} material={materials.Palms} position={[8.2, 4.8, -36.2]} />
        </mesh>
      </group>
        
    )
  }
  export function Clumb7(props) {
    const { nodes, materials } = useGLTF('/assets/models/resort-trees.glb')
    return (
      <group {...props} dispose={null}>
        <mesh geometry={nodes.Clumb_2.geometry} material={materials.Clumbs} position={[0, 0, 0]} rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
            <mesh geometry={nodes.Palm_2_1.geometry} material={materials.Palms} position={[-6, 4, -36.2]} />
        </mesh>
      </group>
        
    )
  }
  export function Clumb8(props) {
    const { nodes, materials } = useGLTF('/assets/models/resort-trees.glb')
    return (
      <group {...props} dispose={null}>
        <mesh geometry={nodes.Clumb_1.geometry} material={materials.Clumbs} position={[0, 0, 0]} rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
            <mesh geometry={nodes.Palm_1_1.geometry} material={materials.Palms} position={[0, 0, -34.7]} />
        </mesh>
      </group>   
    )
  }
  export function Bush1(props) {
    const { nodes, materials } = useGLTF('/assets/models/resort-trees.glb')
    return (
      <group {...props} dispose={null}>
              <mesh geometry={nodes.Bush_3_1.geometry} material={materials.Plants} position={[0, 0, 0]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      </group>   
    )
  }
  export function Bush2(props) {
    const { nodes, materials } = useGLTF('/assets/models/resort-trees.glb')
    return (
      <group {...props} dispose={null}>
        <mesh geometry={nodes.Bush_2_1.geometry} material={materials.Plants} position={[0, 0, 0]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      </group>   
    )
  }
  export function Bush3(props) {
    const { nodes, materials } = useGLTF('/assets/models/resort-trees.glb')
    return (
      <group {...props} dispose={null}>
              <mesh geometry={nodes.Bush_1_1.geometry} material={materials.Plants} position={[0, 0, 0]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />

      </group>   
    )
  }
  useGLTF.preload('/assets/models/resort-trees.glb')