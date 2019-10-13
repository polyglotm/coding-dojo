// TODO: https://www.codewars.com/kata/mumbling/train/javascript

const accum = (s) => s.toLowerCase().split('').map((v, i) => `${v.toUpperCase()}${v.repeat(i)}`).join('-');

console.log(accum("abcd"));
