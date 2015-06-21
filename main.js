$(document).ready(function() {
  $("div#bg").css("opacity", "0");
  $("#social-links").css("opacity", "0");
  $("#social-links").css("margin", "50px");

  $("div#bg img").load(function() {
    $("div#bg").animate({
      opacity: 1
    }, 3000, function() {});

  $("#social-links").animate({
      margin: 0,
      opacity: 1
    }, 3000, function() {});

  });
});
