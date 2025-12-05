import React from 'react';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <section id="arsenal" className="py-24 bg-brand-dark relative overflow-hidden">
        {/* Subtle background wash */}
        <div className="absolute right-0 top-1/4 w-1/3 h-1/3 bg-brand-pink/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header with Link */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Nosso <span className="text-brand-purple">Arsenal</span>
            </h2>
            <p className="text-brand-muted text-lg">
              Combinamos criatividade com Inteligência Artificial. Abrimos nosso arsenal de acordo com a necessidade do seu planejamento.
            </p>
          </div>
          <a href="#" className="text-brand-purple font-medium hover:text-brand-pink transition-colors border-b border-brand-purple/30 pb-1">
            Ver todos os detalhes
          </a>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, index) => (
            <div 
              key={index}
              className="group relative p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-all duration-300 overflow-hidden"
            >
              {/* Background Watermark Icon */}
              {service.bgIcon && (
                <service.bgIcon 
                    className="absolute -right-6 -top-6 w-40 h-40 text-white/[0.02] group-hover:text-brand-purple/[0.05] transition-colors duration-500 rotate-12" 
                    strokeWidth={1}
                />
              )}

              <div className="relative z-10">
                <div className="w-12 h-12 bg-brand-purple/10 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="text-brand-purple w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                <p className="text-brand-muted text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
