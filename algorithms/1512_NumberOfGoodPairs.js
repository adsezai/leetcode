/**
 * 1512 Number of good pairs
 * easy
 * array
 **/

/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function (nums) {
  const hash = {}
  let sum = 0

  for (const num of nums) {
    if (hash[num] != null) hash[num]++
    else hash[num] = 0
  }

  for (const key in hash) {
    sum += ((hash[key]) * (hash[key] + 1)) / 2 // triangular number formula
  }

  return sum
}

/**
 * add number amount to count and inc amount of number
 */
var numIdenticalPairs2 = function (nums) {
  const map = {}
  let count = 0

  for (const number of nums) {
    if (map[number]) {
      count += map[number]
      map[number] += 1
    } else {
      map[number] = 1
    }
  }
  return count
}
