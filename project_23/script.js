const header = document.getElementById('header')
const title = document.getElementById('title')
const excerpt = document.getElementById('excerpt')
const profile_img = document.getElementById('profile_img')
const name = document.getElementById('name')
const date = document.getElementById('date')

const animated_bgs = document.getElementById('.animated-bg')
const animated_bg_texts = document.getElementById('.animated-bg-text')


setTimeout(getData, 1000)

function getData() {
    header.innerHTML = '<img src="https://hoanghamobile.com/tin-tuc/wp-content/uploads/2023/07/anh-dep-thien-nhien-2-1.jpg" alt="">'
    title.innerHTML = 'asdasd asd'
    excerpt.innerHTML = 'asdas dsfnj'
    profile_img.innerHTML = '<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsLcIDvnYC4pdxaqDE1CB2Mv2vK_-fManhMQ&s" alt="">'
    name.innerHTML = 'joe'
    date.innerHTML = 'asdwsd'
    animated_bgs.forEach(bg => bg.classList.remove('animated-bg'))
    animated_bg_texts.forEach(bg => bg.classList.remove('animated-bg-text'))
}