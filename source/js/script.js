var navMain = document.querySelector('.main-nav--nojs');
var navToggle = document.querySelector('.main-nav__toggle');
var bgMap = document.querySelector('.address__bg-map');
var iframe = document.querySelector('.address__iframe');

navMain.classList.remove('main-nav--nojs');
bgMap.classList.remove('address__bg-map--nojs');

iframe.classList.add('address__iframe--json');

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
  }
});
