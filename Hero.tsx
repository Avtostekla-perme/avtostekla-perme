
import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="relative bg-white overflow-hidden bg-glass-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-32">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Besedilo na levi */}
          <div className="lg:w-1/2 text-center lg:text-left z-10">
            <div className="inline-block px-4 py-1.5 bg-red-50 border border-red-100 rounded-full mb-8">
              <span className="text-red-600 font-bold text-sm tracking-widest uppercase italic">Avtostekla Perme d.o.o.</span>
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-slate-900 leading-[1.05] mb-8">
              Vaše steklo, <br />
              <span className="text-[#E31E24] relative inline-block">
                naša skrb
                <svg className="absolute -bottom-2 left-0 w-full h-3 text-red-200 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 25 0 50 5 T 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
                </svg>
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-600 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              <strong>Avtostekla Perme d.o.o.</strong> smo specializirani za hitro in strokovno menjavo ter popravilo avtomobilskih stekel. Pridemo do vas – doma, v službi ali na poti.
            </p>
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
              <a 
                href="tel:031745387" 
                className="bg-green-500 hover:bg-green-600 text-white text-lg font-black px-8 py-5 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1 active:scale-95 flex items-center justify-center gap-3 border-b-4 border-green-700"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                031 745 387
              </a>
              <a 
                href="#rezervacija" 
                className="bg-slate-900 hover:bg-black text-white text-lg font-black px-8 py-5 rounded-2xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 active:scale-95 flex items-center justify-center"
              >
                SPLETNA REZERVACIJA
              </a>
            </div>
          </div>

          {/* Slika na desni */}
          <div className="lg:w-1/2 relative">
            <div className="relative rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white transform rotate-2 hover:rotate-0 transition-all duration-700 group">
              <img 
                src="https://img.freepik.com/premium-photo/broken-car-windshield-chipped-damaged-car-glass-copy-space_192298-1214.jpg" 
                alt="Poškodovano vetrobransko steklo" 
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              {/* Overlay Label */}
              <div className="absolute top-6 right-6 bg-red-600 text-white p-4 rounded-2xl shadow-2xl font-black text-sm transform -rotate-12 group-hover:rotate-0 transition-transform">
                HITRO & <br/> STROKOVNO
              </div>
            </div>
            
            {/* Dekorativni sij */}
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-red-500 rounded-full -z-10 blur-[100px] opacity-20"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
