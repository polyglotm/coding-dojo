// Find the missing term in an Arithmetic Progression
// https://www.codewars.com/kata/52de553ebb55d1fca3000371/

const findMissing = (list) => {
  const [a, b] = [list[1] - list[0], list[2] - list[1]];
  const rule = Math.abs(a) < Math.abs(b) ? a : b;
  
  return list.reduce((acc, cur, i, arr) => {
    if (acc + rule !== cur) {
      arr.splice(0);
      return acc + rule;
    }
    return cur;
  });
};


console.log(findMissing([1, 3, 4]), 2);
console.log(findMissing([-23, -27, -29, -31, -33]), -25);
