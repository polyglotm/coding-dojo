# TODO: https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/564/

class Solution:
    def maxProfit(self, prices: List[int]) -> int:


# const maxProfit = (prices) => prices.reduce((accumulator, currentValue, currentIndex, arr) => {
#   if (currentValue < arr[currentIndex + 1]) {
#     accumulator += arr[currentIndex + 1] - currentValue;
#   }
#   return accumulator;
# }, 0);
#
# const arr1 = [7, 1, 5, 3, 6, 4];
# console.log(maxProfit(arr1));
#
# // Input: [7,1,5,3,6,4]
# // Output: 7
