/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function (heights) {
  let count = 0
  const newHeights = heights.slice(0).sort((a, b) => a - b)

  for (let i = 0; i < heights.length; i++) {
    if (heights[i] !== newHeights[i])count++
  }

  return count
}
