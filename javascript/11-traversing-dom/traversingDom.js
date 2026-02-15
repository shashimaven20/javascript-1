const parent = document.querySelector('.parent'); //this method return NodeList -better
//console.log(parent);

//const parent = document.getElementsByClassName('parent')[0]; //this method return HTML collection
console.log(parent);
const child = parent.children;  //-to get child from parent
console.log(child);

const output = parent.children[1].innerText;
console.log(output);

parent.firstElementChild.innerText = 'Child one';
parent.lastElementChild.innerText = 'Last child';


const childvar = document.querySelector('.child');

const parentvar = childvar.parentElement; //-to get parent from child
parentvar.style.border = '1px solid #ccc';
parentvar.style.padding = '10px';
console.log(childvar.parentElement);

//sibling element

const secondItem = document.querySelector('.child:nth-child(2)');
console.log(secondItem);

const output2 = secondItem.nextElementSibling.style.color = 'green';
secondItem.nextElementSibling.previousElementSibling.style.color = 'red';

//parent.children - parent.childNodes is also there, which returns all the nodes. including text, comment, div (this method not much used)
//child.parentElement //child.parentNode
//my.nextElementSibling //my.nextSibling
//my.previousElementSibling //my.previousSibling(not much used)

const childNode = parent.childNodes;
console.log(childNode);

childNode[1].style.color = 'blue';

const div = document.createElement('div');
div.className = 'my-element';
div.id = 'my-element';

div.setAttribute('title','my-element');
div.innerText = 'hello world'; //or
const text = document.createTextNode('Hellow world');
div.appendChild(text);

console.log(div);
