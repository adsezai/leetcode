/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function (nums) {
  const hash = {};

  [...nums]
    .sort((a, b) => a - b)
    .forEach((num, idx) => hash[num] == null && (hash[num] = idx))

  return nums.map(num => hash[num])
}
