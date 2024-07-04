const counters = document.querySelectorAll('.number')

counters.forEach((counter) => {
    counter.innerText = "0"
    const updateCounter = () => {
        const target = +counter.getAttribute('data-target')
        const c = +counter.innerText
        console.log('1')
        const increment = target / 1000

        if(c < target) {
            counter.innerText = `${Math.ceil(c + increment)}`
            setTimeout(updateCounter, 2)
        }
    }  
    updateCounter();

})