// TODO: https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/674/

const convertToMap = (array) => {
  let map = new Map();
  for (let prop of array) {
    map.set(prop, map.get(prop) + 1 || 1);
  }
  return map;
};

const intersectionFilter = (map1, map2) => {
  let map = new Map();
  
  for (let [key, value]  of map1) {
    if (map2.get(key)) {
      const map2Value = map2.get(key);
      const smallValue = map2Value > value ? value : map2Value;
      map.set(key, smallValue);
    }
    map1.delete(key);
    map2.delete(key);
  }
  
  return map;
};

const convertMapToArray = (map) => {
  let array = [];
  
  for (let [key, value] of map) {
    for (let i = 0; i < value; i++) {
      array.push(key);
    }
  }
  
  return array;
};

const intersect = (nums1, nums2) => {
  return convertMapToArray(intersectionFilter(convertToMap(nums1), convertToMap(nums2)));
};


let nums1 = [1, 2, 2, 1], nums2 = [2, 2];
console.log(intersect(nums1, nums2));
// Input: nums1 = [1,2,2,1], nums2 = [2,2]
// Output: [2,2]
