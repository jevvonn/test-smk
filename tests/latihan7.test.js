const generatePrimeNumbers = require('../latihan/latihan7');

describe('Generate Prime Numbers', () => {
  it('returns an array of the first 20 prime numbers', () => {
    const primes = generatePrimeNumbers();
    const expectedPrimes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71];
    expect(primes).toEqual(expectedPrimes);
  });
});