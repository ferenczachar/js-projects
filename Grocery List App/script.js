const form = document.querySelector('#newItemForm');
const inputVal = document.querySelector('#inputVal');
const submitBtn = document.querySelector('#submitBtn');

const myList = document.querySelector('#myList');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    addItem();
    inputVal.value = '';
});


function addItem() {
    let newLI = document.createElement('li');
    let txt = document.createElement('span');
    let doneBtn = document.createElement('button');
    let removeBtn  = document.createElement('button');
    myList.appendChild(newLI);
    newLI.appendChild(txt);
    newLI.appendChild(doneBtn);
    newLI.appendChild(removeBtn);

    txt.innerText = inputVal.value;
    doneBtn.innerText = "Done";
    doneBtn.className = "done-btn";
    removeBtn.innerText = "Remove";
    removeBtn.className = "remove-btn";
    
    removeBtn.addEventListener('click', () => {
        myList.removeChild(newLI);
    })

    doneBtn.addEventListener('click', () => {
        txt.style.textDecoration = "line-through";
    })
}