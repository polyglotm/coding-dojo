/*
496-next-greater-element-i
leetcode/easy/496. Next Greater Element I
Difficulty: easy
URL: https://leetcode.com/problems/next-greater-element-i/
*/


function nextGreaterElement(nums1: number[], nums2: number[]): number[] {
  return nums1.map((e, i) => {
    return nums2.slice(nums2.indexOf(e)).find((e2) => e2 > e) || -1;
  });
};
  
// Example 1:
//
let nums1 = [4, 1, 2];
let nums2 = [1, 3, 4, 2];
console.log(nextGreaterElement(nums1, nums2));
// Output: [-1,3,-1]
// Explanation: The next greater element for each value of nums1 is as follows:
// - 4 is underlined in nums2 = [1,3,4,2]. There is no next greater element, so the answer is -1.
// - 1 is underlined in nums2 = [1,3,4,2]. The next greater element is 3.
// - 2 is underlined in nums2 = [1,3,4,2]. There is no next greater element, so the answer is -1.
// Example 2:
//
nums1 = [2, 4];
nums2 = [1, 2, 3, 4];
console.log(nextGreaterElement(nums1, nums2));
// Output: [3,-1]
// Explanation: The next greater element for each value of nums1 is as follows:
// - 2 is underlined in nums2 = [1,2,3,4]. The next greater element is 3.
// - 4 is underlined in nums2 = [1,2,3,4]. There is no next greater element, so the answer is -1.
