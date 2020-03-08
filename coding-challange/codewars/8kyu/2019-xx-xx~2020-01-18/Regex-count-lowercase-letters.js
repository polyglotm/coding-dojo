// TODO: https://www.codewars.com/kata/56a946cd7bd95ccab2000055

const lowercaseCount = (str) => (str.match(/[a-z]/) ? str.match(/[a-z]/g).length : 0);

console.log(lowercaseCount());
