import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Text, Float, Environment } from "@react-three/drei";
import * as THREE from "three";

const skills = [
  "Python", "Go", "Rust", "TypeScript", "Node.js",
  "Docker", "K8s", "AWS", "PostgreSQL", "Redis",
  "MongoDB", "React", "Linux", "Git", "Nginx",
  "FastAPI", "GraphQL", "Kafka", "Terraform", "gRPC",
];

function SkillTag({ text, position, speed }) {
  const ref = useRef(null);
  const startAngle = useRef(Math.random() * Math.PI * 2);

  useFrame(({ clock }) => {
    if (!ref.current) return;
    const t = clock.getElapsedTime() * speed + startAngle.current;
    const radius = 3.5;
    const x = Math.sin(t) * radius;
    const z = Math.cos(t) * radius;
    const y = Math.sin(t * 0.7) * 1.5;
    ref.current.position.set(x, y, z);
    ref.current.lookAt(0, 0, 0);
  });

  return (
    <Text
      ref={ref}
      position={position}
      fontSize={0.25}
      color="#22c55e"
      anchorX="center"
      anchorY="middle"
      fillOpacity={0.8}
    >
      {text}
    </Text>
  );
}

function CenterGlow() {
  const ref = useRef(null);

  useFrame(({ clock }) => {
    if (!ref.current) return;
    ref.current.scale.setScalar(1 + Math.sin(clock.getElapsedTime() * 0.5) * 0.1);
  });

  return (
    <mesh ref={ref}>
      <sphereGeometry args={[0.15, 16, 16]} />
      <meshBasicMaterial color="#22c55e" transparent opacity={0.6} />
    </mesh>
  );
}

function ConnectionLines() {
  const points = useMemo(() => {
    const count = 60;
    const positions = [];
    for (let i = 0; i < count; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const r = 2.5 + Math.random() * 1.5;
      positions.push(
        r * Math.sin(phi) * Math.cos(theta),
        r * Math.cos(phi),
        r * Math.sin(phi) * Math.sin(theta)
      );
    }
    return positions;
  }, []);

  const lineRef = useRef(null);

  useFrame(({ clock }) => {
    if (!lineRef.current) return;
    lineRef.current.rotation.y = clock.getElapsedTime() * 0.03;
    lineRef.current.rotation.x = Math.sin(clock.getElapsedTime() * 0.02) * 0.1;
  });

  const positions = useMemo(() => {
    const arr = [];
    for (let i = 0; i < points.length - 1; i += 2) {
      arr.push(points[i * 3], points[i * 3 + 1], points[i * 3 + 2]);
      arr.push(points[i * 3 + 3], points[i * 3 + 4], points[i * 3 + 5]);
    }
    return new Float32Array(arr);
  }, [points]);

  return (
    <lineSegments ref={lineRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <lineBasicMaterial color="#22c55e" transparent opacity={0.1} />
    </lineSegments>
  );
}

function SkillSphere() {
  const groupRef = useRef(null);

  useFrame(({ clock }) => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y = clock.getElapsedTime() * 0.08;
    groupRef.current.rotation.x = Math.sin(clock.getElapsedTime() * 0.03) * 0.1;
  });

  return (
    <group ref={groupRef}>
      <CenterGlow />
      <ConnectionLines />
      {skills.map((skill, i) => {
        const angle = (i / skills.length) * Math.PI * 2;
        const radius = 2.5 + Math.random() * 0.5;
        return (
          <SkillTag
            key={skill}
            text={skill}
            position={[Math.cos(angle) * radius, Math.sin(angle * 2) * 0.8, Math.sin(angle) * radius]}
            speed={0.08 + Math.random() * 0.04}
          />
        );
      })}
    </group>
  );
}

export default function SkillOrbit() {
  return (
    <div className="w-full h-[400px] md:h-[500px]">
      <Canvas
        camera={{ position: [0, 0, 7], fov: 50 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={0.3} />
        <SkillSphere />
        <Environment preset="night" />
      </Canvas>
    </div>
  );
}
