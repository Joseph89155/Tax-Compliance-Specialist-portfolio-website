import React, { useState } from 'react';
import { Logo } from './Logo';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  onNavigate: (id: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'Services', id: 'services' },
    { name: 'About', id: 'about' },
    { name: 'Insights', id: 'insights' },
    { name: 'Consult', id: 'ai-assistant' },
    { name: 'Contact', id: 'contact' },
  ];

  const handleLinkClick = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    onNavigate(id);
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-darker/80 backdrop-blur-md border-b border-gold/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => onNavigate('home')}>
            <Logo size="sm" />
            <span className="serif text-gold text-xl tracking-wider font-bold uppercase hidden sm:block">
              Lucia Maina
            </span>
          </div>
          
          <div className="hidden md:block">
            <div className="flex items-center space-x-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={`#${link.id}`}
                  onClick={(e) => handleLinkClick(e, link.id)}
                  className="text-white hover:text-gold px-2 py-1 text-base font-medium transition-colors duration-200"
                >
                  {link.name}
                </a>
              ))}
              
              <a
                href="#contact"
                onClick={(e) => handleLinkClick(e, 'contact')}
                className="bg-gold text-navy px-6 py-2 rounded-sm font-bold hover:bg-white transition-all duration-300 shadow-lg text-sm"
              >
                Book a Call
              </a>
            </div>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gold p-2"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-darker/95 backdrop-blur-lg border-b border-gold/20 animate-fade-in">
          <div className="px-4 pt-4 pb-6 space-y-2 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={`#${link.id}`}
                className="text-white hover:text-gold block px-3 py-4 text-lg font-medium"
                onClick={(e) => handleLinkClick(e, link.id)}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};