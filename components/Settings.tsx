import React from 'react';
import { Wifi, Smartphone, Lock, Globe, FileText, ChevronRight } from 'lucide-react';
import { Card } from './ui/Card';
import { DeviceState } from '../types';

interface SettingsProps {
    device: DeviceState;
    toggleChildLock: () => void;
}

export const Settings: React.FC<SettingsProps> = ({ device, toggleChildLock }) => {
    return (
        <div className="space-y-6 pb-24 animate-in fade-in duration-500">
             <h2 className="text-xl font-bold text-slate-800">Settings</h2>

             <Card title="Device Configuration">
                <div className="space-y-1 divide-y divide-slate-100">
                    <button className="w-full flex items-center justify-between py-3 hover:bg-slate-50 transition-colors">
                        <div className="flex items-center gap-3">
                            <div className="p-2 bg-blue-50 text-blue-500 rounded-lg"><Wifi size={18}/></div>
                            <div className="text-left">
                                <div className="text-sm font-semibold text-slate-700">Wi-Fi Network</div>
                                <div className="text-xs text-slate-500">Home_5G_Secure</div>
                            </div>
                        </div>
                        <ChevronRight size={16} className="text-slate-300"/>
                    </button>
                    
                    <button className="w-full flex items-center justify-between py-3 hover:bg-slate-50 transition-colors">
                        <div className="flex items-center gap-3">
                            <div className="p-2 bg-purple-50 text-purple-500 rounded-lg"><Smartphone size={18}/></div>
                            <div className="text-left">
                                <div className="text-sm font-semibold text-slate-700">Firmware</div>
                                <div className="text-xs text-slate-500">v2.4.1 (Up to date)</div>
                            </div>
                        </div>
                        <ChevronRight size={16} className="text-slate-300"/>
                    </button>

                    <div className="w-full flex items-center justify-between py-3">
                        <div className="flex items-center gap-3">
                            <div className="p-2 bg-orange-50 text-orange-500 rounded-lg"><Lock size={18}/></div>
                            <div className="text-left">
                                <div className="text-sm font-semibold text-slate-700">Child Lock</div>
                                <div className="text-xs text-slate-500">Prevents physical input</div>
                            </div>
                        </div>
                        <div 
                            className={`w-12 h-6 rounded-full p-1 cursor-pointer transition-colors ${device.childLock ? 'bg-orange-500' : 'bg-slate-200'}`}
                            onClick={toggleChildLock}
                        >
                            <div className={`w-4 h-4 bg-white rounded-full shadow-md transition-transform ${device.childLock ? 'translate-x-6' : ''}`}></div>
                        </div>
                    </div>
                </div>
             </Card>

             <Card title="General">
                 <div className="space-y-1 divide-y divide-slate-100">
                    <button className="w-full flex items-center justify-between py-3">
                        <div className="flex items-center gap-3">
                            <div className="p-2 bg-slate-100 text-slate-500 rounded-lg"><Globe size={18}/></div>
                            <span className="text-sm font-semibold text-slate-700">Language</span>
                        </div>
                        <span className="text-xs text-slate-400 flex items-center gap-1">English <ChevronRight size={14}/></span>
                    </button>
                    <button className="w-full flex items-center justify-between py-3">
                        <div className="flex items-center gap-3">
                            <div className="p-2 bg-slate-100 text-slate-500 rounded-lg"><FileText size={18}/></div>
                            <span className="text-sm font-semibold text-slate-700">Legal & Privacy</span>
                        </div>
                        <ChevronRight size={16} className="text-slate-300"/>
                    </button>
                 </div>
             </Card>

             <div className="text-center text-xs text-slate-400 pt-4">
                <p>AeroDry Smart Control App</p>
                <p>Version 1.0.0 (Build 420)</p>
             </div>
        </div>
    );
};