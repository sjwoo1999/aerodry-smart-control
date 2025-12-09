import React, { useState, useEffect } from 'react';
import { Layout } from './components/Layout';
import { Dashboard } from './components/Dashboard';
import { Controls } from './components/Controls';
import { Automation } from './components/Automation';
import { Profiles } from './components/Profiles';
import { Maintenance } from './components/Maintenance';
import { Settings } from './components/Settings';
import { DeviceState, UserProfile, Routine } from './types';

// Mock Initial Data
const INITIAL_DEVICE_STATE: DeviceState = {
  isOn: false,
  windSpeed: 50,
  temperature: 30,
  angle: { x: 0, y: 0 },
  mode: 'manual',
  childLock: false,
  filterHealth: 82,
  remainingTime: 900, // 15 mins
  autoShutOffTime: 15,
  isConnected: true
};

const MOCK_PROFILES: UserProfile[] = [
  { 
    id: 'p1', 
    name: 'Dad', 
    avatarColor: 'bg-blue-500', 
    presets: { windSpeed: 80, temperature: 45, angle: { x: 0, y: 10 }, mode: 'fast' }
  },
  { 
    id: 'p2', 
    name: 'Mom', 
    avatarColor: 'bg-rose-500', 
    presets: { windSpeed: 40, temperature: 38, angle: { x: 0, y: 0 }, mode: 'eco' }
  },
];

const MOCK_ROUTINES: Routine[] = [
  { id: 'r1', name: 'Morning Shower', trigger: 'shower', action: 'fast', isActive: true },
  { id: 'r2', name: 'Kids Bath', trigger: 'time', action: 'eco', isActive: false },
];

export default function App() {
  const [activePage, setActivePage] = useState('dashboard');
  const [device, setDevice] = useState<DeviceState>(INITIAL_DEVICE_STATE);
  const [profiles, setProfiles] = useState<UserProfile[]>(MOCK_PROFILES);
  const [activeProfileId, setActiveProfileId] = useState<string | null>('p1');
  const [routines, setRoutines] = useState<Routine[]>(MOCK_ROUTINES);

  // Simulation: Timer countdown
  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    if (device.isOn && device.remainingTime > 0) {
      interval = setInterval(() => {
        setDevice(d => ({ ...d, remainingTime: d.remainingTime - 1 }));
      }, 1000);
    } else if (device.remainingTime <= 0) {
      setDevice(d => ({ ...d, isOn: false, remainingTime: 900 })); // Reset
    }
    return () => clearInterval(interval);
  }, [device.isOn, device.remainingTime]);

  // Actions
  const togglePower = () => {
    setDevice(prev => ({ ...prev, isOn: !prev.isOn }));
  };

  const updateDevice = (updates: Partial<DeviceState>) => {
    setDevice(prev => ({ ...prev, ...updates }));
  };

  const setActiveProfile = (id: string) => {
    setActiveProfileId(id);
    const profile = profiles.find(p => p.id === id);
    if (profile) {
      updateDevice({
        ...profile.presets,
        isOn: true // Auto turn on when applying profile? Optional UX choice.
      });
      setActivePage('dashboard');
    }
  };

  const toggleChildLock = () => {
    updateDevice({ childLock: !device.childLock });
  };

  // Routine Actions
  const addRoutine = (routine: Routine) => setRoutines([...routines, routine]);
  const deleteRoutine = (id: string) => setRoutines(routines.filter(r => r.id !== id));
  const toggleRoutine = (id: string) => {
    setRoutines(routines.map(r => r.id === id ? { ...r, isActive: !r.isActive } : r));
  };

  // Render Page Content
  const renderContent = () => {
    switch(activePage) {
      case 'dashboard':
        return <Dashboard 
          device={device} 
          activeProfile={profiles.find(p => p.id === activeProfileId) || null} 
          togglePower={togglePower}
          setPage={setActivePage}
        />;
      case 'controls':
        return <Controls device={device} updateDevice={updateDevice} />;
      case 'automation': // Accessible from Dashboard "Zap" icon or Settings? Let's assume we map Zap there.
         // Wait, Automation wasn't in main nav in Layout, but requested in UX flow. 
         // I'll reuse the layout container logic, maybe automation is a sub-feature or replace 'Settings' if needed.
         // For now, let's map 'settings' to settings, but Dashboard link can open automation.
         return <Automation routines={routines} addRoutine={addRoutine} deleteRoutine={deleteRoutine} toggleRoutine={toggleRoutine} />;
      case 'profiles':
        return <Profiles profiles={profiles} activeProfileId={activeProfileId} setActiveProfile={setActiveProfile} />;
      case 'maintenance':
        return <Maintenance filterHealth={device.filterHealth} />;
      case 'settings':
        return <Settings device={device} toggleChildLock={toggleChildLock} />;
      default:
        return <Dashboard device={device} activeProfile={null} togglePower={togglePower} setPage={setActivePage} />;
    }
  };

  return (
    <Layout activePage={activePage} setPage={setActivePage}>
      {renderContent()}
    </Layout>
  );
}