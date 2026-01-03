
import React, { useState } from 'react';

const CustomCheckIcon = ({ size = 24, className = "" }: { size?: number, className?: string }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <circle cx="12" cy="12" r="11" stroke="currentColor" strokeWidth="0.8" />
    <circle cx="12" cy="12" r="7" stroke="currentColor" strokeWidth="0.8" />
    <path 
      d="M9.5 12L11.25 13.75L15 10" 
      stroke="currentColor" 
      strokeWidth="1.2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
    />
  </svg>
);

export const About: React.FC = () => {
  const [portraitSrc, setPortraitSrc] = useState("portrait.jpg");
  
  const credentials = [
    "Expert in Tax Compliance",
    "Certified Bookkeeping Professional",
    "Strategic Financial Advisory",
    "Payroll Management Specialist"
  ];

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const target = e.currentTarget;
    console.warn(`Lucia Advisory: Initial path ${portraitSrc} failed. Trying alternative...`);
    
    // Attempt common path resolutions for production environments
    if (portraitSrc === "portrait.jpg") {
      setPortraitSrc("./portrait.jpg");
    } else if (portraitSrc === "./portrait.jpg") {
      setPortraitSrc("/portrait.jpg");
    } else {
      console.error("Lucia Advisory: Portrait image could not be found at root paths. Please ensure portrait.jpg is in the project root.");
    }
  };

  return (
    <section id="about" className="py-16 px-4 sm:px-6 lg:px-8 bg-darker relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div className="relative group">
            <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-gold/20 rounded-sm -z-0 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-1000"></div>
            
            <div className="relative z-10">
              <div className="aspect-[4/5] overflow-hidden rounded-sm shadow-3xl border border-white/5 bg-navy/80 flex items-center justify-center transform transition-all duration-1000 group-hover:scale-[1.01]">
                <img 
                  src={portraitSrc} 
                  alt="Lucia Maina Portrait" 
                  className="w-full h-full object-cover transition-opacity duration-1000 opacity-0"
                  onLoad={(e) => (e.currentTarget as HTMLImageElement).style.opacity = '1'}
                  onError={handleImageError}
                />
              </div>
              
              <div className="absolute -bottom-6 left-6 right-6 bg-navy/95 backdrop-blur-xl p-6 rounded-sm border border-gold/30 shadow-3xl transform group-hover:-translate-y-1 transition-transform duration-700">
                <p className="text-gold serif italic text-xl mb-4 tracking-tight font-bold">Expertise</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-8">
                  <div className="flex items-center gap-4">
                    <div className="flex-shrink-0 text-gold">
                      <CustomCheckIcon size={18} />
                    </div>
                    <span className="text-white text-[9px] font-bold uppercase tracking-[0.2em] font-sans leading-tight">EXPERT IN KRA TAX COMPLIANCE</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex-shrink-0 text-gold">
                      <CustomCheckIcon size={18} />
                    </div>
                    <span className="text-white text-[9px] font-bold uppercase tracking-[0.2em] font-sans leading-tight">CERTIFIED BOOKKEEPING PROFESSIONAL</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-10 lg:pl-10">
            <div className="space-y-5">
              <h2 className="text-3xl md:text-5xl serif text-white font-bold tracking-tighter leading-[1.1]">
                Professional <br /><span className="text-gold italic">Excellence in Finance</span>
              </h2>
              <div className="w-24 h-1.5 bg-gold rounded-full"></div>
            </div>

            <p className="text-white/70 leading-relaxed text-xl font-light font-sans">
              Lucia Maina is a dedicated Tax Compliance and Bookkeeping Consultant based in Nairobi. With a deep understanding of the local regulatory landscape, she helps businesses navigate the complexities of tax laws while maintaining crystal-clear financial records.
            </p>

            <div className="space-y-5">
              {credentials.map((item, i) => (
                <div key={i} className="flex items-center gap-5 group">
                  <div className="text-gold transition-all duration-500 group-hover:scale-110">
                    <CustomCheckIcon size={22} />
                  </div>
                  <span className="text-white font-bold tracking-[0.2em] uppercase text-[10px] group-hover:text-gold transition-colors font-sans">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <div className="bg-navy/50 p-8 rounded-sm border-l-[8px] border-gold shadow-2xl relative overflow-hidden">
              <p className="italic text-white/95 serif text-xl leading-snug relative z-10">
                "My mission is to remove the burden of compliance from business owners, allowing them to focus on what they do best: growing their vision."
              </p>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};
