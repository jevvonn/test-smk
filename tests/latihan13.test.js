const extractStudentNames = require('../latihan/latihan13');

describe('Extract Student Names', () => {
  it('extracts student names into a new array', () => {
    const students = [
      { name: 'John', age: 20 },
      { name: 'Emily', age: 22 },
      { name: 'Michael', age: 21 },
    ];

    expect(extractStudentNames(students)).toEqual(['John', 'Emily', 'Michael']);
    expect(extractStudentNames([])).toEqual([]);
  });
});