
/************ SCROLLED NAV ***********/

let nav = document.getElementById("navBar");
let socialScrolled = document.querySelector(".social-scrolled");
let contactScrolled = document.querySelector(".contact-scrolled");
let topBtn = document.querySelector(".btn-top");

const navChange = window.addEventListener("scroll", function() {
  if (
    document.documentElement.scrollTop ||
    document.body.scrollTop > window.innerHeight
  ) {
    nav.classList.add("header-scrolled");
    nav.classList.remove("header");
    socialScrolled.style.display = "block";
    contactScrolled.style.display = "block";
    topBtn.style.display = "block";
  } else {
    nav.classList.add("header");
    nav.classList.remove("header-scrolled");
    socialScrolled.style.display = "none";
    contactScrolled.style.display = "none";
    topBtn.style.display = "none";
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
  $("html, body").animate(
    {
      scrollTop: $("#main").offset().top
    },
    600
  );
});

/***
 ********** Services header Parallax ***********
 ***/

const velocity = 0.09;

function update() {
  const pos = $(window).scrollTop();
  $(".services__header--bg").each(function() {
    const $element = $(this);
    // subtract some from the height b/c of the padding
    const height = $element.height() - 200;
    $(this).css(
      "backgroundPosition",
      "90% " + Math.round((height - pos) * velocity) + "px"
    );
  });
}

$(window).bind("scroll", update);

/***
 ********** HERO ROTATING TEXT ***********
 ***/

let words = document.querySelectorAll(".word");
words.forEach(function(word) {
  let letters = word.textContent.split("");
  word.textContent = "";
  letters.forEach(function(letter) {
    let span = document.createElement("span");
    span.textContent = letter;
    span.className = "letter";
    word.append(span);
  });
});
let currentWordIndex = 0;
let maxWordIndex = words.length - 1;
words[currentWordIndex].style.opacity = "1";
let rotateText = function() {
  let currentWord = words[currentWordIndex];
  let nextWord =
    currentWordIndex === maxWordIndex ? words[0] : words[currentWordIndex + 1];
  // rotate out letters of current word
  Array.from(currentWord.children).forEach(function(letter, i) {
    setTimeout(function() {
      letter.className = "letter out";
    }, i * 80);
  });
  // reveal and rotate in letters of next word
  nextWord.style.opacity = "1";
  Array.from(nextWord.children).forEach(function(letter, i) {
    letter.className = "letter behind";
    setTimeout(function() {
      letter.className = "letter in";
    }, 340 + i * 80);
  });
  currentWordIndex =
    currentWordIndex === maxWordIndex ? 0 : currentWordIndex + 1;
};
rotateText();
setInterval(rotateText, 4000);


