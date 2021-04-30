/*
find-the-unique-number

# codewars/6kyu/Find the unique number
Difficulty: 6kyu
URL: https://www.codewars.com/kata/585d7d5adb20cf33cb000235/
Tags:

## Approach

### en

### kr

## Solution
### JavaScript
*/


// great solution
function findUniq(arr) {
  return arr.find((e) => arr.indexOf(e) === arr.lastIndexOf(e));
}

// not bad
function findUniq(arr) {
  const set = new Set(arr);
  let result = 0;
  
  [...set.values()]
    .some((e) => {
      if (arr.indexOf(e) === arr.lastIndexOf(e)) {
        result = e;
        return true;
      }
    });
  
  return result;
}

// test
console.log(findUniq([0, 1, 0]), 1);
console.log(findUniq([1, 1, 1, 2, 1, 1]), 2);
console.log(findUniq([3, 10, 3, 3, 3]), 10);
