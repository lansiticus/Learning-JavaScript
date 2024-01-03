const jDogs = [3, 5, 2, 12, 7];
const kDogs = [4, 1, 15, 8, 3];

const checkDogs = function (dogsJulia, dogsKate) {
  const jDogsNew = dogsJulia.slice(1, -2);
  const kDogs = dogsKate;

  const dogsAge = function (dogs) {
    dogs.forEach(function (age, i) {
      if (age > 2) {
        console.log(`Dog number ${i + 1} is an adult, and is ${age} years old`);
      } else {
        console.log(`Dog number ${i + 1} is still a puppy`);
      }
    });
  };

  dogsAge(jDogsNew);
  dogsAge(kDogs);
};

checkDogs(jDogs, kDogs);

console.log('----ROUND TWO----');
const jDogs2 = [9, 16, 6, 8, 3];
const kDogs2 = [10, 5, 6, 1, 4];

checkDogs(jDogs2, kDogs2);

const dogAges = [5, 2, 4, 1, 15, 8, 3];
const dogAges2 = [16, 6, 10, 5, 6, 1, 4];

const calcAverageHumanAge = ages =>
  ages
    .map(age => (age <= 2 ? age * 2 : age * 4 + 16))
    .filter(age => age > 17)
    .reduce((acc, age, i, arr) => acc + age / arr.length, 0);

console.log(calcAverageHumanAge(dogAges));
console.log(calcAverageHumanAge(dogAges2));
