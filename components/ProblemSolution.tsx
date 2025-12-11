import React from 'react';
import { Droplets, Frown, Clock, Shirt } from 'lucide-react';

export const ProblemSolution: React.FC = () => {
  return (
    <section className="py-20 px-6 max-w-6xl mx-auto">
      {/* Problem */}
      <div className="mb-24">
        <h2 className="text-3xl font-bold text-aerise-blue text-center mb-12">샤워 후, 이런 경험 있나요?</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-aerise-beige flex flex-col items-center text-center">
            <div className="w-12 h-12 bg-aerise-bg rounded-full flex items-center justify-center text-aerise-blue mb-4">
              <Droplets size={24} />
            </div>
            <p className="text-gray-700 font-medium leading-relaxed">
              "수건으로 여러 번 닦았는데도 등·종아리는 여전히 축축할 때"
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-aerise-beige flex flex-col items-center text-center">
             <div className="w-12 h-12 bg-aerise-bg rounded-full flex items-center justify-center text-aerise-blue mb-4">
              <Clock size={24} />
            </div>
            <p className="text-gray-700 font-medium leading-relaxed">
              "좁은 욕실이라 샤워만 하면 바닥이 한참 동안 안 마를 때"
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-aerise-beige flex flex-col items-center text-center">
             <div className="w-12 h-12 bg-aerise-bg rounded-full flex items-center justify-center text-aerise-blue mb-4">
              <Shirt size={24} />
            </div>
            <p className="text-gray-700 font-medium leading-relaxed">
              "급해서 덜 마른 몸에 옷부터 입고 나가서 하루 종일 찝찝함을 끌어안고 다닐 때"
            </p>
          </div>
        </div>

        <div className="mt-10 text-center text-gray-500">
            <p>”수건 빨래가 쌓여서, '도대체 수건은 왜 이렇게 많이 나와…?' 싶을 때</p>
            <p className="mt-4 font-semibold text-aerise-blue">사소하지만 매일 반복되는 이 불편함들.<br/>그냥 참기엔, 우리가 너무 바쁘고 피곤하잖아요.</p>
        </div>
      </div>

      {/* Transition Image Placeholder */}
      <div className="w-full h-64 md:h-80 bg-white border border-gray-200 rounded-2xl overflow-hidden mb-24 relative flex items-center justify-center shadow-sm">
        <div className="text-center text-gray-300">
            <p className="font-bold text-lg">LIFESTYLE IMAGE</p>
            <p className="text-sm">[원룸 욕실 라이프스타일 컷 삽입]</p>
        </div>
      </div>

      {/* Solution */}
      <div className="text-center max-w-3xl mx-auto space-y-6">
        <h3 className="text-2xl font-bold text-aerise-blue">그래서 우리는,</h3>
        <p className="text-lg leading-relaxed text-gray-700 word-keep-all">
          당신의 샤워시간 처음부터 끝까지 <br className="md:hidden"/>
          가장 편안하게 쉴 수 있는 시간으로 구상했습니다.<br/><br/>
          수건 빨래는 줄이고, 드라이기 들 팔 힘은 아끼고,<br/>
          <span className="bg-aerise-mint px-2">샤워 후 5분을 그냥 서 있기만 하면 끝나는 시간으로요.</span>
        </p>
      </div>
    </section>
  );
};