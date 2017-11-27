(function () {
  var menuButton = document.querySelector('.js-menu-button');
  var closeButton = document.querySelector('.js-close-button');
  var menu = document.querySelector('.js-navbar-menu');
  var navbar = document.querySelector('.js-navbar');

  menuButton.addEventListener('click', toggleMenu);
  closeButton.addEventListener('click', toggleMenu);
  window.addEventListener('scroll', scrollSpy);

  function toggleMenu() {
    menu.classList.toggle('navbar__menu--active');
  }

  function scrollSpy() {
    var offset = window.pageYOffset || window.scrollY;
    offset > 120 ? navbar.classList.add('navbar--fixed') : navbar.classList.remove('navbar--fixed');
  }
})()
