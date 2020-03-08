// TODO: https://www.codewars.com/kata/generate-range-of-integers/train/javascript

const generateRange = (currentNum, max, step, arr = []) => {
  if (currentNum <= max) {
    arr.push(currentNum);
    return generateRange(currentNum + step, max, step, arr);
  }
  return arr;
};

console.log(generateRange(2, 10, 2)); // should return array of [2,4,6,8,10]
console.log(generateRange(1, 10, 3)); // should return array of [1,4,7,10]
