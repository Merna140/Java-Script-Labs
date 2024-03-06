

/*1. Write a JavaScript program to compare two objects to determine if the first contains 
equivalent property values to the second one.*/

function areEquivalentObjects(obj1, obj2) {
    return JSON.stringify(obj1) === JSON.stringify(obj2);
  }
  
  const obj1 = { a: 1, b: 2, c: 3 };
  const obj2 = { a: 1, b: 2, c: 3 };
  
  if (areEquivalentObjects(obj1, obj2)) {
    //console.log("Objects are equivalent.");
  } else {
    //console.log("Objects are not equivalent.");
  }

 /*2. Write a JavaScript program to copy a string to the clipboard.*/ 

 function copyToClipboard(text) {
    navigator.clipboard.writeText(text)
      .then(() => console.log("Text copied to clipboard:", text))
      .catch(err => console.error("Unable to copy to clipboard:", err));
  }

  const textToCopy = "Hello, Clipboard!";

  // Create a button element
  const copyButton = document.createElement("button");
  copyButton.textContent = "Copy to Clipboard";

  // Add an event listener to the button
  copyButton.addEventListener('click', function() {
    copyToClipboard(textToCopy);
  });

  // Append the button to the body
  document.body.appendChild(copyButton);

/*3. Write a JavaScript program to convert a comma-separated value (CSV) string to a 2D array.*/ 

function csvToArray(csvString) {
    const values = csvString.split(',');
    const result = [];
  
    for (let i = 0; i < values.length; i += 3) {
      result.push(values.slice(i, i + 3).map(value => value.trim()));
    }
    return result;
  }
  
  const csvString = "1,John,Doe,2,Jane,Smith,3,Bob,Johnson";
  const csvArray = csvToArray(csvString);
  //console.log(csvArray);

/*4. Write a JavaScript program to convert a comma-separated value (CSV) string to 
a 2D array of objects. The first row of the string is used as the title row.*/ 
  
  function csvToObjects(csvString) {
    const values = csvString.split(',').map(value => value.trim());
    const titles = values.splice(0, 3);
  
    const result = [];
  
    while (values.length > 0) {
      const obj = {};
      titles.forEach(title => {
        obj[title] = values.shift();
      });
      result.push(obj);
    }
    return result;
  }
 
  const csvString2 = "ID,First Name,Last Name,1,John,Doe,2,Jane,Smith,3,Bob,Johnson";
  const csvArray2 = csvToObjects(csvString2);
  //console.log(csvArray2);

/*5. Write a JavaScript program to convert an array of objects to a 
comma-separated value (CSV) string that contains only the columns specified.*/ 

   function objectsToCsv(data, columns) {
    const csvString = data.map(obj => columns.map(col => obj[col] || '').join(',')).join('\n');
    return `${columns.join(',')}\n${csvString}`;
  }
  
  const data = [
    { ID: '1', Name: 'John', Age: 30, City: 'New York' },
    { ID: '2', Name: 'Jane', Age: 25, City: 'Los Angeles' },
    { ID: '3', Name: 'Bob', Age: 40, City: 'Chicago' }
  ];
  
  const columnsToInclude = ['ID', 'Name', 'City'];
  const csvResult = objectsToCsv(data, columnsToInclude);
  //console.log(csvResult);

  
/*6. Write a JavaScript program to target a given value in a nested JSON object based on the given key.*/
   
   function findValueByKey(obj, keyToFind) {
    let result;
  
    function search(obj) {
      for (const key in obj) {
        if (key === keyToFind) result = obj[key];
        else if (typeof obj[key] === 'object') search(obj[key]);
      }
    }
  
    search(obj);
    return result;
  }
  
  const nestedObject = {
    id: '1',
    person: { name: 'John', address: { city: 'New York', zip: '10001' } },
    scores: [90, 85, 92]
  };
  
  const keyToFind = 'city';
  const targetValue = findValueByKey(nestedObject, keyToFind);
  //console.log(targetValue);

/*7. Write a JavaScript program to convert a specified number into an array of digits.*/

 function numberToArray(number) {
    return String(number).split('').map(Number);
  }
  
  const inputNumber = 12345;
  const resultArray = numberToArray(inputNumber);
  //console.log(resultArray);

