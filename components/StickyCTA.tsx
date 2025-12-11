import React from 'react';

export const StickyCTA: React.FC = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t border-gray-100 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)] md:hidden z-50">
      <button className="w-full bg-aerise-blue text-white font-bold py-4 rounded-xl shadow-lg active:scale-[0.98] transition-transform">
        펀딩 참여하기
      </button>
    </div>
  );
};