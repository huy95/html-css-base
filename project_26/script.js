const button = document.getElementById('button')
const toasts = document.getElementById('toasts')


const messages = [
    'message one',
    'message two',
    'message three',
    'message four'
]

button.addEventListener('click', () => createNotification())

function createNotification() {
    const noti = document.createElement('div')
    noti.classList.add('toast')

    noti.innerText = getRamdomMessage()
    console.log(noti)
    toasts.appendChild(noti)
}
function getRamdomMessage(){
    return messages[Math.floor(Math.random() * messages.length)]
}