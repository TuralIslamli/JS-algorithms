// 8. Написать функцию, которая принимает число и возвращает другую функцию. Возвращаемая функция должна принимать массив чисел в качестве параметра и возвращать тот же массив, но где каждое число разделено на число, которое было отправлено в первую функцию

// Примеры:

// const first = factory(15)
// const arr = [30, 45, 60] // 30 / 15 = 2, 45 / 15 = 3, 60 / 15 = 4
// first(arr) ➞ [2, 3, 4]

// const second = factory(2)
// const arr = [2, 4, 6] // 2 / 2 = 1, 4 / 2 = 2, 6 / 2 = 3
// second(arr) ➞ [1, 2, 3]

function factory(num){
    function myArray(nums){
        let temp=[];
        for(i=0; i<nums.length;i++){
           temp.push(nums[i]/num);
        }
        return temp;
    }
    return myArray;
}

const first = factory(15);

const arr = [30, 45, 60];

console.log(first(arr));

const second = factory(2);
const arrSecond = [2, 4, 6];
console.log(second(arrSecond));