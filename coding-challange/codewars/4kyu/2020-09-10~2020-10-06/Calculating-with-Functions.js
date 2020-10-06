// TODO: https://www.codewars.com/kata/calculating-with-functions/train/javascript

const functionTrigger = (func, defaultValue) => typeof func === "function" ? func(defaultValue) : defaultValue;

const zero = (func) => functionTrigger(func, 0);
const one = (func) => functionTrigger(func, 1);
const two = (func) => functionTrigger(func, 2);
const three = (func) => functionTrigger(func, 3);
const four = (func) => functionTrigger(func, 4);
const five = (func) => functionTrigger(func, 5);
const six = (func) => functionTrigger(func, 6);
const seven = (func) => functionTrigger(func, 7);
const eight = (func) => functionTrigger(func, 8);
const nine = (func) => functionTrigger(func, 9);

const plus = (a) => ((b) => a + b);
const minus = (a) => ((b) => b - a);
const times = (x) => ((y) => x * y);
const dividedBy = (a) => ((b) => Math.floor(b / a));

console.log(seven(times(five())));
// Test.assertEquals(seven(times(five())), 35);
// Test.assertEquals(four(plus(nine())), 13);
// Test.assertEquals(eight(minus(three())), 5);
// Test.assertEquals(six(dividedBy(two())), 3);
