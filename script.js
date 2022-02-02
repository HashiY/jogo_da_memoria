const cards = document.querySelectorAll('.card');
let hasFlippedCard = false;
let firstCard, secondCard;
//Bloqueia o tabuleiro para nao ocorrer o bug de conseguir clicar em mais que duas cartas
let lockBoard = false;

//função para virar a carta
function flipCard() {
    if(lockBoard) return;

    this.classList.add('flip');
    if(!hasFlippedCard){
        hasFlippedCard = true;
        firstCard = this;
        return;
    }

    secondCard = this;
    hasFlippedCard = false;
    checkForMatch();
}

//função que desabilita as cartas
function disableCards() {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);
}

//funcão que desvira as cartas
function unflipCards() {
    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');
    }, 1500);
}

//função que checa se as cartas são iguais
function checkForMatch(){
    //Compara as data-card que criou no html
    if(firstCard.dataset.card === secondCard.dataset.card) {
        disableCards();
        return;
    }
    unflipCards();
}

//adiciona evento de clique para cada carta
cards.forEach((card) => {
    card.addEventListener('click', flipCard)
});