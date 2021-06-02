/*
get-number-from-string

# codewars/8kyu/Get number from string
Difficulty: 8kyu
URL: https://www.codewars.com/kata/57a37f3cbb99449513000cd8/
Tags:

## Approach

### en

### kr

## Solution
### JavaScript
*/

function getNumberFromString(s) {
  return Number(s.match(/\d/g).join(''));
}

test("should work as expected", function () {
  expect(getNumberFromString("1")).toEqual(1);
  expect(getNumberFromString("123")).toEqual(123);
  expect(getNumberFromString("this is number: 7")).toEqual(7);
});
