// 1. Comprosite function
const rokket = a => b => c => a * b * c;

console.log(rokket(2)(5)(3)) // this outputs 30
console.log(rokket(4)(2)(2)) // this outputs 16
console.log(rokket(8)(2)(1)) // this also outputs 16

// 2. Longest String
const rokket = (array) => {
  return array.reduce((accumulator, currentValue) =>
    accumulator.length < currentValue.length ? currentValue : accumulator, "");
}

const list = ['best', 'company', 'ever']
console.log(rokket(list)) // this outputs 'company'

// 3. String Repetition
const rokket = (A, N) => {
  return A.repeat(N);
}

console.log(rokket('node', 5)) // this outputs 'nodenodenodenodenode'
console.log(rokket('abc', 2)) // this outputs 'abcabc'

// 4. Only last names
const rokket = (array) => {
  return array.map((obj_item) => {
    return Object.entries(obj_item)[1][1]
  });
}

const contacts = [
  { firstName: 'Juanito', lastName: 'Rokket' },
  { firstName: 'James', lastName: 'Bond' },
  { firstName: 'Harry', lastName: 'Potter' }
]
console.log(rokket(contacts)) // this outputs ['Rokket', 'Bond', 'Potter']

// 5. Unique numbers 
const rokket = (array1, array2) => {
  let union = [...array1, ...array2];
  return [...new Set(union)];
}

console.log(rokket([1, 2, 5], [2, 1, 6])) // this outputs [1, 2, 5, 6]
console.log(rokket([1, 2, 3], [4, 5, 6])) // this outputs [1, 2, 3, 4, 5, 6]