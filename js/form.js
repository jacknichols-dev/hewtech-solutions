// console.log("it works");
$(document).ready(function() {
  $(".form__submit").click(function(event) {
    console.log("clicked");

    let service = $('.service').val()
    let name = $('.name').val()
    let email = $('.email').val()
    let message = $('.message').val()
  });
});
