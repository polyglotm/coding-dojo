// TODO: https://leetcode.com/explore/interview/card/top-interview-questions-easy/94/trees/555/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
const maxDepth = (node, depth = 0) => {
  if (!node) {
    return depth;
  }
  const left = maxDepth(node.left, depth+1);
  const right = maxDepth(node.right, depth+1);
  
  return left > right ? left : right;
};
