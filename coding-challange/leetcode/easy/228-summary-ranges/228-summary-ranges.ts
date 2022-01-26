/*
228-summary-ranges
leetcode/easy/228. Summary Ranges
Difficulty: easy
URL: https://leetcode.com/problems/summary-ranges/

*/

function summaryRanges(nums: number[]): string[] {
    let result = [];
  
    for (let i = 0; i < nums.length; i += 1) {
      if (nums[i] + 1 === nums[i + 1]) {
        let lastIndex = i + 1;
  
        for (let j = i + 1; j < nums.length; j += 1) {
          if (nums[j] + 1 !== nums[j + 1]) {
            lastIndex = j;
            result.push(`${nums[i]}->${nums[lastIndex]}`);
            break;
          }
        }
  
        i = lastIndex;
      } else {
        result.push(String(nums[i]));
      }
    }
  
    return result;
  };
  
  // Example 1:
  //
  let nums = [0, 1, 2, 4, 5, 7];
  console.log(summaryRanges(nums));
  // Output: ["0->2","4->5","7"]
  // Explanation: The ranges are:
  //   [0,2] --> "0->2"
  //     [4,5] --> "4->5"
  //     [7,7] --> "7"
  // Example 2:
  //
  nums = [0, 2, 3, 4, 6, 8, 9];
  // console.log(summaryRanges(nums));
  // Output: ["0","2->4","6","8->9"]
  // Explanation: The ranges are:
  //   [0,0] --> "0"
  //     [2,4] --> "2->4"
  //     [6,6] --> "6"
  //     [8,9] --> "8->9"
  