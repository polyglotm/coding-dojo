// TODO: https://www.codewars.com/kata/valid-parentheses/train/javascript

const validParentheses = (parens = '') => {
  if (parens.match(/\(\)/)) {
    parens = parens.replace(/\(\)/g, '');
    return validParentheses(parens);
  }
  return !parens.length;
};

console.log(validParentheses('()'));
