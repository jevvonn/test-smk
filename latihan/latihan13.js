function extractStudentNames(students) {
  // parameter students adalah array dimana setiap elemen
  // merupakan objek Student dengan karakteristik seperti berikut:
  // {
  //    name: string,
  //    age: number
  // }
  // TODO: hasilkan array baru yang memiliki elemen seluruh nama dari
  // setiap student yang ada di array students
  // contoh:
  // const students = [
  //   { name: 'John', age: 20 },
  //   { name: 'Emily', age: 22 },
  //   { name: 'Michael', age: 21 },
  // ];
  // akan menghasilkan ['John', 'Emily', 'Michael']
  return [...students].map((student) => student.name);
}

module.exports = extractStudentNames;
