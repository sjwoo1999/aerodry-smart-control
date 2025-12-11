import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { Timer, Droplets, Smile, ArrowRight } from 'lucide-react';

const timeData = [
  { name: '기존 루틴', minutes: 10, fill: '#E5E7EB' }, // Gray
  { name: 'AERISE', minutes: 3, fill: '#2A4C7F' },    // Blue
];

export const Stats: React.FC = () => {
  return (
    <section id="stats" className="py-24 px-6 bg-aerise-bg">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-aerise-blue text-center mb-16">
          샤워 후 루틴,<br/>숫자로 보면 더 선명해집니다.
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Before / After Infographic (Simulated with Components) */}
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-aerise-beige">
             <h3 className="text-xl font-bold text-gray-800 mb-8 text-center">Before & After</h3>
             
             <div className="flex justify-between items-center gap-4">
                {/* Before */}
                <div className="flex-1 flex flex-col items-center gap-4 opacity-60">
                    <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center">
                        <Timer className="text-gray-500" />
                    </div>
                    <div className="text-center">
                        <p className="font-bold text-gray-500">10분 이상</p>
                        <p className="text-xs text-gray-400">준비 시간</p>
                    </div>
                    <div className="w-full h-1 bg-gray-200 rounded-full overflow-hidden">
                        <div className="w-full h-full bg-gray-400"></div>
                    </div>
                </div>

                <div className="text-aerise-blue">
                    <ArrowRight size={32} />
                </div>

                {/* After */}
                <div className="flex-1 flex flex-col items-center gap-4">
                    <div className="w-16 h-16 bg-aerise-mint rounded-full flex items-center justify-center">
                        <Timer className="text-aerise-blue" />
                    </div>
                    <div className="text-center">
                        <p className="font-bold text-aerise-blue">3분 컷</p>
                        <p className="text-xs text-gray-400">준비 시간</p>
                    </div>
                    <div className="w-full h-1 bg-gray-200 rounded-full overflow-hidden">
                        <div className="w-[30%] h-full bg-aerise-blue"></div>
                    </div>
                </div>
             </div>
             
             <div className="mt-8 pt-8 border-t border-gray-100 grid grid-cols-2 gap-4">
                 <div className="text-center">
                    <p className="text-2xl font-bold text-gray-800">30-40%</p>
                    <p className="text-sm text-gray-500">수건 사용량 감소</p>
                 </div>
                 <div className="text-center">
                    <p className="text-2xl font-bold text-gray-800">Dry</p>
                    <p className="text-sm text-gray-500">욕실 습기 제거</p>
                 </div>
             </div>
          </div>

          {/* Chart & Details */}
          <div className="space-y-8">
            <div className="bg-white p-6 rounded-3xl shadow-sm border border-aerise-beige h-64">
                <h4 className="text-sm font-bold text-gray-400 mb-4 text-center uppercase tracking-wide">샤워 후 준비 시간 (분)</h4>
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={timeData} layout="vertical" margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                        <XAxis type="number" hide />
                        <YAxis dataKey="name" type="category" width={80} tick={{fontSize: 12, fill: '#666'}} axisLine={false} tickLine={false} />
                        <Tooltip cursor={{fill: 'transparent'}} contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} />
                        <Bar dataKey="minutes" radius={[0, 4, 4, 0]} barSize={32}>
                            {timeData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={entry.fill} />
                            ))}
                        </Bar>
                    </BarChart>
                </ResponsiveContainer>
            </div>

            <ul className="space-y-4 text-gray-700 text-sm md:text-base">
                <li className="flex gap-3">
                    <span className="font-bold text-aerise-blue shrink-0">1.</span>
                    <span><span className="font-bold">시간 절약:</span> 수건으로 대략 닦기 + 3분 바디드라이어 → 바로 옷 착용</span>
                </li>
                <li className="flex gap-3">
                    <span className="font-bold text-aerise-blue shrink-0">2.</span>
                    <span><span className="font-bold">수건 감소:</span> 1일 2회 샤워 기준, "수건 2장 → 1장"으로 시뮬레이션 결과</span>
                </li>
                <li className="flex gap-3">
                    <span className="font-bold text-aerise-blue shrink-0">3.</span>
                    <span><span className="font-bold">욕실 케어:</span> 샤워 후 욕실에 고여 있던 습한 공기를 함께 빼내는 것을 목표 (지향)</span>
                </li>
            </ul>
            <p className="text-xs text-gray-400 mt-2">* 예상 목표값입니다.</p>
          </div>

        </div>
      </div>
    </section>
  );
};