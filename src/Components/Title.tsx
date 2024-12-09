import { Text } from "@react-three/drei";
import { FC } from "react";

// Props の型定義
interface TitleProps {
  position: [number, number, number]; // Three.js の座標を表現するタプル型
  text: string; // 表示するテキスト
}

// FC（Functional Component）の型を使用
export const Title: FC<TitleProps> = ({ position, text }) => {
  return (
    <Text position={position} fontSize={1}>
      {text}
      <meshStandardMaterial color="white" />
    </Text>
  );
};
