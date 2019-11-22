// NAV BAR SCROLL
var nav = document.getElementById('navBar');

window.addEventListener('scroll', function (e) {
    var nav = document.getElementById('navBar');
    if (document.documentElement.scrollTop || document.body.scrollTop > window.innerHeight) {
            nav.classList.add('header-scrolled');
            nav.classList.remove('header');
            document.querySelector('.header__logo').style.display = 'none';
            document.querySelector('.header-scrolled__logo').style.display = 'block';
            document.querySelector('.header__list').style.display = 'none';
            document.querySelector('.header-scrolled__list').style.display = 'block';
            document.querySelector('.social').style.top = '22px';


        } else {
            nav.classList.add('header');
            nav.classList.remove('header-scrolled');
            document.querySelector('.header__logo').style.display = 'block';
            document.querySelector('.header-scrolled__logo').style.display = 'none';
            document.querySelector('.header__list').style.display = 'block';
            document.querySelector('.header-scrolled__list').style.display = 'none';
            document.querySelector('.social').style.top = '30px';

        }
});