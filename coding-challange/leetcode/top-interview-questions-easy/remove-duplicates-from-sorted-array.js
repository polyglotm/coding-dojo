/*
remove-duplicates-from-sorted-array

# leetcode/top-interview-questions/easy/Remove Duplicates from Sorted Array
Difficulty:
URL: https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/727/
Tags:

## Approach

### en

### kr

## Solution
### JavaScript
*/


/**
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates = function (nums) {
  for (let i = 0; i < nums.length; i += 1) {
    if (nums.lastIndexOf(nums[i]) !== i) {
      nums.splice(i, 1);
      i -= 1;
    }
  }
  
  return nums.length;
};

test('removeDuplicates', () => {
  expect(removeDuplicates([1, 1, 2])).toEqual([1, 2]);
  expect(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4])).toEqual([0, 1, 2, 3, 4]);
});

//
// Input: nums = [1,1,2]
// Output: 2, nums = [1,2]
// Explanation: Your function should return length = 2, with the first two elements of nums being 1 an
//
// Input: nums = [0,0,1,1,1,2,2,3,3,4]
// Output: 5, nums = [0,1,2,3,4]
// Explanation: Your function should return length = 5, with the first five elements of nums being modified to 0, 1, 2, 3, and 4 respectively. It doesn't matter what values are set beyond the returned length.
