const prompt = require('prompt-sync')({sigint: true});


let officeSupplies = prompt("Enter five office supplies needed.")



officeSupplies = JSON.parse(officeSupplies);



if ( officeSupplies < 5) {
    
    console.log(officeSupplies[3])
}else { console.log}(officeSupplies);
