"use strict";
// selecting elements
const diceEl = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");
const player0 = document.querySelector(".player--0");
const player1 = document.querySelector(".player--1");
const score0 = document.getElementById("score--0");
const score1 = document.getElementById("score--1");
const currentScore0El = document.getElementById("current--0");
const currentScore1El = document.getElementById("current--1");
// starting conditions
let currentScore;
let totalScore;
let activePlayer;
let playing;
const switchPlayer = () => {
    document.getElementById(`current--${activePlayer}`).textContent = String(0);
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0.classList.toggle("player--active");
    player1.classList.toggle("player--active");
};
// roll dice functionality
const rollDice = () => {
    if (playing) {
        // 1. Generate randome dice roll
        const dice = Math.trunc(Math.random() * 6) + 1;
        // 2. display dice roll
        diceEl.classList.remove("hidden");
        diceEl.src = `Images/dice-${dice}.png`;
        // 3. if it is 1 then change the player else add dice roll
        if (dice !== 1) {
            currentScore += dice;
            document.getElementById(`current--${activePlayer}`).textContent = String(currentScore);
        }
        else {
            // change the active player
            switchPlayer();
        }
    }
};
const holdScore = () => {
    if (playing) {
        // 1. add current score to the active player's score
        totalScore[activePlayer] += currentScore;
        document.getElementById(`score--${activePlayer}`).textContent = String(totalScore[activePlayer]);
        // 2. if >= 100 finish game
        if (totalScore[activePlayer] >= 20) {
            playing = false;
            diceEl.classList.add("hidden");
            document.querySelector(`.player--${activePlayer}`).classList.add("player--winner");
            document.querySelector(`.player--${activePlayer}`).classList.remove("player--active");
        }
        else {
            // 3. change the active player
            switchPlayer();
        }
    }
};
const resetGame = () => {
    currentScore = 0;
    totalScore = [0, 0];
    activePlayer = 0;
    playing = true;
    diceEl.classList.add("hidden");
    // 1. remove player win class
    player0.classList.remove("player--winner");
    player1.classList.remove("player--winner");
    player0.classList.add("player--active");
    player1.classList.remove("player--active");
    // 3. reset total score
    score0.textContent = String(0);
    score1.textContent = String(0);
    // 4. reset currentscore
    currentScore0El.textContent = String(0);
    currentScore1El.textContent = String(0);
};
btnRoll.addEventListener("click", rollDice);
btnHold.addEventListener("click", holdScore);
btnNew.addEventListener("click", resetGame);
document.addEventListener("DOMContentLoaded", resetGame);
