import { ArrowRight, CheckCircle, MapPin, Star, Users, ArrowUpRight, ArrowLeft } from "lucide-react"
import { FaFigma, FaWordpress, FaAngular, FaPython, FaHtml5 } from "react-icons/fa6"
import { SiAdobeillustrator, SiAdobeindesign, SiAdobephotoshop, SiAdobexd, SiBootstrap, SiCss3, SiFramer, SiLaravel, SiMysql, SiPython, SiReact, SiTailwindcss, SiWebflow } from "react-icons/si"
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import bonhomme from '../assets/bonhomme.png'
import { Link } from "react-router-dom"; 
import { ALL_PROJECTS } from '../data/projectData';


function Home() {
  const form = useRef();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const SERVICE_ID = 'service_riz2vj1';
    const TEMPLATE_ID = 'template_rjbed1q';
    const PUBLIC_KEY = 'j1LFE69yFZuwCHOVa';
   const statsData = [
        { value: "", label: "NOURATH C'EST\n", position: "top-0 left-1/2 -translate-x-1/2" },
        { value: "4+", label: "Projets\n", position: "bottom-0 left-0 md:left-10" },
        { value: "9+", label: "Compétences\n", position: "bottom-0 right-0 md:right-10" }
    ];

  const workExperience = [
    { year: "2022", title: "UI/UX DESIGNER", company: "Innov-em", align: "right" },
    { year: "2023", title: "DEVELOPPEUR WEB FULLSTACK", company: "NERDX DIGITAL", align: "left" },
    { year: "2023 - Aujourd'hui", title: "WEBMASTER", company: "Association Eco-Responsables", align: "right" },
    //{ year: "2024", title: "WEBMASTER WORDPRESS", company: "AraVision International", align: "left" },
    { year: "2025", title: "DEVELOPPEUR WORDPRESS & UI/UX DESIGNER", company: "LaZone", align: "left" },

  ];

  const educationData = [
    { year: "2019", title: "BACCALAUREAT SCIENTIFIQUE", school: "La Liberté", align: "right" },
    { year: "2024", title: "Licence 3 Génie Logiciel", school: "Institut de Formation et de Recherche en Informatique", align: "left" },
    { year: "2024", title: "WEBMASTER WORDPRESS", school: "AraWomenTech", align: "right" },
  ];

  const servicesData = [
    { id: "01", title: "Développement web", desc: "Conception et développement d'applications web intuitives" },
    { id: "02", title: "Design UI/UX", desc: "Conception de maquettes interactives (Wireframing & Prototypage)" },
    { id: "03", title: "Design graphique", desc: "Élaboration d'identités de marque et de visuels" },
    { id: "04", title: "Intégration Wordpress", desc: "Réalisation de sites web complets via le CMS WordPress" },
    { id: "05", title: "Rédaction web SEO", desc: "Création de contenu ciblé et engageant" },
  ];

  const projectsData = [
    { category: "Développement web", title: "Mobile Application Design", image: "https://img.freepik.com/free-psd/smartphone-screen-mockup-design_53876-129619.jpg", alt: "Mobile App", bgColor: "bg-[#E3D5CA]", padding: "p-12", imgClass: "w-3/4 h-auto object-contain" },
    { category: "Design UI/UX", title: "Website Makeup Design", image: "https://img.freepik.com/free-psd/digital-device-mockup_53876-113950.jpg", alt: "Website Design", bgColor: "bg-[#E6DACE]", padding: "p-12", imgClass: "w-full h-auto object-contain" },
    { category: "Design graphique", title: "Brand Identity and Motion Design", image: "https://img.freepik.com/free-psd/business-card-mockup_53876-113951.jpg", alt: "Branding", bgColor: "bg-[#D8CFC4]", padding: "p-12", imgClass: "w-3/4 h-auto object-contain" },
    { category: "Intégration Wordpress", title: "Creative Graphics Design", image: "https://img.freepik.com/free-photo/light-bulb-with-drawing-brain-inside_1232-3005.jpg", alt: "Creative Graphics", bgColor: "bg-[#C4A484]", padding: "p-0", imgClass: "w-full h-full object-cover" },
    { category: "Rédaction web SEO", title: "SEO Optimized Content Creation", image: "https://img.freepik.com/free-psd/modern-workspace-with-computer-mockup_23-2149436181.jpg", alt: "SEO Content", bgColor: "bg-[#D9CFC3]", padding: "p-12", imgClass: "w-full h-auto object-contain" }
  ];

  const sendEmail = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then((result) => {
          console.log('E-MAIL ENVOYÉ AVEC SUCCÈS:', result.text);
          setIsSuccess(true);
          setIsSubmitting(false);
          form.current.reset();
          setTimeout(() => setIsSuccess(false), 5000);
      }, (error) => {
          console.error('ÉCHEC DE L\'ENVOI:', error.text);
          alert("Une erreur est survenue lors de l'envoi, veuillez réessayer.");
          setIsSubmitting(false);
      });
  };

  return (
    <div className="min-h-screen bg-[#111] text-white relative overflow-hidden font-sans">
      {/* Background Grid Lines */}

      <section className="max-w-7xl mx-auto px-6 py-12 lg:py-20 grid lg:grid-cols-2 gap-12 items-center relative z-10 min-h-[calc(100vh-80px)]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px)] bg-size-[8rem_100%] pointer-events-none"></div>

        {/* Left Content */}
        <div className="space-y-6 lg:space-y-8 text-center lg:text-left order-2 lg:order-1 animate-fadeInUp">
          <h2 className="text-xl lg:text-2xl text-gray-500 font-medium">Bonjour, moi c'est</h2>
          <div className="space-y-2 leading-tight">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#7cf7ad] tracking-tight">Nourath</h1>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight">Créatrice digitale</h1>
          </div>
          <p className="text-gray-400 max-w-md mx-auto lg:mx-0 text-base lg:text-lg leading-relaxed">
            Passionnée par le numérique, je donne vie à des sites web où chaque détail du design contribue à une expérience utilisateur mémorable.
          </p>

          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 pt-4">
            <Link to="/contact" className="bg-[#7cf7ad] hover:bg-[#7cf7ad] text-black px-8 py-4 rounded-lg font-semibold flex items-center gap-2 transition-all shadow-lg shadow-[#7cf7ad]/20">
              Contactez-moi <ArrowRight size={20} />
            </Link>
            <a href="/Cv%20Nourath%20AFFO%20.pdf" download="Cv_Nourath_AFFO.pdf" className="text-white hover:text-[#7cf7ad] font-semibold flex items-center gap-2 transition-colors group">
              Téléchargez mon CV <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>

        {/* Right Image Area */}
         <div className="relative flex justify-center items-center order-1 lg:order-2 animate-fadeInUp animation-delay-200">
                <div className="relative w-full max-w-[350px] md:max-w-[400px] h-[400px] md:h-[500px] flex items-center justify-center">
                    {/* Grand cercle central avec la lettre "N" */}
                    <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full border-4 border-[#7cf7ad] flex items-center justify-center z-10 animate-pulse-light">
                        <span className="text-8xl md:text-9xl font-extrabold text-[#7cf7ad]">N</span>
                        {/* Petit cercle d'animation intérieur */}
                        <div className="absolute inset-0 rounded-full border-2 border-[#7cf7ad]/30 animate-ping-slow"></div>
                    </div>

                    {/* Formes décoratives (Lime et Dark Circle) - Ajustées pour le nouveau design */}
                    {/* On les déplace pour qu'elles "encadrent" le grand N */}
                    <div className="absolute top-1/4 -right-12 w-48 h-48 bg-[#7cf7ad] rounded-full mix-blend-normal blur-2xl opacity-30 z-0 animate-float"></div>
                    <div className="absolute top-0 -left-8 w-48 h-48 bg-black rounded-full mix-blend-normal blur-3xl opacity-50 z-0 animate-float animation-delay-500"></div>

                     {/* Autre forme si vous voulez un effet plus chargé */}
                     <div className="absolute bottom-1/4 left-1/4 w-32 h-32 bg-[#7cf7ad] rounded-full mix-blend-normal blur-xl opacity-20 z-0 animate-float animation-delay-700"></div>
                </div>
            </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-16 items-center relative z-10">
        {/* Left Content */}
        <div className="space-y-8">
          <div className="flex items-center gap-2 text-[#7cf7ad] font-semibold tracking-wider text-sm">
            <span className="text-xl">*</span>
            <span>QUI SUIS-JE?</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Etudiante en <span className="text-[#7cf7ad]">BUT 3 INFORMATIQUE</span> 
            
          </h2>

          <p className="text-gray-400 text-lg leading-relaxed max-w-xl">
            Passionnée par le UI/UX et le développement web, je crée des expériences numériques captivantes qui allient esthétique et fonctionnalité. Je connecte les marques à leur audience.
          </p>

          {/* Key Facts 
          <div className="grid grid-cols-3 gap-8 pt-4 border-t border-white/10 mt-8">
            <div>
              <h4 className="text-[#7cf7ad] text-sm font-bold mb-1 uppercase tracking-wider">Né au</h4>
              <p className="text-xl font-semibold">Bénin</p>
            </div>
            <div>
              <h4 className="text-[#7cf7ad] text-sm font-bold mb-1 uppercase tracking-wider">Experience</h4>
              <p className="text-xl font-semibold">20+ Years</p>
            </div>
            <div>
              <h4 className="text-[#7cf7ad] text-sm font-bold mb-1 uppercase tracking-wider">Date of Birth</h4>
              <p className="text-xl font-semibold">27 June 1983</p>
            </div>
          </div> */}
        </div>

        {/* Right Stats Area */}
        <div className="relative h-[500px] w-full max-w-[500px] mx-auto flex items-center justify-center">
          {/* Center Button */}
          <div className="absolute mt-8 z-20 w-24 h-24 bg-[#7cf7ad] rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(124,247,173,0.5)] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <span className="text-5xl text-black font-bold">*</span>
          </div>

          {statsData.map((stat, index) => (
            <div key={index} className={`absolute ${stat.position} md:w-44 h-60 rounded-[100px] border border-white/10 bg-white/5 backdrop-blur-sm flex flex-col items-center justify-center p-6 text-center group hover:border-[#7cf7ad]/50 transition-all duration-500 hover:scale-110 hover:shadow-xl hover:shadow-[#7cf7ad]/20 animate-fadeIn`} style={{ animationDelay: `${index * 200}ms` }}>
              <span className="text-5xl font-bold text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.3)] mb-2">{stat.value}</span>
              <span className="text-white font-medium leading-tight whitespace-pre-line">{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-24">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <div className="flex items-center gap-2 text-[#7cf7ad] font-semibold tracking-wider text-sm mb-2">
              <span className="text-xl">*</span>
              <span>QUEL EST MON PARCOURS?</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white">ACADEMIQUES & PROFESSIONNELLES </h2>
          </div>
          <Link to="/contact" className="bg-[#7cf7ad] hover:bg-[#7cf7ad] text-black px-8 py-3 font-semibold uppercase tracking-wider transition-colors rounded-sm">
            Contactez-moi
          </Link>
        </div>

        <div className="grid lg:grid-cols-2 ">
          {/* Work Section */}
          <div className="space-y-8">
            <div className="bg-[#1C1C22] p-8  relative">
              {/* Center Line */}
              <div className="absolute left-1/2 top-8 bottom-8 w-px bg-white/10 -translate-x-1/2 hidden md:block"></div>

              <div className="grid md:grid-cols-2 gap-y-12 gap-x-8">
                {workExperience.map((item, index) => (
                  <div key={index} className={`relative ${index % 2 === 0 ? 'md:text-right' : 'md:pt-0'}`}>
                    <div className={`absolute top-1.5 w-3 h-3 rounded-full bg-[#7cf7ad] ring-4 ring-[#1C1C22] z-10 hidden md:block ${index % 2 === 0 ? 'right-[-21px]' : 'left-[-21px]'}`}></div>
                    <span className={`text-[#7cf7ad] text-sm font-bold mb-2 flex items-center gap-2 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                      <span className="md:hidden w-2 h-2 rounded-full bg-[#7cf7ad]"></span>
                      {item.year}
                    </span>
                    <h3 className="text-white font-bold text-lg mb-1">{item.title}</h3>
                    <p className="text-gray-500 text-sm mb-4">{item.company}</p>
                    <Link to="/a-propos" className={`w-10 h-10 rounded-full bg-[#2A2A30] flex items-center justify-center hover:bg-[#7cf7ad] hover:text-black transition-colors text-white ${index % 2 === 0 ? 'md:ml-auto' : ''}`}>
                      <ArrowUpRight size={18} />
                    </Link>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-between px-4 mt-20">
              <h3 className="text-6xl font-bold text-white">ETUDES</h3>
              <ArrowRight className="text-white/20" size={40} />
            </div>
          </div>

          {/* Study Section */}
          <div className="space-y-8 lg:pt-40">
            <div className="flex items-center justify-between px-4 mb-30">
              <ArrowLeft className="text-white/20" size={40} />
              <h3 className="text-6xl font-bold text-white">EXPERIENCES</h3>
            </div>

            <div className="bg-[#1C1C22] p-8  relative">
              {/* Center Line */}
              <div className="absolute left-1/2 top-8 bottom-8 w-px bg-white/10 -translate-x-1/2 hidden md:block"></div>

              <div className="grid md:grid-cols-2 gap-y-12 gap-x-8">
                {educationData.map((item, index) => (
                  <div key={index} className={`relative ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                    <div className={`absolute top-1.5 w-3 h-3 rounded-full bg-[#7cf7ad] ring-4 ring-[#1C1C22] z-10 hidden md:block ${index % 2 === 0 ? 'right-[-21px]' : 'left-[-21px]'}`}></div>
                    <span className={`text-[#7cf7ad] text-sm font-bold mb-2 flex items-center gap-2 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                      <span className="md:hidden w-2 h-2 rounded-full bg-[#7cf7ad]"></span>
                      {item.year}
                    </span>
                    <h3 className="text-white font-bold text-lg mb-1">{item.title}</h3>
                    <p className="text-gray-500 text-sm mb-4">{item.school}</p>
                    <Link to="/a-propos" className={`w-10 h-10 rounded-full bg-[#2A2A30] flex items-center justify-center hover:bg-[#7cf7ad] hover:text-black transition-colors text-white ${index % 2 === 0 ? 'md:ml-auto' : ''}`}>
                      <ArrowUpRight size={18} />
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-24">
        {/* Header */}
        <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-2 text-[#7cf7ad] font-semibold tracking-wider text-sm mb-2">
                <span className="text-xl">*</span>
                <span>QU'EST-CE QUE JE SAIS FAIRE?</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white">MES COMPETENCES</h2>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-6">
            {servicesData.map((service, index) => (
                <div key={index} className="p-8 rounded-2xl border border-white/10 bg-[#1C1C22] flex items-center justify-between group hover:border-[#7cf7ad]/50 transition-all duration-500 cursor-pointer hover:shadow-xl hover:shadow-[#7cf7ad]/10 hover:-translate-y-2 animate-fadeInUp" style={{ animationDelay: `${index * 100}ms` }}>
                    <div className="flex items-center gap-6">
                        <span className={`text-2xl font-bold transition-colors ${index === 0 ? 'text-white' : 'text-gray-500 group-hover:text-white'}`}>{service.id}</span>
                        <div>
                            <h3 className="text-xl font-bold text-white mb-1">{service.title}</h3>
                            <p className="text-gray-400 text-sm">{service.desc}</p>
                        </div>
                    </div>
                    <Link to="/compétences" className="w-12 h-12 rounded-full bg-[#2A2A30] flex items-center justify-center text-white group-hover:bg-[#7cf7ad] group-hover:text-black transition-all group-hover:-translate-y-1 group-hover:translate-x-1">
                        
                    </Link>
                </div>
            ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="relative">
           <div className="space-y-6 mb-12">
              <div className="flex items-center gap-2 text-[#7cf7ad] font-semibold tracking-wider text-sm">
                  <span className="text-xl">*</span>
                  <span>QUELS SONT LES TECHNOLOGIES QUE J'UTILISE?</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white">ECOSYSTEME TECHNOLOGIQUE</h2>
           </div>
           
           {/* 3D Character Image */}
           <div className="relative h-[400px] w-full flex items-center justify-center">
               <img
                 src={bonhomme}
                 alt="3D Character"
                 className="h-full object-contain z-10 relative  transition-all duration-500" 
               />
               
               {/* Arrow */}
               <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 hidden lg:block z-20">
                   <svg width="120" height="120" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-lime-400 rotate-12">
                       <path d="M10 60 C 40 20, 70 20, 90 50" stroke="currentColor" strokeWidth="2" fill="none" strokeDasharray="5 5" />
                       <path d="M90 50 L 82 42 M 90 50 L 82 58" stroke="currentColor" strokeWidth="2" fill="none" />
                   </svg>
               </div>
           </div>
        </div>

        {/* Right Grid */}
        <div className="grid grid-cols-3 gap-6">
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
                <div key={index} className="flex flex-col items-center gap-4 group cursor-pointer animate-fadeInUp" style={{ animationDelay: `${index * 100}ms` }}>
                    <div className="px-5 py-8 rounded-[100px] bg-[#1C1C22] flex flex-col gap-3 items-center justify-center relative border border-white/5 group-hover:border-[#7cf7ad]/50 transition-all duration-500 group-hover:-translate-y-2 shadow-lg group-hover:shadow-[#7cf7ad]/20 group-hover:rotate-6">
                        <skill.icon className="text-4xl md:text-5xl transition-all duration-500 group-hover:scale-125 group-hover:rotate-12" style={{ color: skill.color }} />
                        <span className="text-[#7cf7ad] font-bold text-3xl block">{skill.percent}</span>
                    </div>
                    <div className="text-center space-y-1 border border-white/20 group-hover:border-none group-hover:bg-[#1C1C22] backdrop-blur-lg transition-all duration-300 w-full px-4 py-2 rounded-full">
                        
                        <span className="text-white font-medium text-sm">{skill.name}</span>
                    </div>
                </div>
            ))}
        </div>
      </section>


      <section className="max-w-7xl mx-auto px-6 py-24">
        {/* Header */}
        <div className="text-center mb-24">
            <div className="flex items-center justify-center gap-2 text-[#7cf7ad] font-semibold tracking-wider text-sm mb-2">
                <span className="text-xl">*</span>
                <span>PROJETS RECENTS</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white">DECOUVREZ MES PROJETS</h2>
        </div>

        {/* Projects List */}
     
<div className="space-y-32">
    {ALL_PROJECTS.map((project, index) => (
        <div key={index} className="grid lg:grid-cols-2 gap-12 items-center group animate-fadeInUp" style={{ animationDelay: `${index * 150}ms` }}>
            <div className={`${project.bgColor || 'bg-gray-800'} p-8 rounded-lg overflow-hidden relative aspect-4/3 flex items-center justify-center ${index % 2 !== 0 ? 'order-1 lg:order-2' : ''}`}>
               <img 
                 src={project.image} 
                 alt={project.title} 
                 className="w-full h-full object-cover shadow-2xl transition-transform duration-500 group-hover:scale-105" 
               />
            </div>

            <div className={`space-y-6 ${index % 2 !== 0 ? 'order-2 lg:order-1' : ''}`}>
                <span className="text-[#7cf7ad] font-semibold tracking-wider uppercase">
                    {project.category}
                </span>
                
                <h3 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                    {project.title}
                </h3>
                
                <p className="text-gray-400 text-lg leading-relaxed line-clamp-3">
                    {project.intro}
                </p>
                
                <Link to={`/projet/${project.id}`} className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-[#7cf7ad] hover:border-[#7cf7ad] transition-all duration-500 group-hover:scale-110 group-hover:rotate-45 hover:shadow-xl hover:shadow-[#7cf7ad]/30 hover:text-black">
                    <ArrowUpRight size={24} />
                </Link>
            </div>
        </div>
    ))}
</div>
        {/* View More Button */}
        <div className="flex justify-center mt-24">
            <Link to="/projets" className="bg-[#7cf7ad] hover:bg-[#7cf7ad] text-black px-10 py-4 rounded-full font-semibold flex items-center gap-2 transition-all shadow-lg shadow-[#7cf7ad]/20 hover:-translate-y-1">
                Voir tous les projets <ArrowRight size={20} />
            </Link>
        </div>
      </section>

      {/*
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-2 text-[#7cf7ad] font-semibold tracking-wider text-sm mb-2">
                <span className="text-xl">*</span>
                <span>AWARD FOR WORK</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white">
                MY AWARDS <span className="text-[#7cf7ad]">GOT FOR</span> EXCELLENT SERVICE
            </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 border-t border-l border-white/10">
            {[
                { name: "ORGANIC", sub: "Food & Drink", style: "font-serif tracking-widest" },
                { name: "Smile", sub: "", style: "italic font-bold text-2xl" },
                { name: "The BACKYARD", sub: "", style: "font-mono uppercase" },
                { name: "natural", sub: "Mineral Water", style: "lowercase font-light tracking-wide" },
                { name: "JAMIE & ANNIE", sub: "", style: "font-serif text-sm tracking-[0.2em]" },
                { name: "Coffee", sub: "", style: "italic font-black text-2xl" },
                { name: "A", sub: "", style: "text-4xl font-black font-serif" },
                { name: "Iconic", sub: "Menswear", style: "font-bold tracking-tighter text-xl" },
                { name: "rosé", sub: "Beverage", style: "font-serif italic text-xl" },
                { name: "Urban", sub: "Eatery", style: "font-black text-2xl font-serif" },
            ].map((logo, index) => (
                <div key={index} className="h-40 border-r border-b border-white/10 flex flex-col items-center justify-center p-6 group cursor-pointer hover:bg-white/5 transition-colors">
                    <span className={`text-gray-500 group-hover:text-white transition-colors duration-300 ${logo.style}`}>
                        {logo.name}
                    </span>
                    {logo.sub && (
                        <span className="text-[10px] text-gray-600 uppercase tracking-wider mt-1 group-hover:text-gray-400 transition-colors">
                            {logo.sub}
                        </span>
                    )}
                </div>
            ))}
        </div>
      </section>
      */}

      <section className="max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-16">
        {/* Left Content */}
        <div className="space-y-8">
            <div>
                <span className="text-gray-400 text-lg mb-2 block">Contactez-moi</span>
                <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                    Parlons ensemble de <br />
                    <span className="text-[#7cf7ad]">votre futur pprojet</span>
                </h2>
            </div>
            
            <p className="text-gray-400 text-lg leading-relaxed">
                Conçevons ensemble la solution digitale qui propulsera votre entreprise vers de nouveaux sommets.
            </p>

            <div className="space-y-4">
                {[
                    "Designer UI/UX",
                    "Développeur Web Fullstack",
                    "Intégratrice Wordpress",
                ].map((item, index) => (
                    <div key={index} className="flex items-center gap-4">
                        <div className="w-6 h-6 rounded-full bg-[#7cf7ad] flex items-center justify-center shrink-0">
                            <CheckCircle size={14} className="text-white fill-white" />
                        </div>
                        <span className="text-gray-300 text-lg">{item}</span>
                    </div>
                ))}
            </div>
        </div>

        {/* Right Form */}
       {/* Right Form - Formulaire CTA */}
<form ref={form} onSubmit={sendEmail} className="space-y-6">
    <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-2">
            <label className="text-white font-medium">Nom  <span className="text-[#7cf7ad]">*</span></label>
            <input 
                type="text" 
                name="user_name" // ATTRIBUT NAME AJOUTÉ
                required
                placeholder="Richard D. Hammond" 
                className="w-full bg-[#1C1C22] border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-[#7cf7ad] transition-colors"
            />
        </div>
        <div className="space-y-2">
            <label className="text-white font-medium">Adresse mail <span className="text-[#7cf7ad]">*</span></label>
            <input 
                type="email" 
                name="user_email" // ATTRIBUT NAME AJOUTÉ
                required
                placeholder="liliane@gmail.com" 
                className="w-full bg-[#1C1C22] border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-[#7cf7ad] transition-colors"
            />
        </div>
    </div>

    <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-2">
            <label className="text-white font-medium">Numéro de téléphone <span className="text-[#7cf7ad]">*</span></label>
            <input 
                type="text" 
                name="user_phone" // ATTRIBUT NAME AJOUTÉ
                required
                placeholder="+880 (123) 456 88" 
                className="w-full bg-[#1C1C22] border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-[#7cf7ad] transition-colors"
            />
        </div>
        <div className="space-y-2">
            <label className="text-white font-medium">Objet <span className="text-[#7cf7ad]">*</span></label>
            <input 
                type="text" 
                name="subject" // ATTRIBUT NAME AJOUTÉ
                required
                placeholder="J'aimerais avoir un devis ..." 
                className="w-full bg-[#1C1C22] border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-[#7cf7ad] transition-colors"
            />
        </div>
    </div>

    <div className="space-y-2">
        <label className="text-white font-medium">Méssage <span className="text-[#7cf7ad]">*</span></label>
        <textarea 
            rows={5}
            name="message" // ATTRIBUT NAME AJOUTÉ
            required
            placeholder="Ecrivez votre méssage ici ..." 
            className="w-full bg-[#1C1C22] border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-[#7cf7ad] transition-colors resize-none"
        ></textarea>
    </div>

    <button 
        type="submit" 
        disabled={isSubmitting}
        className={`bg-[#7cf7ad] hover:bg-[#6be69d] text-black px-8 py-4 rounded-lg font-semibold flex items-center gap-2 transition-all shadow-lg shadow-[#7cf7ad]/20 ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
    >
        {isSubmitting ? 'Envoi en cours...' : 'Envoyez moi votre méssage'} 
        {!isSubmitting && <ArrowRight size={20} />}
    </button>
    
    {isSuccess && (
        <div className="mt-4 p-4 bg-green-500/10 border border-green-500 rounded-lg flex items-center gap-3 text-green-500">
            <CheckCircle size={20} />
            <span>Message envoyé avec succès !</span>
        </div>
    )}
</form>
      </section>



    </div>
  )
}

export default Home
