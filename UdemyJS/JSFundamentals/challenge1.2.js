let markWeight = 78;
let markHeight = 1.69;
let johnWeight = 92;
let johnHeight = 1.95;
let markBMI = markWeight / markHeight ** 2;
let johnBMI = johnWeight / johnHeight ** 2;

if (johnBMI > markBMI) {
    console.log(`John's BMI (${johnBMI}) is higher than Mark's BMI (${markBMI})`)
} else {
console.log(`Mark's BMI (${markBMI}) is higher than John's BMI(${johnBMI}).`)
};