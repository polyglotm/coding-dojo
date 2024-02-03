// leetcode/medium/2625. Flatten Deeply Nested Array
// 2625-flatten-deeply-nested-array
// URL: https://leetcode.com/problems/flatten-deeply-nested-array/description/

type MultiDimensionalArray = (number | MultiDimensionalArray)[];

function flat(arr: MultiDimensionalArray, n: number): MultiDimensionalArray {
  if (n === 0) {
    return arr;
  }

  let hasArray = false;

  arr.forEach((val) => {
    if (Array.isArray(val)) {
      hasArray = true;
    }
  });

  if (hasArray) {
    return flat(arr.flat(), n - 1);
  }

  return arr;
}
