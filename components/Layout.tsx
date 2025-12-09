import React from 'react';
import { Home, Sliders, Settings, Activity, UserCircle } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
  activePage: string;
  setPage: (page: string) => void;
}

export const Layout: React.FC<LayoutProps> = ({ children, activePage, setPage }) => {
  const navItems = [
    { id: 'dashboard', icon: Home, label: 'Home' },
    { id: 'controls', icon: Sliders, label: 'Control' },
    { id: 'profiles', icon: UserCircle, label: 'Users' },
    { id: 'maintenance', icon: Activity, label: 'Health' },
    { id: 'settings', icon: Settings, label: 'Config' },
  ];

  return (
    <div className="w-full max-w-md h-screen bg-slate-50 flex flex-col shadow-2xl overflow-hidden relative font-sans text-slate-900">
      
      {/* Top Status Bar Mockup */}
      <div className="h-10 bg-slate-50 w-full flex justify-between items-center px-6 pt-2 z-20">
        <span className="text-xs font-bold text-slate-800">9:41</span>
        <div className="flex gap-1.5 items-center">
            <div className="w-4 h-4 rounded-full border-2 border-slate-300"></div>
            <div className="w-4 h-4 rounded-full border-2 border-slate-300 bg-slate-800"></div>
        </div>
      </div>

      {/* Main Content Area - Scrollable */}
      <main className="flex-1 overflow-y-auto no-scrollbar p-6 pt-2">
        {children}
      </main>

      {/* Bottom Navigation */}
      <nav className="absolute bottom-0 w-full bg-white border-t border-slate-100 px-6 py-4 pb-8 flex justify-between items-center z-30 shadow-[0_-5px_20px_rgba(0,0,0,0.03)]">
        {navItems.map((item) => {
          const isActive = activePage === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setPage(item.id)}
              className={`flex flex-col items-center gap-1 transition-all duration-300 ${
                isActive ? 'text-blue-600 -translate-y-1' : 'text-slate-400 hover:text-slate-600'
              }`}
            >
              <div className={`p-1.5 rounded-xl transition-all ${isActive ? 'bg-blue-50' : 'bg-transparent'}`}>
                <item.icon size={22} strokeWidth={isActive ? 2.5 : 2} />
              </div>
              {isActive && (
                <span className="text-[10px] font-bold tracking-wide animate-in fade-in zoom-in">{item.label}</span>
              )}
            </button>
          );
        })}
      </nav>
    </div>
  );
};