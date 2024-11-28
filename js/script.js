let card1 = {
  id: "img1",
  side: "back",
  back: "partetrasnovo.jpg",
  selected: false,
  value: "dockernovo.png",
  matched: false
};

let card2 = {
  id: "img2",
  side: "back",
  back: "partetrasnovo.jpg",
  selected: false,
  value: "javascriptnovo.png",
  matched: false
};

let card3 = {
  id: "img3",
  side: "back",
  back: "partetrasnovo.jpg",
  selected: false,
  value: "dockernovo.png",
  matched: false
};

let card4 = {
  id: "img4",
  side: "back",
  back: "partetrasnovo.jpg",
  selected: false,
  value: "javascriptnovo.png",
  matched: false
};

let card5 = {
  id: "img5",
  side: "back",
  back: "partetrasnovo.jpg",
  selected: false,
  value: "kotlinnovo.jpg",
  matched: false
};

let card6 = {
  id: "img6",
  side: "back",
  back: "partetrasnovo.jpg",
  selected: false,
  value: "awsnovo.jpg",
  matched: false
};

let card7 = {
  id: "img7",
  side: "back",
  back: "partetrasnovo.jpg",
  selected: false,
  value: "kotlinnovo.jpg",
  matched: false
};

let card8 = {
  id: "img8",
  side: "back",
  back: "partetrasnovo.jpg",
  selected: false,
  value: "awsnovo.jpg",
  matched: false
};

let card9 = {
  id: "img9",
  side: "back",
  back: "partetrasnovo.jpg",
  selected: false,
  value: "oraclenovo.png",
  matched: false
};

let card10 = {
  id: "img10",
  side: "back",
  back: "partetrasnovo.jpg",
  selected: false,
  value: "delphinovo.jpg",
  matched: false
};

let card11 = {
  id: "img11",
  side: "back",
  back: "partetrasnovo.jpg",
  selected: false,
  value: "oraclenovo.png",
  matched: false
};

let card12 = {
  id: "img12",
  side: "back",
  back: "partetrasnovo.jpg",
  selected: false,
  value: "delphinovo.jpg",
  matched: false
};

let card13 = {
  id: "img13",
  side: "back",
  back: "partetrasnovo.jpg",
  selected: false,
  value: "phpnovo.jpg",
  matched: false
};

let card14 = {
  id: "img14",
  side: "back",
  back: "partetrasnovo.jpg",
  selected: false,
  value: "reactnovo.png",
  matched: false
};

let card15 = {
  id: "img15",
  side: "back",
  back: "partetrasnovo.jpg",
  selected: false,
  value: "phpnovo.jpg",
  matched: false
};

let card16 = {
  id: "img16",
  side: "back",
  back: "partetrasnovo.jpg",
  selected: false,
  value: "reactnovo.png",
  matched: false
};

let card17 = {
  id: "img17",
  side: "back",
  back: "partetrasnovo.jpg",
  selected: false,
  value: "Pythonnew.png",
  matched: false
};

let card18 = {
  id: "img18",
  side: "back",
  back: "partetrasnovo.jpg",
  selected: false,
  value: "Pythonnew.png",
  matched: false
};

let cards = [
  card1,
  card2,
  card3,
  card4,
  card5,
  card6,
  card7,
  card8,
  card9,
  card10,
  card11,
  card12,
  card13,
  card14,
  card15,
  card16,
  card17,
  card18,
];
let cardValues = [
  "awsnovo.jpg",
  "delphinovo.jpg",
  "dockernovo.png",
  "javascriptnovo.png",
  "kotlinnovo.jpg",
  "oraclenovo.png",
  "phpnovo.png",
  "postgresql.png",
  "reactnovo.png",
  "awsnovo.jpg",
  "delphinovo.jpg",
  "dockernovo.png",
  "javascriptnovo.png",
  "kotlinnovo.jpg",
  "oraclenovo.png",
  "phpnovo.png",
  "postgresql.png",
  "reactnovo.png",
];

let temp = [];

for (let i = 0; i < cardValues.length; i++) {
  temp.push(cardValues[i]);
}

let previousSelected = null;
let currentSelected = null;
let cardsFlipped = 0;
let totalGuesses = 0;
let rightGuesses = 0;
let wrongGuesses = 0;
let matchedPairs = 0;
let playerName = '';

