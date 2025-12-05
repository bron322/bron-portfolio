import React, { useMemo, useRef, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { getTargetPosition, getShapeColor } from '../utils/geometry';
import { ShapeType } from '../types';

interface ParticleSystemProps {
  currentShape: ShapeType;
  particleCount: number;
  speed: number;
}

const ParticleSystem: React.FC<ParticleSystemProps> = ({ currentShape, particleCount, speed }) => {
  const pointsRef = useRef<THREE.Points>(null);
  
  // Buffers
  // We use Float32Array to hold positions.
  const [positions, targetPositions, colors] = useMemo(() => {
    const pos = new Float32Array(particleCount * 3);
    const target = new Float32Array(particleCount * 3);
    const cols = new Float32Array(particleCount * 3);
    
    // Initialize random start positions (big bang style)
    for (let i = 0; i < particleCount; i++) {
      const x = (Math.random() - 0.5) * 100;
      const y = (Math.random() - 0.5) * 100;
      const z = (Math.random() - 0.5) * 100;
      
      pos[i * 3] = x;
      pos[i * 3 + 1] = y;
      pos[i * 3 + 2] = z;
      
      target[i * 3] = x;
      target[i * 3 + 1] = y;
      target[i * 3 + 2] = z;
      
      cols[i * 3] = 1;
      cols[i * 3 + 1] = 1;
      cols[i * 3 + 2] = 1;
    }
    
    return [pos, target, cols];
  }, [particleCount]);

  // Update target positions when shape changes
  useEffect(() => {
    const [color1Hex, color2Hex] = getShapeColor(currentShape);
    const color1 = new THREE.Color(color1Hex);
    const color2 = new THREE.Color(color2Hex);

    for (let i = 0; i < particleCount; i++) {
      // Get geometric target
      const vec = getTargetPosition(currentShape, i, particleCount);
      targetPositions[i * 3] = vec.x;
      targetPositions[i * 3 + 1] = vec.y;
      targetPositions[i * 3 + 2] = vec.z;

      // Interpolate colors based on index to create gradient
      const alpha = i / particleCount;
      const c = color1.clone().lerp(color2, alpha);
      
      // We will lazily update colors in the frame loop or directly here if we had a separate target buffer for colors.
      // For simplicity/perf, we'll write directly to the buffer attribute here but lerp visually in the shader? 
      // Actually, standard PointsMaterial uses vertex colors. Let's just snap colors instantly or lerp them in a CPU loop.
      // Let's snap colors for now to keep it simpler, or lerp them slowly in useFrame if we want fancy color transition.
      // Let's stick to updating the geometry attribute immediately for colors, they change fast enough.
      colors[i * 3] = c.r;
      colors[i * 3 + 1] = c.g;
      colors[i * 3 + 2] = c.b;
    }
    
    if (pointsRef.current?.geometry.attributes.color) {
        pointsRef.current.geometry.attributes.color.needsUpdate = true;
    }

  }, [currentShape, particleCount, targetPositions, colors]);

  useFrame(() => {
    if (!pointsRef.current) return;

    const positionsAttr = pointsRef.current.geometry.attributes.position;
    const array = positionsAttr.array as Float32Array;
    
    // Lerp factor
    const lerpSpeed = 0.03 * speed; 

    for (let i = 0; i < particleCount; i++) {
      const ix = i * 3;
      const iy = i * 3 + 1;
      const iz = i * 3 + 2;

      // Current pos
      const cx = array[ix];
      const cy = array[iy];
      const cz = array[iz];

      // Target pos
      const tx = targetPositions[ix];
      const ty = targetPositions[iy];
      const tz = targetPositions[iz];

      // Simple Lerp
      array[ix] += (tx - cx) * lerpSpeed;
      array[iy] += (ty - cy) * lerpSpeed;
      array[iz] += (tz - cz) * lerpSpeed;
      
      // Optional: Add some noise/wobble for "Chaos" feel
      if (currentShape === ShapeType.CosmicVortex || currentShape === ShapeType.Trinity) {
         array[ix] += (Math.random() - 0.5) * 0.05;
         array[iy] += (Math.random() - 0.5) * 0.05;
         array[iz] += (Math.random() - 0.5) * 0.05;
      }
    }

    positionsAttr.needsUpdate = true;
    
    // Rotate the whole system slowly
    pointsRef.current.rotation.y += 0.001 * speed;
    pointsRef.current.rotation.z += 0.0005 * speed;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particleCount}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={particleCount}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.15}
        vertexColors
        transparent
        opacity={0.8}
        blending={THREE.AdditiveBlending}
        sizeAttenuation={true}
        depthWrite={false}
      />
    </points>
  );
};

export default ParticleSystem;
