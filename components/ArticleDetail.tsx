import React from 'react';
import { ArrowLeft, Clock, Calendar, User, Share2 } from 'lucide-react';
import { Article } from '../types';

interface ArticleDetailProps {
  article: Article;
  onBack: () => void;
}

export const ArticleDetail: React.FC<ArticleDetailProps> = ({ article, onBack }) => {
  return (
    <div className="py-16 animate-fade-in px-4 sm:px-10 lg:px-20">
      <div className="max-w-4xl mx-auto">
        <button 
          onClick={onBack}
          className="group flex items-center gap-3 text-gold hover:text-white transition-all mb-12 uppercase text-xs font-bold tracking-[0.3em] bg-white/5 px-6 py-3 rounded-full border border-white/5 hover:bg-gold hover:text-navy"
        >
          <ArrowLeft size={18} className="group-hover:-translate-x-1.5 transition-transform" /> Back to Insights
        </button>

        <header className="mb-16 space-y-10">
          <div className="flex flex-wrap gap-6 items-center">
            <span className="px-6 py-2 bg-gold text-navy text-[10px] font-bold uppercase tracking-widest rounded-full shadow-xl">
              {article.category}
            </span>
            <div className="flex items-center gap-6 text-white/50 text-[10px] font-bold uppercase tracking-widest">
              <span className="flex items-center gap-2"><Calendar size={14} className="text-gold" /> {article.date}</span>
              <span className="flex items-center gap-2"><Clock size={14} className="text-gold" /> {article.readTime}</span>
              <span className="flex items-center gap-2"><User size={14} className="text-gold" /> {article.author}</span>
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl serif text-white font-bold leading-[1] tracking-tighter">
            {article.title}
          </h1>
          
          <div className="w-full aspect-[21/9] overflow-hidden rounded-2xl border border-gold/20 shadow-3xl">
            <img 
              src={article.imageUrl} 
              alt={article.title} 
              className="w-full h-full object-cover scale-105 hover:scale-100 transition-transform duration-1000"
            />
          </div>
        </header>

        <div className="prose prose-invert max-w-none">
          <p className="text-gold italic text-3xl serif leading-snug mb-16 border-l-6 border-gold pl-10 py-2">
            {article.excerpt}
          </p>
          
          <div className="text-white/80 leading-relaxed space-y-10 text-xl font-light">
            {article.content.split('\n\n').map((para, i) => (
              <p key={i} className="first-letter:text-5xl first-letter:font-serif first-letter:mr-3 first-letter:float-left first-letter:text-gold">{para}</p>
            ))}
          </div>
        </div>

        <footer className="mt-20 pt-16 border-t border-gold/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-12">
            <div className="flex items-center gap-8">
              <div className="w-20 h-20 bg-gold/10 rounded-xl flex items-center justify-center font-bold text-gold serif italic text-3xl border border-gold/20 shadow-xl">
                L
              </div>
              <div>
                <p className="text-white font-bold text-2xl uppercase tracking-[0.2em]">Lucia Maina</p>
                <p className="text-gold text-sm italic serif tracking-widest mt-1">Strategic Compliance Advisor</p>
              </div>
            </div>
            
            <div className="flex items-center gap-6">
              <span className="text-white/30 text-[10px] font-bold uppercase tracking-[0.4em]">Share Article</span>
              <button className="p-5 bg-navy border border-gold/20 rounded-xl text-gold hover:bg-gold hover:text-navy transition-all shadow-2xl hover:-translate-y-1">
                <Share2 size={24} />
              </button>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};