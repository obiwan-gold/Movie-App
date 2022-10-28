// Input Field
const searchField = document.getElementById('search-bar')
// Drop Down List
const searchList = document.getElementById('search-list');
// section in main which will be the movie card
const card = document.getElementById('movie-card')

// Function called on key & click
function findMovies() {
  let searchInput = (searchField.value).trim();
  if (searchInput.length > 0) {
    searchList.classList.remove('hide-search-list');
    searchBar(searchInput);
  } else {
    searchList.classList.add('hide-search-list');
  }
}

// Load movies from API
async function searchBar(searchInput) {
  // searchTerm is typed in parameters
  const URL = `https://omdbapi.com/?s=${searchInput}&page=1&apikey=fc1fef96`;
  const response = await fetch(`${URL}`);
  const data = await response.json();
  // Unsure what data.Response is doing here
  console.log(data.Search)
  if (data.Response === "True") dropDown(data.Search);
}


//function which renders the searchlist:
function dropDown(movies) {
  //movies is an object of objects

  searchList.innerHTML = "";
  for (let i = 0; i < movies.length; i++) {
    //movieRow, parent element, is a row of the searchlist, 
    //containing some details about each film
    let movieRow = document.createElement('div')

    movieRow.dataset.id = movies[i].imdbID
    //
    movieRow.classList.add('movie-row');

    // if (movies[i].Poster != "N/A"){
    //   let moviePoster = movies[i].Poster;

    // } else {
    //   let moviePoster = 'No image available.';
    // }

    let movieThumbnail = document.createElement('img');
    movieThumbnail.src = movies[i].Poster;
    movieThumbnail.alt = `Poster for ${movies[i].Title}`




    let movieName = document.createElement('h4');
    let movieRating = document.createElement('p');
    let movieYear = document.createElement('p');


    movieName.innerText = movies[i].Title;
    console.log(movies[i].rated)
    movieRating.innerText = movies[i].Rated;
    movieYear.innerText = movies[i].Year;

    movieRow.append(movieThumbnail, movieName, movieRating, movieYear);
    searchList.appendChild(movieRow)
  }

  loadMovieDetails();
}


function loadMovieDetails() {
  const searchListMovies = searchList.querySelectorAll('.movie-row');
  searchListMovies.forEach(movie => {
    movie.addEventListener('click', async () => {
      // console.log(movie.dataset.id);
      searchList.classList.add('hide-search-list');
      searchField.value = "";
      card.innerText = "";
      const result = await fetch(`http://www.omdbapi.com/?i=${movie.dataset.id}&apikey=fc1fef96`);
      const movieDetails = await result.json();
      // console.log(movieDetails);
      displayMovieDetails(movieDetails);
    });
  });
}


function displayMovieDetails(movieDetails) {


  if (movieDetails.Poster != 'N/A') {
    let moviePoster = document.createElement('img');
    moviePoster.src = movieDetails.Poster;
    moviePoster.alt = "Movie Poster"
    card.append(moviePoster)
  }

  const movieTitle = document.createElement('h3');
  movieTitle.setAttribute('id', 'main-movie-title');
  movieTitle.innerText = movieDetails.Title;

  const movieYear = document.createElement('span');
  movieYear.setAttribute('id', 'main-movie-year');
  movieYear.innerText = movieDetails.Year;

  const movieGenre = document.createElement('span');
  movieGenre.setAttribute('id', 'main-movie-genre');
  movieGenre.innerText = movieDetails.Genre;

  const movieActors = document.createElement('span');
  movieActors.setAttribute('id', 'main-movie-actors');
  movieActors.innerText = `Starring: ${movieDetails.Actors}`;

  const movieWriter = document.createElement('span');
  movieWriter.setAttribute('id', 'main-movie-writer');
  movieWriter.innerText = `Written By: ${movieDetails.Writer}`;

  const moviePlot = document.createElement('p');
  moviePlot.setAttribute('id', 'main-movie-plot');
  moviePlot.innerText = movieDetails.Plot;

  const movieLanguage = document.createElement('span');
  movieLanguage.setAttribute('id', 'main-movie-language');
  movieLanguage.innerText = movieDetails.Language;

  const movieAwards = document.createElement('span');
  movieAwards.setAttribute('id', 'main-movie-awards');
  movieAwards.innerText = movieDetails.Awards;

  card.append(movieTitle, movieYear, movieGenre, movieActors, movieWriter, moviePlot, movieLanguage, movieAwards);
}



// Event listener for onclick & onkeyup

window.addEventListener('click', (event) => {
  if (event.target.className != "hide") {
    searchList.classList.add('hide-search-list');
  }
});
