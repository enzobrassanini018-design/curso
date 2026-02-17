
import React, { useState } from 'react';
import { LOGO_URL } from '../constants';

interface OmnitrixDialProps {
  onSelect: (alienId: string) => void;
}

const OmnitrixDial: React.FC<OmnitrixDialProps> = ({ onSelect }) => {
  const [rotation, setRotation] = useState(0);

  const rotate = () => {
    setRotation(prev => prev + 45);
  };

  return (
    <div className="relative flex flex-col items-center justify-center py-12">
      <div 
        className="w-64 h-64 md:w-80 md:h-80 rounded-full border-8 border-neutral-800 bg-neutral-900 relative shadow-2xl flex items-center justify-center transition-transform duration-500 cursor-pointer overflow-hidden group"
        onClick={rotate}
        style={{ transform: `rotate(${rotation}deg)` }}
      >
        <div className="absolute inset-0 bg-[url('https://www.transparentpng.com/download/omnitrix/omnitrix-hd-images-2.png')] bg-cover opacity-20"></div>
        
        {/* The Core Symbol - Now using the provided Logo URL */}
        <div className="w-32 h-32 md:w-40 md:h-40 bg-green-500 rounded-full flex items-center justify-center shadow-[0_0_50px_rgba(34,197,94,1)] relative z-10 border-4 border-black animate-pulse overflow-hidden">
           <img 
             src={LOGO_URL} 
             alt="Omnitrix Core" 
             className="w-full h-full object-cover"
           />
        </div>

        {/* Outer Ring Elements */}
        {[...Array(8)].map((_, i) => (
          <div 
            key={i}
            className="absolute w-4 h-8 bg-green-600 rounded-full shadow-[0_0_10px_rgba(34,197,94,1)]"
            style={{ 
              transform: `rotate(${i * 45}deg) translateY(-120px)` 
            }}
          ></div>
        ))}
      </div>
      
      <p className="mt-8 text-neon font-orbitron animate-bounce">CLIQUE PARA GIRAR O DIAL</p>
      
      <button 
        onClick={() => onSelect('hero-time')}
        className="mt-4 px-8 py-3 bg-green-600 hover:bg-green-500 text-black font-bold rounded-full transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(34,197,94,0.5)] uppercase tracking-widest font-orbitron"
      >
        É Hora do Herói!
      </button>
    </div>
  );
};

export default OmnitrixDial;
