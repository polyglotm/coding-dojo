// https://www.codewars.com/kata/do-i-get-a-bonus/
const chai = require('chai');

const bonusTime = (salary, bonus) => `£${salary * (bonus ? 10 : 1)}`;

chai.assert.strictEqual(bonusTime(10000, true), '£100000');
chai.assert.strictEqual(bonusTime(25000, true), '£250000');
chai.assert.strictEqual(bonusTime(10000, false), '£10000');
chai.assert.strictEqual(bonusTime(60000, false), '£60000');
chai.assert.strictEqual(bonusTime(2, true), '£20');
chai.assert.strictEqual(bonusTime(78, false), '£78');
chai.assert.strictEqual(bonusTime(67890, true), '£678900');
