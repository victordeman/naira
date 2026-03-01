// Styles
import './style.css';

// Feather icons
import feather from 'feather-icons';

// Components
import './components/navbar.js';
import './components/footer.js';
import './components/pillar-card.js';

// Main script for NAIRA site
document.addEventListener('DOMContentLoaded', () => {
  console.log('NAIRA site loaded');

  // Feather icons initialization
  feather.replace();

  // Smooth scroll for anchors
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });
});
