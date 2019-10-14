// TODO: https://www.codewars.com/kata/54ff3102c1bad923760001f3

const getCount = (str) => str.match(/a|e|i|o|u/) ? str.match(/a|e|i|o|u/g).length : 0;

getCount("abracadabra");
// 5
console.log(getCount('o a kak ushakov lil vo kashu kakao'));
// 13
