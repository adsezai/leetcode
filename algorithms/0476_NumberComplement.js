/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function (num) {
  // clac binary of num and change bits
  let binary = ''
  while (num !== 0) {
    if (num % 2 === 1) {
      binary += '0'
    } else {
      binary += '1'
    }
    num = Math.trunc(num / 2)
  }

  // calc decimal of binary string
  let resultNumber = 0
  for (let i = binary.length - 1; i >= 0; i--) {
    if (binary[i] === '1') {
      resultNumber += Math.pow(2, i)
    }
  }

  return resultNumber
}
