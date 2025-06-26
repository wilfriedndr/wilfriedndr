const burger = document.getElementById('burger');
const navLinks = document.getElementById('nav-links');
const darkToggle = document.getElementById('dark-toggle');
const icon = darkToggle.querySelector('i');
const backToTopButton = document.getElementById('back-to-top');
const langToggle = document.getElementById('lang-toggle');
const langFlag = document.getElementById('lang-flag');

// Menu burger
burger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  burger.classList.toggle('open');
});

// Animation au scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.hidden-scroll').forEach(el => observer.observe(el));

// Dark mode
if (localStorage.getItem('theme') === 'dark') {
  document.body.classList.add('dark');
  icon.classList.replace('fa-sun', 'fa-moon');
}

darkToggle.addEventListener('click', () => {
  const isDark = document.body.classList.toggle('dark');
  icon.classList.replace(isDark ? 'fa-sun' : 'fa-moon', isDark ? 'fa-moon' : 'fa-sun');
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
});

// Bouton retour haut
window.addEventListener('scroll', () => {
  backToTopButton.classList.toggle('show', window.scrollY > 300);
});

backToTopButton.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Traduction
const translations = {
  fr: {
    // Menu & sections
    menu_about: "À propos",
    menu_skills: "Compétences",
    menu_projects: "Projets",
    menu_hobbies: "Passions",
    menu_contact: "Contact",
    hero_name: "Wilfried NIEDERHOFFER",
    hero_title: "Concepteur Développeur d’Applications",
    hero_desc: "Développeur passionné par le fullstack et le DevOps.",
    about_title: "À propos",
    about_text: "Curieux, sociable et enthousiaste, j’aime apprendre, construire et relever des défis techniques.",
    skills_title: "Compétences",
    skills_dev: "Développement : Python, FastAPI, JavaScript, TypeScript, HTML/CSS, PHP, Laravel",
    skills_front: "Frontend : Angular, Flutter, BabylonJS, React Native",
    skills_back: "Backend & DevOps : Docker, Kubernetes, GitLab CI/CD, Helm, Bash, Linux, Firebase, MySQL, NoSQL",
    skills_tools: "Outils : GitHub Actions, Jira, Office 365, Azure AD",
    skills_langs: "Langues : Anglais (C1)",
    exp_title: "Expériences professionnelles",
    exp_1_title: "Concepteur Intégrateur DevOps - Atos, Toulouse (09/2021 – 09/2023)",
    exp_1_desc: "Refonte des workflows CI/CD avec GitLab, Docker, Kubernetes. Création d'une app web de modélisation 3D avec Angular, FastAPI et BabylonJS.",
    exp_2_title: "Développeur Informatique - ICC Finance, Colomiers (09/2020 – 09/2021)",
    exp_2_desc: "Développement d’une app interne pour Office 365, gestion des accès, génération de signatures. Stack : PHP, Laravel, Angular.",
    exp_3_title: "Stage Réseau - DGAC, Blagnac (05/2018 – 06/2018)",
    exp_3_desc: "Étude de sécurité réseau avec Pi-Hole sur Raspberry Pi.",
    projects_title: "Projets personnels",
    project_1_title: "EnvieDici (03/2025 – présent)",
    project_1_desc: "Site vitrine, boutique en ligne et backoffice. Stack : Angular, Django, Docker, Raspberry PI, GitHub Actions.",
    project_2_title: "Appli musicale (09/2024 – 12/2024)",
    project_2_desc: "Appli mobile Flutter avec intégration Spotify, Deezer, Apple Music.",
    education_title: "Formations",
    edu_1: "Master EISI, EPSI Toulouse (2021–2023)",
    edu_2: "Bachelor Concepteur Intégrateur DevOps, EPSI Toulouse (2020–2021)",
    edu_3: "Formation Java EE, DAWAN Toulouse (2019)",
    edu_4: "BTS SN IR, Lycée Saint-Pierre Tarbes (2017–2019)",
    edu_5: "Bac STI2D SIN, Pradeau-la-Sède Tarbes (2014–2017)",
    hobby_title: "Passions",
    hobby_desc: "Lecture, musique, jeux vidéo, cuisine, sport, voyages linguistiques et culturels (Brésil, Norvège, Grèce, Malte, Irlande, Espagne).",
    contact_title: "Contact",
    footer_note: "Site réalisé avec passion.",

    exp_1_modal_title: "Concepteur Intégrateur DevOps – Atos, Toulouse",
    exp_1_modal_period: "Période : Septembre 2021 à Septembre 2023",
    exp_1_modal_proj1_title: "Projet 1 – Optimisation des workflows CI/CD",
    exp_1_modal_proj1_ctx: "Contexte : L’équipe utilisait Tortoise SVN et faisait appel à l'équipe IT du client pour chaque déploiement, entraînant des lenteurs et une dépendance forte.",
    exp_1_modal_proj1_obj: "Objectif : Moderniser les workflows de développement en introduisant une CI/CD automatisée.",
    exp_1_modal_proj1_tasks: "Missions :",
    exp_1_modal_proj1_results: "Résultats :",
    exp_1_modal_proj2_title: "Projet 2 – Développement d’une application web de modélisation 3D",
    exp_1_modal_proj2_ctx: "Contexte : Conception d’une application pour visualiser en 3D le fuselage d’un avion et détecter des défauts (ex. rivets endommagés).",
    exp_1_modal_proj2_obj: "Objectif : Développer une application web fullstack permettant la modélisation 3D, avec vues 2D/3D et tableaux analytiques.",
    exp_1_modal_proj2_results: "Résultats :",
    exp_1_modal_env: "Environnement technique : GitLab CI/CD, GitLab Runner, Docker, Kubernetes, FastAPI (Python), Angular, BabylonJS, MongoDB, PostgreSQL, Maven, Agile Scrum/Kanban",

    exp_2_modal_title: "Développeur Informatique – ICC Finance, Colomiers",
    exp_2_modal_period: "Période : Septembre 2020 à Septembre 2021",
    exp_2_modal_ctx: "Contexte : Besoin d’optimiser les outils internes et la présence web de l’entreprise tout en assurant la gestion quotidienne de l’infrastructure IT.",
    exp_2_modal_obj: "Objectif : Automatiser la gestion des comptes, améliorer les outils internes et maintenir les sites web.",
    exp_2_modal_tasks: "Missions :",
    exp_2_modal_env: "Environnement technique : Angular, PHP, Laravel, MySQL, HTML/CSS, JavaScript, TypeScript, WordPress, Office 365, Azure Active Directory",

    exp_3_modal_title: "Stage Réseau – DGAC, Blagnac",
    exp_3_modal_period: "Période : Mai 2018 à Juin 2018",
    exp_3_modal_ctx: "Contexte : L’administration souhaitait évaluer des solutions open-source pour renforcer la sécurité réseau à moindre coût.",
    exp_3_modal_obj: "Objectif : Étudier l’implémentation de solutions de filtrage DNS et bloquer les contenus indésirables via Pi-Hole.",
    exp_3_modal_tasks: "Missions :",
    exp_3_modal_env: "Environnement technique : Raspberry Pi, Pi-Hole, Linux, Bash, Python, Kali-Linux",

    project_1_modal_title: "Projet personnel – EnvieDici",
    project_1_modal_period: "Période : Mars 2025 – En cours",
    project_1_modal_obj: "Objectifs :",
    project_1_modal_results: "Réalisations :",
    project_1_modal_env: "Environnement technique : Angular, Django REST, PostgreSQL, Docker, GitHub Actions, Raspberry Pi",

    project_2_modal_title: "Projet personnel – Application mobile musicale",
    project_2_modal_period: "Période : Septembre 2024 – Décembre 2024",
    project_2_modal_obj: "Objectifs :",
    project_2_modal_results: "Réalisations :",
    project_2_modal_env: "Environnement technique : Flutter (Dart), Firebase, API (Spotify, Deezer, Apple Music), Git, Kanban",
  },
  en: {
    menu_about: "About",
    menu_skills: "Skills",
    menu_projects: "Projects",
    menu_hobbies: "Hobbies",
    menu_contact: "Contact",
    hero_name: "Wilfried NIEDERHOFFER",
    hero_title: "Application Developer",
    hero_desc: "Passionate about fullstack and DevOps development.",
    about_title: "About",
    about_text: "Curious, social and enthusiastic, I love learning, building and tackling technical challenges.",
    skills_title: "Skills",
    skills_dev: "Development: Python, FastAPI, JavaScript, TypeScript, HTML/CSS, PHP, Laravel",
    skills_front: "Frontend: Angular, Flutter, BabylonJS, React Native",
    skills_back: "Backend & DevOps: Docker, Kubernetes, GitLab CI/CD, Helm, Bash, Linux, Firebase, MySQL, NoSQL",
    skills_tools: "Tools: GitHub Actions, Jira, Office 365, Azure AD",
    skills_langs: "Languages: English (C1)",
    exp_title: "Professional Experience",
    exp_1_title: "DevOps Integrator - Atos, Toulouse (09/2021 – 09/2023)",
    exp_1_desc: "Redesigned CI/CD workflows with GitLab, Docker, Kubernetes. Built a 3D modeling web app using Angular, FastAPI, and BabylonJS.",
    exp_2_title: "Web Developer - ICC Finance, Colomiers (09/2020 – 09/2021)",
    exp_2_desc: "Developed an internal Office 365 automation app for access management and email signature generation. Stack: PHP, Laravel, Angular.",
    exp_3_title: "Network Internship - DGAC, Blagnac (05/2018 – 06/2018)",
    exp_3_desc: "Network security study using Pi-Hole on Raspberry Pi.",
    projects_title: "Projects",
    project_1_title: "EnvieDici (03/2025 – present)",
    project_1_desc: "Showcase site, online shop, and admin backoffice. Stack: Angular, Django, Docker, Raspberry PI, GitHub Actions.",
    project_2_title: "Music App (09/2024 – 12/2024)",
    project_2_desc: "Cross-platform mobile app integrating Spotify, Deezer, and Apple Music.",
    education_title: "Education",
    edu_1: "Master EISI, EPSI Toulouse (2021–2023)",
    edu_2: "Professional DevOps Title, EPSI Toulouse (2020–2021)",
    edu_3: "Java EE Training, DAWAN Toulouse (2019)",
    edu_4: "BTS SN IR, Lycée Saint-Pierre Tarbes (2017–2019)",
    edu_5: "STI2D SIN High School Diploma, Pradeau-la-Sède Tarbes (2014–2017)",
    hobby_title: "Hobbies",
    hobby_desc: "Reading, music, gaming, cooking, sports, cultural and language travels (Brazil, Norway, Greece, Malta, Ireland, Spain).",
    contact_title: "Contact",
    footer_note: "Site crafted with passion.",

    details_btn: "Details",
    missions: "Tasks:",
    results: "Results:",
    objectives: "Objectives:",
    achievements: "Achievements:",

    exp_1_modal_title: "DevOps Integration Engineer – Atos, Toulouse",
    exp_1_period: "Period: September 2021 to September 2023",
    exp_1_project1_title: "Project 1 – CI/CD Workflow Optimization",
    exp_1_project1_context: "Context: The team was using Tortoise SVN and relying on the client’s IT team for every deployment, causing delays and strong dependency.",
    exp_1_project1_goal: "Goal: Modernize development workflows by introducing automated CI/CD.",
    exp_1_project1_mission1: "Analyzed existing process and proposed a GitLab-based CI/CD architecture",
    exp_1_project1_mission2: "Created an automated pipeline (tests, Maven builds, Docker, Kubernetes deployment)",
    exp_1_project1_mission3: "Removed dependency on IT teams for deployment tasks",
    exp_1_project1_result1: "Accelerated production release cycle",
    exp_1_project1_result2: "Improved development workflow efficiency",
    exp_1_project1_result3: "Significant improvement in developer efficiency by reducing deployment time and removing reliance on the client’s IT team",
    exp_1_project1_result4: "Designed and implemented a CI/CD pipeline automating:",
    exp_1_project1_sub1: "Automated test execution",
    exp_1_project1_sub2: "Application build with Maven",
    exp_1_project1_sub3: "Docker image generation for each service",
    exp_1_project1_sub4: "Orchestrated deployment on Kubernetes",
    exp_1_project2_title: "Project 2 – Development of a 3D Modeling Web Application",
    exp_1_project2_context: "Context: Designed an app to visualize airplane fuselage in 3D and detect defects (e.g., damaged rivets).",
    exp_1_project2_goal: "Goal: Develop a fullstack web app for 3D modeling, with 2D/3D views and data tables.",
    exp_1_project2_mission1: "Frontend development with Angular and Babylon.js for 3D modeling",
    exp_1_project2_mission2: "Set up a FastAPI backend for 3D model import/export",
    exp_1_project2_mission3: "Integrated MongoDB for data persistence",
    exp_1_project2_result1: "Developed a 3D modeling application",
    exp_1_project2_result2: "Built an interactive web interface for visualization and analysis of airplane fuselage",
    exp_1_project2_result3: "Implemented a FastAPI backend to manage 3D models and data persistence via MongoDB",
    exp_1_project2_result4: "Supported various data representations (3D, 2D, tabular)",
    exp_1_project2_result5: "Native support for AutoCAD files, exportable for external analysis",
    exp_1_tech: "Tech Stack: GitLab CI/CD, GitLab Runner, Docker, Kubernetes, FastAPI (Python), Angular, BabylonJS, MongoDB, PostgreSQL, Maven, Agile Scrum/Kanban",

    exp_2_modal_title: "IT Developer – ICC Finance, Colomiers",
    exp_2_period: "Period: September 2020 to September 2021",
    exp_2_context: "Context: Need to optimize internal tools and web presence while handling IT infrastructure management.",
    exp_2_goal: "Goal: Automate account management, improve internal tools, and maintain websites.",
    exp_2_mission1: "Developed an internal app to automate Office 365 account creation",
    exp_2_mission2: "Automated email signature generation and access rights management",
    exp_2_mission3: "Developed and maintained the company’s websites",
    exp_2_mission4: "Handled daily IT maintenance, technical support, and CRM operations",
    exp_2_tech: "Tech Stack: Angular, PHP, Laravel, MySQL, HTML/CSS, JavaScript, TypeScript, WordPress, Office 365, Azure Active Directory",

    exp_3_modal_title: "Network Internship – DGAC, Blagnac",
    exp_3_period: "Period: May 2018 to June 2018",
    exp_3_context: "Context: The administration aimed to evaluate open-source solutions to enhance network security at a low cost.",
    exp_3_goal: "Goal: Study the implementation of DNS filtering solutions to block unwanted content using Pi-Hole.",
    exp_3_mission1: "Installed and configured Pi-Hole on a Raspberry Pi",
    exp_3_mission2: "Performed DNS blocking tests, domain blacklisting/whitelisting",
    exp_3_mission3: "Conducted network security analysis using Kali Linux",
    exp_3_tech: "Tech Stack: Raspberry Pi, Pi-Hole, Linux, Bash, Python, Kali Linux",

    project_1_modal_title: "Personal Project – EnvieDici",
    project_1_period: "Period: March 2025 – Ongoing",
    project_1_obj1: "Create a digital storefront for a local grocery store",
    project_1_obj2: "Enable online ordering of local products",
    project_1_obj3: "Offer a custom backoffice to manage products, orders, and pickup slots",
    project_1_real1: "Frontend development in Angular for the showcase and shop",
    project_1_real2: "Backend development in Django REST (products, clients, orders, time slots)",
    project_1_real3: "Created a backoffice managing PDF invoices and stock",
    project_1_real4: "Dockerized all services (Angular, Django, PostgreSQL)",
    project_1_real5: "Set up CI/CD automation via GitHub Actions with a Raspberry Pi runner",
    project_1_real6: "Automated Docker image builds and service restarts to simulate continuous deployment",
    project_1_tech: "Tech Stack: Angular, Django REST, PostgreSQL, Docker, GitHub Actions, Raspberry Pi",

    project_2_modal_title: "Personal Project – Mobile Music App",
    project_2_period: "Period: September 2024 – December 2024",
    project_2_obj1: "Create a cross-platform mobile music application",
    project_2_obj2: "Provide a matching engine based on musical preferences",
    project_2_real1: "Full Flutter app development (iOS + Android)",
    project_2_real2: "Integrated APIs from Spotify, Deezer, and Apple Music",
    project_2_real3: "Developed core logic in Dart (authentication, profiles, matching)",
    project_2_real4: "Worked in collaboration with a UX/UI designer (intuitive wireframes)",
    project_2_tech: "Tech Stack: Flutter (Dart), Firebase, APIs (Spotify, Deezer, Apple Music), Git, Kanban"
  }
};

