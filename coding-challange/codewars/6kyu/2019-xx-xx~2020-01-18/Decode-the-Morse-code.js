// TODO: https://www.codewars.com/kata/54b724efac3d5402db00065e

const decodeMorse = function (morseCode) {
  let result = [];
  let morseCharacter = morseCode.split(' ');
  let lastChar = '';
  for (let str of morseCharacter) {
    let char = MORSE_CODE[str] || ' ';
    if (lastChar === ' ' && char === ' ') {
      lastChar = char;
      continue;
    }
    lastChar = char;
    result.push(char);
  }
  return result.join('').trim();
};

console.log(decodeMorse('.... . -.--   .--- ..- -.. .'));
// Test.describe("Example from description", function () {
//   Test.assertEquals(decodeMorse('.... . -.--   .--- ..- -.. .'), 'HEY JUDE');
// });
//
// Test.describe("Your own tests", function () {
// // Add more tests here
// });
