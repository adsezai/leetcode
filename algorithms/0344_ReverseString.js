/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
  reverseSubString(s, 0, s.length - 1)
}

const reverseSubString = (str, start, end) => {
  if (start >= end) return
  exchange(str, start, end)
  reverseSubString(str, ++start, --end)
}
function exchange (arr, idx1, idx2) {
  const temp = arr[idx1]
  arr[idx1] = arr[idx2]
  arr[idx2] = temp
}
