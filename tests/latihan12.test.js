const convertToUppercase = require('../latihan/latihan12');

describe('Convert to Uppercase', () => {
  it('converts each string to uppercase', () => {
    expect(convertToUppercase(['hello', 'world'])).toEqual(['HELLO', 'WORLD']);
    expect(convertToUppercase(['JavaScript', 'is', 'awesome'])).toEqual(['JAVASCRIPT', 'IS', 'AWESOME']);
    expect(convertToUppercase(['openai', 'gpt'])).toEqual(['OPENAI', 'GPT']);
    expect(convertToUppercase([])).toEqual([]);
  });
});