/*
2269-find-the-k-beauty-of-a-number
leetcode/easy/2269. Find the K-Beauty of a Number
URL: https://leetcode.com/problems/find-the-k-beauty-of-a-number/

NOTE: Description
NOTE: Constraints
NOTE: Explanation
NOTE: Reference
*/

function divisorSubstrings(num: number, k: number): number {
  const numStr: string[] = num.toString().split('');
  let count = 0;

  for (let i = 0; i < numStr.length - k + 1; i += 1) {
    const target = Number(numStr.slice(i, i + k).join(''));
    if (target !== 0 && num % target === 0) {
      count += 1;
    }
  }

  return count;
}

let num = 240, k = 2;
console.log(divisorSubstrings(num, k));
// Output: 2
// Explanation: The following are the substrings of num of length k:
//   - "24" from "240": 24 is a divisor of 240.
// - "40" from "240": 40 is a divisor of 240.
// Therefore, the k-beauty is 2.

num = 430043, k = 2;
console.log(divisorSubstrings(num, k));
// Output: 2
// Explanation: The following are the substrings of num of length k:
//   - "43" from "430043": 43 is a divisor of 430043.
// - "30" from "430043": 30 is not a divisor of 430043.
// - "00" from "430043": 0 is not a divisor of 430043.
// - "04" from "430043": 4 is not a divisor of 430043.
// - "43" from "430043": 43 is a divisor of 430043.
// Therefore, the k-beauty is 2.

num = 30003, k = 3;
console.log(divisorSubstrings(num, k));
