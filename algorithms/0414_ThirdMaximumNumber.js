/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function (nums) {
  let first = Number.MIN_SAFE_INTEGER
  let secound = Number.MIN_SAFE_INTEGER
  let third = Number.MIN_SAFE_INTEGER

  for (let i = 0; i < nums.length; i++) {
    const number = nums[i]
    if (first == number || secound == number || third == number) continue
    if (number > first) {
      third = secound
      secound = first
      first = number
    } else if (number > secound) {
      third = secound
      secound = number
    } else if (number > third) {
      third = number
    }
  }
  return third > Number.MIN_SAFE_INTEGER ? third : first
}
