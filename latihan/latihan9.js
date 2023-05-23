/**
 * Hasilkan jumlah dari seluruh elemen array
 * @namespace Latihan
 * @method calculateSum
 * @return {number} sum jumlah seluruh elemen array
 */
function calculateSum(numbers) {
  // TODO: Jumlahkan seluruh elemen array
  // Anda tidak dapat menggunakan library atau function lain selain yang anda buat
  return numbers.reduce((a, b) => a + b, 0);
}

module.exports = calculateSum;
