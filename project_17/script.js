const API_URL = 'https://imdb-top-100-movies.p.rapidapi.com';

const form = document.getElementById('form')
const search = document.getElementById('search')
const main = document.getElementById('main')

getMovies(API_URL);
async function getMovies(url) {
    const rest = await fetch(url, {
        headers: {
            "x-rapidapi-host": "imdb-top-100-movies.p.rapidapi.com",
            "x-rapidapi-key": "fcb68c6abdmshc9681d5b63285d8p16d357jsn5d0652913b56"
        }
    }
    );
    const data = await rest.json()
    console.log(data)
    showMovie(data)
}

function showMovie(movies) {
    main.innerHTML = '';
    movies.forEach(element => {
        const {title, image, rating, description} = element;
        const movieEL = document.createElement('div')
        movieEL.classList.add('movie')
        movieEL.innerHTML = `

            <img src="${image}" alt="">
            <div class="movie-info">
                <h3>${title}</h3>
                <span class="${getClassRate(rating)}">${rating}</span>
            </div>
            <div class="overview">
                <h3>Overview</h3>
                ${description}
                </div>
    
        `
        main.appendChild(movieEL)

    });
}

function getClassRate(rating) {
    if(rating > 9) {
        return "green"
    } else if (rating <= 6){
        return 'red'
    } else {
        return 'yellow'
    }
}

form.addEventListener('submit', (e) => {
    e.preventDefault()
    const searchTerm = search.value
    if(searchTerm && searchTerm !== ''){
        console.log('search API but i am not search it')
        search.value = ''
    } else {
        window.location.reload()
    }
})