const jokeEL = document.getElementById('joke')
const  jokeBtn = document.getElementById('jokeBtn')


jokeBtn.addEventListener('click', () => {
    generateJoke();
    console.log('click')
})
generateJoke()

async function  generateJoke() {


    const  config = {
        headers: {
            Accept: 'application/json'
        }
    }
    // c1
    // fetch("https://icanhazdadjoke.com", config)
    // .then((res) => res.json())
    // .then((data) =>  {
    //     jokeEL.innerHTML = data.joke
    // })

    // c2
    const res = await fetch("https://icanhazdadjoke.com", config);
    const data = await res.json()
    jokeEL.innerHTML = data.joke

}