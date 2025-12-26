
import React, { useState } from 'react';
import { X, Mail, Lock, User, ArrowRight, Loader2, ShieldCheck } from 'lucide-react';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialMode?: 'login' | 'signup';
}

const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose, initialMode = 'login' }) => {
  const [mode, setMode] = useState<'login' | 'signup'>(initialMode);
  const [isLoading, setIsLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      onClose();
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6">
      <div 
        className="absolute inset-0 bg-zinc-950/80 backdrop-blur-sm"
        onClick={onClose}
      />
      
      <div className="relative w-full max-w-md bg-zinc-900 border border-zinc-800 shadow-2xl animate-in zoom-in-95 duration-200">
        <div className="absolute top-0 left-0 w-1.5 h-full bg-yellow-400"></div>
        
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-zinc-500 hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="p-8 md:p-10">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 bg-zinc-950 border border-zinc-800 flex items-center justify-center">
              <ShieldCheck className="text-yellow-400 w-6 h-6" />
            </div>
            <div>
              <h2 className="text-2xl font-black text-white uppercase tracking-tighter">
                {mode === 'login' ? 'Client Access' : 'Register Project'}
              </h2>
              <p className="text-[10px] text-yellow-400 font-bold uppercase tracking-widest">
                {mode === 'login' ? 'Secure Login Portal' : 'Join Our Network'}
              </p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {mode === 'signup' && (
              <div className="space-y-2">
                <label className="text-zinc-500 text-[10px] font-black uppercase tracking-widest flex items-center gap-2">
                  <User size={12} className="text-yellow-400" /> Full Name
                </label>
                <input 
                  required
                  type="text" 
                  placeholder="John Doe / Company Name"
                  className="w-full bg-zinc-950 border border-zinc-800 text-white p-4 text-sm focus:border-yellow-400 outline-none transition-all placeholder:text-zinc-700"
                />
              </div>
            )}

            <div className="space-y-2">
              <label className="text-zinc-500 text-[10px] font-black uppercase tracking-widest flex items-center gap-2">
                <Mail size={12} className="text-yellow-400" /> Corporate Email
              </label>
              <input 
                required
                type="email" 
                placeholder="email@organization.com"
                className="w-full bg-zinc-950 border border-zinc-800 text-white p-4 text-sm focus:border-yellow-400 outline-none transition-all placeholder:text-zinc-700"
              />
            </div>

            <div className="space-y-2">
              <label className="text-zinc-500 text-[10px] font-black uppercase tracking-widest flex items-center gap-2">
                <Lock size={12} className="text-yellow-400" /> Security Key
              </label>
              <input 
                required
                type="password" 
                placeholder="••••••••"
                className="w-full bg-zinc-950 border border-zinc-800 text-white p-4 text-sm focus:border-yellow-400 outline-none transition-all placeholder:text-zinc-700"
              />
            </div>

            <button 
              disabled={isLoading}
              className="w-full bg-yellow-400 hover:bg-yellow-500 disabled:bg-zinc-800 disabled:text-zinc-600 text-zinc-950 font-black py-4 flex items-center justify-center gap-3 uppercase text-xs tracking-[0.2em] transition-all"
            >
              {isLoading ? (
                <Loader2 className="animate-spin w-4 h-4" />
              ) : (
                <>
                  {mode === 'login' ? 'Establish Link' : 'Initialize Account'}
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </form>

          <div className="mt-8 pt-6 border-t border-zinc-800 flex flex-col items-center gap-4">
            <p className="text-zinc-500 text-xs">
              {mode === 'login' ? "Don't have a corporate account?" : "Already registered with Sow?"}
            </p>
            <button 
              onClick={() => setMode(mode === 'login' ? 'signup' : 'login')}
              className="text-white hover:text-yellow-400 font-black uppercase text-[10px] tracking-widest transition-colors"
            >
              {mode === 'login' ? 'Request Registration' : 'Return to Login'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthModal;
