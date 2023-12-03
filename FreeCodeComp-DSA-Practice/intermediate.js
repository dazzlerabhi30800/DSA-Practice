console.log("This is Intermediate Algorithm Scripting Programs");


// Sum of all numbers between two items in an array;
function sumAll(arr) {
    let minNum = Math.min.apply(null, arr);
    let maxNum = Math.max.apply(null, arr);
    let sum = 0;
    for (let i = minNum; i <= maxNum; i++) {
        sum += i;
    }
    return sum;
}
// console.log(sumAll([4, 1]));
// console.log(sumAll([5, 10]));


// Diff b/w two Arrays
function diffArray(arr1, arr2) {
    const maxArr = arr1.length >= arr2.length ? arr1 : arr2;
    const minArr = arr1.length >= arr2.length ? arr2 : arr1;
    const newArr = [];
    for (let i = 0; i < maxArr.length; i++) {
        if (!minArr.includes(maxArr[i])) {
            newArr.push(maxArr[i]);
        }
    }
    for (let j = 0; j < minArr.length; j++) {
        if (!maxArr.includes(minArr[j])) {
            newArr.push(minArr[j]);
        }
    }


    return newArr;
}

function diffArray(arr1, arr2) {
    return arr1.concat(arr2).filter(item => !arr1.includes(item) || !arr2.includes(item));
}


// console.log(diffArray([1, 2, 3, 4], [1, 2, 3, 4, 5]));
// console.log(diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]));
// console.log(diffArray([1, "calf", 3, "piglet"], [1, "calf", 3, 4]));


// Seek & Destroy
// function destroyer(...args) {
//     let values = args.slice(1);
//     let arr = args[0];
//     return arr.filter(item => !values.includes(item));
// }


// function destroyer(arr) {
//     let values = Object.values(arguments).slice(1);
//     return arr.filter(item => !values.includes(item));
// }



function destroyer(arr) {
    let values = Array.from(arguments).slice(1);
    return arr.filter(item => !values.includes(item));
}

// console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));



// Wherefore art thou
function whatIsInAName(collection, source) {
    const properties = Object.getOwnPropertyNames(source);
    let newArr = [];
    for (let i = 0; i < collection.length; i++) {
        for (const keys in source) {
            if (collection[i][keys] === source[keys] && !newArr.includes(collection[i])) {
                newArr.push(collection[i]);
            }
        }
    }
    let filteredArr = newArr.filter(item => properties.every(i => item.hasOwnProperty(i) && item[i] === source[i]))
    console.log(filteredArr);
    return filteredArr;
}

// whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
// whatIsInAName([{ "apple": 1 }, { "apple": 1 }, { "apple": 1, "bat": 2 }], { "apple": 1 })
// whatIsInAName([{ "apple": 1, "bat": 2 }, { "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "bat": 2 })
// whatIsInAName([{ "a": 1, "b": 2, "c": 3 }], { "a": 1, "b": 9999, "c": 3 })



// Spinal Tap Case
function spinalCase(str) {
    let spinalString = str.split(/\s|_|(?=[A-Z])/).join("-").toLowerCase();
    let replacedStr = str.replace(/([a-z])([A-Z])/g, "$1 $2")
    console.log(replacedStr);
}

// spinalCase('This Is Spinal Tap');
// spinalCase('ThisIsSpinalTap');


// Pig Latin
// function translatePigLatin(str) {
//     if (str.match(/^[aeiou]/)) return str + "way";

//     const consonantCluser = str.match(/^[^aeiou]/)[0];
//     return str.substring(consonantCluser.length) + consonantCluser + "ay";
// }


function translatePigLatin(str) {
    let consonantRegex = /^[^aeiou]+/;
    let myConsonants = str.match(consonantRegex);
    console.log(myConsonants);
    return myConsonants !== null ?
        str.replace(consonantRegex, "").concat(myConsonants).concat("ay") : str.concat("way");
}


// console.log(translatePigLatin("lgorithmi"));
// console.log(translatePigLatin("schwartz"));



// Search & Replace
function myReplace(str, before, after) {
    const capital = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const regex = new RegExp(before, "i");
    const index = str.match(regex)['index'];
    if (capital.includes(str[index])) {
        after = after.charAt(0).toUpperCase() + after.substring(1);
    }
    else {
        after = after.charAt(0).toLowerCase() + after.substring(1);
    }

    return str.replace(regex, after);
}

// console.log(myReplace("A quick brown fox Jumped over the lazy dog", "jumped", "leaped"));
// console.log(myReplace("He is Sleeping on the couch", "Sleeping", "sitting"));


// DNA Pairing
function pairElement(str) {
    let newArr = [];
    for (let i = 0; i < str.length; i++) {
        switch (str[i]) {
            case 'G':
                newArr.push(["G", "C"]);
                break;
            case 'C':
                newArr.push(["C", "G"]);
                break;

            case 'A':
                newArr.push(["A", "T"]);
                break;

            case 'T':
                newArr.push(["T", "A"]);
                break;
            default:
                break;
        }
    }

    console.log(newArr);
}


