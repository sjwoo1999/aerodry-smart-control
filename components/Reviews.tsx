import React from 'react';
import { Star } from 'lucide-react';

export const Reviews: React.FC = () => {
  return (
    <section id="reviews" className="py-24 px-6 bg-aerise-bg">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-aerise-blue mb-12">테스트 유저들이 먼저 써봤어요.</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Review 1 */}
          <div className="bg-white p-8 rounded-2xl border-2 border-aerise-mint/50 hover:border-aerise-mint transition-colors shadow-sm text-left">
            <div className="flex text-yellow-400 mb-4 gap-1">
              {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
            </div>
            <h3 className="font-bold text-xl text-gray-800 mb-3">"아침 10분이 생긴 느낌이에요."</h3>
            <p className="text-gray-600 text-sm mb-6 leading-relaxed">
              통학 시간이 길어서 항상 샤워 후에 쫓기듯 준비했는데, 말리는 시간을 줄이니까 진짜로 시간이 늘어났어요.
            </p>
            <p className="text-xs text-gray-400 font-medium tracking-wide">- 22세 / 대학생 / 자취 -</p>
          </div>

          {/* Review 2 */}
          <div className="bg-white p-8 rounded-2xl border-2 border-aerise-mint/50 hover:border-aerise-mint transition-colors shadow-sm text-left">
             <div className="flex text-yellow-400 mb-4 gap-1">
              {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
            </div>
            <h3 className="font-bold text-xl text-gray-800 mb-3">"수건 빨래 줄어든 게 제일 체감돼요."</h3>
            <p className="text-gray-600 text-sm mb-6 leading-relaxed">
              예전엔 수건만 모아서 빨래 돌릴 정도였는데, 지금은 빨래 바구니에 수건이 덜 쌓이더라고요.
            </p>
            <p className="text-xs text-gray-400 font-medium tracking-wide">- 24세 / 대학생 / 기숙사 -</p>
          </div>

          {/* Review 3 */}
          <div className="bg-white p-8 rounded-2xl border-2 border-aerise-mint/50 hover:border-aerise-mint transition-colors shadow-sm text-left">
             <div className="flex text-yellow-400 mb-4 gap-1">
              {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
            </div>
            <h3 className="font-bold text-xl text-gray-800 mb-3">"운동 루틴의 마지막이 더 상쾌해졌어요."</h3>
            <p className="text-gray-600 text-sm mb-6 leading-relaxed">
              밤에 러닝하고 와서 땀 식힐 때 딱 좋습니다.
            </p>
            <p className="text-xs text-gray-400 font-medium tracking-wide">- 27세 / 직장인 / 원룸 -</p>
          </div>
        </div>
      </div>
    </section>
  );
};