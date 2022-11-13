// 1. Roll dice
const roll = document.getElementById("roll");
const imgDice = document.getElementById("dice");
const roundPlayer1 = document.getElementById("round-player-one");
const saveScore = document.getElementById("save-score");
const playerOneGlobalScore = document.getElementById("player-one-global-score");
const newGame = document.getElementById("new-game");

const clickRoll = () => {
  const num = Math.floor(Math.random() * 6) + 1;
  imgDice.setAttribute("src", `img/dice-${num}.png`);
  const value = roundPlayer1.innerText;
  const newValue = Number(value) + num;
  roundPlayer1.textContent = newValue;
}

const hold = () => {
  // 2. save round value
  const roundPlayerValue = roundPlayer1.innerText;

  // 3. save global score value
  const playerOneGlobalScoreValue = playerOneGlobalScore.innerText;

  // 4. parse to number the values of the step 1 and step 2, and added them each other, and keep them on a new variable.
  const totalRoundPlayer = Number(roundPlayerValue);
  const totalRound = Number(playerOneGlobalScoreValue);

  const sum = totalRoundPlayer + totalRound;

  // 5. change textContent of global score
  playerOneGlobalScore.textContent = sum;
  roundPlayer1.textContent = 0;
}


// 6. Nouvelle partie 
const resetGame = () => {
  playerOneGlobalScore.textContent = 0;
  roundPlayer1.textContent = 0;
}



roll.addEventListener("click", clickRoll);
saveScore.addEventListener("click", hold);
newGame.addEventListener("click", resetGame);

