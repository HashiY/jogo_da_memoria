const cards = document.querySelectorAll('.card');

//função para virar carta
function flipCard() {
    this.classList.toggle('flip');
}

//adiciona evento de clique na carta, para cada carta
cards.forEach((card) => {
    card.addEventListener('click', flipCard)
});