const prompt = require('prompt-sync')({sigint: true});


//Input statement for user

let enterNumber = prompt("Enter a few boolean numbers?")

enterNumber = JSON.parse(enterNumber);

//Output of users input when condition is satisfied or not.

if (enterNumber[10]){
    console.log("Number entered is at least 10.")
}else {"You did not enter enough numbers."}