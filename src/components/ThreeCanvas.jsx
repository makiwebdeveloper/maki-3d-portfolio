import { ScrollControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Room from "./Room";

export default function ThreeCanvas() {
  return (
    <Canvas shadows>
      {/* <OrbitControls /> */}
      <ScrollControls pages={3}>
        <Room />
      </ScrollControls>
    </Canvas>
  );
}
