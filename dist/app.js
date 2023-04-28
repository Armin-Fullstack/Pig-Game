"use strict";
// selecting elements
const diceEl = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");
const currentScoreElPlayer0 = document.querySelector("#current--0");
// starting conditions
diceEl.classList.add("hidden");
let currentScore = 0;
// roll dice functionality 
const rollDice = () => {
    // 1. Generate randome dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;
    // 2. display dice roll
    diceEl.classList.remove("hidden");
    diceEl.src = `Images/dice-${dice}.png`;
    // 3. if it is 1 then change the player else add dice roll
    if (dice !== 1) {
        currentScore += dice;
        currentScoreElPlayer0.textContent = String(currentScore);
    }
    else {
        // change the player
    }
};
btnRoll.addEventListener("click", rollDice);
