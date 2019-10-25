var rubyCount = 0;
var javascriptCount = 0;
var pythonCount = 0;
var goCount = 0;
var javaCount = 0;
var csharpCount = 0;
var cplusplusCount = 0;

function scoreCount(inputCheck) {
  if (inputCheck === "ruby") {
    rubyCount += 1;
  } else if (inputCheck === "javascript") {
    javascriptCount += 1;
  } else if (inputCheck === "python") {
    pythonCount += 1;
  } else if (inputCheck === "go") {
    goCount += 1;
  } else if (inputCheck === "java") {
    javaCount += 1;
  } else if (inputCheck === "c#") {
    csharpCount += 1;
  } else if (inputCheck === "c++") {
    cplusplusCount += 1;
  } else {
    console.log("Error - scoreCount input does not match to any languages.")
  }
}

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
