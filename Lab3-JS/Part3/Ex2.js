
//Use 10 of Arrays predefined methods and explain them.

//1-Array.push():
const array1 = [1, 2, 3];
array1.push(4, 5);
console.log(array1); // Output: [1, 2, 3, 4, 5]

//2-Array.pop():
const array2 = [1, 2, 3];
const removedElement = array2.pop();
console.log(removedElement); // Output: 3
console.log(array2); // Output: [1, 2]

//3-Array.unshift():
const array3 = [2, 3];
array3.unshift(0, 1);
console.log(array3); // Output: [0, 1, 2, 3]

//4-Array.shift():
const array4 = [0, 1, 2, 3];
const remElement = array4.shift();
console.log(remElement); // Output: 0
console.log(array4); // Output: [1, 2, 3]

//5-Array.slice():
const array5 = [1, 2, 3, 4, 5];
const newArray = array5.slice(1, 4);
console.log(newArray); // Output: [2, 3, 4]

//6-Array.splice():
const array6 = [1, 2, 3, 4, 5];
array6.splice(2, 1, 'a', 'b');
console.log(array6); // Output: [1, 2, 'a', 'b', 4, 5]

//7-Array.concat():
const array_x = [1, 2];
const array_y = [3, 4];
const newAr = array_x.concat(array_y);
console.log(newAr); // Output: [1, 2, 3, 4]

//8-Array.includes():
const array8 = [1, 2, 3];
console.log(array8.includes(2)); // Output: true
console.log(array8.includes(4)); // Output: false

//9-Array.indexOf():
const array9 = [1, 2, 3, 2];
console.log(array9.indexOf(2)); // Output: 1
console.log(array9.indexOf(4)); // Output: -1

//10-Array.join():
const array10 = ['Hello', 'World', '!'];
const joinedString = array10.join(' ');
console.log(joinedString); // Output: 'Hello World !'