function flipCard(cardId) {
  let card = getCardObjectById(cardId);
  if (card.matched || card.selected) {
    return; // Do nothing if the card is already matched or currently selected
  }

  flipSelectedCardToFront(cardId);
  card.selected = true;
  cardsFlipped++;
  totalGuesses++;

  if (cardsFlipped % 2 != 0) {
    previousSelected = card;
  } else {
    currentSelected = card;
    if (previousSelected.value === currentSelected.value) {
      rightGuesses++;
      matchedPairs++;

      previousSelected.matched = true;
      currentSelected.matched = true;

      if (matchedPairs === cards.length / 2) {
        document.getElementById('victoryModalLabel').innerText = 'Parabéns, ' + playerName + '!';
        var victoryModal = new bootstrap.Modal(document.getElementById('victoryModal'));
        victoryModal.show();
      }
    } else {
      wrongGuesses++;
      setTimeout(() => {
        flipCardToBack(previousSelected.id);
        flipCardToBack(currentSelected.id);
        previousSelected.selected = false;
        currentSelected.selected = false;
      }, 500);
    }
    previousSelected = null;
    currentSelected = null;
  }
  updateScore();
}

function updateScore() {
  document.getElementById("totalGuesses").innerHTML = totalGuesses;
  document.getElementById("rightGuesses").innerHTML = rightGuesses;
  document.getElementById("wrongGuesses").innerHTML = wrongGuesses;
}

function getCardObjectById(cardId) {
  for (let i = 0; i < cards.length; i++) {
    if (cardId == cards[i]["id"]) {
      return cards[i];
    }
  }
}

function flipSelectedCardToFront(cardId) {
  for (let i = 0; i < cards.length; i++) {
    if (cardId == cards[i]["id"]) {
      document.getElementById(cards[i]["id"]).src = "cartas/" + cards[i]["value"];
    }
  }
}

function flipCardToBack(cardId) {
  document.getElementById(cardId).src = "partetrasnovo.jpg";
}

function flipAllCardToFront() {
  for (let i = 0; i < cards.length; i++) {
    document.getElementById(cards[i]["id"]).src = "cartas/" + cards[i]["value"];
  }
}

function flipAllCardToBack() {
  for (let i = 0; i < cards.length; i++) {
    if (!cards[i].matched) {
      document.getElementById(cards[i]["id"]).src = "partetrasnovo.jpg";
      cards[i].selected = false;
    }
  }
}

function shuffleCards() {
  console.log(temp);
  console.log(cardValues);
  card1["value"] = "javascriptnovo.jpg";
  for (let i = 0; i < cards.length; i++) {
    cards[i]["value"] = cardValues.pop();
  }
  for (let i = 0; i < temp.length; i++) {
    cardValues.push(temp[i]);
  }

  let randomNumber = Math.random();
  console.log(randomNumber);
  if (randomNumber > 0.5) {
    cards = [
      card1,
      card5,
      card11,
      card4,
      card15,
      card9,
      card3,
      card14,
      card7,
      card13,
      card10,
      card12,
      card18,
      card2,
      card16,
      card6,
      card17,
      card8,
    ];
  } else {
    cards = [
      card11,
      card4,
      card5,
      card1,
      card15,
      card3,
      card14,
      card9,
      card10,
      card13,
      card7,
      card12,
      card16,
      card6,
      card2,
      card17,
      card8,
      card18,
    ];
  }
}

function start() {
  shuffleCards();
  flipAllCardToFront();
  totalGuesses = 0;
  wrongGuesses = 0;
  rightGuesses = 0;
  matchedPairs = 0;
  previousSelected = null;
  currentSelected = null;
  for (let i = 0; i < cards.length; i++) {
    cards[i].matched = false;
    cards[i].selected = false;
  }
  updateScore();
  setTimeout(() => {
    flipAllCardToBack();
  }, 2000);
}

document.addEventListener('DOMContentLoaded', function () {
  var playerNameModal = new bootstrap.Modal(document.getElementById('playerNameModal'));
  playerNameModal.show();
});

document.getElementById('playerNameForm').addEventListener('submit', function (e) {
  e.preventDefault();
  playerName = document.getElementById('playerNameInput').value.trim();
  if (playerName === '') {
    alert('Por favor, insira seu nome.');
    return;
  }
  document.getElementById('playerNameDisplay').innerText = playerName;
  var playerNameModal = bootstrap.Modal.getInstance(document.getElementById('playerNameModal'));
  playerNameModal.hide();
  // Start the game
  start();
});
