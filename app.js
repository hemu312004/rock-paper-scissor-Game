let userPoints = 0;
let computerPoints = 0;
let currentRound = 0;

function startGame() {
  userPoints = 0;
  computerPoints = 0;
  currentRound = 0;
  document.getElementById("userPoints").textContent = userPoints;
  document.getElementById("computerPoints").textContent = computerPoints;
  document.getElementById("roundCount").textContent = currentRound;
  document.getElementById("result").textContent = "";

  // Enable the click event for the game buttons
  let gameButtons = document.getElementsByClassName("game-btn");
  for (let i = 0; i < gameButtons.length; i++) {
    gameButtons[i].setAttribute(
      "onclick",
      `play('${gameButtons[i].dataset.choice}')`
    );
  }
}

function updateRoundCount() {
  document.getElementById("roundCount").textContent = currentRound;
}

function play(userChoice) {
  let choices = ["rock", "paper", "scissors"];

  let ranChoice = Math.floor(Math.random() * choices.length);
  let computerChoice = choices[ranChoice];

  let rowElement = document.querySelector(".custom-bg-row");
  rowElement.classList.remove("win-bg", "lose-bg");

  if (userChoice === computerChoice) {
    document.getElementById("result").innerHTML = "It's a draw!";
  } else if (
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "paper" && computerChoice === "rock") ||
    (userChoice === "scissors" && computerChoice === "paper")
  ) {
    document.getElementById("result").innerHTML = "You win!";
    rowElement.classList.add("win-bg");
    userPoints++;
  } else {
    document.getElementById("result").innerHTML = "You lose!";
    rowElement.classList.add("lose-bg");
    computerPoints++;
  }

  currentRound++;
  document.getElementById("userPoints").textContent = userPoints;
  document.getElementById("computerPoints").textContent = computerPoints;
  document.getElementById("roundCount").textContent = currentRound;

  if (currentRound === 5) {
    endGame();
  }
}

function endGame() {
  let finalResult = "";
  let rowElement = document.querySelector(".custom-bg-row");
  rowElement.classList.remove("win-bg", "lose-bg");
  if (userPoints > computerPoints) {
    finalResult = "Congratulations! You win!";
    rowElement.classList.add("win-bg");
  } else if (userPoints < computerPoints) {
    finalResult = "You lose! Better luck next time.";
    rowElement.classList.add("lose-bg");
  } else {
    finalResult = "It's a tie! Just no one won";
  }
  document.getElementById("result").innerHTML = finalResult;

  // Disable the click event for the game buttons
  let gameButtons = document.getElementsByClassName("game-btn");
  for (let i = 0; i < gameButtons.length; i++) {
    gameButtons[i].removeAttribute("onclick");
  }
}


// app.js

function startGame() {
  document.getElementById("roundCount").innerText = "0";
  document.getElementById("userPoints").innerText = "0";
  document.getElementById("computerPoints").innerText = "0";
  document.getElementById("result").innerText = "";
  document.getElementById("computerChoiceImg").src = "";
}

function play(userChoice) {
  const choices = ["rock", "paper", "scissors"];
  const computerChoice = choices[Math.floor(Math.random() * choices.length)];

  // Display the computer's choice
  const computerChoiceImg = document.getElementById("computerChoiceImg");
  computerChoiceImg.src = `images/${computerChoice}.png`;
  computerChoiceImg.alt = computerChoice;

  let result = "";
  if (userChoice === computerChoice) {
    result = "It's a draw!";
  } else if (
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "paper" && computerChoice === "rock") ||
    (userChoice === "scissors" && computerChoice === "paper")
  ) {
    result = "Congratulations! You win!";
    document.getElementById("userPoints").innerText =
      parseInt(document.getElementById("userPoints").innerText) + 1;
  } else {
    result = "You lose!";
    document.getElementById("computerPoints").innerText =
      parseInt(document.getElementById("computerPoints").innerText) + 1;
  }

  document.getElementById("result").innerText = result;
}

function updateRoundCount() {
  document.getElementById("roundCount").innerText =
    parseInt(document.getElementById("roundCount").innerText) + 1;
}
