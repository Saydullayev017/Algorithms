// Определение функции бинарного поиска
function binarySearch(array, item) {
    // Определение начального, конечного, среднего индекса и переменных для хранения информации о нахождении элемента
    let start = 0;
    let end = array.length;
    let middle;
    let found = false;
    let postion = -1;

    // Выполнение цикла, пока элемент не найден и не достигнут конец массива
    while(found == false && start <= end) {
        // Вычисление среднего индекса
        middle = Math.floor((start + end) / 2);

        // Проверка на совпадение элемента
        if(array[middle] === item) {
            found = true;
            postion = middle;
            return postion; // Возврат позиции элемента
        }
        // Если искомое значение меньше элемента по среднему индексу, установить новый конечный индекс
        if(item < array[middle]) {
            end = middle - 1;
        } else { // Иначе установить новый начальный индекс
            start = middle + 1;
        }
    }
    return postion; // Возврат позиции элемента
}

// Вывод результата поиска значения 10 в массиве
console.log(binarySearch(array, 10));
