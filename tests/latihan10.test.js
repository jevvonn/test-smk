const filterEvenNumbers = require('../latihan/latihan10');

describe('Filter Even Numbers', () => {
  it('returns a new array with only the even numbers', () => {
    expect(filterEvenNumbers([1, 2, 3, 4, 5])).toEqual([2, 4]);
    expect(filterEvenNumbers([-1, -2, -3, -4, -5])).toEqual([-2, -4]);
    expect(filterEvenNumbers([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])).toEqual([0, 2, 4, 6, 8]);
    expect(filterEvenNumbers([])).toEqual([]);
  });
});