// Langue initiale
let currentLang = localStorage.getItem('lang') || 'fr';
updateLanguage(currentLang);

langToggle.addEventListener('click', () => {
  const newLang = currentLang === 'fr' ? 'en' : 'fr';
  updateLanguage(newLang);
});

function updateLanguage(lang) {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });

  langFlag.classList.add('rotate');
  setTimeout(() => {
    langFlag.src = lang === 'fr' ? 'icons/gb.svg' : 'icons/fr.svg';
    langFlag.alt = lang === 'fr' ? 'EN' : 'FR';
    langFlag.classList.remove('rotate');
  }, 200);

  currentLang = lang;
  localStorage.setItem('lang', lang);
}

// Gestion des modales
document.querySelectorAll('.open-modal-btn').forEach(button => {
  button.addEventListener('click', () => {
    const modalId = button.getAttribute('data-modal');
    document.getElementById(modalId).style.display = 'flex';

    // Floutage des .card d'expérience
    document.querySelectorAll('.experience.card').forEach(card => {
      card.classList.add('blur-on-modal');
    });
  });
});

document.querySelectorAll('.close-modal').forEach(span => {
  span.addEventListener('click', () => {
    const modalId = span.getAttribute('data-modal');
    document.getElementById(modalId).style.display = 'none';

    document.querySelectorAll('.experience.card').forEach(card => {
      card.classList.remove('blur-on-modal');
    });
  });
});

