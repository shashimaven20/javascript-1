let firstName = 'John';
let lastName = 'Doe';

console.log(firstName);
let score;
console.log(age); // undefined
score = 100;
console.log(score); // 100

var age = 25; //var is function-scoped and can be accessed before declaration (hoisting) but cannot be used outside the function.
console.log(age);
if(true) {
    score = 200; // This will update the score variable declared outside the block
    console.log(score); // 200
}

if(true) {
    let score = 300; // This will create a new score variable scoped to this block
    console.log(score); // 300
}

console.log(score); // 200, the outer score variable is unchanged by the inner block

const PI = 3.14;
console.log(PI); // 3.14
// PI = 3.14159; // This will throw an error because PI is a constant and cannot be reassigned

const arr = [1, 2, 3];
console.log(arr); // [1, 2, 3]
arr.push(4);
console.log(arr); // [1, 2, 3, 4]
// arr = [5, 6, 7]; // This will throw an error because arr is a constant and cannot be reassigned but we can modify the contents of the array.

const person = {
    name: 'Shashi'
};
console.log(person); // { name: 'Shashi' }
person.name = 'Shashi Kumar';
console.log(person); // { name: 'Shashi Kumar' }
// person = { name: 'John Doe' }; // This will throw an error because person is a constant and cannot be reassigned but we can modify the properties of the object.
person.age = 30;
console.log(person); // { name: 'Shashi Kumar', age: 30 }



