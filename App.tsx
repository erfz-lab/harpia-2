import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Services from './components/Services';
import Process from './components/Process';
import CtaSection from './components/CtaSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-brand-dark text-brand-text font-sans selection:bg-brand-purple selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Services />
        <Process />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