document.body.addEventListener('click', function (e) {
  const isModalOpenBtn = e.target.closest('.open-modal-btn');
  const isInsideModalContent = e.target.closest('.modal-content');
  const openModal = document.querySelector('.modal[style*="display: flex"]');

  if (!openModal) return;

  // Ne pas fermer si on clique dans la modale ou sur un bouton d'ouverture
  if (!isModalOpenBtn && !isInsideModalContent) {
    openModal.style.display = 'none';

    document.querySelectorAll('.experience.card').forEach(card => {
      card.classList.remove('blur-on-modal');
    });
  }
});

// Fade-in au scroll dans les modales
const modalContentElements = document.querySelectorAll('.modal-content p, .modal-content ul, .modal-content li, .modal-content h3, .modal-content h4, .modal-content hr');

// Ajouter automatiquement la classe fade-in-scroll à ces éléments
modalContentElements.forEach(el => {
  el.classList.add('fade-in-scroll');
});

// Observer chaque élément nouvellement marqué
const fadeInObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    } else {
      entry.target.classList.remove('visible'); // permet de rejouer l'animation
    }
  });
}, {
  threshold: 0.1,
  rootMargin: '100px 0px -60px 0px'
});

// Observer les éléments
modalContentElements.forEach(el => fadeInObserver.observe(el));

document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
    burger.classList.remove('open');
  });
});

