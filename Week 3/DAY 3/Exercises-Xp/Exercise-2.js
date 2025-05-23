// form
const form = document.querySelector('form');
console.log(form);

// inputs by id
const firstName = document.getElementById('fname');
const lastName = document.getElementById('lname');
console.log(firstName, lastName);

// inputs by name
const firstByName = document.getElementsByName('firstname');
const lastByName = document.getElementsByName('lastname');
console.log(firstByName, lastByName);

// handle form submit
form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // get values
    const firstValue = firstName.value;
    const lastValue = lastName.value;
    
    // check if not empty
    if(firstValue && lastValue) {
        // get list
        const list = document.querySelector('.usersAnswer');
        
        // clear old items
        list.innerHTML = '';
        
        // add first name
        const firstItem = document.createElement('li');
        firstItem.textContent = firstValue;
        list.appendChild(firstItem);
        
        // add last name
        const lastItem = document.createElement('li');
        lastItem.textContent = lastValue;
        list.appendChild(lastItem);
    }
});
