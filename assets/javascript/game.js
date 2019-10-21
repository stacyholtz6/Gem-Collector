$(document).ready(function () {

  // Variables
  var targetScore = "";
  var currentScore = 0;
  var wins = 0;
  var losses = 0;
  var blueNumber = "";
  var greenNumber = "";
  var pinkNumber = "";
  var yellowNumber = "";

  var blue = $("#blue");
  var green = $("#green");
  var pink = $("#pink");
  var yellow = $("#yellow");


  // generate random number for target number
  targetScore = randomTargetScore();
  // and then put random number into target score div
  $("#target-score").text(targetScore);
  console.log("target " + targetScore);

  // generate random gem numbers when a gem is clicked 1-12 hidden value
  blueNumber = randomGemNumber();
  blue.on("click", function () {
    currentScore = currentScore + blueNumber;
    $("#current-score").text(currentScore);
    win();
    console.log("blue " + blueNumber);
  });

  greenNumber = randomGemNumber();
  green.on("click", function () {
    currentScore = currentScore + greenNumber;
    $("#current-score").text(currentScore);
    win();
    console.log("green " + greenNumber);
  });

  pinkNumber = randomGemNumber();
  pink.on("click", function () {
    currentScore = currentScore + pinkNumber;
    $("#current-score").text(currentScore);
    win();
    console.log("pink " + pinkNumber);
  });

  yellowNumber = randomGemNumber();
  yellow.on("click", function () {
    currentScore = currentScore + yellowNumber;
    $("#current-score").text(currentScore);
    win();
    console.log("yellow " + yellowNumber);

  });

  function win() {
    if (currentScore === targetScore) {
      wins++;
      $("#wins").text(wins);
      if (confirm("You won. Would you like to play again?")) {
        reset();
      };
      console.log("wins " + wins);
    }
    else if (currentScore >= targetScore) {
      losses++;
      $("#losses").text(losses);
      if (confirm("You lost. Would you like to play again?")) {
        reset();
      }
      console.log("losses " + losses);
    }
  }

  // function for random numbers
  function randomGemNumber() {
    return Math.floor(Math.random() * 12) + 1;
  };

  function randomTargetScore() {
    return Math.floor(Math.random() * 119) + 19;
  };

  // reset function
  function reset() {
    currentScore = 0;
    targetScore = randomTargetScore();
    blueNumber = randomGemNumber();
    greenNumber = randomGemNumber();
    pinkNumber = randomGemNumber();
    yellowNumber = randomGemNumber();
    $("#current-score").text(currentScore);
    $("#target-score").text(targetScore);
  };






});