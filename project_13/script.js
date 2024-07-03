const tagsEl = document.getElementById('tags')
const textArea = document.getElementById('textarea')
textArea.focus();
textArea.addEventListener('keyup', (e) => {
    createTags(e.target.value)

    if (e.key == 'Enter') {
        setTimeout(() => {
            e.target.value = ""
        }, 10)
        randomSelect();
    }
})

function createTags(input) {
    const tags = input.split(',').filter(tag => tag.trim())
        .map(tag => tag.trim())
    tagsEl.innerHTML = '';

    tags.forEach(element => {
        const tagHTML = document.createElement('span')
        tagHTML.classList.add('tag')
        tagHTML.innerText = element;
        tagsEl.appendChild(tagHTML)
    });
}

function randomSelect() {
    const times = 30
    const interval = setInterval(() => {
        const randomTag = pickRandom()
        highLightTag(randomTag)
        setTimeout(() => {
            unHighLightTag(randomTag)
        }, 100)
    }, 100)

    
    setTimeout(() => {
        clearInterval(interval)
        setTimeout(() => {
            const randomTag = pickRandom()
            highLightTag(randomTag)
            console.log("selection Random");
        })
    }, times * 100)
};
function pickRandom() {
    const tags = document.querySelectorAll('.tag')
    const result = tags[Math.floor(Math.random() * tags.length)];
    return result;
}
function highLightTag(tag) {
    tag.classList.add('hightLight')
}
function unHighLightTag(tag) {
    tag.classList.remove('hightLight')
}