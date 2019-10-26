//Scoreboard's indexes represent languages in this order:
// ruby, js, python, go, java, c#, c++
var scoreboard = [0, 0, 0, 0, 0, 0, 0];

function scoreCount(inputCheck) {
  if (inputCheck === "ruby") {
    scoreboard[0] += 1;
  } else if (inputCheck === "javascript") {
    scoreboard[1] += 1;
  } else if (inputCheck === "python") {
    scoreboard[2] += 1;
  } else if (inputCheck === "go") {
    scoreboard[3] += 1;
  } else if (inputCheck === "java") {
    scoreboard[4] += 1;
  } else if (inputCheck === "c#") {
    scoreboard[5] += 1;
  } else if (inputCheck === "c++") {
    scoreboard[6] += 1;
  } else {
    console.log("Error - scoreCount input does not match any languages.")
  }
}

function indexInterpreter() {

}

function scoreCheck() {
  alert(Math.max(...scoreboard));
  var winner1 = scoreboard.indexOf(Math.max(...scoreboard));
  scoreboard[winner] = 0;
  var winner2 = scoreboard.indexOf(Math.max(...scoreboard));
}

$(document).ready(function () {

  $("button#start").click(function() {
    $("button#start").toggle("slow");
    $("div#survey").delay(600).slideToggle(1000);
  });

  $("form#userInfo").submit(function() {
    event.preventDefault();

    var projectInput = $("input:radio[name=project]:checked").val();
    var planInput = $("input:radio[name=plan]:checked").val();
    var animalInput = $("input:radio[name=animal]:checked").val();
    var drinkInput = $("input:radio[name=drink]:checked").val();
    var musicInput = $("input:radio[name=music]:checked").val();
    var gemInput = $("input:radio[name=gem]:checked").val();

    scoreCount(projectInput);
    scoreCount(planInput);
    scoreCount(animalInput);
    scoreCount(drinkInput);
    scoreCount(musicInput);
    scoreCount(gemInput);

    finalResult();
  });

});
