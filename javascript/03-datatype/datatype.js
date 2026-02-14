//primitive data types: string, number(both int and float), boolean, null, undefined, symbol, bigint
    //stored directly in the stack(no reference or pointer), accessed by value, immutable

let x = 5;
let y = x;
y = 10;

console.log(x); // 5
console.log(y); // 10 (stored directly in the stack, accessed by value, no pointer or reference, immutable)
//immutable means new value is created when we change the value of a primitive data type, the original value remains unchanged.

//reference data types: object, array, function
    //stored in the heap, accessed by reference, mutable

let s = "hi";
s[0] = "H";

console.log(s); // "hi" - immutable

let arr = [1,2,3];
arr[0] = 99;

console.log(arr); // [99,2,3] - mutable


const age = 30;
console.log(typeof age); // number

const name = 'Shashi';
console.log(typeof name); // string

const aptNumber = null;
console.log(typeof aptNumber); // object (this is a known quirk in JavaScript, null is considered an object)

let a = {x:1};
let b = a; // b is a reference to the same object in memory as a
b.x = 2; // modifying the object through b will also affect a

console.log(a.x);

let c = {x:1};
let d = {...c}; // d is a new object with the same properties as c(shallow copy)
d.x = 2; // modifying d will not affect c

console.log(c.x); // 1

let e = {x:1};
let f = e;

f = {x:2}; // f now references a new object, e still references the original object

console.log(e.x); // 1