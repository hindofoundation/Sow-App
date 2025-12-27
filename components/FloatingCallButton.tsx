
import React from 'react';
import { Phone } from 'lucide-react';

const FloatingCallButton: React.FC = () => {
  return (
    <div className="fixed bottom-8 right-8 z-[60] flex flex-col items-end gap-3 group">
      <div className="bg-zinc-950 dark:bg-white text-white dark:text-zinc-950 px-4 py-2 text-[10px] font-black uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none shadow-xl border border-yellow-400/50">
        Direct Line
      </div>
      <a
        href="tel:+23276363269"
        className="w-16 h-16 bg-yellow-400 hover:bg-yellow-500 text-zinc-950 rounded-full flex items-center justify-center shadow-2xl shadow-yellow-400/40 transition-all hover:scale-110 active:scale-95 relative"
        aria-label="Call SOW Construction"
      >
        <span className="absolute inset-0 rounded-full bg-yellow-400 animate-ping opacity-20 group-hover:hidden"></span>
        <Phone className="w-6 h-6 fill-current" />
      </a>
    </div>
  );
};

export default FloatingCallButton;
