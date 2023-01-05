/*
544-output-contest-matches
leetcode/medium/544. Output Contest Matches
URL: https://leetcode.com/problems/output-contest-matches/description/

NOTE: Description
NOTE: Constraints
NOTE: Explanation
NOTE: Reference

*/

type Matches = {
  strongTeam: number,
  matchList: string,
};

function findContestMatch(n: number): string {
  const matches: Matches[] = [];

  for (let i = 1; i <= n; i += 1) {
    matches.push({
      strongTeam: i,
      matchList: `${i}`,
    });
  }

  while (matches.length > 1) {
    const newMatches: Matches[] = [];
    for (let i = 0; i < matches.length / 2; i += 1) {
      newMatches.push({
        strongTeam: matches[i].strongTeam,
        matchList: `(${matches[i].matchList},${matches[matches.length - 1 - i].matchList})`,
      });
    }
    matches.splice(0, matches.length, ...newMatches);
  }

  return matches[0].matchList;
}

let n = 4;
console.log(findContestMatch(n));
// Output: "((1,4),(2,3))"

n = 8;
console.log(findContestMatch(n));
// Output: "(((1,8),(4,5)),((2,7),(3,6)))"
