const calcAverage = (score1, score2, score3) => (score1 + score2 + score3)/3;

let doplphinsAvg = calcAverage(44, 23, 71);
let koalasAvg = calcAverage(65, 54, 49);

function checkWinner(doplphinsAvg, koalasAvg){
    if (doplphinsAvg > koalasAvg && doplphinsAvg >= koalasAvg*2) {
        console.log(`Dolphins win! (${doplphinsAvg} vs. ${koalasAvg})`)
    } else if (koalasAvg > doplphinsAvg && koalasAvg >= doplphinsAvg*2) {
        console.log(`Koalas win! (${koalasAvg} vs. ${doplphinsAvg})`)
    } else {console.log(`No winner this time!`)}
}

checkWinner(doplphinsAvg, koalasAvg);

doplphinsAvg = calcAverage(85, 54, 41);
koalasAvg = calcAverage(23, 34, 27);

checkWinner(doplphinsAvg, koalasAvg);