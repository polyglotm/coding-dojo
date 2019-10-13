// TODO: https://leetcode.com/problems/path-in-zigzag-labelled-binary-tree/

const countLine = (line, c = 0) => (line / 2 ? countLine(Math.floor(line / 2), c + 1) : c);

const findPath = (currentLine, currentNum, path = [], lineStartNum = (2 ** (currentLine - 1))) => {
  if (currentLine === 1) {
    return path;
  }
  path.unshift(Math.round(lineStartNum - 1 - Math.floor(currentNum - lineStartNum) / 2));
  return findPath(currentLine - 1, path[0], path);
};

const pathInZigZagTree = (label) => findPath(countLine(label), label, [label]);

console.log(pathInZigZagTree(26));
