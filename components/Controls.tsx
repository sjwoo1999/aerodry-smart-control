import React from 'react';
import { Wind, Thermometer, RotateCw, Moon, Zap, Leaf } from 'lucide-react';
import { DeviceState, DryingMode } from '../types';
import { Card } from './ui/Card';
import { Button } from './ui/Button';

interface ControlsProps {
  device: DeviceState;
  updateDevice: (updates: Partial<DeviceState>) => void;
}

export const Controls: React.FC<ControlsProps> = ({ device, updateDevice }) => {
  const isLocked = device.childLock || !device.isOn;

  // Handler helpers
  const handleModeChange = (mode: DryingMode) => {
    if (isLocked) return;
    let updates: Partial<DeviceState> = { mode };
    
    // Preset logic
    if (mode === 'fast') {
      updates = { ...updates, windSpeed: 100, temperature: 60 };
    } else if (mode === 'eco') {
      updates = { ...updates, windSpeed: 50, temperature: 35 };
    } else if (mode === 'night') {
      updates = { ...updates, windSpeed: 30, temperature: 40 };
    }
    updateDevice(updates);
  };

  const handleAngle = (direction: 'up' | 'down' | 'left' | 'right') => {
    if (isLocked) return;
    const { x, y } = device.angle;
    const step = 15;
    let newX = x;
    let newY = y;

    switch(direction) {
      case 'up': newY = Math.min(y + step, 45); break;
      case 'down': newY = Math.max(y - step, -45); break;
      case 'left': newX = Math.max(x - step, -45); break;
      case 'right': newX = Math.min(x + step, 45); break;
    }
    updateDevice({ angle: { x: newX, y: newY }});
  };

  return (
    <div className={`space-y-6 pb-24 animate-in slide-in-from-bottom-4 duration-500 ${isLocked ? 'opacity-50 pointer-events-none grayscale-[0.5]' : ''}`}>
      
      {/* Mode Selectors */}
      <div className="grid grid-cols-4 gap-2">
        {[
          { id: 'manual', icon: Wind, label: 'Normal' },
          { id: 'fast', icon: Zap, label: 'Fast' },
          { id: 'eco', icon: Leaf, label: 'Eco' },
          { id: 'night', icon: Moon, label: 'Night' }
        ].map((m) => (
          <button
            key={m.id}
            onClick={() => handleModeChange(m.id as DryingMode)}
            className={`flex flex-col items-center justify-center p-3 rounded-xl transition-all ${
              device.mode === m.id 
              ? 'bg-blue-600 text-white shadow-lg shadow-blue-200' 
              : 'bg-white text-slate-500 border border-slate-100'
            }`}
          >
            <m.icon size={20} className="mb-1" />
            <span className="text-[10px] font-bold uppercase">{m.label}</span>
          </button>
        ))}
      </div>

      {/* Wind Control */}
      <Card title="Wind Strength" className="relative overflow-hidden">
        <div className="flex justify-between items-center mb-6">
          <span className="text-2xl font-bold text-blue-600">{device.windSpeed}%</span>
          <Wind className="text-blue-300" size={24} />
        </div>
        <input 
          type="range" 
          min="1" 
          max="100" 
          value={device.windSpeed}
          onChange={(e) => updateDevice({ windSpeed: parseInt(e.target.value), mode: 'manual' })}
          className="w-full h-12 bg-transparent appearance-none cursor-pointer relative z-10"
        />
        {/* Visual Bar Behind */}
        <div className="absolute left-5 right-5 top-[88px] h-2 bg-slate-100 rounded-full overflow-hidden">
          <div 
            className="h-full bg-blue-500 transition-all duration-300" 
            style={{ width: `${device.windSpeed}%` }}
          />
        </div>
      </Card>

      {/* Temperature Control */}
      <Card title="Temperature" className="relative overflow-hidden">
        <div className="flex justify-between items-center mb-6">
          <span className="text-2xl font-bold text-orange-500">{device.temperature}°C</span>
          <Thermometer className="text-orange-300" size={24} />
        </div>
        <input 
          type="range" 
          min="20" 
          max="60" 
          value={device.temperature}
          onChange={(e) => updateDevice({ temperature: parseInt(e.target.value), mode: 'manual' })}
          className="w-full h-12 bg-transparent appearance-none cursor-pointer relative z-10"
        />
        {/* Gradient Bar Behind */}
        <div className="absolute left-5 right-5 top-[88px] h-2 bg-gradient-to-r from-blue-300 via-yellow-300 to-red-500 rounded-full opacity-50"></div>
      </Card>

      {/* Angle Control */}
      <Card title="Direction" action={<button onClick={() => updateDevice({ angle: { x: 0, y: 0 }})} className="text-xs text-blue-500 font-medium flex items-center gap-1"><RotateCw size={12}/> Reset</button>}>
        <div className="flex items-center justify-between">
          
          {/* D-Pad UI */}
          <div className="relative w-40 h-40 bg-slate-50 rounded-full border border-slate-100 flex items-center justify-center">
            <div className="absolute inset-2 border border-slate-200 rounded-full opacity-50"></div>
            
            <button onClick={() => handleAngle('up')} className="absolute top-2 left-1/2 -translate-x-1/2 p-2 active:scale-90 bg-white shadow-sm rounded-lg text-slate-600 hover:text-blue-500"><Wind className="rotate-180" size={20}/></button>
            <button onClick={() => handleAngle('down')} className="absolute bottom-2 left-1/2 -translate-x-1/2 p-2 active:scale-90 bg-white shadow-sm rounded-lg text-slate-600 hover:text-blue-500"><Wind size={20}/></button>
            <button onClick={() => handleAngle('left')} className="absolute left-2 top-1/2 -translate-y-1/2 p-2 active:scale-90 bg-white shadow-sm rounded-lg text-slate-600 hover:text-blue-500"><Wind className="rotate-90" size={20}/></button>
            <button onClick={() => handleAngle('right')} className="absolute right-2 top-1/2 -translate-y-1/2 p-2 active:scale-90 bg-white shadow-sm rounded-lg text-slate-600 hover:text-blue-500"><Wind className="-rotate-90" size={20}/></button>

            {/* Center Indicator */}
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold text-xs shadow-inner">
              {device.angle.x}° / {device.angle.y}°
            </div>
          </div>

          {/* Visual Feedback of Airflow */}
          <div className="flex-1 flex justify-center items-center h-40">
            <div 
              className="w-20 h-32 bg-slate-200 rounded-xl relative overflow-hidden shadow-inner transition-transform duration-500 ease-out"
              style={{ transform: `perspective(500px) rotateX(${device.angle.y}deg) rotateY(${device.angle.x}deg)` }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-blue-500/20 to-transparent"></div>
              <div className="absolute bottom-0 w-full h-1 bg-blue-500 shadow-[0_0_20px_10px_rgba(59,130,246,0.5)]"></div>
            </div>
          </div>

        </div>
      </Card>
    </div>
  );
};