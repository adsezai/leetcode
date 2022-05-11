/**
 * @param {number} num
 * @return {number}
 */
 var minimumSum = function (num) {

  const numArray = getDigits(num).sort((a, b) => a - b)

  let num1 = parseInt(numArray[0] + "" + numArray[2])
  let num2 = parseInt(numArray[1] + "" + numArray[3])

  return num1 + num2
};

function getDigits(num) {

  let output = [];

  while (num) {
    output.push(num % 10);
    num = Math.floor(num / 10);
  }
  return output
}

const res = minimumSum(4009);
console.log(res)
