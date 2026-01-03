import React, { useState } from 'react';
import { ArrowRight, Clock, Twitter, Linkedin } from 'lucide-react';
import { ARTICLES } from '../constants';
import { Article } from '../types';

interface ArticlesProps { onSelectArticle: (article: Article) => void; }

export const Articles: React.FC<ArticlesProps> = ({ onSelectArticle }) => {
  const [showAll, setShowAll] = useState(false);

  const shareOnTwitter = (e: React.MouseEvent, title: string) => {
    e.stopPropagation();
    const url = window.location.href;
    const text = encodeURIComponent(`Check out this article: ${title}`);
    window.open(`https://twitter.com/intent/tweet?text=${text}&url=${encodeURIComponent(url)}`, '_blank');
  };

  const shareOnLinkedin = (e: React.MouseEvent, title: string) => {
    e.stopPropagation();
    const url = window.location.href;
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, '_blank');
  };

  const displayedArticles = showAll ? ARTICLES : ARTICLES.slice(0, 3);

  return (
    <section id="insights" className="py-16 bg-transparent overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-8">
          <div className="space-y-4">
            <span className="text-gold serif italic text-xl uppercase tracking-[0.4em]">Expertise</span>
            <h3 className="text-3xl md:text-5xl serif text-white font-bold leading-none tracking-tighter">
              Navigating <br /> <span className="text-gold">Landscapes</span>
            </h3>
          </div>
          <p className="text-white/50 max-w-sm italic text-lg border-l-2 border-gold/30 pl-6 leading-relaxed font-light">
            Insights on Kenyan compliance & international financial architecture.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedArticles.map((article, index) => (
            <article 
              key={article.id}
              onClick={() => onSelectArticle(article)}
              className={`group flex flex-col bg-navy/40 border border-gold/5 rounded-2xl overflow-hidden hover:border-gold/40 transition-all duration-700 hover:-translate-y-2 shadow-3xl animate-fade-in stagger-${(index % 3) + 1} cursor-pointer relative`}
            >
              <div className="absolute inset-0 bg-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none"></div>
              
              <div className="relative aspect-[16/9] overflow-hidden">
                <img src={article.imageUrl} alt={article.title} loading="lazy" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-70 group-hover:opacity-100" />
                <div className="absolute top-4 left-4 z-10">
                  <span className="px-3 py-1 bg-gold/90 backdrop-blur-md text-navy text-[9px] font-bold uppercase tracking-[0.2em] rounded-full">
                    {article.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6 flex-grow flex flex-col relative z-10">
                <div className="flex items-center gap-4 text-white/40 text-[9px] uppercase tracking-widest font-bold mb-4">
                  <Clock size={10} className="text-gold" />
                  {article.readTime}
                </div>
                
                <h4 className="serif text-xl text-white font-bold mb-3 group-hover:text-gold transition-all duration-500 line-clamp-2 leading-tight">
                  {article.title}
                </h4>
                
                <p className="text-white/70 group-hover:text-white/90 transition-colors mb-6 line-clamp-3 leading-relaxed text-sm font-light">
                  {article.excerpt}
                </p>
                
                <div className="mt-auto pt-4 border-t border-white/5 flex items-center justify-between">
                  <span className="flex items-center gap-3 text-gold font-bold text-[10px] uppercase tracking-[0.3em] group/btn transition-all duration-500">
                    Read More <ArrowRight size={12} className="group-hover/btn:translate-x-1.5 transition-transform duration-500" />
                  </span>
                  
                  <div className="flex items-center gap-3 opacity-30 group-hover:opacity-100 transition-all duration-700 translate-y-1 group-hover:translate-y-0">
                    <button onClick={(e) => shareOnTwitter(e, article.title)} className="p-1.5 text-white hover:text-gold transition-transform hover:scale-110">
                      <Twitter size={16} />
                    </button>
                    <button onClick={(e) => shareOnLinkedin(e, article.title)} className="p-1.5 text-white hover:text-gold transition-transform hover:scale-110">
                      <Linkedin size={16} />
                    </button>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <button onClick={() => setShowAll(!showAll)} className="group relative inline-flex items-center justify-center bg-transparent border-2 border-gold/50 text-gold px-10 py-3 font-bold text-xs uppercase tracking-[0.4em] rounded-xl overflow-hidden transition-all duration-700 hover:border-gold hover:text-navy">
            <span className="absolute inset-0 w-0 h-full bg-gold transition-all duration-700 ease-in-out group-hover:w-full -z-0"></span>
            <span className="relative z-10">{showAll ? 'Collapse' : 'View All Insights'}</span>
          </button>
        </div>
      </div>
    </section>
  );
};