
import React from 'react';
import { Mail, Phone, MapPin, Globe, ChevronRight } from 'lucide-react';
import AIProjectAdvisor from './AIProjectAdvisor';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-32 bg-white dark:bg-zinc-950 border-t border-zinc-100 dark:border-zinc-900">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-24">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-[1px] bg-yellow-400"></div>
              <span className="text-yellow-400 font-bold tracking-[0.3em] uppercase text-[10px]">Contact Us</span>
            </div>
            <h2 className="text-5xl font-black text-zinc-950 dark:text-white mb-10 leading-tight">
              READY TO <span className="text-yellow-400">COMMENCE?</span>
            </h2>
            
            <div className="grid sm:grid-cols-2 gap-10 mb-16">
              {[
                { icon: <MapPin className="text-yellow-400" />, title: 'Headquarters', text: '15 Wilkinson Road, Freetown' },
                { icon: <Phone className="text-yellow-400" />, title: 'Primary Line', text: '+232 77 123 456' },
                { icon: <Mail className="text-yellow-400" />, title: 'Inquiries', text: 'info@sowconstruction.sl' },
                { icon: <Globe className="text-yellow-400" />, title: 'Trading Desk', text: 'trading@sowconstruction.sl' },
              ].map((item, idx) => (
                <div key={idx} className="flex flex-col gap-4 p-6 bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-yellow-400/30 transition-all">
                  <div className="w-10 h-10 flex items-center justify-center bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-zinc-950 dark:text-white font-black uppercase text-[10px] tracking-widest mb-1">{item.title}</h4>
                    <p className="text-zinc-600 dark:text-zinc-500 text-xs font-medium">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>

            <AIProjectAdvisor />
          </div>

          <div className="bg-zinc-50 dark:bg-zinc-900 p-12 border border-zinc-200 dark:border-zinc-800 relative">
             <div className="absolute top-0 right-0 w-24 h-24 border-t-2 border-r-2 border-yellow-400 opacity-20"></div>
            <h3 className="text-2xl font-black text-zinc-950 dark:text-white mb-10 uppercase tracking-tighter">Direct RFP / Inquiry</h3>
            <form className="space-y-8">
              <div className="space-y-4">
                <label className="block text-zinc-600 dark:text-zinc-500 uppercase text-[10px] font-black tracking-[0.2em]">Personal Identity</label>
                <input 
                  type="text" 
                  placeholder="Full Name / Organization"
                  className="w-full bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 text-zinc-950 dark:text-white p-5 rounded-none focus:border-yellow-400 outline-none transition-colors text-sm"
                />
              </div>
              <div className="space-y-4">
                <label className="block text-zinc-600 dark:text-zinc-500 uppercase text-[10px] font-black tracking-[0.2em]">Contact Channel</label>
                <input 
                  type="email" 
                  placeholder="Email Address"
                  className="w-full bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 text-zinc-950 dark:text-white p-5 rounded-none focus:border-yellow-400 outline-none transition-colors text-sm"
                />
              </div>
              <div className="space-y-4">
                <label className="block text-zinc-600 dark:text-zinc-500 uppercase text-[10px] font-black tracking-[0.2em]">Brief Requirement</label>
                <textarea 
                  rows={5}
                  placeholder="Outline your project or trading needs..."
                  className="w-full bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 text-zinc-950 dark:text-white p-5 rounded-none focus:border-yellow-400 outline-none transition-colors text-sm"
                ></textarea>
              </div>
              <button 
                type="button"
                className="w-full bg-zinc-950 dark:bg-white hover:bg-yellow-400 dark:hover:bg-yellow-400 text-white dark:text-zinc-950 font-black py-6 rounded-none transition-all uppercase tracking-widest text-xs flex items-center justify-center gap-3 group"
              >
                Submit Request
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
