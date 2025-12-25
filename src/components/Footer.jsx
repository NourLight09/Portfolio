import { MapPin, Mail, Phone, ArrowUp, ChevronRight, Linkedin, Github } from "lucide-react"
import { Link } from 'react-router'
export default function Footer() {
  return (
    <footer className="bg-[#111] text-white pt-20 pb-10 border-t border-white/10 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-4 gap-12 mb-20">
            {/* Logo Section */}
            <div className="lg:col-span-1 flex flex-col items-center gap-3"> 
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
                <div className="flex gap-4 mt-2 justify-center">
                    <a
                        href="https://www.linkedin.com/in/nourath-affo-8b00003a0/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Voir le profil LinkedIn"
                        className="text-gray-400 hover:text-[#7cf7ad] transition-colors"
                    >
                        <Linkedin size={24} />
                    </a>
                    <a
                        href="https://github.com/NourLight09"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Voir le profil GitHub"
                        className="text-gray-400 hover:text-[#7cf7ad] transition-colors"
                    >
                        <Github size={24} />
                    </a>
                </div>
            </div>

            {/* Quick Links & Newsletter */}
            <div className="lg:col-span-2">
                <h3 className="text-xl font-bold mb-8">Liens rapides</h3>
                
                <div className="flex flex-wrap gap-x-8 gap-y-4 text-gray-400 font-medium mb-10">
                    <a href="/" className="hover:text-[#7cf7ad] transition-colors">Accueil</a>
                    <a href="/a-propos" className="hover:text-[#7cf7ad] transition-colors">À propos</a>
                    <a href="/compétences" className="hover:text-[#7cf7ad] transition-colors">Compétences</a>
                    <a href="/projets" className="hover:text-[#7cf7ad] transition-colors">Projets</a>
                    <a href="/blog" className="hover:text-[#7cf7ad] transition-colors">Blog</a>
                    <a href="/contact" className="hover:text-[#7cf7ad] transition-colors">Contact</a>
                    
                </div>
                {/* Newsletter Signup 
                <div className="flex flex-col sm:flex-row gap-4 max-w-xl">
                    <div className="flex-1 relative">
                        <Mail className="absolute left-0 top-1/2 -translate-y-1/2 text-[#7cf7ad]" size={20} />
                        <input 
                            type="email" 
                            placeholder="Email Address" 
                            className="w-full bg-transparent border-b border-white/20 py-3 pl-8 text-white placeholder:text-gray-500 focus:outline-none focus:border-[#7cf7ad] transition-colors"
                        />
                    </div>
                    <button className="bg-[#7cf7ad] hover:bg-[#7cf7ad] text-black px-8 py-3 font-semibold flex items-center justify-center gap-2 rounded-sm transition-colors whitespace-nowrap">
                        Sign Up <ChevronRight size={18} />
                    </button>
                </div>
                */}


            </div>

            {/* Address */}
            <div className="lg:col-span-1 space-y-8">
                <h3 className="text-xl font-bold">Adresse</h3>
                <div className="space-y-6 text-gray-400">
                    <div className="flex gap-4 items-start">
                        <MapPin className="text-[#7cf7ad] shrink-0 mt-1" size={24} />
                        <p className="leading-relaxed">1 Rue de Wissembourg<br />90000 Belfort</p>
                    </div>
                    <div className="flex gap-4 items-center">
                        <Mail className="text-[#7cf7ad] shrink-0" size={24} />
                        <p>nouraffo08@gmail.com</p>
                    </div>
                    <div className="flex gap-4 items-center">
                        <Phone className="text-[#7cf7ad] shrink-0" size={24} />
                        <p className="text-white font-bold text-lg">+33 0753086200</p>
                    </div>
                </div>
            </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-gray-400">Copyright @2025, Nourath AFFO Tous droits réservés</p>
        </div>
      </div>

      {/* Back to Top Button */}
      <button 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 bg-[#7cf7ad] hover:bg-[#7cf7ad] text-black w-12 h-12 flex items-center justify-center rounded-lg shadow-lg transition-colors z-50"
      >
        <ArrowUp size={24} />
      </button>
    </footer>
  )
}
