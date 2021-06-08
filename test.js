const prompt = require('prompt-sync')({sigint: true});

let array = prompt('Enter an array: ');

console.log(array);
console.log(typeof array);

array = JSON.parse(array);

console.log(array);
console.log(typeof array);