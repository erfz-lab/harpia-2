import React from 'react';
import { ArrowRight } from 'lucide-react';
import { HERO_CONTENT } from '../constants';
import { Box } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-brand-dark bg-hero-glow bg-no-repeat bg-top">
      
      {/* Abstract Background Element */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-purple/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        {/* Floating Icon above title */}
        <div className="mb-8 flex justify-center animate-bounce duration-[3000ms]">
            <div className="w-16 h-16 bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-lg flex items-center justify-center shadow-[0_0_30px_rgba(139,92,246,0.3)]">
                <Box className="text-brand-purple w-8 h-8" />
            </div>
        </div>

        {/* Badge */}
        <div className="inline-block mb-6">
          <span className="px-4 py-1.5 rounded-full bg-brand-purple/20 text-brand-purple text-xs font-bold tracking-widest border border-brand-purple/30 uppercase">
            {HERO_CONTENT.badge}
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-6">
          {HERO_CONTENT.titlePart1} <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-purple to-brand-pink">
            {HERO_CONTENT.titlePart2}
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-brand-muted max-w-2xl mx-auto mb-10 leading-relaxed">
          {HERO_CONTENT.subtitle}
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="px-8 py-4 bg-white text-brand-dark font-bold rounded-lg hover:bg-gray-200 transition-all transform hover:scale-105 flex items-center gap-2">
            {HERO_CONTENT.ctaPrimary}
            <ArrowRight size={18} />
          </button>
          <button className="px-8 py-4 bg-transparent border border-white/20 text-white font-medium rounded-lg hover:bg-white/10 transition-all">
            {HERO_CONTENT.ctaSecondary}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
