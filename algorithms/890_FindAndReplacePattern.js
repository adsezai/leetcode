/**
 * 811 Subdomain Visit Count
 * medium
 * hash, array, pattern creation
 **/

/**
 * @param {string[]} words
 * @param {string} pattern
 * @return {string[]}
 */
var findAndReplacePattern = function (words, pattern) {
  const patternCode = generateCode(pattern)
  return words.filter(word => patternCode === generateCode(word))
}

/**
 * create a code for pattern string
 * use the same number for the same char within a pattern string
 * so "aqq" is 011 and "mee" is also 011, this means aqq is a permutation of mee
 * */

function generateCode (pattern) {
  const hash = {}
  let lastUsedNumber = 0
  let code = ''

  for (const char of pattern) {
    if (hash[char] == null) {
      hash[char] = lastUsedNumber
      lastUsedNumber++
    }
    code += hash[char]
  }
  return code
}
