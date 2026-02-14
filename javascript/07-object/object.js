const todo = {
    id: 1,
    title: 'Learn JavaScript',
    completed: false,
    tags: ['programming', 'javascript', 'learning'],
    details: {
        description: 'Complete the JavaScript course on Codecademy',
        dueDate: '2024-12-31'
    }
};

console.log(todo);

const { id, title, completed, tags, details } = todo; // object destructuring
console.log(details); // { description: 'Complete the JavaScript course on Codecademy', dueDate: '2024-12-31' }

const { description, dueDate } = details; // nested object destructuring
console.log(description); // 'Complete the JavaScript course on Codecademy'

const { title: todoTitle, details: { dueDate: todoDueDate } } = todo; // destructuring with renaming
console.log(todoTitle); // 'Learn JavaScript'
console.log(todoDueDate); // '2024-12-31'


const arr = [1,2,3,4,5];

const [first, second, ...rest] = arr; // array destructuring with rest operator
console.log(first); // 1
console.log(second); // 2
console.log(rest); // [3,4,5]


//json

const post = { id: 1, title: 'Hello World', content: 'This is my first post' };

const postJSON = JSON.stringify(post); // convert JavaScript object to JSON string
console.log(postJSON); // '{"id":1,"title":"Hello World","content":"This is my first post"}'

const parsedPost = JSON.parse(postJSON); // convert JSON string back to JavaScript object
console.log(parsedPost); // { id: 1, title: 'Hello World', content: 'This is my first post' }