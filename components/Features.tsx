import React from 'react';
import { FEATURES } from '../constants';

const Features: React.FC = () => {
  return (
    <section id="foco" className="py-24 bg-brand-dark relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Foco & <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-purple to-brand-pink underline decoration-brand-purple/50 decoration-4 underline-offset-8">Objetivo</span>
          </h2>
          <p className="text-brand-muted mt-4">
            Não entregamos apenas serviços, entregamos vantagem competitiva.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {FEATURES.map((feature, index) => (
            <div 
              key={index} 
              className="group p-8 rounded-2xl bg-brand-card border border-white/5 hover:border-brand-purple/30 transition-all duration-300 hover:shadow-[0_0_30px_rgba(139,92,246,0.1)] hover:-translate-y-1"
            >
              <div className="w-12 h-12 bg-brand-purple/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-brand-purple/20 transition-colors">
                <feature.icon className="text-brand-purple w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-brand-muted leading-relaxed text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
