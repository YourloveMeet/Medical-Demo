"use client";

import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { useRef, useMemo } from "react";

interface SpineModelProps {
  scrollProgress: number;
  mousePosition: { x: number; y: number };
}

export function SpineModel({ scrollProgress, mousePosition }: SpineModelProps) {
  const groupRef = useRef<THREE.Group>(null);
  const { scene } = useGLTF("/models/BackBone1.glb");

  // MAJESTIC FOCUS AESTHETIC
  useMemo(() => {
    if (!scene) return;

    const box = new THREE.Box3().setFromObject(scene);
    const size = new THREE.Vector3();
    box.getSize(size);
    const center = new THREE.Vector3();
    box.getCenter(center);

    // Auto-scale to a massive majestic size
    const maxDim = Math.max(size.x, size.y, size.z);
    const scaleFactor = maxDim > 0 ? 14 / maxDim : 1;
    scene.scale.set(scaleFactor, scaleFactor, scaleFactor);

    // Center it + Shift down slightly to clear header
    scene.position.x = -center.x * scaleFactor;
    scene.position.y = (-center.y * scaleFactor) - 6.5;
    scene.position.z = -center.z * scaleFactor;

    // Reset to vertical
    scene.rotation.set(0, 0, 0);

    scene.traverse((child) => {
      if ((child as THREE.Mesh).isMesh) {
        const mesh = child as THREE.Mesh;

        // STRICT FILTER: Only show the complex backbone meshes (high vertex counts)
        // Labels/lines usually have < 1000 vertices.
        if (mesh.geometry.attributes.position.count < 3000) {
          mesh.visible = false;
          return;
        }

        mesh.visible = true;
        mesh.material = new THREE.MeshPhysicalMaterial({
          color: "#A2C9BD",
          metalness: 0.9,
          roughness: 0.1,
          transmission: 0.15,
          thickness: 1.2,
          ior: 1.4,
          envMapIntensity: 2.5,
          clearcoat: 1.0,
        });
        mesh.castShadow = true;
        mesh.receiveShadow = true;
      }
    });
  }, [scene]);

  useFrame(() => {
    if (!groupRef.current) return;
    const t = scrollProgress;

    // PRECISION Y-AXIS ROTATION ONLY
    // Maps 0-1 scroll to 0-360 degrees (2 * PI)
    const targetRotY = t * Math.PI * 2;

    // Low-pass filter (lerp) removed for "Exact" control, 
    // but a tiny bit of smoothing makes it feel more premium
    groupRef.current.rotation.y = targetRotY;

    // LOCK ALL OTHER AXES
    groupRef.current.rotation.x = 0;
    groupRef.current.rotation.z = 0;

    // LOCK POSITION TO DEAD CENTER
    groupRef.current.position.set(0, 0, 0);
  });

  return (
    <group ref={groupRef} position={[0, 0, 0]}>
      <primitive object={scene} />
    </group>
  );
}

useGLTF.preload("/models/BackBone1.glb");
