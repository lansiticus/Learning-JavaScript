'use strict';

//initialize the game
let score = 20;
let highScore = 0;
let secretNumber;
const newNum = function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  return secretNumber;
};
newNum();

//set message
const setMsg = function (msg) {
  document.querySelector('.message').textContent = msg;
};

//nullify score and guesses
const nullifyScore = function () {
  document.querySelector('.score').textContent = null;
  document.querySelector('.guess').value = null;
};

//lose screen
const loseTheGame = function () {
  setMsg('You Lose!');
  nullifyScore();
  document.querySelector('body').style.backgroundColor = 'red';
  document.querySelector('.number').textContent = secretNumber;
};

//restart the game
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  setMsg('Start guessing!');
  document.querySelector('.score').textContent = score;
  document.querySelector('body').style.backgroundColor = '#333';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  newNum();
});

//score loss
const lowerScore = function () {
  score--;
  document.querySelector('.score').textContent = score;
};

//gameplay
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  //no guess
  if (!guess) {
    setMsg('No number!');
  }

  //correct guess
  else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'You guessed it!';
    highScore = score;
    document.querySelector('.highscore').textContent = highScore;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;
  }

  //wrong guess
  else if (guess !== secretNumber) {
    lowerScore();
    if (score > 0) {
      setMsg(guess > secretNumber ? 'Lower!' : 'Higher!');
    } else {
      loseTheGame();
    }
  }
});
