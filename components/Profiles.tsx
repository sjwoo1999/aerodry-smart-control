import React from 'react';
import { User, Check, Plus } from 'lucide-react';
import { UserProfile } from '../types';
import { Card } from './ui/Card';

interface ProfilesProps {
  profiles: UserProfile[];
  activeProfileId: string | null;
  setActiveProfile: (id: string) => void;
}

export const Profiles: React.FC<ProfilesProps> = ({ profiles, activeProfileId, setActiveProfile }) => {
  return (
    <div className="space-y-6 pb-24 animate-in slide-in-from-right-4 duration-500">
      <h2 className="text-xl font-bold text-slate-800">Family Profiles</h2>
      
      <div className="grid grid-cols-2 gap-4">
        {profiles.map((profile) => {
          const isActive = profile.id === activeProfileId;
          return (
            <Card 
              key={profile.id} 
              className={`cursor-pointer transition-all border-2 relative overflow-hidden ${
                isActive ? 'border-blue-500 bg-blue-50' : 'border-transparent hover:border-slate-200'
              }`}
            >
              <div onClick={() => setActiveProfile(profile.id)}>
                <div className={`w-12 h-12 rounded-full mb-4 flex items-center justify-center text-white ${profile.avatarColor}`}>
                  <User size={24} />
                </div>
                <h3 className="font-bold text-slate-800">{profile.name}</h3>
                <div className="text-xs text-slate-500 mt-2 space-y-1">
                  <p>Wind: {profile.presets.windSpeed}%</p>
                  <p>Temp: {profile.presets.temperature}°C</p>
                </div>
              </div>
              
              {isActive && (
                <div className="absolute top-2 right-2 bg-blue-500 text-white rounded-full p-1">
                  <Check size={12} />
                </div>
              )}
            </Card>
          );
        })}

        <button className="border-2 border-dashed border-slate-300 rounded-2xl flex flex-col items-center justify-center min-h-[160px] text-slate-400 hover:bg-slate-50 hover:border-slate-400 transition-colors">
          <Plus size={32} className="mb-2" />
          <span className="font-medium">Add User</span>
        </button>
      </div>

      {activeProfileId && (
        <Card title="Current Preferences">
          <p className="text-sm text-slate-500 mb-4">
            Selecting this profile automatically sets the device to your preferred settings.
          </p>
          <button className="text-blue-600 text-sm font-semibold">Edit Preferences</button>
        </Card>
      )}
    </div>
  );
};