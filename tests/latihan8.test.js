const findMax = require('../latihan/latihan8');

describe('Find Max', () => {
  it('returns the maximum number in the array', () => {
    expect(findMax([5, 8, 2, 10, 3])).toBe(10);
    expect(findMax([-5, -2, -8, -10, -3])).toBe(-2);
    expect(findMax([1, 1, 1, 1])).toBe(1);
    expect(findMax([0])).toBe(0);
  });
});