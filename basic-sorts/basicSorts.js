function bubbleSort(array) {
    for (var i = array.length - 1; i > 0; i--) {
        for (var j = 0; j < i; j++) {
            if (array[j] > array[j + 1]) {
                let temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }
    return array;
}




function selectionSort(arr) {
    for (var i = 0; i < arr.length; i++) {
        let min = i;
        for (var j = i + 1; j < arr.length; j++) {
            if (arr[min] > arr[j]) {
                min = j;
            }
        }
        if (i !== min) {
            let temp = arr[i];
            arr[i] = arr[min];
            arr[min] = temp;
        }
    }
    return arr;
}


function insertionSort(arr) {
    let temp;
    for (let i = 1; i < arr.length; i++) {
        temp = arr[i];
        for (var j = i - 1; arr[j] > temp && j > -1; j--) {
            arr[j + 1] = arr[j];
        }
        arr[j + 1] = temp;
    }
    return arr;
}

const arr1 = [4, 2, 34, 6, 100, 1];
// console.log(bubbleSort(arr1));
// console.log(selectionSort(arr1));
console.log(insertionSort(arr1));