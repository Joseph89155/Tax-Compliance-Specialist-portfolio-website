
import React from 'react';

export const Logo: React.FC<{ size?: 'sm' | 'md' | 'lg' }> = ({ size = 'md' }) => {
  const dimensions = {
    sm: '32',
    md: '48',
    lg: '96'
  };

  const dim = dimensions[size];

  return (
    <svg 
      width={dim} 
      height={dim} 
      viewBox="0 0 100 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className="drop-shadow-lg"
    >
      <circle cx="50" cy="50" r="46" stroke="#cda26d" strokeWidth="8" />
      <rect x="30" y="60" width="8" height="15" fill="#cda26d" />
      <rect x="45" y="45" width="8" height="30" fill="#cda26d" />
      <rect x="60" y="30" width="8" height="45" fill="#cda26d" />
      <path d="M60 30L68 30L68 38" stroke="#cda26d" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M60 38L68 30" stroke="#cda26d" strokeWidth="4" strokeLinecap="round" />
    </svg>
  );
};
