
import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, HardHat } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-zinc-950 border-t border-zinc-900 pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <HardHat className="text-yellow-400 w-10 h-10" />
              <div className="flex flex-col">
                <span className="text-2xl font-black tracking-tighter text-white uppercase leading-none">Sow Construction</span>
                <span className="text-xs text-yellow-400 font-bold uppercase tracking-[0.2em] leading-none mt-1">Sierra Leone Ltd</span>
              </div>
            </div>
            <p className="text-zinc-500 max-w-md mb-8 leading-relaxed">
              Committed to building a better Sierra Leone through sustainable construction, reliable trading, and professional engineering services. Quality is not just our standard; it's our legacy.
            </p>
            <div className="flex gap-4">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-500 hover:text-yellow-400 hover:border-yellow-400 transition-all">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-black uppercase text-xs tracking-[0.3em] mb-8">Navigation</h4>
            <ul className="space-y-4">
              {['Home', 'About Us', 'Services', 'Projects', 'Careers', 'Privacy Policy'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-zinc-500 hover:text-yellow-400 transition-colors text-sm uppercase tracking-wider">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-black uppercase text-xs tracking-[0.3em] mb-8">Newsletter</h4>
            <p className="text-zinc-500 text-sm mb-6">Stay updated with our latest projects and industrial insights.</p>
            <form className="flex">
              <input 
                type="email" 
                placeholder="Email Address" 
                className="bg-zinc-900 border border-zinc-800 text-white p-3 text-sm focus:outline-none focus:border-yellow-400 w-full"
              />
              <button className="bg-yellow-400 text-zinc-950 px-4 font-black text-xs uppercase transition-colors hover:bg-yellow-500">Join</button>
            </form>
          </div>
        </div>

        <div className="border-t border-zinc-900 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-zinc-600 text-xs uppercase tracking-widest">
            © {new Date().getFullYear()} Sow Construction and Trading Sierra Leone Ltd. All Rights Reserved.
          </p>
          <div className="flex gap-8">
            <span className="text-zinc-600 text-xs uppercase tracking-widest font-bold">Made with Excellence</span>
            <span className="text-zinc-600 text-xs uppercase tracking-widest font-bold">Registration #SL-2024-998</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
