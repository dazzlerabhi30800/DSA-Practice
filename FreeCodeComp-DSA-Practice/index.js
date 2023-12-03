const myStr = 'I am a "double quoted" string inside "double quotes"';
// console.log(myStr);

const myStr2 = "FirstLine\n\t\\SecondLine\nThirdLine";
// console.log(myStr2)

let myStr3 = "This is the first sentence. ";
myStr3 += "This is the second sentence.";
// console.log(myStr3);

let myGlobal = 10;

function func1() {
  oopsGlobal = 5;
}

function func2() {
  let output = "";
  if (typeof myGlobal !== undefined) {
    output += "myGlobal: " + myGlobal;
  }

  if (typeof oopsGlobal !== undefined) {
    output += " oopsGlobal: " + oopsGlobal;
  }

  console.log(output);
}

function checkNum(num) {
  if (!num < 5) {
    console.log("number is greater than 5");
    return false;
  }
  console.log("number is less than 5");
  return true;
}

const recordCollection = {
  2548: {
    albumTitle: "Slippery When Wet",
    artist: "Bon Jovi",
    tracks: ["Let It Rock", "You Give Love a Bad Name"],
  },
  2468: {
    albumTitle: "1999",
    artist: "Prince",
    tracks: ["1999", "Little Red Corvette"],
  },
  1245: {
    artist: "Robert Palmer",
    tracks: [],
  },
  5439: {
    albumTitle: "ABBA Gold",
  },
};

function updateRecords(records, id, prop, value) {
  if (value === "") {
    delete records[id][prop];
  } else if (prop === "tracks") {
    if (records[id][prop]) {
      records[id][prop].push(value);
    } else {
      records[id][prop] = [];
      records[id][prop].push(value);
    }
  } else {
    records[id][prop] = value;
  }
  return records;
}

// Profile Lookup Program
const contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];

function lookUpProfile(name, prop) {
  let i = 0;
  let result;
  while (i < contacts.length) {
    if (contacts[i]["firstName"] === name) {
      if (contacts[i][prop]) {
        result = contacts[i][prop];
      } else {
        result = "No such property";
      }
      return result;
    } else {
      result = "No such contact";
      i++;
    }
  }

  return result;
}

// (function returnRandomFunc() {
//     let rand = Math.floor(Math.random() * 10);
//     console.log({ rand });
// }
// )()

function countDown(n) {
  if (n < 1) {
    return [];
  } else {
    const countArr = countDown(n - 1);
    countArr.unshift(n);
    return countArr;
  }
}

function rangeOfNumbers(startNum, endNum) {
  if (startNum > endNum) {
    return [];
  } else {
    const countArr = rangeOfNumbers(startNum + 1, endNum);
    countArr.unshift(startNum);
    return countArr;
  }
}

// function rangeOfNumbers(startNum, endNum) {
//   return endNum < startNum
//     ? []
//     : [...rangeOfNumbers(startNum, endNum - 1), endNum];
// }

let numArr = [];
var printNumTwo;
for (let i = 0; i < 5; i++) {
  numArr.push(i);
  if (i === 2) {
    printNumTwo = function () {
      return i;
    };
  }
}

const arr = [34, 45, 100];
// const max = Math.max.apply(null, arr);
const max = Math.max(...arr);
const spreadedArr = [...arr];

let petString = "James has a pet cat";
// let regex = /dog|cat|bird|fish/;
// let twinkleStar = "Twinkle, twinkle, little star";
// let starRegex = /twinkle/gi;

// let quoteSample = "3 blind mice";
// let myRegex = /[^aeiou0-9]/gi;

// let text = "<h1>The winter is coming!</h1>";
// let myRegex = /<.*?>/;

// let matchString = "P1P5P4CCCcP2P6P3";
// let matchString = "9aaa9";
// let regex = /C+/;
// let regex = /\w/g;

// let ohStr = "Ohhh no";
// let ohRegex = /Oh{3,6}\sno/; // Change this line
// let result = ohRegex.test(ohStr);
// console.log(ohStr.match(ohRegex));

// let sampleWord = "bana12";
// let pwRegex = /(?=\w{5})(?=\d*)/; // Change this line
// console.log(sampleWord.match(pwRegex));
// console.log(pwRegex.test(sampleWord));

// let myString = "Eleanor Roosevelt";
// let myString = "Franklin D. Roosevelt";
// let myRegex = /(eleanor|franklin)\s*\w*\W*\sRoosevelt/i; // Change this line
// let result = myRegex.test(myString); // Change this line
// console.log(result);

// Captures groups
// let repeatStr = "row row row row your boat";
// let repeatRegex = /(\w+) \1 \1/;
// repeatRegex.test(repeatStr); // Returns true
// console.log(repeatStr.match(repeatRegex)); // Returns ["row row row", "row"]

// let repeatNum = "42 42 42 42";
// let repeatNum = "100 100 100";
// let reRegex = /^(\d+) \1 \1$/;
// let reRegex = /^(\d+) \1 \1(?!.)/;

let hello = "   Hello, World!   ";
let wsRegex = /^(\s+)|(\s+)$/g;
let result = hello.replace(wsRegex, "");
// console.log(result);

