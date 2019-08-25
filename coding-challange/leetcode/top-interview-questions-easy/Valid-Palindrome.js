// TODO: https://leetcode.com/explore/interview/card/top-interview-questions-easy/127/strings/883/

const isPalindrome = (s) => {
  s = s.replace(/\W/g, '').toLocaleLowerCase().split('');
  while (s) {
    if (s.length <= 1) {
      return true;
    }
    if (s.shift() !== s.pop()) {
      return false;
    }
  }
  return true;
};

let input = "A man, a plan, a canal: Panama";
console.log(isPalindrome(input));
