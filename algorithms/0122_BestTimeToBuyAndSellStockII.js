/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  // let low = prices[0], currentMax = 0, res = 0
  let res = 0
  for (let i = 1; i < prices.length; i++) {
    (prices[i] > prices[i - 1]) && (res += (prices[i] - prices[i - 1]))
  }
  return res
}
