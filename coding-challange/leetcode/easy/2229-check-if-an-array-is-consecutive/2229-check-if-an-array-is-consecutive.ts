/*
2229-check-if-an-array-is-consecutive
leetcode/easy/2229. Check if an Array Is Consecutive
URL: https://leetcode.com/problems/check-if-an-array-is-consecutive/

NOTE: Description
NOTE: Constraints
NOTE: Explanation
NOTE: Reference
*/

function isConsecutive(nums: number[]): boolean {
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length - 1; i += 1) {
    if (nums[i] !== nums[i + 1] - 1) {
      return false;
    }
  }

  return true;
}

let nums = [1, 3, 4, 2];
console.log(isConsecutive(nums));
// Output: true
// Explanation:
//   The minimum value is 1 and the length of nums is 4.
// All of the values in the range [x, x + n - 1] = [1, 1 + 4 - 1] = [1, 4] = (1, 2, 3, 4) occur in nums.
//   Therefore, nums is consecutive.
//   Example 2:

nums = [1, 3];
console.log(isConsecutive(nums));
// Output: false
// Explanation:
//   The minimum value is 1 and the length of nums is 2.
// The value 2 in the range [x, x + n - 1] = [1, 1 + 2 - 1], = [1, 2] = (1, 2) does not occur in nums.
//   Therefore, nums is not consecutive.
//   Example 3:

nums = [3, 5, 4];
console.log(isConsecutive(nums));
// Output: true
// Explanation:
//   The minimum value is 3 and the length of nums is 3.
// All of the values in the range [x, x + n - 1] = [3, 3 + 3 - 1] = [3, 5] = (3, 4, 5) occur in nums.
//   Therefore, nums is consecutive.
