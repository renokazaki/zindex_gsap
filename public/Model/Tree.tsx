import * as THREE from "three";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    _6_tree__6_tree_0: THREE.Mesh;
  };
  materials: {
    ["6_tree"]: THREE.MeshStandardMaterial;
  };
};

const Tree = (props: JSX.IntrinsicElements["group"]) => {
  const { nodes, materials } = useGLTF("/Model/tree.glb") as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <group scale={0.01}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes._6_tree__6_tree_0.geometry}
          material={materials["6_tree"]}
          position-y={-500}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={30.486}
        />
      </group>
    </group>
  );
};

useGLTF.preload("/Model/tree.glb");
export default Tree;
