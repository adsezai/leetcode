/**
 * @param {string} command
 * @return {string}
 */
var interpret = function (command) {
  let curr = ''
  let res = ''

  for (const char of command) {
    if (char === 'G') res += 'G'
    else curr += char

    if (char === ')') {
      if (curr === '(al)') res += 'al'
      if (curr === '()') res += 'o'
      curr = ''
    }
  }

  return res
}

var interpret2 = function (command) {
  return command.replace(/\(al\)/g, 'al').replace(/\(\)/g, 'o')
}
