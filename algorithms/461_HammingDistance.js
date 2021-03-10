/**
 * 461 Hamming Distance
 * easy
 * array, string
 *  */

/**
 * Manually create base2 array and compare every entry in reverse order
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function (x, y) {
  const arr1 = toBase2(x)
  const arr2 = toBase2(y)
  let diff = 0

  for (let i = 0; i < arr1.length || i < arr2.length; i++) {
    if (arr1[i] != null && arr2[i] != null) {
      if (arr1[i] !== arr2[i]) diff++
    } else {
      if (arr1[i] === 1 || arr2[i] === 1) diff++
    }
  }
  return diff
}

function toBase2 (num) {
  const base2Arr = []
  while (num > 0) {
    base2Arr.push(num % 2)
    num = Math.floor(num / 2)
  }
  return base2Arr
}

/**
 *  XOR and count string
 */
var hammingDistance2 = function (x, y) {
  const bString = ((x ^ y) >>> 0).toString(2)
  let res = 0
  for (const char of bString) {
    if (char == 1) res++
  }
  return res
}

/**
 * XOR and Bit Shifting
 */
var hammingDistance3 = function (x, y) {
  let diff = x ^ y
  let result = 0

  // find number of ones in the XOR result
  while (diff > 0) {
    if (diff & 1 === 1) result += 1
    diff >>= 1
  }

  return result
}
