// TODO: https://leetcode.com/explore/interview/card/top-interview-questions-easy/127/strings/881/

const firstUniqChar = (s) => {
  const map = new Map();
  for (const char of s) {
    map.set(char, (map.get(char) || 0) + 1);
  }
  
  for (const [i, char] of s.split('').entries()) {
    if (map.get(char) === 1) {
      return i;
    }
  }
  return -1;
};


const s = "leetcode";
// const s = "loveleetcode";
console.log(firstUniqChar(s));
