/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParity = function (A) {
  let left = 0
  let right = A.length - 1

  while (left < right) {
    if ((A[left] % 2) !== 0 && (A[right] % 2) == 0) {
      const temp = A[right]
      A[right] = A[left]
      A[left] = temp
      left++
      right--
    } else {
      if ((A[left] % 2) == 0) left++
      if ((A[right] % 2) !== 0) right--
    }
  }
  return A
}
