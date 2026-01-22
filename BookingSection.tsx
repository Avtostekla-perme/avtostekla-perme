
import React, { useState } from 'react';
import { ReservationData } from '../types';

const BookingSection: React.FC = () => {
  const [formData, setFormData] = useState<ReservationData>({
    name: '',
    email: '',
    phone: '',
    carCount: 1,
    serviceType: 'repair',
    preferredDate: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulacija pošiljanja podatkov
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      console.log('Rezervacija oddana:', formData);
      setSubmitted(true);
    } catch (err) {
      alert("Napaka pri povezavi. Pokličite nas na 031 745 387.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="rezervacija" className="py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Dekorativni sij v ozadju */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(227,30,36,0.08)_0%,transparent_70%)] pointer-events-none"></div>
      
      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-black mb-6 italic tracking-tight">
            REZERVIRAJTE <span className="text-[#E31E24]">TERMIN</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Vpišite svoje podatke, <strong>e-naslov</strong> in <strong>število vozil</strong>. 
            Naš tim vas bo kontaktiral za potrditev ure servisa.
          </p>
        </div>

        {submitted ? (
          <div className="bg-white/5 border border-green-500/30 p-10 rounded-[2rem] text-center backdrop-blur-md shadow-2xl animate-in fade-in zoom-in duration-500">
            <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-green-500/20">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-3xl font-black mb-2">Uspešno poslano!</h3>
            <p className="text-slate-300">Hvala za zaupanje. Odgovorili vam bomo na vaš e-naslov v najkrajšem času.</p>
            <button 
              onClick={() => setSubmitted(false)}
              className="mt-8 text-red-500 font-bold hover:underline uppercase text-sm tracking-widest"
            >
              Oddaj novo povpraševanje
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white/5 p-8 sm:p-12 rounded-[2.5rem] border border-white/10 backdrop-blur-xl shadow-2xl">
            {/* Ime */}
            <div className="space-y-2">
              <label className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] ml-1">Ime in Priimek</label>
              <input 
                required
                type="text" 
                placeholder="Janez Novak"
                className="w-full bg-slate-800/40 border border-slate-700/50 rounded-2xl p-4 focus:ring-2 focus:ring-red-500 outline-none text-white transition-all"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
              />
            </div>

            {/* Email */}
            <div className="space-y-2">
              <label className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] ml-1">Vaš E-naslov</label>
              <input 
                required
                type="email" 
                placeholder="janez@email.com"
                className="w-full bg-slate-800/40 border border-slate-700/50 rounded-2xl p-4 focus:ring-2 focus:ring-red-500 outline-none text-white transition-all"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
              />
            </div>

            {/* Telefon */}
            <div className="space-y-2">
              <label className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] ml-1">Telefon</label>
              <input 
                required
                type="tel" 
                placeholder="041 000 000"
                className="w-full bg-slate-800/40 border border-slate-700/50 rounded-2xl p-4 focus:ring-2 focus:ring-red-500 outline-none text-white transition-all"
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
              />
            </div>

            {/* Število vozil */}
            <div className="space-y-2">
              <label className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] ml-1">Število vozil</label>
              <input 
                required
                type="number" 
                min="1"
                className="w-full bg-slate-800/40 border border-slate-700/50 rounded-2xl p-4 focus:ring-2 focus:ring-red-500 outline-none text-white transition-all font-bold"
                value={formData.carCount}
                onChange={(e) => setFormData({...formData, carCount: parseInt(e.target.value) || 1})}
              />
            </div>

            {/* Vrsta storitve */}
            <div className="space-y-2">
              <label className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] ml-1">Vrsta storitve</label>
              <select 
                className="w-full bg-slate-800/40 border border-slate-700/50 rounded-2xl p-4 focus:ring-2 focus:ring-red-500 outline-none text-white transition-all cursor-pointer"
                value={formData.serviceType}
                onChange={(e) => setFormData({...formData, serviceType: e.target.value as any})}
              >
                <option value="repair">Popravilo razpoke (pikica)</option>
                <option value="replacement">Menjava celotnega stekla</option>
              </select>
            </div>

            {/* Datum */}
            <div className="space-y-2">
              <label className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] ml-1">Želen Datum</label>
              <input 
                required
                type="date" 
                className="w-full bg-slate-800/40 border border-slate-700/50 rounded-2xl p-4 focus:ring-2 focus:ring-red-500 outline-none text-white transition-all cursor-pointer"
                value={formData.preferredDate}
                onChange={(e) => setFormData({...formData, preferredDate: e.target.value})}
              />
            </div>

            {/* Gumb */}
            <div className="md:col-span-2 mt-6">
              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-[#E31E24] hover:bg-red-700 text-white font-black py-6 rounded-2xl text-xl transition-all shadow-xl shadow-red-600/20 active:scale-[0.98] flex items-center justify-center gap-4 group"
              >
                {isSubmitting ? (
                  <div className="w-8 h-8 border-4 border-white/20 border-t-white rounded-full animate-spin"></div>
                ) : (
                  <>
                    ODDAJ REZERVACIJO
                    <svg className="w-6 h-6 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </>
                )}
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
};

export default BookingSection;
