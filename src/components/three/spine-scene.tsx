"use client";

import { Suspense, useState, useEffect, useCallback } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, Preload, Bounds } from "@react-three/drei";
import * as THREE from "three";
import { SpineModel } from "./spine-model";
import { Particles } from "./particles";
import { LightingRig } from "./lighting-rig";

interface SpineSceneProps {
  scrollProgress: number;
}

export function SpineScene({ scrollProgress }: SpineSceneProps) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = useCallback((e: MouseEvent) => {
    setMousePos({
      x: (e.clientX / window.innerWidth) * 2 - 1,
      y: (e.clientY / window.innerHeight) * 2 - 1,
    });
  }, []);

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [handleMouseMove]);

  return (
    <div className="spine-canvas-wrapper" style={{ zIndex: 1, pointerEvents: "none" }}>
      <Canvas
        shadows
        dpr={[1, 1.5]}
        camera={{
          position: [0, 0, 6],
          fov: 50,
          near: 0.1,
          far: 100,
        }}
        gl={{
          antialias: true,
          toneMapping: THREE.ACESFilmicToneMapping,
          toneMappingExposure: 1.2
        }}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          background: "linear-gradient(135deg, #060A08 0%, #0A100D 30%, #0F1614 70%, #080C0A 100%)",
        }}
      >
        <Suspense fallback={null}>
          <LightingRig scrollProgress={scrollProgress} />

          <SpineModel
            scrollProgress={scrollProgress}
            mousePosition={mousePos}
          />

          <Particles count={350} scrollProgress={scrollProgress} />
          <Environment preset="night" />
          <Preload all />
        </Suspense>
      </Canvas>

      <div className="scene-vignette" />
    </div>
  );
}
