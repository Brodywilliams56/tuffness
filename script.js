// Simple mobile navigation toggle
document.addEventListener('DOMContentLoaded', function () {
  const toggleBtn = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (toggleBtn && navLinks) {
    toggleBtn.addEventListener('click', function () {
      navLinks.classList.toggle('open');
      // Animate hamburger to X
      toggleBtn.classList.toggle('active');
    });
  }
});

// Optional: close menu when a link is clicked (mobile)
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    const navLinks = document.querySelector('.nav-links');
    if (navLinks.classList.contains('open')) {
      navLinks.classList.remove('open');
      document.querySelector('.nav-toggle').classList.remove('active');
    }
  });
});