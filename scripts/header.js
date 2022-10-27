// Input Field
const searchField = document.getElementById('search-bar')
// Drop Down List
const searchList = document.getElementById('search-list');

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

  searchList.innerHTML ="";
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
    movieRating.innerText = movies[i].Rating;
    movieYear.innerText = movies[i].Year;

    movieRow.append(movieThumbnail, movieName, movieRating, movieYear);
    
    searchList.appendChild(movieRow)
  }
}



// Event listener for onclick & onkeyup

window.addEventListener('click', (event) => {
  if (event.target.className != "search-bar-visibility") {
    searchList.classList.add('hide-search-list');
  }
});
