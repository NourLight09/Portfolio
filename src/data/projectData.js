import maytonImage from '../assets/images/mayton/cover_mayton.png';
import logoSchoolMS from '../assets/images/sms/logo_schoolms.png';
import accueilImage from '../assets/images/mayton/accueil.png';
import mobileImage from '../assets/images/mayton/mobile.png';
import realisationsImage from '../assets/images/mayton/realisations_detail.png';
import accueilSchoolMS from '../assets/images/sms/accueil(1).png';
import admin from '../assets/images/sms/admin.png';
import contact from '../assets/images/sms/contact.png';
import suivi from '../assets/images/sms/suivi.png';
import image_bb_express_couverture from '../assets/images/bbexpress/logobbexpress.png';
import image_bb_express_hero from '../assets/images/bbexpress/accueil.png';
import choose from '../assets/images/bbexpress/choose.png';
import contactBB from '../assets/images/bbexpress/contact.png';
import services from '../assets/images/bbexpress/services.png';
import TGIS1 from '../assets/images/design/TGIS1.png';
import TGIS2 from '../assets/images/design/TGIS2.png';
import creations from '../assets/images/design/creations.png';
import er from '../assets/images/design/er.png';
import herocreation from '../assets/images/design/herocreation.png';
import AfricanSawad from '../assets/images/design/AfricanSawad.png';
import design1 from '../assets/images/design/1.png';
import design3 from '../assets/images/design/3.png';
import design4 from '../assets/images/design/4.png';
import design5 from '../assets/images/design/5.png';
import design6 from '../assets/images/design/6.png';
import design7 from '../assets/images/design/7.png';
import design8 from '../assets/images/design/8.png';
import design24 from '../assets/images/design/24.png';
import design25 from '../assets/images/design/25.png';
import design26 from '../assets/images/design/26.png';
import gala from '../assets/images/design/gala.jpg';
import bimalaril from '../assets/images/design/bimalaril.jpg';
import bimalaril2 from '../assets/images/design/bimalaril2.jpg';
import ercom from '../assets/images/design/ercom.jpg';
import design9 from '../assets/images/design/9.jpg';
import design10 from '../assets/images/design/10.jpg';
import design11 from '../assets/images/design/11.jpg';
import design12 from '../assets/images/design/12.jpg';
import design100 from '../assets/images/saveurs/100.png';
import design101 from '../assets/images/saveurs/101.png';
import design102 from '../assets/images/saveurs/102.png';
import design103 from '../assets/images/saveurs/103.png';
import design104 from '../assets/images/saveurs/104.png';
import design105 from '../assets/images/saveurs/105.png';
import accueilsaveurs from '../assets/images/saveurs/accueil.png';
import hero from '../assets/images/saveurs/hero.png';

import chat from '../assets/images/hivemind/chat.png';
import collaborateur from '../assets/images/hivemind/collaborateur.png';
import header from '../assets/images/hivemind/header.png';
import history from '../assets/images/hivemind/history.png';
import infoProjets from '../assets/images/hivemind/info_projets.png';
import listeWorkspaces from '../assets/images/hivemind/liste_workspaces.png';
import login from '../assets/images/hivemind/login.png';
import logo from '../assets/images/hivemind/logo.png';
import profil from '../assets/images/hivemind/profil.png';
import register from '../assets/images/hivemind/register.png';



