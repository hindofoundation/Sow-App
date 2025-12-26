
import React from 'react';
import { ChevronRight, ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center grayscale opacity-40 scale-105"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/60 to-transparent" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl">
          <div className="flex items-center gap-4 mb-8 animate-in slide-in-from-left duration-700">
            <div className="w-16 h-[2px] bg-yellow-400"></div>
            <span className="text-yellow-400 font-black tracking-[0.4em] uppercase text-xs">Since 2008</span>
          </div>
          
          <h1 className="text-6xl md:text-[7rem] font-black text-white leading-[0.9] mb-10 animate-in slide-in-from-left duration-1000">
            WE BUILD <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">STRENGTH.</span>
          </h1>
          
          <p className="text-zinc-400 text-xl md:text-2xl max-w-2xl mb-12 leading-relaxed animate-in fade-in slide-in-from-bottom duration-1000">
            The benchmark for construction and general trading in West Africa. We deliver infrastructure that stands the test of time.
          </p>
          
          <div className="flex flex-wrap gap-6 animate-in fade-in slide-in-from-bottom duration-1000 delay-200">
            <a 
              href="#portfolio" 
              className="bg-yellow-400 hover:bg-yellow-500 text-zinc-950 font-black px-12 py-6 rounded-none flex items-center gap-3 transition-all hover:translate-y-[-4px] active:translate-y-0 shadow-xl shadow-yellow-400/10 uppercase tracking-tighter"
            >
              Our Projects
              <ChevronRight className="w-5 h-5" />
            </a>
            <a 
              href="#contact" 
              className="border border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-zinc-950 font-black px-12 py-6 rounded-none transition-all hover:translate-y-[-4px] uppercase tracking-tighter"
            >
              Consult an Expert
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-12 right-12 animate-bounce hidden lg:flex flex-col items-center gap-4">
        <span className="text-zinc-600 text-[10px] uppercase tracking-[0.5em] vertical-text">Scroll Down</span>
        <ArrowDown className="text-yellow-400 w-5 h-5" />
      </div>
    </section>
  );
};

export default Hero;
