/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

var moveZeroes = function (nums) {
  let currentZero = 0

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      const temp = nums[currentZero]
      nums[currentZero] = nums[i]
      nums[i] = temp
      currentZero++
    }
  }
}
