//Calling out variables
var redValue;
var blueValue;
var yellowValue;
var greenValue;
var targetNumber;
var userNumber = 0;
var wins = 0;
var losses = 0;

//Funtion to reset and play again
function reset() {
  randomValues();
  userNumber = 0;
  $("#totalScore").html(userNumber);
}

//Function to generate my random numbers for target and crystals
function randomValues() {
  redValue = Math.floor((Math.random() * 12) + 1);
  blueValue = Math.floor((Math.random() * 12) + 1);
  yellowValue = Math.floor((Math.random() * 12) + 1);
  greenValue = Math.floor((Math.random() * 12) + 1);
  targetNumber = Math.floor((Math.random() * 120) + 19);
  //When numbers generate is only time target number needs to write
  $("#randomNumber").html(targetNumber);
}

//conditional statements for to generates wins and losses
function conditionals () {
  if (targetNumber === userNumber) { 
    wins++;
    $("#winnerLoser").html("<p>You Win!!</p>");
    $("#wins").html("wins: " + wins);
    reset();
  }
  else if (targetNumber < userNumber) {
    losses++;
    $("#winnerLoser").html("<p>You Lose!!</p>");
    $("#losses").html("losses: " + losses);
    reset();

  }
}
randomValues();

//Click functions for Crytstals
$("#redCrystal").on("click", function() {
  userNumber = userNumber + redValue;
  $("#totalScore").html(userNumber);
  console.log(userNumber);
  conditionals();
});

$("#blueCrystal").on("click", function() {
  userNumber = userNumber + blueValue;
  $("#totalScore").html(userNumber); 
  console.log(userNumber);
  conditionals();
});

$("#yellowCrystal").on("click", function() {
  userNumber = userNumber + yellowValue;
  $("#totalScore").html(userNumber); 
  console.log(userNumber);
  conditionals();
});

$("#greenCrystal").on("click", function() {
  userNumber = userNumber + blueValue;
  $("#totalScore").html(userNumber);
  console.log(userNumber);
  conditionals();
});






