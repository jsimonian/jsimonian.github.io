// var loadbg = function() {
//   $("div#bg").load(function() {
//     console.log("Loaded");
//     $("div#bg").animate({
//       opacity: 1
//     }, 4000, function() {})
//   });
// }
//
// $(document).ready(loadbg);

$("div#bg").bind("load", function () { $(this).fadeIn(2000); });
