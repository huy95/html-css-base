const buttons = document.querySelectorAll('.rip')
    buttons.forEach(button => {
        button.addEventListener('click', function (e) {
            const x = e.clientX
            const y = e.clientY
            
            const buttonLeft= e.target.offsetLeft
            const buttonTop = e.target.offsetTop    

            const xInside = x - buttonLeft
            const yInside = y - buttonTop

            console.log(xInside, yInside)

            const circle = document.createElement('span')
            circle.classList.add('circle')
            circle.style.top = yInside+'px'
            circle.style.left = xInside + 'px'
            button.appendChild(circle)
            setTimeout(() => circle.remove(), 500)
        })
    })