export type DryingMode = 'manual' | 'fast' | 'eco' | 'night';

export interface DeviceState {
  isOn: boolean;
  windSpeed: number; // 1-100
  temperature: number; // 20-60 Celsius
  angle: { x: number; y: number }; // -45 to 45 degrees
  mode: DryingMode;
  childLock: boolean;
  filterHealth: number; // 0-100%
  remainingTime: number; // seconds
  autoShutOffTime: number | null; // minutes or null
  isConnected: boolean;
}

export interface UserProfile {
  id: string;
  name: string;
  avatarColor: string;
  presets: {
    windSpeed: number;
    temperature: number;
    angle: { x: number; y: number };
    mode: DryingMode;
  };
}

export interface Routine {
  id: string;
  name: string;
  trigger: string;
  action: string;
  isActive: boolean;
}

export interface LogEntry {
  id: string;
  timestamp: string;
  message: string;
  type: 'info' | 'warning' | 'error';
}