import React from 'react';
import { 
  Power, 
  Wind, 
  Thermometer, 
  Clock, 
  ShieldCheck, 
  ShieldAlert,
  Zap
} from 'lucide-react';
import { DeviceState, UserProfile } from '../types';
import { Card } from './ui/Card';

interface DashboardProps {
  device: DeviceState;
  activeProfile: UserProfile | null;
  togglePower: () => void;
  setPage: (page: string) => void;
}

export const Dashboard: React.FC<DashboardProps> = ({ device, activeProfile, togglePower, setPage }) => {
  // Calculate a visual gradient for the dryer status circle based on temp
  const getStatusColor = () => {
    if (!device.isOn) return 'from-gray-300 to-gray-400';
    if (device.mode === 'fast') return 'from-orange-400 to-red-500';
    if (device.mode === 'eco') return 'from-green-400 to-teal-500';
    if (device.mode === 'night') return 'from-indigo-400 to-purple-500';
    
    // Manual temp based
    if (device.temperature < 30) return 'from-blue-400 to-cyan-500';
    if (device.temperature < 45) return 'from-yellow-400 to-orange-500';
    return 'from-orange-500 to-red-600';
  };

  return (
    <div className="space-y-6 pb-20 animate-in fade-in duration-500">
      {/* Header Status */}
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">
            {activeProfile ? `Hi, ${activeProfile.name}` : 'Welcome Home'}
          </h2>
          <p className="text-slate-500 text-sm">
            {device.isConnected ? 'Device Ready' : 'Connecting...'}
          </p>
        </div>
        <button 
          onClick={togglePower}
          className={`h-14 w-14 rounded-full flex items-center justify-center transition-all shadow-xl ${
            device.isOn 
            ? 'bg-blue-600 text-white shadow-blue-200 scale-105' 
            : 'bg-white text-slate-300 shadow-slate-100 hover:scale-105'
          }`}
        >
          <Power size={24} strokeWidth={2.5} />
        </button>
      </div>

      {/* Main Status Visualizer */}
      <div className="relative h-64 w-full flex items-center justify-center">
        {/* Background Pulses */}
        {device.isOn && (
          <>
            <div className="absolute h-56 w-56 rounded-full bg-blue-100 opacity-20 animate-ping"></div>
            <div className="absolute h-48 w-48 rounded-full bg-blue-200 opacity-20 animate-pulse"></div>
          </>
        )}
        
        {/* Central Display */}
        <div className={`relative h-48 w-48 rounded-full bg-gradient-to-br ${getStatusColor()} shadow-2xl flex flex-col items-center justify-center text-white transition-all duration-700`}>
          <div className="text-5xl font-bold tracking-tighter">
            {device.isOn ? Math.round(device.temperature) : '--'}°
          </div>
          <div className="text-sm font-medium opacity-90 mt-1 uppercase tracking-wide">
            {device.isOn ? device.mode : 'OFF'}
          </div>
          
          {/* Circular Stats Mini */}
          {device.isOn && (
            <div className="absolute bottom-6 flex gap-3 text-xs font-semibold opacity-80">
              <span className="flex items-center gap-1">
                <Wind size={12} /> {device.windSpeed}%
              </span>
            </div>
          )}
        </div>
      </div>

      {/* Quick Status Cards */}
      <div className="grid grid-cols-2 gap-4">
        <Card className="flex flex-col gap-2 cursor-pointer hover:bg-slate-50 transition-colors" onClick={() => setPage('controls')}>
          <div className="flex justify-between items-start">
            <div className="p-2 bg-blue-50 text-blue-600 rounded-lg">
              <Wind size={20} />
            </div>
            <span className="text-xs font-bold text-slate-400">CONTROL</span>
          </div>
          <div>
            <div className="text-lg font-bold text-slate-800">Wind & Temp</div>
            <div className="text-xs text-slate-500">
              {device.isOn ? 'Active' : 'Standby'}
            </div>
          </div>
        </Card>

        <Card className="flex flex-col gap-2">
          <div className="flex justify-between items-start">
            <div className="p-2 bg-orange-50 text-orange-600 rounded-lg">
              <Clock size={20} />
            </div>
            <span className="text-xs font-bold text-slate-400">TIMER</span>
          </div>
          <div>
            <div className="text-lg font-bold text-slate-800">
              {Math.floor(device.remainingTime / 60)}m Left
            </div>
            <div className="text-xs text-slate-500">Auto-off enabled</div>
          </div>
        </Card>
      </div>

      {/* Safety & Profile */}
      <div className="grid grid-cols-3 gap-3">
        <button 
          onClick={() => setPage('automation')}
          className="bg-white p-3 rounded-2xl border border-slate-100 shadow-sm flex flex-col items-center justify-center gap-2 py-4"
        >
          <Zap size={20} className="text-purple-500" />
          <span className="text-xs font-medium text-slate-600">Routines</span>
        </button>
        <button 
          className="bg-white p-3 rounded-2xl border border-slate-100 shadow-sm flex flex-col items-center justify-center gap-2 py-4"
        >
          {device.childLock ? (
            <ShieldCheck size={20} className="text-green-500" />
          ) : (
            <ShieldAlert size={20} className="text-slate-400" />
          )}
          <span className="text-xs font-medium text-slate-600">Lock: {device.childLock ? 'On' : 'Off'}</span>
        </button>
        <button 
          onClick={() => setPage('profiles')}
          className="bg-white p-3 rounded-2xl border border-slate-100 shadow-sm flex flex-col items-center justify-center gap-2 py-4"
        >
          <div className={`w-5 h-5 rounded-full ${activeProfile ? activeProfile.avatarColor : 'bg-slate-300'}`}></div>
          <span className="text-xs font-medium text-slate-600">Profile</span>
        </button>
      </div>
    </div>
  );
};