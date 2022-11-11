// Lancer le dé

const roll = document.getElementById("roll");
const imgDice = document.getElementById("dice");
const roundPlayer1 = document.getElementById("round-player-one")

const clickRoll = () => {
  const num = Math.floor(Math.random() * 6) + 1; // 1 al 6
  imgDice.setAttribute("src", `img/dice-${num}.png`);
  const value = roundPlayer1.innerText;
  const newValue = Number(value) + num;
  roundPlayer1.textContent = newValue;
}

roll.addEventListener("click", clickRoll);
