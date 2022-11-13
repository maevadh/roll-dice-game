// 1. Roll dice
const roll = document.getElementById("roll");
const imgDice = document.getElementById("dice");
const playersSaveScore = document.getElementById("save-score");
const newGame = document.getElementById("new-game");
let player = 1;

const playerOneRound = document.getElementById("round-player-one");
const playerOneGlobalScore = document.getElementById("player-one-global-score");

const playerTwoRound = document.getElementById("round-player-two");
const playerTwoGlobalScore = document.getElementById("player-two-global-score");


const clickRoll = () => {
  const num = Math.floor(Math.random() * 6) + 1;
  imgDice.setAttribute("src", `img/dice-${num}.png`);

  if (num === 1) {
    if (player === 1) {
      playerOneRound.textContent = 0;
    } else {
      playerTwoRound.textContent = 0;
    }
    player = (player === 1 ? 2 : 1);
  } else {
    if (player === 1) {
      const value = playerOneRound.innerText;
      const newValue = Number(value) + num;
      playerOneRound.textContent = newValue;
    } else {
      const value = playerTwoRound.innerText;
      const newValue = Number(value) + num;
      playerTwoRound.textContent = newValue;
    }
  }
}

const hold = () => {
  if (player === 1) {
    // 2. save round value
    const roundPlayerValue = playerOneRound.innerText;
    // 3. save global score value
    const playerOneGlobalScoreValue = playerOneGlobalScore.innerText;
    // 4. parse to number the values of the step 1 and step 2, and added them each other, and keep them on a new variable.
    const totalRoundPlayer = Number(roundPlayerValue);
    const totalRound = Number(playerOneGlobalScoreValue);
    const sum = totalRoundPlayer + totalRound;
    // 5. change textContent of global score
    playerOneGlobalScore.textContent = sum;
    playerOneRound.textContent = 0;
    // switch player
    player = 2;
  } else {
    // 2. save round value
    const roundPlayerValue = playerTwoRound.innerText;
    // 3. save global score value
    const playerTwoGlobalScoreValue = playerTwoGlobalScore.innerText;
    // 4. parse to number the values of the step 1 and step 2, and added them each other, and keep them on a new variable.
    const totalRoundPlayer = Number(roundPlayerValue);
    const totalRound = Number(playerTwoGlobalScoreValue);
    const sum = totalRoundPlayer + totalRound;
    // 5. change textContent of global score
    playerTwoGlobalScore.textContent = sum;
    playerTwoRound.textContent = 0;
    // switch player
    player = 1;
  }
}


// 6. Nouvelle partie 
const resetGame = () => {
  playerOneGlobalScore.textContent = 0;
  playerOneRound.textContent = 0;
}


roll.addEventListener("click", clickRoll);
playersSaveScore.addEventListener("click", hold);
newGame.addEventListener("click", resetGame);

