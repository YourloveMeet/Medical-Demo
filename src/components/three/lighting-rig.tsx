"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface LightingRigProps {
  scrollProgress: number;
}

export function LightingRig({ scrollProgress }: LightingRigProps) {
  const keyLightRef = useRef<THREE.DirectionalLight>(null);
  const rimLightRef = useRef<THREE.SpotLight>(null);
  const accentLightRef = useRef<THREE.PointLight>(null);

  useFrame((state) => {
    const time = state.clock.elapsedTime;
    const t = scrollProgress;

    // Key light orbits with scroll
    if (keyLightRef.current) {
      const angle = t * Math.PI * 2 + Math.PI * 0.25;
      keyLightRef.current.position.x = Math.cos(angle) * 8;
      keyLightRef.current.position.z = Math.sin(angle) * 8;
      keyLightRef.current.position.y = 5 + Math.sin(time * 0.5) * 0.5;

      // Intensity shifts with scroll
      keyLightRef.current.intensity = 1.5 + Math.sin(t * Math.PI) * 0.5;
    }

    // Rim light shifts color from cool to warm
    if (rimLightRef.current) {
      const rimAngle = -t * Math.PI + Math.PI;
      rimLightRef.current.position.x = Math.cos(rimAngle) * 6;
      rimLightRef.current.position.z = Math.sin(rimAngle) * 6;
      rimLightRef.current.position.y = 3;

      // Color transition: teal → amber
      const r = THREE.MathUtils.lerp(0.29, 0.95, t);
      const g = THREE.MathUtils.lerp(0.49, 0.75, t);
      const b = THREE.MathUtils.lerp(0.44, 0.35, t);
      rimLightRef.current.color.setRGB(r, g, b);
    }

    // Accent glow pulses
    if (accentLightRef.current) {
      accentLightRef.current.intensity = 0.8 + Math.sin(time * 2) * 0.3;
      accentLightRef.current.position.y = Math.sin(time * 0.3) * 2;
    }
  });

  return (
    <>
      {/* Ambient base — dim warm */}
      <ambientLight intensity={1.0} color="#2A4A3F" />

      {/* Key directional light — teal accent */}
      <directionalLight
        ref={keyLightRef}
        intensity={1.8}
        color="#5A9E8F"
        position={[5, 5, 5]}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-camera-far={50}
        shadow-camera-near={0.1}
      />

      {/* Rim/back light */}
      <spotLight
        ref={rimLightRef}
        intensity={2}
        color="#4A7C6F"
        position={[-5, 3, -5]}
        angle={0.6}
        penumbra={0.8}
        distance={20}
      />

      {/* Accent point light — subtle glow near spine */}
      <pointLight
        ref={accentLightRef}
        intensity={0.8}
        color="#6ADFBF"
        position={[0, 0, 3]}
        distance={10}
        decay={2}
      />

      {/* Fill light from below for dramatic effect */}
      <pointLight
        intensity={0.4}
        color="#1A3D33"
        position={[0, -5, 0]}
        distance={15}
        decay={2}
      />
    </>
  );
}
