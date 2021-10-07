// TODO: https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/549/

const singleNumber = function (nums) {
  nums.sort();
  
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== nums[i + 1]) {
      return nums[i];
    }
    i++;
  }
  return false;
};

const arr1 = [4, 1, 2, 1, 2];

console.log(singleNumber(arr1));

