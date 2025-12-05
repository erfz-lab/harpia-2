import React from 'react';

const CtaSection: React.FC = () => {
  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto bg-gradient-to-r from-purple-900/20 to-pink-900/20 border border-brand-purple/20 rounded-3xl p-12 text-center relative overflow-hidden">
        
        {/* Decorative blobs */}
        <div className="absolute top-0 left-0 w-full h-full bg-brand-purple/5 blur-3xl" />
        
        <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            O Resultado?
            </h2>
            <p className="text-lg md:text-xl text-brand-muted">
            A comunicação integrada com I.A. não é apenas um serviço, é sua <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-brand-purple to-brand-pink">VANTAGEM COMPETITIVA.</span>
            </p>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
