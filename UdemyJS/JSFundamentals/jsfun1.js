'use strict';

//Values and Variables
const country = 'United States of America';
const continent = 'North America';
let population = 300000000;
console.log(
  'I live in the',
  country,
  'which is located in',
  continent,
  'and has a population of',
  population,
  '.'
);

//Data Types
const isIsland = false;
//let, const, var
const language = 'english';
console.log(isIsland, population, country, language);

//Basic Operators
console.log(population + 1);

const description = `${country} is in ${continent} and its ${population} people speak ${language}`;
console.log(description);

//if/else statements
const avgPop = 33000000;
const higherPop = population - avgPop;
const lowerPop = avgPop - population;

if (population > avgPop) {
  console.log(
    `Your country\'s population is ${higherPop} higher than average.`
  );
} else {
  console.log(`Your country\'s population is ${lowerPop}lower than average.`);
}

//equality operators
// let numNeighbors = prompt("How many neigbour countries does your country have?");

// if (Number(numNeighbors) === 1) {
//     console.log('Only 1 border!')
// } else if (Number(numNeighbors) > 1) {
//     console.log('More than 1 border!')
// } else {
//     console.log('No borders.')
// }

//logical operators
// population = 5000000;
if (language === 'English' && population < 50000000 && !isIsland) {
  console.log(`You should live in ${country}!`);
} else {
  console.log(`${country} does not meet your criteria.`);
}

//Switch statement
switch (language) {
  case 'chinese':
  case 'mandarin':
    console.log('MOST number of native speakers!');
    break;
  case 'spanish':
    console.log('2nd place in number of native speakers');
    break;
  case 'english':
    console.log('3rd place');
    break;
  case 'hindi':
    console.log('Number 4');
    break;
  case 'arabic':
    console.log('5th most spoken language');
    break;
  default:
    console.log('Great language too :D');
}

// Ternary Operator
population > 33000000
  ? console.log(`${country} population is above average.`)
  : console.log(`${country} population is below average`);
