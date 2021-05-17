/**
 * @param {number[][]} coordinates
 * @return {boolean}
 */
var checkStraightLine = function (coordinates) {
  if (coordinates.length <= 2) return true

  const factorX = coordinates[1][0] - coordinates[0][0]
  const factorY = coordinates[1][1] - coordinates[0][1]

  const m = factorY / factorX
  const X1 = coordinates[0][0]
  const Y1 = coordinates[0][1]

  function calculateY (x) {
    const y = m * (x - X1) + Y1
    return y
  }

  for (const coord of coordinates) {
    const y = coord[1]
    const x = coord[0]

    if (y !== calculateY(x)) return false
  }

  return true
}
