/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function (nums, n) {
  const res = []

  for (let i = 0, j = n; j < nums.length; i++, j++) {
    res.push(nums[i], nums[j])
  }
  return res
}
