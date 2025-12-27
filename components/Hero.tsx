
import React, { useState, useEffect } from 'react';
import { ChevronRight, ArrowDown, Phone, Loader2, Sparkles } from 'lucide-react';
import { GoogleGenAI } from "@google/genai";

const Hero: React.FC = () => {
  const [bgImage, setBgImage] = useState<string | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);

  useEffect(() => {
    const generateHeroImage = async () => {
      // Check for existing generated image in session to save tokens/time
      const cached = sessionStorage.getItem('sow_hero_bg');
      if (cached) {
        setBgImage(cached);
        return;
      }

      setIsGenerating(true);
      try {
        const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
        const response = await ai.models.generateContent({
          model: 'gemini-2.5-flash-image',
          contents: {
            parts: [
              {
                text: 'A professional, high-end cinematic wide-angle photograph of an active industrial construction site in Sierra Leone. The scene should feature workers in bright orange safety vests and red hard hats (corporate colors of SOW Construction). Use golden hour lighting to emphasize depth and modern machinery. The style should be authoritative, clean, and premium industrial photography. 16:9 aspect ratio.',
              },
            ],
          },
          config: {
            imageConfig: {
              aspectRatio: "16:9"
            },
          },
        });

        for (const part of response.candidates?.[0]?.content?.parts || []) {
          if (part.inlineData) {
            const imageUrl = `data:image/png;base64,${part.inlineData.data}`;
            setBgImage(imageUrl);
            sessionStorage.setItem('sow_hero_bg', imageUrl);
            break;
          }
        }
      } catch (error) {
        console.error("Image generation failed:", error);
        // Fallback to a high-quality industrial placeholder if generation fails
        setBgImage('https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2000&auto=format&fit=crop');
      } finally {
        setIsGenerating(false);
      }
    };

    generateHeroImage();
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-zinc-950">
      {/* Dynamic Background */}
      <div className="absolute inset-0 z-0">
        {bgImage ? (
          <div 
            className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000 animate-in fade-in"
            style={{ 
              backgroundImage: `url('${bgImage}')`,
              filter: 'contrast(1.1) brightness(0.6) saturate(0.9)'
            }}
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center bg-zinc-900">
            <div className="flex flex-col items-center gap-4">
              <div className="w-16 h-16 border-2 border-yellow-400/20 border-t-yellow-400 rounded-full animate-spin" />
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-yellow-400 animate-pulse" />
                <span className="text-zinc-500 font-bold uppercase text-[10px] tracking-[0.3em]">AI Constructing Environment...</span>
              </div>
            </div>
          </div>
        )}
        
        {/* Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/40 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)]" />
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
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 uppercase">Legacies.</span>
          </h1>
          
          <p className="text-zinc-200 text-lg md:text-2xl max-w-2xl mx-auto mb-12 leading-relaxed animate-in fade-in slide-in-from-bottom duration-1000 delay-100 font-medium drop-shadow-md">
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
              className="bg-zinc-950 text-white hover:bg-zinc-900 font-black px-12 py-6 rounded-none transition-all hover:translate-y-[-4px] uppercase tracking-widest text-xs flex items-center gap-3 border border-yellow-400/30 backdrop-blur-sm"
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
      <div className="absolute bottom-12 left-12 animate-bounce flex flex-col items-center gap-4 opacity-70 hover:opacity-100 transition-opacity cursor-pointer hidden md:flex">
        <span className="text-zinc-300 text-[10px] uppercase tracking-[0.5em] font-bold vertical-text">Scroll to Explore</span>
        <ArrowDown className="text-yellow-400 w-5 h-5" />
      </div>

      {/* Industrial Grid Overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
        <div className="h-full w-full" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
      </div>
    </section>
  );
};

export default Hero;
