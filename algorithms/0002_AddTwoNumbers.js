/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  function ListNode (val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
  }

  let listNode
  let oneUp = 0

  while (l1 != null || l2 != null) {
    let val = 0
    if (l1) val += l1.val
    if (l2) val += l2.val
    val += oneUp
    oneUp = 0
    if (val >= 10) {
      val %= 10
      oneUp = 1
    }

    const newListNode = new ListNode(val)
    if (listNode) {
      const pointer = listNode
      while (listNode.next)listNode = listNode.next
      listNode.next = newListNode
      listNode = pointer
    } else {
      listNode = newListNode
    }

    l1 = l1 && l1.next
    l2 = l2 && l2.next
  }
  if (oneUp === 1) {
    const pointer = listNode
    while (listNode.next)listNode = listNode.next
    listNode.next = new ListNode(1)
    listNode = pointer
  }

  return listNode
}
