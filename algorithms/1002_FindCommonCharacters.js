/**
 * @param {string[]} A
 * @return {string[]}
 */
var commonChars = function (A) {
  const map = {}
  const res = []

  for (let i = 0; i < A.length; i++) {
    for (const char of A[i]) {
      if (map[char] == null) map[char] = []
      if (map[char][i] == null) {
        map[char][i] = 1
      } else {
        map[char][i]++
      }
    }
  }
  for (const val in map) {
    if (Object.hasOwnProperty.call(map, val)) {
      let element = map[val]
      element = element.filter(e => e != null)
      if (element.length === A.length) {
        for (let i = 0; i < Math.min(...element); i++) {
          res.push(val)
        }
      }
    }
  }
  return res
}
