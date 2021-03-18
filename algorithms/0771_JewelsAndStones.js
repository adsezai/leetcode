/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function (J, S) {
  let count = 0
  const jewelsHash = new Set(J)

  for (const stone of S) {
    jewelsHash.has(stone) && count++
  }
  return count
}
