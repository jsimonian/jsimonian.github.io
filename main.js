$(document).ready(function() {
  $('div#bg').hide();
  $(".social-links").css("opacity", "0");
  $(".social-links").css("margin", "50px");
  $("<img/>").attr("src", "./images/skylinegrad.png").load(function() { // make a "dummy" element to get access to the .load() event for the background image
    $(this).remove();
    $("div#bg").fadeIn(3000);

    $(".social-links").animate({
      margin: 0,
      opacity: 1
    }, 3000, function() {});
  });
});
