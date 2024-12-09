import { Canvas } from "@react-three/fiber";

import { ScrollControls } from "@react-three/drei";
import { Experience } from "./Experience";

const CanvasContainer = () => {
  return (
    <>
      <Canvas
        camera={{
          position: [
            -0.21995446406188054, -0.14867014606394266, 5.343671916787173,
          ],
          near: 0.1, // 近距離クリッピング平面を小さく設定
          far: 100, // 遠距離クリッピング平面を適切に設定
        }}
      >
        <ambientLight intensity={3} />
        <ScrollControls pages={4} damping={0.1} maxSpeed={0.5}>
          <Experience />
        </ScrollControls>
      </Canvas>
    </>
  );
};

export default CanvasContainer;
