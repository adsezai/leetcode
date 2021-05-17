/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
var duplicateZeros = function (arr) {
  const initalLength = arr.length
  for (let i = 0; i < initalLength; i++) {
    if (arr[i] == 0) {
      for (let j = initalLength - 1; j > i; j--) {
        arr[j] = arr[j - 1]
      }
      i++
    }
  }
}

var duplicateZeros2 = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == 0) {
      arr.splice(i, 0, 0)
      arr.pop()
      i++
    }
  }
}
