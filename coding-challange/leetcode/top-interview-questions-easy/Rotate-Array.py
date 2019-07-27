# // TODO: https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/646/
#
# const rotate = (nums, k = 0) => {
#   while (k--) {
#     nums.unshift(nums.pop());
#   }
#   return nums;
# };
#
# // Input: [1,2,3,4,5,6,7] and k = 3
# // Output: [5,6,7,1,2,3,4]
# const arr = [1, 2, 3, 4, 5, 6, 7];
# console.log(rotate(arr, 3));


