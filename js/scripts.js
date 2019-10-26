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
    console.log("Error in scoreCount - input does not match any languages.");
  }
}

function indexInterpreter(indexNumber) {
  if (indexNumber === 0) {
    return "Ruby";
  } else if (indexNumber === 1) {
    return "JavaScript";
  } else if (indexNumber === 2) {
    return "Python";
  } else if (indexNumber === 3) {
    return "Go";
  } else if (indexNumber === 4) {
    return "Java";
  } else if (indexNumber === 5) {
    return "C#";
  } else if (indexNumber === 6) {
    return "C++";
  } else {
    console.log("Error in indexInterpreter - indexNumber not in array.");
  }
}

function finalResult() {
  alert(Math.max(...scoreboard));
  var winnerIndex = scoreboard.indexOf(Math.max(...scoreboard));
  scoreboard[winnerIndex] = 0;
  var runnerUpIndex = scoreboard.indexOf(Math.max(...scoreboard));
  console.log(indexInterpreter(winnerIndex));
  console.log(indexInterpreter(runnerUpIndex));
}

//Front-End Logic
$(document).ready(function () {

  $("button#start").click(function() {
    $("button#start").toggle(400);
    $("div#survey").delay(400).slideToggle(1000);
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

    $("span.nameInsert").text($("input#userName").val());
    $("div#survey").slideToggle(1000);
    $("div#result").delay(1000).slideToggle(1000);
  });

});
