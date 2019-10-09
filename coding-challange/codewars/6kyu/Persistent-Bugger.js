// TODO: https://www.codewars.com/kata/persistent-bugger/train/javascript

const persistence = (num, count = 0) => {
  if (num >= 10) {
    const arr = num.toString().split('').map((v) => parseInt(v, 10));
    return persistence(arr.reduce((acc, cur) => acc * cur), count + 1);
  }
  
  return count;
};

console.log(persistence(39));
