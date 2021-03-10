/**
 * 557 Reverse Words in a String III
 * easy
 * array, string
 *  */

/**
 * Two-Pointer Approach
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  function setCharAt (str, index, chr) {
    if (index > str.length - 1) return str
    return str.substring(0, index) + chr + str.substring(index + 1)
  }

  let pointer1, pointer2

  for (let i = 0; i < s.length; i++) {
    if (i === 0 || s[i - 1] === ' ') pointer1 = i
    if (pointer1 != null && (s[i + 1] === ' ' || i === s.length - 1)) pointer2 = i

    if (pointer1 != null && pointer2 != null) {
      while (pointer1 < pointer2) {
        const tmp = s[pointer1]
        s = setCharAt(s, pointer1, s[pointer2])
        s = setCharAt(s, pointer2, tmp)

        pointer1++
        pointer2--
      }
      pointer1 = null
      pointer2 = null
    }
  }
  return s
}

/**
 * function split-reverse-join
 */
var reverseWords2 = function (s) {
  return s.split(' ').map(str => str.split('').reverse().join('')).join(' ')
}
