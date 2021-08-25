// 1. Написать функцию, которая принимает массив из чисел, строку с одним из значений “Asc”, “Desc”, “None” и возвращает массив тех же чисел, но отсортированный по следующим правилам:
// - Если отправить “Asc” - возвращает отсортированный массив в возрастающем порядке
// - Если отправить “Desc” - возвращает отсортированный массив в убывающем порядке
// - Если отправить “None” - возвращает массив без каких-либо модификаций

// Примеры:

// adn([4, 3, 2, 1], "Asc" ) ➞ [1, 2, 3, 4]
// adn([7, 8, 11, 66], "Desc") ➞ [66, 11, 8, 7]
// adn([1, 2, 3, 4], "None") ➞ [1, 2, 3, 4]


function adn(nums, select) {
    switch (select) {
        case "Asc":
            return nums.sort();
            break;
        case "Desc":
            return nums.sort((a, b) => b - a);
            break;
        case "None":
            return nums;
            break;
        default:
            return "Only Asc,Desc or None."
    }
}
console.log(adn([4, 3, 2, 1], "Asc" ));
console.log(adn([7, 8, 11, 66], "Desc"));
console.log(adn([1, 2, 3, 4], "None"));