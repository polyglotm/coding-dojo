// leetcode/easy/1427. Perform String Shifts
// 1427-perform-string-shifts
// URL: https://leetcode.com/problems/perform-string-shifts/description/?envType=study-plan-v2&envId=premium-algo-100


function rotateNumChar(numChar: string): string {
  const map = {
    0: '0',
    1: '1',
    2: '-1',
    3: '-1',
    4: '-1',
    5: '-1',
    6: '9',
    7: '-1',
    8: '8',
    9: '6'
  };

  return map[numChar];
}

function confusingNumber(n: number): boolean {
  const numStrArr = n.toString().split('');
  const rotatedNumStrArr = numStrArr.map(rotateNumChar);

  if (rotatedNumStrArr.includes('-1')) {
    return false;
  }

  return rotatedNumStrArr.reverse().join('') !== numStrArr.join('');
};

console.log(confusingNumber(916));

