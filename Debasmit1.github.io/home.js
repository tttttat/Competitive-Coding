function ageInDays() {
  var year = prompt("Which year were u born?");
  var dt = new Date();
  var days = (dt.getFullYear() - year) * 365;
  var h1 = document.createElement("h1");
  var textAnswer = document.createTextNode("You are " + days + " days!!!");
  h1.setAttribute("id", "ageInDays");
  h1.appendChild(textAnswer);
  document.getElementById("flex-box-result").appendChild(h1);
}

function reset() {
  document.getElementById("flex-box-result").remove();
}
function generateCat() {
  var image = document.createElement("img");
  var div = document.getElementById("flex-cat-gen");
  image.src =
    "https://thecatapi.com/api/images/get?format=src&type=gif&size=small";
  div.appendChild(image);
}

function rpsGame(yourChoice) {
  //console.log(yourChoice);
  var humanChoice, botChoice;
  humanChoice = yourChoice.id;
  botChoice = numberToChoice(randomRPS());
  results = decideWinner(humanChoice, botChoice);
  message = finalMsg(results);
  rpsFrontEnd(yourChoice.id, botChoice, message);
}

function randomRPS() {
  return Math.floor(Math.random() * 3);
}

function numberToChoice(number) {
  return ["rock", "paper", "scissors"][number];
}

function decideWinner(yourChoice, computerChoice) {
  var rpsDataBase = {
    rock: { scissors: 1, rock: 0.5, paper: 0 },
    paper: { rock: 1, paper: 0.5, scissors: 0 },
    scissors: { paper: 1, scissors: 0.5, rock: 0 },
  };

  var yourScore = rpsDataBase[yourChoice][computerChoice];
  var computerScore = rpsDataBase[computerChoice][yourChoice];
  return [yourScore, computerScore];
}

function finalMsg([yourChoice, computerChoice]) {
  if (yourChoice === 0) return { message: "You Lost!", color: "red" };
  else if (yourChoice === 0.5) return { message: "You Tied!", color: "yellow" };
  else return { message: "You Won!", color: "green" };
}

function rpsFrontEnd(humanChoice, botChoice, finalMsg) {
  var imageDataBase = {
    rock: document.getElementById("rock").src,
    paper: document.getElementById("paper").src,
    scissors: document.getElementById("scissors").src,
  };
  document.getElementById("rock").remove(),
    document.getElementById("paper").remove(),
    document.getElementById("scissors").remove();

  var humanDiv = document.createElement("div");
  var botDiv = document.createElement("div");
  var messageDiv = document.createElement("div");

  humanDiv.innerHTML =
    "<img src='" +
    imageDataBase[humanChoice] +
    "' height=150 width=150 style='box-shadow:0px 10px 50px rgba(37,50,223,1)'/>";
  document.getElementById("flex-box-rps-div").appendChild(humanDiv);

  messageDiv.innerHTML =
    "<h1 style='color:" +
    finalMsg["color"] +
    ";font-size:60px; padding:30px;'>" +
    finalMsg["message"] +
    "</h1>";
  document.getElementById("flex-box-rps-div").appendChild(messageDiv);

  botDiv.innerHTML =
    "<img src='" +
    imageDataBase[botChoice] +
    "'height=150 width=150 style='box-shadow:0px 10px 50px rgba(243,38,24,1)'/>";
  document.getElementById("flex-box-rps-div").appendChild(botDiv);
}

//Challenge 4

var all_button = document.getElementsByTagName("button");

var copyAllButtons = [];
for (let i = 0; i < all_button.length; i++) {
  copyAllButtons.push(all_button[i].classList[1]);
}

function buttonColorChange(buttonThingy) {
  if (buttonThingy.value === "red") buttonRed();
  else if (buttonThingy.value === "green") buttonGreen();
  else if (buttonThingy.value === "random") buttonRandom();
  else if (buttonThingy.value === "reset") buttonReset();
}

function buttonRed() {
  for (var i = 0; i < all_button.length; i++) {
    all_button[i].classList.remove(all_button[i].classList[1]);
    all_button[i].classList.add("btn-danger");
  }
}

function buttonGreen() {
  for (var i = 0; i < all_button.length; i++) {
    all_button[i].classList.remove(all_button[i].classList[1]);
    all_button[i].classList.add("btn-success");
  }
}

function buttonReset() {
  for (var i = 0; i < all_button.length; i++) {
    all_button[i].classList.remove(all_button[i].classList[1]);
    all_button[i].classList.add(copyAllButtons[i]);
  }
}

function buttonRandom() {
  let choices = ["btn-primary", "btn-success", "btn-danger", "btn-warning"];
  for (var i = 0; i < all_button.length; i++) {
    let random = Math.floor(Math.random() * choices.length);
    all_button[i].classList.remove(all_button[i].classList[1]);
    all_button[i].classList.add(choices[random]);
  }
}

let blackjackName = {
  you: {
    scoreSpan: "#your-blackjack-result",
    div: "#your-box",
    score: 0,
  },
  dealer: {
    scoreSpan: "#dealer-blackjack-result",
    div: "#dealer-box",
    score: 0,
  },
  cards: ["2", "3", "4", "5", "6", "7", "8", "9", "10", "A", "J", "K", "Q"],
  cardsMap: {
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    10: 10,
    J: 10,
    K: 10,
    Q: 10,
    A: [1, 11],
  },
  wins: 0,
  losses: 0,
  draws: 0,
  isHitOver: false,
  isStand: false,
  turnsOver: false,
};

