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

// ... (Definição das demais cartas card3 até card18)

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

let temp = [...cardValues];

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
  if (card.matched || card.selected) {
    return; // Não faz nada se a carta já foi correspondida ou está selecionada
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
      // Mostrar o modal de par inválido
      var invalidPairModal = new bootstrap.Modal(document.getElementById('invalidPairModal'));
      invalidPairModal.show();
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
  console.log(temp);
  console.log(cardValues);
  card1.value = "javascriptnovo.jpg"; // Este ajuste parece específico, mantenha conforme necessário
  for (let i = 0; i < cards.length; i++) {
    cards[i].value = cardValues.pop();
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
  for (let i = 0; i < cards.length; i++) {
    cards[i].matched = false;
    cards[i].selected = false;
  }
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
  var invalidPairModal = new bootstrap.Modal(document.getElementById('invalidPairModal'));
  invalidPairModal.show();

  // Evento para reiniciar o jogo quando o modal for fechado
  document.getElementById('invalidPairModal').addEventListener('hidden.bs.modal', function () {
    start();
  }, { once: true }); // O listener é removido após ser executado uma vez
}
