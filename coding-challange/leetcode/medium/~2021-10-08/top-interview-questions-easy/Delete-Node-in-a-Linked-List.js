// TODO: https://leetcode.com/explore/interview/card/top-interview-questions-easy/93/linked-list/553/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
const deleteNode = (head, node, before, currentNode = head) => {
  console.log(head, node)
  if (!currentNode) {
    return head;
  }
  
  console.log(currentNode)
  
  if (currentNode.val === target) {
    if (before) {
      before.next = currentNode.next;
    } else {
      head = head.next;
    }
    console.log(head)
    return head;
  } else {
    return deleteNode(head, target, currentNode, currentNode.next);
  }
};

