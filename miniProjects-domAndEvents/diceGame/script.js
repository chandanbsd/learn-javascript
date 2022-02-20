'use strict';

// Elements Used
let score1Ele = document.querySelector('#score--0');
let score2Ele = document.getElementById('score--1');
let diceEle = document.querySelector('.dice');
let rollBtnEle = document.querySelector('.btn--roll');
let player0ScoreEle = document.querySelector('#current--0');

// Initial state of the game
score1Ele.textContent = 0;
score2Ele.textContent = 0;
diceEle.classList.add('hidden');
let score = 0;

// Rolling the dice
rollBtnEle.addEventListener('click', function () {
  let num = Math.trunc(Math.random() * 6) + 1;
  diceEle.classList.remove('hidden');
  diceEle.src = `dice-${num}.png`;

  if (num !== 1) {
    score += num;
    player0ScoreEle.textContent = score;
  } else {
  }
});
