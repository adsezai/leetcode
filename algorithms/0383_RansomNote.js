/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  const map = {}

  for (const char of magazine) {
    if (map[char])map[char]++
    else {
      map[char] = 1
    }
  }

  for (const char of ransomNote) {
    if (!map[char] || map[char] === 0) return false
    map[char]--
  }
  return true
}
