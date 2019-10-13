// TODO: https://www.codewars.com/kata/multiples-of-3-or-5/train/javascript

const solution = (range, cur = 1, sum = 0) => {
  if (cur >= range) {
    return sum;
  }
  return solution(range, cur + 1, (cur % 3 === 0 || cur % 5 === 0) ? sum + cur : sum);
};

// console.log(range, cur, sum);


console.log(solution(10));
// should 23
