// TODO: https://www.codewars.com/kata/i-guess-this-is-a-7kyu-kata-number-4-find-0-and-1/train/javascript

const find01 = (arr, length = arr.length, currentLine = 1, count0 = 0, count1 = 0) => {
  if (currentLine >= length - 1) {
    return count0 + count1;
  }
  
  for (let i = 1; i < arr[currentLine].length - 1; i += 1) {
    if (!arr[currentLine - 1][i] && !arr[currentLine][i - 1]
      && !arr[currentLine + 1][i] && !arr[currentLine][i + 1] && arr[currentLine][i]) {
      count0 += 1;
    }
    if (arr[currentLine - 1][i] && arr[currentLine][i - 1]
      && arr[currentLine + 1][i] && arr[currentLine][i + 1] && !arr[currentLine][i]) {
      count1 += 1;
    }
  }
  
  return find01(arr, length, currentLine + 1, count0, count1);
};

const arr = [
  [0, 1, 1, 0, 1, 1, 0, 1, 0],
  [1, 0, 1, 0, 1, 1, 0, 1, 0],
  [0, 1, 1, 0, 0, 1, 0, 1, 0],
  [0, 0, 1, 0, 1, 0, 1, 1, 0],
  [0, 0, 1, 0, 0, 1, 0, 1, 0],
  [0, 0, 1, 0, 1, 0, 0, 1, 0],
  [0, 0, 1, 0, 0, 1, 0, 1, 0],
];

const arr2 = [
  [1, 1, 1, 0, 1, 1, 0],
  [0, 1, 1, 0, 0, 1, 0],
  [1, 1, 1, 0, 1, 1, 0],
  [0, 1, 1, 0, 0, 1, 0],
  [1, 0, 0, 1, 0, 1, 1],
  [1, 0, 1, 1, 0, 0, 0]];

console.log(find01(arr));
console.log(find01(arr2));
