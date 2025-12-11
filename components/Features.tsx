import React from 'react';
import { Wind, Maximize2, Zap, Sliders, ShieldCheck } from 'lucide-react';

export const Features: React.FC = () => {
  return (
    <section id="features" className="bg-white py-24 px-6 rounded-t-[3rem]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold tracking-widest text-gray-400 uppercase mb-2">Features</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-aerise-blue">바디드라이어 AERISE는요,</h3>
        </div>

        {/* 4 Key Selling Points */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
          <div className="flex gap-4">
            <div className="shrink-0 w-12 h-12 bg-aerise-mint rounded-xl flex items-center justify-center text-aerise-blue">
              <Wind />
            </div>
            <div>
              <h4 className="text-xl font-bold mb-2">손이 자유로운 전신 바람 케어</h4>
              <p className="text-gray-600 leading-relaxed">발끝부터 상반신까지 공기가 올라와 몸을 한 번에 말려줍니다.</p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="shrink-0 w-12 h-12 bg-aerise-mint rounded-xl flex items-center justify-center text-aerise-blue">
              <Maximize2 />
            </div>
            <div>
              <h4 className="text-xl font-bold mb-2">원룸 욕실에 맞춘 슬림 사이즈</h4>
              <p className="text-gray-600 leading-relaxed">호텔·헬스장에 있던 대형 바디드라이어가 아니라, 자취방/오피스텔 욕실에 맞게 줄였습니다.</p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="shrink-0 w-12 h-12 bg-aerise-mint rounded-xl flex items-center justify-center text-aerise-blue">
              <Wind className="rotate-90" />
            </div>
            <div>
              <h4 className="text-xl font-bold mb-2">건조 + 환기를 한 번에</h4>
              <p className="text-gray-600 leading-relaxed">몸만 말리는 게 아니라, 욕실에 갇힌 습한 공기까지 같이 빼주는 걸 목표로 만들었습니다.</p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="shrink-0 w-12 h-12 bg-aerise-mint rounded-xl flex items-center justify-center text-aerise-blue">
              <Sliders />
            </div>
            <div>
              <h4 className="text-xl font-bold mb-2">버튼 한 번, 나만의 루틴</h4>
              <p className="text-gray-600 leading-relaxed">아침에는 빠르게, 밤에는 조용하게. 온도·풍량 모드를 선택해서 샤워 후 루틴을 저장하세요.</p>
            </div>
          </div>
        </div>

        {/* Airflow Diagram Placeholder */}
        <div className="bg-aerise-bg rounded-3xl p-8 mb-24 flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1 w-full aspect-video bg-white rounded-xl overflow-hidden relative shadow-sm border border-gray-100 flex items-center justify-center">
                 <div className="text-center text-gray-300">
                    <p className="font-bold mb-1">AIRFLOW DIAGRAM</p>
                    <p className="text-xs">[바람 흐름 다이어그램 삽입]</p>
                </div>
            </div>
            <div className="flex-1 space-y-6">
                <h4 className="text-2xl font-bold text-aerise-blue">바람은 이렇게 움직입니다.</h4>
                <div className="space-y-4">
                    <p className="text-gray-700"><span className="font-bold text-aerise-blue">1.</span> 아래쪽에서 올라오는 공기 흐름이 발 → 종아리 → 허리 → 상체 순서로 전신을 감싸도록 설계했습니다.</p>
                    <p className="text-gray-700"><span className="font-bold text-aerise-blue">2.</span> 전신을 한 번에 커버하되, 한 지점에만 뜨거운 바람이 오래 머무르지 않도록 분산시키는 게 포인트입니다.</p>
                </div>
            </div>
        </div>

        {/* 3 Modes */}
        <div className="mb-24">
            <h4 className="text-2xl font-bold text-aerise-blue text-center mb-10">온도는, 상황에 맞게 3단계</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-aerise-mint/30 p-6 rounded-2xl border border-aerise-mint text-center hover:bg-aerise-mint/50 transition-colors">
                    <h5 className="font-bold text-aerise-blue text-lg mb-2">BREEZE</h5>
                    <p className="text-sm text-gray-600">샤워 후 땀 식히기 좋은<br/>시원한 바람</p>
                </div>
                <div className="bg-orange-50 p-6 rounded-2xl border border-orange-100 text-center hover:bg-orange-100 transition-colors">
                    <h5 className="font-bold text-orange-800 text-lg mb-2">COZY</h5>
                    <p className="text-sm text-gray-600">매일 쓰기 좋은,<br/>포근한 기본 모드</p>
                </div>
                <div className="bg-red-50 p-6 rounded-2xl border border-red-100 text-center hover:bg-red-100 transition-colors">
                    <h5 className="font-bold text-red-800 text-lg mb-2">QUICK DRY</h5>
                    <p className="text-sm text-gray-600">진짜 급할 때 쓰는<br/>고속 모드</p>
                </div>
            </div>
            <p className="text-center text-xs text-gray-400 mt-4">* 일정 시간 지나면 자동으로 온도를 낮추는 타이머를 기획 중입니다.</p>
        </div>

        {/* Safety */}
        <div className="bg-gray-900 text-white rounded-3xl p-8 md:p-12 text-center">
            <ShieldCheck className="mx-auto text-aerise-mint mb-6" size={48} />
            <h4 className="text-2xl font-bold mb-4">안전을 가장 먼저 생각했습니다.</h4>
            <p className="text-gray-300 max-w-2xl mx-auto leading-relaxed">
                과열 방지 센서와 자동 전원 차단 구조를 기본으로 넣고,<br/>
                물기가 많은 욕실 환경에서도 안심하고 쓸 수 있도록<br/>
                생활 방수 기준을 목표로 개발할 예정입니다.
            </p>
        </div>
      </div>
    </section>
  );
};