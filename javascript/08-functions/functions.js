function sayHello() {
    console.log("Hello!");
}

sayHello();

let a = 2;
let b = 3;

function add(x, y) {
    return x + y;
}

let sum = add(a, b);
console.log(sum); // 5

function greet(name = "Guest") { // default parameter
    console.log(`Hello, ${name}!`);
}

greet(); // Hello, Guest!
greet("Shashi"); // Hello, Shashi!

//rest parameters
function restParam(...numbers) {
    return numbers;
}

console.log(restParam(1, 2, 3)); // [1, 2, 3]
console.log(restParam(4, 5)); // [4, 5]

function sumAll(...numbers) {
    let total = 0;
    for(let num of numbers) {
        total += num;
    }
    return total;
}

//return random number from array

let arr = [10, 20, 30, 40, 50];

function getRandomElement(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
}

//Three types to create functions in JavaScript: function declaration, function expression, and arrow function.

console.log(addDollarSign(100)); // $100

function addDollarSign(amount) {
    return `$${amount}`;
}

//addDollarSign works even before its declaration because of function hoisting, which allows us to call the function before it is defined in the code. 
// Basically, during the compilation phase, JavaScript moves all function declarations to the top of their scope, making them available throughout the entire scope. 
// This is why we can call addDollarSign before its declaration without any issues.

const addPlusSign = function(amount) {
    return `+${amount}`;
};

console.log(addPlusSign(200)); // +200

//addPlusSign will not work before its declaration because it is a function expression, which is not hoisted like function declarations. 
// In this case, addPlusSign is treated as a variable that holds a function, and variables declared with const (or let) are not hoisted. 
// Therefore, if we try to call addPlusSign before its declaration, we will get a ReferenceError because the variable has not been initialized yet.


//arrow function

const addMinusSign = (amount) => {
    return `-${amount}`;
};

console.log(addMinusSign(300)); // -300

//addMinusSign will not work before its declaration for the same reason as addPlusSign, because it is also a function expression (specifically an arrow function), and variables declared with const (or let) are not hoisted. 
// Therefore, if we try to call addMinusSign before its declaration, we will get a ReferenceError because the variable has not been initialized yet.

//implicit return in arrow function

const addExclamationMark = amount => `!${amount}`;


//foreach loop with function

const numbers = [1, 2, 3, 4, 5];

numbers.forEach(function(num) {
    console.log(num * 2);
});

// using arrow function in forEach loop

numbers.forEach(num => console.log(num * 2));


//iife - Immediately Invoked Function Expression

//()(); // This is an IIFE, it is a function that is defined and immediately invoked. It is often used to create a new scope and avoid polluting the global scope.

(function(name) {
    console.log(`Hello, ${name}!`);
})('Shashi'); // Hello, Shashi!


//create a arrow function minmax that takes arr of numbers and returns the minimum and maximum of the two numbers.

const minmax = (arr) => {
    let min = arr[0];
    let max = arr[0];
    for(let num of arr) {
        if(num < min) min = num;
        if(num > max) max = num;
    }
    return {min, max};
};

console.log(minmax([3, 1, 4, 1, 5, 9])); // { min: 1, max: 9 }

(function(len,width) {
    console.log(`len is ${len} and width is ${width} and area is ${len * width}`);
})(2,3);

//Exceution context

function getSum(a, b) {
    let sum = a + b;
    return sum;
}
//a and b and sum are allocated memory and stores "undefined" in the memory, then the function is executed and a and b and sum are assigned the values passed as arguments, and sum is calculated and returned. 
// After the function execution is complete, the execution context is destroyed and the memory allocated for a, b, and sum is freed.

