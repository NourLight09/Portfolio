import { Menu, X, Github, Linkedin } from 'lucide-react' // AJOUT DE GITHUB ET LINKEDIN
import React, { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom' // Link de react-router-dom

export default function Navbar() {
    const [isSticky, setIsSticky] = useState(false)
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    // Les hooks useRef et useLocation sont nécessaires ici
    const headerRef = useRef(null);
    const location = useLocation(); 

    // Fonction pour vérifier si le lien est actif
    const isActive = (path) => {
        if (path === '/') {
            return location.pathname === '/';
        }
        // J'ai ajusté les chemins pour correspondre aux routes probables : /about, /projects, etc.
        return location.pathname.startsWith(path); 
    };

    // Logique pour déterminer si la barre est sticky (après 50px de scroll)
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsSticky(true)
            } else {
                setIsSticky(false)
            }
        }

        window.addEventListener('scroll', handleScroll)
        
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
        <div>
            <header ref={headerRef} className={`px-6 py-4 transition-all duration-300 w-full z-[90] ${
                isSticky 
                    ? 'fixed top-0 left-0 right-0 bg-[#1f1f1f] shadow-lg'
                    : 'relative'
            }`}>
                <div className="flex items-center justify-between max-w-7xl mx-auto">
                    {/* Logo/Nom */}
                    <Link to="/">
                    <div aria-label="Nourath Portfolio" className="flex items-center gap-3">
                        <span className="grid h-12 w-12 place-items-center rounded-full bg-[#7cf7ad] text-lg font-semibold text-black">
                            N
                        </span>
                        <span className="text-xl font-semibold uppercase text-slate-300">
                            AFFO Nourath
                        </span>
                    </div>
                    </Link>
                    
                    {/* Desktop Navigation (Centre) */}
                    <nav aria-label="Navigation principale" className="hidden md:flex flex-1 justify-center gap-6 text- font-semibold text-white">
                        <Link 
                            className={`transition hover:text-[#7cf7ad] ${isActive('/') ? 'text-[#7cf7ad]' : ''}`} 
                            to="/">
                            Accueil
                        </Link>
                        <Link 
                            className={`transition hover:text-[#7cf7ad] ${isActive('/about') ? 'text-[#7cf7ad]' : ''}`} 
                            to="/about">
                            À propos
                        </Link>
                        <Link 
                            className={`transition hover:text-[#7cf7ad] ${isActive('/compétences') ? 'text-[#7cf7ad]' : ''}`} 
                            to="/compétences">
                            Compétences
                        </Link>
                        <Link 
                            className={`transition hover:text-[#7cf7ad] ${isActive('/projects') ? 'text-[#7cf7ad]' : ''}`} 
                            to="/projets">
                            Projets
                        </Link>
                        <Link 
                            className={`transition hover:text-[#7cf7ad] ${isActive('/blog') ? 'text-[#7cf7ad]' : ''}`} 
                            to="/blog">
                            Blog
                        </Link>
                        <Link 
                            className={`transition hover:text-[#7cf7ad] ${isActive('/contact') ? 'text-[#7cf7ad]' : ''}`} 
                            to="/contact">
                            Contact
                        </Link>
                    </nav>

                    {/* ✅ PARTIE DROITE : Icônes GitHub & LinkedIn */}
                    <div className="hidden md:flex items-center ml-auto gap-4">
                        <a 
                            href="https://github.com/NourLight09" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            aria-label="Voir le profil GitHub"
                            className="text-white hover:text-[#7cf7ad] transition-colors"
                        >
                            <Github size={24} />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/nourath-affo-8b00003a0/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Voir le profil LinkedIn"
                            className="text-white hover:text-[#7cf7ad] transition-colors"
                        >
                            <Linkedin size={24} />
                        </a>
                    </div>
                    {/* FIN PARTIE DROITE */}

                    {/* Mobile Menu Toggle */}
                    <button
                        className="md:hidden grid h-12 w-12 place-items-center rounded-full bg-[#7cf7ad] text-black transition hover:bg-white focus:outline-none focus:ring-2 focus:ring-white/60"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label={isMobileMenuOpen ? "Fermer le menu mobile" : "Ouvrir le menu mobile"}
                    >
                        {isMobileMenuOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </header>

            {/* Mobile Menu Overlay */}
            <div className={`fixed inset-0 z-60 bg-[#111] flex flex-col items-center justify-center transition-all duration-300 ease-in-out md:hidden ${
                isMobileMenuOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-full'
            }`}>
                <button 
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="absolute top-6 right-6 grid h-12 w-12 place-items-center rounded-full bg-[#7cf7ad] text-black transition hover:bg-white hover:text-black focus:outline-none"
                    aria-label="Fermer le menu"
                >
                    <X size={24} />
                </button>

                <nav className="flex flex-col gap-8 text-2xl font-semibold text-white text-center">
                    <Link onClick={() => setIsMobileMenuOpen(false)} className={`transition hover:text-[#7cf7ad] ${isActive('/') ? 'text-[#7cf7ad]' : ''}`} to="/">Accueil</Link>
                    <Link onClick={() => setIsMobileMenuOpen(false)} className={`transition hover:text-[#7cf7ad] ${isActive('/about') ? 'text-[#7cf7ad]' : ''}`} to="/about">À propos</Link>
                    <Link onClick={() => setIsMobileMenuOpen(false)} className={`transition hover:text-[#7cf7ad] ${isActive('/compétences') ? 'text-[#7cf7ad]' : ''}`} to="/compétences">Compétences</Link>
                    <Link onClick={() => setIsMobileMenuOpen(false)} className={`transition hover:text-[#7cf7ad] ${isActive('/projects') ? 'text-[#7cf7ad]' : ''}`} to="/projects">Projets</Link>
                    <Link onClick={() => setIsMobileMenuOpen(false)} className={`transition hover:text-[#7cf7ad] ${isActive('/blog') ? 'text-[#7cf7ad]' : ''}`} to="/blog">Blog</Link>
                    <Link onClick={() => setIsMobileMenuOpen(false)} className={`transition hover:text-[#7cf7ad] ${isActive('/contact') ? 'text-[#7cf7ad]' : ''}`} to="/contact">Contact</Link>
                    <Link onClick={() => setIsMobileMenuOpen(false)} className="uppercase text-[#7cf7ad] mt-4" to="/contact">Parlons-en</Link>
                    
                    {/* NOUVEL AJOUT : Icônes GitHub & LinkedIn dans le menu mobile */}
                    <div className="flex justify-center gap-6 mt-6">
                        <a 
                            href="https://github.com/NourLight09" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            aria-label="Voir le profil GitHub"
                            className="text-white hover:text-[#7cf7ad] transition-colors flex items-center justify-center"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            <Github size={32} />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/nourath-affo-8b00003a0/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Voir le profil LinkedIn"
                            className="text-white hover:text-[#7cf7ad] transition-colors flex items-center justify-center"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            <Linkedin size={32} />
                        </a>
                    </div>
                </nav>
            </div>
            
            {/* Le div spacer conditionnel a été retiré, l'espace est géré dans App.jsx */}
        </div>
    )
}