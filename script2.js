// 2. Написать функцию, которая принимает число от 1 до 999 и возвращает его строковый вариант.

// Примеры:

// numToString(123) ➞ “Сто двадцать три”
// numToString(5) ➞ “Пять”
// numToString(811) ➞ “Восемьсот одиннадцать”

function numToString(num){
    const newArr = [];
    let digits = num.toString().split('');
    var realDigits = digits.map(Number);
    for(i=realDigits.length; i >= 0; i--){
        if(realDigits[realDigits.length-1]==1 && realDigits[realDigits.length-2]!=1){ newArr.unshift("один")}
        if(realDigits[realDigits.length-1]==2 && realDigits[realDigits.length-2]!=1){ newArr.unshift("два")}
        if(realDigits[realDigits.length-1]==3 && realDigits[realDigits.length-2]!=1){ newArr.unshift("три")}
        if(realDigits[realDigits.length-1]==4 && realDigits[realDigits.length-2]!=1){ newArr.unshift("четыре")}
        if(realDigits[realDigits.length-1]==5 && realDigits[realDigits.length-2]!=1){ newArr.unshift("пять")}
        if(realDigits[realDigits.length-1]==6 && realDigits[realDigits.length-2]!=1){ newArr.unshift("шесть")}
        if(realDigits[realDigits.length-1]==7 && realDigits[realDigits.length-2]!=1){ newArr.unshift("семь")}
        if(realDigits[realDigits.length-1]==8 && realDigits[realDigits.length-2]!=1){ newArr.unshift("восемь")}
        if(realDigits[realDigits.length-1]==9 && realDigits[realDigits.length-2]!=1){ newArr.unshift("девять")}
        if(realDigits[realDigits.length-1 && realDigits[realDigits.length-2]!=1]==0){ newArr.unshift("")}

        if(realDigits[realDigits.length-1]==1 && realDigits[realDigits.length-2]==1){ newArr.unshift("одинадцать")}
        if(realDigits[realDigits.length-1]==2 && realDigits[realDigits.length-2]==1){ newArr.unshift("двенадцать")}
        if(realDigits[realDigits.length-1]==3 && realDigits[realDigits.length-2]==1){ newArr.unshift("тринадцать")}
        if(realDigits[realDigits.length-1]==4 && realDigits[realDigits.length-2]==1){ newArr.unshift("четырнадцать")}
        if(realDigits[realDigits.length-1]==5 && realDigits[realDigits.length-2]==1){ newArr.unshift("пятнадцать")}
        if(realDigits[realDigits.length-1]==6 && realDigits[realDigits.length-2]==1){ newArr.unshift("шестнадцать")}
        if(realDigits[realDigits.length-1]==7 && realDigits[realDigits.length-2]==1){ newArr.unshift("семьнадцать")}
        if(realDigits[realDigits.length-1]==8 && realDigits[realDigits.length-2]==1){ newArr.unshift("восемнадцать")}
        if(realDigits[realDigits.length-1]==9 && realDigits[realDigits.length-2]==1){ newArr.unshift("девятнадцать")}
        if(realDigits[realDigits.length-1 && realDigits[realDigits.length-2]!=1]==0){ newArr.unshift("")}


        if(realDigits[realDigits.length-2]==1 && realDigits[realDigits.length-1]==false){ newArr.unshift("десять")}
        if(realDigits[realDigits.length-2]==2){ newArr.unshift("двадцать")}
        if(realDigits[realDigits.length-2]==3){ newArr.unshift("тридцать")}
        if(realDigits[realDigits.length-2]==4){ newArr.unshift("сорок")}
        if(realDigits[realDigits.length-2]==5){ newArr.unshift("пятьдесят")}
        if(realDigits[realDigits.length-2]==6){ newArr.unshift("шесдесят")}
        if(realDigits[realDigits.length-2]==7){ newArr.unshift("семьдесят")}
        if(realDigits[realDigits.length-2]==8){ newArr.unshift("восмьдесят")}
        if(realDigits[realDigits.length-2]==9){ newArr.unshift("девяносто")}
        if(realDigits[realDigits.length-2]==0){ newArr.unshift("")}

        if(realDigits[realDigits.length-3]==1){ newArr.unshift("сто")}
        if(realDigits[realDigits.length-3]==2){ newArr.unshift("двести")}
        if(realDigits[realDigits.length-3]==3){ newArr.unshift("триста")}
        if(realDigits[realDigits.length-3]==4){ newArr.unshift("четыреста")}
        if(realDigits[realDigits.length-3]==5){ newArr.unshift("пятьсот")}
        if(realDigits[realDigits.length-3]==6){ newArr.unshift("шестьсот")}
        if(realDigits[realDigits.length-3]==7){ newArr.unshift("семьсот")}
        if(realDigits[realDigits.length-3]==8){ newArr.unshift("восмьсот")}
        if(realDigits[realDigits.length-3]==9){ newArr.unshift("девятьсот")}
        if(realDigits[realDigits.length-3]==0){ newArr.unshift("")}
        break;
    }
    return newArr.join(" ");
}

console.log(numToString(223));
console.log(numToString(5));
console.log(numToString(811));