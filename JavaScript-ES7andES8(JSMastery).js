// JavaScript Mastery (ES7 and ES8)

console.log("Learning ES7 and ES8:");

console.log(' ')

// String.prototype.padStart/padEnd  -  Pads the current string with another string (multiple times if needed) untile string reaches given length

console.log('String.prototype.padStart/padEnd:'); // Syntax: padStart/padEnd(desiredLength, textToAdd)

console.log(' ');

const string = '12345'; // Can be usedd to make sure strings are a certain length


console.log(string.padStart(10, '.'));  //  Adds . to the beginning
console.log(string.padEnd(10, '.'));    // Adds . to the ending

console.log(' ');

console.log('-----------------------------------------------------------------------');

console.log(' ');

// Object.values  -  Provides us with an array of object properties

console.log('Object.Values');

console.log(' ');

const object = {name: 'David', age: 25,}

console.log(Object.values(object));

console.log(' ');

console.log('-----------------------------------------------------------------------');

console.log(' ');

//  Object.entries

console.log('Object.Entries');

console.log(' ');

console.log(Object.entries(object));

console.log(' ');

console.log('-----------------------------------------------------------------------');

console.log(' ');

//  Exponentiation

console.log('Exponentiation');

console.log(' ');

console.log(Math.pow(2 , 3)); // Output = 8
console.log(2 ** 3);          // Output = 8   

console.log(' ');

console.log('-----------------------------------------------------------------------');

console.log(' ');

//  Trailing Commas

console.log('Trailing Commas');

console.log(' ');

const object2 = {first: 1, second: 2, third: 3}

console.log(object2);

console.log(' ');

console.log('End');