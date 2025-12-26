
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-zinc-950 selection:bg-yellow-400 selection:text-zinc-950 min-h-screen">
      <Header />
      <main className="relative z-10">
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
      
      {/* Decorative Grid Lines */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="container mx-auto h-full grid grid-cols-4 md:grid-cols-6 lg:grid-cols-12 px-6">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="border-l border-zinc-800/20 h-full last:border-r"></div>
          ))}
        </div>
      </div>

      {/* Subtle Ambient Grain / Noise could be added here with CSS if desired */}
    </div>
  );
};

export default App;
