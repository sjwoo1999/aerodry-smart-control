import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-aerise-bg/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
        <div className="text-2xl font-bold text-aerise-blue tracking-tighter">AERISE</div>
        <nav className="hidden md:flex gap-8 text-sm font-medium text-gray-600">
          <a href="#features" className="hover:text-aerise-blue transition-colors">기능소개</a>
          <a href="#stats" className="hover:text-aerise-blue transition-colors">효과</a>
          <a href="#reviews" className="hover:text-aerise-blue transition-colors">리뷰</a>
          <a href="#rewards" className="hover:text-aerise-blue transition-colors">리워드</a>
        </nav>
        <button className="md:hidden text-aerise-blue">
          <Menu size={24} />
        </button>
      </div>
    </header>
  );
};