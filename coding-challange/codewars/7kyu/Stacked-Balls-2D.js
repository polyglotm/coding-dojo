// TODO: https://www.codewars.com/kata/stacked-balls-2d/train/javascript
// refs: https://www.youtube.com/watch?v=LWXFmcionxI

const stackHeight2d = (vertex) => {
  if (vertex <= 1) {
    return vertex;
  }
  const triangleVertex = (vertex - 1);
  const height = 1 + Math.sqrt((triangleVertex ** 2) - ((triangleVertex / 2) ** 2));
  return Math.round(height * 1000) / 1000;
};

console.log(stackHeight2d(18));
