import { ArrowRight, ArrowUpRight, Play, Hexagon } from "lucide-react"
import { Link } from "react-router"

function Services() {
  const statsData = [
    { value: "8K", label: "Project\nCompleted", position: "top-0 left-1/2 -translate-x-1/2" },
    { value: "8K", label: "Awward\nAchievment", position: "bottom-0 left-0 md:left-10" },
    { value: "9K", label: "Satisfied\nCustomers", position: "bottom-0 right-0 md:right-10" }
  ];

  const servicesList = [
    {
      title: "CRÉATION DE SITES WEB",
      description: "Conception et développement de sites Internet complets et robustes. Utilisation des technologies Full-Stack pour un site performant et sécurisé.",
      tags: ["Développement", "Code", "Performance"]
    },
    {
      title: "DESIGN DE MAQUETTES",
      description: "Création de l'expérience utilisateur et du design visuel de sites et d'applications (UI/UX). Maîtrise des outils de prototypage comme Figma.",
      tags: ["Design", "Maquettes", "Figma"]
    },
    {
      // SECTION MODIFIÉE
      title: "INTÉGRATION WORDPRESS",
      description: "Création de sites via WordPress en utilisant et en personnalisant des thèmes existants, ou en réalisant l'intégration de maquettes sur mesure.",
      tags: ["WordPress", "Thèmes", "Intégration"] 
    },
    {
      title: "IDENTITÉ VISUELLE",
      description: "Création de logos et de l'identité graphique d'une marque (couleurs, typographie). ",
      tags: ["Logo", "Charte Graphique", "Branding"]
    },
    {
      title: "SUPPORTS VISUELS & BRANDING",
      description: "Conception de l'identité graphique (logos, charte) et création de supports de communication visuelle pour le web et l'impression.",
      tags: ["Logo", "Charte Graphique", "Affiches/Bannières"]
    }
];

  const awardsData = [
    { title: "DW", count: "02X", label: "DEVELOPER AWARD" },
    { title: "CSS", count: "06X", label: "DEVELOPER AWARD" },
    { title: "WP", count: "06X", label: "DEVELOPER AWARD" },
    { title: "TF", count: "03X", label: "DEVELOPER AWARD" },
    { title: "WD", count: "09X", label: "DEVELOPER AWARD" },
    { title: "DW", count: "02X", label: "DEVELOPER AWARD" },
  ];

  return (
    <div className="min-h-screen bg-[#111] text-white font-sans pt-20">
       <style>{`
        @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
        }
        .animate-marquee {
            animation: marquee 20s linear infinite;
        }
       `}</style>

       {/* Page Banner */}
      <section className="relative py-20 bg-[#1C1C22] overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px)] bg-size-[4rem_100%] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Mes Compétences</h1>
          <div className="flex items-center justify-center gap-2 text-gray-400 text-sm md:text-base">
            <span className="hover:text-[#7cf7ad] cursor-pointer transition-colors">Accueil</span>
            <span>/</span>
            <span className="text-[#7cf7ad]">Compétences</span>
          </div>
        </div>
        {/* Decorative Shapes */}
        <div className="absolute top-0 left-0 w-32 h-32 bg-[#7cf7ad]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-40 h-40 bg-[#7cf7ad]/10 rounded-full blur-3xl"></div>
      </section>

      {/* Introduction Section (Reused from Home) */}
      <section className="max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-16 items-center relative z-10">
        {/* Left Content */}
        <div className="space-y-8">
          <div className="flex items-center gap-2 text-[#7cf7ad] font-semibold tracking-wider text-sm">
            <span className="text-xl"></span>
            <span></span>
          </div>

        </div>

       
      </section>

      {/* Marquee Section 
      <div className="bg-[#1C1C22] py-8 overflow-hidden border-y border-white/5">
        <div className="flex gap-12 animate-marquee whitespace-nowrap">
            {[...Array(10)].map((_, i) => (
                <div key={i} className="flex items-center gap-12">
                    <span className="text-xl font-bold text-gray-400 uppercase tracking-widest">PRODUCT DESIGN</span>
                    <span className="text-[#7cf7ad] text-2xl">*</span>
                    <span className="text-xl font-bold text-gray-400 uppercase tracking-widest">DIGITAL MARKETING</span>
                    <span className="text-[#7cf7ad] text-2xl">*</span>
                    <span className="text-xl font-bold text-gray-400 uppercase tracking-widest">ART DIRECTION</span>
                    <span className="text-[#7cf7ad] text-2xl">*</span>
                    <span className="text-xl font-bold text-gray-400 uppercase tracking-widest">UI/UX DESIGN</span>
                    <span className="text-[#7cf7ad] text-2xl">*</span>
                    <span className="text-xl font-bold text-gray-400 uppercase tracking-widest">MOTION GRAPHICS</span>
                    <span className="text-[#7cf7ad] text-2xl">*</span>
                </div>
            ))}
        </div>
      </div>*/}

      {/* Services List Section */}
      <section className="max-w-7xl mx-auto px-6 py-0">
         <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <div className="flex items-center gap-2 text-[#7cf7ad] font-semibold tracking-wider text-sm mb-2">
              <span className="text-xl"></span>
              <span></span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white">MES COMPETENCES</h2>
          </div>
          <Link to="/contact" className="bg-[#7cf7ad] hover:bg-[#7cf7ad] text-black px-8 py-3 font-semibold uppercase tracking-wider transition-colors rounded-sm">
            Contactez-moi
          </Link>
        </div>

        <div className="space-y-6">
            {servicesList.map((service, index) => (
                <div key={index} className="group p-8 md:p-12 bg-[#1C1C22] border border-white/5 hover:border-[#7cf7ad]/30 rounded-xl transition-all duration-500 flex flex-col lg:flex-row items-start lg:items-center gap-8 lg:gap-12 hover:shadow-2xl hover:shadow-[#7cf7ad]/10 hover:-translate-y-2 animate-fadeInUp" style={{ animationDelay: `${index * 100}ms` }}>
                    {/* Icon & Title */}
                    <div className="flex items-center gap-6 min-w-[300px]">
                        <div className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center group-hover:border-[#7cf7ad] transition-colors">
                            <Hexagon className="text-white group-hover:text-[#7cf7ad] transition-colors" size={32} strokeWidth={1.5} />
                        </div>
                        <h3 className="text-xl font-bold text-white uppercase max-w-[150px] leading-tight">{service.title}</h3>
                    </div>

                    {/* Description */}
                    <div className="flex-1 border-l border-white/10 pl-0 lg:pl-12 border-none lg:border-solid">
                        <p className="text-gray-400 leading-relaxed">
                            {service.description}
                        </p>
                    </div>

                    {/* Tags & Action */}
                    <div className="flex flex-col md:flex-row items-start md:items-center gap-8 min-w-[300px] justify-end">
                        <ul className="space-y-2">
                            {service.tags.map((tag, i) => (
                                <li key={i} className="flex items-center gap-2 text-gray-300 text-sm font-medium">
                                    <span className="text-[#7cf7ad] text-lg">*</span> {tag}
                                </li>
                            ))}
                        </ul>
                        {/* Action Button 
                        <Link to="/service-details" className="w-14 h-14 rounded-full bg-[#2A2A30] flex items-center justify-center text-white group-hover:bg-[#7cf7ad] group-hover:text-black transition-all duration-500 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:rotate-45 group-hover:shadow-xl group-hover:shadow-[#7cf7ad]/30 shrink-0">
                            <ArrowUpRight size={24} />
                        </Link> */}
                    </div>
                </div>
            ))}
        </div>
      </section>

      {/* Awards Section 
      <section className="max-w-7xl mx-auto px-6 py-24 border-t border-white/10">
         <div className="grid lg:grid-cols-2 gap-16 mb-16">
            <div>
                <div className="flex items-center gap-2 text-[#7cf7ad] font-semibold tracking-wider text-sm mb-2">
                    <span className="text-xl">*</span>
                    <span>AWWARD FOR WORK</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-white">
                    MY AWARDS <span className="text-[#7cf7ad]">GOT FOR</span> <br/> EXCELLENT SERVICE
                </h2>
            </div>
         </div>

         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {awardsData.map((award, index) => (
                <div key={index} className="bg-[#1C1C22] p-8 border border-white/5 hover:border-[#7cf7ad]/30 transition-all duration-500 group hover:-translate-y-2 hover:shadow-xl hover:shadow-[#7cf7ad]/10 animate-fadeInUp" style={{ animationDelay: `${index * 100}ms` }}>
                    <h3 className="text-transparent text-5xl font-bold [-webkit-text-stroke:1px_rgba(255,255,255,0.3)] group-hover:[-webkit-text-stroke:1px_#7cf7ad] transition-all mb-8">
                        {award.title}
                    </h3>
                    <div className="flex items-end justify-between">
                        <div>
                            <span className="text-white font-bold text-xl block mb-1">{award.count}</span>
                            <span className="text-gray-500 text-xs uppercase tracking-wider">{award.label}</span>
                        </div>
                    </div>
                </div>
            ))}
         </div>
      </section> */}

    </div>
  )
}

export default Services
