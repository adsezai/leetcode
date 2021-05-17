/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let currentIdx = 1
  let actualNumber = nums[0]

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== actualNumber) {
      nums[currentIdx] = nums[i]
      actualNumber = nums[i]
      currentIdx++
    }
  }

  return currentIdx
}
