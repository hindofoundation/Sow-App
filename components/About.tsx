
import React from 'react';
import { Shield, Target, Zap } from 'lucide-react';

const About: React.FC = () => {
  const stats = [
    { label: 'Major Infrastructure', value: '45' },
    { label: 'Active Sites', value: '12' },
    { label: 'Tons Materials Moved', value: '1M+' },
    { label: 'Team Members', value: '600+' },
  ];

  return (
    <section id="about" className="py-32 bg-zinc-950 relative">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-[1px] bg-yellow-400"></div>
              <span className="text-yellow-400 font-bold tracking-[0.3em] uppercase text-[10px]">Company Profile</span>
            </div>
            <h2 className="text-5xl font-black text-white mb-8 leading-tight">
              A FOUNDATION BUILT ON <span className="text-yellow-400">TRUST.</span>
            </h2>
            <p className="text-zinc-400 text-lg mb-8 leading-relaxed">
              Sow Construction and Trading Sierra Leone Ltd is more than a contractor. We are strategic partners in the development of Sierra Leone’s landscape, combining advanced engineering with deep local knowledge.
            </p>

            <div className="space-y-6 mb-12">
              {[
                { icon: <Shield className="text-yellow-400" />, title: 'Unyielding Safety', desc: 'Zero-incident target across all industrial sites.' },
                { icon: <Target className="text-yellow-400" />, title: 'Precision Delivery', desc: 'Meeting blueprints with sub-millimeter accuracy.' },
                { icon: <Zap className="text-yellow-400" />, title: 'Rapid Mobilization', desc: 'Equipment and manpower deployed within 48 hours.' },
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4 group">
                  <div className="flex-shrink-0 w-12 h-12 bg-zinc-900 border border-zinc-800 flex items-center justify-center group-hover:border-yellow-400 transition-colors">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-white font-black uppercase text-xs tracking-widest mb-1">{item.title}</h4>
                    <p className="text-zinc-500 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-2 gap-4 relative">
             <div className="absolute inset-0 bg-yellow-400/5 blur-3xl rounded-full"></div>
             <img 
               src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=800&auto=format&fit=crop" 
               className="w-full h-full object-cover grayscale border border-zinc-800 col-span-2 aspect-video" 
               alt="Construction"
             />
             <div className="bg-yellow-400 p-8 flex flex-col justify-center">
                <span className="text-zinc-950 font-black text-4xl mb-1">15+</span>
                <span className="text-zinc-950 font-bold uppercase text-[10px] tracking-widest">Years Experience</span>
             </div>
             <div className="bg-zinc-900 border border-zinc-800 p-8 flex flex-col justify-center">
                <span className="text-white font-black text-4xl mb-1">100%</span>
                <span className="text-zinc-500 font-bold uppercase text-[10px] tracking-widest">Local Compliance</span>
             </div>
          </div>
        </div>

        <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-zinc-900 pt-16">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center md:text-left">
              <div className="text-4xl font-black text-white mb-2">{stat.value}</div>
              <div className="text-zinc-500 uppercase text-[10px] tracking-widest font-black">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
