const screen = document.getElementById('display');

const buttons = document.querySelectorAll('button:not(#clear, #equals)');
const clearBtn = document.getElementById('clear');
const equalBtn = document.getElementById('equals');
const currSpan = document.querySelector('.currVal');
const prevSpan = document.querySelector('.prevVal');



let prevVal = null;
let currVal = 0;
let operand;


let operations = ["/", "X", "+", "-"]


// this will check if currVal has already some operands in it
function checkNum(num) {
    return operations.some(operand => num.includes(operand));
}



function calculateNum(digit) {
    // if initital digit 0 & the first input is a operation then return;
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

    if (!operations.includes(digit)) {
        currVal = currVal > 0 ? currVal + digit : digit;
        prevVal = prevVal ? prevVal + digit : currVal;
    }
    else if (operations.includes(digit)) {
        if (prevVal) {
            prevVal = prevVal + digit;
            currVal = digit;
        }
    }

    display.classList.add('active');
    prevSpan.textContent = prevVal ? prevVal : currVal;
    currSpan.textContent = currVal;
}

// console.log(buttons);
buttons.forEach(button => {
    button.addEventListener('click', () => {
        calculateNum(button.textContent);
    })
})


clearBtn.addEventListener('click', () => {
    prevVal = 0;
    currVal = 0;
    screen.classList.remove('active');
    prevSpan.textContent = 0;
    currSpan.textContent = 0;
})

equalBtn.onclick = () => {

}