import React from 'react';
import { Logo } from './Logo';

interface FooterProps {
  onNavigate: (id: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-darker/70 backdrop-blur-md py-14 border-t border-gold/10 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        <div className="flex justify-center cursor-pointer" onClick={() => onNavigate('home')}>
          <Logo size="md" />
        </div>
        <div>
          <h2 className="serif text-3xl text-white font-bold tracking-widest uppercase">Lucia Maina</h2>
          <p className="text-gold italic serif text-xl tracking-wider mt-2">Financial Clarity You Can Trust</p>
        </div>
        <div className="flex justify-center gap-8 text-white/70 text-base font-medium uppercase tracking-[0.3em]">
          <a href="#" className="hover:text-gold transition-colors">LinkedIn</a>
        </div>
        <div className="pt-8 border-t border-white/5">
          <p className="text-white/40 text-sm tracking-widest uppercase font-light">
            &copy; {new Date().getFullYear()} Lucia Maina. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};