/*8. Write a JavaScript program to filter out the specified values from a specified array. 
Return the original array without filtered values.*/ 

function filterValuesFromArray(array, valuesToFilter) {
    return array.filter(item => !valuesToFilter.includes(item));
  }
  
  const originalArray = [1, 2, 3, 4, 5];
  const valuesToFilter = [2, 4];
  const resultArray2 = filterValuesFromArray(originalArray, valuesToFilter);
  //console.log(resultArray2);

/*9. Write a JavaScript program to combine the numbers of a given array into an array containing all combinations.*/

function getAllCombinations(array) {
    const result = [];
  
    for (let i = 0; i < array.length; i++) {
      for (let j = i + 1; j <= array.length; j++) {
        result.push(array.slice(i, j));
      }
    }
    return result;
  }
  
  const inputArray = [1, 2, 3];
  const combinations = getAllCombinations(inputArray);
  //console.log(combinations);

/*10. Write a JavaScript program to extract values at specified indexes from a specified array.*/

function extractValuesAtIndexes(array, indexes) {
    return indexes.map(index => array[index]);
  }
  
  const originalArray2 = ['a', 'b', 'c', 'd', 'e'];
  const specifiedIndexes = [1, 3, 4];
  const extractedValues = extractValuesAtIndexes(originalArray2, specifiedIndexes);
  //console.log(extractedValues);

/*11. Write a JavaScript program to generate a random hexadecimal color code.*/ 

function generateRandomHexColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
  
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
  
    return color;
  }
  
  const randomHexColor = generateRandomHexColor();
  //console.log(randomHexColor);

/*12. Write a JavaScript program to remove non-printable ASCII characters from a given string.*/ 

function removeNonPrintableChars(inputString) {
    return inputString.replace(/[\x00-\x1F\x7F-\x9F]/g, '');
  }
  
  const originalString = 'Hello,\x0AWorld!\x08\x0C\x0B'; 
  const stringWithoutNonPrintableChars = removeNonPrintableChars(originalString);
  //console.log(stringWithoutNonPrintableChars);
  
/*13. Write a JavaScript program to convert a given string's length to bytes.*/   

function stringLengthInBytes(inputString) {
    const encoder = new TextEncoder();
    const bytes = encoder.encode(inputString);
    return bytes.length;
  }
  
  const inputString = 'Hello, World!';
  const bytesLength = stringLengthInBytes(inputString);
  //console.log(`Length in Bytes: ${bytesLength}`);

/*14. Write a JavaScript program to replace multiple object keys' names with the values provided.*/ 

function replaceKeysWithValues(object, keyMapping) {
    const updatedObject = {};
  
    for (const key in object) {
      const newKey = keyMapping[key] || key;
      updatedObject[newKey] = object[key];
    }
  
    return updatedObject;
  }
  
  const originalObject = { firstName: 'John', lastName: 'Doe', age: 30 };
  const keyMapping = { firstName: 'first', lastName: 'last' };
  const updatedObject = replaceKeysWithValues(originalObject, keyMapping);
  //console.log(updatedObject);

/* 15. Write a JavaScript program to return the minimum-maximum value of an array, 
after applying the provided function to set a comparing rule. */

