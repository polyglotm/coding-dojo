// TODO: https://www.codewars.com/kata/grasshopper-personalized-message/train/javascript

const greet = (name, owner) => (name === owner ? 'Hello boss' : 'Hello guest');

console.log(greet('a', 'a'));
console.log(greet('a', 'b'));
