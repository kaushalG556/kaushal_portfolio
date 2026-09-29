import { useMemo, useRef } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

function ParticleField() {
  const pointsRef = useRef<THREE.Points>(null);
  const linesRef = useRef<THREE.LineSegments>(null);
  const { viewport } = useThree();

  const { positions, colors, linePositions, lineColors } = useMemo(() => {
    const count = 220;
    const spread = 18;
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const cyan = new THREE.Color('#00f0ff');
    const magenta = new THREE.Color('#ff2bd6');
    const lime = new THREE.Color('#b6ff00');

    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * spread;
      positions[i * 3 + 1] = (Math.random() - 0.5) * spread;
      positions[i * 3 + 2] = (Math.random() - 0.5) * spread * 0.6;

      const pick = Math.random();
      const c = pick < 0.6 ? cyan : pick < 0.85 ? magenta : lime;
      colors[i * 3] = c.r;
      colors[i * 3 + 1] = c.g;
      colors[i * 3 + 2] = c.b;
    }

    // Build constellation lines between nearby nodes
    const linePositions: number[] = [];
    const lineColors: number[] = [];
    const threshold = 2.8;
    for (let i = 0; i < count; i++) {
      for (let j = i + 1; j < count; j++) {
        const dx = positions[i * 3] - positions[j * 3];
        const dy = positions[i * 3 + 1] - positions[j * 3 + 1];
        const dz = positions[i * 3 + 2] - positions[j * 3 + 2];
        const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);
        if (dist < threshold) {
          linePositions.push(
            positions[i * 3], positions[i * 3 + 1], positions[i * 3 + 2],
            positions[j * 3], positions[j * 3 + 1], positions[j * 3 + 2],
          );
          lineColors.push(
            colors[i * 3], colors[i * 3 + 1], colors[i * 3 + 2],
            colors[j * 3], colors[j * 3 + 1], colors[j * 3 + 2],
          );
        }
      }
    }

    return {
      positions,
      colors,
      linePositions: new Float32Array(linePositions),
      lineColors: new Float32Array(lineColors),
    };
  }, []);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    const mx = state.pointer.x;
    const my = state.pointer.y;

    if (pointsRef.current) {
      pointsRef.current.rotation.y = t * 0.04 + mx * 0.3;
      pointsRef.current.rotation.x = my * 0.2;
      pointsRef.current.position.y = Math.sin(t * 0.15) * 0.4;
    }
    if (linesRef.current) {
      linesRef.current.rotation.y = t * 0.04 + mx * 0.3;
      linesRef.current.rotation.x = my * 0.2;
      linesRef.current.position.y = Math.sin(t * 0.15) * 0.4;
    }
  });

  return (
    <group scale={viewport.width < 6 ? 0.6 : 1}>
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[positions, 3]} />
          <bufferAttribute attach="attributes-color" args={[colors, 3]} />
        </bufferGeometry>
        <pointsMaterial
          size={0.08}
          vertexColors
          transparent
          opacity={0.9}
          sizeAttenuation
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </points>

      <lineSegments ref={linesRef}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[linePositions, 3]} />
          <bufferAttribute attach="attributes-color" args={[lineColors, 3]} />
        </bufferGeometry>
        <lineBasicMaterial
          vertexColors
          transparent
          opacity={0.18}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </lineSegments>
    </group>
  );
}

function NeonRings() {
  const ring1 = useRef<THREE.Mesh>(null);
  const ring2 = useRef<THREE.Mesh>(null);
  const ring3 = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    const mx = state.pointer.x;
    const my = state.pointer.y;

    if (ring1.current) {
      ring1.current.rotation.x = t * 0.3;
      ring1.current.rotation.y = t * 0.2 + mx * 0.5;
    }
    if (ring2.current) {
      ring2.current.rotation.z = -t * 0.25;
      ring2.current.rotation.y = t * 0.15 + my * 0.4;
    }
    if (ring3.current) {
      ring3.current.rotation.x = -t * 0.18;
      ring3.current.rotation.z = t * 0.12;
    }
  });

  return (
    <group position={[0, 0, -2]}>
      <mesh ref={ring1}>
        <torusGeometry args={[3.2, 0.015, 16, 100]} />
        <meshBasicMaterial color="#00f0ff" transparent opacity={0.25} blending={THREE.AdditiveBlending} />
      </mesh>
      <mesh ref={ring2} rotation={[Math.PI / 4, 0, 0]}>
        <torusGeometry args={[4.5, 0.012, 16, 100]} />
        <meshBasicMaterial color="#ff2bd6" transparent opacity={0.18} blending={THREE.AdditiveBlending} />
      </mesh>
      <mesh ref={ring3} rotation={[0, 0, Math.PI / 3]}>
        <torusGeometry args={[5.8, 0.008, 16, 100]} />
        <meshBasicMaterial color="#b6ff00" transparent opacity={0.1} blending={THREE.AdditiveBlending} />
      </mesh>
    </group>
  );
}

export default function Background3D() {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 60 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
        style={{ background: 'transparent' }}
      >
        <ParticleField />
        <NeonRings />
      </Canvas>
      <div className="pointer-events-none absolute inset-0 bg-cyber-bg" style={{ opacity: 0.4 }} />
      <div className="pointer-events-none absolute inset-0 bg-grid-cyber bg-grid-lg opacity-30" />
      <div className="pointer-events-none absolute inset-0 bg-radial-neon" />
    </div>
  );
}
