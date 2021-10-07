// TODO: https://leetcode.com/explore/interview/card/top-interview-questions-easy/127/strings/884/

const myAtoi = (str) => {
  const int32Max = 2 ** 31 - 1;
  const int32Min = (2 ** 31 * -1);
  let parsedNumber = parseInt(str.trim().split(' ')[0]);
  if (isNaN(parsedNumber)) {
    return 0;
  }
  if (parsedNumber > int32Max) {
    return int32Max;
  }
  if (parsedNumber < int32Min) {
    return int32Min;
  }
  return parsedNumber;
};
