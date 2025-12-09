import React, { useState } from 'react';
import { Plus, ArrowRight, Trash2, Clock, Droplets, Moon } from 'lucide-react';
import { Routine } from '../types';
import { Card } from './ui/Card';
import { Button } from './ui/Button';

interface AutomationProps {
  routines: Routine[];
  addRoutine: (routine: Routine) => void;
  deleteRoutine: (id: string) => void;
  toggleRoutine: (id: string) => void;
}

export const Automation: React.FC<AutomationProps> = ({ routines, addRoutine, deleteRoutine, toggleRoutine }) => {
  const [isCreating, setIsCreating] = useState(false);
  const [newTrigger, setNewTrigger] = useState('time');
  const [newAction, setNewAction] = useState('fast');

  const handleCreate = () => {
    const id = Date.now().toString();
    const routine: Routine = {
      id,
      name: `Routine ${routines.length + 1}`,
      trigger: newTrigger,
      action: newAction,
      isActive: true
    };
    addRoutine(routine);
    setIsCreating(false);
  };

  const getTriggerIcon = (t: string) => {
    if (t === 'time') return <Clock size={16} />;
    if (t === 'humidity') return <Droplets size={16} />;
    return <Moon size={16} />;
  };

  return (
    <div className="space-y-6 pb-24 animate-in fade-in duration-500">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold text-slate-800">Smart Routines</h2>
        <Button onClick={() => setIsCreating(!isCreating)} variant="secondary" className="!p-2">
          <Plus size={20} />
        </Button>
      </div>

      {isCreating && (
        <Card className="border-blue-200 border-2 bg-blue-50">
          <h3 className="font-bold text-blue-900 mb-4">Create New Routine</h3>
          
          <div className="space-y-4">
            <div>
              <label className="text-xs font-bold text-blue-700 uppercase mb-1 block">IF (Trigger)</label>
              <select 
                className="w-full p-3 rounded-xl border border-blue-200 bg-white text-slate-700"
                value={newTrigger}
                onChange={(e) => setNewTrigger(e.target.value)}
              >
                <option value="time">Time is 07:00 AM</option>
                <option value="humidity">Humidity &gt; 80%</option>
                <option value="shower">Shower Ends</option>
                <option value="night">Night Mode Activates</option>
              </select>
            </div>

            <div className="flex justify-center text-blue-400">
              <ArrowRight size={24} />
            </div>

            <div>
              <label className="text-xs font-bold text-blue-700 uppercase mb-1 block">THEN (Action)</label>
              <select 
                className="w-full p-3 rounded-xl border border-blue-200 bg-white text-slate-700"
                value={newAction}
                onChange={(e) => setNewAction(e.target.value)}
              >
                <option value="fast">Turn on Fast Dry</option>
                <option value="eco">Start Eco Mode</option>
                <option value="preheat">Pre-heat to 40°C</option>
                <option value="off">Turn Off Device</option>
              </select>
            </div>

            <Button onClick={handleCreate} fullWidth>Save Routine</Button>
          </div>
        </Card>
      )}

      <div className="space-y-3">
        {routines.map((routine) => (
          <Card key={routine.id} className="flex justify-between items-center">
            <div className="flex items-center gap-4">
              <div className={`p-3 rounded-full ${routine.isActive ? 'bg-blue-100 text-blue-600' : 'bg-slate-100 text-slate-400'}`}>
                {getTriggerIcon(routine.trigger)}
              </div>
              <div>
                <div className="font-semibold text-slate-800 flex items-center gap-2">
                  <span className="capitalize">{routine.trigger}</span>
                  <ArrowRight size={14} className="text-slate-400" />
                  <span className="capitalize">{routine.action}</span>
                </div>
                <div className="text-xs text-slate-500">
                  {routine.isActive ? 'Active' : 'Disabled'}
                </div>
              </div>
            </div>
            
            <div className="flex items-center gap-2">
              <div 
                className={`w-12 h-6 rounded-full p-1 cursor-pointer transition-colors ${routine.isActive ? 'bg-blue-500' : 'bg-slate-200'}`}
                onClick={() => toggleRoutine(routine.id)}
              >
                <div className={`w-4 h-4 bg-white rounded-full shadow-md transition-transform ${routine.isActive ? 'translate-x-6' : ''}`}></div>
              </div>
              <button 
                onClick={() => deleteRoutine(routine.id)}
                className="p-2 text-red-300 hover:text-red-500"
              >
                <Trash2 size={18} />
              </button>
            </div>
          </Card>
        ))}

        {routines.length === 0 && !isCreating && (
          <div className="text-center py-10 text-slate-400">
            <p>No routines active.</p>
            <p className="text-sm">Tap + to create one.</p>
          </div>
        )}
      </div>
    </div>
  );
};