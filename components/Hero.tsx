import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center items-center pt-24 pb-12 px-6 overflow-hidden bg-aerise-bg">
      {/* Background Placeholder - Removed image, kept clean background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white/50 to-transparent"></div>

      <div className="max-w-4xl w-full text-center space-y-8 animate-fade-in-up">
        <span className="inline-block px-4 py-1.5 rounded-full bg-aerise-mint text-aerise-blue text-sm font-bold tracking-wide mb-4">
          원룸 맞춤 핸즈프리 바디드라이어
        </span>
        
        <h1 className="text-4xl md:text-6xl font-bold text-aerise-blue leading-tight word-keep-all">
          샤워는 끝났는데,<br />
          마무리는 왜 이렇게 귀찮을까요?
        </h1>
        
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed word-keep-all">
          매일 쌓이는 수건 빨래, 축축한 욕실, 덜 마른 몸 위에 꾸역꾸역 입는 옷까지.
          <br className="hidden md:block" />
          <span className="font-semibold text-aerise-blue">샤워 후 5분, 이제 AERISE가 대신할게요.</span>
        </p>

        {/* Product Image Placeholder - Front View */}
        <div className="relative w-full max-w-lg mx-auto aspect-square mt-10 rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-white flex items-center justify-center">
            <div className="text-center text-gray-300">
                <p className="font-bold text-xl mb-2">PRODUCT IMAGE</p>
                <p className="text-sm">[제품 정면 컷 삽입]</p>
            </div>
        </div>

        <div className="pt-8">
            <p className="text-sm text-gray-500 tracking-widest uppercase mb-2">AERISE / 에어라이즈</p>
            <p className="text-aerise-blue font-medium italic">"더 편안한 삶, 더 스마트한 일상, 더 많은 사람을 위한 기술."</p>
        </div>
      </div>
    </section>
  );
};