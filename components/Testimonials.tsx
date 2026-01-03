import React from 'react';
import { Quote } from 'lucide-react';
import { TESTIMONIALS } from '../constants';

export const Testimonials: React.FC = () => {
  return (
    <section className="py-16 bg-darker">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-gold serif italic text-xl uppercase tracking-widest">Client Success</h2>
          <h3 className="text-3xl md:text-5xl serif text-white font-bold">Trusted by Visionaries</h3>
          <div className="w-24 h-0.5 bg-gold mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, i) => (
            <div key={i} className="bg-navy/40 p-10 rounded-xl shadow-xl border border-gold/10 relative hover:border-gold/30 transition-all group">
              <Quote className="text-gold/20 group-hover:text-gold/40 absolute top-6 right-6 transition-colors" size={40} />
              <p className="text-white italic mb-8 relative z-10 text-lg leading-relaxed">
                "{t.quote}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-14 h-14 bg-gold/10 rounded-full flex items-center justify-center font-bold text-gold serif italic text-xl border border-gold/20">
                  {t.author[0]}
                </div>
                <div>
                  <h5 className="font-bold text-white text-base">{t.author}</h5>
                  <p className="text-gold text-[10px] font-bold uppercase tracking-widest">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};