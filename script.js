const xClass = "x";
const circleClass = "circle";

const cellElements = document.querySelectorAll('[data-cell]')
let circleTurn;

cellElements.forEach(cell => {
    cell.addEventListener('click', handleClick, { once: true})
})

function handleClick(e) {
    const cell = e.target;
    const currentClass = circleTurn ? circleClass : xClass;
    //placeMark
    placeMark(cell, currentClass);
    //Check for win
    //check for Draw
    //switch turns
    swapTurns();
}

function placeMark(cell, currentClass) {
    cell.classList.add(currentClass);
}

function swapTurns() {
    circleTurn = !circleTurn;
}