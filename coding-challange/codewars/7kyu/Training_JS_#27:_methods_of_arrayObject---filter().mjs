import { assertCheck } from "../codewars-helper.mjs";

function countGrade(scores) {
  return {
    S: scores.filter(x => x === 100).length,
    A: scores.filter(x => x < 100 && x >= 90).length,
    B: scores.filter(x => x < 90 && x >= 80).length,
    C: scores.filter(x => x < 80 && x >= 60).length,
    D: scores.filter(x => x < 60 && x >= 0).length,
    X: scores.filter(x => x === -1).length,
  };
}

assertCheck(countGrade([50, 60, 70, 80, 90, 100]), { S: 1, A: 1, B: 1, C: 2, D: 1, X: 0 });
assertCheck(countGrade([65, 75, , 85, 85, 95, 100, 100]), { S: 2, A: 1, B: 2, C: 2, D: 0, X: 0 });
assertCheck(countGrade([-1, -1, -1, -1, -1, -1]), { S: 0, A: 0, B: 0, C: 0, D: 0, X: 6 });
