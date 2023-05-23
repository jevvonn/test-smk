function convertToUppercase(strings) {
  // TODO: ubah seluruh elemen strings menjadi huruf kapital
  // contoh: ['hello', 'world'] => ['HELLO', 'WORLD']
  // petunjuk: gunakan method string.toUpperCase()
  return [...strings].map((str) => str.toUpperCase());
}

module.exports = convertToUppercase;
