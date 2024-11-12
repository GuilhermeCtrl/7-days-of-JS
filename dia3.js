const área = prompt("Qual área você deseja seguir? Front-End ou Back-End?");
const msgAreaFront = "Ok, Front End!";
const msgAreaBack = "Ok, Back End!";

if (área === "Front End" || "front end"){
    alert(msgAreaFront);
}else if (área === "Back End" || "back end"){
    alert(msgAreaBack);
}