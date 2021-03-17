/**
 * @param {number[][]} edges
 * @return {number}
 */
/**
 * center must occur in every edge
 * loop through all items and add count for every node. the count which is the same size as the array length is the center
 */
var findCenter = function (edges) {
  const hash = {}
  for (const edge of edges) {
    for (const node of edge) {
      if (hash[node]) hash[node]++
      else hash[node] = 1
    }
  }

  for (const key in hash) {
    if (hash[key] === edges.length) return key
  }
}
/**
 * it is sufficient to compare the first two edges, the number which occurs in both is the center
 */
var findCenter2 = function (edges) {
  if (edges[0][0] === edges[1][0]) return edges[1][0]
  if (edges[0][0] === edges[1][1]) return edges[1][1]
  else return edges[0][1]
}

var findCenter3 = function (edges) {
  return edges[0][0] === edges[1][0] || edges[0][0] === edges[1][1] ? edges[0][0] : edges[0][1]
}
