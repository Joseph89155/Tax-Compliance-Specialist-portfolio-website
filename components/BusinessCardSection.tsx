import React from 'react';
import { Download, UserPlus, Share2 } from 'lucide-react';
import { CONTACT_INFO, SERVICES } from '../constants';

export const BusinessCardSection: React.FC = () => {
  const downloadVCard = () => {
    const vcard = `BEGIN:VCARD
VERSION:3.0
FN:Lucia Maina
ORG:Tax Compliance & Bookkeeping Consultant
TITLE:Consultant
TEL;TYPE=CELL:${CONTACT_INFO.phone}
EMAIL:${CONTACT_INFO.email}
ADR;TYPE=WORK:;;${CONTACT_INFO.location};;;;
END:VCARD`;

    const blob = new Blob([vcard], { type: 'text/vcard' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'Lucia_Maina_Contact.vcf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleDownloadTemplate = () => {
    const svgElement = document.getElementById('business-card-svg');
    if (!svgElement) return;

    const svgData = new XMLSerializer().serializeToString(svgElement);
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    
    // Scale for high quality 
    const scale = 2;
    canvas.width = 1050 * scale;
    canvas.height = 600 * scale;

    const img = new Image();
    const svgBlob = new Blob([svgData], { type: 'image/svg+xml;charset=utf-8' });
    const url = URL.createObjectURL(svgBlob);

    img.onload = () => {
      if (ctx) {
        ctx.fillStyle = '#0a2233';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.scale(scale, scale);
        ctx.drawImage(img, 0, 0);
        
        const pngUrl = canvas.toDataURL('image/png', 1.0);
        const downloadLink = document.createElement('a');
        downloadLink.href = pngUrl;
        downloadLink.download = 'Lucia_Maina_Business_Card.png';
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
      }
      URL.revokeObjectURL(url);
    };
    img.src = url;
  };

  return (
    <section id="digital-card" className="py-16 bg-gray-50 dark:bg-darker transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-10">
          <h2 className="text-gold serif italic text-xl uppercase tracking-widest mb-3">Identity Design</h2>
          <h3 className="text-3xl serif text-navy dark:text-white font-bold transition-colors">Our Signature Business Card</h3>
          <p className="mt-3 text-gray-600 dark:text-white/60 max-w-xl mx-auto text-sm">
            Modeled directly after our professional template for brand consistency.
          </p>
        </div>

        {/* Business Card Visualization - Exact 1:1 Recreation */}
        <div className="flex justify-center mb-10 px-4">
          <div className="relative w-full max-w-[800px] shadow-2xl rounded-sm overflow-hidden border border-gold/10 bg-white aspect-[1050/600] group">
            <svg 
              id="business-card-svg"
              viewBox="0 0 1050 600" 
              className="w-full h-full block"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Background Color Base */}
              <rect width="1050" height="600" fill="#cda26d" />
              
              {/* Navy Diagonal Path (Top Left) */}
              <path d="M0 0 L680 0 L380 600 L0 600 Z" fill="#0a2233" />
              
              {/* Motto (Bottom Left corner on Navy) */}
              <text 
                x="30" 
                y="570" 
                fill="#cda26d" 
                fontFamily="Playfair Display, serif" 
                fontSize="22" 
                fontStyle="italic"
                letterSpacing="1"
              >
                FINANCIAL CLARITY YOU CAN TRUST
              </text>

              {/* Logo Area (Top Left on Navy) */}
              <g transform="translate(80, 30)">
                 {/* Logo Outer Circle */}
                 <circle cx="80" cy="80" r="70" stroke="#cda26d" strokeWidth="6" fill="#0a2233" />
                 <circle cx="80" cy="80" r="76" stroke="#cda26d" strokeWidth="1" fill="none" opacity="0.3" />
                 
                 {/* Growth Arrow Symbol */}
                 <g transform="translate(42, 42) scale(0.75)">
                    <rect x="0" y="60" width="12" height="35" rx="2" fill="#cda26d" transform="rotate(-45 0 60)" />
                    <rect x="25" y="45" width="12" height="55" rx="2" fill="#cda26d" transform="rotate(-45 25 45)" />
                    <rect x="50" y="30" width="12" height="75" rx="2" fill="#cda26d" transform="rotate(-45 50 30)" />
                    <path d="M75 -5 L105 25 L45 25 Z" fill="#cda26d" transform="rotate(45 75 -5) translate(-10, -5)" />
                 </g>
              </g>

              {/* Name and Title (Top Right on Gold) */}
              <g transform="translate(980, 100)" textAnchor="end">
                <text 
                  fill="#0a2233" 
                  fontFamily="Playfair Display, serif" 
                  fontSize="82" 
                  fontWeight="600" 
                  letterSpacing="4"
                >
                  LUCIA MAINA
                </text>
                <text 
                  y="55" 
                  fill="#0a2233" 
                  fontFamily="Playfair Display, serif" 
                  fontSize="22" 
                  fontStyle="italic"
                  letterSpacing="0.5"
                >
                  TAX COMPLIANCE AND BOOKKEEPING CONSULTANT.
                </text>
              </g>

              {/* Services Header & List */}
              <g transform="translate(350, 410)">
                <text fill="#0a2233" fontFamily="Playfair Display, serif" fontSize="46" fontStyle="italic">Services.</text>
                <g transform="translate(15, 45)">
                  {SERVICES.map((s, i) => (
                    <g key={i} transform={`translate(0, ${i * 42})`}>
                      <circle cx="0" cy="-7" r="3.5" fill="#0a2233" />
                      <text x="25" fill="#0a2233" fontFamily="Montserrat, sans-serif" fontSize="21" fontWeight="400">{s.title}.</text>
                    </g>
                  ))}
                </g>
              </g>

              {/* Contacts Header & Details */}
              <g transform="translate(795, 410)">
                <text fill="#0a2233" fontFamily="Playfair Display, serif" fontSize="46" fontStyle="italic">Contacts</text>
                <g transform="translate(170, 45)" textAnchor="end">
                  {/* Email */}
                  <g transform="translate(0, 0)">
                    <text x="-45" y="-1" fill="#0a2233" fontFamily="Montserrat, sans-serif" fontSize="22">{CONTACT_INFO.email}</text>
                    <circle cx="0" cy="-8" r="18" fill="#0a2233" />
                    <path transform="translate(-10, -18) scale(0.8)" d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z m0 4l8 5 8-5" stroke="#cda26d" strokeWidth="2" fill="none" />
                  </g>
                  {/* Phone */}
                  <g transform="translate(0, 60)">
                    <text x="-45" y="-1" fill="#0a2233" fontFamily="Montserrat, sans-serif" fontSize="22">{CONTACT_INFO.phone}</text>
                    <circle cx="0" cy="-8" r="18" fill="#0a2233" />
                    <path transform="translate(-10, -18) scale(0.8)" d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" stroke="#cda26d" strokeWidth="2" fill="none" />
                  </g>
                  {/* Location */}
                  <g transform="translate(0, 120)">
                    <text x="-45" y="-1" fill="#0a2233" fontFamily="Montserrat, sans-serif" fontSize="22">{CONTACT_INFO.location}</text>
                    <circle cx="0" cy="-8" r="18" fill="#0a2233" />
                    <path transform="translate(-10, -18) scale(0.8)" d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" stroke="#cda26d" strokeWidth="2" fill="none" />
                  </g>
                </g>
              </g>
            </svg>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          <button 
            onClick={downloadVCard}
            className="flex items-center gap-2 bg-navy text-gold dark:bg-gold dark:text-navy px-6 py-3 rounded-lg font-bold shadow-xl hover:scale-105 transition-all text-sm"
          >
            <UserPlus size={18} />
            Save to Contacts
          </button>
          
          <button 
            onClick={handleDownloadTemplate}
            className="flex items-center gap-2 border-2 border-navy text-navy dark:border-gold dark:text-gold px-6 py-3 rounded-lg font-bold shadow-xl hover:bg-navy hover:text-white dark:hover:bg-gold dark:hover:text-navy transition-all text-sm"
          >
            <Download size={18} />
            Download Digital Card
          </button>
        </div>
      </div>
    </section>
  );
};