const calculateSum = require('../latihan/latihan9');

describe('Calculate Sum', () => {
  it('calculates the sum of numbers in the array', () => {
    expect(calculateSum([1, 2, 3, 4, 5])).toBe(15);
    expect(calculateSum([-1, -2, -3, -4, -5])).toBe(-15);
    expect(calculateSum([0, 0, 0, 0])).toBe(0);
    expect(calculateSum([])).toBe(0);
  });
});