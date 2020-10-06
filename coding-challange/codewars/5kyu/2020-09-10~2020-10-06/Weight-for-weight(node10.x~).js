// TODO: https://www.codewars.com/kata/weight-for-weight/train/javascript

const sumNumString = (numStr) => numStr.split('').reduce((acc, cur) => (acc + parseInt(cur, 10)), 0);

const customSort = (a, b) => {
  console.log(a, b);
  const aSum = sumNumString(a);
  const bSum = sumNumString(b);
  if (aSum < bSum) {
    return -1;
  }
  if (aSum === bSum) {
    if (a.length === b.length) {
      return parseInt(a, 10) - parseInt(b, 10);
    }
    return a.length - b.length;
  }
  return 0;
};

const orderWeight = (numberString) => numberString.split(' ').sort(customSort).join(' ');

console.log(orderWeight("103 123 4444 99 2000"));
// "2000 103 123 4444 99"
// console.log(orderWeight("2000 10003 1234000 44444444 9999 11 11 22 123"));AT
// "11 11 2000 10003 22 123 1234000 44444444 9999"
