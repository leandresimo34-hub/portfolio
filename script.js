lucide.createIcons();

let currentLang = localStorage.getItem('selectedLang') || 'fr';

const translations = {
    fr: {
        nav_about: "À propos",
        nav_projects: "Projets",
        nav_contact: "Contact",
        btn_back: "Retour",
        footer: "© 2025 Léandre Simo. Tous droits réservés.",
        
        home_hello: "Bonjour !",
        home_iam: "Je suis",
        home_subtitle: "Bienvenue sur mon portfolio. Actuellement étudiant en Bachelor Réseaux et Télécommunications, je vous partage mes projets.",
        btn_projects: "Mes Projets",
        btn_contact: "Me Contacter",
        
        about_title: "À Propos de moi",
        about_who_title: "Qui suis-je ?",
        about_who_text1: "Je m'appelle <strong>Léandre Simo</strong>. Actuellement étudiant en 1ère année de BUT Réseaux & Télécommunications, j'ai un attrait pour les nouvelles technologies et le développement système et cloud.",
        about_who_text2: "Curieux et rigoureux, j'aime les nouveaux challenges et j'aime découvrir de nouvelles façons de travailler et d'apprendre.",
        
        about_skills_title: "Mes Compétences",
        skills_tech: "Technique",
        skill_telecom: "Télécommunications",
        skill_sysadmin: "Administration Système",
        skill_network: "Réseaux",
        skills_soft: "Transverse",
        skill_project: "Gestion de projet",
        skill_team: "Travail d'équipe",
        skill_english: "Anglais Technique",

        about_path_title: "Mon Parcours",
        path_date_1: "2025 - Présent",
        path_degree_1: "BUT Réseaux & Télécommunications",
        path_desc_1: "Apprentissage de l'architecture réseau, de la cybersécurité et du développement.",
        path_degree_2: "Baccalauréat Général",
        path_desc_2: "Spécialités Mathématiques et Numérique et Sciences Informatiques (NSI).",

        projects_title: "Mes Projets",
        proj1_title: "SAÉ1.1 - Hygiène informatique",
        proj1_date: "Octobre - Novembre 2025",
        proj1_desc: "Présentation de la cybersécurité générale sur internet avec vulgarisation.",
        tag_autonomy: "Autonomie",
        tag_vulgarization: "Vulgarisation",
        
        proj2_title: "SAÉ1.4 - Se présenter en ligne",
        proj2_date: "Novembre - Décembre 2025",
        proj2_desc: "Professionnalisation des profils en ligne",
        tag_interview: "Entretiens",
        
        btn_see_more: "Voir plus",

        contact_title: "Me Contacter",
        contact_intro: "Une idée de projet ? N'hésitez pas à m'écrire pour en discuter.",
        form_name: "Nom",
        ph_name: "Votre nom",
        ph_email: "votre@email.com",
        form_message: "Message",
        ph_message: "Votre message...",
        btn_send: "Envoyer via Gmail",

        cyber_title: "SAÉ 1.1 : Hygiène Informatique & Cybersécurité",
        cyber_subtitle: "Projet de vulgarisation technique visant à sensibiliser un public novice aux risques numériques.",
        cyber_desc_title: "Description du projet",
        cyber_desc_text: "L'objectif de cette SAE était de vulgariser les bonnes pratiques en cybersécurité via une présentation orale et un diaporama. L'oral est en anglais pour toucher un public large. Notre sujet : les botnets, leur fonctionnement et comment s'en protéger.",
        cyber_team_title: "L'équipe projet",
        cyber_role_title: "Ma participation",
        cyber_role_intro: "J'ai principalement travaillé sur :",
        tag_english: "Mon anglais",
        tag_ppt: "Support Powerpoint",
        tag_search: "Recherche d'information",
        cyber_role_detail: "J'ai notamment rédigé une partie du script et j'ai aidé beaucoup à la recherche d'information.",
        cyber_results_title: "Résultats & Bilan",
        cyber_res_obtenus: "Résultats obtenus",
        cyber_note: "Note finale : <strong>En attente</strong>",
        cyber_film: "Présentation filmée pour être remise aux évaluateurs",
        cyber_autoeval: "Auto-évaluation",
        cyber_feedback: "\"Ce projet m'a permis d'apprendre à mieux contrôler les supports visuels tel que Powerpoint, en apprendre plus sur les bonnes pratiques de cybersécurité et d'apprendre à utiliser du matériel vidéo.\"",
        btn_dl_ppt: "Télécharger le diaporama",
        sub_dl_ppt: "Fichier PowerPoint",
        
        // AJOUT
        btn_badge: "Voir le Badge",
        sub_badge: "Certification Open Badge",

        id_title: "SAÉ 1.4 : Se présenter sur Internet",
        id_subtitle: "Construction d'une identité numérique professionnelle cohérente et préparation à l'insertion en entreprise.",
        id_context_title: "Contexte du projet",
        id_context_text: "Lors de ce projet, nous avons été amenés à construire les bases pour notre insertion professionnelle via la création d'une identité numérique (portfolio, LinkedIn, signature mail...).",
        id_org_title: "Organisation",
        id_solo: "Travail Individuel",
        id_missions_title: "Mes missions",
        id_missions_intro: "J'ai travaillé sur plusieurs axes :",
        tag_web: "Développement Web",
        tag_contact: "Contact de professionnel",
        tag_network: "Réseautage LinkedIn",
        id_missions_detail: "La tâche la plus complexe a été de réussir le réseautage sur LinkedIn et de contacter des anciens élèves pour les interviewer.",
        id_bilan_title: "Bilan personnel",
        id_skills_acq: "Compétences acquises",
        id_list_1: "Initiation à l'e-reputation.",
        id_list_2: "Capacité à parler de soi.",
        id_list_3: "Création d'un réseau (150+ relations).",
        id_retex_title: "Retour d'expérience",
        id_retex_text: "\"J'ai appris que chaque trace sur internet compte, il est donc nécessaire de soigner son identité numérique.\"",
        btn_portfolio: "Mon Portfolio de Présentation",
        btn_visit: "Visiter la page ↗",
        btn_linkedin: "Mon Profil LinkedIn",
        btn_cv: "Mon CV complet",
        sub_cv: "Fichier PDF"
    },
    en: {
        nav_about: "About",
        nav_projects: "Projects",
        nav_contact: "Contact",
        btn_back: "Back",
        footer: "© 2025 Léandre Simo. All rights reserved.",

        home_hello: "Hello!",
        home_iam: "I am",
        home_subtitle: "Welcome to my portfolio. Currently a Network & Telecommunications student, here are my projects.",
        btn_projects: "My Projects",
        btn_contact: "Contact Me",

        about_title: "About Me",
        about_who_title: "Who am I?",
        about_who_text1: "My name is <strong>Léandre Simo</strong>. Currently a 1st year student in Network & Telecoms Bachelor, I have a strong interest in new technologies, system development, and cloud computing.",
        about_who_text2: "Curious and rigorous, I love new challenges and discovering new ways of working and learning.",
        
        about_skills_title: "My Skills",
        skills_tech: "Technical",
        skill_telecom: "Telecommunications",
        skill_sysadmin: "System Administration",
        skill_network: "Networking",
        skills_soft: "Soft Skills",
        skill_project: "Project Management",
        skill_team: "Teamwork",
        skill_english: "Technical English",

        about_path_title: "Education",
        path_date_1: "2025 - Present",
        path_degree_1: "Bachelor in Networks & Telecoms",
        path_desc_1: "Learning network architecture, cybersecurity, and development.",
        path_degree_2: "General High School Diploma",
        path_desc_2: "Specialties in Mathematics and Computer Science.",

        projects_title: "My Projects",
        proj1_title: "SAÉ1.1 - IT Hygiene & Cyber",
        proj1_date: "October - November 2025",
        proj1_desc: "General presentation of internet cybersecurity made accessible to everyone.",
        tag_autonomy: "Autonomy",
        tag_vulgarization: "Popularization",
        
        proj2_title: "SAÉ1.4 - Online Identity",
        proj2_date: "November - December 2025",
        proj2_desc: "Professionalization of online profiles.",
        tag_interview: "Interviews",
        
        btn_see_more: "See more",

        contact_title: "Contact Me",
        contact_intro: "Have a project idea? Feel free to write to me to discuss it.",
        form_name: "Name",
        ph_name: "Your name",
        ph_email: "your@email.com",
        form_message: "Message",
        ph_message: "Your message...",
        btn_send: "Send via Gmail",

        cyber_title: "SAÉ 1.1: IT Hygiene & Cybersecurity",
        cyber_subtitle: "Technical popularization project aiming to raise awareness about digital risks among novices.",
        cyber_desc_title: "Project Description",
        cyber_desc_text: "The goal of this project was to popularize cybersecurity best practices through an oral presentation and slides. The presentation is in English to reach a wider audience. Our topic: botnets, how they work, and how to protect against them.",
        cyber_team_title: "Project Team",
        cyber_role_title: "My Role",
        cyber_role_intro: "I mainly worked on:",
        tag_english: "My English",
        tag_ppt: "Powerpoint Slides",
        tag_search: "Information Research",
        cyber_role_detail: "I notably wrote part of the script and helped significantly with information research.",
        cyber_results_title: "Results & Summary",
        cyber_res_obtenus: "Results Obtained",
        cyber_note: "Final Grade: <strong>Pending</strong>",
        cyber_film: "Presentation filmed for evaluators",
        cyber_autoeval: "Self-Evaluation",
        cyber_feedback: "\"This project allowed me to learn how to better control visual aids like PowerPoint, learn more about cybersecurity best practices, and learn how to use video equipment.\"",
        btn_dl_ppt: "Download Slides",
        sub_dl_ppt: "PowerPoint File",

        // AJOUT
        btn_badge: "View Badge",
        sub_badge: "Open Badge Certification",

        id_title: "SAÉ 1.4: Online Presentation",
        id_subtitle: "Building a coherent professional digital identity and preparing for corporate insertion.",
        id_context_title: "Project Context",
        id_context_text: "During this project, we built the foundations for our professional insertion by creating a digital identity (portfolio, LinkedIn, email signature...).",
        id_org_title: "Organization",
        id_solo: "Individual Work",
        id_missions_title: "My Missions",
        id_missions_intro: "I worked on several axes:",
        tag_web: "Web Development",
        tag_contact: "Professional Contact",
        tag_network: "LinkedIn Networking",
        id_missions_detail: "The most complex task for me was successful networking on LinkedIn and contacting alumni for interviews.",
        id_bilan_title: "Personal Summary",
        id_skills_acq: "Acquired Skills",
        id_list_1: "Introduction to e-reputation.",
        id_list_2: "Ability to speak about oneself.",
        id_list_3: "Creating a professional network (150+ connections).",
        id_retex_title: "Feedback",
        id_retex_text: "\"I learned that every trace on the internet counts, so it is necessary to take care of one's digital identity.\"",
        btn_portfolio: "My Presentation Portfolio",
        btn_visit: "Visit Page ↗",
        btn_linkedin: "My LinkedIn Profile",
        btn_cv: "My Full CV",
        sub_cv: "PDF File"
    }
};

