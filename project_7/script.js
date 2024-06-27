const left = document.querySelector('.split.left')
const right = document.querySelector('.split.right')
const contaiter = document.querySelector('.container')

left.addEventListener('mouseenter', () => {
    contaiter.classList.add('hover-left');
    contaiter.classList.remove('hover-right');
    console.log('hover left')
})
left.addEventListener('mouseleave', () => {
    contaiter.classList.remove('hover-left');

    console.log('move hover right')
})

right.addEventListener('mouseenter', () => {
    contaiter.classList.add('hover-right')
    contaiter.classList.remove('hover-left');
    console.log('hover right')
})
right.addEventListener('mouseleave',
    () => {
        contaiter.classList.remove('hover-right');

        console.log('move hover right')
    })