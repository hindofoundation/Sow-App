
import React, { useState } from 'react';
import { PROJECTS } from '../constants';
import { Plus } from 'lucide-react';

const Portfolio: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const categories = ['All', 'Commercial', 'Residential', 'Industrial', 'Infrastructure'];

  const filteredProjects = activeFilter === 'All' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === activeFilter);

  return (
    <section id="portfolio" className="py-24 bg-white dark:bg-zinc-950">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-[2px] bg-yellow-400"></div>
              <span className="text-yellow-400 font-bold tracking-widest uppercase text-xs">Portfolio</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-zinc-950 dark:text-white uppercase tracking-tight">
              PROVEN RESULTS.
            </h2>
          </div>

          <div className="flex flex-wrap gap-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-6 py-2 rounded-full text-sm font-bold uppercase tracking-widest transition-all ${
                  activeFilter === cat 
                  ? 'bg-yellow-400 text-zinc-950' 
                  : 'bg-zinc-100 dark:bg-zinc-900 text-zinc-500 hover:text-zinc-950 dark:hover:text-white border border-zinc-200 dark:border-zinc-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id} 
              className="group relative overflow-hidden aspect-video cursor-pointer border border-zinc-200 dark:border-transparent"
            >
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-zinc-950/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-10">
                <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <span className="text-yellow-400 font-bold uppercase text-xs tracking-[0.3em] mb-2 block">{project.category}</span>
                  <h3 className="text-3xl font-black text-white mb-4 uppercase">{project.title}</h3>
                  <p className="text-zinc-300 mb-6 max-w-md">{project.description}</p>
                  <button className="w-12 h-12 rounded-full bg-yellow-400 flex items-center justify-center text-zinc-950 hover:scale-110 transition-transform">
                    <Plus className="w-6 h-6" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
