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