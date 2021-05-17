/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  const map = new Map()

  for (const i of nums) {
    let val = map.get(i)
    val = val ? val + 1 : 1
    if (val > Math.trunc(nums.length / 2)) return i
    map.set(i, val)
  }
}
// alternative sort and check if a sequence of the same values is larger than nums.length/2
