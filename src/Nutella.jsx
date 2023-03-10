/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 public/nutella.gltf -r public
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/nutella.gltf')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Plane.geometry} material={materials.Material} scale={[25, 1, 25]} />
      <mesh geometry={nodes.Bottle.geometry} material={materials['Material.002']} position={[0.18, 1, 0]} scale={[0.68, 1, 1]} />
      <mesh geometry={nodes.Plane001.geometry} material={materials['Material.006']} position={[0.78, 0.88, 0]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[1.05, 1, 0.5]} />
      <group position={[0.18, 2.17, 0]}>
        <mesh geometry={nodes.Torus_1.geometry} material={materials['Material.007']} />
        <mesh geometry={nodes.Torus_2.geometry} material={materials['Material.008']} />
      </group>
    </group>
  )
}

useGLTF.preload('/nutella.gltf')
