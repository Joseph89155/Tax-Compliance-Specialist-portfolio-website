import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { About } from './components/About';
import { Process } from './components/Process';
import { Testimonials } from './components/Testimonials';
import { AIAssistant } from './components/AIAssistant';
import { FAQ } from './components/FAQ';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Articles } from './components/Articles';
import { ArticleDetail } from './components/ArticleDetail';
import { Article } from './types';

const App: React.FC = () => {
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Scroll to top and trigger animation when an article is selected
  useEffect(() => {
    if (selectedArticle) {
      window.scrollTo({ top: 0, behavior: 'instant' });
      setIsTransitioning(true);
      const timer = setTimeout(() => setIsTransitioning(false), 50);
      return () => clearTimeout(timer);
    }
  }, [selectedArticle]);

  const handleNavigate = (id: string) => {
    setSelectedArticle(null);
    
    setTimeout(() => {
      if (id === 'home') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
      }
      const element = document.getElementById(id);
      if (element) {
        const offset = 80;
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = element.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }, 100);
  };

  return (
    <div className="min-h-screen bg-darker selection:bg-gold selection:text-navy font-sans relative overflow-x-hidden">
      <Navbar onNavigate={handleNavigate} />
      
      <main className={`relative z-10 transition-all duration-700 ${isTransitioning ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
        {selectedArticle ? (
          <div className="animate-fade-in">
            <ArticleDetail 
              article={selectedArticle} 
              onBack={() => handleNavigate('insights')} 
            />
          </div>
        ) : (
          <div className="flex flex-col">
            <Hero />
            <Services />
            <Process />
            <About />
            <Articles onSelectArticle={setSelectedArticle} />
            <Testimonials />
            <AIAssistant />
            <FAQ />
            <Contact />
          </div>
        )}
      </main>
      
      <Footer onNavigate={handleNavigate} />
      
      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(-3%); }
          50% { transform: translateY(0); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 4s ease-in-out infinite;
        }
        .stagger-1 { animation-delay: 0.1s; }
        .stagger-2 { animation-delay: 0.2s; }
        .stagger-3 { animation-delay: 0.3s; }
        
        section {
          transition: transform 0.6s ease-out, opacity 0.6s ease-out;
        }
      `}</style>
    </div>
  );
};

export default App;