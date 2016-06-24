var roll = require("./dice.js");

var dieSides = 20;
var numberOfDice = 1;

console.log("You rolled a " + dieSides + "  sided die " + numberOfDice + " time(s), and got a " + roll(dieSides, numberOfDice));
