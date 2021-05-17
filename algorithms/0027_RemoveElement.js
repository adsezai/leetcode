/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  let start = 0
  let end = nums.length - 1

  while (start <= end) {
    if (nums[start] === val) {
      while (end >= start && nums[end] === val) end--
      if (end >= start) {
        const temp = nums[start]
        nums[start] = nums[end]
        nums[end] = temp
      }
    }
    start++
  }
  return ++end
}
