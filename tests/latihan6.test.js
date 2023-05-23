const createAnimalArray = require("../latihan/latihan6");

describe('Create Animal Array', () => {
  it('creates an array with the correct sequence of animals', () => {
    const animals = createAnimalArray();
    expect(animals).toEqual(['dog', 'cat', 'elephant', 'lion']);
  });
});