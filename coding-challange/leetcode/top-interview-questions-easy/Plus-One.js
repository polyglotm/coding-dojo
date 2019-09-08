// TODO: https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/559/

const plusOne = (digits) => {
  let rightSide = [];
  rightSide.unshift(parseInt(digits.pop()) + 1);
  
  while (parseInt(rightSide[0]) > 9) {
    rightSide[0] = 0;
    rightSide.unshift((parseInt(digits.pop()) || 0) + 1);
  }
  
  return digits.concat(rightSide);
};

console.log(plusOne([9]));
