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


$(".header a").on("click", function(e) {
  if (this.hash !== "") {
    e.preventDefault();

    const hash = this.hash;

    $("html, body").animate(
      {
        scrollTop: $(hash).offset().top
      },
      750
    );
  }
});

/*** 
********** click to scroll to top button ***********
***/


$("#btnTop").click(function() {
  $('html, body').animate({
      scrollTop: $("#main").offset().top
  }, 600);
});


/*** 
********** Services header Parallax ***********
***/

var velocity = 0.2;

function update(){ 
var pos = $(window).scrollTop(); 
$('.services__header--bg').each(function() { 
    var $element = $(this);
    // subtract some from the height b/c of the padding
    var height = $element.height()-30;
    $(this).css('backgroundPosition', '90% ' + Math.round((height - pos) * velocity) +  'px'); 
   }); 
   };

 $(window).bind('scroll', update);



 /*** 
********** HERO ROTATING TEXT ***********
***/

var words = document.querySelectorAll(".word");
words.forEach(function (word) {
    var letters = word.textContent.split("");
    word.textContent = "";
    letters.forEach(function (letter) {
        var span = document.createElement("span");
        span.textContent = letter;
        span.className = "letter";
        word.append(span);
    });
});
var currentWordIndex = 0;
var maxWordIndex = words.length - 1;
words[currentWordIndex].style.opacity = "1";
var rotateText = function () {
    var currentWord = words[currentWordIndex];
    var nextWord = currentWordIndex === maxWordIndex ? words[0] : words[currentWordIndex + 1];
    // rotate out letters of current word
    Array.from(currentWord.children).forEach(function (letter, i) {
        setTimeout(function () {
            letter.className = "letter out";
        }, i * 80);
    });
    // reveal and rotate in letters of next word
    nextWord.style.opacity = "1";
    Array.from(nextWord.children).forEach(function (letter, i) {
        letter.className = "letter behind";
        setTimeout(function () {
            letter.className = "letter in";
        }, 340 + i * 80);
    });
    currentWordIndex =
        currentWordIndex === maxWordIndex ? 0 : currentWordIndex + 1;
};
rotateText();
setInterval(rotateText, 4000);