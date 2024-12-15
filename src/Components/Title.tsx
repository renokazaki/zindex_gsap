import { Text } from "@react-three/drei";
import { FC } from "react";

// Props の型定義
interface TitleProps {
  text: string; // 表示するテキスト
}

// FC（Functional Component）の型を使用
export const Title: FC<TitleProps> = ({ text }) => {
  return (
    <Text fontSize={1}>
      {text}
      <meshStandardMaterial color="white" />
    </Text>
  );
};
