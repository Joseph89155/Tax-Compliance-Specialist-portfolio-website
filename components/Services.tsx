import React from 'react';
import { SERVICES } from '../constants';

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-16 bg-darker">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center mb-10 space-y-4">
          <span className="text-gold serif italic text-xl uppercase tracking-[0.3em]">Services</span>
          <h3 className="text-3xl md:text-5xl serif text-white font-bold tracking-tight">Solutions for Growth</h3>
          <div className="w-20 h-0.5 bg-gold rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <div 
              key={index}
              className="group p-10 border border-white/5 bg-navy/40 hover:bg-gold transition-all duration-700 rounded-2xl hover:shadow-[0_20px_50px_rgba(205,162,109,0.2)] hover:-translate-y-2"
            >
              <div className="text-gold group-hover:text-navy mb-8 transition-transform duration-700 group-hover:scale-110 group-hover:rotate-3">
                <div className="bg-darker/50 w-14 h-14 rounded-xl flex items-center justify-center group-hover:bg-white/20 transition-colors">
                  {service.icon}
                </div>
              </div>
              <h4 className="serif text-2xl text-gold group-hover:text-navy mb-4 font-bold transition-colors leading-tight">
                {service.title}
              </h4>
              <p className="text-white/80 group-hover:text-navy/90 leading-relaxed text-base font-light transition-colors">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};