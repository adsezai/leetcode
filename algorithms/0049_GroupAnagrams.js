/**
 * @param {string[]} arr
 * @return {string[][]}
 */
var groupAnagrams = function (arr) {
  const hash = {}

  for (const string of arr) {
    const sorted = [...string].sort()

    if (hash[sorted]) hash[sorted].push(string)
    else hash[sorted] = [string]
  }

  return Object.values(hash)
}
