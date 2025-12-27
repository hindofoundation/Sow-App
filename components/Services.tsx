
import React from 'react';
import { SERVICES, ICON_MAP } from '../constants';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-zinc-50 dark:bg-zinc-950/50">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-8 h-[2px] bg-yellow-400"></div>
            <span className="text-yellow-400 font-bold tracking-widest uppercase text-xs">Our Expertise</span>
            <div className="w-8 h-[2px] bg-yellow-400"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-zinc-950 dark:text-white mb-6 uppercase tracking-tight">
            WHAT WE DO BEST.
          </h2>
          <p className="text-zinc-600 dark:text-zinc-500 text-lg">
            From the initial blueprint to the final trade, we deliver comprehensive solutions tailored to the unique landscape of Sierra Leone.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service) => (
            <div 
              key={service.id} 
              className="group bg-white dark:bg-zinc-900 p-10 border border-zinc-200 dark:border-zinc-800 hover:border-yellow-400 dark:hover:border-yellow-400 transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                <span className="text-6xl font-black text-zinc-950 dark:text-white">0{service.id}</span>
              </div>
              
              <div className="text-yellow-400 mb-6 group-hover:scale-110 transition-transform duration-300 origin-left">
                {ICON_MAP[service.icon]}
              </div>
              
              <h3 className="text-xl font-black text-zinc-950 dark:text-white mb-4 uppercase tracking-wide group-hover:text-yellow-400 transition-colors">
                {service.title}
              </h3>
              
              <p className="text-zinc-600 dark:text-zinc-500 leading-relaxed group-hover:text-zinc-950 dark:group-hover:text-zinc-300 transition-colors">
                {service.description}
              </p>

              <div className="w-0 group-hover:w-full h-1 bg-yellow-400 absolute bottom-0 left-0 transition-all duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
