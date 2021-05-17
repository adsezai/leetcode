/**
 * @param {number} N
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function (N, trust) {
  if (trust.length === 0) return N
  const trusted = new Array(N + 1).fill(0)

  for (const i of trust) {
    trusted[i[1]]++
    trusted[i[0]]--
  }

  for (let t = 1; t < trusted.length; t++) {
    if (trusted[t] >= N - 1) {
      return t
    }
  }

  return -1
}
