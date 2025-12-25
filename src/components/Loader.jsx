import React, { useEffect, useState } from 'react';

const Loader = ({ isLoading }) => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    if (!isLoading) {
      // Attendre la fin de l'animation (1s) avant de démonter ou cacher complètement si nécessaire
      const timer = setTimeout(() => {
        setShow(false);
      }, 10);
      return () => clearTimeout(timer);
    }
  }, [isLoading]);

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-9999 flex items-center justify-center pointer-events-none">
      {/* Porte Gauche */}
      <div 
        className={`absolute top-0 left-0 w-1/2 h-full bg-[#0a0a0a] border-r border-[#333] origin-left ${
          !isLoading 
            ? '-translate-x-full transition-transform duration-1000 ease-in-out' 
            : 'translate-x-0'
        }`}
        style={{ pointerEvents: 'auto' }}
      ></div>

      {/* Porte Droite */}
      <div 
        className={`absolute top-0 right-0 w-1/2 h-full bg-[#0a0a0a] border-l border-[#333] origin-right ${
          !isLoading 
            ? 'translate-x-full transition-transform duration-1000 ease-in-out' 
            : 'translate-x-0'
        }`}
        style={{ pointerEvents: 'auto' }}
      ></div>

      {/* Contenu du Loader (au centre) */}
      <div 
        className={`relative bg-[#0a0a0a] py-3 z-50 flex flex-col items-center justify-center transition-opacity duration-500 ${
          !isLoading ? 'opacity-0' : 'opacity-100'
        }`}
      >
        <div className="text-4xl  font-bold tracking-widest text-[#7cf7ad] mb-4 animate-pulse">
          AFFO NOURATH
        </div>
        <div className="w-48 h-1 bg-[#333] rounded-full overflow-hidden">
          <div className="h-full bg-[#7cf7ad] animate-progress origin-left"></div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
