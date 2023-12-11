const screen = document.getElementById('display');

const buttons = document.querySelectorAll('button:not(#clear, #equals)');
const clearBtn = document.getElementById('clear');
const equalBtn = document.getElementById('equals');
const currSpan = document.querySelector('.currVal');
const prevSpan = document.querySelector('.prevVal');



let prevVal = null;
let currVal = 0;
let operand = null;
let result = null;


let operations = ["/", "*", "+", "-"]


// this will check if currVal has already some operands in it
function checkNum(num) {
    return operations.some(operand => num.includes(operand));
}



function calculateNum(digit) {
    // if initital digit 0 & the first input is a operation then return;
    if (digit == 'X') {
        digit = "*";
    }
    if (currVal === 0 && operations.includes(digit)) {
        return;
    }
    // if there is already a 0 then we cannot append 0 to 0;
    if (currVal === 0 && digit == '0') {
        return;
    }
    // to check the number doesn't begin with .
    if (currVal === 0 && digit == '.') {
        return;
    }
    // to check if there are not consecutive decimal points
    if (currVal !== 0 && currVal.includes('.') && digit == '.') {
        return;
    }


    // if the input digit is not from the operand then append it with the curr & prev Value
    if (!operations.includes(digit)) {
        currVal = currVal > 0 ? currVal + digit : digit;
        prevVal = prevVal ? prevVal + digit : currVal;
        operand = null;
    }
    // if the input is in the operand;
    else if (operations.includes(digit)) {
        if (prevVal) {
            currVal = digit;
            // const regex = /[+|-|/|X]$/i;
            if (operand) {
                prevVal = prevVal.slice(0, prevVal.length - 1) + digit;
            }
            else {
                prevVal = prevVal + digit;
            }
            operand = digit;
            // console.log(prevVal);
        }
    }

    display.classList.add('active');
    prevSpan.textContent = prevVal ? prevVal : currVal;
    currSpan.textContent = currVal;
}

buttons.forEach(button => {
    button.addEventListener('click', () => {
        calculateNum(button.textContent);
    })
})


clearBtn.addEventListener('click', () => {
    prevVal = 0;
    currVal = 0;
    result = null;
    screen.classList.remove('active');
    prevSpan.textContent = 0;
    currSpan.textContent = 0;
})

equalBtn.onclick = () => {
    if (!prevVal) return;
    result = eval(prevVal);
    prevSpan.textContent = `${prevVal}=${result}`;
    currSpan.textContent = result;
    prevVal = result.toString();
    currVal = result.toString();
}