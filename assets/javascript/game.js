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
  var score = $("#current-score");
  var target = $("#target-score");

  var pop = new Audio("assets/sounds/bubblePop.mp3");

  $(".gemImage").on("click", function () {
    pop.play();
  })

  // generate random number for target number
  targetScore = randomTargetScore();
  // and then put random number into target score div
  target.text(targetScore);
  console.log("target " + targetScore);


  blueNumber = randomGemNumber();
  blue.on("click", blueGem);
  greenNumber = randomGemNumber();
  green.on("click", greenGem);
  pinkNumber = randomGemNumber();
  pink.on("click", pinkGem);
  yellowNumber = randomGemNumber();
  yellow.on("click", yellowGem);

  // functions for gem number tracking
  function blueGem() {
    currentScore = currentScore + blueNumber;
    score.text(currentScore);
    win();
    console.log("blue " + blueNumber);
  }

  function greenGem() {
    currentScore = currentScore + greenNumber;
    score.text(currentScore);
    win();
    console.log("green " + greenNumber);
  }

  function pinkGem() {
    currentScore = currentScore + pinkNumber;
    score.text(currentScore);
    win();
    console.log("pink " + pinkNumber);
  }

  function yellowGem() {
    currentScore = currentScore + yellowNumber;
    score.text(currentScore);

    win();
    console.log("yellow " + yellowNumber);
  }

  function sound() {

  }

  // function for win/loss tracking
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

  // function for random gem numbers
  function randomGemNumber() {
    return Math.floor(Math.random() * 12) + 1;
  };

  // function for random target score
  function randomTargetScore() {
    return Math.floor(Math.random() * 102) + 19;
  };

  // reset function
  function reset() {
    currentScore = 0;
    targetScore = randomTargetScore();
    blueNumber = randomGemNumber();
    greenNumber = randomGemNumber();
    pinkNumber = randomGemNumber();
    yellowNumber = randomGemNumber();
    score.text(currentScore);
    target.text(targetScore);
  };

});


// blue.on("click", function () {
  //   currentScore = currentScore + blueNumber;
  //   $("#current-score").text(currentScore);
  //   win();
  //   console.log("blue " + blueNumber);
  // });

  // greenNumber = randomGemNumber();
  // green.on("click", function () {
  //   currentScore = currentScore + greenNumber;
  //   $("#current-score").text(currentScore);
  //   win();
  //   console.log("green " + greenNumber);
  // });

  // pinkNumber = randomGemNumber();
  // pink.on("click", function () {
  //   currentScore = currentScore + pinkNumber;
  //   $("#current-score").text(currentScore);
  //   win();
  //   console.log("pink " + pinkNumber);
  // });

  // yellowNumber = randomGemNumber();
  // yellow.on("click", function () {
  //   currentScore = currentScore + yellowNumber;
  //   $("#current-score").text(currentScore);
  //   win();
  //   console.log("yellow " + yellowNumber);
