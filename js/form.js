console.log("it works");
$(document).ready(function() {
  $(".form__submit").click(function(event) {
    event.preventDefault();
    console.log("clicked");
  });
});
