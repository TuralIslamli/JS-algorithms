// 10. Написать функцию, которая принимает значения start и end в параметрах, возвращает массив, который содержит все числа в данном диапазоне, включая отправленные. Порядок расположения чисел в возвращаемом массиве зависит от того, какие параметры были отправлены

// Примеры:

// reversibleInclusiveList(1, 5) ➞ [1, 2, 3, 4, 5]
// reversibleInclusiveList(2, 8) ➞ [2, 3, 4, 5, 6, 7, 8]
// reversibleInclusiveList(10, 20) ➞[10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
// reversibleInclusiveList(24, 17) ➞[24, 23, 22, 21, 20, 19, 18, 17]

function reversibleInclusiveList(start, end){
    const newArray=[];
    if(end>=start){
        for(i=start; i<=end; i++){
            newArray.push(i);
        }
        return newArray;
    }
    else{
        for(i=start; i>=end; i--){
            let length = newArray.push(i);
        }
        return newArray;
    }
}

const myArray=reversibleInclusiveList(1,5);
const myArraySecond=reversibleInclusiveList(24, 17);
console.log(myArray);
console.log(myArraySecond);