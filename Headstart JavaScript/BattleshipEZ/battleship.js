var randomLoc = Math.floor(Math.random() * 5);
var location1 = randomLoc;
var location2 = location1 + 1;
var location3 = location2 + 1;
var guess;
var hits = 0;
var guesses = 0;
var isSunk = false;

while(isSunk == false) {
    guess = prompt("Ready, Aim, Fire! (enter a number from 1-6):");
    if (guess < 0 || guess > 6) {
    prompt("You must enter a valid number (1-6):");
     } else {guesses = guesses + 1;
     }
    if (guess == location1 || guess == location2 || guess == location3) {
        hits = hits + 1;
        alert("Direct hit!");
     } else {alert("You missed!");
    }
    if (hits == 3) {
        isSunk = true; 
        alert("You sunk my battleship!");
    }
}

var stats = "You took " + guesses + " guesses to sink the battlship which means your hit percent was " + (3/guesses*100) + "%";

alert(stats);