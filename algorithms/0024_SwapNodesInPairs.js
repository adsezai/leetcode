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
var swapPairs = function (head) {
  if (head == null) return null
  if (head.next == null) return head

  const temp = head.next
  if (head.next.next == null) {
    head.next.next = head
    head.next = null
  } else {
    head.next = swapPairs(head.next.next)
    temp.next = head
  }
  return temp
}
