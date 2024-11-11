// - Qual o seu nome?
const nome = prompt("Digite seu Nome!")
// - Quantos anos você tem?
const idade = prompt("Agora, digite sua Idade!")
// - Qual linguagem de programação você está estudando?
const linguagemProg = prompt("E qual sua linguagem de programação?")

const msg = `Olá ${nome}, você tem ${idade} anos, e estuda ${linguagemProg}, que bacana!`
alert(msg)

const feedback = prompt(`Você curte estudar ${linguagemProg}? Digite 1 para sim e 2 para não!`)
const msgTrue = `Que bacana! Estudar ${linguagemProg} é realmente divertido!`
const msgFalse = `Caramba! Mas não desista, já tentou estudar algo além de ${linguagemProg}?`
if(feedback === '1'){
    alert(msgTrue)
}else{
    alert(msgFalse)
}