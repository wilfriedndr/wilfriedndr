const burger = document.getElementById('burger');
const navLinks = document.getElementById('nav-links');
const darkToggle = document.getElementById('dark-toggle');
const icon = darkToggle.querySelector('i');
const backToTopButton = document.getElementById('back-to-top');
const langToggle = document.getElementById('lang-toggle');
const langFlag = document.getElementById('lang-flag');

// Menu burger avec animation
burger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  burger.classList.toggle('open');
});

// Observer pour les animations au scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.hidden-scroll').forEach(el => observer.observe(el));

// Dark mode + Font Awesome icon
if (localStorage.getItem('theme') === 'dark') {
  document.body.classList.add('dark');
  icon.classList.replace('fa-sun', 'fa-moon');
}

darkToggle.addEventListener('click', () => {
  const isDark = document.body.classList.toggle('dark');
  icon.classList.replace(isDark ? 'fa-sun' : 'fa-moon', isDark ? 'fa-moon' : 'fa-sun');
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
});

// Scroll vers le haut
window.addEventListener('scroll', () => {
  backToTopButton.classList.toggle('show', window.scrollY > 300);
});

backToTopButton.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Dictionnaires de traduction
const translations = {
  fr: {
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
    edu_2: "Titre Pro DevOps, EPSI Toulouse (2020–2021)",
    edu_3: "Formation Java EE, DAWAN Toulouse (2019)",
    edu_4: "BTS SN IR, Lycée Saint-Pierre Tarbes (2017–2019)",
    edu_5: "Bac STI2D SIN, Pradeau-la-Sède Tarbes (2014–2017)",
    hobby_title: "Passions",
    hobby_desc: "Lecture, musique, jeux vidéo, cuisine, sport, voyages linguistiques et culturels (Brésil, Norvège, Grèce, Malte, Irlande, Espagne).",
    contact_title: "Contact",
    footer_note: "Site réalisé avec passion."
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
    exp_2_title: "IT Developer - ICC Finance, Colomiers (09/2020 – 09/2021)",
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
    footer_note: "Site crafted with passion."
  }
};

// Gestion du changement de langue
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

  // Animation du drapeau
  langFlag.classList.add('rotate');
  setTimeout(() => {
    langFlag.src = lang === 'fr' ? 'icons/gb.svg' : 'icons/fr.svg';
    langFlag.alt = lang === 'fr' ? 'EN' : 'FR';
    langFlag.classList.remove('rotate');
  }, 200);

  currentLang = lang;
  localStorage.setItem('lang', lang);
}
