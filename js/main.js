const experience = document.querySelector('.experience');

experience.addEventListener('click', () => {
  window.location.href = '../html/experience.html';
});

// Navbar collapse on mobile
document.addEventListener('DOMContentLoaded', function () {
  const navLinks = document.querySelectorAll('.navbar-nav > li > a');
  const navbarCollapse = document.querySelector('.navbar-collapse');

  navLinks.forEach(function (link) {
    link.addEventListener('click', function () {
      navbarCollapse.classList.remove('show');
    });
  });
});
