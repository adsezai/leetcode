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
var getMinimumDifference = function (root) {
  let prevNode
  let minDifference = Number.MAX_SAFE_INTEGER

  // loop left , root, right
  const inOrder = node => {
    if (node == null) return

    inOrder(node.left)

    if (prevNode !== undefined && minDifference > Math.abs(node.val - prevNode)) {
      minDifference = Math.abs(node.val - prevNode)
    }

    prevNode = node.val

    inOrder(node.right)
  }

  inOrder(root)

  return minDifference
}
