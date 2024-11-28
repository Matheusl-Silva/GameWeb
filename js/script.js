// Definição das cartas com a propriedade 'matched' para verificar correspondências
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

// Lista de todas as cartas
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

// Valores das cartas (duplas)
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

// Clone dos valores das cartas para reembaralhar
let temp = [...cardValues];

// Variáveis de controle do jogo
let previousSelected = null;
let currentSelected = null;
let cardsFlipped = 0;
let totalGuesses = 0;
let rightGuesses = 0;
let wrongGuesses = 0;
let matchedPairs = 0;
let playerName = '';

// Função para selecionar uma carta
function flipCard(cardId) {
  let card = getCardObjectById(cardId);
  
  // Não permite selecionar cartas já combinadas ou atualmente selecionadas
  if (card.matched || card.selected) {
    return;
  }

  flipSelectedCardToFront(cardId);
  card.selected = true;
  cardsFlipped++;
  totalGuesses++;

  if (cardsFlipped % 2 !== 0) {
    previousSelected = card;
  } else {
    currentSelected = card;
    if (previousSelected.value === currentSelected.value) {
      // Par correto
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
      // Par inválido
      wrongGuesses++;
      handleInvalidPair();
    }
    previousSelected = null;
    currentSelected = null;
  }
  updateScore();
}

// Função para atualizar a pontuação na interface
function updateScore() {
  document.getElementById("totalGuesses").innerHTML = totalGuesses;
  document.getElementById("rightGuesses").innerHTML = rightGuesses;
  document.getElementById("wrongGuesses").innerHTML = wrongGuesses;
}

// Função para obter o objeto da carta pelo ID
function getCardObjectById(cardId) {
  for (let i = 0; i < cards.length; i++) {
    if (cardId === cards[i].id) {
      return cards[i];
    }
  }
  return null;
}

// Função para virar a carta para frente
function flipSelectedCardToFront(cardId) {
  let card = getCardObjectById(cardId);
  if (card) {
    document.getElementById(card.id).src = "cartas/" + card.value;
  }
}

// Função para virar uma carta específica para trás
function flipCardToBack(cardId) {
  document.getElementById(cardId).src = "partetrasnovo.jpg";
  let card = getCardObjectById(cardId);
  if (card) {
    card.selected = false;
  }
}

// Função para virar todas as cartas para frente (usada no início do jogo)
function flipAllCardToFront() {
  for (let i = 0; i < cards.length; i++) {
    document.getElementById(cards[i].id).src = "cartas/" + cards[i].value;
  }
}

// Função para virar todas as cartas para trás, exceto as já correspondidas
function flipAllCardToBack() {
  for (let i = 0; i < cards.length; i++) {
    if (!cards[i].matched) {
      document.getElementById(cards[i].id).src = "partetrasnovo.jpg";
      cards[i].selected = false;
    }
  }
}

// Função para embaralhar as cartas
function shuffleCards() {
  // Embaralha o array cardValues
  cardValues = shuffleArray(cardValues);

  // Atribui os valores embaralhados às cartas
  for (let i = 0; i < cards.length; i++) {
    cards[i].value = cardValues[i];
    cards[i].matched = false;
    cards[i].selected = false;
  }

  // Atualiza a ordem das cartas de forma aleatória
  cards = shuffleArray(cards);
}

// Função auxiliar para embaralhar um array (Fisher-Yates Shuffle)
function shuffleArray(array) {
  let newArray = array.slice();
  for (let i = newArray.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
}

// Função para iniciar o jogo
function start() {
  shuffleCards();
  flipAllCardToFront();
  totalGuesses = 0;
  wrongGuesses = 0;
  rightGuesses = 0;
  matchedPairs = 0;
  previousSelected = null;
  currentSelected = null;
  updateScore();
  setTimeout(() => {
    flipAllCardToBack();
  }, 2000);
}

// Evento para mostrar o modal de nome do jogador ao carregar a página
document.addEventListener('DOMContentLoaded', function () {
  var playerNameModal = new bootstrap.Modal(document.getElementById('playerNameModal'));
  playerNameModal.show();
});

// Evento para capturar o nome do jogador ao submeter o formulário
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
  // Iniciar o jogo
  start();
});

// Função para reiniciar o jogo após selecionar um par inválido
function handleInvalidPair() {
  // Desvira as cartas inválidas após um curto intervalo
  setTimeout(() => {
    if (previousSelected && currentSelected) {
      flipCardToBack(previousSelected.id);
      flipCardToBack(currentSelected.id);
    }
    // Reinicia o jogo
    start();
  }, 1000);
}
