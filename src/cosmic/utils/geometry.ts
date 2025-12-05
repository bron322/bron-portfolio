import * as THREE from 'three';
import { ShapeType } from '../types';

// Helper to get a point on a sphere surface
const getSpherePoint = (i: number, count: number, radius: number = 25): THREE.Vector3 => {
  const phi = Math.acos(-1 + (2 * i) / count);
  const theta = Math.sqrt(count * Math.PI) * phi;
  return new THREE.Vector3(
    radius * Math.cos(theta) * Math.sin(phi),
    radius * Math.sin(theta) * Math.sin(phi),
    radius * Math.cos(phi)
  );
};

export const getTargetPosition = (
  type: ShapeType,
  i: number,
  count: number
): THREE.Vector3 => {
  const u = i / count; // Normalized index 0..1
  const t = u * Math.PI * 2; // Full circle parameter
  const vec = new THREE.Vector3();

  switch (type) {
    case ShapeType.CosmicVortex: {
      // Logarithmic spiral cone (Vortex)
      const angle = i * 0.02;
      const r = (i / count) * 40;
      const x = r * Math.cos(angle);
      const z = r * Math.sin(angle);
      const y = (i / count) * -30 + 15;
      vec.set(x, y, z);
      // Add some chaos
      vec.x += (Math.random() - 0.5) * 2;
      vec.z += (Math.random() - 0.5) * 2;
      break;
    }

    case ShapeType.Trinity: {
      // 3-Port attractors
      const group = i % 3;
      const tOsc = (i / count) * Math.PI * 20;
      const radius = 15;
      const offsetX = group === 0 ? radius : group === 1 ? -radius : 0;
      const offsetY = group === 2 ? radius : -radius * 0.5;
      
      vec.set(
        Math.cos(tOsc) * 5 + offsetX,
        Math.sin(tOsc) * 5 + offsetY,
        (Math.random() - 0.5) * 10
      );
      // Twist them
      const twist = i * 0.001;
      vec.applyAxisAngle(new THREE.Vector3(0, 1, 0), twist);
      break;
    }

    case ShapeType.KochCurve: {
      // Approximating a fractal-like cloud since strict Koch is complex for fixed index mapping
      // We'll use a 3D Mandelbulb-ish point cloud or just a noisy structure
      // Let's do a recursive-like spherical expansion
      const r = 30;
      const theta = i * 2.4; // Golden angle approx to scatter
      const phi = Math.acos(2 * Math.random() - 1);
      
      // Modulate radius to create "layers"
      const modR = r * (0.5 + 0.5 * Math.sin(i * 0.1));
      
      vec.set(
        modR * Math.sin(phi) * Math.cos(theta),
        modR * Math.sin(phi) * Math.sin(theta),
        modR * Math.cos(phi)
      );
      break;
    }

    case ShapeType.Heart: {
      // 3D Heart (Cardioid variation)
      // x = 16sin^3(t)
      // y = 13cos(t) - 5cos(2t) - 2cos(3t) - cos(4t)
      // Rotate it to be 3D volume
      const tH = (i / count) * Math.PI * 2;
      const phiH = (i % 100) / 100 * Math.PI; // slice for volume
      
      const xBase = 16 * Math.pow(Math.sin(tH), 3);
      const yBase = 13 * Math.cos(tH) - 5 * Math.cos(2 * tH) - 2 * Math.cos(3 * tH) - Math.cos(4 * tH);
      
      // Scale down
      const s = 1.2;
      vec.set(xBase * s, yBase * s, (Math.random() - 0.5) * 10);
      
      // Rotate slightly to face camera better
      vec.applyAxisAngle(new THREE.Vector3(1, 0, 0), Math.PI);
      break;
    }

    case ShapeType.Butterfly: {
      // Polar: r = e^(sin t) - 2cos(4t) + sin^5((2t-pi)/24)
      const tB = (i / count) * Math.PI * 12; // Multiple loops
      const rB = Math.exp(Math.sin(tB)) - 2 * Math.cos(4 * tB) + Math.pow(Math.sin((2 * tB - Math.PI) / 24), 5);
      const size = 6;
      vec.set(
        rB * Math.cos(tB) * size,
        rB * Math.sin(tB) * size,
        (Math.random() - 0.5) * 4 // some thickness
      );
      break;
    }

    case ShapeType.Archimedean: {
      // r = a + b*theta
      // Conical spiral
      const theta = i * 0.1;
      const a = 0.5;
      const b = 0.2;
      const rS = a + b * theta;
      // Map to 3D cone
      vec.set(
        rS * Math.cos(theta),
        -20 + (i/count) * 40, // Height
        rS * Math.sin(theta)
      );
      break;
    }

    case ShapeType.Catenary: {
      // y = a * cosh(x/a)
      // Let's make multiple hanging chains
      const chains = 5;
      const chainIndex = i % chains;
      const perChain = Math.floor(count / chains);
      const chainProgress = (i % perChain) / perChain; // 0..1
      
      const x = (chainProgress - 0.5) * 40;
      const a = 10 + chainIndex * 2; // Different sag for each chain
      const y = a * Math.cosh(x / a) - a; // Offset to start at 0
      
      // Rotate chains around center
      const rot = (chainIndex / chains) * Math.PI * 2;
      vec.set(x, y - 10, 0);
      vec.applyAxisAngle(new THREE.Vector3(0, 1, 0), rot);
      break;
    }

    case ShapeType.Lemniscate: {
      // Bernoulli Lemniscate: (x^2 + y^2)^2 = 2a^2(x^2 - y^2)
      // Parametric: x = a*cos(t)/(1+sin^2(t)), y = a*sin(t)cos(t)/(1+sin^2(t))
      const tL = (i / count) * Math.PI * 2;
      const aL = 25;
      const denom = 1 + Math.pow(Math.sin(tL), 2);
      vec.set(
        (aL * Math.cos(tL)) / denom,
        (aL * Math.sin(tL) * Math.cos(tL)) / denom,
        (i % 50 - 25) * 0.2 // Thickness
      );
      break;
    }

    case ShapeType.Rose: {
      // k = n/d. Let's pick k=4 (8 petals)
      const k = 4;
      const tR = (i / count) * Math.PI * 2;
      const rR = 25 * Math.cos(k * tR);
      vec.set(
        rR * Math.cos(tR),
        rR * Math.sin(tR),
        (i % 100 - 50) * 0.1
      );
      break;
    }

    case ShapeType.Sphere:
    default: {
      vec.copy(getSpherePoint(i, count, 20));
      break;
    }
  }

  return vec;
};

// Color palettes for each shape
export const getShapeColor = (type: ShapeType): [string, string] => {
  switch (type) {
    case ShapeType.CosmicVortex: return ['#8B5CF6', '#3B82F6']; // Violet -> Blue
    case ShapeType.Trinity: return ['#F472B6', '#FCD34D']; // Pink -> Yellow
    case ShapeType.KochCurve: return ['#10B981', '#6EE7B7']; // Emerald
    case ShapeType.Heart: return ['#EF4444', '#F87171']; // Red
    case ShapeType.Butterfly: return ['#F59E0B', '#FDE047']; // Amber
    case ShapeType.Archimedean: return ['#06B6D4', '#67E8F9']; // Cyan
    case ShapeType.Catenary: return ['#EC4899', '#DB2777']; // Pink
    case ShapeType.Lemniscate: return ['#6366F1', '#818CF8']; // Indigo
    case ShapeType.Rose: return ['#D946EF', '#E879F9']; // Fuchsia
    default: return ['#ffffff', '#888888'];
  }
};
