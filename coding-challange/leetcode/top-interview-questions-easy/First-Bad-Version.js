// TODO: https://leetcode.com/explore/interview/card/top-interview-questions-easy/96/sorting-and-searching/774/

/**
 * Definition for isBadVersion()
 *
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */

const binarySearch = (start = 1, end, isBadVersion) => {
  const middle = Math.floor((start + end) / 2);
  if (start > end) {
    return false;
  }
  if (isBadVersion(middle)) {
    if (start + 1 >= end) {
      return end;
    } else {
      return binarySearch(start, middle, isBadVersion);
    }
  } else {
    return binarySearch(middle + 1, end, isBadVersion);
  }
};
// 5
// 1 4  - 2 - x
// 3  5

const solution = (isBadVersion) => {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return (n) => {
    return binarySearch(1, n, isBadVersion);
    // const badVersion = isBadVersion;
    // console.log(JSON.stringify(isBadVersion));
    // console.log(badVersion, n);
    // console.log(isBadVersion());
    // if (n - 1 >= badVersion) {
    //   return true;
    // }
  };
};
