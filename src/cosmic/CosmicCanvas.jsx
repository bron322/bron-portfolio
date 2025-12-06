// src/cosmic/CosmicCanvas.jsx
import React, { useState, useEffect, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import {
  Bloom,
  EffectComposer,
  Noise,
  Vignette,
} from "@react-three/postprocessing";

import { ShapeType } from "./types";
import ParticleSystem from "./components/ParticleSystem";

const CosmicCanvas = () => {
  const [mounted, setMounted] = useState(false);

  // Only render the Canvas after the component has mounted on the client
  useEffect(() => {
    setMounted(true);
  }, []);

  const [currentShape, setCurrentShape] = useState(ShapeType.CosmicVortex);
  const [autoSwitch] = useState(true);
  const [speed] = useState(1);

  useEffect(() => {
    if (!autoSwitch) return;

    const shapes = Object.values(ShapeType);
    const interval = setInterval(() => {
      setCurrentShape((prev) => {
        const currentIndex = shapes.indexOf(prev);
        const nextIndex = (currentIndex + 1) % shapes.length;
        return shapes[nextIndex];
      });
    }, 5000);

    return () => clearInterval(interval);
  }, [autoSwitch]);

  if (!mounted) return null;

  return (
    <div className="w-full h-full">
      <Canvas
        className="w-full h-full"
        style={{ width: "100%", height: "100%" }}
        camera={{ position: [0, 0, 60], fov: 45 }}
        gl={{ antialias: false }}
        // 🔑 disable R3F's pointer event system (avoids addEventListener on null)
        events={undefined}
      >
        <color attach="background" args={["#020205"]} />

        <Suspense fallback={null}>
          <ParticleSystem
            currentShape={currentShape}
            particleCount={12300}
            speed={speed}
          />

          <Stars
            radius={100}
            depth={50}
            count={5000}
            factor={4}
            saturation={0}
            fade
            speed={1}
          />
          <ambientLight intensity={0.5} />

          <EffectComposer disableNormalPass>
            <Bloom
              luminanceThreshold={0.2}
              mipmapBlur
              intensity={0.8}
              radius={0.4}
            />
            <Noise opacity={0.05} />
            <Vignette eskil={false} offset={0.1} darkness={1.1} />
          </EffectComposer>
        </Suspense>

        <OrbitControls
          enablePan={false}
          enableZoom={true}
          autoRotate
          autoRotateSpeed={0.5}
          minDistance={20}
          maxDistance={120}
        />
      </Canvas>
    </div>
  );
};

export default CosmicCanvas;
