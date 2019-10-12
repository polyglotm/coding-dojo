// TODO: https://leetcode.com/problems/symmetric-tree

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */


const travlingNode = (node, isPre = true, arr = [], otherSideNode) => {
  if (!node) {
    if (otherSideNode && otherSideNode.val !== null) {
      arr.push(null);
    }
    return arr;
  }
  arr.push(node.val);
  travlingNode(isPre ? node.left : node.right, isPre, arr, isPre ? node.right : node.left);
  travlingNode(isPre ? node.right : node.left, isPre, arr, isPre ? node.left : node.right);
  return JSON.stringify(arr);
};

const isSymmetric = (node) => (node ? travlingNode(node) === travlingNode(node, false) : true);


const travlingNode2 = (node, isPre = true, arr = [], otherSideNode) => {
  if (!node) {
    if (otherSideNode && otherSideNode.val !== null) {
      arr.push(null);
    }
    return arr;
  }
  arr.push(node.val);
  if (isPre) {
    travlingNode(node.left, isPre, arr, node.right);
    travlingNode(node.right, isPre, arr, node.left);
  } else {
    travlingNode(node.right, isPre, arr, node.left);
    travlingNode(node.left, isPre, arr, node.right);
  }
  return JSON.stringify(arr);
};

const isSymmetric2 = (node) => (node ? travlingNode2(node) === travlingNode2(node, false) : true);


const node = {
  val: 1,
  right:
    {
      val: 2,
      right: { val: 3, right: null, left: null },
      left: { val: 4, right: null, left: null },
    },
  left:
    {
      val: 2,
      right: { val: 4, right: null, left: null },
      left: { val: 3, right: null, left: null },
    },
};
console.log(isSymmetric(node));

const node2 = {
  val: 1,
  right:
    {
      val: 2,
      right: { val: 3, right: null, left: null },
      left: null,
    },
  left:
    {
      val: 2,
      right: { val: 3, right: null, left: null },
      left: null,
    },
};
console.log(isSymmetric(node2));

const node3 = {
  val: 1,
  right: null,
  left: { val: 0, right: null, left: null },
};
console.log(isSymmetric(node3));
