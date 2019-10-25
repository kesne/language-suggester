$(document).ready(function () {

  $("button#start").click(function() {
    $("button#start").toggle("slow");
    $("div#survey").delay(600).slideToggle(1000);
  });

  $("form#userInfo").submit(function() {
    
    var projectInput = $("input:radio[name=project]:checked").val();
    var planInput = $("input:radio[name=plan]:checked").val();
    var animalInput = $("input:radio[name=animal]:checked").val();
    var drinkInput = $("input:radio[name=drink]:checked").val();
    var musicInput = $("input:radio[name=music]:checked").val();
    var gemInput = $("input:radio[name=gem]:checked").val();

    console.log(projectInput, planInput, animalInput, drinkInput, musicInput, gemInput);

    event.preventDefault();

  });

});