// how to make a 2 dimensional array
function twoDimen(m, n) {
  let newArr = [];
  let row = [];
  for (let i = 0; i < m; i++) {
    // row.push(i);
    row[i] = [];
    for (let j = 0; j < n; j++) {
      row[i].push(0);
    }
    newArr.push(row[i]);
  }
  return newArr;
}

// slice functions
// const arrToBeSliced = ["DarkBrown", "HotRed", "PassionBlack", "SapphireGreen"];
// let slicedArr = arrToBeSliced.slice(1, 4);
// console.log({ slicedArr, arrToBeSliced });

// function copyMachine(arr, num) {
//   let newArr = [];
//   while (num >= 1) {
//     // Only change code below this line
//     newArr = [...newArr, [...arr]];
//     // Only change code above this line
//     num--;
//   }
//   return newArr;
// }

// let user = {
//   name: 'Kenneth',
//   age: 28,
//   data: {
//     username: 'kennethCodesAllDay',
//     joinDate: 'March 26, 2016',
//     organization: 'freeCodeCamp',
//     friends: [
//       'Sam',
//       'Kira',
//       'Tomo'
//     ],
//     location: {
//       city: 'San Francisco',
//       state: 'CA',
//       country: 'USA'
//     }
//   }
// };

// user.data.friends.push("Michael");
// console.log(user);


function findLongestWordLength(str) {
  let splitStr = str.split(" ");
  let max = splitStr[0].length;
  for (let i = 0; i < splitStr.length; i++) {
    if (splitStr[i].length >= max) {
      max = splitStr[i].length;
    }
  }
  return max;
}

function findElement(arr, func) {
  let num = arr.map(item => item % 2 === 0);
  return num;
}

// console.log(findElement([1, 2, 3, 4], num => num % 2 === 0));


// function booWho(bool) {
//   return (typeof bool === "boolean") ? bool : false;
// }
// console.log(booWho(false));


// function titleCase(str) {
//   let splitStr = str.split(" ");
//   for (let i = 0; i < splitStr.length; i++) {
//     splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].slice(1).toLowerCase();
//   }

//   return splitStr.join(" ");
// }


// function frankenSplice(arr1, arr2, n) {
//   let slicedArr = arr2.slice();
//   slicedArr.splice(n, 0, ...arr1);

//   // let splicedArr = [...arr2.slice(0, n), ...arr2.splice(n, arr1.length, arr1), ...slicedArr];
//   return slicedArr;
// }

// console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));


function getIndexToIns(arr, num) {
  arr.sort((a, b) => a - b);
  let pushIndex;
  for (let i = 0; i < arr.length; i++) {
    if (num === arr[i]) {
      pushIndex = i;
    }
    if (num > arr[i] && num <= arr[i + 1]) {
      pushIndex = i + 1;
    }
  }

  return pushIndex !== undefined ? pushIndex : arr.length;
}


// console.log(getIndexToIns([3, 10, 5], 3));


// function mutation(arr) {
//   let regex = new RegExp(`${arr[0]}`, 'i');
//   return regex.test(arr[1]);
// }
// console.log(mutation(["hello", "hey"]));
// console.log(mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]))



function chunkArrayInGroups(arr, size) {
  let temp = [];
  const result = [];

  for (let a = 0; a < arr.length; a++) {
    if (a % size !== size - 1) {
      console.log(arr[a]);
      temp.push(arr[a]);
    }
    else {
      temp.push(arr[a]);
      result.push(temp);
      temp = [];
    }
  }

  if (temp.length !== 0) result.push(temp);
  return result;
}

console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));

// console.log(titleCase("I'm a lITTLE tea pot"));

// repeat;
// function repeatStringNumTimes(str, num) {
//   return num > 0 ? str + repeatStringNumTimes(str, num - 1) : '';
// }


// function findLongestWordLength(str) {
//   // split the string into individual words
//   const words = str.split(" ");

//   // words only has 1 element left that is the longest element
//   if (words.length == 1) {
//     return words[0].length;
//   }

//   // if words has multiple elements, remove the first element
//   // and recursively call the function
//   return Math.max(
//     words[0].length,
//     findLongestWordLength(words.slice(1).join(" "))
//   );
// }

// console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));




// console.log(copyMachine([true, false, true], 2));
// console.log(twoDimen(3, 2));

// const arr1 = [1, 4, 5];
// arr1.push(6, 7);
// arr1.unshift(-1, 0);
// console.log(arr1);

// const arr1 = [2, 4, 5, 1];
// const newarr = arr1.splice(2, 2);
// console.log({ newarr, arr1 });


// console.log(repeatNum.match(reRegex));

// let extractStr = "Extract the word 'coding' from this string";
// let regex = /coding/;
// console.log(regex.test(petString));

// console.log(i);
// console.log({ max, spreadedArr });
// console.log(printNumTwo());

// console.log(countDown(10));
// console.log(rangeOfNumbers(1, 5));
// console.log(lookUpProfile("Sherlock", "stats"));
// func1();
// func2();
// checkNum(10);

// console.log(updateRecords(recordCollection, 5439, 'artist', 'ABBA'));
