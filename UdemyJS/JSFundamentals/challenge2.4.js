const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

const calcTip = function (bill) {
  let tipPerc = bill >= 50 && bill <= 300 ? 0.15 : 0.2;
  let tip = bill * tipPerc;
  return tip;
};
const totalAmt = function (bill, tip) {
  let total = bill + tip;
  return total;
};

for (let i = 0; i < bills.length; i++) {
  tips[i] = calcTip(bills[i]);
  totals[i] = totalAmt(bills[i], tips[i]);
}

const calcAverage = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum / arr.length;
};

console.log(`Average bill: $${calcAverage(bills)}`);
console.log(`Average tip: $${calcAverage(tips)}`);
console.log(`Average total: $${calcAverage(totals)}`);

console.log(bills, tips, totals);
