const hourEl = document.querySelector('.hour')
const minuteEl = document.querySelector('.minute')
const secondEl = document.querySelector('.second')

const timeEl = document.querySelector('.time')
const dateEl = document.querySelector('.date')
const toggle = document.querySelector('.toggle')

{/* <div class="needle hour"></div>
                <div class="needle minute"></div> */}
// <div class="needle second"></div>
const days = ["Sunday", ' Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const mounths = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];


toggle.addEventListener('click', (e) => {
    const html = document.querySelector('html')
    if (html.classList.contains('dark')) {
        html.classList.remove('dark')
        e.target.innerHTML = 'Dark mode';
    } else {
        html.classList.add('dark')
        e.target.innerHTML = 'Light mode'
    }
})

function setTime() {
    const time = new Date();
    const mounth = time.getMonth();
    const day = time.getDay();
    const hours = time.getHours();
    const hourForClock = hours % 12;
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();

    const hourDegrees = scale(hourForClock, 0, 12, 0, 360);
    const minuteDegrees = scale(minutes, 0, 60, 0, 360);
    const secondDegrees = scale(seconds, 0, 60, 0, 360);

    hourEl.style.transform = `translate(-50%, -100%) rotate(${hourDegrees}deg)`
    secondEl.style.transform = `translate(-50%, -100%) rotate(${secondDegrees}deg)`
    // minuteEl.style.transform = `translate(-50%, -100%) rotate(${scale(minute, 0, 59, 0, 360)}deg)`
    minuteEl.style.transform = `translate(-50%, -100%) rotate(${minuteDegrees}deg)`

    timeEl.innerHTML = `${hourForClock} : ${minutes <0 ? `0${minutes}` : minutes}`
}
setTime();
function scale(num, in_min, in_max, out_min, out_max) {
    console.log((num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min);

    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
};
setInterval(setTime, 1000)



