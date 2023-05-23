/**
 * Buat sebuah array yang memiliki elemen 20 bilangan prima pertama
 * Akan menghasilkan array sebagai return value
 * @namespace Latihan
 * @method generatePrimeNumbers
 * @return {Array} array 20 bilangan prima pertama
 */
function generatePrimeNumbers() {
  // TODO: Gunakan looping untuk membuat array
  // dimana setiap elemennya merupakan 20 bilangan prima pertama
  // dimulai dari 2 ([2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71])
  let arr = [];
  let num = 2;
  let isCheck = true;

  while (isCheck) {
    if (isPrime(num)) arr.push(num);
    if (arr.length == 20) isCheck = false;
    num++;
  }

  return arr;
}

function isPrime(n) {
  if (n === 1 || n === 2) return true;
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

module.exports = generatePrimeNumbers;
