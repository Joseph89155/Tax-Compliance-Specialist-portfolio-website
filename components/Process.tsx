import React from 'react';
import { PROCESS_STEPS } from '../constants';

export const Process: React.FC = () => {
  return (
    <section className="py-16 bg-navy dark:bg-darker transition-colors duration-300 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold to-transparent opacity-30"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-gold serif italic text-xl uppercase tracking-widest">Our Method</h2>
          <h3 className="text-3xl md:text-4xl serif text-white font-bold transition-colors">Path to Financial Excellence</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 relative">
          {/* Connector Line for Desktop */}
          <div className="hidden lg:block absolute top-12 left-0 w-full h-0.5 bg-gold/20 -z-0"></div>
          
          {PROCESS_STEPS.map((step, index) => (
            <div key={index} className="relative z-10 group text-center lg:text-left">
              <div className="w-20 h-20 bg-darker dark:bg-navy border-2 border-gold rounded-full flex items-center justify-center mx-auto lg:mx-0 mb-6 group-hover:bg-gold transition-all duration-500 shadow-xl shadow-gold/10">
                <div className="text-gold group-hover:text-navy transition-colors duration-300 scale-90">
                  {step.icon}
                </div>
                <div className="absolute -top-1.5 -right-1.5 w-8 h-8 bg-gold text-navy rounded-full flex items-center justify-center font-bold text-base border-2 border-navy">
                  0{index + 1}
                </div>
              </div>
              <h4 className="serif text-xl text-white font-bold mb-3 group-hover:text-gold transition-colors">{step.title}</h4>
              <p className="text-white/80 leading-relaxed text-sm lg:pr-4 font-light">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};