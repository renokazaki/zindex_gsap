import { Scroll, useScroll } from "@react-three/drei";
import { useRef } from "react";

import Mew from "../../public/Model/Mew";
import Tree from "../../public/Model/Tree";

import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export const Experience = () => {
  const sceneContainer = useRef<THREE.Group>(null!); // 型を明示的に設定

  const scrollData = useScroll();

  //奥行きを表現するため-(マイナスの値)を使う
  const SECTIONS_DISTANCE = 10;

  useFrame(() => {
    if (sceneContainer.current) {
      sceneContainer.current.position.z =
        -scrollData.offset * SECTIONS_DISTANCE * (scrollData.pages - 1);
    }
  });

  return (
    <>
      <Mew scale={0.5} />

      <group ref={sceneContainer}>
        <Tree position={[-2, 1, 0]} />
        <group position={[-2.5, 2, 0]}>
          <Tree position={[-2, 0, 0]} />
        </group>
        <group position-z={SECTIONS_DISTANCE} position={[2.3, 2, 0]}>
          <Tree position={[2, 0, 0]} />
        </group>
        <group position-z={2 * SECTIONS_DISTANCE} position={[-1.5, -3, 0]}>
          <Tree position={[-1, 4, 0]} />
        </group>
        <group position-z={3 * SECTIONS_DISTANCE} position={[3.3, -3, 0]}>
          <Tree position={[-1, 4, 0]} />
        </group>
      </group>
      <Scroll html>
        <h1 style={{ position: "absolute", top: "0vh" }} className="page1">
          Page1
        </h1>
        <h1
          style={{ position: "absolute", top: "100vh", left: "90vw" }}
          className="page2"
        >
          Page2
        </h1>
        <h1 style={{ position: "absolute", top: "200vh" }} className="page3">
          Page1
        </h1>
        <h1
          style={{ position: "absolute", top: "300vh", left: "90vw" }}
          className="page4"
        >
          Page2
        </h1>
      </Scroll>
    </>
  );
};
