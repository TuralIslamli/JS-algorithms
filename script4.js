// 4. Найти расстояние между двумя точками в двумерном декартовом пространстве

// Примеры:

// findCoords(Сюда отправить координаты двух точек) ➞ “64”
// findCoords(Сюда отправить координаты двух точек) ➞ "23"

function findCoords(x1, y1, x2, y2){
    const result = Math.sqrt(Math.pow((x1 - x2), 2) + Math.pow((y1 - y2), 2));

    return result;
}

let x1 = prompt("Введите x1");
let y1 = prompt("Введите y1");
let x2 = prompt("Введите x2");
let y2 = prompt("Введите y2");

alert("Растояние между координатами:"+findCoords(x1, y1, x2, y2));

