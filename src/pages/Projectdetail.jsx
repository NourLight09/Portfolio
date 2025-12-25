import React, { useState } from 'react';
import { Check, ArrowUpRight, X } from "lucide-react" 
import { Link, useParams } from "react-router-dom"
import { ALL_PROJECTS } from '../data/projectData';

function Projectdetail() {
    const { id } = useParams(); 
    const project = ALL_PROJECTS.find(p => p.id === id);

    const [modalOpen, setModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState('');

    const openModal = (imageSrc) => {
        setSelectedImage(imageSrc);
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
        setSelectedImage('');
    };

    if (!project) {
        return (
            <div className="min-h-screen bg-[#111] text-white flex items-center justify-center pt-20">
                <h1 className="text-3xl font-bold text-red-500">
                    404 | Projet non trouvé
                </h1>
            </div>
        );
    }

    const introText = project.intro || "";
    const firstLetter = introText.charAt(0);
    const restOfIntro = introText.slice(1);

    const relatedProjects = ALL_PROJECTS
        .filter(p => p.id !== id)
        .slice(0, 3);

    return (
        <div className="min-h-screen bg-[#111] text-white font-sans pt-20">
            
            <section className="relative py-20 bg-[#1C1C22] overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px)] bg-size-[4rem_100%] pointer-events-none"></div>
                <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4">{project.title}</h1>
                    <div className="flex items-center justify-center gap-2 text-gray-400 text-sm md:text-base">
                        <span className="hover:text-[#7cf7ad] cursor-pointer transition-colors">Accueil</span>
                        <span>/</span>
                        <span className="hover:text-[#7cf7ad] cursor-pointer transition-colors">Portfolio</span>
                        <span>/</span>
                        <span className="text-[#7cf7ad]">{project.title}</span>
                    </div>
                </div>
                <div className="absolute top-0 left-0 w-32 h-32 bg-[#7cf7ad]/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 right-0 w-40 h-40 bg-[#7cf7ad]/10 rounded-full blur-3xl"></div>
            </section>

            <section className="max-w-7xl mx-auto px-6 py-24">
                
                <div className="rounded-2xl overflow-hidden mb-16">
                    <img 
                        src={project.heroImage} 
                        alt={project.title} 
                        className="w-full h-auto object-cover" 
                    />
                </div>

                <div className="grid lg:grid-cols-3 gap-12 mb-16">
                    <div className="lg:col-span-2 space-y-8">
                        <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                            {project.title}
                        </h2>
                        
                        <div className="space-y-6 text-gray-400 leading-relaxed">
                            <p>
                                <span className="float-left text-5xl font-bold bg-[#7cf7ad] text-black w-16 h-16 flex items-center justify-center rounded-lg mr-4 mb-2">
                                    {firstLetter}
                                </span>
                                {restOfIntro}
                            </p>
                        </div>

                        <div className="grid sm:grid-cols-2 gap-4 pt-4">
                            {project.features && project.features.map((feature, index) => (
                                <div key={index} className="flex items-center gap-3">
                                    <Check size={18} className="text-[#7cf7ad]" />
                                    <span className="text-gray-300 font-medium">{feature}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="lg:col-span-1">
                        <div className="bg-[#7cf7ad] rounded-2xl p-8 text-black space-y-8">
                            <div><span className="text-sm font-semibold uppercase tracking-wider opacity-70 block mb-1">Catégorie</span><h4 className="text-xl font-bold">{project.category}</h4></div>
                            <div><span className="text-sm font-semibold uppercase tracking-wider opacity-70 block mb-1">Clients</span><h4 className="text-xl font-bold">{project.client}</h4></div>
                            <div><span className="text-sm font-semibold uppercase tracking-wider opacity-70 block mb-1">Localisation</span><h4 className="text-xl font-bold">{project.location}</h4></div>
                            <div><span className="text-sm font-semibold uppercase tracking-wider opacity-70 block mb-1">Date de livraison</span><h4 className="text-xl font-bold">{project.delivery}</h4></div>
                        </div>
                    </div>
                </div>
                
                <div className="flex justify-center mt-8">
                     <Link to={project.demoLink || "#"} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border border-[#7cf7ad] text-[#7cf7ad] px-8 py-3 mb-12 rounded-full font-semibold hover:bg-[#7cf7af] hover:text-black transition-all duration-300">
                        {project.demoButtonText || "Voir le projet"} <ArrowUpRight size={20} />
                    </Link>
                </div>

                <div className="grid md:grid-cols-3 gap-6 mb-16">
                    {project.gallery && project.gallery.map((item, index) => (
                        <div key={index} className="rounded-xl overflow-hidden h-64 bg-gray-800">
                            <div onClick={() => openModal(item.src)} className="cursor-pointer block w-full h-full">
                                <img src={item.src} alt={item.alt} className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
                            </div>
                        </div>
                    ))}
                </div>
                
                <div className="border-t border-white/10 pt-24">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-white">
                            Voir d'autres <span className="text-[#7cf7ad]">projets</span>
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {relatedProjects.map((relProject, index) => (
                            <Link to={`/projet/${relProject.id}`} key={index} className="group cursor-pointer block">
                                <div className={`rounded-2xl overflow-hidden mb-6 relative aspect-4/3 ${relProject.bgColor || 'bg-gray-800'}`}>
                                    <img 
                                        src={relProject.image} 
                                        alt={relProject.title} 
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                                        <div className="w-16 h-16 rounded-full bg-[#7cf7ad] flex items-center justify-center transform scale-0 group-hover:scale-100 transition-transform duration-300">
                                            <ArrowUpRight size={28} className="text-black" />
                                        </div>
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <span className="text-[#7cf7ad] text-sm font-medium tracking-wider uppercase">{relProject.category}</span>
                                    <h3 className="text-xl font-bold text-white group-hover:text-[#7cf7ad] transition-colors">
                                        {relProject.title}
                                    </h3>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>

            </section>
            
            {modalOpen && (
                <div 
                    className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 transition-opacity duration-300"
                    onClick={closeModal}
                >
                    <div className="relative max-w-5xl max-h-full" onClick={e => e.stopPropagation()}>
                        
                        <img 
                            src={selectedImage} 
                            alt="Aperçu du Projet" 
                            className="max-h-[90vh] max-w-[90vw] object-contain shadow-2xl rounded-lg"
                        />
                        
                        <button 
                            onClick={closeModal} 
                            className="absolute top-4 right-4 text-black bg-[#7cf7ad] hover:bg-green-400 rounded-full p-2 transition-colors focus:outline-none shadow-lg"
                            aria-label="Fermer la modale"
                        >
                            <X size={24} />
                        </button>
                        
                    </div>
                </div>
            )}
        </div>
    )
}

export default Projectdetail