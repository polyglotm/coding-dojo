// TODO: https://leetcode.com/explore/interview/card/top-interview-questions-easy/93/linked-list/560/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
    return this;
  };
}

const reverseList = (node, next = null) => {
  if (!node) {
    return node;
  }
  let newNode = new ListNode(node.val, next);
  if (node.next) {
    return reverseList(node.next, newNode);
  } else {
    return newNode;
  }
};

const listNode = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(3, new ListNode(4, new ListNode(5))))));
console.log(reverseList(listNode));
console.log(reverseList([]));


// Input: 1->2->3->4->5->NULL
// Output: 5->4->3->2->1->NULL
