import React, { useState } from 'react';
import { Hero } from './components/Hero';
import { ProblemSolution } from './components/ProblemSolution';
import { Features } from './components/Features';
import { Stats } from './components/Stats';
import { HowToUse } from './components/HowToUse';
import { Reviews } from './components/Reviews';
import { Rewards } from './components/Rewards';
import { Team } from './components/Team';
import { StickyCTA } from './components/StickyCTA';
import { Header } from './components/Header';

export default function App() {
  return (
    <div className="min-h-screen bg-aerise-bg text-gray-800 font-sans selection:bg-aerise-mint selection:text-aerise-blue">
      <Header />
      
      <main className="flex flex-col gap-0">
        <Hero />
        <ProblemSolution />
        <Features />
        <Stats />
        <HowToUse />
        <Reviews />
        <Rewards />
        <Team />
      </main>

      <StickyCTA />
      
      <footer className="bg-aerise-blue text-white py-12 px-6 text-center text-sm">
        <p className="opacity-70">© 2024 AERISE. All rights reserved.</p>
        <p className="opacity-50 mt-2">고려대학교 학생 창업팀 AERISE</p>
      </footer>
    </div>
  );
}