// function pairElement(str) {
//     const pairs = {
//         A: 'T',
//         T: 'A',
//         G: 'C',
//         C: 'C',
//     }
//     return str.split("").map(x => [x, pairs[x]]);
// }


// console.log(pairElement('GCT'));


// Missing Letters 
function fearNotLetter(str) {
    const alphabets = "abcdefghijklmnopqrstuvwxyz";
    const lowerStr = str.toLowerCase();
    const startIndex = alphabets.indexOf(lowerStr[0]);
    const endIndex = alphabets.indexOf(lowerStr[lowerStr.length - 1]);
    let newStr = "";
    for (let i = startIndex; i <= endIndex; i++) {
        if (!lowerStr.includes(alphabets[i])) {
            newStr += alphabets[i];
        }
    }
    return newStr;
}

// console.log(fearNotLetter("abdh"));
// console.log(fearNotLetter("stvwx"));


// Unite Unique

function uniteUnique(...args) {
    let newArr = args.flat();
    return newArr.filter((item, index, arr) => arr.indexOf(item) === index);
}

// console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));


function convertHTML(str) {
    return str.replace(/[&'"<>]/g, function (match) {
        switch (match) {
            case "&":
                return '&amp;';

            case "'":
                return '&#39;';

            case '"':
                return '&quot;';

            case "<":
                return '&lt;';

            case ">":
                return '&gt;';
            default:
                return match;
        }
    })
}

// console.log(convertHTML("Dolce & Gabbana"));


// Sum All Odd Fibonacci Numbers
function sumFibs(num) {
    let preNum = 0;
    let currNum = 1;
    let result = 0;
    while (currNum <= num) {
        if (currNum % 2 !== 0) {
            result += currNum;
        }
        currNum += preNum;
        preNum = currNum - preNum;
    }

    return result;
}

// console.log(sumFibs(10));


// Sum All Primes
function sumPrimes(num) {
    // helper function to check primality
    function isPrime(num) {
        const sqrt = Math.sqrt(num);
        for (let i = 2; i <= sqrt; i++) {
            if (num % i === 0) {
                return false;
            }
        }
        return true;
    }

    let sum = 0;
    for (let i = 2; i <= num; i++) {
        if (isPrime(i)) {
            sum += i;
        }
    }

    return sum;
}

// console.log(sumPrimes(10));


function smallestCommon(arr) {
    const [min, max] = arr.sort((a, b) => a - b);
    const range = Array(max - min + 1).fill(0).map((_, i) => i + min);
    console.log(range);
    const upperBound = range.reduce((curr, next) => curr * next);
    for (let i = max; i <= upperBound; i += max) {
        const divisible = range.every(value => i % value === 0);
        if (divisible) {
            return i;
        }
    }
}

// console.log(smallestCommon([23, 18]));


// Drop it
function dropElements(arr, func) {
    while (arr.length > 0 && !func(arr[0])) {
        arr.shift();
    }
    return arr;
}

// console.log(dropElements([1, 2, 3, 4], function (n) { return n >= 3; }));
// console.log(dropElements([0, 1, 0, 1], function (n) { return n === 1; }));


// flat an Array
function steamrollArray(arr) {
    const flat = [].concat(...arr);
    return flat.some(Array.isArray) ? steamrollArray(flat) : flat;
}


// console.log(steamrollArray([1, [2], [3, [[4]]]]));


// Binary Agents
function binaryAgent(str) {
    var biString = str.split(" ");
    var uniString = [];

    /*using the radix (or base) parameter in parseInt, we can convert the binary
        number to a decimal number while simultaneously converting to a char*/

    for (var i = 0; i < biString.length; i++) {
        uniString.push(String.fromCharCode(parseInt(biString[i], 2)));
    }

    // we then simply join the string
    return uniString.join("");
}

// test here
// console.log(binaryAgent(
//     "01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"
// ));


function truthCheck(collection, pre) {
    return collection.some(item => item[pre]);
}

// console.log(truthCheck([{ name: "Quincy", role: "Founder", isBot: false }, { name: "Naomi", role: "", isBot: false }, { name: "Camperbot", role: "Bot", isBot: true }], "isBot"));

// Arguments optional;
function addTogether(...args) {
    const [first, second] = args;
    if (args.length > 1) {
        return typeof (first) === "number" && typeof (second) === "number" ? first + second : undefined;
    }
    else {
        return function (x) {
            return addTogether(first, x);
        }
    }

}

// console.log(addTogether("2", 5));


// find orbital period;
function orbitalPeriod(arr) {
    const GM = 398600.4418;
    const earthRadius = 6367.4447;
    const a = 2 * Math.PI;
    const newArr = [];

    const getOrbPeriod = function (obj) {
        const c = Math.pow(earthRadius + obj.avgAlt, 3);
        const b = Math.sqrt(c / GM);
        const orbPeriod = Math.round(a * b);
        // create new object
        return { name: obj.name, orbitalPeriod: orbPeriod };
    };

    for (let elem in arr) {
        newArr.push(getOrbPeriod(arr[elem]));
    }

    return newArr;
}

console.log(orbitalPeriod([{ name: "sputnik", avgAlt: 35873.5553 }]));