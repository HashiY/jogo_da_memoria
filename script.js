const cards = document.querySelectorAll('.card');
let hasFlippedCard = false;
let firstCard, secondCard;
//Bloqueia o tabuleiro para nao ocorrer o bug de conseguir clicar em mais que duas cartas
let lockBoard = false;
var p = 0;

//funcao para virar a carta
function flipCard() {
    if(lockBoard) return;
    if(this === firstCard) return; // para nao clicar 2 vezes na mesma carta
    
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

//funcao que desabilita as cartas
function disableCards() {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);
    p++;
    resetBoard();
}

//funcao que desvira as cartas
function unflipCards() {
    lockBoard = true;

    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');

        resetBoard();
    }, 1500);
}

//funcao que checa se as cartas sao iguais
function checkForMatch(){
    //Compara as data-card que criou no html
    if(firstCard.dataset.card === secondCard.dataset.card) {
        disableCards();
        return;
    }
    unflipCards();
}

//funcao que reseta o tabuleiro
function resetBoard() {
    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];

    restartGame();
}

//funcao que embaralha as cartas
(function shuffle() {
    cards.forEach((card) => {
        let ramdomPosition = Math.floor(Math.random() * 12);
        card.style.order = ramdomPosition;
    })
})();// IIFE

function restartGame(){
    if(p == 6){
        setTimeout(() =>{
            cards.forEach((card) => { 
                let ramdomPosition = Math.floor(Math.random() * 12);
                card.classList.remove('flip');
                card.addEventListener('click', flipCard);
                setTimeout(() =>{
                    card.style.order = ramdomPosition;
                }, 10);
                
                p = 0;
            })
        }, 1500);
    }
}

//adiciona evento de clique para cada carta
cards.forEach((card) => {
    card.addEventListener('click', flipCard)
});