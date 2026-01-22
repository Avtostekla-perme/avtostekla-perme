
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BookingSection from './components/BookingSection';
import Services from './components/Services';
import Footer from './components/Footer';
import GlassAssistant from './components/GlassAssistant';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col selection:bg-red-100 font-sans">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Services />
        <BookingSection />
        <div className="bg-slate-50 py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mb-4">
                Imate vprašanje?
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Naš pametni asistent vam pomaga pri vseh vprašanjih glede poškodb in postopkov.
              </p>
            </div>
            <GlassAssistant />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;
