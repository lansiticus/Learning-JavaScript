'use strict';

//selecting elements
const player0E1 = document.querySelector('.player--0');
const player1E1 = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.querySelector('#current--0');
const current1El = document.querySelector('#current--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;
let playing = true;

//starting conditions
const gameInit = function () {
  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;
  diceEl.classList.remove('hidden');
  currentScore = 0;
  activePlayer = 0;
  scores[0] = 0;
  scores[1] = 0;
  player0E1.classList.remove('player--winner');
  player1E1.classList.remove('player--winner');
  player0E1.classList.add('player--active');
  player1E1.classList.remove('player--active');
  playing = true;
};
//switch player function

gameInit();

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0E1.classList.toggle('player--active');
  player1E1.classList.toggle('player--active');
};

//gameplay
btnRoll.addEventListener('click', function () {
  if (playing) {
    const dice = Math.trunc(Math.random() * 6) + 1;
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;

    if (dice !== 1) {
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      switchPlayer();
    }
  }
});

btnHold.addEventListener('click', function () {
  if (playing) {
    //add current score to total score
    scores[activePlayer] += currentScore;
    score0El.textContent = scores[0];
    score1El.textContent = scores[1];

    //if score >== 100 ? switchPlayer : you win!
    if (scores[activePlayer] >= 100) {
      playing = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('active--player');
      diceEl.classList.add('hidden');
    } else {
      switchPlayer();
    }
  }
});

btnNew.addEventListener('click', gameInit);
