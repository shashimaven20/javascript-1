//creating element


//quick and dirty
function createListItem(value) {
    const li = document.createElement('li');

    li.innerHTML = `${value}
          <button class="remove-item btn-link text-red">
            <i class="fa-solid fa-xmark"></i>
          </button>`

    document.querySelector('.items').appendChild(li);
}

createListItem('Eggs');

//clean
function createNewItem(value) {
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(value));

    const button = document.createElement('button');
    button.className = 'remove-item btn-link text-red';

    const icon = document.createElement('i');
    icon.className = 'fa-solid fa-xmark';

    button.appendChild(icon);
    li.appendChild(button);

    document.querySelector('.items').appendChild(li);
}

createNewItem('Cheese');

//cleaner
function createButton(classes) {
    const button = document.createElement('button');
    button.className = classes;
    return button;
}
function createIcon(classes) {
    const icon = document.createElement('i');
    icon.className = 'fa-solid fa-xmark';
    return icon;
}
function createNewListItem(value) {
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(value));

    const button = createButton('emove-item btn-link text-red');
    const icon = createIcon('fa-solid fa-xmark');

    button.appendChild(icon);
    li.appendChild(button);

    document.querySelector('.items').appendChild(li);
}

createNewListItem('Bread');