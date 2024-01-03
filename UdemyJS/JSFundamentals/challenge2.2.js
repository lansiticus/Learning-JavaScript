const calcTip = function (bill) {
    let tipPerc = bill >=50 && bill <= 300 ? .15 : .2;
    let tip = bill*tipPerc;
    return tip;
}

const totalAmt = function(bill, tip) {
    let total = bill + tip;
    return total;
}

const bills = [125, 555, 44];

const tips = [
    calcTip(bills[0]),
    calcTip(bills[1]),
    calcTip(bills[2])
]

const totals = [
    totalAmt(bills[0], tips[0]),
    totalAmt(bills[1], tips[0]),
    totalAmt(bills[2], tips[0])
]

console.log(tips);
console.log(totals);