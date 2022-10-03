/*
2027-minimum-moves-to-convert-string
leetcode/easy/2027. Minimum Moves to Convert String
URL: https://leetcode.com/problems/minimum-moves-to-convert-string/

NOTE: Description
NOTE: Constraints
NOTE: Explanation
NOTE: Reference
*/

function minimumMoves(s: string): number {
  let count = 0;

  while (s.indexOf('X') !== -1) {
    s = s.substring(0, s.indexOf('X')) + s.substring(s.indexOf('X') + 3);
    count += 1;
  }

  return count;
}

let s = 'XXX';
console.log(minimumMoves(s));
// Output: 1
// Explanation: XXX -> OOO
// We select all the 3 characters and convert them in one move.
//   Example 2:

s = 'XXOX';
console.log(minimumMoves(s));
// Output: 2
// Explanation: XXOX -> OOOX -> OOOO
// We select the first 3 characters in the first move, and convert them to 'O'.
//   Then we select the last 3 characters and convert them so that the final string contains all 'O's.
//   Example 3:

s = 'OOOO';
console.log(minimumMoves(s));
// Output: 0
// Explanation: There are no 'X's in s to convert.
