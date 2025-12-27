
import React from 'react';
import { ChevronRight, ArrowDown, Phone } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Dynamic Background with Authentic Photo */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center scale-105 transition-transform duration-[10s] ease-out"
          style={{ 
            backgroundImage: `url('hero-sow.jpg')`,
            filter: 'contrast(1.1) brightness(0.7) saturate(0.8)'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-zinc-950/80 dark:from-zinc-950 dark:via-zinc-950/60 dark:to-zinc-950/80" />
        <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent dark:from-transparent" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center gap-4 mb-8 animate-in fade-in slide-in-from-bottom duration-700">
            <div className="w-12 h-[2px] bg-yellow-400"></div>
            <span className="text-yellow-400 font-black tracking-[0.4em] uppercase text-xs">Experience Excellence</span>
            <div className="w-12 h-[2px] bg-yellow-400"></div>
          </div>
          
          <h1 className="text-5xl md:text-[7.5rem] font-black text-white leading-[0.85] mb-10 animate-in fade-in slide-in-from-bottom duration-1000 drop-shadow-2xl">
            BUILDING <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500">LEGACIES.</span>
          </h1>
          
          <p className="text-zinc-200 dark:text-zinc-300 text-lg md:text-2xl max-w-2xl mx-auto mb-12 leading-relaxed animate-in fade-in slide-in-from-bottom duration-1000 delay-100 font-medium">
            Sierra Leone's most trusted partner in infrastructure and trading. From ground-breaking to final delivery, we build with precision.
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 animate-in fade-in slide-in-from-bottom duration-1000 delay-300">
            <a 
              href="#portfolio" 
              className="bg-yellow-400 hover:bg-yellow-500 text-zinc-950 font-black px-12 py-6 rounded-none flex items-center gap-3 transition-all hover:translate-y-[-4px] active:translate-y-0 shadow-2xl shadow-yellow-400/20 uppercase tracking-widest text-xs"
            >
              Explore Projects
              <ChevronRight className="w-5 h-5" />
            </a>
            <a 
              href="tel:+23276363269" 
              className="bg-zinc-950 text-white hover:bg-zinc-900 font-black px-12 py-6 rounded-none transition-all hover:translate-y-[-4px] uppercase tracking-widest text-xs flex items-center gap-3 border border-yellow-400/30"
            >
              <Phone className="w-4 h-4 text-yellow-400" />
              Call Site Office
            </a>
            <a 
              href="#contact" 
              className="bg-white/5 backdrop-blur-md border border-white/20 text-white hover:bg-white hover:text-zinc-950 font-black px-12 py-6 rounded-none transition-all hover:translate-y-[-4px] uppercase tracking-widest text-xs"
            >
              Request Quote
            </a>
          </div>
        </div>
      </div>

      {/* Extreme Left Scroll Indicator */}
      <div className="absolute bottom-12 left-12 animate-bounce flex flex-col items-center gap-4 opacity-70 hover:opacity-100 transition-opacity cursor-pointer">
        <span className="text-zinc-300 text-[10px] uppercase tracking-[0.5em] font-bold vertical-text">Scroll to Explore</span>
        <ArrowDown className="text-yellow-400 w-5 h-5" />
      </div>

      <div className="absolute inset-0 pointer-events-none opacity-10">
        <div className="h-full w-full" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
      </div>
    </section>
  );
};

export default Hero;
