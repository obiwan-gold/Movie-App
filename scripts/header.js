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
  try {
    const response = await fetch(`${URL}`);
    const data = await response.json();
    // Unsure what data.Response is doing here
    if (data.Response === "True") {
      displayMovie(data.Search);
    }
  } catch (error) {
    console.log(error)
  }
}


// Event listener for onclick & onkeyup

window.addEventListener('click', (event) => {
  if (event.target.className != "search-bar-visibility") {
    searchList.classList.add('hide-search-list');
  }
});



// Function that takes in json data from line 11
function displayMovie(movies) {

  searchList.innerHTML = "";

  for (let i = 0; i < movies.length; i++) {
    // Creating a row that contains movie item title and image
    let movieItem = document.createElement('div');

    movieItem.dataset.id = movies[i].imdbID; // 
    movieItem.classList.add('search-list-item');

    searchList.appendChild(movieItem)
  }
  // loadMovieDetails();
}
