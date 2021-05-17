/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function (num) {
  let left = 0
  let right = num

  while (left <= right) {
    const middle = Math.trunc(left + (right - left) / 2)

    if (middle * middle === num) return true

    if (middle * middle > num) {
      right = middle - 1
    }
    if (middle * middle < num) {
      left = middle + 1
    }
  }
  return false
}
