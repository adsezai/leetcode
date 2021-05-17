/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function (arr) {
  let highestSoFar = -1

  for (let i = arr.length - 1; i >= 0; i--) {
    const curr = highestSoFar
    if (arr[i] > highestSoFar) highestSoFar = arr[i]
    arr[i] = curr
  }
  return arr
}
