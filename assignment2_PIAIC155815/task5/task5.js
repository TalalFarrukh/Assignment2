var secretnum = 7;

var userguess = prompt("Guess a number from 1 to 10");

if (userguess == secretnum)
    alert("Bingo! Correct answer");
else if (userguess == secretnum + 1)
    alert("Close enough to the correct answer");