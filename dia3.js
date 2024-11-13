const area = prompt("Qual área você deseja seguir? Front-End ou Back-End?");
const msgAreaFront = "Ok, Front End!";
const msgAreaBack = "Ok, Back End!";
const titulo = document.getElementById("title")

let estudoFront;
let estudoBack;

if (area === "Front End" || area === "front end") {
    alert(msgAreaFront);
    estudoFront = prompt("E deseja aprender qual biblioteca? React ou Vue?");
    if(estudoFront === "React" || estudoFront === "Vue"){
        alert(`Ai sim, ${estudoFront} é uma boa escolha!`);
    } else {
        alert("Escolha uma biblioteca válida!");
    }
} else if (area === "Back End" || area === "back end") {
    alert(msgAreaBack);
    estudoBack = prompt("E deseja aprender qual biblioteca? C# ou Java?");
    if(estudoBack === "C#" || estudoBack === "Java"){
        alert(`Ai sim, ${estudoBack} é uma boa escolha!`);
    } else {
        alert("Escolha uma biblioteca válida!");
    }
} else {
    alert("Digite um valor válido!");
}

const futuroSim = prompt("E você deseja seguir se especializando na área escolhida?");
if (futuroSim === "Sim" || futuroSim === "sim") {
    if (estudoFront) {
        titulo.innerHTML = `Ai sim, seguir na área de ${area} e estudar a biblioteca de ${estudoFront} é uma ótima escolha!`;
    } else if (estudoBack) {
        titulo.innerHTML = `Ai sim, seguir na área de ${area} e estudar a biblioteca de ${estudoBack} é uma ótima escolha!`;
    }
} else if (futuroSim === "Não" || futuroSim === "não") {
    const futuroNao = prompt("Então deseja seguir na área de Fullstack?");
    if (futuroNao === "Sim" || futuroNao === "sim") {
        titulo.innerHTML = `Ai sim, a área de Fullstack é realmente desafiadora, mas eu acredito no seu potencial!`;
    } else if (futuroNao === "Não" || futuroNao === "não") {
        titulo.innerHTML = `Nesse caso, continue seus estudos e firme o seu desejo!`;
    }
}

let maisTec = prompt("AH, já ia me esquecendo, tem alguma outra tecnologia que você gostaria de aprender?");
while (maisTec && (maisTec === "Sim" || maisTec === "sim")) {
    const novaTec = prompt("Qual tecnologia você gostaria de aprender?");
    alert(`Interessante, ${novaTec} é realmente uma tecnologia fascinante! Espero que você se esforce nessa nova técnologia!`);
    maisTec = prompt("Tem mais alguma tecnologia que você gostaria de aprender?");
}
