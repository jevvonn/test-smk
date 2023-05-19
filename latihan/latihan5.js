/**
 * Hasilkan nilai faktorial dari n
 * @namespace Latihan
 * @method factorial
 * @param {Number} n number
 * @return {Number} hasil faktorial
 */
function factorial(n) {
  // TODO: hasilkan nilai faktorial sebagai return value
  // apabila n < 0, maka hasilkan nilia undefined
  if (n < 0) return null;
  return n == 0 ? 1 : n * factorial(n - 1);
}
module.exports = factorial;
