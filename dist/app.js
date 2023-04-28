"use strict";
// selecting elements
const diceEl = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");
// starting conditions
diceEl.classList.add("hidden");
// roll dice functionality 
const rollDice = () => {
    // 1. Generate randome dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;
    // 2. display dice roll
    console.log(dice);
    // 3. if it is 1 then change the player else add dice roll
};
btnRoll.addEventListener("click", rollDice);
