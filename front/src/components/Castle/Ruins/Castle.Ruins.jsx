import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/assets/models/ModularRuinsPack.glb')
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh geometry={nodes.Wall_Half_1.geometry} material={materials.Highlights} />
        <mesh geometry={nodes.Wall_Half_2.geometry} material={materials.Main} />
      </group>
      <group position={[2.658, 0, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh geometry={nodes.Trapdoor_1.geometry} material={materials.Metal} />
        <mesh geometry={nodes.Trapdoor_2.geometry} material={materials.DarkWood} />
        <mesh geometry={nodes.Trapdoor_3.geometry} material={materials.Wood} />
        <mesh geometry={nodes.Trapdoor_4.geometry} material={materials.Black} />
      </group>
      <mesh geometry={nodes.Grass.geometry} material={materials.Green} position={[5.017, 0, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
      <mesh geometry={nodes.Bush_Large.geometry} material={materials.Texture_Leaves} position={[7.51, 0, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
      <group position={[10.097, 0, 0]} rotation={[Math.PI, 0, 0]} scale={[100, 100, 5.973]}>
        <mesh geometry={nodes.Brick_1.geometry} material={materials.Highlights} />
        <mesh geometry={nodes.Brick_2.geometry} material={materials.Main} />
      </group>
      <group position={[12.658, 0, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={[100, 100, 5.973]}>
        <mesh geometry={nodes.Floor_Tree_1.geometry} material={materials.Highlights} />
        <mesh geometry={nodes.Floor_Tree_2.geometry} material={materials.Main} />
        <mesh geometry={nodes.Floor_Tree_3.geometry} material={materials.Main2} />
        <mesh geometry={nodes.Floor_Tree_4.geometry} material={materials.Dirt} />
      </group>
      <group position={[15.939, 0, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh geometry={nodes.Wall_Overgrown_1.geometry} material={materials.Highlights} />
        <mesh geometry={nodes.Wall_Overgrown_2.geometry} material={materials.Main} />
        <mesh geometry={nodes.Wall_Overgrown_3.geometry} material={materials.Green} />
        <mesh geometry={nodes.Wall_Overgrown_4.geometry} material={materials.Leaf_Texture} />
      </group>
      <group position={[19.219, 0, 0]} rotation={[Math.PI, 0, 0]} scale={[100, 100, 5.973]}>
        <mesh geometry={nodes.Window_Open_1.geometry} material={materials.Highlights} />
        <mesh geometry={nodes.Window_Open_2.geometry} material={materials.Main} />
      </group>
      <group position={[22.505, 0, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh geometry={nodes.Wall_Hole_1.geometry} material={materials.Highlights} />
        <mesh geometry={nodes.Wall_Hole_2.geometry} material={materials.Main} />
      </group>
      <group position={[25.788, 0, 0]} rotation={[Math.PI, 0, 0]} scale={[100, 100, 5.973]}>
        <mesh geometry={nodes.Window_Open_Double_1.geometry} material={materials.Highlights} />
        <mesh geometry={nodes.Window_Open_Double_2.geometry} material={materials.Main} />
      </group>
      <group position={[29.068, 0, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh geometry={nodes.Window_Bars_Double_Overgrown_1.geometry} material={materials.Highlights} />
        <mesh geometry={nodes.Window_Bars_Double_Overgrown_2.geometry} material={materials.Main} />
        <mesh geometry={nodes.Window_Bars_Double_Overgrown_3.geometry} material={materials.Metal} />
        <mesh geometry={nodes.Window_Bars_Double_Overgrown_4.geometry} material={materials.Green} />
        <mesh geometry={nodes.Window_Bars_Double_Overgrown_5.geometry} material={materials.Leaf_Texture} />
      </group>
      <group position={[32.367, 0, 0]} rotation={[Math.PI, 0, 0]} scale={[100, 100, 5.973]}>
        <mesh geometry={nodes.Window_Bars_Overgrown_1.geometry} material={materials.Highlights} />
        <mesh geometry={nodes.Window_Bars_Overgrown_2.geometry} material={materials.Main} />
        <mesh geometry={nodes.Window_Bars_Overgrown_3.geometry} material={materials.Metal} />
        <mesh geometry={nodes.Window_Bars_Overgrown_4.geometry} material={materials.Green} />
        <mesh geometry={nodes.Window_Bars_Overgrown_5.geometry} material={materials.Leaf_Texture} />
      </group>
      <group position={[35.648, 0, 0]} rotation={[Math.PI, 0, 0]} scale={[100, 100, 5.973]}>
        <mesh geometry={nodes.Window_Bars_1.geometry} material={materials.Highlights} />
        <mesh geometry={nodes.Window_Bars_2.geometry} material={materials.Main} />
        <mesh geometry={nodes.Window_Bars_3.geometry} material={materials.Metal} />
      </group>
      <group position={[39.932, 0, 0]} scale={[100, 100, 5.973]}>
        <mesh geometry={nodes.Wall_ArchRound_Broken_1.geometry} material={materials.Highlights} />
        <mesh geometry={nodes.Wall_ArchRound_Broken_2.geometry} material={materials.Main} />
      </group>
      <mesh geometry={nodes.DeadTree_3.geometry} material={materials.Bark} position={[2.39, 0, 6]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
      <mesh geometry={nodes.DeadTree_2.geometry} material={materials.Bark} position={[5.491, 0, 6]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
      <mesh geometry={nodes.DeadTree_1.geometry} material={materials.Bark} position={[8.456, 0, 6]} rotation={[-Math.PI / 2, 0, 0]} scale={50} />
      <group position={[11.445, 0, 6]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh geometry={nodes.Tree_3_1.geometry} material={materials.Bark} />
        <mesh geometry={nodes.Tree_3_2.geometry} material={materials.Texture_Leaves} />
      </group>
      <group position={[15.495, 0, 6]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh geometry={nodes.Tree_2_1.geometry} material={materials.Bark} />
        <mesh geometry={nodes.Tree_2_2.geometry} material={materials.Texture_Leaves} />
      </group>
      <group position={[19.254, 0, 6]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh geometry={nodes.Tree_1_1.geometry} material={materials.Bark} />
        <mesh geometry={nodes.Tree_1_2.geometry} material={materials.Texture_Leaves} />
      </group>
      <mesh geometry={nodes.Bush_2x2.geometry} material={materials.Texture_Leaves} position={[22.34, 0, 6]} rotation={[-Math.PI / 2, 0, Math.PI]} scale={100} />
      <mesh geometry={nodes.Bush_2x1.geometry} material={materials.Texture_Leaves} position={[25.134, 0, 6]} rotation={[-Math.PI / 2, 0, Math.PI]} scale={100} />
      <mesh geometry={nodes.Bush_1x1.geometry} material={materials.Texture_Leaves} position={[27.579, 0, 6]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
      <mesh geometry={nodes.Bush_Round.geometry} material={materials.Texture_Leaves} position={[30.087, 0, 6]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
      <group position={[0.97, 0, -6]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh geometry={nodes.Stairs_1.geometry} material={materials.Highlights} />
        <mesh geometry={nodes.Stairs_3.geometry} material={materials.Main} />
      </group>
      <group position={[4.348, 0, -6]} rotation={[-Math.PI / 2, 0, 0]} scale={[142.47, 144.036, 142.47]}>
        <mesh geometry={nodes.Stairs_2_1.geometry} material={materials.Highlights} />
        <mesh geometry={nodes.Stairs_2_2.geometry} material={materials.Main} />
      </group>
      <group position={[8.965, 0, -6]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh geometry={nodes.Curve_1_1.geometry} material={materials.Highlights} />
        <mesh geometry={nodes.Curve_1_2.geometry} material={materials.Main} />
      </group>
      <group position={[10.299, 0, -6]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh geometry={nodes.Curve_2_1.geometry} material={materials.Highlights} />
        <mesh geometry={nodes.Curve_2_2.geometry} material={materials.Main} />
      </group>
      <group position={[14.923, 0, -6]} rotation={[Math.PI, 0, 0]} scale={[100, 100, 5.973]}>
        <mesh geometry={nodes.Bricks_1.geometry} material={materials.Highlights} />
        <mesh geometry={nodes.Bricks_2.geometry} material={materials.Main} />
      </group>
      <group position={[19.239, 0, -6]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh geometry={nodes.Curve_1_Overgrown_1.geometry} material={materials.Highlights} />
        <mesh geometry={nodes.Curve_1_Overgrown_2.geometry} material={materials.Main} />
        <mesh geometry={nodes.Curve_1_Overgrown_3.geometry} material={materials.Green} />
        <mesh geometry={nodes.Curve_1_Overgrown_4.geometry} material={materials.Leaf_Texture} />
      </group>
      <group position={[20.573, 0, -6]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh geometry={nodes.Curve_2_Overgrown_1.geometry} material={materials.Highlights} />
        <mesh geometry={nodes.Curve_2_Overgrown_2.geometry} material={materials.Main} />
        <mesh geometry={nodes.Curve_2_Overgrown_3.geometry} material={materials.Green} />
        <mesh geometry={nodes.Curve_2_Overgrown_4.geometry} material={materials.Leaf_Texture} />
      </group>
      <group position={[25.14, 0, -6]} rotation={[Math.PI, 0, 0]} scale={[100, 100, 5.973]}>
        <mesh geometry={nodes.Wall_Broken_1.geometry} material={materials.Highlights} />
        <mesh geometry={nodes.Wall_Broken_2.geometry} material={materials.Main} />
      </group>
      <group position={[28.426, 0, -6]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh geometry={nodes.Wall_1.geometry} material={materials.Highlights} />
        <mesh geometry={nodes.Wall_2.geometry} material={materials.Main} />
      </group>
      <group position={[31.712, 0, -6]} rotation={[Math.PI, 0, 0]} scale={[100, 100, 5.973]}>
        <mesh geometry={nodes.Wall_Double_Hole_1.geometry} material={materials.Highlights} />
        <mesh geometry={nodes.Wall_Double_Hole_2.geometry} material={materials.Main} />
      </group>
      <group position={[34.992, 0, -6]} rotation={[Math.PI, 0, 0]} scale={[100, 100, 5.973]}>
        <mesh geometry={nodes.Wall_Double_Broken_1.geometry} material={materials.Highlights} />
        <mesh geometry={nodes.Wall_Double_Broken_2.geometry} material={materials.Main} />
      </group>
      <group position={[1.825, 0, -11]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh geometry={nodes.Arch_Gothic_1.geometry} material={materials.Highlights} />
        <mesh geometry={nodes.Arch_Gothic_2.geometry} material={materials.Main} />
        <mesh geometry={nodes.Arch_Gothic_3.geometry} material={materials.Black} />
      </group>
      <group position={[6.207, 0, -11]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh geometry={nodes.Arch_Round_RoundColumn_1.geometry} material={materials.Main} />
        <mesh geometry={nodes.Arch_Round_RoundColumn_2.geometry} material={materials.Black} />
      </group>
      <group position={[10.589, 0, -11]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh geometry={nodes.Arch_Gothic_RoundColumn_1.geometry} material={materials.Highlights} />
        <mesh geometry={nodes.Arch_Gothic_RoundColumn_2.geometry} material={materials.Main} />
        <mesh geometry={nodes.Arch_Gothic_RoundColumn_3.geometry} material={materials.Black} />
      </group>
      <group position={[14.971, 0, -11]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh geometry={nodes.Arch_Round_1.geometry} material={materials.Highlights} />
        <mesh geometry={nodes.Arch_Round_2.geometry} material={materials.Main} />
        <mesh geometry={nodes.Arch_Round_3.geometry} material={materials.Black} />
      </group>
      <group position={[19.804, 0, -11]} scale={[100, 100, 5.973]}>
        <mesh geometry={nodes.Wall_ArchRound_Overgrown_Broken_1.geometry} material={materials.Highlights} />
        <mesh geometry={nodes.Wall_ArchRound_Overgrown_Broken_2.geometry} material={materials.Main} />
        <mesh geometry={nodes.Wall_ArchRound_Overgrown_Broken_3.geometry} material={materials.Green} />
        <mesh geometry={nodes.Wall_ArchRound_Overgrown_Broken_4.geometry} material={materials.Leaf_Texture} />
      </group>
      <group position={[25.092, 0, -11]} scale={[100, 100, 5.973]}>
        <mesh geometry={nodes.Wall_ArchRound_Overgrown_1.geometry} material={materials.Highlights} />
        <mesh geometry={nodes.Wall_ArchRound_Overgrown_2.geometry} material={materials.Main} />
        <mesh geometry={nodes.Wall_ArchRound_Overgrown_3.geometry} material={materials.Green} />
        <mesh geometry={nodes.Wall_ArchRound_Overgrown_4.geometry} material={materials.Leaf_Texture} />
      </group>
      <group position={[30.386, 0, -11]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh geometry={nodes.Wall_ArchGothic_1.geometry} material={materials.Highlights} />
        <mesh geometry={nodes.Wall_ArchGothic_2.geometry} material={materials.Main} />
      </group>
      <group position={[35.68, 0, -11]} scale={[100, 100, 5.973]}>
        <mesh geometry={nodes.Wall_ArchRound_1.geometry} material={materials.Highlights} />
        <mesh geometry={nodes.Wall_ArchRound_2.geometry} material={materials.Main} />
      </group>
      
      <group position={[4.249, 0, 28]} rotation={[-Math.PI / 2, 0, 0]} scale={[100, 100, 5.973]}>
        <mesh geometry={nodes.Floor_Standard_Half_1.geometry} material={materials.Highlights} />
        <mesh geometry={nodes.Floor_Standard_Half_2.geometry} material={materials.Main} />
      </group>
      <group position={[7.54, 0, 28]} rotation={[-Math.PI / 2, 0, 0]} scale={[100, 100, 5.973]}>
        <mesh geometry={nodes.Floor_Diamond_1.geometry} material={materials.Highlights} />
        <mesh geometry={nodes.Floor_Diamond_2.geometry} material={materials.Main} />
      </group>
      
      <group position={[14.105, 0, 28]} rotation={[-Math.PI / 2, 0, 0]} scale={[100, 100, 5.973]}>
        <mesh geometry={nodes.Floor_Hole_Corner_1.geometry} material={materials.Highlights} />
        <mesh geometry={nodes.Floor_Hole_Corner_2.geometry} material={materials.Main} />
      </group>
      <group position={[17.395, 0, 28]} rotation={[-Math.PI / 2, 0, 0]} scale={[100, 100, 5.973]}>
        <mesh geometry={nodes.Floor_Hole_Straight_1.geometry} material={materials.Highlights} />
        <mesh geometry={nodes.Floor_Hole_Straight_2.geometry} material={materials.Main} />
      </group>
      <mesh geometry={nodes.Floor_SquareLarge.geometry} material={materials.Main} position={[20.675, 0, 28]} rotation={[-Math.PI / 2, 0, 0]} scale={[100, 100, 5.973]} />
      <mesh geometry={nodes.BearTrap_Open.geometry} material={materials.Metal} position={[23.552, 0, 28]} rotation={[-Math.PI / 2, 0, 0]} scale={79.577} />
      <mesh geometry={nodes.BearTrap_Closed.geometry} material={materials.Metal} position={[26.004, 0, 28]} rotation={[-Math.PI / 2, 0, 0]} scale={79.577} />
      <mesh geometry={nodes.Statue_Stag.geometry} material={materials.Stone} position={[-5.433, 0, -11]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
      <mesh geometry={nodes.Statue_Fox.geometry} material={materials.Stone} position={[-2.95, 0, -11]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
      <group position={[0.479, 0, 38]} rotation={[-Math.PI / 2, 0, 0]} scale={9.909}>
        <mesh geometry={nodes.Candles_1_1.geometry} material={materials.Black} />
        <mesh geometry={nodes.Candles_1_2.geometry} material={materials.Candle} />
        <mesh geometry={nodes.Candles_1_3.geometry} material={materials.Light} />
      </group>
      <group position={[2.754, 0, 38]} rotation={[-Math.PI / 2, 0, 0]} scale={9.909}>
        <mesh geometry={nodes.Candles_2_1.geometry} material={materials.Black} />
        <mesh geometry={nodes.Candles_2_2.geometry} material={materials.Candle} />
        <mesh geometry={nodes.Candles_2_3.geometry} material={materials.Light} />
      </group>
      <group position={[5.122, 0, 38]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh geometry={nodes.Chest_Base_1.geometry} material={materials.Metal} />
        <mesh geometry={nodes.Chest_Base_2.geometry} material={materials.DarkWood} />
        <mesh geometry={nodes.Chest_Base_3.geometry} material={materials.Wood} />
      </group>
      <group position={[7.57, 0, 38]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh geometry={nodes.Chest_Top_1.geometry} material={materials.DarkWood} />
        <mesh geometry={nodes.Chest_Top_2.geometry} material={materials.Wood} />
      </group>
      <group position={[10.024, 0, 38]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh geometry={nodes.Chest_Gold_Base_1.geometry} material={materials.Metal} />
        <mesh geometry={nodes.Chest_Gold_Base_2.geometry} material={materials.DarkWood} />
        <mesh geometry={nodes.Chest_Gold_Base_3.geometry} material={materials.Wood} />
        <mesh geometry={nodes.Chest_Gold_Base_4.geometry} material={materials.Gold} />
      </group>
      <group position={[12.472, 0, 38]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh geometry={nodes.Chest_Gold_Top_1.geometry} material={materials.DarkWood} />
        <mesh geometry={nodes.Chest_Gold_Top_2.geometry} material={materials.Wood} />
      </group>
      <group position={[0.68, 0, 13]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh geometry={nodes.Column_Square_1.geometry} material={materials.Highlights} />
        <mesh geometry={nodes.Column_Square_2.geometry} material={materials.Main} />
      </group>
      <mesh geometry={nodes.Column_Round.geometry} material={materials.Main} position={[2.627, 0, 13]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
      <group position={[4.585, 0, 13]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh geometry={nodes.Column_BridgeSupport_1.geometry} material={materials.Highlights} />
        <mesh geometry={nodes.Column_BridgeSupport_2.geometry} material={materials.Main} />
      </group>
      <mesh geometry={nodes.Column_Round_Short.geometry} material={materials.Main} position={[6.559, 0, 13]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
      <group position={[9.362, 0, 13]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh geometry={nodes.Doors_RoundArch_Covered_1.geometry} material={materials.Metal} />
        <mesh geometry={nodes.Doors_RoundArch_Covered_2.geometry} material={materials.DarkWood} />
        <mesh geometry={nodes.Doors_RoundArch_Covered_3.geometry} material={materials.Wood} />
        <mesh geometry={nodes.Doors_RoundArch_Covered_4.geometry} material={materials.Metal_Light} />
      </group>
      <group position={[13.174, 0, 13]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh geometry={nodes.Doors_GothicArch_Covered_1.geometry} material={materials.Metal} />
        <mesh geometry={nodes.Doors_GothicArch_Covered_2.geometry} material={materials.DarkWood} />
        <mesh geometry={nodes.Doors_GothicArch_Covered_3.geometry} material={materials.Wood} />
        <mesh geometry={nodes.Doors_GothicArch_Covered_4.geometry} material={materials.Metal_Light} />
      </group>
      <group position={[15.876, 0, 13]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh geometry={nodes.Doors_GothicArch_L_1.geometry} material={materials.Metal} />
        <mesh geometry={nodes.Doors_GothicArch_L_2.geometry} material={materials.DarkWood} />
        <mesh geometry={nodes.Doors_GothicArch_L_3.geometry} material={materials.Wood} />
        <mesh geometry={nodes.Doors_GothicArch_L_4.geometry} material={materials.Metal_Light} />
      </group>
      <group position={[19.146, 0, 13]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh geometry={nodes.Doors_GothicArch_R_1.geometry} material={materials.Metal} />
        <mesh geometry={nodes.Doors_GothicArch_R_2.geometry} material={materials.DarkWood} />
        <mesh geometry={nodes.Doors_GothicArch_R_3.geometry} material={materials.Wood} />
        <mesh geometry={nodes.Doors_GothicArch_R_4.geometry} material={materials.Metal_Light} />
      </group>
      <group position={[20.749, 0, 13]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh geometry={nodes.Doors_RoundArch_L_1.geometry} material={materials.Metal} />
        <mesh geometry={nodes.Doors_RoundArch_L_2.geometry} material={materials.DarkWood} />
        <mesh geometry={nodes.Doors_RoundArch_L_3.geometry} material={materials.Wood} />
        <mesh geometry={nodes.Doors_RoundArch_L_4.geometry} material={materials.Metal_Light} />
      </group>
      <group position={[24.019, 0, 13]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh geometry={nodes.Doors_RoundArch_R_1.geometry} material={materials.Metal} />
        <mesh geometry={nodes.Doors_RoundArch_R_2.geometry} material={materials.DarkWood} />
        <mesh geometry={nodes.Doors_RoundArch_R_3.geometry} material={materials.Wood} />
        <mesh geometry={nodes.Doors_RoundArch_R_4.geometry} material={materials.Metal_Light} />
      </group>
      <group position={[0.858, 0, 21]} rotation={[-Math.PI / 2, 0, 0]} scale={133.286}>
        <mesh geometry={nodes.Support_Tall_1.geometry} material={materials.Highlights} />
        <mesh geometry={nodes.Support_Tall_2.geometry} material={materials.Main} />
      </group>
      <mesh geometry={nodes.Flag_RoundArch.geometry} material={materials.Flag} position={[3.635, 0, 21]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
      <mesh geometry={nodes.Flag_GothicArch.geometry} material={materials.Flag} position={[7.115, 0, 21]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
      <group position={[9.63, 0, 21]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh geometry={nodes.Support_Left_1.geometry} material={materials.Highlights} />
        <mesh geometry={nodes.Support_Left_2.geometry} material={materials.Main} />
        <mesh geometry={nodes.Support_Left_3.geometry} material={materials.Black} />
        <mesh geometry={nodes.Support_Left_4.geometry} material={materials.Main2} />
      </group>
      <group position={[13.922, 0, 21]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh geometry={nodes.Support_Center_1.geometry} material={materials.Highlights} />
        <mesh geometry={nodes.Support_Center_2.geometry} material={materials.Main} />
        <mesh geometry={nodes.Support_Center_3.geometry} material={materials.Black} />
        <mesh geometry={nodes.Support_Center_4.geometry} material={materials.Main2} />
      </group>
      <group position={[18.214, 0, 21]} rotation={[-Math.PI / 2, 0, -Math.PI]} scale={100}>
        <mesh geometry={nodes.Support_Right_1.geometry} material={materials.Highlights} />
        <mesh geometry={nodes.Support_Right_2.geometry} material={materials.Main} />
        <mesh geometry={nodes.Support_Right_3.geometry} material={materials.Black} />
        <mesh geometry={nodes.Support_Right_4.geometry} material={materials.Main2} />
      </group>
      <mesh geometry={nodes.Pot3_Broken.geometry} material={materials.Pot_Main} position={[-0.121, 0, 35]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
      <group position={[1.633, 0, 35]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh geometry={nodes.Pot3_1.geometry} material={materials.Pot_Main} />
        <mesh geometry={nodes.Pot3_2.geometry} material={materials.Pot_Detail} />
      </group>
      <group position={[3.385, 0, 35]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh geometry={nodes.Pot2_Broken_1.geometry} material={materials.Pot_Main} />
        <mesh geometry={nodes.Pot2_Broken_2.geometry} material={materials.Pot_Detail} />
      </group>
      <group position={[5.138, 0, 35]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh geometry={nodes.Pot2_1.geometry} material={materials.Pot_Main} />
        <mesh geometry={nodes.Pot2_2.geometry} material={materials.Pot_Detail} />
      </group>
      <group position={[7.044, 0, 35]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh geometry={nodes.Pot1_Broken_1.geometry} material={materials.Pot_Main} />
        <mesh geometry={nodes.Pot1_Broken_2.geometry} material={materials.Pot_Detail} />
      </group>
      <group position={[9.102, 0, 35]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh geometry={nodes.Pot1_1.geometry} material={materials.Pot_Main} />
        <mesh geometry={nodes.Pot1_2.geometry} material={materials.Pot_Detail} />
      </group>
      <group position={[11.192, 0, 35]} rotation={[-Math.PI / 2, 0, 0]} scale={525.507}>
        <mesh geometry={nodes.Barrel_1.geometry} material={materials.Metal} />
        <mesh geometry={nodes.Barrel_2.geometry} material={materials.DarkWood} />
        <mesh geometry={nodes.Barrel_3.geometry} material={materials.Wood} />
      </group>
      <group position={[13.31, 0, 35]} rotation={[-Math.PI / 2, 0, 0]} scale={514.226}>
        <mesh geometry={nodes.Crate_1.geometry} material={materials.DarkWood} />
        <mesh geometry={nodes.Crate_2.geometry} material={materials.Wood} />
      </group>
      <group position={[16.887, 0, 35]} rotation={[-1.955, 0.525, 1.127]} scale={404.383}>
        <mesh geometry={nodes.Cart_1.geometry} material={materials.Metal} />
        <mesh geometry={nodes.Cart_2.geometry} material={materials.DarkWood} />
        <mesh geometry={nodes.Cart_3.geometry} material={materials.Wood} />
      </group>
      <group position={[20.975, 0, 35]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh geometry={nodes.Flag_Wall2_1.geometry} material={materials.Metal} />
        <mesh geometry={nodes.Flag_Wall2_2.geometry} material={materials.Wood} />
        <mesh geometry={nodes.Flag_Wall2_3.geometry} material={materials.Flag} />
      </group>
      <mesh geometry={nodes.Flag_Wall.geometry} material={materials.Flag} position={[23.29, 0, 35]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
      <group position={[34.081, 0, 6]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh geometry={nodes.Bookcase_Empty_1.geometry} material={materials.DarkWood} />
        <mesh geometry={nodes.Bookcase_Empty_2.geometry} material={materials.Wood} />
      </group>
      <group position={[37.449, 0, 6]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh geometry={nodes.Bookcase_Full_1.geometry} material={materials.DarkWood} />
        <mesh geometry={nodes.Bookcase_Full_2.geometry} material={materials.Wood} />
        <mesh geometry={nodes.Bookcase_Full_3.geometry} material={materials.Book2} />
        <mesh geometry={nodes.Bookcase_Full_4.geometry} material={materials.Pages} />
        <mesh geometry={nodes.Bookcase_Full_5.geometry} material={materials.Book4} />
        <mesh geometry={nodes.Bookcase_Full_6.geometry} material={materials.Book3} />
        <mesh geometry={nodes.Bookcase_Full_7.geometry} material={materials.Book} />
      </group>
      <group position={[14.918, 0, 39]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh geometry={nodes.Torch_1.geometry} material={materials.DarkMetal} />
        <mesh geometry={nodes.Torch_2.geometry} material={materials.Fire} />
      </group>
      <mesh geometry={nodes.Skull.geometry} material={materials.Bone} position={[16.568, 0, 39]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
      <mesh geometry={nodes.Rail_Divider.geometry} material={materials.Main} position={[18.248, 0, 39]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
      <mesh geometry={nodes.Rail_Straight.geometry} material={materials.Main} position={[19.901, 0, 39]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
      <mesh geometry={nodes.Rail_Corner.geometry} material={materials.Main} position={[21.553, 0, 39]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
      <group position={[28.158, 0, 13]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh geometry={nodes.BridgeSection_1.geometry} material={materials.Highlights} />
        <mesh geometry={nodes.BridgeSection_2.geometry} material={materials.Main} />
      </group>
    </group>
  )
}

useGLTF.preload('/assets/models/ModularRuinsPack.glb')