import React from 'react';
import { ShapeType } from '../types';
import { 
  Play, 
  Pause, 
  FastForward, 
  Infinity as InfinityIcon, 
  Heart, 
  Wind, 
  Activity, 
  Aperture,
  Zap,
  BoxSelect,
  Layers
} from 'lucide-react';

interface OverlayProps {
  currentShape: ShapeType;
  setShape: (s: ShapeType) => void;
  autoSwitch: boolean;
  toggleAutoSwitch: () => void;
  speed: number;
  setSpeed: (s: number) => void;
}

const shapes = [
  { type: ShapeType.CosmicVortex, icon: Zap },
  { type: ShapeType.Trinity, icon: Aperture },
  { type: ShapeType.KochCurve, icon: BoxSelect },
  { type: ShapeType.Heart, icon: Heart },
  { type: ShapeType.Butterfly, icon: Wind },
  { type: ShapeType.Archimedean, icon: Activity },
  { type: ShapeType.Catenary, icon: Layers },
  { type: ShapeType.Lemniscate, icon: InfinityIcon },
  { type: ShapeType.Rose, icon: Aperture },
];

const Overlay: React.FC<OverlayProps> = ({ 
  currentShape, 
  setShape, 
  autoSwitch, 
  toggleAutoSwitch,
  speed,
  setSpeed
}) => {
  return (
    <div className="absolute inset-0 pointer-events-none flex flex-col justify-between p-6 z-10">
      
      {/* Header */}
      <div className="flex justify-between items-start pointer-events-auto">
        <div className="bg-black/40 backdrop-blur-md p-4 rounded-xl border border-white/10">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Micro-1230 Particles
          </h1>
          <p className="text-xs text-gray-400 mt-1 max-w-xs">
            Interstellar mathematical visualization. seamless transition.
          </p>
        </div>
        
        <div className="flex gap-2">
          <button 
            onClick={toggleAutoSwitch}
            className={`p-3 rounded-full border transition-all ${
              autoSwitch 
                ? 'bg-blue-500/20 border-blue-500 text-blue-400 hover:bg-blue-500/30' 
                : 'bg-white/5 border-white/10 text-white hover:bg-white/10'
            }`}
            title={autoSwitch ? "Pause Auto-Switch" : "Auto-Switch Shapes"}
          >
            {autoSwitch ? <Pause size={20} /> : <Play size={20} />}
          </button>
          
          <button 
             onClick={() => setSpeed(speed > 1 ? 1 : 2.5)}
             className={`p-3 rounded-full border transition-all ${
              speed > 1
                ? 'bg-purple-500/20 border-purple-500 text-purple-400' 
                : 'bg-white/5 border-white/10 text-white hover:bg-white/10'
            }`}
            title="Toggle Speed"
          >
            <FastForward size={20} />
          </button>
        </div>
      </div>

      {/* Shape Selector */}
      <div className="pointer-events-auto overflow-x-auto pb-2">
        <div className="flex gap-3 items-center justify-center md:justify-start flex-wrap md:flex-nowrap px-2">
          {shapes.map((item) => {
            const isActive = currentShape === item.type;
            const Icon = item.icon;
            return (
              <button
                key={item.type}
                onClick={() => setShape(item.type)}
                className={`group relative flex items-center gap-2 px-4 py-3 rounded-xl border transition-all duration-300 min-w-max
                  ${isActive 
                    ? 'bg-white/10 border-white/40 shadow-[0_0_15px_rgba(255,255,255,0.15)] translate-y-[-2px]' 
                    : 'bg-black/40 border-white/5 hover:bg-white/5 hover:border-white/20'
                  }
                `}
              >
                <Icon size={18} className={isActive ? 'text-blue-400' : 'text-gray-400 group-hover:text-white'} />
                <span className={`text-sm font-medium ${isActive ? 'text-white' : 'text-gray-400 group-hover:text-white'}`}>
                  {item.type}
                </span>
                
                {isActive && (
                  <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-blue-400 rounded-full shadow-[0_0_5px_currentColor]" />
                )}
              </button>
            );
          })}
        </div>
      </div>
      
      <div className="absolute bottom-6 right-6 pointer-events-none text-right hidden md:block">
        <div className="text-[10px] text-white/20 font-mono tracking-widest uppercase">
          Render Logic: WebGL2 / R3F<br/>
          Geometry: BufferAttribute<br/>
          Count: 12,300
        </div>
      </div>
    </div>
  );
};

export default Overlay;
