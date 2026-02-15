const d = new Date(2026,1,12,8,0,0);
const month = d.getMonth();
const hour = d.getHours();
switch(month) {
    case 0:
        console.log('January'); // month is 0-indexed, so January is 0
        break;
    case 1:
        console.log('February');
        break;
    default:
        console.log('Other month');
}

switch(true) {
    case hour < 12:
        console.log('Good morning');
        break;
    case hour < 18:
        console.log('Good afternoon');
        break;
    default:
        console.log('Good evening');
}

//falsy value: false, 0, '', null, undefined, NaN
//truthy value: all values that are not falsy

let b;

b = 10 || 20; // 10 is truthy, so b will be assigned 10
b = 0 || 20; // 0 is falsy, so b will be assigned 20
b = '' || 'Hello'; // '' is falsy, so b will be assigned 'Hello'
b = null || 'World'; // null is falsy, so b will be assigned 'World'
b = undefined || 'JavaScript'; // undefined is falsy, so b will be assigned 'JavaScript'
b = NaN || 'Programming'; // NaN is falsy, so b will be assigned 'Programming'

b = 0 || null || undefined || ''; // all values are falsy, so b will be assigned the last falsy value, which is ''

let c;
//|| checks for first truthy value and returns it, ?? checks for first non-nullish value and returns it

c = 10 ?? 20; // 10 is not null or undefined, so c will be assigned 10
c = null ?? 20; // null is null, so c will be assigned 20
c = undefined ?? 'Hello'; // undefined is undefined, so c will be assigned 'Hello'
c = '' ?? 'World'; // '' is not null or undefined, so c will be assigned ''
c = NaN ?? 'JavaScript'; // NaN is not null or undefined, so c will be assigned NaN

c = null ?? undefined ?? ''; // all values are null or undefined, so c will be assigned the last value, which is ''

let de;

de = 10 && 20; // 10 is truthy, so de will be assigned 20
de = 0 && 20; // 0 is falsy, so de will be assigned 0
de = '' && 'Hello'; // '' is falsy, so de will be assigned ''
de = null && 'World'; // null is falsy, so de will be assigned null
de = undefined && 'JavaScript'; // undefined is falsy, so de will be assigned undefined
de = NaN && 'Programming'; // NaN is falsy, so de will be assigned NaN


//map

const map = new Map();
map.set('name','Shashi');
map.set('age',30);
map.set('city','Bangalore');

for(let [key, value] of map) {
    console.log(`${key}: ${value}`);
}

//set

const set = new Set();
set.add(1);
set.add(2);
set.add(3);
set.add(2); // duplicate value, will not be added to the set

for(let value of set) {
    console.log(value);
}

const arr = [1,2,3,4,5];
for(let value of arr) { //of returns the value of the array
    console.log(value);
}

for(let i in arr) { //in returns the index of the array
    console.log(i); // index of the array
}

const obj = {
    color1: 'red',
    color2: 'green',
    color3: 'blue'
};
for(let key in obj) {
    console.log(`${key}: ${obj[key]}`);
}


//forEach

const arr1 = [1,2,3,4,5];
arr1.forEach(function(value) {
    console.log(value);
});

arr1.forEach((value) => {
    console.log(value);
});

arr1.forEach(value => console.log(value));

//Array.filter
console.log('array.filter');
const evenNumbers = arr1.filter(function(num) {
    return num%2==0;
});

console.log(evenNumbers); //prints(2)[2,4]
console.log(JSON.stringify(evenNumbers)); //prints [2.4]

const even = arr1.filter((num) => {
    return num%2==0;
});
console.log(even);

const evenNumbersArrow = arr1.filter(num => num%2==0);
console.log(evenNumbersArrow);

//Array.map

const arr2 = arr1.map(x => x*2);
console.log(arr2);

const squareAndDouble = arr1
    .map((num) => Math.sqrt(num))
    .map((sqrt) => 2*sqrt);
    
console.log(squareAndDouble);

//Array.reduce - returns single value

const sum = arr1.reduce(function(accumulator, currValue) {
    return accumulator+=currValue;
},0);
console.log(sum);

const sum2 = arr1.reduce((acc,curr) => acc+curr,0);
console.log(sum2);