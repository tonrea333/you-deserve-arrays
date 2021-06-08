const prompt = require('prompt-sync')({sigint: true});

//Prompt user for input

let enterFood = prompt("Enter your five favorite foods.")

enterFood = JSON.parse(enterFood);

//Display user output

console.log(enterFood[0]);
