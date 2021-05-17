/**
 * Definition for isBadVersion()
 *
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */
var solution = function (isBadVersion) {
  return function (n) {
    let min = 0
    let max = n
    let middle
    while (min < max) {
      middle = Math.floor(min + (max - min) / 2)
      if (isBadVersion(middle)) {
        max = middle
      } else {
        min = middle + 1
      }
    }

    return max
  }
}
