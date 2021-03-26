/**
 * @param {number} big
 * @param {number} medium
 * @param {number} small
 */
var ParkingSystem = function (big, medium, small) {
  this.spaces = [null, big, medium, small]
}

/**
* @param {number} carType
* @return {boolean}
*/
ParkingSystem.prototype.addCar = function (carType) {
  if (this.spaces[carType] <= 0) return false

  this.spaces[carType]--
  return true
}

/**
* Your ParkingSystem object will be instantiated and called as such:
* var obj = new ParkingSystem(big, medium, small)
* var param_1 = obj.addCar(carType)
*/
