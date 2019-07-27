// TODO: https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/564/

// const maxProfit = (prices) => {
//   let profit = 0;
//   for (let index = 0; index < prices.length; index += 1) {
//     if (prices[index] < prices[index + 1]) {
//       profit += prices[index + 1] - prices[index];
//     }
//   }
//   return profit;
// };

const maxProfit = (prices) => prices.reduce((accumulator, currentValue, currentIndex, arr) => {
  if (currentValue < arr[currentIndex + 1]) {
    accumulator += arr[currentIndex + 1] - currentValue;
  }
  return accumulator;
}, 0);

const arr1 = [7, 1, 5, 3, 6, 4];
console.log(maxProfit(arr1));

// Input: [7,1,5,3,6,4]
// Output: 7
