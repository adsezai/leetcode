/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
  const charMap = new Map()

  for (let i = 0; i < s.length; i++) {
    charMap.get(s[i]) == null
      ? charMap.set(s[i], i)
      : charMap.set(s[i], false)
  }

  let res = false

  for (const itm of charMap.entries()) {
    if (itm[1] !== false) {
      res = itm[1]
      break
    }
  }
  return res !== false ? res : -1
}
