// 7. Числа Фибоначчи считаются следующим образом:
// F(0) = 0
// F(1) = 1
// ...
// F(n) = F(n-2) + F(n-1)
// Написать функцию, которая будет считать n-ное число из ряда Фибоначчи. Использовать рекурсию

// Примеры:

// fib(0) ➞ 0
// fib(1) ➞ 1
// fib(2) ➞ 1
// fib(8) ➞ 21

function fibonachi(num){
    if(num <= 1){
        return num;
      }else{
        return fibonachi(num - 1) + fibonachi(num - 2);
      }
}

console.log(fibonachi(8));