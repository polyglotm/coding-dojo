// TODO: https://leetcode.com/explore/interview/card/top-interview-questions-easy/127/strings/882/

function stringToCountedMap(str) {
  let map = new Map();
  
  for (const char of str) {
    map.set(char, map.get(char) ? map.get(char) + 1 : 1);
  }
  
  return map;
}

const isAnagram = function (a, b) {
  let aMap = stringToCountedMap(a);
  let bMap = stringToCountedMap(b);
  
  aMap.forEach((value, key, map) => {
    if (value !== bMap.get(key)) {
      return false;
    } else {
      map.delete(key);
      bMap.delete(key);
    }
  });
  
  return aMap.size === 0 && bMap.size === 0;
};


const s = "anagram", t = "nagaram";

console.log(isAnagram(s, t));
