/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function (candies, extraCandies) {
  const res = []
  let max = 0
  for (const i of candies) {
    if (i > max) max = i
  }

  for (let i = 0; i < candies.length; i++) {
    res[i] = candies[i] + extraCandies >= max
  }
  return res
}
