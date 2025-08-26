import { Canvas } from "@react-three/fiber";
import { Float, OrbitControls } from "@react-three/drei";
import { Suspense } from "react";

function Knot() {
  return (
    <Float speed={1.5} rotationIntensity={1} floatIntensity={1.5}>
      <mesh>
        <torusKnotGeometry args={[1.2, 0.35, 180, 32]} />
        <meshStandardMaterial color="#A855F7" metalness={0.6} roughness={0.2} />
      </mesh>
    </Float>
  );
}

export default function ThreeScene() {
  return (
    <Canvas camera={{ position: [0, 0, 6] }} className="opacity-40">
      <Suspense fallback={null}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[2, 4, 5]} intensity={1.2} />
        <Knot />
        <OrbitControls enablePan={false} enableZoom={false} enableRotate={false} />
      </Suspense>
    </Canvas>
  );
}
