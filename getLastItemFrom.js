const prompt = require('prompt-sync')({sigint: true});

//Prompt user for input

let enterPet = prompt ("Enter your five favorite pets.")

enterPet = JSON.parse(enterPet);

//display 4 itme

console.log(enterPet[4])

