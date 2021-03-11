/**
 * 1108 Defanging an IP Address
 * easy
 * string, regex
 **/

/**
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function (address) {
  return address.replace(/\./g, '[.]')
}
