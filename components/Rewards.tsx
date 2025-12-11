import React from 'react';
import { Package, Gift, ShoppingBag } from 'lucide-react';

export const Rewards: React.FC = () => {
  return (
    <section id="rewards" className="bg-white py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-aerise-blue mb-6 text-center">리워드, 이렇게 받아보실 수 있어요.</h2>
        
        {/* Components Info */}
        <div className="bg-gray-50 mb-16 p-8 rounded-xl text-center">
            <h4 className="font-bold text-gray-700 mb-4">[기본 구성품 안내]</h4>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600">
                <span className="bg-white px-3 py-1 rounded border">바디드라이어 AERISE 본체</span>
                <span className="bg-white px-3 py-1 rounded border">전원 케이블</span>
                <span className="bg-white px-3 py-1 rounded border">사용 설명서</span>
                <span className="bg-white px-3 py-1 rounded border text-aerise-blue font-semibold">(기획) 향 패드 스타터 세트 1개</span>
            </div>
        </div>

        <div className="space-y-6">
            {/* Reward Card 1 */}
            <div className="border border-gray-200 rounded-2xl p-6 md:p-8 hover:border-aerise-blue transition-all hover:shadow-lg flex flex-col md:flex-row gap-6 items-center">
                <div className="w-full md:w-48 aspect-square bg-white border border-gray-200 rounded-xl overflow-hidden shrink-0 flex items-center justify-center">
                    <span className="text-gray-300 text-sm">[단품 이미지]</span>
                </div>
                <div className="flex-1 text-center md:text-left">
                    <div className="inline-block bg-red-100 text-red-600 text-xs font-bold px-2 py-1 rounded mb-2">한정 수량</div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">[단품 얼리버드] 먼저 써보는 가장 빠른 방법</h3>
                    <p className="text-gray-600 text-sm mb-4">가장 빠르고, 가장 저렴하게 AERISE 를 경험해볼 수 있는 한정 수량 리워드입니다.</p>
                    <p className="text-sm font-medium">구성: 본체 1대</p>
                </div>
                <div className="shrink-0">
                    <button className="bg-aerise-blue text-white px-6 py-3 rounded-xl font-bold hover:bg-opacity-90 transition w-full md:w-auto">선택하기</button>
                </div>
            </div>

            {/* Reward Card 2 */}
            <div className="border border-gray-200 rounded-2xl p-6 md:p-8 hover:border-aerise-blue transition-all hover:shadow-lg flex flex-col md:flex-row gap-6 items-center">
                <div className="w-full md:w-48 aspect-square bg-white border border-gray-200 rounded-xl overflow-hidden shrink-0 flex items-center justify-center">
                    <span className="text-gray-300 text-sm">[단품 이미지]</span>
                </div>
                <div className="flex-1 text-center md:text-left">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">[단품 기본] 샤워 후 루틴을 바꾸는 첫걸음</h3>
                    <p className="text-gray-600 text-sm mb-4">펀딩 전체 기간 동안 유지되는 기준 리워드입니다.</p>
                    <p className="text-sm font-medium">구성: 본체 1대</p>
                </div>
                <div className="shrink-0">
                    <button className="bg-gray-800 text-white px-6 py-3 rounded-xl font-bold hover:bg-opacity-90 transition w-full md:w-auto">선택하기</button>
                </div>
            </div>

            {/* Reward Card 3 */}
            <div className="border border-gray-200 rounded-2xl p-6 md:p-8 hover:border-aerise-blue transition-all hover:shadow-lg flex flex-col md:flex-row gap-6 items-center bg-aerise-bg/30">
                <div className="w-full md:w-48 aspect-square bg-white border border-gray-200 rounded-xl overflow-hidden shrink-0 flex items-center justify-center">
                    <span className="text-gray-300 text-sm">[세트 이미지]</span>
                </div>
                <div className="flex-1 text-center md:text-left">
                    <div className="inline-block bg-aerise-blue text-white text-xs font-bold px-2 py-1 rounded mb-2">추천</div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">[번들 1] 샤워 루틴 풀 패키지</h3>
                    <p className="text-gray-600 text-sm mb-4">"샤워 후, 호텔처럼 가운 입고 로션 바르는 루틴"을 꿈꾸는 분들을 위한 패키지.</p>
                    <p className="text-sm font-medium">구성: 본체 + 샤워가운 + 바디로션</p>
                </div>
                <div className="shrink-0">
                    <button className="bg-gray-800 text-white px-6 py-3 rounded-xl font-bold hover:bg-opacity-90 transition w-full md:w-auto">선택하기</button>
                </div>
            </div>
            
             {/* Reward Card 4 */}
            <div className="border border-gray-200 rounded-2xl p-6 md:p-8 hover:border-aerise-blue transition-all hover:shadow-lg flex flex-col md:flex-row gap-6 items-center">
                <div className="w-full md:w-48 aspect-square bg-white border border-gray-200 rounded-xl overflow-hidden shrink-0 flex items-center justify-center">
                    <span className="text-gray-300 text-sm">[1+1 이미지]</span>
                </div>
                <div className="flex-1 text-center md:text-left">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">[1+1 얼리버드] 룸메/커플과 함께 쓰는 세트</h3>
                    <p className="text-gray-600 text-sm mb-4">바디드라이어 2대를 동시에 받아볼 수 있는 리워드. "룸메랑 나눠 사면 1인당 20만 원대".</p>
                    <p className="text-sm font-medium">구성: 본체 2대</p>
                </div>
                <div className="shrink-0">
                    <button className="bg-gray-800 text-white px-6 py-3 rounded-xl font-bold hover:bg-opacity-90 transition w-full md:w-auto">선택하기</button>
                </div>
            </div>

        </div>
      </div>
    </section>
  );
};