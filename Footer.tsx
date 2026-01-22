
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer id="kontakt" className="bg-slate-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex flex-col">
              <span className="text-2xl font-black text-[#E31E24] tracking-tighter leading-none">AVTOSTEKLA</span>
              <span className="text-xl font-bold text-white tracking-widest leading-none mt-1 ml-0.5">PERME</span>
            </div>
            <p className="text-slate-400 leading-relaxed max-w-sm">
              Vaš zaupanja vreden partner za vsa vprašanja glede avtomobilskih stekel. Specializirani za mobilno popravilo na terenu.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 flex items-center gap-2">
              STORITVE
              <svg className="w-4 h-4 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/></svg>
            </h4>
            <ul className="space-y-4 text-slate-400">
              <li><a href="#storitve" className="hover:text-white transition-colors">Menjava stekel</a></li>
              <li><a href="#storitve" className="hover:text-white transition-colors">Popravilo poškodb</a></li>
              <li><a href="#storitve" className="hover:text-white transition-colors">Terenski servis</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 flex items-center gap-2">
              KONTAKT
              <svg className="w-4 h-4 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/></svg>
            </h4>
            <ul className="space-y-4 text-slate-400">
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-red-600 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                <span>Podkraj 30,<br />1292 Ig</span>
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-5 h-5 text-red-600 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                <a href="mailto:avtostekla.perme@gmail.com" className="hover:text-white transition-colors text-sm sm:text-base">avtostekla.perme@gmail.com</a>
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-5 h-5 text-red-600 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                Pon - Pet: 8:00 - 16:00
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">© 2024 Avtostekla Perme d.o.o. Vse pravice pridržane.</p>
          <div className="flex items-center space-x-6">
            <a href="#" className="text-slate-500 hover:text-white transition-colors">
              <span className="sr-only">Facebook</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/></svg>
            </a>
            <a href="#" className="text-slate-500 hover:text-white transition-colors">
              <span className="sr-only">Instagram</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12.315 2c2.43 0 2.784.01 3.71.054 1.14.054 2.127.285 2.872 1.03.76.747.992 1.733 1.045 2.872.043.926.054 1.28.054 3.71s-.01 2.784-.054 3.71c-.054 1.14-.285 2.127-1.03 2.872-.747.76-1.733.992-2.872 1.045-.926.043-1.28.054-3.71.054s-2.784-.01-3.71-.054c-1.14-.054-2.127-.285-2.872-1.03-.76-.747-.992-1.733-1.045-2.872-.043-.926-.054-1.28-.054-3.71s.01-2.784.054-3.71c.054-1.14.285-2.127 1.03-2.872.747-.76 1.733-.992 2.872-1.045.926-.043 1.28-.054 3.71-.054zm-1.14 10.5c0 2.762 2.238 5 5 5s5-2.238 5-5-2.238-5-5-5-5 2.238-5 5zm5.5 0a3.5 3.5 0 11-7 0 3.5 3.5 0 017 0zM17.385 5.385a1 1 0 11-2 0 1 1 0 012 0z"/></svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
