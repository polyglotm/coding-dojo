// TODO: https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/578/

const containsDuplicate = (nums) => {
  return new Set(nums).size !== nums.length
};

let arr = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2];
console.log(containsDuplicate(arr));
