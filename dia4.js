const min = 1;
const max = 10; 
const numeroInteiro = Math.floor(Math.random() * (max - min + 1)) + min;
let venceu = false;
let tentativa = 3;
let titulo = document.getElementById("title")

while (!venceu && tentativa > 0) {
    const resposta = prompt(`Qual número você acha que é o correto? (Tentativas restantes: ${tentativa})`);
    if (resposta == numeroInteiro) {
        titulo.innerHTML = (`BOA! Você acertou o número aleatório! Que era ${numeroInteiro}!`);
        venceu = true;
    } else {
        tentativa--;
        if (tentativa > 0) {
            titulo.innerHTML = (`Infelizmente você não acertou, você ainda tem ${tentativa} tentativas!`);
        } else {
            titulo.innerHTML = (`Você não acertou o número aleatório, que era ${numeroInteiro} e suas tentativas acabaram. Tente novamente!`);
        }
    }
}