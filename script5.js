// 5. Написать функцию, которая принимает два массива чисел, сортирует их (можно использовать sort) и возвращает массив чисел, которые встречались в обоих входных массивах.

// Примеры:

// commonElements([-1, 3, 4, 6, 7, 9], [1, 3]) ➞ [3]
// commonElements([1, 3, 4, 6, 7, 9], [1, 2, 3, 4, 7, 10]) ➞ [1, 3, 4, 7]
// commonElements([1, 2, 2, 2, 3, 4, 5], [1, 2, 4, 5]) ➞ [1, 2, 4, 5]
// commonElements([1, 2, 3, 4, 5], [10, 12, 13, 15]) ➞ []


function commonElements(firstNums, secondNums) {
    firstNums.sort();
    secondNums.sort();
    const newArray = [];
    for (i = 0; i < firstNums.length; i++) {
        for (j = 0; j < secondNums.length; j++) {
            if (firstNums[i] == secondNums[j]) {
                newArray.push(firstNums[i]);
            }
        }
    }
    const uniqArray= new Set(newArray);
    return uniqArray;
}

console.log(commonElements([1, 2, 2, 2, 3, 4, 5], [1, 2, 4, 5]));