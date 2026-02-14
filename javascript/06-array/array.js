const arr = [1,2,3,4,5];

arr.push(6);
arr.pop();

arr.unshift(0);
console.log(arr); // [0,1,2,3,4,5]

arr.shift();
console.log(arr); // [1,2,3,4,5]

arr.splice(2, 0, 99); // insert 99 at index 2 without removing any element
console.log(arr); // [1,2,99,3,4,5]

arr.splice(2, 1); // remove 1 element at index 2
console.log(arr); // [1,2,3,4,5]

arr.reverse();

let x = arr.includes(3); //true

x = arr.indexOf(3); // 2

x = arr.lastIndexOf(3); // 2

x = arr.join('-'); // "1-2-3-4-5"

const arr2 = [1,2,3,4,5,6];

let a = arr2.slice(2, 5); // [3,4,5] - creates a new array from index 2 to index 4 (5 is not included)
let b = arr2.splice(3,2); // [4,5] - removes 2 elements starting from index 3 and returns the removed elements, arr2 is now [1,2,3,6]


//nested arrays

const fruits = ['apple', 'banana', 'orange'];
const berries = ['strawberry', 'blueberry', 'raspberry'];

fruits.concat(berries); // this will not modify the original fruits array, it will return a new array that is the concatenation of fruits and berries
console.log(fruits); // ['apple', 'banana', 'orange', 'strawberry', 'blueberry', 'raspberry']

let spreadFruits = [...fruits, ...berries]; // this will create a new array that is the concatenation of fruits and berries using the spread operator
console.log(spreadFruits); // ['apple', 'banana', 'orange', 'strawberry', 'blueberry', 'raspberry']

const nestedArray = [fruits, berries]; //just reference to the original arrays, not a copy
console.log(nestedArray); // [['apple', 'banana', 'orange'], ['strawberry', 'blueberry', 'raspberry']] 
fruits.push(berries);
console.log(nestedArray); // [['apple', 'banana', 'orange', ['strawberry', 'blueberry', 'raspberry']], ['strawberry', 'blueberry', 'raspberry']]


let f = fruits[3][0]; // 'strawberry'



const array = [1,2,[3,4],5,[6,7,8],9];
let flatArray = array.flat(); // [1,2,3,4,5,6,7,8,9] - flattens the array by one level

let fr = Arrays.from('hello'); // ['h', 'e', 'l', 'l', 'o'] - creates an array from a string

let arr3 = [1,2,3,4,5];
let mappedArr = arr3.map(x => x * 2); // [2,4,6,8,10] - creates a new array by applying the provided function to each element of the original array



const t = 1;
const u = 2;
const v = 3;

x = Arrays.of(t, u, v); // [1,2,3] - creates a new array from the provided arguments

