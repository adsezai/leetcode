/**
 * 1672 Richest Customer Wealth
 * easy
 * array
 **/

/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function (accounts) {
  let max = 0
  for (const acc of accounts) {
    let costumerMax = 0
    for (const val of acc) {
      costumerMax += val
    }
    if (costumerMax > max) max = costumerMax
  }
  return max
}

/**
 * functional foreach and reduc
 */
var maximumWealth2 = function (accounts) {
  let max = 0
  accounts.forEach(acc => {
    const sum = acc.reduce((a, b) => a + b, 0)
    if (sum > max) max = sum
  })
  return max
}
