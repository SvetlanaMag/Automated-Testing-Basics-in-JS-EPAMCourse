// 1. Perform addition of various types (string + boolean, string + number, number + boolean)
let str = '35';
let num = 7;
let bool = true;

console.log('**Addition of various types:');
console.log('string + boolean =', str + bool);
console.log('string + number =', str + num);
console.log('number + boolean =', num + bool, '\n');

// 2. Perform multiplication of various types (string * boolean, string * number, number * boolean)
console.log('**Multiplication of various types:');
console.log('string * boolean =', str * bool);
console.log('string * number =', str * num);
console.log('number * boolean =', num * bool, '\n');

// 3. Divide different types (string / boolean, string / number, number / Boolean)
console.log('**Division of various types:');
console.log('string / boolean =', str / bool);
console.log('string / number =', str / num);
console.log('number / boolean =', num / bool, '\n');

// 4. Perform explicit conversion (number, string, boolean)
console.log('**Explicit conversion:');
console.log(`string to boolean - ${Boolean(str)} - type: ${typeof(Boolean(str))}`);
console.log(`string to number - ${+str} - type: ${typeof(+str)}`);
console.log(`number to boolean - ${Boolean(num)} - type: ${typeof(Boolean(num))}`);
console.log(`number to string - ${String(num)} - type: ${typeof(String(num))}`);
console.log(`boolean to string - ${String(bool)} - type: ${typeof(String(bool))}`);
console.log(`boolean to number - ${Number(bool)} - type: ${typeof(Number(bool))}`);

