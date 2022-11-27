// 1. Roll dice
const roll = document.getElementById("roll");
const imgDice = document.getElementById("dice");
const playersSaveScore = document.getElementById("save-score");
const newGame = document.getElementById("new-game");
const dotPlayerOne = document.getElementById("dot-1");
const dotPlayerTwo = document.getElementById("dot-2");

let player = 1;

const playerOneRound = document.getElementById("round-player-one");
const playerOneGlobalScore = document.getElementById("player-one-global-score");

const playerTwoRound = document.getElementById("round-player-two");
const playerTwoGlobalScore = document.getElementById("player-two-global-score");


// 7. New game
const resetGame = () => {
  dotPlayerOne.style.display = "block";
  dotPlayerTwo.style.display = "none";

  playerOneGlobalScore.textContent = 0;
  playerTwoGlobalScore.textContent = 0;
  playerOneRound.textContent = 0;
  playerTwoRound.textContent = 0;
}

//INIT
dotPlayerTwo.style.display = "none";

const clickRoll = () => {
  const num = Math.floor(Math.random() * 6) + 1;
  imgDice.setAttribute("src", `img/dice-${num}.png`);

  if (num === 1) {
    if (player === 1) {
      playerOneRound.textContent = 0;
      dotPlayerTwo.style.display = "block";
      dotPlayerOne.style.display = "none";
    } else {
      playerTwoRound.textContent = 0;
      dotPlayerOne.style.display = "block";
      dotPlayerTwo.style.display = "none";
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
  if (playerOneGlobalScore.innerText === "Winner" || playerTwoGlobalScore.innerText === "Winner") {
    resetGame();
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
    dotPlayerOne.style.display = "none";
    dotPlayerTwo.style.display = "block";
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
    dotPlayerOne.style.display = "block";
    dotPlayerTwo.style.display = "none";
  }

  if (playerOneGlobalScore.innerText === "Winner" || playerTwoGlobalScore.innerText === "Winner") {
    resetGame();
  }

  if (Number(playerOneGlobalScore.innerText) >= 100) {
    playerOneGlobalScore.textContent = "Winner";
  } else if (Number(playerTwoGlobalScore.innerText) >= 100) {
    playerTwoGlobalScore.textContent = "Winner";
  }

}


roll.addEventListener("click", clickRoll);
playersSaveScore.addEventListener("click", hold);
newGame.addEventListener("click", resetGame);

