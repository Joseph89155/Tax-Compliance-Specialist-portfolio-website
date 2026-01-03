
import React from 'react';
import { Logo } from './Logo';

export const Hero: React.FC = () => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  const heroImageUrl = "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=1920";

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-20" aria-label="Introduction">
      {/* Background - Full Width Rectangular */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img 
          src={heroImageUrl} 
          alt="Professional Financial Advisory Environment" 
          className="w-full h-full object-cover opacity-80"
          loading="eager"
        />
        <div className="absolute inset-0 diagonal-split opacity-90"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-darker via-transparent to-transparent opacity-70"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full grid grid-cols-1 md:grid-cols-2 items-center gap-12 relative z-10 py-12">
        <div className="space-y-6 animate-fade-in stagger-1">
          <div className="animate-bounce-slow inline-block drop-shadow-[0_0_15px_rgba(205,162,109,0.3)]">
             <Logo size="lg" />
          </div>
          <div className="space-y-4">
            <h1 className="text-3xl md:text-5xl lg:text-6xl serif text-white font-bold leading-none tracking-tighter">
              LUCIA <span className="text-gold">MAINA</span>
            </h1>
            <p className="text-gold italic text-base md:text-lg tracking-widest font-light serif uppercase border-l-4 border-gold pl-5 py-1.5">
              Tax Compliance Specialist
            </p>
            <p className="text-white/80 text-base md:text-lg max-w-xl font-light leading-relaxed">
              Empowering businesses with strategic financial clarity. We transform complex regulatory requirements into a seamless, automated advantage for modern businesses locally and internationally.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-5 pt-4">
            <a
              href="#services"
              onClick={(e) => handleScroll(e, 'services')}
              className="bg-gold text-navy text-center px-8 py-3 font-bold text-base rounded-sm hover:bg-white transition-all shadow-2xl hover:-translate-y-1"
            >
              Explore Services
            </a>
            <a
              href="#contact"
              onClick={(e) => handleScroll(e, 'contact')}
              className="border-2 border-white/30 text-white text-center px-8 py-3 font-bold text-base rounded-sm hover:bg-white hover:text-navy transition-all shadow-2xl backdrop-blur-md hover:-translate-y-1"
            >
              Contact Me
            </a>
          </div>
        </div>

        <div className="hidden md:flex justify-end animate-fade-in stagger-2">
          <div className="relative group">
            <div className="absolute -inset-4 bg-gold/20 blur-2xl rounded-sm transition duration-1000 group-hover:duration-200"></div>
            <div className="relative bg-navy/80 backdrop-blur-xl p-8 md:p-12 rounded-sm border border-gold/30 shadow-3xl transform transition-all duration-700 hover:rotate-2 hover:scale-105">
              <div className="serif text-white text-center space-y-2">
                <p className="text-3xl tracking-widest uppercase font-bold">Financial Clarity</p>
                <p className="text-gold italic text-xl">You Can Trust</p>
              </div>
              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="bg-white/5 p-5 rounded-sm border border-white/10 text-center">
                  <p className="text-gold font-bold text-2xl">100%</p>
                  <p className="text-white/60 text-[9px] uppercase tracking-widest mt-1.5">Compliance</p>
                </div>
                <div className="bg-white/5 p-5 rounded-sm border border-white/10 text-center">
                  <p className="text-gold font-bold text-2xl">Expert</p>
                  <p className="text-white/60 text-[9px] uppercase tracking-widest mt-1.5">Advisory</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
