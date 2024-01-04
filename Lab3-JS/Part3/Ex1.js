
//Use 10 of Objects predefined methods and explain them

//1-Object.keys():
const obj1 = { a: 1, b: 2, c: 3 };
console.log(Object.keys(obj1)); // Output: ['a', 'b', 'c']

//2-Object.values():
const obj2 = { a: 1, b: 2, c: 3 };
console.log(Object.values(obj2)); // Output: [1, 2, 3]

//3-Object.entries():
const obj3 = { a: 1, b: 2, c: 3 };
console.log(Object.entries(obj3)); // Output: [['a', 1], ['b', 2], ['c', 3]]

//4-Object.assign():
const objx = { a: 1 };
const objy = { b: 2 };
const mergedObj = Object.assign({}, objx, objy);
console.log(mergedObj); // Output: { a: 1, b: 2 }

//5-Object.hasOwnProperty():
const obj5 = { a: 1, b: 2 };
console.log(obj5.hasOwnProperty('a')); // Output: true
console.log(obj5.hasOwnProperty('c')); // Output: false

//6-Object.freeze():
const obj6 = { a: 1 };
Object.freeze(obj6);
// Trying to modify the frozen object
obj6.b = 2; // Ignored in strict mode; will not add 'b' to the object

//7-Object.seal():
const obj7 = { a: 1 };
Object.seal(obj7);
// Trying to add/remove properties
obj7.b = 2; // Ignored in strict mode; will not add 'b' to the object
delete obj7.a; // Ignored in strict mode; will not delete 'a' from the object

//8-Object.fromEntries():
const entries = [['a', 1], ['b', 2], ['c', 3]];
const obj8 = Object.fromEntries(entries);
console.log(obj8); // Output: { a: 1, b: 2, c: 3 }

//9-Object.getPrototypeOf():
const person1 = {
    name: 'Alice',
    age: 30,
};
const prototypeOfPerson = Object.getPrototypeOf(person1);
console.log(prototypeOfPerson); // Output: {} (default object prototype)

//10-Object.getOwnPropertyNames():
const person2 = {
    name: 'Alice',
    age: 30,
};
const properties = Object.getOwnPropertyNames(person2);
console.log(properties); // Output: ['name', 'age']








