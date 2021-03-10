/**
 * 1491 Average Salary Excluding the Minimum and Maximum Salary
 * easy
 * array
 **/

/**
 * @param {number[]} salary
 * @return {number}
 */
var average = function (salary) {
  let min = Number.MAX_SAFE_INTEGER
  let max = Number.MIN_SAFE_INTEGER
  let sum = 0

  for (const sal of salary) {
    if (sal > max) max = sal
    if (sal < min) min = sal
    sum += sal
  }

  return (sum - min - max) / (salary.length - 2)
}
