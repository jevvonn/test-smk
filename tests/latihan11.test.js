const doubleNumbers = require('../latihan/latihan11');

describe('Double Numbers', () => {
  it('doubles each number in the array', () => {
    expect(doubleNumbers([1, 2, 3])).toEqual([2, 4, 6]);
    expect(doubleNumbers([-1, -2, -3])).toEqual([-2, -4, -6]);
    expect(doubleNumbers([0, 5, 10])).toEqual([0, 10, 20]);
    expect(doubleNumbers([])).toEqual([]);
  });
});