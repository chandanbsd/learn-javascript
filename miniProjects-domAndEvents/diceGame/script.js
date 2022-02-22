'use strict';

// Elements Used
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
let score0El = document.querySelector('#score--0');
let score1El = document.getElementById('score--1');
let diceEl = document.querySelector('.dice');
let btnRoll = document.querySelector('.btn--roll');
let current0Ele = document.querySelector('#current--0');
let current1Ele = document.querySelector('#current--1');

// Initial state of the game
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');
const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;

// Rolling the dice
btnRoll.addEventListener('click', function () {
  let dice = Math.trunc(Math.random() * 6) + 1;
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${dice}.png`;

  if (dice !== 1) {
    currentScore += dice;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
  } else {
    currentScore = 0;
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    console.log(activePlayer);
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
  }
});
