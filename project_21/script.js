const fill = document.querySelector('.fill');
const empties = document.querySelectorAll('.empty');

fill.addEventListener('dragstart', dragStart);
fill.addEventListener('dragend', dragEnd);

empties.forEach(empty => {
    empty.addEventListener('dragover', dragOver);
    empty.addEventListener('dragenter', dragEnter);
    empty.addEventListener('dragleave', dragLeave);
    empty.addEventListener('drop', dragDrop);
});

function dragStart(e) {
    setTimeout(() => this.classList.add('invisible'), 0);
}

function dragEnd(e) {
    this.classList.remove('invisible');
}

function dragOver(e) {
    e.preventDefault();
}

function dragEnter(e) {
    e.preventDefault();
    this.classList.add('hold');
}

function dragLeave(e) {
    this.classList.remove('hold');
}

function dragDrop(e) {
    this.classList.remove('hold');
    this.append(fill);
}