export const ALL_PROJECTS = [
    {
        id: 'mayton-holding',
        title: "Maquette de site pour Mayton's Holding",
        category: "UI/UX Design",
        client: "Mayton's Holding",
        location: "Abomey-Calavi, Bénin",
        delivery: "Mars 2025",
        
        image: maytonImage, 
        bgColor: "bg-[#E3D5CA]",

        heroImage: accueilImage,
        intro: "MAYTON'S HOLDINGS SARL, une entreprise béninoise multi-sectorielle opérant sous la marque déposée MAYZONE. Cette société est spécialisée dans une vaste gamme d'activités, notamment la construction immobilière et la promotion, les services digitaux (avec des plateformes comme eRent et MyLodge), la production audiovisuelle (MAYZONE PRODUCTION), la restauration, l'Import-Export (MAYZONE CARGO), et l'AgroBusiness. L'objectif du site web est de mettre en avant cette polyvalence et l'expertise de MAYZONE en proposant des solutions sur mesure et durables pour accompagner les clients dans leurs projets et investissements.",
        features: ["Identification des spécificités", "Wireframing", "Design", "Prototypage"],
        demoButtonText: "Voir le prototype Figma",
        demoLink: "https://www.figma.com/proto/RbEph3GfkAa9UoyNimKCUD/Mayton-s-holding?node-id=203-4232&t=udjcvuMKKRAPccLI-0&scaling=scale-down&content-scaling=fixed&page-id=203%3A3814&starting-point-node-id=203%3A4232",

        gallery: [
            { src: accueilImage, alt: "Page d'Accueil du site" },
            { src: realisationsImage, alt: "Détail de la section Réalisations" },
            { src: mobileImage, alt: "Vue Mobile du design" },
        ],
    },
    {
        id: 'school-ms', 
        title: "SchoolMS - Système de gestion scolaire",
        category: "Developpement Web",
        client: "Projet de Soutenance",
        location: "Cotonou, Bénin",
        delivery: "Octobre 2024",
        
        image: logoSchoolMS,
        bgColor: "bg-[#ffffff]",

        heroImage: suivi,
        intro: "SchoolMS est une solution web complète pour la gestion des établissements scolaires. Elle permet de numériser l'administration, la gestion des notes, les communications parents-professeurs et l'emploi du temps. ",
        features: ["Architecture MVC", "Base de données SQL", "Interface Responsive", "Gestion des rôles utilisateurs"],
        demoButtonText: "Voir la démo",
        demoLink: "https://youtu.be/d4Hl8EX9m7A",

        gallery: [
            { src: accueilSchoolMS, alt: "Page d'Accueil de SchoolMS" },
            { src: admin, alt: "Interface Admin de SchoolMS" },
            { src: contact, alt: "Page de Contact de SchoolMS" },
        ],
    },
    {
    id: 'bb-express',
    title: "Conception du site BB Express",
    category: "Intégration Wordpress",
    client: "BB Express",
    location: "Cotonou, Bénin",
    delivery: "Mars 2026",
    image: image_bb_express_couverture,
    bgColor: "bg-[#0A2647]",
    heroImage: image_bb_express_hero,
    intro: "Réalisation du site vitrine de BB Express, spécialisé dans la logistique et la livraison express. L'objectif principal était d'établir une présence en ligne forte, de présenter clairement l'étendue des services de transport, et de renforcer l'image de marque de l'entreprise auprès de ses clients et partenaires.",
    features: [
        "Identité visuelle digitale et charte graphique respectée", 
        "Site 100% Responsive et adapté à tous les écrans", 
        "Intégration d'un module de contact direct via WhatsApp",
        "Mise en avant claire des services de livraison et de fret"
    ],
    demoButtonText: "Visiter le site Web",
    demoLink: "https://bandb-express.com/",
    gallery: [ 
        { src: choose, alt: "Page d'accueil du site" },
        { src: contactBB, alt: "Interface de suivi de colis" },
        { src: services, alt: "Version mobile de la plateforme" },
    ],
    }
    ,
    {
        id: 'design-graphique',
        title: "Mes réalisations graphique",
        category: "Design Graphique",        
        image: creations,
        bgColor: "bg-[#F0F0F0]",

        heroImage: herocreation,
        intro: "Grâce à mes compétences en design graphique, j'ai eu l'opportunité de collaborer avec divers clients pour créer des visuels percutants et adaptés à leurs besoins. Mon travail englobe la conception de logos, de supports marketing, de brochures, et bien plus encore. Chaque projet est une nouvelle occasion de fusionner créativité et stratégie afin de produire des designs qui captivent et communiquent efficacement le message souhaité.",
        features: ["Création de supports de présentation", "Design de brochures", "Mise en page de documents techniques", "Respect de la charte graphique"],
        demoButtonText: "Contactez-moi",
        demoLink: "/contact",

        gallery: [
            { src: TGIS1, alt: "Exemple de design graphique pour TGIS" },
            { src: TGIS2, alt: "Autre exemple de design graphique pour TGIS" },
            { src: er, alt: "Logo Eco Responsables" },
            { src: AfricanSawad, alt: "Design pour African Sawad" },
            { src: design1, alt: "Design 1" },
            { src: design3, alt: "Design 3" },
            { src: design4, alt: "Design 4" },
            { src: gala, alt: "Design Gala" },
            { src: design5, alt: "Design 5" },
            { src: design6, alt: "Design 6" },
            { src: design25, alt: "Design 25" },
            { src: design7, alt: "Design 7" },
            { src: design8, alt: "Design 8" },
            { src: design9, alt: "Design 9" },
            { src: design10, alt: "Design 10" },
            { src: design11, alt: "Design 11" },
            { src: design12, alt: "Design 12" },
            { src: design24, alt: "Design 24" },
            { src: design26, alt: "Design 26" },
            { src: bimalaril, alt: "Design Bimalaril 1" },
            { src: bimalaril2, alt: "Design Bimalaril 2" },
            { src: ercom, alt: "Design Ercom" },
            { src: logo, alt: "Logo Hivemind" },
            

        ],
    },

    {
    id: 'Hivemind',
    title: "Conception d'une plateforme de collaboration dans un environnement professionnel",
    category: "Developpement Web",
    client: "Projet personnel",
    location: "Cotonou, Bénin",
    delivery: "",
    image: logo,
    bgColor: "bg-[#0A2647]",
    heroImage: header,
    intro: "Hivemind est une plateforme web conçue pour faciliter la collaboration et la communication au sein des équipes professionnelles. Elle offre des fonctionnalités telles que la gestion de projets, le partage de fichiers, la messagerie instantanée, et la création d'espaces de travail dédiés. L'objectif est de centraliser les outils de travail afin d'améliorer la productivité et la cohésion des équipes.",
    features: [
        "Identité visuelle digitale et charte graphique respectée", 
        "Site 100% Responsive et adapté à tous les écrans", 
        "Intégration d'un module de contact direct via WhatsApp",
        "Mise en avant claire des services de livraison et de fret"
    ],
    demoButtonText: "Voir le code",
    demoLink: "https://github.com/NourLight09/Hivemind/",
    gallery: [ 
        { src: login, alt: "Page de login de Hivemind" },
        { src: register, alt: "Page d'inscription de Hivemind" },
        { src: history, alt: "Historique de Hivemind" },
        { src: listeWorkspaces, alt: "Liste des workspaces de Hivemind" },
        { src: infoProjets, alt: "Informations des projets de Hivemind" },
        { src: chat, alt: "Interface de chat de Hivemind" },
        { src: collaborateur, alt: "Page des collaborateurs de Hivemind" },
        { src: profil, alt: "Page de profil de Hivemind" },
        
    ],
    },
    {
        id: 'saveurs-du-benin',
        title: "Maquette de site pour Saveurs du Bénin",
        category: "UI/UX Design",
        client: "LaZone",
        location: "Cotonou, Bénin",
        delivery: "Juin 2025",
        
        image: hero, 
        bgColor: "bg-[#E3D5CA]",
        
        heroImage: accueilsaveurs,
        intro: "Saveurs du Bénin est un restaurant situé à Cotonou, spécialisé dans la cuisine traditionnelle béninoise. Le site web vise à refléter l'authenticité et la richesse culinaire du Bénin, tout en offrant une expérience utilisateur fluide et engageante. Il met en avant le menu varié, les services de restauration, ainsi que l'histoire et la mission du restaurant.",
        features: ["Identification des spécificités", "Wireframing", "Design", "Prototypage"],
        demoButtonText: "Voir la démo",
        demoLink: "https://youtu.be/rwef7a-GD1g",

        gallery: [
           
            { src: design100, alt: "Aperçu mobile - Page d'accueil" },
            { src: design101, alt: "Aperçu mobile - Menu et plats" },
            { src: design102, alt: "Vue Mobile 1 du design" },
            { src: design103, alt: "Vue Mobile 2 du design" },
            { src: design104, alt: "Version tablette du design" },
            { src: design105, alt: "Détail de la carte et du design" }
        ],
            
        
    }
];