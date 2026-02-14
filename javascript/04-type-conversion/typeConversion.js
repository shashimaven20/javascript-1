let amount = '100';
console.log(typeof amount); // string

//to convert string to number

amount = Number(amount);
amount = parseInt(amount);
amount = +amount; //unary plus operator

//change number to string

amount = String(amount);
amount = amount.toString(); //amount is primitive but it is temporarily wrapped in a String object to call the toString() method
amount = '' + amount; //concatenation with an empty string

let isActive = 1;

isActive = Boolean(isActive); //true, any non-zero number is considered true

let v = 'hello';
v = Boolean(v); //true, any non-empty string is considered true

aV = parseInt(v); //NaN, cannot convert 'hello' to a number

console.log(undefined + undefined); //NaN, cannot perform arithmetic operations on undefined


//operators that perform type coercion
let x = '5' + 10; // '510', string concatenation, number 10 is coerced to string '10'
x = 10 + '5'; // '105', string concatenation, number 10 is coerced to string '10'

x = 5 + true; // 6, true is coerced to number 1
x = 5 + false; // 5, false is coerced to number 0

x = '5' - 2; // 3, subtraction operator coerces '5' to number 5

x = 2 ** 3; //exponentiation operator, x is 8

x = 2 == '2'; //true, loose equality operator performs type coercion

x = 2 === '2'; //false, strict equality operator does not perform type coercion

x = null == undefined; //true, loose equality operator considers null and undefined equal

x = null === undefined; //false, strict equality operator does not consider null and undefined equal