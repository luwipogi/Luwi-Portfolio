// Burger menu logic (unchanged)
const burger = document.getElementById('burger');
const mobileMenu = document.getElementById('mobileMenu');

function closeMenu() {
  mobileMenu.classList.remove('active');
  document.body.style.overflow = '';
}

burger.addEventListener('click', () => {
  mobileMenu.classList.toggle('active');
  if (mobileMenu.classList.contains('active')) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = '';
  }
});

// Optional: Close menu when clicking outside on mobile
window.addEventListener('click', (e) => {
  if (
    mobileMenu.classList.contains('active') &&
    !mobileMenu.contains(e.target) &&
    !burger.contains(e.target)
  ) {
    closeMenu();
  }
});

// Optional: Close menu on navigation
const mobileLinks = mobileMenu.querySelectorAll('a');
mobileLinks.forEach(link => {
  link.addEventListener('click', closeMenu);
});

// ---- SCROLLREVEAL.JS SECTION REVEALS ----
const sr = ScrollReveal({
    distance: '80px',
    duration: 2000,
    reset: true
});

window.addEventListener('DOMContentLoaded', () => {
  // About Me section: top to bottom
  sr.reveal('.about-section', { origin: 'top', delay: 200 });

  // Skills section: left to right
  sr.reveal('.skills-section', { origin: 'left', delay: 200 });

  // Achievements section: right to left
  sr.reveal('.achievements-section', { origin: 'right', delay: 200 });

  // Address section: bottom to up
  sr.reveal('.address-section', { origin: 'bottom', delay: 200 });

  // You can add more reveals as needed for other elements...
});