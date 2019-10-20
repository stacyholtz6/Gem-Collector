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


  // generate random numbers when a gem is clicked 1-12 hidden value
  $("#blue").on("click", function () {
    blueNumber = Math.floor(Math.random() * 12) + 1;
    $("#current-score").prepend(currentScore);
    console.log("blue " + blueNumber);
  });

  $("#green").on("click", function () {
    greenNumber = Math.floor(Math.random() * 12) + 1;
    $("#current-score").prepend(currentScore);
    console.log("green " + greenNumber);
  });

  $("#pink").on("click", function () {
    pinkNumber = Math.floor(Math.random() * 12) + 1;
    $("#current-score").prepend(currentScore);
    console.log("pink " + pinkNumber);
  });

  $("#yellow").on("click", function () {
    yellowNumber = Math.floor(Math.random() * 12) + 1;
    $("#current-score").prepend(currentScore);
    console.log("yellow " + yellowNumber);
  });

  // generate random number when the game starts 19-120 
  $("#random-button").on("click", function () {
    // create the random number 
    targetScore = Math.floor(Math.random() * 119) + 19;
    // and then put random number into target score div
    $("#target-score").prepend(targetScore);
    console.log("target " + targetScore);
  })



  // add random numbers when a gem is clicked - 

  // win if your score equals random number -- score checker


  // lose if your score is not equal to random number - score checcker

  // values are hidden until you click on it

  // values change when game restarts

  // reset function






});