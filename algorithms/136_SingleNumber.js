/**
 * 136 Single Number
 * easy
 * array, number
 *  */

/**
 * use hash table
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  const cache = {}

  for (const num of nums) {
    if (cache[num] == null) cache[num] = true
    else if (cache[num] === true) cache[num] = undefined
  }

  return Object.keys(cache).filter(i => cache[i])[0]
}

/**
 * XOR
 */
var singleNumber2 = function (nums) {
  let res = nums[0]
  for (let i = 1; i < nums.length; i++) {
    res ^= nums[i]
  }
  return res
}
