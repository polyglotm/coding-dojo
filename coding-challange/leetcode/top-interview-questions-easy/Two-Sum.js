// TODO: https://leetcode.com/problems/two-sum/

const findCombination = (nums, target, leftIndex = 0, rightIndex = nums.length) => {
  while (nums[leftIndex] + nums[rightIndex] > target) {
    nums.pop();
    rightIndex -= 1;
  }
  
  while (leftIndex < rightIndex) {
    if (nums[leftIndex] + nums[rightIndex] === target) {
      return [leftIndex, rightIndex];
    }
    rightIndex -= 1;
  }
  
  return findCombination(nums, target, leftIndex + 1, nums.length);
};

const filterUnnecessaryValues = (nums, target) => {
  while (target[target.length - 1] >= target) {
    target.pop();
  }
  return nums;
};

const twoSum = (nums, target) => {
  const filteredNums = filterUnnecessaryValues(nums, target, nums.length);
  return findCombination(filteredNums, target);
};


const nums = [2, 7, 11, 15];
const target = 9;

console.log(twoSum(nums, target));
