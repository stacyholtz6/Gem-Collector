$(document).ready(function () {

  // Variables
  var targetScore = "";
  var currentScore = "";
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

  // blank array for gem values?
  // var gemValues = [];


  // generate random number
  targetScore = randomTargetScore();
  // and then put random number into target score div
  $("#target-score").text(targetScore);
  console.log("target " + targetScore);

  // generate random numbers when a gem is clicked 1-12 hidden value
  blueNumber = randomGemNumber();
  blue.on("click", function () {
    $("#current-score").text(blueNumber);
    console.log("blue " + blueNumber);
  });

  greenNumber = randomGemNumber();
  green.on("click", function () {
    $("#current-score").text(greenNumber);
    console.log("green " + greenNumber);
  });

  pinkNumber = randomGemNumber();
  pink.on("click", function () {
    pinkNumber = Math.floor(Math.random() * 12) + 1;
    $("#current-score").text(pinkNumber);
    console.log("pink " + pinkNumber);
  });

  yellowNumber = randomGemNumber();
  yellow.on("click", function () {
    $("#current-score").text(yellowNumber);
    console.log("yellow " + yellowNumber);
  });


  // win if your score equals random number -- score checker
  if (currentScore === targetScore) {
    alert("You win!");
    wins++;
  }
  else if (currentScore >= targetScore) {
    alert("You lose!");
    losses++;
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

  };
  // HOW DO I ADD THEM ALL TOGETHER?????

  // change string numbers to integers
  // blueNumber = parseInt(blueNumber);
  // greenNumber = parseInt(greenNumber);
  // yellowNumber = parseInt(yellowNumber);
  // pinkNumber = parseInt(pinkNumber);

  // add the random numbers together

  // display number each time it is added to


  // create the random number 






});