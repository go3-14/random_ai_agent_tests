import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { TorusKnot, Environment, Float } from "@react-three/drei";
import { useMotionValue, useSpring } from "framer-motion";

function TorusKnot3D({ mouseX, mouseY }) {
  const meshRef = useRef(null);

  useFrame(({ clock }) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.x = clock.getElapsedTime() * 0.15 + mouseY.get() * 0.005;
    meshRef.current.rotation.y = clock.getElapsedTime() * 0.1 + mouseX.get() * 0.005;
    meshRef.current.rotation.z = Math.sin(clock.getElapsedTime() * 0.05) * 0.1;
  });

  return (
    <Float speed={0.5} floatIntensity={0.3}>
      <TorusKnot
        ref={meshRef}
        args={[1.2, 0.4, 128, 16]}
        position={[0, 0, 0]}
      >
        <meshStandardMaterial
          color="#22c55e"
          wireframe
          emissive="#22c55e"
          emissiveIntensity={0.25}
          roughness={0.3}
          metalness={0.8}
          transparent
          opacity={0.7}
        />
      </TorusKnot>
    </Float>
  );
}

function Particles() {
  const count = 200;
  const positions = new Float32Array(count * 3);

  for (let i = 0; i < count; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 15;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 15;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 10 - 2;
  }

  return (
    <points>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.02}
        color="#22c55e"
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  );
}

export default function HeroScene() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 150, damping: 15 });
  const springY = useSpring(mouseY, { stiffness: 150, damping: 15 });

  return (
    <div
      className="absolute inset-0 pointer-events-none"
      onMouseMove={(e) => {
        const x = (e.clientX / window.innerWidth - 0.5) * 2;
        const y = (e.clientY / window.innerHeight - 0.5) * 2;
        mouseX.set(x);
        mouseY.set(y);
      }}
    >
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={0.2} />
        <pointLight position={[5, 5, 5]} intensity={1} color="#22c55e" />
        <pointLight position={[-5, -5, -5]} intensity={0.5} color="#22c55e" />
        <TorusKnot3D mouseX={springX} mouseY={springY} />
        <Particles />
        <Environment preset="night" />
      </Canvas>
    </div>
  );
}
