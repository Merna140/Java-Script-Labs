
//Use 10 of Objects predefined methods and explain them

//1-Object.keys():
//This method returns an array of a given object's own enumerable property names.
const obj1 = { a: 1, b: 2, c: 3 };
console.log(Object.keys(obj1)); // Output: ['a', 'b', 'c']

//2-Object.values():
//It returns an array of a given object's own enumerable property values.
const obj2 = { a: 1, b: 2, c: 3 };
console.log(Object.values(obj2)); // Output: [1, 2, 3]

//3-Object.entries():
//This method returns an array of a given object's own enumerable property [key, value] pairs.
const obj3 = { a: 1, b: 2, c: 3 };
console.log(Object.entries(obj3)); // Output: [['a', 1], ['b', 2], ['c', 3]]

//4-Object.assign():
//It copies the values of all enumerable own properties from one or more source objects to a target object and returns the target object.
const objx = { a: 1 };
const objy = { b: 2 };
const mergedObj = Object.assign({}, objx, objy);
console.log(mergedObj); // Output: { a: 1, b: 2 }

//5-Object.hasOwnProperty():
//Checks if a specific property is an own property of an object and returns a boolean value.
const obj5 = { a: 1, b: 2 };
console.log(obj5.hasOwnProperty('a')); // Output: true
console.log(obj5.hasOwnProperty('c')); // Output: false

//6-Object.freeze():
//It freezes an object, preventing new properties from being added to it, existing properties from being removed, or property descriptors from being changed.
const obj6 = { a: 1 };
Object.freeze(obj6);
// Trying to modify the frozen object
obj6.b = 2; // Ignored in strict mode; will not add 'b' to the object

//7-Object.seal():
//It seals an object, preventing new properties from being added or existing properties from being removed, but allows changing the values of existing properties.
const obj7 = { a: 1 };
Object.seal(obj7);
// Trying to add/remove properties
obj7.b = 2; // Ignored in strict mode; will not add 'b' to the object
delete obj7.a; // Ignored in strict mode; will not delete 'a' from the object

//8-Object.fromEntries():
//This method transforms a list of key-value pairs into an object.
const entries = [['a', 1], ['b', 2], ['c', 3]];
const obj8 = Object.fromEntries(entries);
console.log(obj8); // Output: { a: 1, b: 2, c: 3 }

//9-Object.getPrototypeOf():
//This method returns the prototype of the specified object.
const person1 = {
    name: 'Alice',
    age: 30,
};
const prototypeOfPerson = Object.getPrototypeOf(person1);
console.log(prototypeOfPerson); // Output: {} (default object prototype)

//10-Object.getOwnPropertyNames():
//Returns an array of all properties (including non-enumerable properties except for symbols) found directly in a given object.
const person2 = {
    name: 'Alice',
    age: 30,
};
const properties = Object.getOwnPropertyNames(person2);
console.log(properties); // Output: ['name', 'age']








