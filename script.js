const burger = document.getElementById('burger');
const navLinks = document.getElementById('nav-links');
const darkToggle = document.getElementById('dark-toggle');
const icon = darkToggle.querySelector('i');

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
}, {
  threshold: 0.1
});

const hiddenElements = document.querySelectorAll('.hidden-scroll');
hiddenElements.forEach(el => observer.observe(el));

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
