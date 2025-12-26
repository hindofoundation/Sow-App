
import React, { useState, useRef, useEffect } from 'react';
import { Bot, Send, Loader2, Sparkles, Terminal } from 'lucide-react';
import { getAIProjectAdvice } from '../services/geminiService';

const AIProjectAdvisor: React.FC = () => {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const responseRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (response && responseRef.current) {
      responseRef.current.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  }, [response]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || loading) return;

    setLoading(true);
    try {
      const result = await getAIProjectAdvice(input);
      setResponse(result);
    } catch (err) {
      setResponse("System offline. Please contact our human engineers.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-zinc-900 border border-zinc-800 p-8 rounded-none relative overflow-hidden group hover:border-yellow-400/50 transition-colors duration-500">
      <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none group-hover:opacity-10 transition-opacity">
        <Terminal className="w-24 h-24 text-yellow-400" />
      </div>
      
      <div className="flex items-center gap-4 mb-8">
        <div className="w-14 h-14 bg-yellow-400 flex items-center justify-center">
          <Bot className="text-zinc-950 w-8 h-8" />
        </div>
        <div>
          <h3 className="text-xl font-black text-white uppercase tracking-tighter">Instant Analysis</h3>
          <p className="text-[10px] text-yellow-400 font-bold tracking-[0.2em] uppercase">Engineering AI Engine</p>
        </div>
      </div>

      {!response ? (
        <form onSubmit={handleSubmit} className="space-y-6">
          <p className="text-zinc-500 text-sm leading-relaxed">
            Provide project details to receive an AI-generated engineering overview.
          </p>
          <div className="relative">
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="e.g. 50km road network upgrade in Kailahun district..."
              className="w-full bg-zinc-950 border border-zinc-800 text-white p-5 rounded-none focus:border-yellow-400 focus:outline-none min-h-[140px] transition-all placeholder:text-zinc-700 text-sm"
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-yellow-400 hover:bg-yellow-500 disabled:bg-zinc-800 disabled:text-zinc-600 text-zinc-950 font-black py-5 rounded-none transition-all flex items-center justify-center gap-3 uppercase text-xs tracking-widest shadow-lg shadow-yellow-400/5"
          >
            {loading ? <Loader2 className="animate-spin w-5 h-5" /> : <Sparkles className="w-5 h-5" />}
            {loading ? "Processing..." : "Generate Analysis"}
          </button>
        </form>
      ) : (
        <div ref={responseRef} className="space-y-6 animate-in fade-in slide-in-from-bottom duration-500">
          <div className="bg-zinc-950 border border-zinc-800 p-6 relative">
            <div className="absolute top-0 left-0 w-1 h-full bg-yellow-400"></div>
            <div className="text-zinc-300 whitespace-pre-wrap leading-relaxed text-sm font-mono">
              {response}
            </div>
          </div>
          <button
            onClick={() => {setResponse(null); setInput('');}}
            className="text-zinc-500 hover:text-yellow-400 font-bold uppercase text-[10px] tracking-[0.3em] transition-all flex items-center gap-2"
          >
            &larr; New Consultation
          </button>
        </div>
      )}
    </div>
  );
};

export default AIProjectAdvisor;
