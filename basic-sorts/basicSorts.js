function bubbleSort(arr) {
    for (var i = arr.length - 1; i > 0; i--) {
        for (var j = 0; j < i; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}


function selectionSort(arr) {
    for (var i = 0; i < arr.length; i++) {
        let min = i;
        for (j = i + 1; j < arr.length; j++) {
            if (arr[min] > arr[j]) {
                min = j;
            }
        }
        if (min !== i) {
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
            arr[j + 1] = arr[j]
        }
        arr[j + 1] = temp;
    }
    return arr;
}

const arr = [44, 1, 99, 10, 2];

// console.log(bubbleSort(arr));
// console.log(selectionSort(arr));
console.log(insertionSort(arr));


function checkAmount() {
    var abhiAccount = {
        name: "Abhishek",
        amount: 4000,
        deductAmount: function (amount) {
            this.amount -= amount;
            return this.amount;
        }
    }


    var prabAccount = {
        name: "Prabh Gill",
        amount: 6000,
    }


    var totalAmount = function (account, amount) {
        return abhiAccount.deductAmount.call(account, amount);
    }
    console.log(totalAmount(prabAccount, 500));
}


checkAmount();