import { Download, Calendar, ArrowUpRight } from "lucide-react"
import { FaFigma, FaWordpress, FaHtml5 } from "react-icons/fa6"
import { SiAdobexd, SiAdobeindesign, SiAdobeillustrator, SiAdobephotoshop, SiBootstrap, SiCss3, SiLaravel, SiMysql, SiPython, SiReact, SiTailwindcss } from "react-icons/si"
import { Link } from 'react-router-dom';


function About() {
  const personalInfo = [
    { label: "Nom", value: "AFFO Nourath" },
    { label: "Age", value: "22 ans" },
    { label: "Nationalité", value: "Béninoise" },
    
    { label: "Téléphone", value: "+33 753086200" },
    { label: "Email", value: "nouraffo08@gmail.com" },
    
    { label: "Langues parlées", value: "Français, Anglais B1" },
  ];

  const workExperience = [
    { year: "2022", title: "UI/UX DESIGNER", company: "Innov-em", align: "right" },
    { year: "2023", title: "DEVELOPPEUR WEB FULLSTACK", company: "NERDX DIGITAL", align: "left" },
    { year: "2023 - Aujourd'hui", title: "WEBMASTER", company: "Association Eco-Responsables", align: "right" },
    { year: "2024", title: "WEBMASTER WORDPRESS", company: "AraVision International", align: "left" },
    { year: "2025", title: "DEVELOPPEUR WORDPRESS & UI/UX DESIGNER", company: "LaZone", align: "left" },
  ];

  const educationData = [
      { year: "2019", title: "BACCALAUREAT SCIENTIFIQUE", school: "La Liberté", align: "right" },
    { year: "2024", title: "Licence 3 Génie Logiciel", school: "Institut de Formation et de Recherche en Informatique", align: "left" },
    { year: "2024", title: "WEBMASTER WORDPRESS", school: "AraWomenTech", align: "right" },
    ];

  return (
    <div className="min-h-screen bg-[#111] text-white font-sans pt-30 overflow-x-hidden"> 
      
      {/* Page Banner */}
      <section className="relative py-20 bg-[#1C1C22] overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px)] bg-size-[4rem_100%] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">A propos</h1>
          <div className="flex items-center justify-center gap-2 text-gray-400 text-sm md:text-base">
            <Link to="/" className="hover:text-[#7cf7ad] cursor-pointer transition-colors">Accueil</Link>
            <span>/</span>
            <span className="text-[#7cf7ad]">A propos</span>
          </div>
        </div>
        
        {/* Decorative Shapes */}
        <div className="absolute top-0 left-0 w-32 h-32 bg-[#7cf7ad]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-40 h-40 bg-[#7cf7ad]/10 rounded-full blur-3xl"></div>
      </section>

      {/* Main About Section */}
      <section className="max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-16 items-center">
          {/*  (DESIGN STYLISÉ "N") */}
        <div className="relative w-full h-[500px] flex flex-col items-center justify-center animate-fadeInRight p-8">
            
            {/* Grand cercle central avec la lettre "N" */}
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full border-4 border-[#7cf7ad] flex items-center justify-center z-10 animate-pulse-light">
                <span className="text-7xl md:text-8xl font-extrabold text-[#7cf7ad]">N</span>
                {/* Petit cercle d'animation intérieur */}
                <div className="absolute inset-0 rounded-full border-2 border-[#7cf7ad]/30 animate-ping-slow"></div>
            </div>

            {/* Forme abstraite en arrière-plan */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[calc(100%-40px)] h-[calc(100%-40px)] 
                          border-2 border-[#7cf7ad]/30 rounded-2xl z-0 hidden md:block 
                          transition-all duration-500 hover:translate-x-2 hover:translate-y-2 
                          rotate-6 hover:rotate-3"></div>
            
            {/* Boîte de Décoration (Badge de confiance) */}
            <div className="absolute bottom-10 -left-4 md:-left-10 bg-[#7cf7ad] p-6 rounded-xl text-black shadow-lg z-20 animate-bounce-slow hover:scale-110 transition-transform duration-300">
                <span className="text-5xl font-bold block mb-1"></span>
                <span className="font-semibold text-sm uppercase tracking-wider">Votre partenaire<br/>DE CONFIANCE</span>
            </div>
        </div>
        {/* TEXTE & INFO */}
        <div className="space-y-8 animate-fadeInLeft"> 
          <div>
            <span className="text-[#7cf7ad] font-semibold tracking-wider uppercase mb-2 block">Je suis une créatrice de produits digitaux </span>
            <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
              Mon approche : Design & développement
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              Je suis AFFO Nourath, étudiante en BUT 3 Informatique à l'IUT de Belfort. Ce qui me passionne dans le numérique, c'est de pouvoir construire et pas seulement coder. Mon parcours m'a permis d'aller au-delà des lignes de code : je conçois des interfaces (UI/UX) pour ensuite les développer en Full-Stack. En clair, je m'assure que le produit final est à la fois efficace techniquement et agréable à utiliser pour l'utilisateur.
              <br />
              <br />
              
              Ce portfolio est la preuve de ma progression concrète et de mon goût pour le travail bien fait. Pour chaque projet, ma démarche est simple : comprendre le problème, concevoir la solution idéale et la réaliser avec rigueur. Chaque ligne de code et chaque maquette design que vous verrez est le résultat d'une méthodologie claire, centrée sur l'utilisateur. Je suis motivée pour transformer les idées en réalisations numériques abouties et fonctionnelles.
              <br />
            </p>
          </div>

          {/* Personal Info Grid 
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8">
            {personalInfo.map((item, index) => (
              <div key={index} className="flex items-center gap-3">
                <span className="text-[#7cf7ad] font-semibold min-w-[100px]">{item.label}:</span>
                <span className="text-gray-300">{item.value}</span>
              </div>
            ))}
          </div>*/}

          <div className="pt-6">
    <a 
      href="/Cv%20Nourath%20AFFO%20.pdf" 
      download="Cv_Nourath_AFFO.pdf" 
      className="bg-[#7cf7ad] hover:bg-[#6be69d] text-black px-8 py-4 rounded-lg font-semibold inline-flex items-center gap-2 transition-all shadow-lg shadow-[#7cf7ad]/20 hover:-translate-y-1"
    >
      Téléchargez mon CV <Download size={20} />
    </a>
</div>
        </div>

      </section>

      {/* Resume Section (Parcours Académique et Professionnel) */}
      <section className="bg-[#1C1C22] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[#7cf7ad] font-semibold tracking-wider uppercase mb-2 block">Parcours</span>
            <h2 className="text-3xl md:text-5xl font-bold text-white">Mon parcours</h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Education */}
            <div className="space-y-8">
              <h3 className="text-2xl font-bold text-white flex items-center gap-3 mb-8">
                <span className="w-10 h-10 rounded-full bg-[#7cf7ad]/10 flex items-center justify-center text-[#7cf7ad]">
                  <Calendar size={20} />
                </span>
                Académique
              </h3>
              <div className="space-y-6">
                {educationData.map((item, index) => (
                  <div key={index} className="bg-[#111] p-8 rounded-xl border border-white/5 hover:border-[#7cf7ad]/30 transition-all duration-500 group hover:-translate-y-1 hover:shadow-xl hover:shadow-[#7cf7ad]/10 animate-fadeInUp" style={{ animationDelay: `${index * 100}ms` }}>
                    <span className="text-[#7cf7ad] text-sm font-bold mb-2 block">{item.year}</span>
                    <h4 className="text-xl font-bold text-white mb-1 group-hover:text-[#7cf7ad] transition-colors">{item.title}</h4>
                    <p className="text-gray-500">{item.school}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Experience */}
            <div className="space-y-8">
              <h3 className="text-2xl font-bold text-white flex items-center gap-3 mb-8">
                <span className="w-10 h-10 rounded-full bg-[#7cf7ad]/10 flex items-center justify-center text-[#7cf7ad]">
                  <Calendar size={20} />
                </span>
                Professionnel
              </h3>
              <div className="space-y-6">
                {workExperience.map((item, index) => (
                  <div key={index} className="bg-[#111] p-8 rounded-xl border border-white/5 hover:border-[#7cf7ad]/30 transition-colors group">
                    <span className="text-[#7cf7ad] text-sm font-bold mb-2 block">{item.year}</span>
                    <h4 className="text-xl font-bold text-white mb-1 group-hover:text-[#7cf7ad] transition-colors">{item.title}</h4>
                    <p className="text-gray-500">{item.company}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Section Bénévolat */}
      <section className="bg-[#111] py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-10">
            <span className="text-[#7cf7ad] font-semibold tracking-wider uppercase mb-2 block">Bénévolat & Engagement</span>
            <h2 className="text-2xl md:text-4xl font-bold text-white">Mon engagement associatif</h2>
          </div>
          <div className="space-y-8 text-lg text-gray-300">
            <div className="bg-[#1C1C22] p-6 rounded-xl border border-white/5">
              <strong className="text-[#7cf7ad]">Chargé de communication adjoint</strong> à l'<strong>Association Eco-Responsables</strong> :
              <br />
              J'œuvre pour la sensibilisation à l'écologie et la protection de l'environnement à travers des actions de communication et d'organisation d'événements.
            </div>
            <div className="bg-[#1C1C22] p-6 rounded-xl border border-white/5">
              <strong className="text-[#7cf7ad]">Bénévole au Resto du Cœur</strong> :
              <br />
              J'aide à la distribution alimentaire et je m'occupe, si besoin, de la section Vêtements pour venir en aide aux plus démunis.
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <span className="text-[#7cf7ad] font-semibold tracking-wider uppercase mb-2 block">Mes compétences</span>
          <h2 className="text-3xl md:text-5xl font-bold text-white">Compétences professionnelles</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {[
            { icon: FaFigma, name: "Figma", percent: "", color: "#F24E1E" },
            { icon: SiAdobexd, name: "Adobe XD", percent: "", color: "#ac0aa6ff" },
            { icon: SiAdobeindesign, name: "InDesign", percent: "", color: "#21759B" },
            { icon: SiAdobeillustrator, name: "Adobe Illustrator", percent: "", color: "#00dd72ff" },
            { icon: SiAdobephotoshop, name: "Adobe Phtotoshop", percent: "", color: "#4353FF" },
            { icon: FaWordpress, name: "Wordpress", percent: "", color: "#3776AB" },
            { icon: FaHtml5, name: "Html", percent: "", color: "#dd0031ff" },
            { icon: SiBootstrap, name: "Boostrap", percent: "", color: "#4C4CFF" },
            { icon: SiTailwindcss, name: "Tailwind", percent: "", color: "#3C99DC" },
            { icon: SiCss3, name: "CSS", percent: "", color: "#0055FF" },
            { icon: SiLaravel, name: "Laravel", percent: "", color: "#ff2f00ff" },
            { icon: SiReact, name: "ReactJS", percent: "", color: "#0055FF" },
            { icon: SiPython, name: "Python", percent: "", color: "#dd0031ff" },
            { icon: SiMysql, name: "MYSQL", percent: "", color: "#3776AB" },
          ].map((skill, index) => (
            <div key={index} className="bg-[#1C1C22] p-6 rounded-2xl flex flex-col items-center gap-4 border border-white/5 hover:border-[#7cf7ad]/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-[#7cf7ad]/20 group hover:rotate-3 animate-fadeInUp" style={{ animationDelay: `${index * 100}ms` }}>
              <skill.icon className="text-5xl transition-all duration-500 group-hover:scale-125 group-hover:rotate-12" style={{ color: skill.color }} />
              <div className="text-center">
                <span className="text-2xl font-bold text-white block mb-1">{skill.percent}</span>
                <span className="text-gray-400 text-sm">{skill.name}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  )
}

export default About