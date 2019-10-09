// TODO: https://www.codewars.com/kata/remove-string-spaces/train/javascript

const noSpace = (x) => {
  return x.replace(/\s/g, '');
};

console.log(noSpace('8 j 8   mBliB8g  imjB8B8  jl  B'));
