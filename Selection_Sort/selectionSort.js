function SelectionSort(arr) {
    // Начало выполнения сортировки выбором для переданного массива arr
    for(let i = 0; i < arr.length; i++){
        // Цикл по массиву начиная с 0 до конца массива
        min = i; // Предположим, что минимальный элемент равен текущему индексу i
        
        for(let j = i + 1; j < arr.length; j++) {
            // Цикл по подмассиву, начиная с элемента, следующего за текущим i, до конца массива
            if(arr[min] > arr[j]) {
                // Если элемент с индексом min больше, чем текущий элемент j
                min = j; // Присвоить min значение j, так как найден новый минимальный элемент
            }
        }
        
        let tmp = arr[i];
        arr[i] = arr[min]; // Поменять местами текущий элемент с минимальным
        arr[min] = tmp; // Поменять местами минимальный элемент с текущим, используя tmp для временного хранения значения
    }
    return arr; // Вернуть отсортированный массив
}

console.log(SelectionSort(arr)); // Вызов функции SelectionSort и вывод отсортированного массива
