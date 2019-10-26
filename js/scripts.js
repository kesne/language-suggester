//Scoreboard's indexes represent languages in this order:
// ruby, js, python, go, java, c#, c++
var scoreboard = [0, 0, 0, 0, 0, 0, 0];
var winner = "";
var runnerUp = "";

function scoreCount(questionValue) {
  if (questionValue === "ruby") {
    scoreboard[0] += 1;
  } else if (questionValue === "javascript") {
    scoreboard[1] += 1;
  } else if (questionValue === "python") {
    scoreboard[2] += 1;
  } else if (questionValue === "go") {
    scoreboard[3] += 1;
  } else if (questionValue === "java") {
    scoreboard[4] += 1;
  } else if (questionValue === "c#") {
    scoreboard[5] += 1;
  } else if (questionValue === "c++") {
    scoreboard[6] += 1;
  } else {
    console.log("Error in scoreCount - questionValue is not a language.");
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
    //using # (hash) creates issues with image retrieval later, ♯ (sharp) does not
    return "C♯";
  } else if (indexNumber === 6) {
    return "C++";
  } else {
    console.log("Error in indexInterpreter - indexNumber not in array.");
  }
}

function finalResult() {
  var winnerIndex = scoreboard.indexOf(Math.max(...scoreboard));
  scoreboard[winnerIndex] = 0;
  var runnerUpIndex = scoreboard.indexOf(Math.max(...scoreboard));
  winner = indexInterpreter(winnerIndex);
  runnerUp = indexInterpreter(runnerUpIndex);
}

function wikiURL(languageName) {
  var wikiLink = "https://en.wikipedia.org/wiki/"
  if (languageName === "C♯") {
    wikiLink += "C_Sharp_(programming_language)";
  } else if (languageName === "JavaScript" || languageName === "C++") {
    wikiLink += languageName;
  } else {
    wikiLink = wikiLink + languageName + "_(programming_language)"
  }
  return wikiLink;
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

    //fill result panels
    $("span.nameInsert").text($("input#userName").val());
    $("#option1 span").text(winner);
    $("#option1 img").attr("src", "img/" + winner.toLowerCase() + ".png");
    $("#option1 a").attr("href", wikiURL(winner));
    $("#option2 span").text(runnerUp);
    $("#option2 img").attr("src", "img/" + runnerUp.toLowerCase() + ".png");
    $("#option2 a").attr("href", wikiURL(runnerUp));

    //reveal result panels
    $("div#survey").slideToggle(1000);
    $("div#result").delay(1000).slideToggle(1000);
  });

});
