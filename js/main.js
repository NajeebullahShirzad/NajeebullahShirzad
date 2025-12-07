document.addEventListener('DOMContentLoaded', function() {

  // ----- Mobile nav toggle -----
  const toggleButton = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (toggleButton && navLinks) {
    toggleButton.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });
  }

  // ----- Contact form handling (mock) -----
  const form = document.getElementById('contactForm');
  const message = document.getElementById('formMessage');

  if (form && message) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      message.textContent = "Thank you! Your message has been sent.";
      form.reset();
    });
  }

});
  document.addEventListener('DOMContentLoaded', function () {
      const toggle = document.querySelector('.nav-toggle');
      const navLinks = document.querySelector('.nav-links');
      if (toggle && navLinks) {
        toggle.addEventListener('click', () => navLinks.classList.toggle('active'));
      }
    });
