# Desenvolvendo um jogo da memória :flower_playing_cards:

Repositório do desafio de criar um jogo da memória utilizando HTML5, CSS3 e JavaScript, aprendendo os efeitos 3D no CSS e lógica de programação utilizando condicionais, Immediately Invoked Function Expression e manipulação de Array para o Bootcamp JavaScript Game Developer
da [DIO](https://web.dio.me/home).

# Partes

Parte 1 – No html só criou no main as div com 2 imagens das cartas que seria a frente e o verso, com tudo tem 12 cartas. No css colocou o tamanho, a posição das cartas e mais alguns detalhes.

Parte 2 – No css criou o active da carta e a animação do clique. No js adiciona o evento de clique para cada carta.

Parte 3 – No css criou as animações das cartas para virarem quando forem clicadas.

Parte 4 – No js criou a função para virar a carta e fazer uma comparação se a primeira carta e a segunda carta clicada são iguais com o data-card que colocou no html.

Parte 5 – No js criou uma função que retira o listener do elemento da carta que clicou e desabilita. A função que desvira as cartas se não forem iguais. Bloqueia o tabuleiro para não ocorrer o bug de conseguir clicar em mais que duas cartas e fazer comparação com varias cartas.

Parte 6 – Poder clicar na mesma carta duas vezes ocorre o bug de comparar essa mesma carta e considerar que são iguais e deixa desvirada, então cria um if que retorna se o this for igual a primeira carta na hora de virar as cartas. Cria uma função que reseta o tabuleiro.

Parte 7 – Criou a função que embaralha as cartas.