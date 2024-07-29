const APIURL = 'https://api.github.com/users/'

const form = document.getElementById('form')
const search = document.getElementById('search')
const main = document.getElementById('main')

//bradtraversy
async function getUser(name) {
    try {
        const res = await axios(APIURL + name);
        console.log(res)
        creatUser(res.data)

    } catch (err) {
        creatErrorCard("not found person")
    }

}

form.addEventListener('submit', (e) => {
    e.preventDefault()
    const user = search.value
    if (user) {
        getUser(user)
        search.value = ''
    } else {
        creatErrorCard(msg);
    }
})
function creatErrorCard(msg) {
    main.innerHTML = `<div class='card'> <h1> ${msg} </h1> </div>`;
}

function creatUser(user) {
    console.log(user.avatar_url, user.name, user.bio)

    const cardHTML = `<div class="card">
            <img  style="display: ${user.avatar_url ? 'block' : 'none'}" src=${user.avatar_url} alt="${user.name}" class="avatar">
        </div>
        <div class="user-info">
            <h2>${user.name}</h2>
            <p>${user.bio}</p>
            <ul>
                <li>${user.followers} <strong>Fllowers</strong></li>
                <li>${user.following} <strong>Following</strong></li>
                <li>${user.public_repos} <strong>Repos</strong></li>
            </ul>

            <div id="repos">
                <a href="#" class="repo">${user.public_repos}</a>
                <a href="#" class="repo">${user.public_gists}</a>
                <a href="#" class="repo">${user.public_gists}</a>
            </div>
        </div>`

    main.innerHTML = cardHTML;
}