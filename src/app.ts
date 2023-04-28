// selecting elements
const diceEl = document.querySelector(".dice") ! as HTMLImageElement
const btnNew = document.querySelector(".btn--new") ! as HTMLButtonElement
const btnRoll = document.querySelector(".btn--roll") ! as HTMLButtonElement
const btnHold = document.querySelector(".btn--hold") ! as HTMLButtonElement

// starting conditions
diceEl.classList.add("hidden")

// roll dice functionality 
const rollDice = ()  => {
  // 1. Generate randome dice roll
  const dice = Math.trunc(Math.random() * 6 ) + 1
  // 2. display dice roll
  // 3. if it is 1 then change the player else add dice roll
}


btnRoll.addEventListener("click" , rollDice)