const YOU = blackjackName["you"];
const DEALER = blackjackName["dealer"];
const Card = blackjackName["cards"];
const hitSound = new Audio("sounds/swish.m4a");
const winSound = new Audio("sounds/cash.mp3");
const lossSound = new Audio("sounds/aww.mp3");

document
  .querySelector("#blackjack-hit-button")
  .addEventListener("click", blackjackHit);

document
  .querySelector("#blackjack-deal-button")
  .addEventListener("click", blackjackDeal);

document
  .querySelector("#blackjack-stand-button")
  .addEventListener("click", dealerLogic);

function blackjackHit() {
  if (blackjackName["isStand"] === false) {
    document.querySelector("#blackjack-result").textContent = "Let's Play";
    document.querySelector("#blackjack-result").style.color = "black";
    let card = randomCard();
    showCard(card, YOU);
    updateScore(card, YOU);
    showScore(YOU);
    // console.log(YOU["score"]);
  }
  blackjackName["isHitOver"] = true;
}

function randomCard() {
  let randomIndex = Math.floor(Math.random() * Card.length);
  return Card[randomIndex];
}

function showCard(card, activePlayer) {
  if (activePlayer["score"] < 21) {
    let cardImage = document.createElement("img");
    cardImage.src = `images/${card}.png`;
    document.querySelector(activePlayer["div"]).appendChild(cardImage);
    hitSound.play();
  }
}

function blackjackDeal() {
  if (blackjackName["turnsOver"] === true) {
    blackjackName["isStand"] = false;
    document.querySelector("#blackjack-result").textContent = "Let's Play";
    document.querySelector("#blackjack-result").style.color = "black";
    let yourImages = document.querySelector(YOU["div"]).querySelectorAll("img");
    let dealerImages = document
      .querySelector(DEALER["div"])
      .querySelectorAll("img");
    for (var i = 0; i < yourImages.length; i++) yourImages[i].remove();
    for (var i = 0; i < dealerImages.length; i++) dealerImages[i].remove();
    YOU["score"] = 0;
    DEALER["score"] = 0;
    document.querySelector(YOU["scoreSpan"]).textContent = 0;
    document.querySelector(YOU["scoreSpan"]).style.color = "white";
    document.querySelector(DEALER["scoreSpan"]).textContent = 0;
    document.querySelector(DEALER["scoreSpan"]).style.color = "white";
    blackjackName["turnsOver"] = false;
    blackjackName["isHitOver"] = false;
  }
}

function updateScore(card, activePlayer) {
  if (card === "A") {
    if (activePlayer["score"] + blackjackName["cardsMap"][card][1] < 21)
      activePlayer["score"] += blackjackName["cardsMap"][card][1];
    else activePlayer["score"] += blackjackName["cardsMap"][card][0];
  } else activePlayer["score"] += blackjackName["cardsMap"][card];
}

function showScore(activePlayer) {
  if (activePlayer["score"] > 21) {
    document.querySelector(activePlayer["scoreSpan"]).textContent = "BUSTED!!!";
    document.querySelector(activePlayer["scoreSpan"]).style.color = "red";
  } else
    document.querySelector(activePlayer["scoreSpan"]).textContent =
      activePlayer["score"];
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function dealerLogic() {
  blackjackName["isStand"] = true;
  while (
    blackjackName["isStand"] &&
    blackjackName["isHitOver"] &&
    DEALER["score"] < 16
  ) {
    let card = randomCard();
    showCard(card, DEALER);
    updateScore(card, DEALER);
    showScore(DEALER);
    await sleep(1000);
  }
  blackjackName["turnsOver"] = true;
  let winner = computeWinner();
  showResult(winner);
}

function computeWinner() {
  let winner;
  if (YOU["score"] <= 21) {
    if (YOU["score"] > DEALER["score"] || DEALER["score"] > 21) {
      console.log("You Won!!!");
      winner = YOU;
    } else if (YOU["score"] < DEALER["score"]) {
      console.log("You lost");
      winner = DEALER;
    } else if (YOU["score"] === DEALER["score"]) {
      console.log("You Drew!!!");
    }
  } else if (YOU["score"] > 21 && DEALER["score"] < 21) {
    console.log("You Lost!!!");
    winner = DEALER;
  } else if (YOU["score"] > 21 && DEALER["score"] > 21) {
    console.log("You Drew!!!");
  }
  console.log("Winner is ", winner);
  if (winner === YOU) blackjackName["wins"]++;
  else if (winner === DEALER) blackjackName["losses"]++;
  else blackjackName["draws"]++;
  console.log(blackjackName);
  return winner;
}

function showResult(winner) {
  let msg, msgColor;
  if (blackjackName["turnsOver"] === true) {
    if (winner === YOU) {
      document.querySelector("#wins").textContent = blackjackName["wins"];
      msg = "You Won!!!";
      msgColor = "green";
      winSound.play();
    } else if (winner === DEALER) {
      document.querySelector("#losses").textContent = blackjackName["losses"];
      msgColor = "red";
      lossSound.play();
    } else {
      document.querySelector("#draws").textContent = blackjackName["draws"];
      msg = "You Tied!!!";
      msgColor = "black";
    }
    document.querySelector("#blackjack-result").textContent = msg;
    document.querySelector("#blackjack-result").style.color = msgColor;
  }
}
//Done with all the 5 mini projects
