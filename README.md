# Welcome to your organization's demo respository
This code repository (or "repo") is designed to demonstrate the best GitHub has to offer with the least amount of noise.

The repo includes an `index.html` file (so it can render a web page), two GitHub Actions workflows, and a CSS stylesheet dependency.
[GlassAssistant.tsx](https://github.com/user-attachments/files/24791801/GlassAssistant.tsx)

import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";
import { AssistantMessage } from '../types';

const INITIAL_MESSAGE: AssistantMessage = { 
  role: 'assistant', 
  content: 'Pozdravljeni! Sem vaš virtualni asistent za avtostekla. Imate vprašanje o poškodbi ali naših storitvah?' 
};

const GlassAssistant: React.FC = () => {
  const [messages, setMessages] = useState<AssistantMessage[]>([INITIAL_MESSAGE]);[package.json](https://github.com/user-attachments/files/24791807/package.json){
  "name": "copy-of-avtostekla-perme---car-glass-reservation",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "react": "^19.2.3",
    "react-dom": "^19.2.3",
    "@google/genai": "^1.38.0"
  },
  "devDependencies": {
    "@types/node": "^22.14.0",
    "@vitejs/plugin-react": "^5.0.0",
    "typescript": "~5.8.2",
    "vite": "^6.2.0"
  }
}


  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleClearChat = () => {
    setMessages([INITIAL_MESSAGE]);
  };

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: userMessage,
        config: {
          systemInstruction: `
            You are an expert customer support agent for 'Avtostekla Perme d.o.o.', a car glass repair shop in Slovenia.
            Your tone is professional, helpful, and friendly.
            You speak Slovenian. 
            Contact info:
            - Phone: 031 745 387
            - Email: avtostekla.perme@gmail.com
            - Address: Podkraj 30, 1292 Ig
            
            If users ask about pricing, explain it depends on the car model and type of damage.
            If they ask about repair vs replacement:
            - Repair (Popravilo) is possible if the crack is smaller than a 2-euro coin and not in the driver's direct line of sight.
            - Replacement (Menjava) is needed for larger cracks or side/rear glass.
            Encourage them to use the booking form, email us, or call 031 745 387.
          `,
          temperature: 0.7,
        },
      });

      const aiText = response.text || "Oprostite, prišlo je do napake pri povezavi. Prosimo, pokličite nas na 031 745 387.";
      setMessages(prev => [...prev, { role: 'assistant', content: aiText }]);
    } catch (error) {
      console.error(error);
      setMessages(prev => [...prev, { role: 'assistant', content: "Trenutno nisem na voljo. Prosimo, poskusite kasneje ali nas pokličite na 031 745 387." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col h-[500px] border border-slate-200">
      <div className="bg-slate-900 p-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
            </svg>
          </div>
          <div>
            <h4 className="text-white font-bold leading-none text-sm sm:text-base">Pametni Svetovalec</h4>
            <span className="text-green-400 text-[10px] sm:text-xs flex items-center gap-1">
              <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></span>
              Na voljo zdaj
            </span>
          </div>
        </div>
        
        <button 
          onClick={handleClearChat}
          className="text-xs font-bold text-slate-400 hover:text-white transition-colors flex items-center gap-1 bg-slate-800 px-3 py-1.5 rounded-lg border border-slate-700 active:scale-95"
          title="Počisti pogovor"
        >
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
          </svg>
          POČISTI
        </button>
      </div>

      <div ref={scrollRef} className="flex-grow p-4 overflow-y-auto space-y-4 bg-slate-50">
        {messages.map((m, i) => (
          <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[80%] p-4 rounded-2xl text-sm ${
              m.role === 'user' 
                ? 'bg-red-600 text-white rounded-br-none shadow-md' 
                : 'bg-white text-slate-800 border border-slate-200 rounded-bl-none shadow-sm'
            }`}>
              {m.content}
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-white border border-slate-200 p-4 rounded-2xl rounded-bl-none shadow-sm flex space-x-1">
              <div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce"></div>
              <div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce delay-75"></div>
              <div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce delay-150"></div>
            </div>
          </div>
        )}
      </div>

      <div className="p-4 border-t border-slate-200 bg-white">
        <div className="relative flex items-center">
          <input 
            type="text" 
            className="w-full bg-slate-100 rounded-full py-3 px-6 pr-14 focus:outline-none focus:ring-2 focus:ring-red-500 transition-all"
            placeholder="Vprašajte karkoli..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
          />
          <button 
            onClick={handleSend}
            disabled={isLoading || !input.trim()}
            className="absolute right-2 p-2 bg-red-600 text-white rounded-full hover:bg-red-700 disabled:opacity-50 transition-all active:scale-90"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default GlassAssistant;
