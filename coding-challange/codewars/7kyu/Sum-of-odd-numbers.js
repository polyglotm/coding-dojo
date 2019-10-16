// TODO: https://www.codewars.com/kata/55fd2d567d94ac3bc9000064

const getLineStartNum = (n, currentLine = 1, sum = 1) => {
  if (n <= currentLine) {
    return sum;
  }
  
  return getLineStartNum(n, currentLine + 1, sum + (2 * currentLine));
};

const sumOddNum = (num, step = 0, sum = 0) => {
  if (!step) {
    return sum;
  }
  
  return sumOddNum(num + 2, step - 1, sum + num);
};

const rowSumOddNumbers = (n) => sumOddNum(getLineStartNum(n), n);

console.log(rowSumOddNumbers(1));
console.log(rowSumOddNumbers(3));
console.log(rowSumOddNumbers(5));
console.log(rowSumOddNumbers(42));
