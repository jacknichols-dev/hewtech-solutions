var nav = document.getElementById('navBar');

window.addEventListener('scroll', function (e) {
    var nav = document.getElementById('navBar');
    if (document.documentElement.scrollTop || document.body.scrollTop > window.innerHeight) {
            nav.classList.add('header-scrolled', 'header-scrolled__link');
            nav.classList.remove('header', 'header__link');
        } else {
            nav.classList.add('header', 'header__link');
            nav.classList.remove('header-scrolled', 'header-scrolled__link');
        }
});