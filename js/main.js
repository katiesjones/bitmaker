// var navigation = document.getElementById('navigation');
//
// document.getElementById('navexpand').addEventListener('click', function() {
//   navigation.classList.toggle('hide');
// })

var hamburger = $('.hamburger');
var nav = $('.navbar');


  hamburger.click(() => {
    nav.slideToggle();
  });

$('.recipeImg').fluidbox();

var scroll = new SmoothScroll('a[href*="#"]');
