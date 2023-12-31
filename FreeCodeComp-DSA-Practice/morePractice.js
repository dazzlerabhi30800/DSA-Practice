console.log("A little bit more practice in JS");

function flatArr(arr) {
  let flat = [].concat(...arr);
  // return flat.some((item) => item instanceof Array) ? flatArr(flat) : flat;
  return flat.some((item) => Array.isArray(item)) ? flatArr(flat) : flat;
}

const arr = [1, [4], [[5, 6, [10]]]];

const arrResult = flatArr(arr);
console.log(arrResult);

function checkNumberForInfinity(num) {
  const maxNum = Number.NEGATIVE_INFINITY;
  if (maxNum < num) {
    return num;
  }
  return "It is smaller";
}

// console.log(checkNumberForInfinity(-1000));
