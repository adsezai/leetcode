/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function (nums) {
  let res = 0

  for (let i = 0; i < nums.length; i++) {
    const digits = countDigits(nums[i])
    if (digits % 2 == 0) res++
  }
  return res
}

function countDigits (number) {
  return Math.floor(Math.log10(number) + 1)
}
