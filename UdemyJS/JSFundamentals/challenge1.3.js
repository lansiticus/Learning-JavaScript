let dScore1 = 96;
let dScore2 = 108;
let dScore3 = 89;

let kScore1 = 88;
let kScore2 = 91;
let kScore3 = 110;

let dAvg = (dScore1 + dScore2 + dScore3)/3;
let kAvg = (kScore1 + kScore2 + kScore3)/3;

if(dAvg > kAvg) {
    console.log("Dolphins win!")
} else if (kAvg > dAvg) {
    console.log("Koalas win!")
} else {
    console.log("It's a draw!")
}

//Bonus 1

dScore1 = 97;
dScore2 = 112;
dScore3 = 101;

kScore1 = 109;
kScore2 = 95;
kScore3 = 123;

dAvg = (dScore1 + dScore2 + dScore3)/3;
kAvg = (kScore1 + kScore2 + kScore3)/3;

if(dAvg > kAvg && dAvg >= 100) {
    console.log("Dolphins win!")
} else if (kAvg > dAvg && kAvg >= 100) {
    console.log("Koalas win!")
} else if (dAvg >= 100 && kAvg >= 100){
    console.log("It's a draw!")
} else {
    console.log("No winner this year!")
}

//Bonus 2

dScore1 = 97;
dScore2 = 112;
dScore3 = 101;

kScore1 = 109;
kScore2 = 95;
kScore3 = 106;

dAvg = (dScore1 + dScore2 + dScore3)/3;
kAvg = (kScore1 + kScore2 + kScore3)/3;

if(dAvg > kAvg && dAvg >= 100) {
    console.log("Dolphins win!")
} else if (kAvg > dAvg && kAvg >= 100) {
    console.log("Koalas win!")
} else if (dAvg >= 100 && kAvg >= 100){
    console.log("It's a draw!")
} else {
    console.log("No winner this year!")
}