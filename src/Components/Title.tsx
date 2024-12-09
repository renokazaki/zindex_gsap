import { Text } from "@react-three/drei";

export const Title = ({ position, text }) => {
  return (
    <Text position={position}>
      {text}
      <meshStandardMaterial color="white" />
    </Text>
  );
};
