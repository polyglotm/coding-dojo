// TODO: https://www.codewars.com/kata/sum-of-powers-of-2/train/javascript

const primeFactorization = (n = 0, count = 0) => {
  const dividedByTwo = Math.floor(n / 2);
  if (dividedByTwo) {
    return primeFactorization(dividedByTwo, count + 1);
  }
  return count;
};

const calculatePowers = (exponent, n, arr = []) => {
  const targetNum = 2 ** exponent;
  if (exponent === 0) {
    return arr;
  }
  if (n >= (targetNum + arr.reduce((acc, cur) => acc + cur, 0))) {
    arr.unshift(targetNum);
  }
  return calculatePowers(exponent - 1, n, arr);
};

const powers = (n) => {
  const result = calculatePowers(primeFactorization(n), n);
  if (n % 2 === 1) {
    result.unshift(1);
  }
  return result;
};

console.log(powers(8197));

const arr = [1, 2, 3];

const t = Math.round(Math.sqrt(688)) ** 2;
//?


//?
