arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

arr.sort((a, b) => {
  console.log(a, b);
});

// 1 2
// 2 3
// 3 4
// 4 5
// 5 6
// 6 7
// 7 8
// 8 9

arr.sort((a, b) => {
  return a - b;
});

console.log(arr);

// [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
