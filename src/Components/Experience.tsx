import { useScroll } from "@react-three/drei";
import { useRef } from "react";
import Mew from "../../public/Model/Mew";
import { Title } from "./Title";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export const Experience = () => {
  const sceneContainer = useRef<THREE.Group>(null!); // 型を明示的に設定

  const scrollData = useScroll();

  //奥行きを表現するため-(マイナスの値)を使う
  const SECTIONS_DISTANCE = -10;

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
        {/* HOME */}
        <group>
          <Title position={[-1.5, 3, 0]} text="01" />
        </group>
        {/* SKILLS */}
        <group position-z={SECTIONS_DISTANCE}>
          <Title position={[1.3, 2, 0]} text="02" />
        </group>
        {/* PROJECTS */}
        <group position-z={2 * SECTIONS_DISTANCE}>
          <Title position={[-1.5, -3, 0]} text="03" />
        </group>
        {/* CONTACT */}
        <group position-z={3 * SECTIONS_DISTANCE}>
          <Title position={[1.3, -2, 0]} text="04" />
        </group>
      </group>
    </>
  );
};
