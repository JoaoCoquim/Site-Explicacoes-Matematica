const experience = document.querySelector('.experience');

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

window.onscroll = function() {
  stickyNavbar();
};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function stickyNavbar() {
  if (window.scrollY > sticky) {
      navbar.classList.add("sticky");
  } else {
      navbar.classList.remove("sticky");
  }
}
