// TODO: origin link https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/727/

/**
 * @param {number[]} nums
 * @return {number}
 */


const removeDuplicates = (nums) => {
  let memory;
  
  for (let i = 0; i < nums.length; i++) {
    memory = nums.shift();
    while (nums[0] === memory) {
      nums.shift();
    }
    nums.push(nums.shift());
  }
  return nums.length;
};

console.log(removeDuplicates([1, 1, 2]));
