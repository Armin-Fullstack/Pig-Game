
// selecting elements
const diceEl = document.querySelector(".dice") ! as HTMLImageElement
const btnNew = document.querySelector(".btn--new") ! as HTMLButtonElement
const btnRoll = document.querySelector(".btn--roll") ! as HTMLButtonElement
const btnHold = document.querySelector(".btn--hold") ! as HTMLButtonElement
const player0 = document.querySelector(".player--0") ! as HTMLTableSectionElement
const player1 = document.querySelector(".player--1") ! as HTMLTableSectionElement

// starting conditions
diceEl.classList.add("hidden")
let currentScore = 0;
let totalScore = 0;
let activePlayer = 0;
// roll dice functionality 
const rollDice = () : void  => {
  // 1. Generate randome dice roll
  const dice = Math.trunc(Math.random() * 6 ) + 1
  // 2. display dice roll
  diceEl.classList.remove("hidden")
  diceEl.src = `Images/dice-${dice}.png`
  // 3. if it is 1 then change the player else add dice roll
  if(dice !== 1) {
    currentScore += dice;
    (document.getElementById(`current--${activePlayer}`) ! as HTMLParagraphElement).textContent = String(currentScore)
  } else {
    // change the active player
    (document.getElementById(`current--${activePlayer}`) ! as HTMLParagraphElement).textContent = String(0)
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0.classList.toggle("player--active")
    player1.classList.toggle("player--active")
  }
}
const holdScore = () : void => {
  // 1. add current score to the active player's score
  totalScore += currentScore;
  (document.getElementById(`score--${activePlayer}`)! as HTMLParagraphElement).textContent = String(totalScore)
  // 2. if >= 100 finish game

  // 3. change the active player
}

btnRoll.addEventListener("click" , rollDice)
btnHold.addEventListener("click" , holdScore)