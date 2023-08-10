const p1Add = document.querySelector('#p1Add');
const p2Add = document.querySelector('#p2Add');
const resetBtn = document.querySelector('#resetBtn');
const maxPoints = document.querySelector('#numInput');
const form = document.querySelector('#playForm');

const p1Point = document.querySelector('#p1Points');
const p2Point = document.querySelector('#p2Points');

p1Add.addEventListener('click', () => {
    p1Point.innerText++;
    if (p1Point.innerText >= maxPoints.value){
        console.log('p1 won');
        p1Add.disabled = true;
        p2Add.disabled = true;
    }
})

p2Add.addEventListener('click', () => {
    p2Point.innerText++;
    if (p2Point.innerText >= maxPoints.value){
        console.log('p2 won');
        p2Add.disabled = true;
        p1Add.disabled = true;
    }
})

resetBtn.addEventListener('click', () => {
    p1Point.innerText = 0;
    p2Point.innerText = 0;
    maxPoints.value = 0;
    p1Add.disabled = false;
    p2Add.disabled = false;
})