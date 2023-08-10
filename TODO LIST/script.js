const form = document.querySelector('#frm');
const txt = document.querySelector('#input');
const btn = document.querySelector('#btn');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const newLI = document.createElement('li');
    const list = document.querySelector('#list');
    list.append(newLI);
    newLI.innerText = txt.value;
})