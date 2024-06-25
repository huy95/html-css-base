const progress = document.getElementById('progress')
const prev = document.getElementById('prev')
const next = document.getElementById('next')
const circles = document.querySelectorAll('.circle')


let currentActive = 1;

next.addEventListener('click', () => {
    currentActive++
    if(currentActive > circles.length) {
        currentActive = circles.length
    }
    update()
})

prev.addEventListener('click', () => {
    currentActive--
    if(currentActive < 0){
        currentActive = 1
    }
    update()
})

function update() {
    circles.forEach((cl, idx) => {
        if(idx < currentActive){
            cl.classList.add('active')
        } else {
            cl.classList.remove('active')
        }
    })
    const active = document.querySelectorAll('.active')
    progress.style.width = ((active.length - 1)/(circles.length - 1)) * 100 + "%"
    console.log(((active.length - 1)/(circles.length - 1)))
    if(currentActive === 1){
        prev.disabled = true;
    } else if (currentActive === circles.length){
        circles.disabled = true 
    } else {
        prev.disabled = false
        circles.disabled = false
    }

}