// 6. Написать функцию, которая принимает строку и возвращает первый элемент, который повторяется. Если таких элементов нет, вернуть -1.

// Примеры:

// firstRepeat("legolas") ➞ "l"
// firstRepeat("Gandalf") ➞ "a"
// firstRepeat("Balrog") ➞ "-1"
// firstRepeat("Isildur") ➞ "-1" // Внимание! Заглавная I не равна прописной i

function firstRepeat(word){
    let isTemp = false;
    for(i=0; i<word.length; i++){
        for(j=i+1; j<word.length; j++){
            if(word[i] == word[j]){
                console.log(word[i]);
                temp = true;
                break;
            }
        }
    }
    if(isTemp==false){
        console.log("-1");
    }
}

firstRepeat("Isildur");
