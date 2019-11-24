// NAV BAR SCROLL
var nav = document.getElementById('navBar');
var logo = document.querySelector('.header__logo');
var logoScrolled = document.querySelector('.header-scrolled__logo');
var list = document.querySelector('.header__list');
var listScrolled = document.querySelector('.header-scrolled__list');
var social = document.querySelector('.social');
var topBtn = document.querySelector('.btn-top');


window.addEventListener('scroll', function (e) {
    if (document.documentElement.scrollTop || document.body.scrollTop > window.innerHeight) {
            nav.classList.add('header-scrolled');
            nav.classList.remove('header');
            logo.style.display = 'none';
            logoScrolled.style.display = 'block';
            list.style.display = 'none';
            listScrolled.style.display = 'block';
            social.style.top = '22px';
            topBtn.style.display = 'block';



        } else {
            nav.classList.add('header');
            nav.classList.remove('header-scrolled');
            logo.style.display = 'block';
            logoScrolled.style.display = 'none';
            list.style.display = 'block';
            listScrolled.style.display = 'none';
            social.style.top = '30px';
            topBtn.style.display = 'none';
        }
});


$(".header").on("click", function(e) {
    if (this.hash !== "") {
      e.preventDefault();
  
      const hash = this.hash;
  
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top
        },
        650
      );
    }
  });
  