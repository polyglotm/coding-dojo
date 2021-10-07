// TODO: https://leetcode.com/problems/pascals-triangle/

const generate = (line, count = 0, array = []) => {
  if (line === count) {
    return array;
  }
  
  array[count] = [1];
  for (let i = 0; i < count - 1; i += 1) {
    array[count].push(array[count - 1][i] + array[count - 1][i + 1]);
  }
  if (count > 0) {
    array[count].push(1);
  }
  
  return generate(line, count + 1, array);
};

console.log(generate(1));