function minMaxWithRule(arr, compareFunction) {
    if (!Array.isArray(arr) || arr.length === 0) {
      return undefined; // Handle invalid input
    }
  
    let minValue = arr[0];
    let maxValue = arr[0];
  
    for (let i = 1; i < arr.length; i++) {
      const currentValue = arr[i];
  
      if (compareFunction(currentValue, minValue) < 0) {
        minValue = currentValue;
      }
  
      if (compareFunction(currentValue, maxValue) > 0) {
        maxValue = currentValue;
      }
    }
  
    return { min: minValue, max: maxValue };
  }
  
  const numbers = [3, 8, 2, 5, 1];
  const result = minMaxWithRule(numbers, (a, b) => a - b);
  //console.log(result); 

  /* 16. Write a JavaScript function that returns true if the provided predicate 
  function returns true for all elements in a collection, false otherwise. */

  function allElementsMatch(collection, predicate) {
    for (let element of collection) {
      if (!predicate(element)) {
        return false;
      }
    }
    return true;
  }
  
  const myArray = [1, 2, 3, 4, 5];
  const isPositive = (num) => num > 0;
  const allPositive = allElementsMatch(myArray, isPositive);
  //console.log(allPositive); 

  /** 17. Write a JavaScript program to split the values of two given arrays into two groups. 
   * If an element in the filter is true, the corresponding element in the collection belongs to the 
   * first group; otherwise, it belongs to the second group. */

  function splitArrays(collection, filters) {
    const result = {
      group1: [],
      group2: []
    };
  
    for (let i = 0; i < collection.length; i++) {
      if (filters[i]) {
        result.group1.push(collection[i]);
      } else {
        result.group2.push(collection[i]);
      }
    }
  
    return result;
  }
  
  const values = [1, 2, 3, 4, 5];
  const filters = [true, false, true, false, true];
  const result2 = splitArrays(values, filters);
  // console.log(result2.group1); 
  // console.log(result2.group2); 

  /** 18. Write a JavaScript program to remove specified elements from the left of a given array of elements. */

  function removeElementsFromLeft(arr, numToRemove) {
    return arr.slice(numToRemove);
  }
  
  const originalArray3 = [1, 2, 3, 4, 5];
  const numberOfElementsToRemove = 2;
  const newArray = removeElementsFromLeft(originalArray3, numberOfElementsToRemove);
  //console.log(newArray); 

/** 19. Write a JavaScript program to remove specified elements from the right of a given array of elements. */

function removeElementsFromRight(arr, numToRemove) {
  return arr.slice(0, -numToRemove);
}

const originalArray4 = [1, 2, 3, 4, 5];
const numberOfElementsToRemove2 = 2;
const newArray2 = removeElementsFromRight(originalArray4, numberOfElementsToRemove2);
//console.log(newArray2); 

/** 20. Write a JavaScript program to extend a 3-digit color code to a 6-digit color code. */

function extendColorCode(color) {
  return /^#[0-9A-Fa-f]{3}$/.test(color) ? `#${color[1]}${color[1]}${color[2]}${color[2]}${color[3]}${color[3]}` : 'Invalid 3-digit color code';
}

const shortColorCode = '#abc';
const extendedColorCode = extendColorCode(shortColorCode);
//console.log(extendedColorCode); 

/** 21. Write a JavaScript program to get every nth element in a given array. */

function getEveryNthElement(arr, n) {
  return arr.filter((element, index) => index % n === 0);
}

const originalArray5 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const n = 3;
const resultArray3 = getEveryNthElement(originalArray5, n);
//console.log(resultArray3); 

/** 22. Write a JavaScript program to filter out non-unique values in an array. */

function filterUniqueValues(arr) {
  return arr.filter((value, index) => arr.indexOf(value) === index);
}

const originalArray6 = [1, 2, 3, 2, 4, 5, 6, 6, 7, 8, 9];
const uniqueArray = filterUniqueValues(originalArray6);
//console.log(uniqueArray); 

/** 23. Write a JavaScript program to filter out non-unique values in an array, based on a provided comparator function. */

function filterNonUniqueValues(arr, comparator) {
  const seen = new Set();
  return arr.filter(value => {
    const key = comparator(value);
    return !seen.has(key) ? seen.add(key) : false;
  });
}


const originalArray7 = [
  { id: 1, name: 'John' },
  { id: 2, name: 'Jane' },
  { id: 1, name: 'John' },
  { id: 3, name: 'Bob' },
];

const uniqueArray2 = filterNonUniqueValues(originalArray7, obj => obj.id);
//console.log(uniqueArray2);

/** 24. Write a JavaScript program to dcapitalize the first letter of a string. */

function decapitalizeString(str) {
  return str.charAt(0).toLowerCase() + str.slice(1);
}

const originalString2 = "DecapitalizeMe";
const decapitalizedString = decapitalizeString(originalString2);
//console.log(decapitalizedString);

/** 25. Write a JavaScript program to create an array out of the arrays by creating each possible pair from the arrays. */

function createPairsArray(arr1, arr2) {
  const pairsArray = [];

  arr1.forEach(item1 => {
    arr2.forEach(item2 => {
      pairsArray.push([item1, item2]);
    });
  });

  return pairsArray;
}

const array1 = [1, 2];
const array2 = ['a', 'b'];
const result3 = createPairsArray(array1, array2);
//console.log(result3);

  
  



  
  
  
  