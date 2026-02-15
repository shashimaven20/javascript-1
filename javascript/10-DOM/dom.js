let output;

// document.all is deprecated
output = document.all;
output = document.all[11];
output = document.all.length;

// Everything in the html tags
output = document.documentElement;

// Head and body tags
output = document.head;
output = document.body;

// HTMLCollection of everything in head/body
output = document.head.children;
output = document.body.children;

// Random properties
output = document.doctype;
output = document.domain;
output = document.URL;
output = document.characterSet;
output = document.contentType;

// Get all forms
output = document.forms;
output = document.forms[0];
output = document.forms[0].id;
output = document.forms[0].method;
output = document.forms[0].action;

// Change a form id
document.forms[0].id = 'new-id';

// Get all images
output = document.images;

// Turn an HTMLCollection into an array
const forms = Array.from(document.forms);
forms.forEach((form) => console.log(form));

console.log(output);

console.log(document.getElementById('item-list'));

console.log(document.getElementById('app-title').getAttribute('id'));

document.getElementById('app-title').setAttribute('class','title');
console.log(document.getElementById('app-title').getAttribute('class'));

document.getElementById('app-title').setAttribute('attr-name','attr-value');
document.getElementById('app-title').setAttribute('class','list');

const title = document.getElementById('app-title');
title.style.color = 'red';

//querySelector
const list = document.querySelector('ul');
console.log(list);
const firstItem = list.querySelector('li');
firstItem.style.color = 'blue';

//querySelectorAll
//const listItems = document.querySelectorAll('li'); //it will return all li from html, so better use .class e.g .item
const listItems = document.querySelectorAll('.item');
console.log(listItems);
console.log(listItems[1].innerText);

listItems.forEach(item => item.style.color='red');

listItems.forEach((item,index) => {
    if(index==1) item.remove();
    if(index==0) item.innerHTML = `Orange
          <button class="remove-item btn-link text-red">
            <i class="fa-solid fa-xmark"></i>
          </button>`;
});

const listItems2 = document.getElementsByClassName('item');
console.log(listItems2);