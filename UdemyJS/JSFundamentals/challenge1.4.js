let bill = 275;
let tipPerc = bill >=50 && bill <= 300 ? .15 : .2;
let tip = bill*tipPerc;
let total = bill + tip; 

console.log(`The bill was ${bill}, the tip was ${tip} and the total was ${total}.`);

bill = 40;
tipPerc = bill >=50 && bill <= 300 ? .15 : .2;
tip = bill*tipPerc;
total = bill + tip; 

console.log(`The bill was ${bill}, the tip was ${tip} and the total was ${total}.`);

bill = 430; 
tipPerc = bill >=50 && bill <= 300 ? .15 : .2;
tip = bill*tipPerc;
total = bill + tip; 

console.log(`The bill was ${bill}, the tip was ${tip} and the total was ${total}.`);
