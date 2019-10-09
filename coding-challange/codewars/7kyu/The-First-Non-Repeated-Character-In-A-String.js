// TODO: https://www.codewars.com/kata/the-first-non-repeated-character-in-a-string/train/javascript

const firstNonRepeated = (s) => {
  const map = new Map();
  
  s.split('').forEach((key) => {
    map.set(key, map.get(key) + 1 || 1);
  });
  
  let firstChar = null;
  map.forEach((value, key) => {
    console.log(value, key);
    if (!firstChar && value === 1) {
      firstChar = key;
      return true;
    }
    return false;
  });
  return firstChar;
};

console.log(firstNonRepeated("teeter"));
console.log(firstNonRepeated("test"));
// R
