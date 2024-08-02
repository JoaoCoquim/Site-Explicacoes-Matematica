document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('.navbar-nav > li > a');
    const navbarCollapse = document.querySelector('.navbar-collapse');
  
    navLinks.forEach(function (link) {
      link.addEventListener('click', function () {
        navbarCollapse.classList.remove('show');
      });
    });
  });
  