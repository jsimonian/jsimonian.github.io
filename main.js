$(document).ready(function() {
  $('div#bg').hide();
  $("<img/>").attr("src", "./images/skylinegrad.png").load(function() {
    $(this).remove();
    $("div#bg").fadeIn(5000);
  });
  // if ($('div#bg')[0].complete) {
  //   $('div#bg').fadeIn();
  // }
  // else {
  //   $('div#bg').load(function() {
  //     $('div#bg').fadeIn();
  //   });
  // }
});
