// An event listener for scroll events
window.addEventListener('scroll', function() {
  const sections = document.querySelectorAll('section, .hero, .heading, .testimonials, .ab, .cnt');
  const navLinks = document.querySelectorAll('.nav-links a, .footer-nav a');
  
  let currentSection = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 50;
    if (pageYOffset >= sectionTop) {
      currentSection = section.getAttribute('id');
    }
  });
  
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href').includes(currentSection)) {
      link.classList.add('active');
    }
  });
});
