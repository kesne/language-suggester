$(document).ready(function () {
  $("button#start").click(function() {
    $("button#start").toggle("slow");
    $("div#survey").delay(600).slideToggle(1000);
  });
})
