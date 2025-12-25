import React, { useRef, useState } from 'react';
import { MapPin, Mail, Phone, Github, Linkedin, ArrowRight, CheckCircle } from "lucide-react";
import emailjs from '@emailjs/browser';

function Contact() {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Clés EmailJS (maintenant en dur, car elles sont fournies et fonctionnent)
  const SERVICE_ID = 'service_riz2vj1';
  const TEMPLATE_ID = 'template_rjbed1q';
  const PUBLIC_KEY = 'j1LFE69yFZuwCHOVa';

  const sendEmail = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Envoi de l'e-mail avec les clés correctes
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then((result) => {
          console.log('E-MAIL ENVOYÉ AVEC SUCCÈS:', result.text);
          setIsSuccess(true);
          setIsSubmitting(false);
          form.current.reset(); // Réinitialise le formulaire
          
          setTimeout(() => setIsSuccess(false), 5000);
      }, (error) => {
          console.error('ÉCHEC DE L\'ENVOI:', error.text);
          alert("Une erreur est survenue lors de l'envoi, veuillez réessayer.");
          setIsSubmitting(false);
      });
  };

  return (
    <div className="min-h-screen bg-[#111] text-white font-sans pt-20">
      
      {/* Page Banner */}
      <section className="relative py-20 bg-[#1C1C22] overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px)] bg-size-[4rem_100%] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Contact</h1>
          <div className="flex items-center justify-center gap-2 text-gray-400 text-sm md:text-base">
            <span className="hover:text-[#7cf7ad] cursor-pointer transition-colors">Nourath</span>
            <span>•</span>
            <span className="text-[#7cf7ad]">Contact</span>
          </div>
        </div>
        {/* Decorative Shapes */}
        <div className="absolute top-0 left-0 w-32 h-32 bg-[#7cf7ad]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-40 h-40 bg-[#7cf7ad]/10 rounded-full blur-3xl"></div>
      </section>

      {/* Contact Content */}
      <section className="max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-16">
        {/* Left Info */}
        <div className="space-y-12">
            <div className="space-y-6">
                <span className="text-gray-400 text-lg font-medium">Restons en contact</span>
                <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                    Discutons de votre <br />
                    <span className="text-[#7cf7ad]">Prochain Projet</span>
                </h2>
                <p className="text-gray-400 text-lg leading-relaxed max-w-md">
                    Je suis disponible pour des projets en freelance ou des collaborations. N'hésitez pas à me contacter pour discuter de vos idées.
                </p>
            </div>

            <div className="space-y-8">
                <h3 className="text-2xl font-bold">Mes Coordonnées</h3>
                
                <div className="space-y-6">
                    <div className="flex items-start gap-4">
                        <MapPin className="text-[#7cf7ad] shrink-0 mt-1" size={24} />
                        <span className="text-gray-300 text-lg">Belfort, France<br/>Disponible en Remote</span>
                    </div>
                    <div className="flex items-center gap-4">
                        <Mail className="text-[#7cf7ad] shrink-0" size={24} />
                        <a href="mailto:nouraffo08@gmail.com" className="text-gray-300 text-lg hover:text-[#7cf7ad] transition-colors">
                            nouraffo08@gmail.com 
                        </a>
                    </div>
                    <div className="flex items-center gap-4">
                        <Phone className="text-[#7cf7ad] shrink-0" size={24} />
                        <span className="text-gray-300 text-lg">+33753086200</span>
                    </div>
                </div>
            </div>

            <div className="space-y-6">
                <h3 className="text-2xl font-bold">Réseaux Sociaux</h3>
                <div className="flex gap-4">
                    <a
                        href="https://www.linkedin.com/in/nourath-affo-8b00003a0/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 rounded-full bg-[#1C1C22] flex items-center justify-center text-white hover:bg-[#7cf7ad] hover:text-black transition-all hover:-translate-y-1"
                        aria-label="Voir le profil LinkedIn"
                    >
                        <Linkedin size={20} />
                    </a>
                    <a
                        href="https://github.com/NourLight09"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 rounded-full bg-[#1C1C22] flex items-center justify-center text-white hover:bg-[#7cf7ad] hover:text-black transition-all hover:-translate-y-1"
                        aria-label="Voir le profil GitHub"
                    >
                        <Github size={20} />
                    </a>
                </div>
            </div>
        </div>

        {/* Right Form - Fonctionnel via EmailJS */}
        <div className="bg-[#1C1C22] p-8 md:p-12 rounded-2xl border border-white/5 h-fit">
            <form ref={form} onSubmit={sendEmail} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label className="text-white font-medium">Nom <span className="text-[#7cf7ad]">*</span></label>
                        <input 
                            type="text" 
                            name="user_name" 
                            required
                            placeholder="Votre nom" 
                            className="w-full bg-[#111] border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-[#7cf7ad] transition-colors"
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="text-white font-medium">Adresse mail <span className="text-[#7cf7ad]">*</span></label>
                        <input 
                            type="email" 
                            name="user_email" 
                            required
                            placeholder="exemple@gmail.com" 
                            className="w-full bg-[#111] border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-[#7cf7ad] transition-colors"
                        />
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label className="text-white font-medium">Numéro de téléphone</label>
                        <input 
                            type="text" 
                            name="user_phone"
                            placeholder="+33 ..." 
                            className="w-full bg-[#111] border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-[#7cf7ad] transition-colors"
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="text-white font-medium">Objet <span className="text-[#7cf7ad]">*</span></label>
                        <input 
                            type="text" 
                            name="subject"
                            required
                            placeholder="J'aimerais avoir un devis..." 
                            className="w-full bg-[#111] border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-[#7cf7ad] transition-colors"
                        />
                    </div>
                </div>

                <div className="space-y-2">
                    <label className="text-white font-medium">Message <span className="text-[#7cf7ad]">*</span></label>
                    <textarea 
                        rows={6}
                        name="message" 
                        required
                        placeholder="Écrivez votre message ici..." 
                        className="w-full bg-[#111] border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-[#7cf7ad] transition-colors resize-none"
                    ></textarea>
                </div>

                <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className={`bg-[#7cf7ad] hover:bg-[#6be69d] text-black px-8 py-4 rounded-lg font-semibold flex items-center gap-2 transition-all shadow-lg shadow-[#7cf7ad]/20 ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                    {isSubmitting ? 'Envoi en cours...' : 'Envoyer le message'} 
                    {!isSubmitting && <ArrowRight size={20} />}
                </button>

                {isSuccess && (
                    <div className="mt-4 p-4 bg-green-500/10 border border-green-500 rounded-lg flex items-center gap-3 text-green-500">
                        <CheckCircle size={20} />
                        <span>Message envoyé avec succès ! Je vous répondrai très vite.</span>
                    </div>
                )}
            </form>
        </div>
      </section>

    </div>
  )
}

export default Contact;