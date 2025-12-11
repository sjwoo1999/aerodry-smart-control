import React from 'react';

export const Team: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-aerise-bg border-t border-gray-200">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-aerise-blue mb-8">우리는, AERISE 팀입니다.</h2>
        
        <div className="text-gray-700 leading-relaxed space-y-6 text-lg">
            <p>
                고려대학교에서 창업 수업을 듣고 있는<br/>
                <span className="font-bold">대학생 팀 AERISE</span>입니다.
            </p>
            <p>
                하루 종일 수업·과제·알바·동아리로 바쁜 생활 속에서,<br/>
                샤워 후 마지막 5분이 얼마나 귀찮고,<br/>
                그래도 포기할 수 없는 시간인지 너무 잘 알고 있습니다.
            </p>
            <p className="text-aerise-blue font-bold text-xl py-4">
                그래서 "진짜 우리가 쓰고 싶은 샤워 후 솔루션"을<br/>직접 기획하게 되었습니다.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm font-medium text-gray-500 py-6 border-y border-gray-200 my-8">
                <div>제품·서비스 기획</div>
                <div>리워드·수익 구조</div>
                <div>상세페이지·콘텐츠</div>
                <div>재무·실행 계획</div>
            </div>

            <p>
                이번 펀딩은 언젠가 정말 우리 욕실에서 쓰고 싶은<br/>
                <span className="font-bold">"샤워 후 파트너"</span>를 만들어가는 첫걸음입니다.
            </p>
        </div>
      </div>
    </section>
  );
};