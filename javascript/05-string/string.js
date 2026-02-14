let x;

const name = 'Shashi';

x = 'hello ' + name;
console.log(x); // "hello Shashi"

//template literals (backticks``)
x = `hello ${name}`;
console.log(x); // "hello Shashi"

const s = 'Hello World';
x = s.length; // length property of string
console.log(x); // 11

x = s.toUpperCase();
console.log(x); // "HELLO WORLD"

x = s.toLowerCase();
console.log(x); // "hello world"

x = s.indexOf('o'); // index of first occurrence of 'o'
console.log(x); // 4

x = s.lastIndexOf('o'); // index of last occurrence of 'o'
console.log(x); // 7

x = s.slice(0, 5); // slice from index 0 to 5 (not including 5)
console.log(x); // "Hello"

x = s.substring(0, 5); // substring from index 0 to 5 (not including 5)
console.log(x); // "Hello"

//diff bw slice and substring: slice can accept negative indices, substring treats negative indices as 0
x = s.slice(-5); // slice last 5 characters
console.log(x); // "World"

x = s.substring(-5); // substring treats negative index as 0, so it returns the whole string
console.log(x); // "Hello World"

x = s.replace('World', 'JavaScript'); // replace 'World' with 'JavaScript'
console.log(x); // "Hello JavaScript"

x = s.split(' '); // split string into array of substrings using space as separator
console.log(x); // ["Hello", "World"]

x = s.trim(); // remove whitespace from both ends of the string (no effect here since there is no extra whitespace)
console.log(x); // "Hello World"

x = s.charAt(0); // character at index 0
console.log(x); // "H"

x = s[0]; // character at index 0 using bracket notation
console.log(x); // "H"

x = s.includes('World'); // check if 'World' is in the string
console.log(x); // true

x = s.startsWith('Hello'); // check if string starts with 'Hello'
console.log(x); // true

x = s.endsWith('World'); // check if string ends with 'World'
console.log(x); // true

x = s.repeat(2); // repeat the string 2 times
console.log(x); // "Hello WorldHello World"

x = s.padStart(20, '*'); // pad the string with '*' at the start to make it 20 characters long
console.log(x); // "*******Hello World"

x = s.padEnd(20, '*'); // pad the string with '*' at the end to make it 20 characters long
console.log(x); // "Hello World*******"

x = s.match(/o/g); // find all occurrences of 'o' using regex
console.log(x); // ["o", "o"]

x = s.search(/World/); // search for 'World' using regex and return index
console.log(x); // 6

x = s.indexOf('o', 5); // index of 'o' starting from index 5
console.log(x); // 7

x = s.lastIndexOf('o', 5); // last index of 'o' starting from index 5
console.log(x); // 4

x = s.slice(6); // slice from index 6 to the end
console.log(x); // "World"

x = s.substring(6); // substring from index 6 to the end
console.log(x); // "World"

x = s.split('o'); // split string into array of substrings using 'o' as separator
console.log(x); // ["Hell", " W", "rld"]

x = s.replace(/o/g, '0'); // replace all occurrences of 'o' with '0' using regex
console.log(x); // "Hell0 W0rld"

x = s.replaceAll('o', '0'); // replace all occurrences of 'o' with '0' using replaceAll
console.log(x); // "Hell0 W0rld"

x = s.toLocaleUpperCase(); // convert string to uppercase using locale-specific case mapping
console.log(x); // "HELLO WORLD"

x = s.toLocaleLowerCase(); // (use in international apps) convert string to lowercase using locale-specific case mapping
console.log(x); // "hello world"

x = s.normalize(); // normalize the string (useful for Unicode strings)
console.log(x); // "Hello World"

//slice vs splice(array methods, not string methods)
let a = [1,2,3,4];
let b = a.slice(1,3);
let c = a.splice(1,3);

console.log(a);
console.log(b); //slice copies
console.log(c); //modifies original array

/*
| Feature        | `"str"`        | `new String("str")` |
| -------------- | -------------- | ------------------- |
| Type           | Primitive      | Object              |
| typeof         | string         | object              |
| Memory         | Light          | Heavy               |
| === comparison | Works normally | Different           |
| Truthiness     | "" → false     | Always true         |
| Recommended    | ✅ Yes         | ❌ No               |
*/

//Both primitive strings and String objects have immutable string values, but new String() is a mutable object wrapper 
// whose properties can be changed, whereas primitives have no mutable container.
