import React from 'react';
import { RadialBarChart, RadialBar, PolarAngleAxis, ResponsiveContainer } from 'recharts';
import { AlertTriangle, CheckCircle, RotateCcw } from 'lucide-react';
import { Card } from './ui/Card';
import { Button } from './ui/Button';

interface MaintenanceProps {
  filterHealth: number;
}

export const Maintenance: React.FC<MaintenanceProps> = ({ filterHealth }) => {
  const data = [{ name: 'health', value: filterHealth, fill: filterHealth > 20 ? '#10b981' : '#ef4444' }];

  return (
    <div className="space-y-6 pb-24 animate-in zoom-in-95 duration-500">
      <h2 className="text-xl font-bold text-slate-800">Device Health</h2>

      <Card className="flex flex-col items-center">
        <h3 className="font-semibold text-slate-600 mb-2">HEPA Filter Status</h3>
        <div className="h-64 w-full relative">
          <ResponsiveContainer width="100%" height="100%">
            <RadialBarChart 
              innerRadius="70%" 
              outerRadius="100%" 
              barSize={20} 
              data={data} 
              startAngle={180} 
              endAngle={0}
            >
              <PolarAngleAxis type="number" domain={[0, 100]} angleAxisId={0} tick={false} />
              <RadialBar background dataKey="value" cornerRadius={10} />
            </RadialBarChart>
          </ResponsiveContainer>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 translate-y-4 text-center">
            <div className={`text-4xl font-bold ${filterHealth > 20 ? 'text-emerald-500' : 'text-red-500'}`}>
              {filterHealth}%
            </div>
            <div className="text-xs text-slate-400 uppercase font-bold tracking-wider">Remaining</div>
          </div>
        </div>

        <div className="mt-4 p-4 bg-slate-50 rounded-xl w-full flex items-start gap-3">
            {filterHealth > 20 ? (
                <CheckCircle className="text-emerald-500 shrink-0" size={20} />
            ) : (
                <AlertTriangle className="text-red-500 shrink-0" size={20} />
            )}
            <div className="text-sm text-slate-600">
                {filterHealth > 20 
                    ? "Your filter is in good condition. Regular cleaning ensures optimal air quality."
                    : "Filter replacement recommended soon. Air flow efficiency may be reduced."}
            </div>
        </div>
      </Card>

      <div className="grid grid-cols-1 gap-4">
        <Card title="Quick Actions">
            <div className="space-y-3">
                <Button variant="secondary" fullWidth className="justify-between">
                    <span>Order Replacement Filter</span>
                    <span className="text-slate-400 text-xs">Amazon</span>
                </Button>
                <Button variant="secondary" fullWidth className="justify-between">
                    <span>Reset Filter Counter</span>
                    <RotateCcw size={16} />
                </Button>
            </div>
        </Card>

        <Card title="System Logs">
            <div className="space-y-3 text-xs text-slate-500">
                <div className="flex justify-between border-b border-slate-100 pb-2">
                    <span>Firmware Updated to v2.4.0</span>
                    <span className="opacity-50">Today, 10:00 AM</span>
                </div>
                <div className="flex justify-between border-b border-slate-100 pb-2">
                    <span>Filter check passed</span>
                    <span className="opacity-50">Yesterday</span>
                </div>
                <div className="flex justify-between">
                    <span>Device reset performed</span>
                    <span className="opacity-50">2 days ago</span>
                </div>
            </div>
        </Card>
      </div>
    </div>
  );
};