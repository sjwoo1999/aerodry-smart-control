import React from 'react';

export const HowToUse: React.FC = () => {
  return (
    <section className="bg-white py-24 px-6 rounded-t-[3rem] -mt-10">
      <div className="max-w-6xl mx-auto">
        
        {/* How To */}
        <div className="mb-24">
            <h2 className="text-3xl font-bold text-aerise-blue mb-12 text-center">HOW TO – 이렇게 쓰면 제일 편합니다.</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="relative group">
                    <div className="aspect-square bg-white border border-gray-200 rounded-2xl mb-4 overflow-hidden flex items-center justify-center">
                         <span className="text-gray-300 text-xs">[이미지 1]</span>
                    </div>
                    <div className="bg-aerise-blue text-white w-8 h-8 rounded-full flex items-center justify-center font-bold absolute -top-4 -left-4 border-4 border-white">1</div>
                    <h3 className="font-bold text-lg mb-2">대략 물기 제거</h3>
                    <p className="text-sm text-gray-600">샤워 후, 수건으로 물기를 대략만 닦아 주세요.</p>
                </div>

                <div className="relative group">
                    <div className="aspect-square bg-white border border-gray-200 rounded-2xl mb-4 overflow-hidden flex items-center justify-center">
                        <span className="text-gray-300 text-xs">[이미지 2]</span>
                    </div>
                    <div className="bg-aerise-blue text-white w-8 h-8 rounded-full flex items-center justify-center font-bold absolute -top-4 -left-4 border-4 border-white">2</div>
                    <h3 className="font-bold text-lg mb-2">모드 선택</h3>
                    <p className="text-sm text-gray-600">여름엔 BREEZE, 아침엔 COZY, 급한 날엔 QUICK DRY.</p>
                </div>

                <div className="relative group">
                    <div className="aspect-square bg-white border border-gray-200 rounded-2xl mb-4 overflow-hidden flex items-center justify-center">
                        <span className="text-gray-300 text-xs">[이미지 3]</span>
                    </div>
                    <div className="bg-aerise-blue text-white w-8 h-8 rounded-full flex items-center justify-center font-bold absolute -top-4 -left-4 border-4 border-white">3</div>
                    <h3 className="font-bold text-lg mb-2">1~3분 건조</h3>
                    <p className="text-sm text-gray-600">몸을 살짝 돌려가며 전신을 말립니다.</p>
                </div>

                <div className="relative group">
                    <div className="aspect-square bg-white border border-gray-200 rounded-2xl mb-4 overflow-hidden flex items-center justify-center">
                        <span className="text-gray-300 text-xs">[이미지 4]</span>
                    </div>
                    <div className="bg-aerise-blue text-white w-8 h-8 rounded-full flex items-center justify-center font-bold absolute -top-4 -left-4 border-4 border-white">4</div>
                    <h3 className="font-bold text-lg mb-2">준비 끝</h3>
                    <p className="text-sm text-gray-600">바로 옷을 입고, 남은 시간엔 화장/머리/짐 챙기기에 집중하세요.</p>
                </div>
            </div>
        </div>

        {/* User Stories */}
        <div className="bg-aerise-bg rounded-3xl p-8 md:p-12">
            <h3 className="text-2xl font-bold text-aerise-blue mb-10 text-center">이런 사람의 하루에, AERISE가 들어가면?</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="flex flex-col gap-4">
                     <div className="flex items-center gap-4 mb-2">
                        <div className="w-16 h-16 rounded-full bg-white border border-gray-200 overflow-hidden flex items-center justify-center shrink-0">
                            <span className="text-gray-300 text-xs">사진</span>
                        </div>
                        <div>
                            <p className="font-bold text-lg text-gray-800">1교시 지각 단골, 자취 대학생 지수</p>
                            <p className="text-xs text-gray-500">22세 / 대학생</p>
                        </div>
                     </div>
                     <div className="bg-white p-6 rounded-xl shadow-sm border border-white relative">
                        <div className="absolute top-0 left-4 -translate-y-1/2 w-4 h-4 bg-white rotate-45 border-t border-l border-white"></div>
                        <p className="text-gray-600 italic leading-relaxed">
                            "샤워 후에 제일 오래 걸리는 게 사실 ‘말리는 시간’이더라고요. 
                            지금은 바디드라이어 앞에 3분 서 있는 동안 머릿속으로 오늘 할 일 정리하고, 바로 옷 입고 나가요. 
                            아침이 조금 덜 정신없어졌어요."
                        </p>
                     </div>
                </div>

                <div className="flex flex-col gap-4">
                     <div className="flex items-center gap-4 mb-2">
                         <div className="w-16 h-16 rounded-full bg-white border border-gray-200 overflow-hidden flex items-center justify-center shrink-0">
                            <span className="text-gray-300 text-xs">사진</span>
                        </div>
                        <div>
                            <p className="font-bold text-lg text-gray-800">밤에 운동하는 직장인 민준</p>
                            <p className="text-xs text-gray-500">27세 / 직장인</p>
                        </div>
                     </div>
                     <div className="bg-white p-6 rounded-xl shadow-sm border border-white relative">
                        <div className="absolute top-0 left-4 -translate-y-1/2 w-4 h-4 bg-white rotate-45 border-t border-l border-white"></div>
                        <p className="text-gray-600 italic leading-relaxed">
                            "운동 끝나고 집에 오면, 샤워하고도 몸이 안 식어서 에어컨 틀기도 애매했는데요. 
                            브리즈 모드로 땀만 싹 식히고 나면 이불에 땀 밴 느낌 없이 바로 누워 잘 수 있어요."
                        </p>
                     </div>
                </div>
            </div>
        </div>

      </div>
    </section>
  );
};