/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
  let current = 0
  let max = 0
  for (let i = 0; i < nums.length; i++) {
    (nums[i] === 0) && (current = 0)

    if (nums[i] === 1) {
      current++
      (current > max) && (max = current)
    }
  }
  return max
}
