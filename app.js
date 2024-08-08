
//now show the data in the frontend

const searchBox = document.querySelector(".search-box");
const searchBtn = document.querySelector(".search-btn");


const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzM2IzMzNkZjA0MjYwNDAwY2E5MDM0OWRmODIzOWQwNSIsIm5iZiI6MTcyMjk5OTE1MS45OTA2NzIsInN1YiI6IjY2YjJkZjIwOTNlZTc4MTk4YTdiODljOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.GOcp4WAdHROh2rt1ZereLPaZZ0db-RMCwlSgDp8dklU'
    }
};

const BaseUrl = "https://image.tmdb.org/t/p/w500";

const movieContainer = document.querySelector(".results");
const movieList = async () => {
    const response = await fetch("https://api.themoviedb.org/3/movie/popular?language=en-US&page=1,options", options)

    const data = await response.json();
    console.log(data.results);

    data.results.forEach(movie => {

        const movieData = document.createElement('div');
        movieContainer.classList.add('.movie-list');

        movieData.innerHTML = `
           
           <div class="movie">
    
               <img src="${BaseUrl + movie.poster_path}">
                <div class="movie-info">
                    <h3>Movie Title:${movie.title}</h3>
                    <span>Year:${movie.release_date}</span>
                    <p><span>Description:</span>${movie.overview} </p>
                </div>

                `
        movieContainer.appendChild(movieData);
    }
    )
}

movieList()

searchBtn.addEventListener('click', async () => {
    const searchValue = searchBox.value;
    const response = await fetch(`https://api.themoviedb.org/3/search/movie?query=${searchValue}&api_key
    =33b333df04260400ca90349df8239d05`, options)
    const data = await response.json();
    console.log(data.results);

    movieContainer.innerHTML = "";

    data.results.forEach(movie => {
        const movieData = document.createElement('div');
        movieData.classList.add('.movie-list');

        movieData.innerHTML = `
           
           <div class="movie">
    
               <img src="${BaseUrl + movie.poster_path}">
                <div class="movie-info
                ">
                    <h3>Movie Title:${movie.title}</h3>
                    <span>Year:${movie.release_date}</span>
                    <p>Description:${movie.overview} </p>
                </div>
                    
                    `
        movieContainer.appendChild(movieData);
    }
    )
}
)

