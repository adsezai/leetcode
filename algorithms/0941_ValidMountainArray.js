/**
 * @param {number[]} A
 * @return {boolean}
 */
var validMountainArray = function (A) {
  if (A.length < 3) return false

  let i = 0

  while (A[i + 1] > A[i] && i < A.length)i++

  if (i == 0 || i === A.length - 1) return false

  while (A[i + 1] < A[i] && i < A.length)i++

  return (i == A.length - 1)
}
