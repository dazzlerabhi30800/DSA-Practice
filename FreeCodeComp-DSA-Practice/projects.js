console.log("Javascript Projects");


// Palindrome Checker
function palindromeChecker(str) {
    let regex = /[A-Za-z0-9]/g;
    let target = str.match(regex).join("").toLowerCase();
    return target === target.split("").reverse().join("");
}


// console.log(palindromeChecker("e_ye"));
// console.log(palindromeChecker("race car"));


// Roman Numeral Converter
function convertToRoman(num) {
    const romanNumerals = [
        { value: 1000, numeral: 'M' },
        { value: 900, numeral: 'CM' },
        { value: 500, numeral: 'D' },
        { value: 400, numeral: 'CD' },
        { value: 100, numeral: 'C' },
        { value: 90, numeral: 'XC' },
        { value: 50, numeral: 'L' },
        { value: 40, numeral: 'XL' },
        { value: 10, numeral: 'X' },
        { value: 9, numeral: 'IX' },
        { value: 5, numeral: 'V' },
        { value: 4, numeral: 'IV' },
        { value: 1, numeral: 'I' }
    ];
    let results = ""
    for (let i = 0; i < romanNumerals.length; i++) {
        while (num >= romanNumerals[i].value) {
            results += romanNumerals[i].numeral;
            num -= romanNumerals[i].value;
        }
    }
    return results;

}



// console.log(convertToRoman(8));


// Caesars Cipher
function rot13(str) {

    var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var result = "";

    function shift(letter) {
        var shiftNum = 13;
        var index = alphabet.indexOf(letter);
        if (index >= shiftNum) {
            return alphabet[index - shiftNum];
        } else if (index < shiftNum) {
            return alphabet[index - shiftNum + alphabet.length];
        }
    }

    for (let i = 0; i < str.length; i++) {
        if (str[i].match(/\w/)) {
            result = result.concat(
                shift(str[i])
            );
        } else if (str[i].match(/\s/) || str[i].match(/\W/)) {
            result = result.concat(str[i]);
        }
    }
    return result;
}

// console.log(rot13("SERR PBQR PNZC"));


// Telephone Number Validator
function telephoneCheck(str) {
    let rex1 = /^(1\s?)?\d{3}([-\s]?)\d{3}\2\d{4}$/,
        rex2 = /^(1\s?)?\(\d{3}\)\s?\d{3}[-\s]?\d{4}$/;

    if (rex1.test(str)) {
        return true;
    }
    else {
        return rex2.test(str) ? true : false
    }
}

telephoneCheck("555-555-5555")
telephoneCheck("1 555-555-5555")
telephoneCheck("(555)555-5555")
telephoneCheck("1 (555) 555-5555")
telephoneCheck("5555555555")
telephoneCheck("555-5555")



// Cash Register
function checkCashRegister(price, cash, cid) {
    const currencyUnits = [
        ["PENNY", 0.01],
        ["NICKEL", 0.05],
        ["DIME", 0.1],
        ["QUARTER", 0.25],
        ["ONE", 1],
        ["FIVE", 5],
        ["TEN", 10],
        ["TWENTY", 20],
        ["ONE HUNDRED", 100]
    ];
    let change = cash - price;
    let changeArr = [];

    // function to round to two decimal places
    const roundToTwoDecimalPlaces = num => Math.round(num * 100) / 100;



    // Loop through the curency units;
    for (let i = currencyUnits.length - 1; i >= 0; i--) {
        const [unit, value] = currencyUnits[i];
        const availableCash = cid[i][1];
        // unit count is the amount of unit of current Units
        const unitCount = Math.floor(availableCash / value);
        let returnedCount = 0;


        // calculate the amount of this unit to be returned
        while (change >= value && returnedCount < unitCount) {
            change = roundToTwoDecimalPlaces(change - value);
            // console.log({ change, i, unitCount, value });
            returnedCount++;
        }


        if (returnedCount > 0) {
            changeArr.push([unit, returnedCount * value])
        }
    }


    // Calculate the total change in the drawer
    console.log({ changeArr });
    const totalChangeInDrawer = roundToTwoDecimalPlaces(
        changeArr.reduce((acc, [, returnedValue]) => acc + returnedValue, 0)
    );

    // check if the drawer is closed or not
    let status = "OPEN";
    if (change > 0) {
        status = "INSUFFICIENT_FUNDS";
        changeArr = [];
    }
    else if (totalChangeInDrawer === cash - price) {
        status = "CLOSED";
        changeArr = cid;
    };


    return { status, change: changeArr };

}


function checkCashRegister(price, cash, cid) {
    const currencyUnit = {
        'PENNY': 0.01,
        'NICKEL': 0.05,
        'DIME': 0.1,
        'QUARTER': 0.25,
        'ONE': 1,
        'FIVE': 5,
        'TEN': 10,
        'TWENTY': 20,
        'ONE HUNDRED': 100
    };

    let changeDue = cash - price;
    let change = [];

    const totalCID = cid.reduce((acc, curr) => acc + curr[1], 0);

    if (totalCID < changeDue) {
        return { status: 'INSUFFICIENT_FUNDS', change: [] };
    } else if (totalCID === changeDue) {
        return { status: 'CLOSED', change: cid };
    } else {
        cid = cid.reverse();

        for (let i = 0; i < cid.length; i++) {
            const currency = cid[i][0];
            const currencyTotal = cid[i][1];
            const unit = currencyUnit[currency];
            let currencyAmount = 0;

            while (changeDue >= unit && currencyTotal > 0) {
                changeDue -= unit;
                changeDue = Math.round(changeDue * 100) / 100;
                currencyTotal -= unit;
                currencyAmount += unit;
            }

            if (currencyAmount > 0) {
                change.push([currency, currencyAmount]);
            }
        }
    }

    if (changeDue > 0) {
        return { status: 'INSUFFICIENT_FUNDS', change: [] };
    }

    return { status: 'OPEN', change };
}

// Example usage:
const result = checkCashRegister(19.5, 20, [
    ['PENNY', 1.01],
    ['NICKEL', 2.05],
    ['DIME', 3.1],
    ['QUARTER', 4.25],
    ['ONE', 90],
    ['FIVE', 55],
    ['TEN', 20],
    ['TWENTY', 60],
    ['ONE HUNDRED', 100]
]);

console.log(result);


// checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);