function toggleLanguage() {
    currentLang = currentLang === 'fr' ? 'en' : 'fr';
    
    localStorage.setItem('selectedLang', currentLang);
    
    updateLanguageUI();
}

function updateLanguageUI() {
    const langBtn = document.getElementById('lang-display');
    if (langBtn) {
        langBtn.textContent = currentLang === 'fr' ? 'EN' : 'FR';
    }
    
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[currentLang][key]) {
            el.innerHTML = translations[currentLang][key];
        }
    });

    const inputs = document.querySelectorAll('[data-i18n-placeholder]');
    inputs.forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (translations[currentLang][key]) {
            el.placeholder = translations[currentLang][key];
        }
    });
}

document.addEventListener("DOMContentLoaded", function() {
    lucide.createIcons();
    updateLanguageUI();
});


function switchTab(tabId) {
    if (!document.getElementById('home')) {
        window.location.href = `index.html#${tabId}`;
        return;
    }

    const sections = ['home', 'about', 'projects', 'contact'];
    sections.forEach(id => {
        const el = document.getElementById(id);
        if(el) el.classList.add('hidden');
    });

    const activeSection = document.getElementById(tabId);
    if(activeSection) {
        activeSection.classList.remove('hidden');
        activeSection.classList.remove('animate-section');
        void activeSection.offsetWidth; 
        activeSection.classList.add('animate-section');
    }

    const buttons = document.querySelectorAll('.nav-btn');
    buttons.forEach(btn => btn.classList.remove('active'));

    if (tabId !== 'home') {
        const activeBtn = document.getElementById('btn-' + tabId);
        if(activeBtn) activeBtn.classList.add('active');
    }
    
    window.scrollTo(0, 0);
}