// 9. Написать функцию, которая принимает два числа в параметрах (num, length) и возвращает массив множителей числа num, пока массив не получит длину равную length. Использовать цикл

// Примеры:

// arrayOfMultiples(7, 5) ➞ [7, 14, 21, 28, 35]
// arrayOfMultiples(12, 10) ➞ [12, 24, 36, 48, 60, 72, 84, 96, 108, 120]
// arrayOfMultiples(17, 6) ➞ [17, 34, 51, 68, 85, 102]

function arrayOfMultiples(num, length){
    const result=[];
    for(i=1;i<=length; i++){
        result.push(num*i);
    }
    return result;
}

const myArray=arrayOfMultiples(17, 6);
console.log(myArray);