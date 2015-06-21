$(document).ready(function() {
  $('div#bg').hide();
  $("#social-links").css("opacity", "0");
  $("#social-links").css("margin", "50px");
  $("div#bg img").load(function() {
    $("div#bg").fadeIn(3000);
    $("#social-links").animate({
      margin: 0,
      opacity: 1
    }, 3000, function() {});
  });
});
