/**
 * @param {string} boxes
 * @return {number[]}
 */
var minOperations = function (boxes) {
  const res = []
  for (let b = 0; b < boxes.length; b++) {
    let sum = 0
    for (let i = b - 1; i >= 0; i--) {
      const distance = b - i
      sum += distance * boxes[i]
    }
    for (let i = b + 1; i < boxes.length; i++) {
      const distance = i - b
      sum += distance * boxes[i]
    }
    res[b] = sum
  }
  return res
}

/**
 * Example: "11213" for index 3
 * index 0: Distance is 3 and balls is 1  => 3 * 1 = 3
 * index 1: Distance is 2 and balls is 1  => 2 * 1 = 2
 * index 2: Distance is 1 and balls is 2  => 1 * 2 = 2
 * index 3:  balls are already here, dont need to move
 * index 4: Distance is 1 and balls is 3  => 1 * 3 = 3
 * result for index 3 is the sum of above (3+2+2+3 = 10)
 * [x,x,x,10,x]
 *  => do this for every index x so the result is [ 20, 14, 10, 10, 12 ]
 */
