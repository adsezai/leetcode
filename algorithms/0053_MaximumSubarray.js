var maxSubArray = function (nums) {
  let totalMax = nums[0]
  let currentMax = nums[0]

  // loop over all array elements
  for (let i = 1; i < nums.length; i++) {
    currentMax += nums[i]
    currentMax = Math.max(currentMax, nums[i])
    totalMax = Math.max(totalMax, currentMax)
  }
  return totalMax
}
