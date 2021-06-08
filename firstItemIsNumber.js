const prompt = require('prompt-sync')({sigint: true});

//Prompt user for input

let randomBoolean = prompt("Enter a series of random boolean.")


randomBoolean = JSON.parse(randomBoolean);

//If statement to set condition to produce desired result.

if (randomBoolean[0] >= 0 ) {
console.log("The is boolean you entered was a number.")
}else {"Thank you for your entry."}
