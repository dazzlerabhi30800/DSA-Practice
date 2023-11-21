function three() {
    console.log('three')
}


function two() {
    three();
    console.log('two')
}

function one() {
    two();
    console.log('one')
}

// one();


function recursionFactorial(num) {
    if (num === 1) return 1;
    return num * recursionFactorial(num - 1);
}

function factorial1(num) {
    let temp = 1;
    while (num > 0) {
        temp *= num;
        num--;
    }
    return temp;
}


function factorial2(num) {
    let temp = 1;
    for (var i = 1; i <= num; i++) {
        temp *= i;
    }
    return temp;
}

console.log(factorial1(5));
console.log(factorial2(4));