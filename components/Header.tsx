
import React, { useState, useEffect } from 'react';
import { Menu, X, HardHat, User, LogIn } from 'lucide-react';
import AuthModal from './AuthModal';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [authModal, setAuthModal] = useState<{ open: boolean; mode: 'login' | 'signup' }>({ 
    open: false, 
    mode: 'login' 
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openAuth = (mode: 'login' | 'signup') => {
    setAuthModal({ open: true, mode });
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#portfolio' },
  ];

  return (
    <>
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-zinc-950/95 backdrop-blur-md border-b border-yellow-400/30 py-4' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2 group cursor-pointer">
            <HardHat className="text-yellow-400 w-8 h-8 group-hover:scale-110 transition-transform" />
            <div className="flex flex-col">
              <span className="text-xl font-extrabold tracking-tighter text-white uppercase leading-none">Sow Construction</span>
              <span className="text-[10px] text-yellow-400 font-bold uppercase tracking-widest leading-none mt-1">Sierra Leone Ltd</span>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-zinc-400 hover:text-yellow-400 font-medium tracking-wide transition-colors uppercase text-xs"
              >
                {link.name}
              </a>
            ))}
            
            <div className="h-4 w-[1px] bg-zinc-800 mx-2"></div>
            
            <button
              onClick={() => openAuth('login')}
              className="text-zinc-400 hover:text-white font-black uppercase text-xs transition-colors flex items-center gap-2"
            >
              <LogIn className="w-4 h-4 text-yellow-400" />
              Login
            </button>
            
            <button
              onClick={() => openAuth('signup')}
              className="bg-yellow-400 hover:bg-yellow-500 text-zinc-950 px-6 py-2.5 rounded-none font-black uppercase text-xs transition-all hover:translate-y-[-2px] active:translate-y-0"
            >
              Sign Up
            </button>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="lg:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-zinc-950 border-b border-yellow-400/30 absolute top-full left-0 w-full animate-in slide-in-from-top duration-300 shadow-2xl">
            <div className="flex flex-col p-8 gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-zinc-500 hover:text-yellow-400 font-black uppercase tracking-widest text-lg border-b border-zinc-900 pb-4 transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <div className="grid grid-cols-2 gap-4 pt-4">
                <button
                  onClick={() => openAuth('login')}
                  className="bg-zinc-900 text-white py-4 font-black uppercase text-xs tracking-widest flex items-center justify-center gap-2 border border-zinc-800"
                >
                  <LogIn className="w-4 h-4 text-yellow-400" />
                  Login
                </button>
                <button
                  onClick={() => openAuth('signup')}
                  className="bg-yellow-400 text-zinc-950 py-4 font-black uppercase text-xs tracking-widest flex items-center justify-center gap-2"
                >
                  <User className="w-4 h-4" />
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>

      <AuthModal 
        isOpen={authModal.open} 
        onClose={() => setAuthModal({ ...authModal, open: false })} 
        initialMode={authModal.mode} 
      />
    </>
  );
};

export default Header;
