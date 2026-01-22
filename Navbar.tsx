
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-slate-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex-shrink-0 flex items-center">
            {/* Logo matching the van's branding */}
            <a href="/" className="flex flex-col group">
              <span className="text-2xl font-black text-[#E31E24] tracking-tighter leading-none">AVTOSTEKLA</span>
              <span className="text-xl font-bold text-black tracking-widest leading-none ml-0.5">PERME</span>
            </a>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#storitve" className="text-sm font-semibold text-slate-600 hover:text-red-600 transition-colors tracking-wide">STORITVE</a>
            <a href="#rezervacija" className="text-sm font-semibold text-slate-600 hover:text-red-600 transition-colors tracking-wide">REZERVACIJA</a>
            <a href="#kontakt" className="text-sm font-semibold text-slate-600 hover:text-red-600 transition-colors tracking-wide">KONTAKT</a>
          </div>

          <div className="flex items-center space-x-4">
            <a 
              href="tel:031745387" 
              className="flex items-center space-x-2 bg-green-500 hover:bg-green-600 text-white px-5 py-2.5 rounded-full font-bold transition-all shadow-md active:scale-95 border-b-4 border-green-700 hover:border-b-2 hover:translate-y-0.5"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span className="hidden sm:inline">031 745 387</span>
            </a>
            <button className="p-2 text-slate-600 hover:text-slate-900 md:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
