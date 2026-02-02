// Main script for NAIRA site
document.addEventListener('DOMContentLoaded', () => {
  console.log('NAIRA site loaded');
  // Add any custom JS here, e.g., for scroll animations or event listeners
  // Example: Smooth scroll for anchors
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
});
