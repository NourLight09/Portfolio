import { useState } from "react" // Import useState

import { ArrowUpRight } from "lucide-react"
import { Link } from "react-router-dom"
import { ALL_PROJECTS } from '../data/projectData';

function Projects() {
    // Extraire toutes les catégories uniques
    const categories = [
        ...new Set(ALL_PROJECTS.map((project) => project.category))
    ];
    const [selectedCategory, setSelectedCategory] = useState('Toutes');

    // Filtrer les projets selon la catégorie sélectionnée
    const filteredProjects = selectedCategory === 'Toutes'
        ? ALL_PROJECTS
        : ALL_PROJECTS.filter((project) => project.category === selectedCategory);

    return (
        <div className="min-h-screen bg-[#111] text-white font-sans pt-20">
            <section className="relative py-20 bg-[#1C1C22] overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px)] bg-size-[4rem_100%] pointer-events-none"></div>
                <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4">Projets</h1>
                    <div className="flex items-center justify-center gap-2 text-gray-400 text-sm md:text-base">
                        <span className="hover:text-[#7cf7ad] cursor-pointer transition-colors">Accueil</span>
                        <span>/</span>
                        <span className="text-[#7cf7ad]">Projets</span>
                    </div>
                </div>
                <div className="absolute top-0 left-0 w-32 h-32 bg-[#7cf7ad]/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 right-0 w-40 h-40 bg-[#7cf7ad]/10 rounded-full blur-3xl"></div>
            </section>

            {/* Filtres par catégorie */}
            <div className="max-w-7xl mx-auto px-6 mt-8 flex flex-wrap gap-4 justify-center">
                <button
                    className={`px-5 py-2 rounded-full border border-[#7cf7ad] font-semibold transition-colors ${selectedCategory === 'Toutes' ? 'bg-[#7cf7ad] text-black' : 'bg-transparent text-[#7cf7ad] hover:bg-[#7cf7ad]/20'}`}
                    onClick={() => setSelectedCategory('Toutes')}
                >
                    Toutes
                </button>
                {categories.map((cat) => (
                    <button
                        key={cat}
                        className={`px-5 py-2 rounded-full border border-[#7cf7ad] font-semibold transition-colors ${selectedCategory === cat ? 'bg-[#7cf7ad] text-black' : 'bg-transparent text-[#7cf7ad] hover:bg-[#7cf7ad]/20'}`}
                        onClick={() => setSelectedCategory(cat)}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            <section className="max-w-7xl mx-auto px-6 py-24">
                <div className="grid md:grid-cols-2 gap-x-8 gap-y-16">
                    {filteredProjects.map((project, index) => (
                        <div key={index} className="group cursor-pointer animate-fadeInUp" style={{ animationDelay: `${index * 100}ms` }}>
                            <div className={`rounded-2xl overflow-hidden mb-6 relative aspect-4/3 ${project.bgColor}`}>
                                <img 
                                    src={project.image} 
                                    alt={project.title} 
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
                                    <Link to={`/projet/${project.id}`} className="w-20 h-20 rounded-full bg-[#7cf7ad] flex items-center justify-center transform scale-0 group-hover:scale-100 transition-all duration-500 group-hover:rotate-180 shadow-2xl shadow-[#7cf7ad]/50">
                                        <ArrowUpRight size={32} className="text-black" />
                                    </Link>
                                </div>
                            </div>
                            <div className="space-y-2">
                                <span className="text-[#7cf7ad] text-sm font-medium tracking-wider uppercase">{project.category}</span>
                                <h3 className="text-2xl md:text-3xl font-bold text-white group-hover:text-[#7cf7ad] transition-colors">
                                    <Link to={`/projet/${project.id}`}>{project.title}</Link>
                                </h3>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    )
}

export default Projects