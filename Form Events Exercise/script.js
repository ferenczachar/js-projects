

// Leave the next line, the form must be assigned to a variable named 'form' in order for the exercise test to pass
const form = document.querySelector('form');
const txt = document.querySelector('#product');
const num = document.querySelector('#qty');
const list = document.querySelector('#list');

form.addEventListener('submit', (e) => { //Event Listener - Starts the callback once 'submit' action is done.
    e.preventDefault(); //To prevent changing to next page once submitted.
    const addLI = document.createElement('LI');
    addLI.innerText = `${num.value} ${txt.value}`;
    list.appendChild(addLI)
    form.reset(); //To reset form, once submitted.
});

