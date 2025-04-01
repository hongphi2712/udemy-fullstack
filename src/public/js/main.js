
$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav: true,
        navText: [
            '<i class="fa fa-angle-left" aria-hidden="true"></i>',
            '<i class="fa fa-angle-right" aria-hidden="true"></i>'
        ],
        navContainer: '.slider-home .custom-nav',
        responsive:{
            0:{
                items:2
            },
            575:{
                items:3
            },
            1000:{
                items:4
            }
        }
    })
  });
var menuResponsive = {
   init:function(){
       this.showMenu();
       this.hideOverlay();
       this.closeMenu()
   },
   showMenu:function(){
       let humburger =  document.querySelector('.header__menu .humburger');
       let nav = document.querySelector('.nav-mobile');
       let overlay = document.querySelector('.overlay');
       humburger.addEventListener('click',() => {
           nav.classList.toggle('show');
           overlay.classList.add('show');
       })
   },
   hideOverlay:function(){
      let nav = document.querySelector('.nav-mobile');
      let overlay = document.querySelector('.overlay');
      overlay.addEventListener('click',() => {
        nav.classList.remove('show');
        overlay.classList.remove('show');
    })
   },
   closeMenu:function(){
    let nav = document.querySelector('.nav-mobile');
    let overlay = document.querySelector('.overlay');
    let button = document.querySelector('.button-close');
    button.addEventListener('click',() => {
        nav.classList.remove('show');
        overlay.classList.remove('show');
    })
   }
}
menuResponsive.init()