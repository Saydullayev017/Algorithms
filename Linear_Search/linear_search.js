// есть у нас массив случайный разбросынных чисел
const array = [ 1, 4, 5, 8, 1, 2, 7, 2, 11 ];
let count = 0;
// создаем функцию
function lineSearch (array, elem) { // у функции есть два параметра, массив и элемент
    count += 1
    // по скольку поиск является линейным, надо последовательно пробигатся по массиву
    for (let i = 0; i < array.length; i++) {
        if (array[i] === elem) { // если нашли этот элемент
            return i; // мы возврошаем index массиве
        }
    }
    return null; // если элемент за вес цыкл не нашли венем пустое значения null
}

console.log(lineSearch (array, 111)) // null
console.log(lineSearch (array, 11)) // 8
console.log("count = ", count) // количество итерации



