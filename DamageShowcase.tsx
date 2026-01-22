
import React from 'react';

const DamageShowcase: React.FC = () => {
  return (
    <section className="py-24 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2 order-2 lg:order-1">
            <div className="relative group">
              {/* High quality image suggesting Slovenian highway/mountains background with a crack */}
              <img 
                src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=1000" 
                alt="Počeno steklo na slovenski avtocesti" 
                className="rounded-[2.5rem] shadow-2xl border-4 border-white object-cover aspect-video w-full transform -rotate-1 group-hover:rotate-0 transition-all duration-700"
              />
              {/* Overlaid crack effect simulation for more impact */}
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cracked-glass.png')] opacity-40 pointer-events-none rounded-[2.5rem]"></div>
              
              <div className="absolute -top-6 -left-6 bg-[#E31E24] text-white p-4 rounded-2xl shadow-xl font-black text-center animate-bounce z-20">
                <span className="block text-2xl">AVTOCESTA!</span>
                <span className="text-xs uppercase tracking-widest">Kamenčki ne počivajo</span>
              </div>

              <div className="absolute bottom-6 right-6 bg-white/90 backdrop-blur-sm p-3 rounded-xl shadow-lg border border-slate-200 hidden sm:block">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-red-600 rounded-full"></div>
                  <span className="text-xs font-black text-slate-800 uppercase tracking-tighter">Realen prizor s terena</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2 order-1 lg:order-2 space-y-8">
            <div className="inline-block px-4 py-1 bg-yellow-100 text-yellow-800 rounded-lg text-sm font-bold uppercase tracking-widest">
              Opozorilo za voznike
            </div>
            <h2 className="text-4xl font-black text-slate-900 leading-tight">
              Se vam je to zgodilo na <span className="text-[#E31E24] underline decoration-yellow-400">avtocesti?</span>
            </h2>
            <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
              <p>
                Vožnja po slovenskih avtocestah prinaša tveganje za udarce kamenčkov. Kar se začne kot komaj opazna pikica, se zaradi <strong>tresljajev pri visoki hitrosti</strong> in pritiska vetra hitro razširi v nevarno razpoko.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="font-bold">Takojšnja stabilizacija razpoke</span>
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="font-bold">Preprečimo menjavo celotnega stekla</span>
                </li>
              </ul>
            </div>
            <div className="pt-4">
              <a 
                href="#rezervacija" 
                className="inline-flex items-center gap-4 bg-slate-900 hover:bg-[#E31E24] text-white font-black px-10 py-5 rounded-xl shadow-xl transition-all transform hover:scale-105 active:scale-95 group"
              >
                <span>REŠITE SVOJE STEKLO</span>
                <svg className="w-6 h-6 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DamageShowcase;
