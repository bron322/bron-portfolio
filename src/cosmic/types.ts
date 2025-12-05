export enum ShapeType {
    CosmicVortex = 'Cosmic Vortex',
    KochCurve = 'Koch / Fractal',
    Heart = 'Heart (Cardioid)',
    Butterfly = 'Butterfly Curve',
    Archimedean = 'Archimedean Spiral',
    Catenary = 'Catenary Chain',
    Lemniscate = 'Bernoulli Lemniscate',
    Rose = 'Rose Curve',
    Sphere = 'Sphere',
    Trinity = 'Three-Port Chaos'
  }
  
  export interface ParticleState {
    currentShape: ShapeType;
    autoRotate: boolean;
    autoSwitch: boolean;
    particleCount: number;
    speed: number;
  }
  