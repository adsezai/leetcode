/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
var isCousins = function (root, x, y) {
  let depth1 = null
  let depth2 = null
  let depth1Parent = null
  let depth2Parent = null

  function traverse (node, depth, parentVal) {
    if (node.val === x) {
      depth1 = depth
      depth1Parent = parentVal
    }
    if (node.val === y) {
      depth2 = depth
      depth2Parent = parentVal
    }
    if (node.left) traverse(node.left, depth + 1, node.val)
    if (node.right) traverse(node.right, depth + 1, node.val)
  }
  traverse(root, 0, root.val)

  if (depth1 === depth2 && depth1 !== 0 && depth1 && depth1Parent !== depth2Parent) return true
  return false
}
