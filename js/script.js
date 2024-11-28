card1 = {
  id: "img1",
  side: "back",
  back: "partetrasnovo.jpg", selected: false,
  value: "dockernovo.png"
}

card2 = {
  id: "img2",
  side: "back",
  back: "partetrasnovo.jpg", selected: false,
  value: "javascriptnovo.png"
}

card3 = {
  id: "img3",
  side: "back",
  back: "partetrasnovo.jpg", selected: false,
  value: "dockernovo.png"
}

card4 = {
  id: "img4",
  side: "back",
  back: "partetrasnovo.jpg", selected: false,
  value: "javascriptnovo.png"
}

card5 = {
  id: "img5",
  side: "back",
  back: "partetrasnovo.jpg", selected: false,
  value: "kotlinnovo.jpg"
}

card6 = {
  id: "img6",
  side: "back",
  back: "partetrasnovo.jpg", selected: false,
  value: "awsnovo.jpg"
}

card7 = {
  id: "img7",
  side: "back",
  back: "partetrasnovo.jpg", selected: false,
  value: "kotlinnovo.jpg"
}

card8 = {
  id: "img8",
  side: "back",
  back: "partetrasnovo.jpg", selected: false,
  value: "awsnovo.jpg"
}

card9 = {
  id: "img9",
  side: "back",
  back: "partetrasnovo.jpg", selected: false,
  value: "oraclenovo.png"
}

card10 = {
  id: "img10",
  side: "back",
  back: "partetrasnovo.jpg", selected: false,
  value: "delphinovo.jpg"
}

card11 = {
  id: "img11",
  side: "back",
  back: "partetrasnovo.jpg", selected: false,
  value: "oraclenovo.png"
}

card12 = {
  id: "img12",
  side: "back",
  back: "partetrasnovo.jpg", selected: false,
  value: "delphinovo.jpg"
}

card13 = {
  id: "img13",
  side: "back",
  back: "partetrasnovo.jpg", selected: false,
  value: "phpnovo.jpg"
}

card14 = {
  id: "img14",
  side: "back",
  back: "partetrasnovo.jpg", selected: false,
  value: "reactnovo.png"
}

card15 = {
  id: "img15",
  side: "back",
  back: "partetrasnovo.jpg", selected: false,
  value: "phpnovo.jpg"
}

card16 = {
  id: "img16",
  side: "back",
  back: "partetrasnovo.jpg", selected: false,
  value: "reactnovo.png"
}

card17 = {
  id: "img17",
  side: "back",
  back: "partetrasnovo.jpg", selected: false,
  value: "Pythonnew.png"
}

card18 = {
  id: "img18",
  side: "back",
  back: "partetrasnovo.jpg", selected: false,
  value: "Pythonnew.png"
}

cards = [card1, card2, card3, card4, card5, card6, card7, card8, card9, card10, card11, card12, card13, card14, card15, card16, card17, card18];
cardValues = ["awsnovo.jpg","delphinovo.jpg","dockernovo.png","javascriptnovo.png","kotlinnovo.jpg","oraclenovo.png","phpnovo.png","postgresql.png","reactnovo.png","awsnovo.jpg","delphinovo.jpg","dockernovo.png","javascriptnovo.png","kotlinnovo.jpg","oraclenovo.png","phpnovo.png","postgresql.png","reactnovo.png"]

let temp = []

for (let i = 0; i < cardValues.length; i++) {
  temp.push(cardValues[i])
}

let previousSelected = "none"
let currentSelected = "none"
let cardsFlipped = 0
let totalGuesses = 0
let rightGuesses = 0
let wrongGuesses = 0
let matchedPairs = 0;

function flipCard(cardId) {
  flipSelectedCardToFront(cardId);
  cardsFlipped++;
  totalGuesses++;

  if (cardsFlipped % 2 != 0) {
    previousSelected = getCardById(cardId);
  } else {
    currentSelected = getCardById(cardId);
    if (previousSelected === currentSelected) { // Apenas um if aqui
      rightGuesses++;
      matchedPairs++;

      if (matchedPairs === cards.length / 2) {
        var victoryModal = new bootstrap.Modal(document.getElementById('victoryModal'));
        victoryModal.show();
      }
    } else {
      wrongGuesses++;
      setTimeout(() => {
        flipAllCardToBack();
      }, 500);
    }
    previousSelected = "none"; // Reinicia previousSelected para o próximo par
    currentSelected = "none"; // Reinicia currentSelected para o próximo par
  }
  updateScore();
}

function updateScore() {
  document.getElementById("totalGuesses").innerHTML = totalGuesses
  document.getElementById("rightGuesses").innerHTML = rightGuesses
  document.getElementById("wrongGuesses").innerHTML = wrongGuesses
}

function getCardById(cardId) {
  for (let i = 0; i < cards.length; i++) {
    if (cardId == cards[i]["id"]) {
      return cards[i]["value"];
    }
  }
}

  for (let i = 0; i < cards.length; i++) {
    if (cardID == cards[i]["id"]){
      cardValue = cards[i]["value"]
    }
  }
  
  cardsFlipped = cardsFlipped + 1
  for (let i = 0; i < cards.length; i++) {
    if (cardID == cards[i]["id"]){
      document.getElementById(cardID).src = "cartas/" + cards[i]["value"]
    }
  }

function flipSelectedCardToFront(cardId) {
  for (let i = 0; i < cards.length; i++) {
    if (cardId == cards[i]["id"]) {
      document.getElementById(cards[i]["id"]).src = "cartas/" + cards[i]["value"];
    }
  }
}

function flipAllCardToFront() {
  for (let i = 0; i < cards.length; i++) {
    document.getElementById(cards[i]["id"]).src = "cartas/" + cards[i]["value"];
  }
}

function flipAllCardToBack() {
  for (let i = 0; i < cards.length; i++) {
    document.getElementById(cards[i]["id"]).src = "partetrasnovo.jpg";
  }
}

function shuffleCards() {
  console.log(temp)
  console.log(cardValues)
  card1["value"]= "javascriptnovo.jpg"
  for(let i=0; i<cards.length; i++){
    cards[i]["value"]=cardValues.pop()
  }
  for (let i=0;i<temp.length;i++){
  cardValues.push(temp[i])
}

  randomNumber = Math.random();
    console.log(randomNumber);
    if (randomNumber > 0.5) {
      cards = [card1, card5, card11, card4, card15, card9, card3, card14, card7, card13, card10, card12, card18, card2, card16, card6, card17, card8];
    } else {
      cards = [card11, card4, card5, card1, card15, card3, card14, card9, card10, card13, card7, card12, card16, card6, card2, card17, card8, card18];
    }
  }

function start() {
  shuffleCards()
  flipAllCardToFront()
  totalGuesses=0
  wrongGuesses=0
  rightGuesses=0
  matchedPairs=0
  updateScore()
  setTimeout(() => {
    flipAllCardToBack()
  }, 2000);
}