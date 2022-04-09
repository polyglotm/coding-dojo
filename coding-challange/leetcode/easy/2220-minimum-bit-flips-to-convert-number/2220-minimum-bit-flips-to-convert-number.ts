/*
2220-minimum-bit-flips-to-convert-number
leetcode/medium/2220. Minimum Bit Flips to Convert Number
URL: https://leetcode.com/problems/minimum-bit-flips-to-convert-number/

NOTE: Description

NOTE: Constraints
  - 0 <= start, goal <= 109

NOTE: Explanation
*/

function minBitFlips(start: number, goal: number): number {
  let a = start.toString(2);
  let b = goal.toString(2);

  if (a.length < b.length) {
    [a, b] = [b, a];
  }
  b = b.padStart(a.length, '0');

  let count = 0;

  for (let i = 0; i < a.length; i += 1) {
    if (a[i] !== b[i]) {
      count += 1;
    }
  }

  return count;
}


let start = 10;
let goal = 7;
console.log(minBitFlips(start, goal));
// Output: 3

start = 3;
goal = 4;
console.log(minBitFlips(start, goal));
// Output: 3
