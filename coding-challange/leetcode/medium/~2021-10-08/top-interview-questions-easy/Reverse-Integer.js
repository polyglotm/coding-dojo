// TODO: https://leetcode.com/explore/interview/card/top-interview-questions-easy/127/strings/880/

const reverse = (params) => {
  const sign = Math.sign(params) >= 0 ? '' : '-';
  const value = parseInt(sign + params.toString().split('').reverse().join(''));
  const isSafeIn4Byte = (value <= (2 ** 31) - 1) && (value >= -(2 ** 31));
  return isSafeIn4Byte ? value : 0;
};

console.log(reverse(1563847412));
