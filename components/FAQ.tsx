import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { FAQS } from '../constants';

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-16 bg-darker transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 space-y-3">
          <h2 className="text-gold serif italic text-xl uppercase tracking-widest">Guidance</h2>
          <h3 className="text-3xl md:text-4xl serif text-white font-bold">Common Inquiries</h3>
          <p className="text-white/60 max-w-lg mx-auto italic text-sm">
            Navigating the financial landscape together.
          </p>
        </div>

        <div className="space-y-3">
          {FAQS.map((faq, i) => (
            <div 
              key={i} 
              className="border border-gold/20 rounded-xl overflow-hidden bg-navy shadow-sm hover:shadow-md transition-shadow"
            >
              <button 
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full px-6 py-5 flex items-center justify-between text-left group"
              >
                <span className="serif text-lg font-bold text-white group-hover:text-gold transition-colors leading-tight">
                  {faq.question}
                </span>
                <div className={`p-1.5 rounded-full bg-gold/10 text-gold transition-transform duration-300 ${openIndex === i ? 'rotate-180' : ''}`}>
                  {openIndex === i ? <Minus size={18} /> : <Plus size={18} />}
                </div>
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === i ? 'max-h-96' : 'max-h-0'}`}
              >
                <div className="px-6 pb-6 text-white/80 leading-relaxed border-t border-gold/5 pt-5 text-base font-light">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};