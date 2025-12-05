import React from 'react';
import { PROCESS_STEPS } from '../constants';

const Process: React.FC = () => {
  return (
    <section id="fluxo" className="py-24 bg-brand-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Header */}
        <div className="mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Fluxo <span className="text-brand-purple">Anti-Dor de Cabeça</span>
          </h2>
          <p className="text-brand-muted">
            Menos reuniões inúteis. Mais sprints de criação, mais acertos e menos tempo perdido.
          </p>
        </div>

        {/* Timeline Steps */}
        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-12">
          
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-gradient-to-r from-transparent via-brand-purple/30 to-transparent z-0" />

          {PROCESS_STEPS.map((step) => (
            <div key={step.id} className="relative z-10 flex flex-col items-center">
              
              {/* Icon Bubble */}
              <div className="relative mb-6">
                <div className="w-24 h-24 rounded-full bg-brand-card border border-brand-purple/30 flex items-center justify-center shadow-[0_0_20px_rgba(139,92,246,0.15)] group hover:scale-110 transition-transform duration-300">
                    <step.icon className="w-10 h-10 text-brand-purple" />
                </div>
                
                {/* Number Badge */}
                <div className="absolute -top-1 -right-1 w-8 h-8 rounded-full bg-brand-purple text-white font-bold flex items-center justify-center text-sm border-4 border-brand-dark">
                    {step.id}
                </div>
              </div>

              <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
              <p className="text-brand-muted text-sm max-w-xs mx-auto leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
