import React from 'react';
import { Link } from 'react-router-dom';
import { Home as HomeIcon, ChevronRight } from 'lucide-react';

function NotFound() {
  return (
    <div className="min-h-screen bg-[#111] text-white font-sans flex items-center justify-center pt-20">
      <div className="max-w-xl mx-auto px-6 py-12 text-center space-y-8">
        
        {/* Code d'erreur géant */}
        <h1 className="text-8xl md:text-9xl font-extrabold text-[#1C1C22] tracking-widest relative">
          <span className="text-[#7cf7ad] opacity-20 absolute inset-0 text-9xl font-black">404</span>
          <span className="relative z-10 text-white">404</span>
        </h1>
        
        {/* Titre et message */}
        <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
          Oups ! Page Introuvable
        </h2>
        <p className="text-gray-400 text-lg leading-relaxed">
          Il semblerait que vous ayez suivi un lien brisé ou que la page ait été déplacée.
          Ne vous inquiétez pas, vous pouvez retourner à l'accueil !
        </p>
        
        {/* Boutons d'action */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
          <Link 
            to="/" 
            className="bg-[#7cf7ad] hover:bg-[#6be69d] text-black px-8 py-3 rounded-full font-semibold flex items-center justify-center gap-2 transition-all shadow-lg shadow-[#7cf7ad]/20 hover:-translate-y-1"
          >
            <HomeIcon size={20} />
            Retourner à l'accueil
          </Link>

          <Link 
            to="/contact" 
            className="border border-white/10 text-white px-8 py-3 rounded-full font-semibold flex items-center justify-center gap-2 transition-all hover:border-[#7cf7ad] hover:text-[#7cf7ad]"
          >
            Me contacter <ChevronRight size={20} />
          </Link>
        </div>

      </div>
    </div>
  );
} 

export default NotFound;