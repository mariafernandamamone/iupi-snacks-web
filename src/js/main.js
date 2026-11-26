import '../scss/main.scss';

document.addEventListener('DOMContentLoaded', () => {
  console.log('Iupi Snacks - App iniciada');
  
  const menuToggle = document.getElementById('menu-toggle');
  const mainNav = document.getElementById('main-nav');

  if (menuToggle && mainNav) {
    menuToggle.addEventListener('click', () => {
      const isOpen = mainNav.classList.toggle('is-open');
      menuToggle.setAttribute('aria-expanded', isOpen);
    });
  }
});