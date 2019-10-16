// TODO: https://www.codewars.com/kata/get-the-middle-character/train/javascript

const getMiddle = (s) => {
  const half = (s.length / 2) > 1 ? Math.round(s.length / 2) : 0;
  return s.slice(half - 1, -(half - 1));
};

console.log('--', '123456'.slice(2, -2));
// 3,4
// 6 / 2 = 3 - 1 , 3-1
console.log('--', '12345'.slice(2, -2));

// console.log('a'.slice(-1, 1));
// console.log(0.5 ? 1 : 0);
// 1 / 2 = 0.5 - 1, 0-5. 1
console.log(getMiddle('a'));
console.log(getMiddle('abcde'));
console.log(getMiddle('abccde'));
