
import React, { useState, useRef, useEffect } from 'react';
import { getAzmuthResponse } from '../services/geminiService';

const AzmuthChat: React.FC = () => {
  const [messages, setMessages] = useState<{ role: 'user' | 'azmuth', content: string }[]>([
    { role: 'azmuth', content: "Hmph. Mais um terráqueo querendo brincar com minha criação. O que você quer saber sobre o Omnitrix, recruta?" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;
    
    const userMsg = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMsg }]);
    setIsLoading(true);

    const response = await getAzmuthResponse(userMsg);
    setMessages(prev => [...prev, { role: 'azmuth', content: response }]);
    setIsLoading(false);
  };

  return (
    <div className="fixed bottom-6 right-6 w-80 md:w-96 z-50">
      <div className="bg-neutral-900 border-2 border-green-500 rounded-2xl overflow-hidden shadow-[0_0_30px_rgba(34,197,94,0.3)] flex flex-col h-[450px]">
        {/* Header */}
        <div className="bg-green-600 p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-black rounded-full border border-green-300 overflow-hidden">
                <img src="https://picsum.photos/seed/azmuth/50/50" alt="Azmuth" className="w-full h-full object-cover" />
            </div>
            <span className="text-black font-bold font-orbitron">Azmuth (IA)</span>
          </div>
          <div className="flex gap-1">
             <div className="w-2 h-2 rounded-full bg-black animate-pulse"></div>
          </div>
        </div>

        {/* Messages */}
        <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4 bg-pattern scrollbar-hide">
          {messages.map((m, i) => (
            <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[85%] p-3 rounded-lg text-sm ${
                m.role === 'user' 
                ? 'bg-neutral-800 text-white border-l-4 border-green-500' 
                : 'bg-green-900/40 text-green-100 border-r-4 border-green-600'
              }`}>
                {m.content}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-green-900/20 p-3 rounded-lg flex gap-1">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-bounce"></span>
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-bounce [animation-delay:0.2s]"></span>
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-bounce [animation-delay:0.4s]"></span>
              </div>
            </div>
          )}
        </div>

        {/* Input */}
        <div className="p-3 border-t border-neutral-800 flex gap-2">
          <input 
            type="text" 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Pergunte ao Primeiro Pensador..."
            className="flex-1 bg-neutral-800 border-none outline-none text-white text-sm p-2 rounded-lg focus:ring-1 focus:ring-green-500"
          />
          <button 
            onClick={handleSend}
            disabled={isLoading}
            className="bg-green-600 p-2 rounded-lg hover:bg-green-500 transition-colors"
          >
            <svg className="w-4 h-4 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AzmuthChat;
