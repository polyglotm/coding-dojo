// TODO: RUN ON node 10.x
// https://www.codewars.com/kata/5629db57620258aa9d000014

function extractLowerCaseToCharArray(input) {
  return input.split('').filter(char => char.charCodeAt(0) >= 97 && char.charCodeAt(0) <= 122);
}

function countingCharacter(input) {
  const result = {};
  input.forEach((char) => {
    result[char] = result[char] + 1 || 1;
  });
  return result;
}

function mapSortByValue(obj) {
  return new Map([...Object.entries(obj)].sort((a, b) => {
    return a[0] - b[0];
  }));
}

function mix(s1, s2) {
  const mapSortByValue1 = mapSortByValue(countingCharacter(extractLowerCaseToCharArray(s1)));
  const mapSortByValue2 = mapSortByValue(countingCharacter(extractLowerCaseToCharArray(s2)));
  
  let result = new Map();
  
  mapSortByValue1.forEach((value, key, map) => {
    result.set(key, { s1Val: value, s2Val: 0 });
    map.delete(key);
  });
  
  mapSortByValue2.forEach((value, key, map) => {
    let legacy;
    
    if (result.has(key)) {
      legacy = result.get(key);
    }
    
    if (legacy) {
      legacy['s2Val'] = value;
      result.set(key, legacy);
    } else {
      result.set(key, { s1Val: 0, s2Val: value });
    }
    map.delete(key);
  });
  
  result.forEach((value, key, map) => {
    if (value.s1Val <= 1 && value.s2Val <= 1) {
      map.delete(key);
      return;
    }
    
    let compareSign;
    
    if (value.s1Val > value.s2Val) {
      compareSign = `1:${key.repeat(value.s1Val)}`;
    } else if (value.s1Val < value.s2Val) {
      compareSign = `2:${key.repeat(value.s2Val)}`;
    } else {
      compareSign = `=:${key.repeat(value.s1Val)}`;
    }
    map.set(key, compareSign);
  });
  
  result = [...result.entries()].sort((a, b) => b[1].length - a[1].length);
  console.log(result);
  result.sort((a, b) => {
    if (a[1].length === b[1].length) {
      if ((a[1][0] === '=' && b[1][0] !== '=')) {
        return 1;
      }
      if (a[1][0] === '2' && b[1][0] === '1') {
        return 1;
      }
      return 0;
    }
    return 0;
  });
  
  result.sort((a, b) => {
    if (a[1].length === b[1].length) {
      console.log(a, b);
      return a[0].charCodeAt(0) - b[0].charCodeAt(0);
    }
    return 0;
  });
  
  let str = '';
  for (let value of result) {
    str += `${value[1]}/`;
  }
  
  return str.slice(0, str.length - 1);
}


// It should work for random tests too - Expected: '1:rrrr/2:fff/2:lll/1:ee/1:ii/1:vv/1:zz/2:cc/2:gg/2:oo/2:ss/=:mm/=:nn', instead got: '1:ee/1:rrrr/2:fff/2:gg/=:mm/1:vv/2:lll/1:zz/1:ii/2:oo/=:nn/2:cc/2:ss'
//
// console.log(mix("Are they here", "yes, they are here"), "2:eeee/2:yy/=:hh/=:rr");
console.log(mix("looping is fun but dangerous", "less dangerous than coding"), "1:ooo/1:uuu/2:sss/=:nnn/1:ii/2:aa/2:dd/2:ee/=:gg");
//
// Test.it("Basic tests", function () {
//   Test.assertEquals(
//     Test.assertEquals(mix("looping is fun but dangerous", "less dangerous than coding"), "1:ooo/1:uuu/2:sss/=:nnn/1:ii/2:aa/2:dd/2:ee/=:gg")
//   Test.assertEquals(mix(" In many languages", " there's a pair of functions"), "1:aaa/1:nnn/1:gg/2:ee/2:ff/2:ii/2:oo/2:rr/2:ss/2:tt");
//   Test.assertEquals(mix("Lords of the Fallen", "gamekult"), "1:ee/1:ll/1:oo");
//   Test.assertEquals(mix("codewars", "codewars"), "");
//   Test.assertEquals(mix("A generation must confront the looming ", "codewarrs"), "1:nnnnn/1:ooooo/1:tttt/1:eee/1:gg/1:ii/1:mm/=:rr");
// });
// })
