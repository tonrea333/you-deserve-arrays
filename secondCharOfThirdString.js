const prompt = require('prompt-sync')({sigint: true});


//Prompt for user input

let userArray = prompt("Enter an array.")

userArray = JSON.parse(userArray);


//log second character of third item

console.log(userArray[2][1]);