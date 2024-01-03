'use strict';

//functions
function describeCountry(country, population, capitalCity) {
    console.log(`${country} has ${population} people and its capital is ${capitalCity}`)
};

describeCountry("The USA", 33000000, "Washington DC");
describeCountry("South Korea", 50000000, "Seoul");
describeCountry("The UK", 67000000, "London");

//function declarations vs expressions
function percentageOfWorld1(population) {
    return (population/7900000000)*100;
}

console.log('China\'s percent of the world population is', percentageOfWorld1(1441000000));

const percentageOfWorld2 = function (population) {
    return (population/7900000000)*100;
}

console.log('USA\'s percent of the world population is', percentageOfWorld2(330000000));

const percentageOfWorld3 = population => (population/7900000000)*100;

console.log('South Korea\'s percent of the world population is', percentageOfWorld2(50000000));

const describePopulation = function(country, population){
    return `${country} has a population of ${population}, which is ${percentageOfWorld2(population)} of the world population.` 
}

console.log(describePopulation("The UK", 67000000));

//Arrays
let populations = [1441000000, 330000000, 67000000, 50000000];
console.log(populations.length === 4);

let percentages = [
    percentageOfWorld1(populations[0]), 
    percentageOfWorld1(populations[1]), 
    percentageOfWorld1(populations[2]), 
    percentageOfWorld1(populations[3])]

    console.log(percentages)

//Basic Array Methods
let neighbors = ['Canada', 'Mexico'];
neighbors.push('Utopia');
console.log(neighbors);

neighbors.pop();
console.log(neighbors);

if (!neighbors.includes('Germany')){
console.log('Probably not a central European country');
};

neighbors[neighbors.indexOf('Mexico')] = 'Republic of Mexico';
console.log(neighbors);

const myCountry = {
    country: "United States",
    capital: "Washington DC",
    language: "English",
    population: 330000000,
    neighbors: ["Canada", "Mexico"],
    describe: function(){
        return `The ${this.country} has ${this.population} ${this.language} speaking people, ${this.neighbors.length} neigboring countries and a capital called ${this.capital}`
    },
    checkIsIsland: function(){
        return this.neighbors.length === 0 ? true : false;
    }
};

console.log(myCountry);

//dot and bracket notation

console.log(`The ${myCountry.country} has ${myCountry.population} ${myCountry.language} speaking people, ${myCountry.neighbors.length} neigboring countries and a capital called ${myCountry.capital}`);

console.log(myCountry.population - 2000000);
console.log(myCountry['population'] + 2000000);

//Object methods
console.log(myCountry.describe());
console.log(myCountry.checkIsIsland());

//the for loop
for (let x = 1; x <= 50; x++) {
    console.log(`Voter ${x} is currently voting!`)
}

//looping arrays, breaking and continuing
let percentages2 = [];
for (let i = 0; i < populations.length; i++) {
    percentages2[i] = percentageOfWorld1(populations[i])
}

console.log(percentages, percentages2)

//looping backwards, loops in loops
const listOfNeighbors = [['Canada', 'Mexico'], ['Spain'], ['Norway', 'Sweden', 'Russia']];

for (let i = 0; i < listOfNeighbors.length; i++){
    for (let j = 0; j < listOfNeighbors[i].length; j++){
        console.log(`Country #${i+1} - Neighbor # ${j+1}: ${listOfNeighbors[i][j]}`)
    }
};

// while loop
let percentages3 = [];
let x = 0;

while (x < populations.length) {
    percentages3[x] = percentageOfWorld1(populations[x]);
    x++;
}

console.log(percentages, percentages2, percentages3);