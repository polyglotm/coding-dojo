// TODO: https://www.codewars.com/kata/weight-for-weight/train/javascript
// TODO: it's not working

const sumNumString = (numStr) => numStr.split('').reduce((acc, cur) => (acc + parseInt(cur, 10)), 0);

const customSort = (b, a) => {
  console.log(a, b);
  const aSum = sumNumString(a);
  const bSum = sumNumString(b);
  if (aSum < bSum) {
    return 1;
  }
  if (aSum === bSum) {
    if (a.length === b.length) {
      console.log('-c');
      return (parseInt(a, 10) - parseInt(b, 10)) * -1;
    }
    return (a.length - b.length) ? -1 : 1;
  }
  return 0;
};

const orderWeight = (numberString) => numberString.split(' ').sort(customSort).join(' ');

// console.log(orderWeight("103 123 4444 99 2000"));
// "2000 103 123 4444 99"
console.log(orderWeight("2000 10003 1234000 44444444 9999 11 11 22 123"));
// "11 11 2000 10003 22 123 1234000 44444444 9999"
