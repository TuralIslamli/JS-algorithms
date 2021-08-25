// 3. Написать функцию, которая принимает строку (Rock, Paper или Scissors), рандомно сама генерирует один из этих вариантов и возвращает в ответ следующую строку: “Player selected Scissors. CPU selected Rock. CPU won”. Если выбор пал на одинаковые строки, то строка должна быть следующей: “Player and CPU both selected Paper. Friendship won”. Игра камень ножницы бумага

// Примеры:

// rps("Rock") ➞ “Player selected Rock. CPU selected Scissors. Player won”
// rps("Paper") ➞ “Player selected Paper. CPU selected Scissors. CPU won”
// rps("Rock") ➞ “Player and CPU both selected Rock. Friendship won”

var userChoise = "";
var isTemp = true;

while (isTemp) {
    userChoise = prompt("Select Rock,Paper or Scissors");
    if (userChoise == "Rock") {
        isTemp = false;
    } else if (userChoise == "Paper") {
        isTemp = false;
    } else if (userChoise == "Scissors") {
        isTemp = false;
    } else {
        alert("Please select correct items")
    }
}
rps(userChoise);

function rps(userSelect) {
    let isGame = true;
    let randomNum = Math.floor(Math.random() * 3);
    var cpuRandom = "";
    if (randomNum == 0) {
        cpuRandom = "Rock";
    } else if (randomNum == 1) {
        cpuRandom = "Paper";
    } else if (randomNum == 2) {
        cpuRandom = "Scissors";
    }
    switch (userSelect) {
        case "Rock":
            if (cpuRandom == "Rock") {
                alert("Player and CPU both selected Rock. Friendship won");
            } else if (cpuRandom == "Paper") {
                alert("Player selected Rock. CPU selected Paper. Cpu won");
            } else if (cpuRandom == "Scissors") {
                alert("Player selected Rock. CPU selected Scissors. Player won");
            }
            break;
        case "Paper":
            if (cpuRandom == "Rock") {
                alert("Player selected Paper. CPU selected Rock. Player won")
            } else if (cpuRandom == "Paper") {
                alert("Player and CPU both selected Paper. Friendship won");
            } else if (cpuRandom == "Scissors") {
                alert("Player selected Paper. CPU selected Scissors. Cpu won")
            }
            break;
        case "Scissors":
            if (cpuRandom == "Rock") {
                alert("Player selected Scissors. CPU selected Rock. Cpu won")
            } else if (cpuRandom == "Paper") {
                alert("Player selected Scissors. CPU selected Paper. Player won");
            } else if (cpuRandom == "Scissors") {
                alert("Player selected Scissors. CPU selected Scissors. Friendship won")
            }
            break;
    }

}