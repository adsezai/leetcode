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
 * @return {number}
 */
var sumEvenGrandparent = function (root) {
  return traverse(root)
}

function traverse (node) {
  if (node == null) return 0

  let sum = 0

  if (node.parent && node.parent.parent && (node.parent.parent.val % 2 === 0)) sum += node.val
  // node >= 14 , optional chaining
  // if (node?.parent?.parent?.val % 2 === 0) sum += node.val

  node.left && (node.left.parent = node)
  node.right && (node.right.parent = node)

  return sum + traverse(node.left) + traverse(node.right)
}

/**
 * if input were array e.g. [6,7,8,2,7,1,3,9,null,1,4,null,null,null,5]
 */
var sumEvenGrandparent2 = function (root) {
  let sum = 0
  for (let n = 0; n < root.length; n++) {
    const parentIdx = Math.floor((n - 1) / 2)

    const grandParentIdx = Math.floor((parentIdx - 1) / 2)

    if (root[grandParentIdx] % 2 === 0) sum += root[n]
  }
  return sum
}
